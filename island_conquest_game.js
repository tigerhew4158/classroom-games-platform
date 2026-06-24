
const I18N={
 zh:{
  title:"孤岛抢夺赛",subtitle:"A 队与 B 队在海上抢占六边形岛屿，先取得指定数量目标区者获胜。",
  setup:"设置题库",fullscreen:"全屏",restart:"重开",setupTitle:"孤岛抢夺赛｜老师设置",
  setupHelp:"老师可设定胜利条件、起点位置、回合数、答错规则与题库。游戏会随机生成 1–2 条海草障碍，队伍必须绕路抢占中间目标区。",
  nameA:"A 队名称",nameB:"B 队名称",start:"开始游戏",sample:"载入示范题库",ruleTitle:"玩法说明",
  ruleText:"轮到该队时，点击绿色发光的六边形土地，系统会随机抽题。答对就占领土地并插旗；答错则依老师设定处理。海草是障碍，不能通过。达到目标区占领条件即可获胜。",
  option:"可抢占土地",target:"目标区",weed:"海草障碍",turn:"轮到",hint:"请选择自己土地旁边的绿色六边形方向进行抢攻。",skip:"跳过",logTitle:"战况记录",
  correct:"答对！成功占领新土地。",wrong:"答错，正确答案是",neutral:"该土地变回中立。",teamA:"红队",teamB:"蓝队",questionFor:"抢占土地题",
  win:"获胜！",winDesc:"成功取得足够的中间目标区。",again:"再玩一次",qph:"题目格式：题目 | 答案 | 选项1,选项2,选项3,选项4",
  startLog:"比赛开始！海草障碍已经出现。",round:"回合",maxRound:"回合数已到，系统按目标区数量与土地数判定胜负。",draw:"平手！",
  progress:"目标区",occupied:"已占领"
 },
 en:{
  title:"Island Conquest",subtitle:"Team A and Team B capture hex islands over the sea. Control the required center targets to win.",
  setup:"Question settings",fullscreen:"Fullscreen",restart:"Restart",setupTitle:"Island Conquest | Teacher Settings",
  setupHelp:"Teachers can set win condition, starting positions, round limit, wrong-answer rule and question bank. The game randomly creates 1–2 seaweed barriers, so teams must go around them.",
  nameA:"Team A name",nameB:"Team B name",start:"Start game",sample:"Load sample questions",ruleTitle:"How to play",
  ruleText:"On your turn, click a glowing green hex next to your land. A random question appears. Answer correctly to capture and raise a flag. Wrong answers follow the teacher setting. Seaweed blocks cannot be crossed. Control enough center targets to win.",
  option:"Claimable land",target:"Target zone",weed:"Seaweed block",turn:"Turn",hint:"Choose a glowing green hex next to your land to attack.",skip:"Skip",logTitle:"Battle log",
  correct:"Correct! New land captured.",wrong:"Incorrect. Correct answer:",neutral:"The land becomes neutral.",teamA:"Red Team",teamB:"Blue Team",questionFor:"Land capture question",
  win:"wins!",winDesc:"controlled enough center target tiles.",again:"Play again",qph:"Format: Question | Answer | Option 1,Option 2,Option 3,Option 4",
  startLog:"Battle starts! Seaweed barriers have appeared.",round:"Round",maxRound:"Round limit reached. Winner is decided by target tiles and land count.",draw:"Draw!",
  progress:"Targets",occupied:"Captured"
 },
 ms:{
  title:"Perebutan Pulau",subtitle:"Pasukan A dan B merebut pulau heksagon di laut. Kuasai sasaran tengah yang diperlukan untuk menang.",
  setup:"Tetapan soalan",fullscreen:"Skrin penuh",restart:"Mula semula",setupTitle:"Perebutan Pulau | Tetapan Guru",
  setupHelp:"Guru boleh menetapkan syarat menang, kedudukan mula, had pusingan, peraturan jawapan salah dan bank soalan. Permainan menjana 1–2 halangan rumpai laut secara rawak.",
  nameA:"Nama Pasukan A",nameB:"Nama Pasukan B",start:"Mula permainan",sample:"Muat soalan contoh",ruleTitle:"Cara bermain",
  ruleText:"Apabila giliran pasukan, klik heksagon hijau di sebelah tanah sendiri. Soalan rawak akan muncul. Jawab betul untuk menawan tanah dan menaikkan bendera. Jawapan salah ikut tetapan guru. Rumpai laut ialah halangan. Kuasai sasaran tengah yang cukup untuk menang.",
  option:"Tanah boleh direbut",target:"Zon sasaran",weed:"Halangan rumpai laut",turn:"Giliran",hint:"Pilih heksagon hijau di sebelah tanah sendiri untuk menyerang.",skip:"Langkau",logTitle:"Rekod pertempuran",
  correct:"Betul! Tanah baharu berjaya ditawan.",wrong:"Salah. Jawapan betul:",neutral:"Tanah menjadi neutral.",teamA:"Pasukan Merah",teamB:"Pasukan Biru",questionFor:"Soalan rebut tanah",
  win:"menang!",winDesc:"menguasai sasaran tengah yang mencukupi.",again:"Main lagi",qph:"Format: Soalan | Jawapan | Pilihan 1,Pilihan 2,Pilihan 3,Pilihan 4",
  startLog:"Pertandingan bermula! Halangan rumpai laut telah muncul.",round:"Pusingan",maxRound:"Had pusingan tamat. Pemenang ditentukan melalui sasaran dan jumlah tanah.",draw:"Seri!",
  progress:"Sasaran",occupied:"Dikuasai"
 }
};
const BANK={
 zh:[
  ["使用 AI 时，最重要的态度是什么？","诚实与负责任",["诚实与负责任","随便乱用","隐藏来源","伤害别人"]],
  ["看到陌生链接时，正确做法是什么？","先确认来源，不随便点击",["先确认来源，不随便点击","马上点击","输入密码测试","转发所有人"]],
  ["AI 生成内容需要注意什么？","检查真实性",["检查真实性","永远相信","不用注明","越快越好"]],
  ["安全密码应该怎样？","长且混合不同字符",["长且混合不同字符","123456","生日","名字"]],
  ["图片识别 AI 可能会怎样？","有时会判断错误",["有时会判断错误","永远正确","可以闻味道","可以触摸物体"]]
 ],
 en:[
  ["What is the most important attitude when using AI?","Be honest and responsible",["Be honest and responsible","Use it carelessly","Hide the source","Hurt others"]],
  ["What should you do with an unknown link?","Check the source before clicking",["Check the source before clicking","Click immediately","Enter your password","Forward to everyone"]],
  ["What should you check in AI-generated content?","Accuracy",["Accuracy","Trust everything","No need to cite","Speed only"]],
  ["Which password is safer?","Long with mixed characters",["Long with mixed characters","123456","Birthday","Name"]],
  ["What can happen with image recognition AI?","It may sometimes be wrong",["It may sometimes be wrong","Always correct","It can smell","It can touch objects"]]
 ],
 ms:[
  ["Apakah sikap penting semasa menggunakan AI?","Jujur dan bertanggungjawab",["Jujur dan bertanggungjawab","Guna sesuka hati","Sembunyikan sumber","Menyakiti orang lain"]],
  ["Apakah perlu dibuat dengan pautan tidak dikenali?","Semak sumber sebelum klik",["Semak sumber sebelum klik","Klik terus","Masukkan kata laluan","Kongsi kepada semua"]],
  ["Apakah perlu disemak pada kandungan AI?","Ketepatan",["Ketepatan","Percaya semua","Tidak perlu nyatakan sumber","Kelajuan sahaja"]],
  ["Kata laluan manakah lebih selamat?","Panjang dan bercampur aksara",["Panjang dan bercampur aksara","123456","Tarikh lahir","Nama"]],
  ["Apa mungkin berlaku pada AI pengecaman gambar?","Kadang-kadang boleh salah",["Kadang-kadang boleh salah","Sentiasa betul","Boleh menghidu","Boleh menyentuh objek"]]
 ]
};
let lang=new URLSearchParams(location.search).get("lang")||localStorage.getItem("island_lang")||"zh";
let state=null, questions=[], pending=null, lastClaim=null;
const $=s=>document.querySelector(s);
function T(k){return(I18N[lang]||I18N.zh)[k]||k}
function applyLang(){
 document.documentElement.lang=lang==="zh"?"zh-Hans":lang;document.title=T("title");
 ["title","subtitle","ruleTitle","ruleText","optionLabel","targetLabel","weedLabel","setupTitle","setupHelp","logTitle"].forEach(id=>{const el=$("#"+id); if(!el)return; el.textContent = id==="optionLabel"?T("option"):id==="targetLabel"?T("target"):id==="weedLabel"?T("weed"):T(id);});
 $("#setupBtn").textContent=T("setup");$("#fullBtn").textContent=T("fullscreen");$("#resetBtn").textContent=T("restart");$("#skipBtn").textContent=T("skip");$("#startBtn").textContent=T("start");$("#sampleBtn").textContent=T("sample");$("#againBtn").textContent=T("again");
 $("#nameA").placeholder=T("nameA");$("#nameB").placeholder=T("nameB");$("#questionText").placeholder=T("qph");$("#lang").value=lang;$("#setupLang").value=lang;
 if(!$("#nameA").value)$("#nameA").value=T("teamA"); if(!$("#nameB").value)$("#nameB").value=T("teamB");
 $("#questionText").value=sampleText();
 if(state) render();
}
function sampleText(){return (BANK[lang]||BANK.zh).map(q=>`${q[0]} | ${q[1]} | ${q[2].join(",")}`).join("\n")}
function parseQuestions(text){
 const rows=text.split("\n").map(x=>x.trim()).filter(Boolean), out=[];
 for(const row of rows){const p=row.split("|").map(x=>x.trim()); if(p.length>=2){let opts=p[2]?p[2].split(",").map(x=>x.trim()).filter(Boolean):[]; if(!opts.includes(p[1]))opts.unshift(p[1]); out.push({q:p[0],a:p[1],opts:shuffle(opts).slice(0,4)});}}
 return out.length?out:(BANK[lang]||BANK.zh).map(x=>({q:x[0],a:x[1],opts:x[2]}));
}
function shuffle(a){return[...a].sort(()=>Math.random()-.5)}
function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function mapConfig(){const size=$("#boardSize").value; if(size==="small")return{cols:7,rows:5}; if(size==="large")return{cols:11,rows:7}; return{cols:9,rows:7};}
function key(c,r){return `${c},${r}`}
function cellAt(c,r){return state?.cells.find(x=>x.c===c&&x.r===r)}
function staticCell(cells,c,r){return cells.find(x=>x.c===c&&x.r===r)}
function makeState(){
 const cfg=mapConfig(), cells=[];
 for(let c=0;c<cfg.cols;c++)for(let r=0;r<cfg.rows;r++)cells.push({c,r,owner:null,target:false,obstacle:false});
 const mid=Math.floor(cfg.cols/2), midRows=[Math.floor(cfg.rows/2)-1,Math.floor(cfg.rows/2),Math.floor(cfg.rows/2)+1].filter(r=>r>=0&&r<cfg.rows);
 cells.forEach(cell=>{if(cell.c===mid&&midRows.includes(cell.r))cell.target=true;});
 const starts = chooseStarts(cfg);
 staticCell(cells,starts.A.c,starts.A.r).owner="A";
 staticCell(cells,starts.B.c,starts.B.r).owner="B";
 const s={cols:cfg.cols,rows:cfg.rows,cells,turn:"A",round:1,maxRounds:Number($("#maxRounds").value||30),winNeed:Number($("#winNeed").value||2),wrongMode:$("#wrongMode").value,sound:$("#soundMode").value==="on",starts,teams:{A:{name:$("#nameA").value||T("teamA"),count:1,correct:0},B:{name:$("#nameB").value||T("teamB"),count:1,correct:0}},logs:[T("startLog")],gameOver:false};
 state=s; generateObstacles(); return state;
}
function chooseStarts(cfg){
 const mode=$("#startMode").value;
 const options={
  diagonal:{A:{c:0,r:1},B:{c:cfg.cols-1,r:cfg.rows-2}},
  vertical:{A:{c:Math.floor(cfg.cols/2),r:0},B:{c:Math.floor(cfg.cols/2),r:cfg.rows-1}},
  horizontal:{A:{c:0,r:Math.floor(cfg.rows/2)},B:{c:cfg.cols-1,r:Math.floor(cfg.rows/2)}}
 };
 if(mode==="random"){
   const pool=[options.diagonal,options.vertical,options.horizontal,{A:{c:0,r:cfg.rows-2},B:{c:cfg.cols-1,r:1}},{A:{c:1,r:0},B:{c:cfg.cols-2,r:cfg.rows-1}}];
   return rand(pool);
 }
 return options[mode] || options.diagonal;
}
function generateObstacles(){
 const count=1+Math.floor(Math.random()*2);
 const protectedKeys=new Set(state.cells.filter(x=>x.target||x.owner).map(x=>key(x.c,x.r)));
 for(let n=0;n<count;n++){
  const horizontal=Math.random()>.45, len=2+Math.floor(Math.random()*2);
  let placed=false, tries=0;
  while(!placed && tries++<80){
    const c=2+Math.floor(Math.random()*Math.max(1,state.cols-4));
    const r=1+Math.floor(Math.random()*Math.max(1,state.rows-2));
    const cells=[];
    for(let i=0;i<len;i++){cells.push(horizontal?cellAt(c+i,r):cellAt(c,r+i));}
    if(cells.every(x=>x&&!protectedKeys.has(key(x.c,x.r))&&!x.obstacle&&Math.abs(x.c-Math.floor(state.cols/2))>0)){
      cells.forEach(x=>{x.obstacle=true; protectedKeys.add(key(x.c,x.r));}); placed=true;
    }
  }
 }
}
function startGame(){questions=parseQuestions($("#questionText").value||sampleText());state=makeState();lastClaim=null;$("#setup").classList.add("hidden");render();fitMap();}
function neighbors(c,r){
 const even=c%2===0;
 const dirs=even?[[0,-1],[1,-1],[1,0],[0,1],[-1,0],[-1,-1]]:[[0,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]];
 return dirs.map(([dc,dr])=>cellAt(c+dc,r+dr)).filter(Boolean);
}
function claimableFor(team){
 const set=new Map();
 state.cells.filter(x=>x.owner===team).forEach(cell=>{
   neighbors(cell.c,cell.r).forEach(n=>{if(!n.obstacle && (!n.owner||n.target))set.set(key(n.c,n.r),n);});
 });
 return [...set.values()].filter(x=>x.owner!==team);
}
function render(){
 renderTeams(); renderMap(); renderLogs(); renderProgress();
 $("#turnText").textContent=`${T("turn")}：${state.teams[state.turn].name}｜${T("round")} ${state.round}/${state.maxRounds}`;
 $("#hintText").textContent=T("hint");
}
function targetCount(team){return state.cells.filter(x=>x.target&&x.owner===team).length}
function renderProgress(){
 $("#targetProgress").textContent=`${T("progress")}：A ${targetCount("A")}/${state.winNeed} ｜ B ${targetCount("B")}/${state.winNeed} ｜ ${T("occupied")} ${targetCount("A")+targetCount("B")}/3`;
}
function renderTeams(){
 ["A","B"].forEach(team=>{
  const t=state.teams[team], div=$("#team"+team);
  div.className=`team-card ${state.turn===team?"active":""}`;
  div.innerHTML=`<div class="team-head"><div class="team-name ${team.toLowerCase()}">${team}｜${t.name}</div><div class="score">${t.count}</div></div><div class="meta"><div class="stat"><b>${t.correct}</b><span>Correct</span></div><div class="stat"><b>${targetCount(team)}/${state.winNeed}</b><span>${T("target")}</span></div></div>`;
 });
}
function renderMap(){
 const layer=$("#mapLayer"); layer.innerHTML="";
 const opts=new Set(claimableFor(state.turn).map(x=>key(x.c,x.r)));
 const W=82,H=72,dx=64,dy=72;
 const totalW=(state.cols-1)*dx+W,totalH=(state.rows-1)*dy+H+36;
 layer.style.width=totalW+"px";layer.style.height=totalH+"px";
 state.cells.forEach(cell=>{
   const x=cell.c*dx, y=cell.r*dy+(cell.c%2?H/2:0);
   const div=document.createElement("div"); div.className="hex";
   if(cell.target)div.classList.add("target");
   if(cell.obstacle)div.classList.add("obstacle");
   else if(cell.owner==="A")div.classList.add("a"); else if(cell.owner==="B")div.classList.add("b"); else div.classList.add("neutral");
   if(!cell.obstacle && opts.has(key(cell.c,cell.r)) && cell.owner!==opponent(state.turn)){div.classList.add("option"); div.onclick=()=>attack(cell);}
   if(lastClaim===key(cell.c,cell.r)) div.classList.add("flag");
   div.style.left=x+"px";div.style.top=y+"px";
   let label="";
   if(cell.obstacle)label="🌿";
   else if(cell.target)label=cell.owner?`${cell.owner}★`:"★";
   else label=cell.owner||"";
   div.innerHTML=`<span>${label}</span>`;
   layer.appendChild(div);
 });
 renderBoats(layer,W,H,dx,dy);
 fitMap();
}
function renderBoats(layer,W,H,dx,dy){
 [["A","⛵"],["B","🚤"]].forEach(([team,emoji])=>{
   const s=state.starts[team]; if(!s)return;
   const x=s.c*dx+(team==="A"?-34:58), y=s.r*dy+(s.c%2?H/2:0)+34;
   const boat=document.createElement("div"); boat.className="boat"; boat.textContent=emoji; boat.style.left=x+"px"; boat.style.top=y+"px"; layer.appendChild(boat);
 });
}
function fitMap(){
 const board=$("#oceanBoard"),layer=$("#mapLayer"); if(!board||!layer)return;
 const bw=board.clientWidth-32,bh=board.clientHeight-32,lw=layer.offsetWidth||920,lh=layer.offsetHeight||560;
 const scale=Math.min(bw/lw,bh/lh,1.15);
 layer.style.transform=`translate(-50%,-50%) scale(${scale})`;
}
function renderLogs(){$("#logs").innerHTML=state.logs.map(x=>`<div class="log">${x}</div>`).join("")}
function addLog(x){state.logs.unshift(x);state.logs=state.logs.slice(0,8)}
function opponent(t){return t==="A"?"B":"A"}
function attack(cell){if(state.gameOver)return; pending=cell; const q=questions[Math.floor(Math.random()*questions.length)]; pending.question=q; $("#qContext").textContent=`${state.teams[state.turn].name}｜${T("questionFor")}`; $("#qTitle").textContent=q.q; $("#options").innerHTML=shuffle(q.opts).map(opt=>`<button class="option" data-answer="${String(opt).replaceAll('"','&quot;')}">${opt}</button>`).join(""); document.querySelectorAll(".option").forEach(btn=>btn.onclick=()=>answer(btn.dataset.answer)); $("#questionModal").classList.remove("hidden");}
function answer(ans){
 $("#questionModal").classList.add("hidden");
 const team=state.turn, q=pending.question;
 if(ans===q.a){
   pending.owner=team; lastClaim=key(pending.c,pending.r);
   state.teams[team].count=state.cells.filter(x=>x.owner===team).length; state.teams[team].correct++;
   addLog(`✅ ${state.teams[team].name} ${T("correct")}`); playTone("correct");
   if(targetCount(team)>=state.winNeed){win(team); return;}
 } else {
   addLog(`❌ ${state.teams[team].name} ${T("wrong")}「${q.a}」`);
   if(state.wrongMode==="neutral" && pending && !pending.obstacle){ pending.owner=null; addLog(`🌊 ${T("neutral")}`); }
   playTone("wrong");
 }
 pending=null;
 state.turn=opponent(team);
 if(state.turn==="A") state.round++;
 if(state.round>state.maxRounds){endByRounds();return;}
 render();
}
function endByRounds(){
 addLog(`⏱️ ${T("maxRound")}`);
 const aT=targetCount("A"), bT=targetCount("B");
 let winner=null;
 if(aT>bT) winner="A"; else if(bT>aT) winner="B";
 else if(state.teams.A.count>state.teams.B.count) winner="A"; else if(state.teams.B.count>state.teams.A.count) winner="B";
 if(winner) win(winner,T("maxRound")); else {state.gameOver=true;$("#winTitle").textContent=T("draw");$("#winDesc").textContent=T("maxRound");$("#win").classList.remove("hidden");}
}
function win(team,desc){state.gameOver=true; render(); playTone("win"); $("#winTitle").textContent=`${team}｜${state.teams[team].name} ${T("win")}`; $("#winDesc").textContent=desc||T("winDesc"); $("#win").classList.remove("hidden");}
function playTone(type){
 if(!state||!state.sound)return;
 try{
  const ctx=new (window.AudioContext||window.webkitAudioContext)();
  const osc=ctx.createOscillator(); const gain=ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);
  osc.frequency.value=type==="correct"?740:type==="wrong"?180:980;
  gain.gain.value=.055; osc.start();
  setTimeout(()=>{osc.stop();ctx.close();}, type==="win"?380:160);
 }catch(e){}
}
$("#lang").onchange=e=>{lang=e.target.value;localStorage.setItem("island_lang",lang);applyLang()}
$("#setupLang").onchange=e=>{lang=e.target.value;localStorage.setItem("island_lang",lang);applyLang()}
$("#setupBtn").onclick=()=>$("#setup").classList.remove("hidden");
$("#resetBtn").onclick=()=>location.reload();
$("#fullBtn").onclick=()=>document.documentElement.requestFullscreen?.();
$("#skipBtn").onclick=()=>{if(!state||state.gameOver)return;state.turn=opponent(state.turn);if(state.turn==="A")state.round++;render();}
$("#startBtn").onclick=startGame;
$("#sampleBtn").onclick=()=>$("#questionText").value=sampleText();
window.addEventListener("resize",fitMap);
applyLang();
