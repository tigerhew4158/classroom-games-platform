
const I18N={
 zh:{title:"图片拼图竞速赛",subtitle:"老师上传图片作为题目，各组轮流拼图，最快完成者胜利。",uploadTitle:"上传题目图片",settingTitle:"游戏设置",howTitle:"玩法说明",howText:"老师先上传图片并选择难度。每一组轮流上台拼同一张图，系统记录完成时间。全部组别完成后，时间最短者获胜。",build:"生成拼图",nextTeam:"下一组开始",fullscreen:"全屏",restart:"重开",leader:"排行榜",active:"当前组别",instruction:"拖动左边碎片到右边正确位置。",uploadFirst:"请先上传图片。",team:"第 {n} 组",notDone:"请先完成当前组别。",complete:"完成！",winner:"最快完成组别",time:"时间",again:"继续",ready:"准备开始"},
 en:{title:"Image Puzzle Speed Race",subtitle:"Teachers upload an image as the question. Teams take turns solving the puzzle. Fastest team wins.",uploadTitle:"Upload question image",settingTitle:"Game settings",howTitle:"How to play",howText:"Upload an image and choose the difficulty. Each team solves the same puzzle in turn. The system records completion time. The fastest team wins.",build:"Generate puzzle",nextTeam:"Start next team",fullscreen:"Fullscreen",restart:"Restart",leader:"Leaderboard",active:"Active team",instruction:"Drag pieces from the left to the correct positions on the right.",uploadFirst:"Please upload an image first.",team:"Team {n}",notDone:"Please complete the current team first.",complete:"Completed!",winner:"Fastest team",time:"Time",again:"Continue",ready:"Ready"},
 ms:{title:"Perlumbaan Pantas Puzzle Gambar",subtitle:"Guru memuat naik gambar sebagai soalan. Kumpulan menyusun puzzle secara bergilir. Kumpulan terpantas menang.",uploadTitle:"Muat naik gambar soalan",settingTitle:"Tetapan permainan",howTitle:"Cara bermain",howText:"Guru memuat naik gambar dan memilih tahap. Setiap kumpulan menyusun gambar yang sama secara bergilir. Sistem merekod masa siap. Kumpulan terpantas menang.",build:"Jana puzzle",nextTeam:"Mula kumpulan seterusnya",fullscreen:"Skrin penuh",restart:"Mula semula",leader:"Papan markah",active:"Kumpulan semasa",instruction:"Seret kepingan dari kiri ke kedudukan betul di kanan.",uploadFirst:"Sila muat naik gambar dahulu.",team:"Kumpulan {n}",notDone:"Sila selesaikan kumpulan semasa dahulu.",complete:"Siap!",winner:"Kumpulan terpantas",time:"Masa",again:"Teruskan",ready:"Sedia"}
};
let lang=new URLSearchParams(location.search).get("lang")||localStorage.getItem("puzzle_lang")||"zh";
let imgUrl="", imgW=1, imgH=1, imgRatio=1, grid=3, current=0, started=false, finished=false, startTime=0, timerId=null, teams=[], logs=[];
const $=s=>document.querySelector(s);
function T(k){return (I18N[lang]||I18N.zh)[k]||k}
function fmt(ms){ms=Math.max(0,ms||0);let s=Math.floor(ms/1000),m=Math.floor(s/60);s%=60;let d=Math.floor((ms%1000)/100);return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${d}`}
function applyLang(){document.documentElement.lang=lang==="zh"?"zh-Hans":lang;document.title=T("title");["title","subtitle","uploadTitle","settingTitle","howTitle"].forEach(id=>$("#"+id).textContent=T(id));$("#howText").textContent=T("howText");$("#buildBtn").textContent=T("build");$("#nextTeamBtn").textContent=T("nextTeam");$("#fullBtn").textContent=T("fullscreen");$("#resetBtn").textContent=T("restart");$("#leaderTitle").textContent=T("leader");$("#instruction").textContent=T("instruction");$("#win button").textContent=T("again");$("#lang").value=lang;renderTeams();}
function teamName(i){return T("team").replace("{n}",i+1)}
function log(x){logs.unshift(x);logs=logs.slice(0,6);$("#logs").innerHTML=logs.map(v=>`<div class="log">${v}</div>`).join("")}
$("#lang").onchange=e=>{lang=e.target.value;localStorage.setItem("puzzle_lang",lang);applyLang()}
$("#fullBtn").onclick=()=>document.documentElement.requestFullscreen?.()
$("#resetBtn").onclick=()=>location.reload()
$("#imageInput").onchange=e=>{
  const f=e.target.files[0]; if(!f)return;
  imgUrl=URL.createObjectURL(f);
  const img=new Image();
  img.onload=()=>{
    imgW=img.naturalWidth||1; imgH=img.naturalHeight||1; imgRatio=imgW/imgH;
    $("#preview").style.backgroundImage=`url(${imgUrl})`;
    $("#preview").style.aspectRatio=`${imgW} / ${imgH}`;
    $("#preview").textContent="";
  };
  img.src=imgUrl;
}
$("#buildBtn").onclick=()=>{if(!imgUrl){alert(T("uploadFirst"));return;}setupGame();}
$("#nextTeamBtn").onclick=()=>{if(!teams.length){setupGame();return;}if(!teams[current].done && started){alert(T("notDone"));return;}if(current<teams.length-1){current++;makePuzzle();}else{showWinner();}}
window.addEventListener("resize",()=>{ if(started) sizePuzzleAreas(); });
function setupGame(){grid=Number($("#difficulty").value);const n=Number($("#teamsCount").value);teams=Array.from({length:n},(_,i)=>({name:teamName(i),time:null,done:false}));current=0;makePuzzle();renderTeams();log(T("ready"));}
function fitSize(pane){
  const pad=18;
  const w=Math.max(80,pane.clientWidth-pad);
  const h=Math.max(80,pane.clientHeight-pad);
  let outW=w, outH=w/imgRatio;
  if(outH>h){outH=h;outW=h*imgRatio;}
  return {w:Math.floor(outW), h:Math.floor(outH)};
}
function sizePuzzleAreas(){
  const area=$("#boardArea");
  if(imgRatio>1.2){area.classList.add("landscape");area.classList.remove("portrait");}
  else{area.classList.add("portrait");area.classList.remove("landscape");}
  requestAnimationFrame(()=>{
    const boardSize=fitSize($("#boardPane"));
    const piecesSize=fitSize($("#piecesPane"));
    applySize($("#board"), boardSize);
    applySize($("#pieces"), piecesSize);
  });
}
function applySize(el, size){
  el.style.width=size.w+"px";
  el.style.height=size.h+"px";
  el.style.gridTemplateColumns=`repeat(${grid},1fr)`;
  el.style.gridTemplateRows=`repeat(${grid},1fr)`;
}
function makePuzzle(){
  finished=false;started=true;clearInterval(timerId);
  startTime=performance.now();timerId=setInterval(()=>$("#timer").textContent=fmt(performance.now()-startTime),100);
  $("#activeTeam").textContent=`${T("active")}：${teams[current].name}`;
  const total=grid*grid, ids=[...Array(total).keys()], shuffled=[...ids].sort(()=>Math.random()-.5);
  const pieces=$("#pieces"),board=$("#board");
  board.innerHTML=ids.map(i=>`<div class="cell" data-target="${i}"></div>`).join("");
  pieces.innerHTML=shuffled.map(i=>pieceHtml(i)).join("");
  sizePuzzleAreas(); bindDrag(); renderTeams();
}
function pieceHtml(i){
  const r=Math.floor(i/grid),c=i%grid;
  return `<div class="piece" draggable="true" data-id="${i}" style="background-image:url('${imgUrl}');background-size:${grid*100}% ${grid*100}%;background-position:${grid===1?0:(c/(grid-1))*100}% ${grid===1?0:(r/(grid-1))*100}%"></div>`;
}
function bindDrag(){
  document.querySelectorAll(".piece").forEach(p=>p.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",p.dataset.id)));
  document.querySelectorAll(".cell").forEach(cell=>{
    cell.addEventListener("dragover",e=>e.preventDefault());
    cell.addEventListener("drop",e=>{
      e.preventDefault();const id=e.dataTransfer.getData("text/plain");const piece=document.querySelector(`.piece[data-id="${id}"]`);if(!piece)return;
      if(cell.firstChild){$("#pieces").appendChild(cell.firstChild);cell.classList.remove("correct")}
      cell.appendChild(piece);cell.classList.toggle("correct",cell.dataset.target===id);checkComplete();
    });
  });
  $("#pieces").addEventListener("dragover",e=>e.preventDefault());
  $("#pieces").addEventListener("drop",e=>{e.preventDefault();const id=e.dataTransfer.getData("text/plain");const piece=document.querySelector(`.piece[data-id="${id}"]`);if(piece)$("#pieces").appendChild(piece);});
}
function checkComplete(){const cells=[...document.querySelectorAll(".cell")];if(cells.every(c=>c.firstChild&&c.firstChild.dataset.id===c.dataset.target)){finishTeam();}}
function finishTeam(){if(finished)return;finished=true;clearInterval(timerId);const time=performance.now()-startTime;teams[current].time=time;teams[current].done=true;$("#timer").textContent=fmt(time);log(`✅ ${teams[current].name} ${T("complete")} ${fmt(time)}`);renderTeams();if(teams.every(t=>t.done))showWinner();}
function renderTeams(){if(!teams.length){$("#activeTeam").textContent=T("ready");$("#teams").innerHTML="";return;}$("#teams").innerHTML=teams.map((t,i)=>`<div class="team-row ${i===current?"active":""}"><b>${t.name}</b><span class="team-time">${t.done?fmt(t.time):"--:--.-"}</span></div>`).join("")}
function showWinner(){const done=teams.filter(t=>t.done);if(!done.length)return;const w=done.sort((a,b)=>a.time-b.time)[0];$("#winTitle").textContent=`🏆 ${T("winner")}：${w.name}`;$("#winDesc").textContent=`${T("time")}：${fmt(w.time)}`;$("#win").classList.remove("hidden");}
applyLang();
