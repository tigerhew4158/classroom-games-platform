
const I18N={
zh:{title:'王国资源争夺战',subtitle:'围绕中央王都，开发农田、森林与金矿，并应对随机好坏事件。',setup:'设置题库',fullscreen:'全屏',restart:'重开',scoreTitle:'王国得分',teamA:'蓝色王国',teamB:'橙色王国',ruleTitle:'玩法说明',ruleText:'轮到某队时，可选择农田、森林或金矿进行开发。答对题目即可获得基础分，并触发随机事件：可能加分，也可能因虫害、火灾或工伤而扣分。先达到目标分，或回合结束时分数较高者获胜。',round:(a,b,t)=>`回合：${a}/${b} ｜ 当前行动：${t}`,hint:'请选择一个开发区域来进行本回合行动。',boardTitle:'中央王都与资源开发区',eventTitle:'随机事件',logTitle:'战况记录',farm:'农田开发',forest:'森林开发',mine:'金矿开发',develop:'选择开发',base:n=>`基础收益：+${n} 分`,eventRate:'随机事件',farmDesc:'农作物稳定提供粮食，是最均衡的开发路线。',forestDesc:'森林提供木材与生态价值，事件波动较有趣。',mineDesc:'金矿收益最高，但也更容易出现高风险事件。',skip:'跳过本回合',answers:'题库示例',setupTitle:'王国资源争夺战｜老师设置',setupHelp:'题库格式：题目|选项A|选项B|选项C|选项D|正确答案编号。每行一题。',sample:'载入示范题',start:'开始游戏',qTitle:(z,n)=>`正在开发：${z} ＋${n}`,qOf:(team,lane)=>`${team} ｜ ${lane}`,turnGain:(team,lane,n)=>`${team} 成功开发 ${lane}，获得基础分 +${n}`,turnFail:(team,lane)=>`${team} 在 ${lane} 开发失败`,positive:'好事件',negative:'坏事件',eventApplied:(team,n)=>`${team} 事件分数变动 ${n>0?'+':''}${n}`,ok:'继续',winner:t=>`${t} 获胜！`,draw:'平手！',summary:(a,b)=>`最终得分：蓝色王国 ${a} ｜ 橙色王国 ${b}`,again:'再玩一次',mineDiscovery:'发现新金矿！',mineDiscoveryDesc:'探矿队在山腹发现新矿脉，金矿开发额外 +3 分。',mineAccident:'矿场工伤事件',mineAccidentDesc:'矿坑发生工伤事故，王国需善后，扣 2 分。',farmHarvest:'农作物大丰收',farmHarvestDesc:'天气良好，农作物大丰收，额外 +2 分。',farmPest:'农田虫害',farmPestDesc:'虫害扩散导致损失，扣 2 分。',forestBirth:'森林动物生宝宝了',forestBirthDesc:'生态繁荣，王国声望提升，额外 +2 分。',forestFire:'森林大火',forestFireDesc:'林地失火造成损失，扣 2 分。'},
en:{title:'Kingdom Resource Clash',subtitle:'Build farms, forests and gold mines around the royal capital while reacting to random events.',setup:'Question Bank',fullscreen:'Fullscreen',restart:'Restart',scoreTitle:'Kingdom Scores',teamA:'Blue Kingdom',teamB:'Orange Kingdom',ruleTitle:'How to play',ruleText:'On each turn, a kingdom chooses Farm, Forest or Gold Mine to develop. A correct answer grants base points and triggers a random event. Events can boost your score or penalize you with pests, fires or mine accidents. Reach the target score first, or finish with the higher score.',round:(a,b,t)=>`Round ${a}/${b} ｜ Acting: ${t}`,hint:'Choose a development zone for this turn.',boardTitle:'Royal Capital & Resource Development Zones',eventTitle:'Random Events',logTitle:'Battle Log',farm:'Farm Development',forest:'Forest Development',mine:'Gold Mine Development',develop:'Develop',base:n=>`Base gain: +${n} pts`,eventRate:'Random event',farmDesc:'Balanced food production with steady growth.',forestDesc:'Forest gives wood and ecological value with fun swings.',mineDesc:'Highest reward, but also higher risk.',skip:'Skip Turn',answers:'Sample Bank',setupTitle:'Kingdom Resource Clash | Teacher Setup',setupHelp:'Question format: Question|A|B|C|D|correct option number. One question per line.',sample:'Load Sample',start:'Start Game',qTitle:(z,n)=>`Developing: ${z} +${n}`,qOf:(team,lane)=>`${team} ｜ ${lane}`,turnGain:(team,lane,n)=>`${team} developed ${lane} and gained base +${n}`,turnFail:(team,lane)=>`${team} failed to develop ${lane}`,positive:'Good Event',negative:'Bad Event',eventApplied:(team,n)=>`${team} event score change ${n>0?'+':''}${n}`,ok:'Continue',winner:t=>`${t} wins!`,draw:'Draw!',summary:(a,b)=>`Final score: Blue ${a} ｜ Orange ${b}`,again:'Play Again',mineDiscovery:'New Gold Vein Found!',mineDiscoveryDesc:'Prospectors discovered a fresh gold vein. Extra +3 points.',mineAccident:'Mining Injury Incident',mineAccidentDesc:'An accident occurred in the mine. Lose 2 points.',farmHarvest:'Bountiful Harvest',farmHarvestDesc:'Perfect weather leads to a bumper harvest. Extra +2 points.',farmPest:'Crop Pest Outbreak',farmPestDesc:'A pest outbreak damages the fields. Lose 2 points.',forestBirth:'Forest Animals Have Babies',forestBirthDesc:'Wildlife thrives and the kingdom gains fame. Extra +2 points.',forestFire:'Forest Fire',forestFireDesc:'A wildfire damages the woodland. Lose 2 points.'},
ms:{title:'Pertempuran Sumber Kerajaan',subtitle:'Bangunkan ladang, hutan dan lombong emas di sekitar ibu kota sambil menghadapi peristiwa rawak.',setup:'Bank Soalan',fullscreen:'Skrin penuh',restart:'Mula semula',scoreTitle:'Skor Kerajaan',teamA:'Kerajaan Biru',teamB:'Kerajaan Jingga',ruleTitle:'Cara bermain',ruleText:'Pada setiap giliran, kerajaan memilih Ladang, Hutan atau Lombong Emas untuk dibangunkan. Jawapan betul memberi mata asas dan mencetuskan peristiwa rawak. Peristiwa boleh menambah atau mengurangkan skor. Pihak yang capai sasaran dahulu atau skor lebih tinggi di akhir pusingan menang.',round:(a,b,t)=>`Pusingan ${a}/${b} ｜ Giliran: ${t}`,hint:'Pilih satu zon pembangunan untuk giliran ini.',boardTitle:'Ibu Kota Diraja & Zon Pembangunan Sumber',eventTitle:'Peristiwa Rawak',logTitle:'Log Permainan',farm:'Pembangunan Ladang',forest:'Pembangunan Hutan',mine:'Pembangunan Lombong Emas',develop:'Bangunkan',base:n=>`Mata asas: +${n}`,eventRate:'Peristiwa rawak',farmDesc:'Laluan seimbang untuk bekalan makanan yang stabil.',forestDesc:'Hutan memberi kayu dan nilai ekologi dengan kejutan menarik.',mineDesc:'Ganjaran tertinggi tetapi risikonya juga besar.',skip:'Langkau Giliran',answers:'Bank Contoh',setupTitle:'Pertempuran Sumber Kerajaan | Tetapan Guru',setupHelp:'Format soalan: Soalan|A|B|C|D|nombor jawapan betul. Satu baris satu soalan.',sample:'Muat Contoh',start:'Mula Permainan',qTitle:(z,n)=>`Membangun: ${z} +${n}`,qOf:(team,lane)=>`${team} ｜ ${lane}`,turnGain:(team,lane,n)=>`${team} berjaya membangun ${lane} dan mendapat +${n}`,turnFail:(team,lane)=>`${team} gagal membangun ${lane}`,positive:'Peristiwa Baik',negative:'Peristiwa Buruk',eventApplied:(team,n)=>`Perubahan skor ${team} ${n>0?'+':''}${n}`,ok:'Teruskan',winner:t=>`${t} menang!`,draw:'Seri!',summary:(a,b)=>`Skor akhir: Biru ${a} ｜ Jingga ${b}`,again:'Main Lagi',mineDiscovery:'Urat Emas Baharu Ditemui!',mineDiscoveryDesc:'Pasukan carigali menemui urat emas baharu. Tambahan +3 mata.',mineAccident:'Insiden Kecederaan Lombong',mineAccidentDesc:'Kemalangan berlaku di lombong. Tolak 2 mata.',farmHarvest:'Hasil Tuaian Melimpah',farmHarvestDesc:'Cuaca baik membawa hasil tuaian melimpah. Tambahan +2 mata.',farmPest:'Serangan Perosak Ladang',farmPestDesc:'Serangan perosak merosakkan tanaman. Tolak 2 mata.',forestBirth:'Haiwan Hutan Bertambah Anak',forestBirthDesc:'Ekologi berkembang dan reputasi kerajaan meningkat. Tambahan +2 mata.',forestFire:'Kebakaran Hutan',forestFireDesc:'Kebakaran merosakkan kawasan hutan. Tolak 2 mata.'}
};
const $=s=>document.querySelector(s);
let lang='zh', questions=[], roundLimit=18, targetScore=20, timeLimit=360, timeEnd=0, timerId=null, round=1, turn='A', activeLane=null, activeBase=0, pendingQ=null;
let state={A:{score:0,farm:0,forest:0,mine:0},B:{score:0,farm:0,forest:0,mine:0}};
let logs=[], events=[];
const lanes={farm:{base:2,eventChance:.72},forest:{base:2,eventChance:.72},mine:{base:3,eventChance:.78}};
const eventPools={
  farm:[{type:'good',delta:2,key:'farmHarvest',desc:'farmHarvestDesc'},{type:'bad',delta:-2,key:'farmPest',desc:'farmPestDesc'}],
  forest:[{type:'good',delta:2,key:'forestBirth',desc:'forestBirthDesc'},{type:'bad',delta:-2,key:'forestFire',desc:'forestFireDesc'}],
  mine:[{type:'good',delta:3,key:'mineDiscovery',desc:'mineDiscoveryDesc'},{type:'bad',delta:-2,key:'mineAccident',desc:'mineAccidentDesc'}]
};
function t(k,...a){const v=(I18N[lang]||I18N.zh)[k]; return typeof v==='function'?v(...a):v||k}
function teamName(code){return code==='A'?t('teamA'):t('teamB')}
function laneName(key){return t(key)}
function sampleQuestions(){ $('#questionText').value = [
 'AI 从什么学习？|训练资料|魔法|只靠猜测|什么都不需要|1',
 '看到可疑链接时应该？|马上点开|先检查来源|输入密码|转发给朋友|2',
 '哪一种密码较安全？|123456|生日日期|BlueSky!2026|名字拼音|3',
 '森林着火时首先要？|靠近围观|通知老师或大人|继续玩耍|拍视频上传|2',
 '农田虫害可以比喻成哪类风险？|生产风险|天气是奖励|完全没影响|一定加分|1',
 '矿场安全最重要的是？|快速工作|忽略规则|佩戴安全装备|单独行动|3'
 ].join('\n'); }
function parseQuestions(){
  return $('#questionText').value.split('\n').map(x=>x.trim()).filter(Boolean).map(row=>{const p=row.split('|').map(s=>s.trim()); return {q:p[0],opts:p.slice(1,5),ans:(Number(p[5]||1)-1)}}).filter(x=>x.q && x.opts.length>=4);
}
function applyI18N(){
  document.title=t('title'); $('#title').textContent=t('title'); $('#subtitle').textContent=t('subtitle');
  $('#setupBtn').textContent=t('setup'); $('#fullBtn').textContent=t('fullscreen'); $('#resetBtn').textContent=t('restart');
  $('#scoreTitle').textContent=t('scoreTitle'); $('#ruleTitle').textContent=t('ruleTitle'); $('#ruleText').textContent=t('ruleText');
  $('#eventTitle').textContent=t('eventTitle'); $('#logTitle').textContent=t('logTitle'); $('#boardTitle').textContent=t('boardTitle');
  $('#skipBtn').textContent=t('skip'); $('#answerKeyBtn').textContent=t('answers');
  $('#farmName').textContent=t('farm'); $('#forestName').textContent=t('forest'); $('#mineName').textContent=t('mine');
  $('#farmBase').textContent=t('base',lanes.farm.base); $('#forestBase').textContent=t('base',lanes.forest.base); $('#mineBase').textContent=t('base',lanes.mine.base);
  $('#farmEventRate').textContent=t('eventRate'); $('#forestEventRate').textContent=t('eventRate'); $('#mineEventRate').textContent=t('eventRate');
  $('#farmDesc').textContent=t('farmDesc'); $('#forestDesc').textContent=t('forestDesc'); $('#mineDesc').textContent=t('mineDesc');
  $('#farmGain').textContent=t('base',lanes.farm.base); $('#forestGain').textContent=t('base',lanes.forest.base); $('#mineGain').textContent=t('base',lanes.mine.base);
  $('#farmBtn').textContent=t('develop'); $('#forestBtn').textContent=t('develop'); $('#mineBtn').textContent=t('develop');
  $('#setupTitle').textContent=t('setupTitle'); $('#setupHelp').textContent=t('setupHelp'); $('#sampleBtn').textContent=t('sample'); $('#startBtn').textContent=t('start');
  $('#eventOkBtn').textContent=t('ok'); $('#againBtn').textContent=t('again');
  $('#roundLimit').placeholder='Rounds'; $('#targetScore').placeholder='Target'; $('#timeLimit').placeholder='Seconds';
  render();
}
function renderTeamCards(){
  const box=$('#teamCards'); box.innerHTML='';
  ['A','B'].forEach(code=>{ const tm=state[code]; const d=document.createElement('div'); d.className='team-card'+(turn===code?' active':''); d.innerHTML=`<div class="team-head"><span>${teamName(code)}</span><span class="team-score">${tm.score}</span></div><div class="mini">${code==='A'?'Blue':'Orange'}</div><div class="res-line"><div class="res-pill">🌾 Lv.${tm.farm}</div><div class="res-pill">🌲 Lv.${tm.forest}</div><div class="res-pill">⛏️ Lv.${tm.mine}</div></div>`; box.appendChild(d); });
}
function renderLogs(){ $('#logs').innerHTML=logs.map(x=>`<div class="log">${x}</div>`).join(''); }
function renderEvents(){ $('#eventList').innerHTML=events.map(x=>`<div class="event-pill ${x.type}"><b>${x.team}</b><br>${x.text}</div>`).join(''); }
function render(){
  renderTeamCards(); renderLogs(); renderEvents();
  $('#roundText').textContent=t('round', round, roundLimit, teamName(turn)); $('#hintText').textContent=t('hint');
  ['farm','forest','mine'].forEach(k=>{const zone=$('#'+k+'Zone'); zone.classList.toggle('active', activeLane===k); zone.classList.remove('unavailable');});
}
function startGame(){
  questions=parseQuestions(); if(!questions.length){ sampleQuestions(); questions=parseQuestions(); }
  roundLimit=Number($('#roundLimit').value||18); targetScore=Number($('#targetScore').value||20); timeLimit=Number($('#timeLimit').value||360);
  state={A:{score:0,farm:0,forest:0,mine:0},B:{score:0,farm:0,forest:0,mine:0}}; logs=[]; events=[]; round=1; turn='A'; activeLane=null; activeBase=0;
  $('#setup').classList.add('hidden'); timeEnd=Date.now()+timeLimit*1000; clearInterval(timerId); timerId=setInterval(tick,200); render();
}
function tick(){ const s=Math.max(0,Math.ceil((timeEnd-Date.now())/1000)); $('#timer').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); if(s<=0) finishGame(); }
function chooseLane(lane){ activeLane=lane; activeBase=lanes[lane].base; render(); askQuestion(lane); }
function askQuestion(lane){ const q=questions[Math.floor(Math.random()*questions.length)]; pendingQ=q; $('#qModalTitle').textContent=t('qTitle',laneName(lane),lanes[lane].base); $('#qModalMeta').textContent=t('qOf',teamName(turn),laneName(lane)); $('#qModalPrompt').textContent=q.q; const box=$('#qOptions'); box.innerHTML=''; q.opts.forEach((opt,i)=>{ const b=document.createElement('button'); b.className='opt'; b.textContent=String.fromCharCode(65+i)+'. '+opt; b.onclick=()=>answerQuestion(i===q.ans); box.appendChild(b); }); $('#quizModal').classList.remove('hidden'); }
function answerQuestion(correct){ $('#quizModal').classList.add('hidden'); const team=teamName(turn); const lane=activeLane; if(correct){ state[turn].score += activeBase; state[turn][lane] += 1; logs.unshift('✅ '+t('turnGain', team, laneName(lane), activeBase)); logs=logs.slice(0,10); if(Math.random() < lanes[lane].eventChance){ triggerEvent(turn,lane); } else { afterTurn(); } } else { logs.unshift('❌ '+t('turnFail', team, laneName(lane))); logs=logs.slice(0,10); // wrong answer can still trigger bad event sometimes
    if(Math.random()<0.45){ const pool=eventPools[lane].filter(x=>x.type==='bad'); const ev=pool[Math.floor(Math.random()*pool.length)]; applyEvent(turn, ev); } else { afterTurn(); }
  }
  render();
}
function triggerEvent(teamCode,lane){ const pool=eventPools[lane]; const ev=pool[Math.floor(Math.random()*pool.length)]; applyEvent(teamCode, ev); }
function applyEvent(teamCode, ev){ state[teamCode].score += ev.delta; events.unshift({type:ev.type, team:teamName(teamCode), text:(ev.delta>0?'+':'')+ev.delta+' ｜ '+t(ev.key)}); events=events.slice(0,8); logs.unshift((ev.type==='good'?'🌟 ':'⚠️ ')+t('eventApplied', teamName(teamCode), ev.delta)); logs=logs.slice(0,10); $('#eventModalTitle').textContent=ev.type==='good'?t('positive'):t('negative'); const box=$('#eventBox'); box.className='eventBox '+ev.type; $('#eventBoxTitle').textContent=t(ev.key)+'  '+(ev.delta>0?'+':'')+ev.delta; $('#eventBoxDesc').textContent=t(ev.desc); $('#eventModal').classList.remove('hidden'); }
function afterTurn(){
  checkFinish();
  if($('#eventModal').classList.contains('hidden')) nextTurn();
}
function nextTurn(){ activeLane=null; if(state.A.score>=targetScore || state.B.score>=targetScore){ finishGame(); return; } if(turn==='A'){ turn='B'; } else { turn='A'; round += 1; } if(round>roundLimit){ finishGame(); return; } render(); }
function checkFinish(){ if(state.A.score>=targetScore || state.B.score>=targetScore){ finishGame(); } }
function finishGame(){ clearInterval(timerId); const a=state.A.score, b=state.B.score; $('#win').classList.remove('hidden'); if(a===b){ $('#winTitle').textContent=t('draw'); } else { $('#winTitle').textContent=t('winner', a>b?teamName('A'):teamName('B')); } $('#winDesc').textContent=t('summary', a, b); }
function showSampleBank(){ sampleQuestions(); }
$('#lang').onchange=e=>{lang=e.target.value; $('#setupLang').value=lang; applyI18N();}; $('#setupLang').onchange=e=>{lang=e.target.value; $('#lang').value=lang; applyI18N();};
$('#setupBtn').onclick=()=>$('#setup').classList.remove('hidden'); $('#fullBtn').onclick=()=>document.documentElement.requestFullscreen?.(); $('#resetBtn').onclick=()=>location.reload(); $('#sampleBtn').onclick=sampleQuestions; $('#startBtn').onclick=startGame; $('#skipBtn').onclick=()=>{ logs.unshift('⏭️ '+teamName(turn)+' skipped turn'); logs=logs.slice(0,10); if(turn==='A') turn='B'; else { turn='A'; round += 1; } render(); }; $('#answerKeyBtn').onclick=showSampleBank; $('#farmBtn').onclick=()=>chooseLane('farm'); $('#forestBtn').onclick=()=>chooseLane('forest'); $('#mineBtn').onclick=()=>chooseLane('mine'); $('#eventOkBtn').onclick=()=>{ $('#eventModal').classList.add('hidden'); checkFinish(); if(!$('#win').classList.contains('hidden')) return; nextTurn(); };
sampleQuestions(); applyI18N();
