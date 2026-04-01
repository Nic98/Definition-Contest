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

// Clear any old localStorage cache entries from previous versions
(function _purgeLegacyCache() {
  try {
    Object.keys(localStorage)
      .filter(k => k.startsWith('dc_sq_'))
      .forEach(k => localStorage.removeItem(k));
  } catch(e) {}
})();

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
//
// Strategy: every new page load (including refresh) always fetches
// fresh from Supabase. Within the SAME page session, subsequent
// fetches of the same key use an in-memory cache so mid-game
// navigation stays instant.
//
// This guarantees other devices always see the latest data after
// refresh, while avoiding redundant network requests during a game.

// In-memory cache: cleared automatically on every page reload
const _memCache = {};

// Tracks which keys have already been fetched this session
const _sessionFetched = new Set();

function _cacheGet(key) {
  if (!_sessionFetched.has(key)) return null; // first load this session → bypass
  return _memCache[key] ?? null;
}
function _cacheSet(key, val) {
  _memCache[key] = val;
  _sessionFetched.add(key);
}
function dbClearCache() {
  // Clear in-memory cache on admin writes (affects current device immediately)
  Object.keys(_memCache).forEach(k => delete _memCache[k]);
  _sessionFetched.clear();
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
  if (typeof IMAGE_MAP === 'undefined') return null;

  let qNum = q.qNum;

  // If qNum was nulled out by a previous admin edit, recover it from local
  // QUESTIONS by matching on stem text.
  if (!qNum && typeof QUESTIONS !== 'undefined' && QUESTIONS[subjectKey]) {
    const match = QUESTIONS[subjectKey].find(lq => lq.stem === q.stem);
    if (match) qNum = match.qNum;
  }

  if (qNum) {
    const file = IMAGE_MAP[subjectKey + '_' + qNum];
    if (file) return '../image/' + file;
  }
  return null;
}
