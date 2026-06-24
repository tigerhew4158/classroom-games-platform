
(() => {
  const I18N = {
    zh:{
      title:'知识赛马',subtitle:'答对就前进，最先到终点的队伍获胜',fullscreen:'全屏',soundOn:'音效：开',soundOff:'音效：关',teacherSettings:'老师设定',teamCount:'队伍数量',raceTheme:'赛道主题',themeHorse:'赛马',themeCar:'赛车',themeRocket:'火箭',themeBoat:'小船',goalSteps:'终点步数',gameTime:'游戏时间',noLimit:'不限时',correctAction:'答对后',wrongAction:'答错后',nextTeam:'换下一队',sameTeam:'本队继续',wrongPenalty:'答错是否后退',yes:'是',no:'否',shuffleQuestions:'题目顺序',shuffle:'随机',order:'顺序',questionBank:'题库',bankHint:'格式：题目,正确答案,错误选项1,错误选项2,错误选项3。只有两栏时会变成开放题，由老师判断答对或答错。',startGame:'开始游戏',importTxt:'导入TXT',exportTxt:'导出TXT',sample:'示例题库',timeLeft:'剩余时间',questionNo:'题号',showSettings:'显示设定',hideSettings:'隐藏设定',nextQuestion:'下一题',endGame:'结束',reset:'重置',currentQuestion:'当前题目',waitingStart:'请先设定题库，然后点击开始游戏。',answerArea:'作答区',openHint:'开放题：学生口答或写在白板后，由老师点击答对 / 答错。',studentAnswer:'学生答案 / 备注',showAnswer:'显示答案',hideAnswer:'隐藏答案',correct:'答对',wrong:'答错',readyMsg:'准备开始。老师开始游戏后，设定区会自动隐藏。',red:'红队',blue:'蓝队',green:'绿队',purple:'紫队',score:'得分',step:'步',answer:'答案',correctMsg:'答对！前进一步。',wrongMsg:'答错。',finishWin:'冲过终点！',timeUp:'时间到！',gameOver:'比赛结束',rankingText:'排名如下',playAgain:'再玩一次',close:'关闭',questionEmpty:'题库为空，请先输入题目。',needTwoCols:'每一行至少需要：题目,正确答案',openQuestion:'开放题',choiceQuestion:'选择题',selectAnswer:'请选择答案。',settingsShown:'已显示老师设定。',settingsHidden:'老师设定已隐藏。',sampleLoaded:'已载入示例题库。',fileLoaded:'已导入题库。',exported:'已导出题库。',noMore:'题目已经用完，将重新循环。',manualNext:'已切换下一题。',teamTurn:'轮到',first:'第一名',draw:'平手'},
    en:{
      title:'Knowledge Race',subtitle:'Answer correctly to move forward. First team to the finish wins.',fullscreen:'Fullscreen',soundOn:'Sound: On',soundOff:'Sound: Off',teacherSettings:'Teacher Settings',teamCount:'Number of Teams',raceTheme:'Race Theme',themeHorse:'Horse Race',themeCar:'Car Race',themeRocket:'Rocket Race',themeBoat:'Boat Race',goalSteps:'Finish Steps',gameTime:'Game Time',noLimit:'No Limit',correctAction:'After Correct',wrongAction:'After Wrong',nextTeam:'Next Team',sameTeam:'Same Team Continues',wrongPenalty:'Move Back If Wrong',yes:'Yes',no:'No',shuffleQuestions:'Question Order',shuffle:'Random',order:'In Order',questionBank:'Question Bank',bankHint:'Format: Question,Correct Answer,Wrong Option 1,Wrong Option 2,Wrong Option 3. With only two columns, it becomes an open question for the teacher to judge.',startGame:'Start Game',importTxt:'Import TXT',exportTxt:'Export TXT',sample:'Sample Bank',timeLeft:'Time Left',questionNo:'Question',showSettings:'Show Settings',hideSettings:'Hide Settings',nextQuestion:'Next Question',endGame:'End',reset:'Reset',currentQuestion:'Current Question',waitingStart:'Set the question bank, then click Start Game.',answerArea:'Answer Area',openHint:'Open question: students answer orally or on the board. Teacher marks correct or wrong.',studentAnswer:'Student answer / note',showAnswer:'Show Answer',hideAnswer:'Hide Answer',correct:'Correct',wrong:'Wrong',readyMsg:'Ready. Teacher settings will hide automatically after starting.',red:'Red Team',blue:'Blue Team',green:'Green Team',purple:'Purple Team',score:'Score',step:'Step',answer:'Answer',correctMsg:'Correct! Move forward one step.',wrongMsg:'Wrong.',finishWin:'reached the finish line!',timeUp:'Time is up!',gameOver:'Game Over',rankingText:'Ranking',playAgain:'Play Again',close:'Close',questionEmpty:'Question bank is empty.',needTwoCols:'Each line needs at least: Question,Correct Answer',openQuestion:'Open Question',choiceQuestion:'Multiple Choice',selectAnswer:'Choose an answer.',settingsShown:'Teacher settings shown.',settingsHidden:'Teacher settings hidden.',sampleLoaded:'Sample bank loaded.',fileLoaded:'Question bank imported.',exported:'Question bank exported.',noMore:'All questions used. Restarting the list.',manualNext:'Next question loaded.',teamTurn:'Turn:',first:'1st Place',draw:'Draw'},
    ms:{
      title:'Lumba Ilmu',subtitle:'Jawab betul untuk mara. Pasukan pertama sampai penamat menang.',fullscreen:'Skrin Penuh',soundOn:'Bunyi: Hidup',soundOff:'Bunyi: Mati',teacherSettings:'Tetapan Guru',teamCount:'Bilangan Pasukan',raceTheme:'Tema Perlumbaan',themeHorse:'Lumba Kuda',themeCar:'Lumba Kereta',themeRocket:'Lumba Roket',themeBoat:'Lumba Bot',goalSteps:'Langkah Penamat',gameTime:'Masa Permainan',noLimit:'Tiada Had',correctAction:'Selepas Betul',wrongAction:'Selepas Salah',nextTeam:'Pasukan Seterusnya',sameTeam:'Pasukan Sama Teruskan',wrongPenalty:'Undur Jika Salah',yes:'Ya',no:'Tidak',shuffleQuestions:'Susunan Soalan',shuffle:'Rawak',order:'Ikut Turutan',questionBank:'Bank Soalan',bankHint:'Format: Soalan,Jawapan Betul,Pilihan Salah 1,Pilihan Salah 2,Pilihan Salah 3. Jika hanya dua lajur, ia menjadi soalan terbuka dan guru menilai betul/salah.',startGame:'Mula Permainan',importTxt:'Import TXT',exportTxt:'Eksport TXT',sample:'Contoh Soalan',timeLeft:'Masa Tinggal',questionNo:'Soalan',showSettings:'Papar Tetapan',hideSettings:'Sembunyi Tetapan',nextQuestion:'Soalan Seterusnya',endGame:'Tamat',reset:'Tetap Semula',currentQuestion:'Soalan Semasa',waitingStart:'Tetapkan bank soalan, kemudian klik Mula Permainan.',answerArea:'Ruang Jawapan',openHint:'Soalan terbuka: murid jawab secara lisan atau di papan putih. Guru klik betul atau salah.',studentAnswer:'Jawapan murid / catatan',showAnswer:'Papar Jawapan',hideAnswer:'Sembunyi Jawapan',correct:'Betul',wrong:'Salah',readyMsg:'Sedia. Tetapan guru akan disembunyikan selepas mula.',red:'Pasukan Merah',blue:'Pasukan Biru',green:'Pasukan Hijau',purple:'Pasukan Ungu',score:'Markah',step:'Langkah',answer:'Jawapan',correctMsg:'Betul! Maju satu langkah.',wrongMsg:'Salah.',finishWin:'sampai ke garisan penamat!',timeUp:'Masa tamat!',gameOver:'Permainan Tamat',rankingText:'Kedudukan',playAgain:'Main Lagi',close:'Tutup',questionEmpty:'Bank soalan kosong.',needTwoCols:'Setiap baris perlu sekurang-kurangnya: Soalan,Jawapan Betul',openQuestion:'Soalan Terbuka',choiceQuestion:'Pilihan Jawapan',selectAnswer:'Sila pilih jawapan.',settingsShown:'Tetapan guru dipaparkan.',settingsHidden:'Tetapan guru disembunyikan.',sampleLoaded:'Contoh soalan dimuatkan.',fileLoaded:'Bank soalan diimport.',exported:'Bank soalan dieksport.',noMore:'Semua soalan telah digunakan. Senarai dimulakan semula.',manualNext:'Soalan seterusnya dimuatkan.',teamTurn:'Giliran:',first:'Tempat Pertama',draw:'Seri'}
  };

  const TEAM_COLORS = ['var(--red)','var(--blue)','var(--green)','var(--purple)'];
  const TEAM_KEYS = ['red','blue','green','purple'];
  const TEAM_DOTS = ['🔴','🔵','🟢','🟣'];
  const THEME_EMOJI = {horse:'🐎', car:'🏎️', rocket:'🚀', boat:'⛵'};
  const SAMPLE = `马来西亚首都是哪里？,吉隆坡,新山,槟城,马六甲\nAI 可以随便用同学照片做搞笑图吗？,不可以,可以,只要好笑就可以,老师没看到就可以\n太阳从哪里升起？,东方,西方,南方,北方\nCPU 的中文意思是什么？,中央处理器,显卡,硬盘,显示器\n光合作用需要什么？,阳光,盐,铁,沙子\npassword 的中文意思是什么？,密码\nChatGPT 属于什么工具？,AI工具\nJalur Gemilang 是什么？,马来西亚国旗\nSelamat pagi 的中文意思是什么？,早安\n水的化学式是什么？,H2O,CO2,O2,NaCl`;

  const $ = (id)=>document.getElementById(id);
  let lang='zh';
  let teams=[];
  let teamCount=2;
  let activeTeam=0;
  let goalSteps=8;
  let questions=[];
  let currentQ=null;
  let currentIndex=0;
  let questionCounter=0;
  let timer=null;
  let remaining=300;
  let gameStarted=false;
  let soundOn=true;
  let answerVisible=false;
  let selectedLocked=false;

  function t(key){return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;}

  function applyI18n(){
    document.documentElement.lang = lang==='zh'?'zh-CN':lang==='ms'?'ms':'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(!key) return;
      if(el.tagName==='OPTION') el.textContent=t(key); else el.textContent=t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      el.placeholder=t(el.getAttribute('data-i18n-placeholder'));
    });
    $('soundBtn').textContent = soundOn ? t('soundOn') : t('soundOff');
    $('showSettingsBtn').textContent = $('settingsPanel').classList.contains('hidden') ? t('showSettings') : t('hideSettings');
    renderTeams();
    renderQuestion();
    updateStatus();
    saveSettings();
  }

  function saveSettings(){
    const data={lang,soundOn,teamCount:$('teamCount').value,raceTheme:$('raceTheme').value,goalSteps:$('goalSteps').value,gameTime:$('gameTime').value,correctAction:$('correctAction').value,wrongAction:$('wrongAction').value,wrongPenalty:$('wrongPenalty').value,shuffleMode:$('shuffleMode').value,questionText:$('questionText').value};
    localStorage.setItem('lead_knowledge_race_settings', JSON.stringify(data));
  }

  function loadSettings(){
    const raw=localStorage.getItem('lead_knowledge_race_settings');
    if(raw){
      try{
        const s=JSON.parse(raw);
        lang=s.lang || 'zh'; $('uiLang').value=lang; soundOn=s.soundOn!==false;
        ['teamCount','raceTheme','goalSteps','gameTime','correctAction','wrongAction','wrongPenalty','shuffleMode','questionText'].forEach(id=>{ if(s[id]!==undefined) $(id).value=s[id]; });
      }catch(e){}
    }
    if(!$('questionText').value.trim()) $('questionText').value=SAMPLE;
  }

  function parseCSVLine(line){
    const out=[]; let cur=''; let quote=false;
    for(let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"'){
        if(quote && line[i+1]==='"'){cur+='"'; i++;}
        else quote=!quote;
      }else if((ch===',' || ch==='，') && !quote){out.push(cur.trim()); cur='';}
      else cur+=ch;
    }
    out.push(cur.trim());
    return out.filter((v,i)=>v!=='' || i<2);
  }

  function parseQuestions(){
    const lines=$('questionText').value.split(/\r?\n/).map(l=>l.trim()).filter(l=>l && !l.startsWith('#'));
    const list=[];
    for(const line of lines){
      const cols=parseCSVLine(line);
      if(cols.length>=2 && cols[0] && cols[1]){
        list.push({q:cols[0], answer:cols[1], wrongs:cols.slice(2).filter(Boolean)});
      }
    }
    return list;
  }

  function shuffle(arr){
    const a=arr.slice();
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];}
    return a;
  }

  function initTeams(){
    teamCount=parseInt($('teamCount').value,10);
    teams=Array.from({length:teamCount},(_,i)=>({name:t(TEAM_KEYS[i]),dot:TEAM_DOTS[i],score:0,steps:0,color:TEAM_COLORS[i]}));
    activeTeam=0;
  }

  function renderTeams(){
    if(!teams.length) initTeams();
    const theme=$('raceTheme').value;
    $('logoEmoji').textContent = THEME_EMOJI[theme] || '🐎';
    teams.forEach((tm,i)=>{tm.name=t(TEAM_KEYS[i]); tm.dot=TEAM_DOTS[i];});
    const tracks=$('tracks'); tracks.innerHTML='';
    const cards=$('teamCards'); cards.innerHTML='';
    goalSteps=parseInt($('goalSteps').value,10);
    teams.forEach((tm,i)=>{
      const lane=document.createElement('div'); lane.className='lane';
      lane.innerHTML=`<div class="team-label" style="background:${tm.color}">${tm.dot} ${tm.name}<small>${t('score')}: ${tm.score}</small></div><div class="track"><div class="steps">${Array.from({length:goalSteps},()=>'<div class="step"></div>').join('')}</div><div class="racer" id="racer-${i}">${THEME_EMOJI[theme] || '🐎'}</div></div><div class="score-pill">${tm.steps}/${goalSteps}</div>`;
      tracks.appendChild(lane);
      const card=document.createElement('div'); card.className='team-card'+(i===activeTeam?' active':'');
      card.innerHTML=`<div class="emoji">${tm.dot}</div><div class="name">${tm.name}</div><div class="score">${tm.score}</div><div class="hint">${tm.steps} ${t('step')}</div>`;
      cards.appendChild(card);
    });
    requestAnimationFrame(updateRacers);
  }

  function updateRacers(){
    goalSteps=parseInt($('goalSteps').value,10);
    teams.forEach((tm,i)=>{
      const r=$(`racer-${i}`);
      if(r){
        const pct=Math.min(96, Math.max(4, (tm.steps/goalSteps)*92 + 4));
        r.style.left=pct+'%';
      }
    });
  }

  function formatTime(sec){
    if(sec<=0) return '00:00';
    const m=Math.floor(sec/60).toString().padStart(2,'0');
    const s=(sec%60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }

  function updateStatus(){
    $('timeLeft').textContent = parseInt($('gameTime').value,10)===0 ? '∞' : formatTime(remaining);
    $('questionNo').textContent = `${questionCounter}/${questions.length || 0}`;
    if(teams[activeTeam]) $('activeTeamBadge').textContent = `${teams[activeTeam].dot} ${teams[activeTeam].name}`;
  }

  function setMessage(msg){$('message').textContent=msg;}

  function beep(type='good'){
    if(!soundOn) return;
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o=ctx.createOscillator(); const g=ctx.createGain();
      o.type='sine'; o.frequency.value = type==='good'?660:(type==='bad'?180:420);
      g.gain.setValueAtTime(.001,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(.18,ctx.currentTime+.02);
      g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.18);
      o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime+.2);
    }catch(e){}
  }

  function speak(text){
    if(!soundOn || !('speechSynthesis' in window)) return;
    const u=new SpeechSynthesisUtterance(text); u.rate=.95; u.pitch=1.05; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  }

  function nextQuestion(manual=false){
    if(!questions.length){ setMessage(t('questionEmpty')); return; }
    if(currentIndex>=questions.length){
      setMessage(t('noMore'));
      currentIndex=0;
      if($('shuffleMode').value==='shuffle') questions=shuffle(questions);
    }
    currentQ=questions[currentIndex++];
    questionCounter++;
    selectedLocked=false; answerVisible=false; $('answerReveal').style.display='none'; $('answerReveal').textContent=''; $('openInput').value='';
    renderQuestion(); updateStatus();
    if(manual) setMessage(t('manualNext')); else setMessage(`${t('teamTurn')} ${teams[activeTeam].name}`);
  }

  function renderQuestion(){
    const qEl=$('questionDisplay'), optEl=$('options'), openEl=$('openMode');
    optEl.innerHTML='';
    if(!currentQ){ qEl.textContent=t('waitingStart'); openEl.style.display='block'; return; }
    qEl.textContent=currentQ.q;
    const isChoice=currentQ.wrongs && currentQ.wrongs.length>0;
    openEl.style.display=isChoice?'none':'block';
    if(isChoice){
      const opts=shuffle([currentQ.answer, ...currentQ.wrongs]);
      opts.forEach(opt=>{
        const btn=document.createElement('button'); btn.className='option'; btn.textContent=opt;
        btn.onclick=()=>chooseOption(btn,opt);
        optEl.appendChild(btn);
      });
    }
  }

  function chooseOption(btn,opt){
    if(selectedLocked || !gameStarted) return;
    selectedLocked=true;
    const all=[...document.querySelectorAll('.option')];
    all.forEach(b=>{ if(norm(b.textContent)===norm(currentQ.answer)) b.classList.add('correct'); });
    if(norm(opt)===norm(currentQ.answer)) handleCorrect(); else {btn.classList.add('wrong'); handleWrong();}
  }

  function norm(s){return String(s||'').trim().toLowerCase();}

  function handleCorrect(){
    if(!gameStarted || !teams[activeTeam]) return;
    teams[activeTeam].score+=1;
    teams[activeTeam].steps=Math.min(goalSteps, teams[activeTeam].steps+1);
    beep('good'); speak(currentQ ? currentQ.answer : '');
    setMessage(`${teams[activeTeam].name}：${t('correctMsg')}`);
    renderTeams(); updateStatus();
    if(teams[activeTeam].steps>=goalSteps){ finishGame(`${teams[activeTeam].name} ${t('finishWin')}`); return; }
    const stay=$('correctAction').value==='stay';
    setTimeout(()=>{ if(!gameStarted) return; if(!stay) moveNextTeam(); nextQuestion(); }, 650);
  }

  function handleWrong(){
    if(!gameStarted || !teams[activeTeam]) return;
    if($('wrongPenalty').value==='1'){
      teams[activeTeam].steps=Math.max(0, teams[activeTeam].steps-1);
      teams[activeTeam].score=Math.max(0, teams[activeTeam].score-1);
    }
    beep('bad');
    setMessage(`${teams[activeTeam].name}：${t('wrongMsg')} ${t('answer')}：${currentQ ? currentQ.answer : ''}`);
    renderTeams(); updateStatus();
    const stay=$('wrongAction').value==='stay';
    setTimeout(()=>{ if(!gameStarted) return; if(!stay) moveNextTeam(); nextQuestion(); }, 1000);
  }

  function moveNextTeam(){ activeTeam=(activeTeam+1)%teams.length; renderTeams(); updateStatus(); }

  function startGame(){
    const parsed=parseQuestions();
    if(!parsed.length){ alert(t('questionEmpty')+'\n'+t('needTwoCols')); return; }
    saveSettings();
    goalSteps=parseInt($('goalSteps').value,10);
    initTeams();
    questions=$('shuffleMode').value==='shuffle'?shuffle(parsed):parsed.slice();
    currentIndex=0; questionCounter=0; gameStarted=true; currentQ=null; selectedLocked=false;
    remaining=parseInt($('gameTime').value,10);
    $('settingsPanel').classList.add('hidden'); $('layout').classList.add('playing'); document.body.classList.add('full-game');
    renderTeams(); updateStatus(); nextQuestion();
    if(timer) clearInterval(timer);
    if(remaining>0){
      timer=setInterval(()=>{ remaining--; updateStatus(); if(remaining<=0){finishGame(t('timeUp'));}},1000);
    }
  }

  function resetGame(keepSettingsHidden=false){
    if(timer) clearInterval(timer); timer=null;
    gameStarted=false; currentQ=null; questions=[]; currentIndex=0; questionCounter=0; remaining=parseInt($('gameTime').value,10);
    initTeams(); renderTeams(); renderQuestion(); updateStatus(); setMessage(t('readyMsg'));
    if(!keepSettingsHidden){$('settingsPanel').classList.remove('hidden'); $('layout').classList.remove('playing'); document.body.classList.remove('full-game');}
  }

  function finishGame(reason=''){
    if(timer) clearInterval(timer); timer=null; gameStarted=false;
    beep('good');
    const sorted=teams.map((tm,i)=>({...tm,idx:i})).sort((a,b)=>b.steps-a.steps || b.score-a.score);
    $('resultTitle').textContent=t('gameOver'); $('resultText').textContent=reason || t('rankingText');
    $('ranking').innerHTML='';
    sorted.forEach((tm,i)=>{
      const row=document.createElement('div'); row.className='rank-row';
      row.innerHTML=`<div>${i===0?'🏆':i+1}</div><div>${tm.dot} ${tm.name}</div><div>${tm.score} / ${tm.steps}</div>`;
      $('ranking').appendChild(row);
    });
    $('resultModal').classList.add('show');
  }

  function toggleSettings(){
    const hidden=$('settingsPanel').classList.toggle('hidden');
    $('layout').classList.toggle('playing', hidden);
    document.body.classList.toggle('full-game', hidden);
    $('showSettingsBtn').textContent=hidden?t('showSettings'):t('hideSettings');
    setMessage(hidden?t('settingsHidden'):t('settingsShown'));
  }

  function exportTxt(){
    const blob=new Blob([$('questionText').value],{type:'text/plain;charset=utf-8'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='knowledge-race-question-bank.txt'; a.click(); URL.revokeObjectURL(a.href); setMessage(t('exported'));
  }

  function importTxt(file){
    const reader=new FileReader();
    reader.onload=()=>{$('questionText').value=reader.result; saveSettings(); setMessage(t('fileLoaded'));};
    reader.readAsText(file,'utf-8');
  }

  function bind(){
    $('uiLang').onchange=e=>{lang=e.target.value; applyI18n();};
    document.querySelectorAll('select,textarea,input').forEach(el=>{el.addEventListener('change',saveSettings); el.addEventListener('input',()=>{ if(el.id==='questionText') saveSettings();});});
    $('startBtn').onclick=startGame;
    $('resetBtn').onclick=()=>resetGame(false);
    $('endBtn').onclick=()=>finishGame('');
    $('nextQuestionBtn').onclick=()=>{ if(gameStarted) nextQuestion(true); };
    $('showSettingsBtn').onclick=toggleSettings;
    $('correctBtn').onclick=()=>{ if(gameStarted) handleCorrect(); };
    $('wrongBtn').onclick=()=>{ if(gameStarted) handleWrong(); };
    $('revealBtn').onclick=()=>{
      if(!currentQ) return;
      answerVisible=!answerVisible;
      $('answerReveal').style.display=answerVisible?'block':'none';
      $('answerReveal').textContent=`${t('answer')}：${currentQ.answer}`;
      $('revealBtn').textContent=answerVisible?t('hideAnswer'):t('showAnswer');
    };
    $('fullscreenBtn').onclick=()=>{ if(!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); };
    $('soundBtn').onclick=()=>{soundOn=!soundOn; $('soundBtn').textContent=soundOn?t('soundOn'):t('soundOff'); saveSettings();};
    $('sampleBtn').onclick=()=>{$('questionText').value=SAMPLE; saveSettings(); setMessage(t('sampleLoaded'));};
    $('importBtn').onclick=()=>$('fileInput').click();
    $('fileInput').onchange=e=>{ if(e.target.files[0]) importTxt(e.target.files[0]); e.target.value=''; };
    $('exportBtn').onclick=exportTxt;
    $('playAgainBtn').onclick=()=>{$('resultModal').classList.remove('show'); startGame();};
    $('closeResultBtn').onclick=()=>{$('resultModal').classList.remove('show');};
    $('teamCount').onchange=()=>{initTeams(); renderTeams(); saveSettings();};
    $('raceTheme').onchange=()=>{renderTeams(); saveSettings();};
    $('goalSteps').onchange=()=>{goalSteps=parseInt($('goalSteps').value,10); renderTeams(); saveSettings();};
    window.addEventListener('keydown',e=>{
      if(e.key==='F11') return;
      if(e.code==='Space' && gameStarted){ e.preventDefault(); nextQuestion(true); }
      if(e.key==='1' && gameStarted && currentQ && currentQ.wrongs.length===0) handleCorrect();
      if(e.key==='2' && gameStarted && currentQ && currentQ.wrongs.length===0) handleWrong();
    });
  }

  loadSettings();
  initTeams();
  bind();
  applyI18n();
  resetGame(false);
})();
