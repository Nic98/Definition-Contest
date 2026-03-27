// ================================================================
// DEFINITION CONTEST — Supabase Client & Helpers
// Requires: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// ================================================================

const SUPABASE_URL = 'https://swenhpdiinllwhycaydn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_AxyJs-jQ0bfLndf_622emw_AVT5lAc9';

let _sbClient = null;
function getDB() {
  if (!_sbClient) _sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return _sbClient;
}

// ── Row converters ────────────────────────────────────────────────

function rowToQ(row) {
  const q = {
    id:     row.id,
    qNum:   row.q_num,
    type:   row.type,
    stem:   row.stem,
    answer: row.answer
  };
  if (row.option_a) q.optionA = row.option_a;
  if (row.option_b) q.optionB = row.option_b;
  if (row.option_c) q.optionC = row.option_c;
  if (row.option_d) q.optionD = row.option_d;
  if (row.image_key) q.imageKey = row.image_key;
  return q;
}

function qToRow(subjectKey, q) {
  return {
    subject_key: subjectKey,
    type:        q.type,
    q_num:       q.qNum   || null,
    stem:        q.stem,
    answer:      q.answer,
    option_a:    q.optionA || null,
    option_b:    q.optionB || null,
    option_c:    q.optionC || null,
    option_d:    q.optionD || null,
    image_key:   q.imageKey || null
  };
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

// Fetch questions for one subject (cached per session)
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

// Fetch all questions grouped by subject_key (cached per session)
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

// Bulk insert for migration (in chunks of 200)
async function dbBulkInsert(rows) {
  const CHUNK = 200;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const { error } = await getDB().from('questions').insert(rows.slice(i, i + CHUNK));
    if (error) throw error;
  }
  dbClearCache();
}
