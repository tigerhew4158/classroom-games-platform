
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const ALL_GAME_IDS = [
  'memory_match','true_false','sentence_order','treasure_box','lucky_wheel','classification_conveyor',
  'platform_quiz','monster_defense','whack_mole','text_match','bomb_quiz','knowledge_race',
  'dungeon_dragon_raid','picture_word_guess','image_puzzle_speed_race','two_team_puzzle_duel',
  'island_conquest','timeline_sort_challenge','image_label_match','team_relay_quiz',
  'find_difference','keyword_beachhead','kingdom_resource_battle','spot_diff_v2'
];
const BASE_FREE_GAMES = ['memory_match','true_false'];

function jsonResponse(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}
async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}
function requireSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in Vercel Environment Variables');
}
function headers(extra = {}) {
  return { apikey: SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`, ...extra };
}
function normalizeEmail(email) { return String(email || '').trim().toLowerCase(); }
function defaultUsers() {
  return [
    {id:'u_admin',email:'admin@lead.ai',username:'admin@lead.ai',password:'admin123',name:'系統管理員',role:'admin',accountStatus:'approved',disabled:false,ownedGames:ALL_GAME_IDS,promoGift:[],package:'all_access',profileCompleted:true,profile:{email:'admin@lead.ai',phone:'',chineseName:'系統管理員',englishName:'Admin',state:'Johor',orgTypes:['其他']}},
    {id:'u_teacher',email:'teacher@example.com',username:'teacher@example.com',password:'123456',name:'示範老師',role:'user',accountStatus:'approved',disabled:false,ownedGames:[],promoGift:BASE_FREE_GAMES,package:'free',profileCompleted:true,profile:{email:'teacher@example.com',phone:'',chineseName:'示範老師',englishName:'Demo Teacher',state:'Johor',orgTypes:['學校老師']}}
  ];
}
function toRow(u) {
  const email = normalizeEmail(u.email || u.username);
  return {id:u.id || `u_${Date.now()}`, email, username:email, password:String(u.password || '123456'), name:String(u.name || email), role:u.role || 'user', account_status:u.accountStatus || u.account_status || 'pending', disabled:!!u.disabled, owned_games:Array.isArray(u.ownedGames)?u.ownedGames:(Array.isArray(u.owned_games)?u.owned_games:[]), promo_gift:Array.isArray(u.promoGift)?u.promoGift:(Array.isArray(u.promo_gift)?u.promo_gift:[]), package:u.package || 'free', profile_completed:!!(u.profileCompleted ?? u.profile_completed), profile:u.profile || {}, raw:u};
}
function fromRow(r) {
  return {id:r.id,email:r.email,username:r.username || r.email,password:r.password || '',name:r.name || r.email,role:r.role || 'user',accountStatus:r.account_status || 'pending',disabled:!!r.disabled,ownedGames:Array.isArray(r.owned_games)?r.owned_games:[],promoGift:Array.isArray(r.promo_gift)?r.promo_gift:[],package:r.package || 'free',profileCompleted:!!r.profile_completed,profile:r.profile || {}};
}
async function supabaseGet(path) { const response = await fetch(`${SUPABASE_URL}${path}`, {headers:headers()}); if(!response.ok) throw new Error(await response.text()); return response.json(); }
async function supabasePost(path, body, prefer='return=representation') { const response = await fetch(`${SUPABASE_URL}${path}`, {method:'POST', headers:headers({'Content-Type':'application/json', Prefer:prefer}), body:JSON.stringify(body)}); if(!response.ok) throw new Error(await response.text()); return response.status===204?null:response.json(); }
async function supabasePatch(path, body, prefer='return=representation') { const response = await fetch(`${SUPABASE_URL}${path}`, {method:'PATCH', headers:headers({'Content-Type':'application/json', Prefer:prefer}), body:JSON.stringify(body)}); if(!response.ok) throw new Error(await response.text()); return response.status===204?null:response.json(); }
async function supabaseDelete(path) { const response = await fetch(`${SUPABASE_URL}${path}`, {method:'DELETE', headers:headers({Prefer:'return=representation'})}); if(!response.ok) throw new Error(await response.text()); return response.json(); }
async function listRows() { return await supabaseGet('/rest/v1/platform_users?select=*&order=created_at.asc') || []; }
async function findByEmail(email) { const rows = await supabaseGet(`/rest/v1/platform_users?select=*&email=eq.${encodeURIComponent(normalizeEmail(email))}&limit=1`); return rows && rows[0] ? rows[0] : null; }
async function findById(id) { const rows = await supabaseGet(`/rest/v1/platform_users?select=*&id=eq.${encodeURIComponent(id)}&limit=1`); return rows && rows[0] ? rows[0] : null; }
async function insertUser(u) { const rows = await supabasePost('/rest/v1/platform_users', toRow(u)); return rows && rows[0] ? rows[0] : null; }
async function updateUser(id, patch) { const rows = await supabasePatch(`/rest/v1/platform_users?id=eq.${encodeURIComponent(id)}`, patch); return rows && rows[0] ? rows[0] : null; }
async function deleteUser(id) { return supabaseDelete(`/rest/v1/platform_users?id=eq.${encodeURIComponent(id)}&role=neq.admin`); }
async function ensureDefaultUsers() {
  for(const u of defaultUsers()){
    const existing = await findByEmail(u.email);
    if(!existing) await insertUser(u);
    else if(u.role === 'admin') await updateUser(existing.id, {role:'admin', account_status:'approved', disabled:false, package:'all_access', owned_games:ALL_GAME_IDS});
  }
}
async function migrateLocalUsers(localUsers = []) {
  if(!Array.isArray(localUsers)) return;
  for(const u of localUsers){
    const email = normalizeEmail(u && (u.email || u.username));
    if(!email || email === 'admin@lead.ai' || email === 'teacher@example.com') continue;
    if(u.role === 'admin') continue;
    const existing = await findByEmail(email);
    if(!existing){
      await insertUser({...u, email, username: email});
    }
  }
}
async function requireAdmin(body) {
  const email = normalizeEmail(body.adminEmail || body.email);
  const password = String(body.adminPassword || body.password || '');
  if(!email || !password) throw new Error('Missing admin credentials');
  const row = await findByEmail(email);
  if(!row || row.role !== 'admin' || row.password !== password || row.disabled) throw new Error('Unauthorized admin');
  return row;
}
async function returnUsers(){ return (await listRows()).map(fromRow); }

module.exports = async function handler(req, res) {
  if(req.method === 'OPTIONS') return jsonResponse(res, 200, {ok:true});
  if(req.method !== 'POST') return jsonResponse(res, 405, {ok:false,error:'Method not allowed'});
  try{
    requireSupabase();
    const body = await readJsonBody(req);
    const action = body.action || '';
    await ensureDefaultUsers();

    if(action === 'login'){
      const email = normalizeEmail(body.email); const password = String(body.password || '').trim();
      const row = await findByEmail(email);
      if(!row || String(row.password || '').trim() !== password) return jsonResponse(res, 200, {ok:false,msg:'电邮或密码不正确。'});
      if(row.disabled) return jsonResponse(res, 200, {ok:false,msg:'账号已被停用，请联系管理员。'});
      if(row.account_status !== 'approved') return jsonResponse(res, 200, {ok:false,msg:'账号申请已送出，请等待管理员批准。'});
      const user = fromRow(row); const payload = {ok:true,user};
      if(user.role === 'admin') {
        await migrateLocalUsers(body.localUsers);
        payload.users = await returnUsers();
      }
      return jsonResponse(res, 200, payload);
    }

    if(action === 'register'){
      const email = normalizeEmail(body.email); const name = String(body.name || '').trim(); const phone = String(body.phone || '').trim(); const password = String(body.password || '').trim();
      if(!name || !email || !phone || !password) return jsonResponse(res, 200, {ok:false,msg:'请填写完整资料。'});
      if(password.length < 6) return jsonResponse(res, 200, {ok:false,msg:'登录密码至少需要 6 个字符。'});
      if(await findByEmail(email)) return jsonResponse(res, 200, {ok:false,msg:'这个电邮已经申请过账号。'});
      await insertUser({id:`u_${Date.now()}`,email,username:email,password,name,role:'user',accountStatus:'pending',disabled:false,ownedGames:[],promoGift:BASE_FREE_GAMES,package:'free',profileCompleted:false,profile:{email,phone,chineseName:name,englishName:'',state:'Johor',orgTypes:[]}});
      return jsonResponse(res, 200, {ok:true,msg:'申请已送出，请等待管理员批准。'});
    }

    if(action === 'list') { await requireAdmin(body); return jsonResponse(res, 200, {ok:true, users:await returnUsers()}); }

    if(action === 'add'){
      await requireAdmin(body);
      const email = normalizeEmail(body.email); if(await findByEmail(email)) return jsonResponse(res, 200, {ok:false,msg:'这个电邮已经存在。'});
      const pkg = body.package || 'free';
      await insertUser({id:`u_${Date.now()}`, email, username:email, password:String(body.password || '123456'), name:String(body.name || email), role:'user', accountStatus:'approved', disabled:false, ownedGames:pkg==='all_access'?ALL_GAME_IDS:[], promoGift:BASE_FREE_GAMES, package:pkg, profileCompleted:true, profile:{email, phone:body.phone || '', chineseName:body.name || '', englishName:'', state:'Johor', orgTypes:['学校老师']}});
      return jsonResponse(res, 200, {ok:true, users:await returnUsers()});
    }

    if(['update','approve','toggleDisabled','resetPassword','delete'].includes(action)){
      await requireAdmin(body);
      const id = String(body.userId || body.id || ''); if(!id) return jsonResponse(res, 400, {ok:false,msg:'Missing user id'});
      const row = await findById(id); if(!row) return jsonResponse(res, 404, {ok:false,msg:'User not found'});
      if(action === 'delete'){
        if(row.role === 'admin') return jsonResponse(res, 200, {ok:false,msg:'不能删除管理员账号。'});
        await deleteUser(id); return jsonResponse(res, 200, {ok:true, users:await returnUsers()});
      }
      if(action === 'approve') { await updateUser(id, {account_status:'approved', disabled:false, promo_gift:BASE_FREE_GAMES}); return jsonResponse(res, 200, {ok:true, users:await returnUsers()}); }
      if(action === 'toggleDisabled') { await updateUser(id, {disabled:!row.disabled}); return jsonResponse(res, 200, {ok:true, users:await returnUsers()}); }
      if(action === 'resetPassword') { await updateUser(id, {password:String(body.newPassword || '123456')}); return jsonResponse(res, 200, {ok:true, users:await returnUsers()}); }
      const patch = {};
      if('package' in body) patch.package = String(body.package || 'free');
      if('ownedGames' in body) patch.owned_games = Array.isArray(body.ownedGames) ? body.ownedGames : [];
      if('accountStatus' in body) patch.account_status = String(body.accountStatus || 'approved');
      if('disabled' in body) patch.disabled = !!body.disabled;
      await updateUser(id, patch);
      return jsonResponse(res, 200, {ok:true, users:await returnUsers()});
    }

    if(action === 'profile'){
      const email = normalizeEmail(body.email); const password = String(body.password || '').trim();
      const row = await findByEmail(email);
      if(!row || row.password !== password) return jsonResponse(res, 200, {ok:false,msg:'Unauthorized'});
      await updateUser(row.id, {name:body.profile?.chineseName || body.profile?.englishName || row.name, profile:body.profile || {}, profile_completed:!!body.profileCompleted, owned_games:Array.isArray(body.ownedGames)?body.ownedGames:(row.owned_games || [])});
      return jsonResponse(res, 200, {ok:true,user:fromRow(await findById(row.id))});
    }

    return jsonResponse(res, 400, {ok:false,error:'Unknown action'});
  }catch(error){
    console.error(error);
    return jsonResponse(res, 500, {ok:false,error:error.message || 'Server error'});
  }
};
