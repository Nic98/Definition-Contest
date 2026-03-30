// ================================================================
// DEFINITION CONTEST — Supabase Client & Helpers
// Requires: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// ================================================================

const SUPABASE_URL = 'https://swenhpdiinllwhycaydn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_AxyJs-jQ0bfLndf_622emw_AVT5lAc9';
const IMAGE_BUCKET = 'question-images';

let _sbClient = null;
function getDB() {
  if (!_sbClient) _sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return _sbClient;
}

// ── Row converters ────────────────────────────────────────────────

function rowToQ(row) {
  const q = {
    id:       row.id,
    qNum:     row.q_num,
    type:     row.type,
    stem:     row.stem,
    answer:   row.answer,
    imageUrl: row.image_url || null
  };
  if (row.option_a) q.optionA = row.option_a;
  if (row.option_b) q.optionB = row.option_b;
  if (row.option_c) q.optionC = row.option_c;
  if (row.option_d) q.optionD = row.option_d;
  if (row.image_key) q.imageKey = row.image_key;
  return q;
}

function qToRow(subjectKey, q) {
  const row = {
    subject_key: subjectKey,
    type:        q.type,
    q_num:       q.qNum    || null,
    stem:        q.stem,
    answer:      q.answer,
    option_a:    q.optionA || null,
    option_b:    q.optionB || null,
    option_c:    q.optionC || null,
    option_d:    q.optionD || null,
    image_key:   q.imageKey  || null,
  };
  // Only include image_url when it has a value — avoids schema errors
  // if the column hasn't been added to the DB yet.
  if (q.imageUrl) row.image_url = q.imageUrl;
  return row;
}

// ── Cache helpers ─────────────────────────────────────────────────

function _cacheGet(key) {
  try { const v = sessionStorage.getItem(key); return v ? JSON.parse(v) : null; } catch(e) { return null; }
}
function _cacheSet(key, val) {
  try { sessionStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
}
function dbClearCache() {
  try {
    Object.keys(sessionStorage)
      .filter(k => k.startsWith('dc_sq_'))
      .forEach(k => sessionStorage.removeItem(k));
  } catch(e) {}
}

// ── Read ──────────────────────────────────────────────────────────

async function dbFetchSubject(subjectKey) {
  const cacheKey = 'dc_sq_' + subjectKey;
  const cached = _cacheGet(cacheKey);
  if (cached) return cached;

  const { data, error } = await getDB()
    .from('questions')
    .select('*')
    .eq('subject_key', subjectKey)
    .order('q_num');
  if (error) throw error;

  const result = data.map(rowToQ);
  _cacheSet(cacheKey, result);
  return result;
}

async function dbFetchAll() {
  const cacheKey = 'dc_sq_all';
  const cached = _cacheGet(cacheKey);
  if (cached) return cached;

  const { data, error } = await getDB()
    .from('questions')
    .select('*')
    .order('subject_key, q_num');
  if (error) throw error;

  const grouped = {};
  data.forEach(row => {
    if (!grouped[row.subject_key]) grouped[row.subject_key] = [];
    grouped[row.subject_key].push(rowToQ(row));
  });

  _cacheSet(cacheKey, grouped);
  return grouped;
}

// ── Write ─────────────────────────────────────────────────────────

async function dbAdd(subjectKey, q) {
  const { data, error } = await getDB()
    .from('questions')
    .insert([qToRow(subjectKey, q)])
    .select()
    .single();
  if (error) throw error;
  dbClearCache();
  return rowToQ(data);
}

async function dbUpdate(id, subjectKey, q) {
  const { error } = await getDB()
    .from('questions')
    .update(qToRow(subjectKey, q))
    .eq('id', id);
  if (error) throw error;
  dbClearCache();
}

async function dbDelete(id) {
  const { error } = await getDB()
    .from('questions')
    .delete()
    .eq('id', id);
  if (error) throw error;
  dbClearCache();
}

async function dbBulkInsert(rows) {
  const CHUNK = 200;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const { error } = await getDB().from('questions').insert(rows.slice(i, i + CHUNK));
    if (error) throw error;
  }
  dbClearCache();
}

// ── Image upload ──────────────────────────────────────────────────

// Upload a File object to Supabase Storage, returns public URL
async function uploadImage(file, subjectKey) {
  const ext  = file.name.split('.').pop().toLowerCase();
  const path = subjectKey + '/' + Date.now() + '.' + ext;

  const { error: upErr } = await getDB()
    .storage
    .from(IMAGE_BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });
  if (upErr) throw upErr;

  const { data } = getDB()
    .storage
    .from(IMAGE_BUCKET)
    .getPublicUrl(path);

  return data.publicUrl;
}

// ── Image src helper (used by game pages) ────────────────────────
// Returns the best image src for a question, or null if none.
function getImageSrc(q, subjectKey) {
  if (q.imageUrl) return q.imageUrl;
  if (typeof IMAGE_MAP !== 'undefined') {
    const file = IMAGE_MAP[subjectKey + '_' + q.qNum];
    if (file) return '../image/' + file;
  }
  return null;
}
