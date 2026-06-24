
const I18N={
 zh:{title:"双组拼图对战",subtitle:"老师上传图片，两组同时拼合，最快完成的一组胜利。",fullscreen:"全屏",restart:"重开",start:"开始对战",uploadFirst:"请先上传图片。",teamA:"红队",teamB:"蓝队",tip:"两组使用同一张图片。把下方碎片拖到上方拼图区。",winner:"获胜组别",time:"完成时间",again:"继续",ready:"准备中"},
 en:{title:"Two-Team Puzzle Duel",subtitle:"Teacher uploads an image. Two teams solve the puzzle at the same time. Fastest team wins.",fullscreen:"Fullscreen",restart:"Restart",start:"Start duel",uploadFirst:"Please upload an image first.",teamA:"Red Team",teamB:"Blue Team",tip:"Both teams use the same image. Drag pieces from the lower area to the board above.",winner:"Winning team",time:"Completion time",again:"Continue",ready:"Ready"},
 ms:{title:"Duel Puzzle Dua Kumpulan",subtitle:"Guru memuat naik gambar. Dua kumpulan menyusun puzzle serentak. Kumpulan terpantas menang.",fullscreen:"Skrin penuh",restart:"Mula semula",start:"Mula duel",uploadFirst:"Sila muat naik gambar dahulu.",teamA:"Pasukan Merah",teamB:"Pasukan Biru",tip:"Kedua-dua kumpulan menggunakan gambar yang sama. Seret kepingan dari bawah ke papan di atas.",winner:"Kumpulan menang",time:"Masa siap",again:"Teruskan",ready:"Sedia"}
};
let lang=new URLSearchParams(location.search).get("lang")||localStorage.getItem("duel_lang")||"zh",imgUrl="",imgW=1,imgH=1,imgRatio=1,grid=3,startTime=0,timerId=null,done=[false,false],times=[null,null],running=false;
const $=s=>document.querySelector(s);
function T(k){return(I18N[lang]||I18N.zh)[k]||k}
function fmt(ms){ms=Math.max(0,ms||0);let s=Math.floor(ms/1000),m=Math.floor(s/60);s%=60;let d=Math.floor((ms%1000)/100);return`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${d}`}
function applyLang(){document.documentElement.lang=lang==="zh"?"zh-Hans":lang;document.title=T("title");$("#title").textContent=T("title");$("#subtitle").textContent=T("subtitle");$("#fullBtn").textContent=T("fullscreen");$("#resetBtn").textContent=T("restart");$("#startBtn").textContent=T("start");$("#teamA").placeholder=T("teamA");$("#teamB").placeholder=T("teamB");if(!$("#teamA").value)$("#teamA").value=T("teamA");if(!$("#teamB").value)$("#teamB").value=T("teamB");$("#tip").textContent=T("tip");$("#win button").textContent=T("again");$("#lang").value=lang;renderEmpty();}
$("#lang").onchange=e=>{lang=e.target.value;localStorage.setItem("duel_lang",lang);applyLang()}
$("#fullBtn").onclick=()=>document.documentElement.requestFullscreen?.();$("#resetBtn").onclick=()=>location.reload()
$("#imageInput").onchange=e=>{
  const f=e.target.files[0];if(!f)return;
  imgUrl=URL.createObjectURL(f);
  const img=new Image();
  img.onload=()=>{
    imgW=img.naturalWidth||1;imgH=img.naturalHeight||1;imgRatio=imgW/imgH;
    $("#preview").style.backgroundImage=`url(${imgUrl})`;
    $("#preview").style.aspectRatio=`${imgW} / ${imgH}`;
  };
  img.src=imgUrl;
}
$("#startBtn").onclick=()=>{if(!imgUrl){alert(T("uploadFirst"));return;}start();}
window.addEventListener("resize",()=>{ if(running) sizeAll(); });
function renderEmpty(){if(running)return;[0,1].forEach(i=>{$("#team"+i).innerHTML=`<div class="team-head"><div class="team-title">${i?($("#teamB").value||T("teamB")):($("#teamA").value||T("teamA"))}</div><div class="timer">${T("ready")}</div></div><div class="play-area"><div class="pane"><div class="board"></div></div><div class="pane"><div class="pieces"></div></div></div>`})}
function start(){grid=Number($("#difficulty").value);running=true;done=[false,false];times=[null,null];startTime=performance.now();clearInterval(timerId);timerId=setInterval(updateTimers,100);[0,1].forEach(i=>buildTeam(i));sizeAll();}
function updateTimers(){[0,1].forEach(i=>{const el=document.querySelector(`#team${i} .timer`);if(el&&!done[i])el.textContent=fmt(performance.now()-startTime);});}
function fitSize(pane){
  const pad=16,w=Math.max(80,pane.clientWidth-pad),h=Math.max(80,pane.clientHeight-pad);
  let outW=w,outH=w/imgRatio;if(outH>h){outH=h;outW=h*imgRatio;}return{w:Math.floor(outW),h:Math.floor(outH)}
}
function applySize(el,size){el.style.width=size.w+"px";el.style.height=size.h+"px";el.style.gridTemplateColumns=`repeat(${grid},1fr)`;el.style.gridTemplateRows=`repeat(${grid},1fr)`}
function sizeAll(){[0,1].forEach(i=>{const root=$("#team"+i);const board=root.querySelector(".board"),pieces=root.querySelector(".pieces");const panes=root.querySelectorAll(".pane");if(board&&pieces){applySize(board,fitSize(panes[0]));applySize(pieces,fitSize(panes[1]));}})}
function buildTeam(i){
  const name=i?($("#teamB").value||T("teamB")):($("#teamA").value||T("teamA"));
  const team=$("#team"+i);team.classList.remove("winner");
  team.innerHTML=`<div class="team-head"><div class="team-title">${name}</div><div class="timer">00:00.0</div></div><div class="play-area"><div class="pane"><div class="board" data-team="${i}"></div></div><div class="pane"><div class="pieces" data-team="${i}"></div></div></div>`;
  const board=team.querySelector(".board"),pieces=team.querySelector(".pieces");
  const ids=[...Array(grid*grid).keys()],shuffled=[...ids].sort(()=>Math.random()-.5);
  board.innerHTML=ids.map(id=>`<div class="cell" data-target="${id}" data-team="${i}"></div>`).join("");
  pieces.innerHTML=shuffled.map(id=>pieceHtml(id,i)).join("");
  sizeAll();bindDrag(team,i);
}
function pieceHtml(id,team){const r=Math.floor(id/grid),c=id%grid;return`<div class="piece" draggable="true" data-id="${id}" data-team="${team}" style="background-image:url('${imgUrl}');background-size:${grid*100}% ${grid*100}%;background-position:${grid===1?0:(c/(grid-1))*100}% ${grid===1?0:(r/(grid-1))*100}%"></div>`}
function bindDrag(root,team){
  root.querySelectorAll(".piece").forEach(p=>p.addEventListener("dragstart",e=>{e.dataTransfer.setData("id",p.dataset.id);e.dataTransfer.setData("team",p.dataset.team)}));
  root.querySelectorAll(".cell").forEach(cell=>{cell.addEventListener("dragover",e=>e.preventDefault());cell.addEventListener("drop",e=>{e.preventDefault();const id=e.dataTransfer.getData("id"),tm=e.dataTransfer.getData("team");if(Number(tm)!==team)return;const piece=root.querySelector(`.piece[data-id="${id}"][data-team="${tm}"]`);if(!piece)return;if(cell.firstChild){root.querySelector(".pieces").appendChild(cell.firstChild);cell.classList.remove("correct")}cell.appendChild(piece);cell.classList.toggle("correct",cell.dataset.target===id);check(team);});});
  root.querySelector(".pieces").addEventListener("dragover",e=>e.preventDefault());
  root.querySelector(".pieces").addEventListener("drop",e=>{e.preventDefault();const id=e.dataTransfer.getData("id"),tm=e.dataTransfer.getData("team");if(Number(tm)!==team)return;const piece=root.querySelector(`.piece[data-id="${id}"][data-team="${tm}"]`);if(piece)root.querySelector(".pieces").appendChild(piece);});
}
function check(team){const cells=[...document.querySelectorAll(`#team${team} .cell`)];if(!done[team]&&cells.every(c=>c.firstChild&&c.firstChild.dataset.id===c.dataset.target)){done[team]=true;times[team]=performance.now()-startTime;document.querySelector(`#team${team} .timer`).textContent=fmt(times[team])+" ✅";announce(team);}}
function announce(team){clearInterval(timerId);const name=team?($("#teamB").value||T("teamB")):($("#teamA").value||T("teamA"));$("#team"+team).classList.add("winner");$("#winTitle").textContent=`🏆 ${T("winner")}：${name}`;$("#winDesc").textContent=`${T("time")}：${fmt(times[team])}`;$("#win").classList.remove("hidden");}
applyLang();
