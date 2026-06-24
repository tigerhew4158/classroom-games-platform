
    const I18N = {
      zh: {
        appTitle:'炸弹倒数抢答',
        appSubtitle:'老师投影即可玩：答对就把炸弹传出去，炸弹爆炸时当前队伍扣分。',
        settingsTitle:'老师设定', start:'开始游戏', showSettings:'显示/隐藏设定', fullscreen:'全屏', nextQ:'下一题', reset:'重置',
        language:'介面语言', teams:'分组数量', target:'目标分', bombSeconds:'每回合炸弹秒数', gameTime:'游戏总时间',
        wrongPenalty:'答错扣分', explodePenalty:'爆炸扣分', wrongMode:'答错后', wrongKeep:'炸弹留在本组，继续抢答', wrongPass:'传给下一组',
        sound:'开启音效', shuffle:'随机出题', bank:'题库', bankHint:'格式：题目,正确答案 或 题目,正确答案,错误选项1,错误选项2,错误选项3',
        import:'汇入 TXT', export:'汇出 TXT', demo:'载入范例', totalTime:'总时间', unlimited:'不限时', question:'题目', clickStart:'点击“开始游戏”',
        qCount:(a,b)=>`${a} / ${b}`, round:n=>`第 ${n} 题`, active:t=>`${t}持有炸弹`, bombMsg:'答对就传给下一队；倒数归零会爆炸。',
        hiddenAnswer:'答案会隐藏在这里', correct:'答对 / 传出炸弹', wrong:'答错', showAnswer:'显示/隐藏答案', forceExplode:'立即爆炸',
        teamsNames:['红队','蓝队','绿队','黄队'], active:'抢答中', waiting:'等待', score:'分',
        correctLog:t=>`✅ ${t} 答对，加 1 分，炸弹传出。`, wrongLog:t=>`❌ ${t} 答错。`, explodeLog:t=>`💥 炸弹在 ${t} 爆炸，扣分。`,
        targetWin:t=>`${t} 达到目标分！`, timeUp:'时间到！', gameOver:'游戏结束', ranking:'排名如下', playAgain:'再玩一次', close:'关闭',
        noBank:'题库为空，请先输入题库。', badBank:'题库格式不足，请至少输入：题目,正确答案', loaded:'已载入题库。', exported:'已汇出题库。', answer:'正确答案', noQuestion:'没有题目了。',
        optionCorrect:'答对！', optionWrong:'答错！'
      },
      en: {
        appTitle:'Bomb Countdown Quiz',
        appSubtitle:'Project and play: answer correctly to pass the bomb. If it explodes, the active team loses points.',
        settingsTitle:'Teacher Settings', start:'Start Game', showSettings:'Show/Hide Settings', fullscreen:'Fullscreen', nextQ:'Next Question', reset:'Reset',
        language:'Interface Language', teams:'Number of Teams', target:'Target Score', bombSeconds:'Bomb Timer Per Turn', gameTime:'Total Game Time',
        wrongPenalty:'Wrong Answer Penalty', explodePenalty:'Explosion Penalty', wrongMode:'After Wrong Answer', wrongKeep:'Keep bomb with current team', wrongPass:'Pass to next team',
        sound:'Sound effects', shuffle:'Shuffle questions', bank:'Question Bank', bankHint:'Format: Question,Correct Answer or Question,Correct Answer,Wrong Option 1,Wrong Option 2,Wrong Option 3',
        import:'Import TXT', export:'Export TXT', demo:'Load Demo', totalTime:'Time', unlimited:'Unlimited', question:'Question', clickStart:'Click “Start Game”',
        qCount:(a,b)=>`${a} / ${b}`, round:n=>`Question ${n}`, active:t=>`${t} has the bomb`, bombMsg:'Answer correctly to pass the bomb. It explodes at zero.',
        hiddenAnswer:'The answer is hidden here', correct:'Correct / Pass Bomb', wrong:'Wrong', showAnswer:'Show/Hide Answer', forceExplode:'Explode Now',
        teamsNames:['Red Team','Blue Team','Green Team','Yellow Team'], active:'Answering', waiting:'Waiting', score:'pts',
        correctLog:t=>`✅ ${t} answered correctly. +1 point. Bomb passed.`, wrongLog:t=>`❌ ${t} answered wrongly.`, explodeLog:t=>`💥 Bomb exploded on ${t}. Penalty applied.`,
        targetWin:t=>`${t} reached the target score!`, timeUp:'Time is up!', gameOver:'Game Over', ranking:'Ranking', playAgain:'Play Again', close:'Close',
        noBank:'Question bank is empty.', badBank:'Invalid format. At least: Question,Correct Answer', loaded:'Question bank loaded.', exported:'Question bank exported.', answer:'Correct Answer', noQuestion:'No more questions.',
        optionCorrect:'Correct!', optionWrong:'Wrong!'
      },
      ms: {
        appTitle:'Kuiz Bom Kiraan Detik',
        appSubtitle:'Paparkan di kelas: jawab betul untuk hantar bom. Jika meletup, pasukan aktif ditolak markah.',
        settingsTitle:'Tetapan Guru', start:'Mula Permainan', showSettings:'Papar/Sorok Tetapan', fullscreen:'Skrin Penuh', nextQ:'Soalan Seterusnya', reset:'Tetap Semula',
        language:'Bahasa Antara Muka', teams:'Bilangan Pasukan', target:'Markah Sasaran', bombSeconds:'Masa Bom Setiap Giliran', gameTime:'Jumlah Masa Permainan',
        wrongPenalty:'Potongan Jawapan Salah', explodePenalty:'Potongan Letupan', wrongMode:'Selepas Jawapan Salah', wrongKeep:'Bom kekal pada pasukan ini', wrongPass:'Hantar kepada pasukan seterusnya',
        sound:'Kesan bunyi', shuffle:'Rawak soalan', bank:'Bank Soalan', bankHint:'Format: Soalan,Jawapan Betul atau Soalan,Jawapan Betul,Pilihan Salah 1,Pilihan Salah 2,Pilihan Salah 3',
        import:'Import TXT', export:'Eksport TXT', demo:'Muat Demo', totalTime:'Masa', unlimited:'Tanpa had', question:'Soalan', clickStart:'Klik “Mula Permainan”',
        qCount:(a,b)=>`${a} / ${b}`, round:n=>`Soalan ${n}`, active:t=>`${t} memegang bom`, bombMsg:'Jawab betul untuk hantar bom. Bom meletup apabila kiraan menjadi sifar.',
        hiddenAnswer:'Jawapan disembunyikan di sini', correct:'Betul / Hantar Bom', wrong:'Salah', showAnswer:'Papar/Sorok Jawapan', forceExplode:'Letupkan Sekarang',
        teamsNames:['Pasukan Merah','Pasukan Biru','Pasukan Hijau','Pasukan Kuning'], active:'Menjawab', waiting:'Menunggu', score:'markah',
        correctLog:t=>`✅ ${t} jawab betul. +1 markah. Bom dihantar.`, wrongLog:t=>`❌ ${t} jawab salah.`, explodeLog:t=>`💥 Bom meletup pada ${t}. Markah ditolak.`,
        targetWin:t=>`${t} mencapai markah sasaran!`, timeUp:'Masa tamat!', gameOver:'Permainan Tamat', ranking:'Kedudukan', playAgain:'Main Lagi', close:'Tutup',
        noBank:'Bank soalan kosong.', badBank:'Format tidak lengkap. Sekurang-kurangnya: Soalan,Jawapan Betul', loaded:'Bank soalan dimuatkan.', exported:'Bank soalan dieksport.', answer:'Jawapan Betul', noQuestion:'Tiada soalan lagi.',
        optionCorrect:'Betul!', optionWrong:'Salah!'
      }
    };

    const COLORS = ['var(--red)','var(--blue)','var(--green)','var(--accent)'];
    const EMOJIS = ['🔴','🔵','🟢','🟡'];
    const $ = id => document.getElementById(id);
    let state = {
      lang:'zh', teamCount:2, teams:[], activeIndex:0,
      bank:[], order:[], qPointer:0, currentQuestion:null, questionNo:0,
      playing:false, paused:false, answerVisible:false,
      bombTotal:15, bombLeft:15, totalGameSeconds:300, gameLeft:300,
      bombTimer:null, gameTimer:null, roundLocked:false,
      logs:[]
    };

    const demoBank = `AI可以随便用同学照片做搞笑图吗？,不可以,可以,看情况,只要好笑就可以
马来西亚首都是哪里？,吉隆坡,新山,槟城,马六甲
password 的中文意思是什么？,密码,电脑,网络,账号
太阳从哪里升起？,东方,西方,南方,北方
ChatGPT属于什么工具？,AI工具,交通工具,厨房工具,运动工具
儿童在网上应不应该公开家庭住址？,不应该,应该,可以给陌生人,无所谓
photosynthesis 对应中文是什么？,光合作用,蒸发,摩擦力,呼吸作用
CPU通常被称为什么？,中央处理器,显示器,键盘,电池
selamat pagi 是什么意思？,早安,谢谢,再见,晚上好
网络链接可疑时应该怎么做？,不要随便点击,立刻点击,转发朋友,输入密码`;

    function t(key,...args){
      const v = I18N[state.lang][key];
      return typeof v === 'function' ? v(...args) : v;
    }
    function saveSettings(){
      const data = {
        lang:$('languageSelect').value, teamCount:$('teamCount').value, targetScore:$('targetScore').value,
        bombSeconds:$('bombSeconds').value, gameMinutes:$('gameMinutes').value,
        wrongPenalty:$('wrongPenalty').value, explodePenalty:$('explodePenalty').value, wrongMode:$('wrongMode').value,
        sound:$('soundToggle').checked, shuffle:$('shuffleToggle').checked, bank:$('questionBank').value
      };
      localStorage.setItem('bombQuizSettings', JSON.stringify(data));
    }
    function loadSettings(){
      const raw = localStorage.getItem('bombQuizSettings');
      if(raw){
        try{
          const d = JSON.parse(raw);
          $('languageSelect').value = d.lang || 'zh';
          $('teamCount').value = d.teamCount || '2';
          $('targetScore').value = d.targetScore || '10';
          $('bombSeconds').value = d.bombSeconds || '15';
          $('gameMinutes').value = d.gameMinutes || '5';
          $('wrongPenalty').value = d.wrongPenalty || '0';
          $('explodePenalty').value = d.explodePenalty || '2';
          $('wrongMode').value = d.wrongMode || 'keep';
          $('soundToggle').checked = d.sound !== false;
          $('shuffleToggle').checked = d.shuffle !== false;
          $('questionBank').value = d.bank || demoBank;
        }catch(e){$('questionBank').value = demoBank;}
      } else {
        $('questionBank').value = demoBank;
      }
      state.lang = $('languageSelect').value;
    }
    function applyLanguage(){
      state.lang = $('languageSelect').value;
      document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : state.lang;
      $('appTitle').textContent = t('appTitle');
      $('appSubtitle').textContent = t('appSubtitle');
      $('settingsTitle').textContent = t('settingsTitle');
      $('btnStart').textContent = t('start');
      $('btnToggleSettings').textContent = t('showSettings');
      $('btnFullscreen').textContent = t('fullscreen');
      $('btnNextQ').textContent = t('nextQ');
      $('btnResetGame').textContent = t('reset');
      $('languageLabel').textContent = t('language');
      $('teamCountLabel').textContent = t('teams');
      $('targetScoreLabel').textContent = t('target');
      $('bombTimeLabel').textContent = t('bombSeconds');
      $('gameTimeLabel').textContent = t('gameTime');
      $('wrongPenaltyLabel').textContent = t('wrongPenalty');
      $('explodePenaltyLabel').textContent = t('explodePenalty');
      $('wrongModeLabel').textContent = t('wrongMode');
      $('wrongMode').options[0].textContent = t('wrongKeep');
      $('wrongMode').options[1].textContent = t('wrongPass');
      $('soundLabel').textContent = t('sound');
      $('shuffleLabel').textContent = t('shuffle');
      $('bankLabel').textContent = t('bank');
      $('bankHint').textContent = t('bankHint');
      $('btnImport').textContent = t('import');
      $('btnExport').textContent = t('export');
      $('btnDemo').textContent = t('demo');
      $('questionLabel').textContent = t('question');
      $('btnCorrect').textContent = t('correct');
      $('btnWrong').textContent = t('wrong');
      $('btnShowAnswer').textContent = t('showAnswer');
      $('btnForceExplode').textContent = t('forceExplode');
      $('btnPlayAgain').textContent = t('playAgain');
      $('btnCloseResult').textContent = t('close');
      if(!state.playing){
        $('questionBox').textContent = t('clickStart');
        $('answerText').textContent = t('hiddenAnswer');
        $('bombMessage').textContent = t('bombMsg');
      }
      renderScoreboard();
      updateTimersUI();
      saveSettings();
    }
    function parseBank(text){
      return text.split(/\r?\n/).map(line=>line.trim()).filter(Boolean).map((line,idx)=>{
        const parts = line.split(',').map(x=>x.trim()).filter(x=>x.length>0);
        if(parts.length < 2) return null;
        const q = parts[0], answer = parts[1];
        const options = parts.length >= 3 ? parts.slice(1) : [];
        return {id:idx+1, q, answer, options};
      }).filter(Boolean);
    }
    function shuffle(arr){
      const a = arr.slice();
      for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
      return a;
    }
    function initTeams(){
      state.teamCount = parseInt($('teamCount').value,10);
      state.teams = Array.from({length:state.teamCount}, (_,i)=>({
        name:t('teamsNames')[i], score:0, color:COLORS[i], emoji:EMOJIS[i]
      }));
      state.activeIndex = 0;
      renderScoreboard();
    }
    function renderScoreboard(){
      if(!state.teams.length){
        const count = parseInt($('teamCount').value,10) || 2;
        state.teams = Array.from({length:count}, (_,i)=>({name:t('teamsNames')[i], score:0, color:COLORS[i], emoji:EMOJIS[i]}));
      } else {
        state.teams.forEach((team,i)=> team.name = t('teamsNames')[i]);
      }
      const board = $('scoreboard');
      board.className = `scoreboard teams${state.teams.length}`;
      board.innerHTML = state.teams.map((team,i)=>`
        <div class="team-card ${i===state.activeIndex && state.playing ? 'active' : ''}">
          <div class="stripe" style="background:${team.color}"></div>
          <div class="team-name">${team.emoji} ${escapeHtml(team.name)}</div>
          <div class="team-status">${i===state.activeIndex && state.playing ? t('active') : t('waiting')}</div>
          <div class="team-score">${team.score} <span style="font-size:15px;color:var(--muted)">${t('score')}</span></div>
        </div>`).join('');
      if(state.playing) $('activeTeamLarge').textContent = t('active', state.teams[state.activeIndex].name);
    }
    function escapeHtml(str){return String(str).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
    function formatTime(sec){
      if(sec <= 0) return '00:00';
      const m = Math.floor(sec/60), s = sec%60;
      return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
    function updateTimersUI(){
      const mins = parseInt($('gameMinutes').value,10);
      if(state.playing){
        $('gameTimer').textContent = `${t('totalTime')} ${mins===0?t('unlimited'):formatTime(state.gameLeft)}`;
      }else{
        const total = mins*60;
        $('gameTimer').textContent = `${t('totalTime')} ${mins===0?t('unlimited'):formatTime(total)}`;
      }
      $('roundInfo').textContent = t('round', Math.max(1,state.questionNo || 1));
    }
    function startGame(){
      saveSettings();
      state.bank = parseBank($('questionBank').value);
      if(!state.bank.length){alert(t('noBank'));return;}
      initTeams();
      state.order = $('shuffleToggle').checked ? shuffle(state.bank) : state.bank.slice();
      state.qPointer = 0;
      state.questionNo = 0;
      state.playing = true;
      state.roundLocked = false;
      state.logs = [];
      state.bombTotal = parseInt($('bombSeconds').value,10);
      state.bombLeft = state.bombTotal;
      const mins = parseInt($('gameMinutes').value,10);
      state.totalGameSeconds = mins*60;
      state.gameLeft = state.totalGameSeconds;
      state.answerVisible = false;
      hideSettings(true);
      log('🚀 ' + t('start'));
      nextQuestion(true);
      restartBombTimer();
      restartGameTimer();
      renderScoreboard();
      updateTimersUI();
      beep(660, .07, 'square');
    }
    function hideSettings(hide){
      $('settingsPanel').classList.toggle('hidden', hide);
      $('layout').classList.toggle('settings-hidden', hide);
    }
    function stopTimers(){
      clearInterval(state.bombTimer); clearInterval(state.gameTimer);
      state.bombTimer = null; state.gameTimer = null;
    }
    function restartBombTimer(){
      clearInterval(state.bombTimer);
      state.bombLeft = state.bombTotal;
      updateBombUI();
      state.bombTimer = setInterval(()=>{
        if(!state.playing) return;
        state.bombLeft--;
        updateBombUI();
        if(state.bombLeft <= 5 && state.bombLeft > 0) beep(880, .04, 'square');
        if(state.bombLeft <= 0){explode();}
      },1000);
    }
    function restartGameTimer(){
      clearInterval(state.gameTimer);
      if(state.totalGameSeconds <= 0){updateTimersUI();return;}
      state.gameTimer = setInterval(()=>{
        if(!state.playing) return;
        state.gameLeft--;
        updateTimersUI();
        if(state.gameLeft <= 0){endGame(t('timeUp'));}
      },1000);
    }
    function updateBombUI(){
      $('bombCount').textContent = Math.max(0,state.bombLeft);
      const pct = Math.max(0,(state.bombLeft/state.bombTotal)*100);
      $('fuseFill').style.width = pct + '%';
      $('bombCount').classList.toggle('danger', state.bombLeft <= Math.max(5, Math.ceil(state.bombTotal*.28)) && state.playing);
    }
    function nextQuestion(resetRound=false){
      if(!state.bank.length) return;
      if(state.qPointer >= state.order.length){
        state.order = $('shuffleToggle').checked ? shuffle(state.bank) : state.bank.slice();
        state.qPointer = 0;
      }
      state.currentQuestion = state.order[state.qPointer++];
      state.questionNo++;
      state.roundLocked = false;
      state.answerVisible = false;
      renderQuestion();
      updateTimersUI();
      if(!resetRound) restartBombTimer();
    }
    function renderQuestion(){
      const item = state.currentQuestion;
      if(!item){$('questionBox').textContent = t('noQuestion'); return;}
      $('questionBox').textContent = item.q;
      $('questionCount').textContent = t('qCount', state.qPointer, state.order.length);
      $('answerText').textContent = `${t('answer')}：${item.answer}`;
      $('answerText').classList.toggle('hidden-answer', !state.answerVisible);
      const choices = $('choices');
      choices.innerHTML = '';
      if(item.options && item.options.length >= 2){
        const opts = shuffle([...new Set(item.options)]);
        choices.innerHTML = opts.map(opt=>`<button class="choice" data-choice="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`).join('');
        choices.querySelectorAll('.choice').forEach(btn=>{
          btn.addEventListener('click',()=>{
            if(!state.playing || state.roundLocked) return;
            const choice = btn.dataset.choice;
            if(normalize(choice) === normalize(item.answer)){
              $('bombMessage').textContent = t('optionCorrect');
              markCorrect();
            } else {
              $('bombMessage').textContent = t('optionWrong');
              markWrong();
            }
          });
        });
      }
      $('bombMessage').textContent = t('bombMsg');
    }
    function normalize(s){return String(s).trim().toLowerCase().replace(/\s+/g,' ');}
    function currentTeam(){return state.teams[state.activeIndex];}
    function passBomb(){
      state.activeIndex = (state.activeIndex + 1) % state.teams.length;
      renderScoreboard();
    }
    function markCorrect(){
      if(!state.playing || state.roundLocked) return;
      state.roundLocked = true;
      const team = currentTeam();
      team.score += 1;
      log(t('correctLog', team.name));
      beep(720,.08,'sine'); setTimeout(()=>beep(960,.08,'sine'),90);
      checkTarget(team);
      if(!state.playing) return;
      passBomb();
      setTimeout(()=> nextQuestion(false), 450);
    }
    function markWrong(){
      if(!state.playing || state.roundLocked) return;
      const team = currentTeam();
      const penalty = parseInt($('wrongPenalty').value,10);
      if(penalty > 0) team.score -= penalty;
      log(t('wrongLog', team.name) + (penalty ? ` -${penalty}` : ''));
      beep(180,.12,'sawtooth');
      renderScoreboard();
      if($('wrongMode').value === 'pass'){
        state.roundLocked = true;
        passBomb();
        setTimeout(()=> nextQuestion(false), 450);
      }
    }
    function explode(){
      if(!state.playing) return;
      clearInterval(state.bombTimer);
      const team = currentTeam();
      const penalty = parseInt($('explodePenalty').value,10);
      team.score -= penalty;
      log(t('explodeLog', team.name) + ` -${penalty}`);
      renderScoreboard();
      $('flash').classList.add('show');
      $('bombZone').classList.add('shake');
      setTimeout(()=>$('flash').classList.remove('show'),600);
      setTimeout(()=>$('bombZone').classList.remove('shake'),400);
      boomSound();
      passBomb();
      setTimeout(()=> nextQuestion(false), 900);
    }
    function forceExplode(){explode();}
    function checkTarget(team){
      const target = parseInt($('targetScore').value,10) || 9999;
      if(team.score >= target){endGame(t('targetWin', team.name));}
    }
    function endGame(reason){
      state.playing = false;
      stopTimers();
      renderScoreboard();
      $('resultTitle').textContent = t('gameOver');
      $('resultSummary').textContent = reason || t('ranking');
      const sorted = state.teams.slice().sort((a,b)=>b.score-a.score);
      $('ranking').innerHTML = sorted.map((team,i)=>`
        <div class="rank-row"><span>${i+1}. ${team.emoji} ${escapeHtml(team.name)}</span><span>${team.score} ${t('score')}</span></div>
      `).join('');
      $('resultOverlay').classList.add('show');
      confetti();
    }
    function log(msg){
      state.logs.unshift(`${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'})} ${msg}`);
      state.logs = state.logs.slice(0,30);
      $('logBox').innerHTML = state.logs.map(escapeHtml).join('<br>');
    }
    function toggleAnswer(){
      state.answerVisible = !state.answerVisible;
      $('answerText').classList.toggle('hidden-answer', !state.answerVisible);
    }
    function resetGame(){
      stopTimers();
      state.playing=false; state.currentQuestion=null; state.questionNo=0; state.qPointer=0; state.logs=[];
      initTeams();
      $('questionBox').textContent = t('clickStart');
      $('choices').innerHTML='';
      $('answerText').textContent = t('hiddenAnswer');
      $('answerText').classList.add('hidden-answer');
      $('logBox').innerHTML='';
      $('bombMessage').textContent = t('bombMsg');
      state.bombTotal=parseInt($('bombSeconds').value,10); state.bombLeft=state.bombTotal; updateBombUI(); updateTimersUI();
      $('resultOverlay').classList.remove('show');
    }
    function exportTxt(){
      const blob = new Blob([$('questionBank').value], {type:'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href=url; a.download='bomb_quiz_question_bank.txt'; a.click();
      URL.revokeObjectURL(url);
      alert(t('exported'));
    }
    function importTxt(file){
      if(!file) return;
      const reader = new FileReader();
      reader.onload = e=>{$('questionBank').value = e.target.result; saveSettings(); alert(t('loaded'));};
      reader.readAsText(file, 'utf-8');
    }
    function fullscreen(){
      if(!document.fullscreenElement){document.documentElement.requestFullscreen?.();}
      else{document.exitFullscreen?.();}
    }
    function beep(freq=440,duration=.08,type='sine'){
      if(!$('soundToggle').checked) return;
      try{
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type; osc.frequency.value = freq;
        osc.connect(gain); gain.connect(ctx.destination);
        gain.gain.setValueAtTime(.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration);
        osc.start(); osc.stop(ctx.currentTime + duration);
      }catch(e){}
    }
    function boomSound(){
      if(!$('soundToggle').checked) return;
      beep(85,.18,'sawtooth'); setTimeout(()=>beep(55,.22,'square'),90); setTimeout(()=>beep(130,.12,'sawtooth'),150);
    }
    function confetti(){
      const box = document.createElement('div'); box.className='confetti';
      const chars = ['🎉','⭐','💥','🏆','✨'];
      for(let i=0;i<80;i++){
        const s = document.createElement('span');
        s.textContent = chars[Math.floor(Math.random()*chars.length)];
        s.style.left = Math.random()*100 + 'vw';
        s.style.animationDelay = (Math.random()*0.7) + 's';
        s.style.fontSize = (18 + Math.random()*22) + 'px';
        box.appendChild(s);
      }
      document.body.appendChild(box);
      setTimeout(()=>box.remove(),3000);
    }

    function bindEvents(){
      ['languageSelect','teamCount','targetScore','bombSeconds','gameMinutes','wrongPenalty','explodePenalty','wrongMode','soundToggle','shuffleToggle','questionBank'].forEach(id=>{
        $(id).addEventListener('change',()=>{saveSettings(); if(id==='languageSelect') applyLanguage(); if(id==='teamCount' && !state.playing){initTeams();}});
        if(id==='questionBank') $(id).addEventListener('input',saveSettings);
      });
      $('btnStart').addEventListener('click',startGame);
      $('btnToggleSettings').addEventListener('click',()=> hideSettings(!$('settingsPanel').classList.contains('hidden')));
      $('btnFullscreen').addEventListener('click',fullscreen);
      $('btnNextQ').addEventListener('click',()=>{ if(state.playing) nextQuestion(false); });
      $('btnResetGame').addEventListener('click',resetGame);
      $('btnCorrect').addEventListener('click',markCorrect);
      $('btnWrong').addEventListener('click',markWrong);
      $('btnShowAnswer').addEventListener('click',toggleAnswer);
      $('btnForceExplode').addEventListener('click',forceExplode);
      $('btnImport').addEventListener('click',()=>$('fileInput').click());
      $('fileInput').addEventListener('change',e=>importTxt(e.target.files[0]));
      $('btnExport').addEventListener('click',exportTxt);
      $('btnDemo').addEventListener('click',()=>{$('questionBank').value=demoBank;saveSettings();alert(t('loaded'));});
      $('btnPlayAgain').addEventListener('click',()=>{$('resultOverlay').classList.remove('show');startGame();});
      $('btnCloseResult').addEventListener('click',()=>$('resultOverlay').classList.remove('show'));
      document.addEventListener('keydown',e=>{
        if(e.key===' '){e.preventDefault(); if(state.playing) markCorrect();}
        if(e.key.toLowerCase()==='x'){if(state.playing) markWrong();}
        if(e.key.toLowerCase()==='n'){if(state.playing) nextQuestion(false);}
        if(e.key.toLowerCase()==='a'){toggleAnswer();}
      });
    }

    loadSettings();
    bindEvents();
    applyLanguage();
    resetGame();
  