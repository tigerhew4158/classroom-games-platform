
(() => {
  const defaultBank = `香蕉,banana
苹果,apple
橙,orange
马来西亚首都,吉隆坡
Malaysia capital,Kuala Lumpur
国旗,Jalur Gemilang
早安,selamat pagi
teacher,老师
student,学生
computer,电脑
red,红色
blue,蓝色
cat,猫
dog,狗
water,水
book,书
school,学校
桌子,table
椅子,chair
家庭,family`;

  const I18N = {
    'zh-Hans': {
      langCode:'zh-CN', title:'课堂对应文字对战', showSetup:'老师设定', hideSetup:'隐藏老师设定', fullscreen:'全屏',
      setupTitle:'老师设定：选择组数、时间与题库', teamCountLabel:'分组方式',
      teamTwoOption:'两组：红队 vs 蓝队（拔河）', teamThreeOption:'三组：红队 vs 蓝队 vs 绿队（抢旗）',
      minutesLabel:'游戏时间（分钟）', targetScoreLabel:'三组目标分', wordBankLabel:'题库',
      modeNote2:'两组模式：红队与蓝队拔河。答对后旗子往该队方向移动，先拉到胜利线者获胜；时间到则看旗子位置与分数。',
      modeNote3:'三组模式：红队、蓝队、绿队抢旗。每答对一题前进一步，先达到目标分者获胜；时间到则最高分者获胜。',
      formatHint:'题库格式：<br>提示文字,正确答案<br>例如：香蕉,banana<br>也可以：apple,苹果 / 首都,吉隆坡 / 国旗,Jalur Gemilang',
      autoHint:'注意：系统现在不再自动判断英文或中文。每一行左边是「题目/提示」，右边是「正确答案」。答案可以是英文、中文、马来文、数字或短句。',
      applyBank:'套用题库', importTxt:'导入 TXT', exportTxt:'导出为 TXT', sample:'载入范例',
      timer:'剩余时间', bank:'题库', questions:'题', mode:'模式', mode2:'两组拔河', mode3:'三组抢旗',
      sound:'音效', on:'开', off:'关', raceTitle:'三组抢旗进度：先到目标分，或时间到最高分者获胜',
      start:'开始游戏', pause:'暂停', resume:'继续', reset:'重新开始',
      footer:'老师可投影到大屏幕，让两组或三组轮流派代表到电脑／触控屏幕作答。支持离线使用，题库与设定会自动储存在同一台电脑的浏览器。',
      red:'红队', blue:'蓝队', green:'绿队', score:'得分', promptLabel:'题目 / 提示', placeholder:'请输入对应文字', submit:'送出', speak:'朗读题目',
      gameOver:'游戏结束', win:'胜利！', draw:'平手！', drawText:'各队实力接近，可以再玩一局。', tugWin:'成功把旗子拉到胜利线！', raceWin:'率先达到 {target} 分！', timeLead:'时间到，{team} 暂时领先。', point:'分',
      needBank:'请先设定题库，至少 2 题。', minBank:'题库至少需要 2 题。格式：提示文字,正确答案', applied:'已套用 {n} 题', paused:'游戏已暂停', startFirst:'请先开始游戏', empty:'请先输入答案', correct2:'答对了！旗子往你们那边拉！', correct3:'答对了！你们前进一步！', tryAgain:'再试一次',
      space:'空格', clear:'清除', downloadName:'课堂对应文字题库.txt', playAgain:'再玩一局', close:'关闭'
    },
    en: {
      langCode:'en-US', title:'Classroom Text Match Battle', showSetup:'Teacher setup', hideSetup:'Hide teacher setup', fullscreen:'Full screen',
      setupTitle:'Teacher setup: teams, time and question bank', teamCountLabel:'Team mode',
      teamTwoOption:'2 teams: Red vs Blue (Tug of War)', teamThreeOption:'3 teams: Red vs Blue vs Green (Flag Race)',
      minutesLabel:'Game time (minutes)', targetScoreLabel:'Target score for 3 teams', wordBankLabel:'Question bank',
      modeNote2:'2-team mode: correct answers pull the flag toward that team. First team to reach the win line wins; when time is up, position and score decide.',
      modeNote3:'3-team mode: Red, Blue and Green race for the flag. Each correct answer moves one step. First to the target score wins; when time is up, highest score wins.',
      formatHint:'Question bank format:<br>Prompt,Correct answer<br>Examples: 香蕉,banana<br>Also works: apple,苹果 / Capital,Kuala Lumpur / Flag,Jalur Gemilang',
      autoHint:'Important: the system no longer assumes the answer must be English. The left side is the prompt; the right side is the correct answer. Answers can be English, Chinese, Malay, numbers or short phrases.',
      applyBank:'Apply bank', importTxt:'Import TXT', exportTxt:'Export TXT', sample:'Load sample',
      timer:'Time left', bank:'Bank', questions:'questions', mode:'Mode', mode2:'2-team Tug', mode3:'3-team Race',
      sound:'Sound', on:'On', off:'Off', raceTitle:'3-team flag race: first to target score wins, or highest score when time is up',
      start:'Start game', pause:'Pause', resume:'Resume', reset:'Restart',
      footer:'Project this on the classroom screen. Two or three teams can take turns sending representatives to answer on a computer or touch screen. Works offline; question bank and settings are saved in this browser.',
      red:'Red Team', blue:'Blue Team', green:'Green Team', score:'Score', promptLabel:'Prompt / Question', placeholder:'Type the matching text', submit:'Submit', speak:'Read prompt aloud',
      gameOver:'Game Over', win:' wins!', draw:'Draw!', drawText:'The teams are very close. Play another round.', tugWin:'pulled the flag to the win line!', raceWin:'reached {target} points first!', timeLead:'Time is up. {team} is leading.', point:'pts',
      needBank:'Please set at least 2 questions first.', minBank:'The bank needs at least 2 questions. Format: Prompt,Correct answer', applied:'Applied {n} questions', paused:'Game paused', startFirst:'Start the game first', empty:'Please type an answer first', correct2:'Correct! The flag moves toward your team!', correct3:'Correct! Your team moves one step forward!', tryAgain:'Try again',
      space:'Space', clear:'Clear', downloadName:'classroom-text-match-bank.txt', playAgain:'Play again', close:'Close'
    },
    ms: {
      langCode:'ms-MY', title:'Pertandingan Padanan Teks Kelas', showSetup:'Tetapan guru', hideSetup:'Sembunyikan tetapan', fullscreen:'Skrin penuh',
      setupTitle:'Tetapan guru: kumpulan, masa dan bank soalan', teamCountLabel:'Mod kumpulan',
      teamTwoOption:'2 kumpulan: Merah vs Biru (Tarik Tali)', teamThreeOption:'3 kumpulan: Merah vs Biru vs Hijau (Lumba Bendera)',
      minutesLabel:'Masa permainan (minit)', targetScoreLabel:'Skor sasaran untuk 3 kumpulan', wordBankLabel:'Bank soalan',
      modeNote2:'Mod 2 kumpulan: jawapan betul menarik bendera ke arah kumpulan tersebut. Kumpulan pertama sampai ke garisan menang akan menang; jika masa tamat, kedudukan dan skor diambil kira.',
      modeNote3:'Mod 3 kumpulan: Merah, Biru dan Hijau berlumba merebut bendera. Setiap jawapan betul bergerak satu langkah. Kumpulan pertama mencapai skor sasaran menang; jika masa tamat, skor tertinggi menang.',
      formatHint:'Format bank soalan:<br>Petunjuk,Jawapan betul<br>Contoh: pisang,banana<br>Juga boleh: apple,苹果 / Ibu negara,Kuala Lumpur / Bendera,Jalur Gemilang',
      autoHint:'Penting: sistem tidak lagi menganggap jawapan mesti dalam Bahasa Inggeris. Bahagian kiri ialah soalan/petunjuk; bahagian kanan ialah jawapan betul. Jawapan boleh dalam BM, Inggeris, Cina, nombor atau frasa pendek.',
      applyBank:'Guna bank', importTxt:'Import TXT', exportTxt:'Eksport TXT', sample:'Muat contoh',
      timer:'Baki masa', bank:'Bank', questions:'soalan', mode:'Mod', mode2:'Tarik Tali 2 kumpulan', mode3:'Lumba 3 kumpulan',
      sound:'Bunyi', on:'Hidup', off:'Mati', raceTitle:'Lumba bendera 3 kumpulan: capai skor sasaran dahulu, atau skor tertinggi apabila masa tamat',
      start:'Mula permainan', pause:'Jeda', resume:'Sambung', reset:'Mula semula',
      footer:'Guru boleh memaparkan permainan ini pada skrin kelas. Dua atau tiga kumpulan boleh bergilir menghantar wakil untuk menjawab pada komputer atau skrin sentuh. Boleh digunakan tanpa Internet; bank soalan dan tetapan disimpan dalam pelayar komputer ini.',
      red:'Kumpulan Merah', blue:'Kumpulan Biru', green:'Kumpulan Hijau', score:'Skor', promptLabel:'Soalan / Petunjuk', placeholder:'Taip teks padanan', submit:'Hantar', speak:'Baca soalan',
      gameOver:'Permainan Tamat', win:' menang!', draw:'Seri!', drawText:'Kedudukan kumpulan sangat rapat. Boleh main satu pusingan lagi.', tugWin:'berjaya menarik bendera ke garisan menang!', raceWin:'mencapai {target} markah dahulu!', timeLead:'Masa tamat. {team} sedang mendahului.', point:'markah',
      needBank:'Sila tetapkan sekurang-kurangnya 2 soalan dahulu.', minBank:'Bank soalan memerlukan sekurang-kurangnya 2 soalan. Format: Petunjuk,Jawapan betul', applied:'Berjaya guna {n} soalan', paused:'Permainan dijeda', startFirst:'Mula permainan dahulu', empty:'Sila taip jawapan dahulu', correct2:'Betul! Bendera bergerak ke arah kumpulan anda!', correct3:'Betul! Kumpulan anda maju satu langkah!', tryAgain:'Cuba lagi',
      space:'Jarak', clear:'Padam', downloadName:'bank-padanan-teks-kelas.txt', playAgain:'Main lagi', close:'Tutup'
    }
  };

  const $ = (id) => document.getElementById(id);
  const els = {
    setupPanel: $('setupPanel'), toggleSetup: $('toggleSetup'), fullScreenBtn: $('fullScreenBtn'), languageSelect: $('languageSelect'), mainTitle: $('mainTitle'),
    setupTitle: $('setupTitle'), teamCountLabel: $('teamCountLabel'), teamTwoOption: $('teamTwoOption'), teamThreeOption: $('teamThreeOption'),
    minutesLabel: $('minutesLabel'), targetScoreLabel: $('targetScoreLabel'), wordBankLabel: $('wordBankLabel'), formatHint: $('formatHint'), autoHint: $('autoHint'),
    teamCount: $('teamCount'), minutes: $('minutes'), targetScore: $('targetScore'), modeNote: $('modeNote'),
    wordBank: $('wordBank'), applyBank: $('applyBank'), importBtn: $('importBtn'), exportBtn: $('exportBtn'), sampleBtn: $('sampleBtn'), fileInput: $('fileInput'),
    timer: $('timer'), bankCount: $('bankCount'), modePill: $('modePill'), soundBtn: $('soundBtn'),
    ropeWrap: $('ropeWrap'), flag: $('flag'), raceWrap: $('raceWrap'), raceTitle: $('raceTitle'), raceBoard: $('raceBoard'), teams: $('teams'),
    startBtn: $('startBtn'), pauseBtn: $('pauseBtn'), resetBtn: $('resetBtn'), footerNote: $('footerNote'),
    announcement: $('announcement'), resultTitle: $('resultTitle'), resultText: $('resultText'), resultScore: $('resultScore'),
    playAgainBtn: $('playAgainBtn'), closeModalBtn: $('closeModalBtn')
  };

  let lang = 'zh-Hans';
  let bank = [];
  let activeTeams = [];
  let current = {};
  let score = {};
  let shift = {};
  let tug = 0;
  let remaining = 180;
  let total = 180;
  let timerId = null;
  let running = false;
  let paused = false;
  let soundOn = true;
  const MAX_TUG = 7;

  function t(key, vars={}){
    let str = (I18N[lang] && I18N[lang][key]) || I18N['zh-Hans'][key] || key;
    Object.keys(vars).forEach(k => { str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
    return str;
  }

  function teamDefs(){
    return [
      { id:'red', name:t('red'), icon:'🔴', className:'red' },
      { id:'blue', name:t('blue'), icon:'🔵', className:'blue' },
      { id:'green', name:t('green'), icon:'🟢', className:'green' }
    ];
  }

  function isLatinAnswer(str){ return /^[A-Za-zÀ-ÖØ-öø-ÿ\s'\-.]+$/.test(String(str || '')); }
  function cleanAnswer(str){
    return String(str || '')
      .normalize('NFKC')
      .trim()
      .toLocaleLowerCase()
      .replace(/[，、。！？；：]/g, m => ({'，':',','、':',','。':'.','！':'!','？':'?','；':';','：':':'})[m] || m)
      .replace(/\s+/g,' ');
  }
  function escapeText(s){ return String(s || '').replace(/[<>]/g, ''); }
  function getTeamCount(){ return parseInt(els.teamCount.value || '2', 10); }
  function getTargetScore(){ return Math.max(3, Math.min(30, parseInt(els.targetScore.value || '8', 10))); }

  function parseLine(line){
    const raw = line.trim();
    if(!raw || raw.startsWith('#')) return null;
    const parts = raw.split(/[,，=：:\t]/).map(x => x.trim()).filter(Boolean);
    if(parts.length < 2) return null;
    const prompt = parts[0];
    const answer = parts.slice(1).join(' ');
    return { prompt: escapeText(prompt), answer: escapeText(answer) };
  }

  function parseBank(text){
    const rows = String(text || '').split(/\r?\n/).map(parseLine).filter(Boolean);
    const seen = new Set();
    const unique = [];
    for(const row of rows){
      const key = cleanAnswer(row.prompt) + '|' + cleanAnswer(row.answer);
      if(!seen.has(key)){ seen.add(key); unique.push(row); }
    }
    return unique;
  }

  function saveSettings(){
    localStorage.setItem('lead_text_match_bank', els.wordBank.value);
    localStorage.setItem('lead_text_match_minutes', els.minutes.value);
    localStorage.setItem('lead_text_match_team_count', els.teamCount.value);
    localStorage.setItem('lead_text_match_target_score', els.targetScore.value);
    localStorage.setItem('lead_text_match_lang', lang);
  }

  function loadSettings(){
    lang = localStorage.getItem('lead_text_match_lang') || 'zh-Hans';
    if(!I18N[lang]) lang = 'zh-Hans';
    els.languageSelect.value = lang;
    els.wordBank.value = localStorage.getItem('lead_text_match_bank') || defaultBank;
    els.minutes.value = localStorage.getItem('lead_text_match_minutes') || 3;
    els.teamCount.value = localStorage.getItem('lead_text_match_team_count') || 2;
    els.targetScore.value = localStorage.getItem('lead_text_match_target_score') || 8;
    applyLanguage();
    renderTeams();
    applyBank(false);
  }

  function applyLanguage(){
    document.documentElement.lang = lang;
    document.title = t('title') + '｜2/3 Teams';
    els.mainTitle.textContent = t('title');
    els.toggleSetup.textContent = els.setupPanel.classList.contains('hidden') ? t('showSetup') : t('hideSetup');
    els.fullScreenBtn.textContent = t('fullscreen');
    els.setupTitle.textContent = t('setupTitle');
    els.teamCountLabel.textContent = t('teamCountLabel');
    els.teamTwoOption.textContent = t('teamTwoOption');
    els.teamThreeOption.textContent = t('teamThreeOption');
    els.minutesLabel.textContent = t('minutesLabel');
    els.targetScoreLabel.textContent = t('targetScoreLabel');
    els.wordBankLabel.textContent = t('wordBankLabel');
    els.formatHint.innerHTML = t('formatHint');
    els.autoHint.textContent = t('autoHint');
    els.applyBank.textContent = t('applyBank');
    els.importBtn.textContent = t('importTxt');
    els.exportBtn.textContent = t('exportTxt');
    els.sampleBtn.textContent = t('sample');
    els.startBtn.textContent = t('start');
    els.pauseBtn.textContent = paused ? t('resume') : t('pause');
    els.resetBtn.textContent = t('reset');
    els.footerNote.textContent = t('footer');
    els.raceTitle.textContent = t('raceTitle');
    els.soundBtn.textContent = `${t('sound')}：${soundOn ? t('on') : t('off')}`;
    els.playAgainBtn.textContent = t('playAgain');
    els.closeModalBtn.textContent = t('close');
    setTimerText();
    updateBankCount();
    setModeUI();
  }

  function updateBankCount(){ els.bankCount.textContent = `${t('bank')}：${bank.length} ${t('questions')}`; }

  function setModeUI(){
    const count = getTeamCount();
    if(count === 2){
      els.modeNote.textContent = t('modeNote2');
      els.modePill.textContent = `${t('mode')}：${t('mode2')}`;
      els.ropeWrap.classList.remove('hidden');
      els.raceWrap.classList.remove('show');
    } else {
      els.modeNote.textContent = t('modeNote3');
      els.modePill.textContent = `${t('mode')}：${t('mode3')}`;
      els.ropeWrap.classList.add('hidden');
      els.raceWrap.classList.add('show');
    }
  }

  function renderTeams(){
    const count = getTeamCount();
    activeTeams = teamDefs().slice(0, count);
    els.teams.className = 'teams ' + (count === 3 ? 'three' : 'two');
    els.teams.innerHTML = activeTeams.map(team => `
      <section class="team ${team.className}" data-team="${team.id}">
        <div class="teamHeader">
          <div class="teamName">${team.icon} ${team.name}</div>
          <div class="score">${t('score')}：<span id="${team.id}Score">${score[team.id] || 0}</span></div>
        </div>
        <div class="promptBox">
          <div class="promptLabel">${t('promptLabel')}</div>
          <div class="promptWord"><span id="${team.id}Prompt">—</span><button class="speak" data-speak="${team.id}" title="${t('speak')}">🔊</button></div>
        </div>
        <div class="answerRow">
          <input class="answer" id="${team.id}Input" autocomplete="off" placeholder="${t('placeholder')}" />
          <button class="submitMini" data-submit="${team.id}">${t('submit')}</button>
        </div>
        <div class="keyboard" id="${team.id}Keyboard"></div>
        <div class="feedback" id="${team.id}Feedback"></div>
      </section>
    `).join('');

    activeTeams.forEach(team => {
      shift[team.id] = false;
      current[team.id] = current[team.id] || null;
      score[team.id] = score[team.id] || 0;
      buildKeyboard(team.id);
      const input = $(team.id + 'Input');
      input.addEventListener('keydown', e => { if(e.key === 'Enter') submitAnswer(team.id); });
    });
    document.querySelectorAll('[data-submit]').forEach(b => b.addEventListener('click', () => submitAnswer(b.dataset.submit)));
    document.querySelectorAll('[data-speak]').forEach(b => b.addEventListener('click', () => speakPrompt(b.dataset.speak)));
    renderRaceBoard();
    setModeUI();
    activeTeams.forEach(team => {
      if(current[team.id]) {
        const prompt = $(team.id + 'Prompt');
        if(prompt) prompt.textContent = current[team.id].prompt;
      }
    });
  }

  function renderRaceBoard(){
    els.raceBoard.innerHTML = teamDefs().slice(0, 3).map(team => `
      <div class="raceLane">
        <div class="laneName ${team.className}">${team.name}</div>
        <div class="track">
          <div class="trackFill ${team.className}" id="${team.id}TrackFill"></div>
          <div class="runner" id="${team.id}Runner">🚩</div>
          <div class="finish"></div>
        </div>
        <div class="laneScore" id="${team.id}LaneScore">0/${getTargetScore()}</div>
      </div>
    `).join('');
    updateRaceBoard();
  }

  function applyBank(showAlert=true){
    const parsed = parseBank(els.wordBank.value);
    if(parsed.length < 2){
      if(showAlert) alert(t('minBank'));
      return false;
    }
    bank = parsed;
    saveSettings();
    updateBankCount();
    activeTeams.forEach(ti => pickQuestion(ti.id));
    if(showAlert && activeTeams[0]) briefFeedback(activeTeams[0].id, t('applied', {n:bank.length}), true);
    return true;
  }

  function randomQuestion(exceptAnswer){
    if(bank.length === 0) return null;
    let q = bank[Math.floor(Math.random()*bank.length)];
    if(bank.length > 1){
      let guard = 0;
      while(q.answer === exceptAnswer && guard++ < 10){ q = bank[Math.floor(Math.random()*bank.length)]; }
    }
    return q;
  }

  function pickQuestion(teamId){
    const prev = current[teamId]?.answer;
    current[teamId] = randomQuestion(prev);
    const prompt = $(teamId + 'Prompt');
    const input = $(teamId + 'Input');
    if(prompt) prompt.textContent = current[teamId]?.prompt || '—';
    if(input) input.value = '';
    buildKeyboard(teamId);
  }

  function formatTime(sec){
    const m = Math.floor(sec/60);
    const s = sec%60;
    return `${m}:${String(s).padStart(2,'0')}`;
  }
  function setTimerText(){ els.timer.textContent = `${t('timer')}: ${formatTime(remaining)}`; }

  function resetScores(){
    score = {};
    teamDefs().forEach(ti => score[ti.id] = 0);
    activeTeams.forEach(ti => {
      const el = $(ti.id + 'Score');
      if(el) el.textContent = '0';
      const fb = $(ti.id + 'Feedback');
      if(fb){ fb.textContent = ''; fb.className = 'feedback'; }
    });
  }

  function resetRound(keepBank=true){
    if(timerId) clearInterval(timerId);
    timerId = null;
    running = false; paused = false;
    tug = 0;
    total = Math.max(1, Math.min(30, parseInt(els.minutes.value || '3',10))) * 60;
    remaining = total;
    els.pauseBtn.textContent = t('pause');
    resetScores();
    setTimerText();
    updateRope();
    updateRaceBoard();
    if(!keepBank || bank.length === 0) applyBank(false);
    activeTeams.forEach(ti => pickQuestion(ti.id));
  }

  function startGame(){
    if(!applyBank(false)) return alert(t('needBank'));
    saveSettings();
    renderRaceBoard();
    resetRound(true);
    running = true; paused = false;
    timerId = setInterval(tick, 1000);
    const firstInput = $(activeTeams[0]?.id + 'Input');
    if(firstInput) firstInput.focus();
    playTone('start');
  }

  function tick(){
    if(!running || paused) return;
    remaining--;
    setTimerText();
    if(remaining <= 0) endGame('time');
  }

  function pauseGame(){
    if(!running) return;
    paused = !paused;
    els.pauseBtn.textContent = paused ? t('resume') : t('pause');
  }

  function winnerByScore(){
    const top = Math.max(...activeTeams.map(ti => score[ti.id] || 0));
    const winners = activeTeams.filter(ti => (score[ti.id] || 0) === top);
    if(top === 0 || winners.length !== 1) return { winner:null, winners, top };
    return { winner:winners[0], winners, top };
  }

  function endGame(reason){
    if(timerId) clearInterval(timerId);
    timerId = null;
    running = false; paused = false;
    const count = getTeamCount();
    let winner = null;
    let draw = false;

    if(count === 2){
      if(reason === 'red' || reason === 'blue') winner = teamDefs().find(ti => ti.id === reason);
      else if(tug < 0) winner = teamDefs().find(ti => ti.id === 'red');
      else if(tug > 0) winner = teamDefs().find(ti => ti.id === 'blue');
      else { const r = winnerByScore(); winner = r.winner; draw = !winner; }
    } else {
      if(['red','blue','green'].includes(reason)) winner = teamDefs().find(ti => ti.id === reason);
      else { const r = winnerByScore(); winner = r.winner; draw = !winner; }
    }

    if(winner){
      els.resultTitle.textContent = `${winner.name}${t('win')}`;
      if(count === 2 && reason !== 'time') els.resultText.textContent = `${winner.name}${t('tugWin')}`;
      else if(count === 3 && reason !== 'time') els.resultText.textContent = `${winner.name}${t('raceWin', {target:getTargetScore()})}`;
      else els.resultText.textContent = t('timeLead', {team:winner.name});
    } else {
      draw = true;
      els.resultTitle.textContent = t('draw');
      els.resultText.textContent = t('drawText');
    }
    els.resultScore.textContent = activeTeams.map(ti => `${ti.name} ${score[ti.id] || 0} ${t('point')}`).join('｜');
    els.announcement.classList.add('show');
    playTone(draw ? 'draw' : 'win');
  }

  function updateRope(){
    const pct = 50 + (tug / MAX_TUG) * 35;
    els.flag.style.left = Math.max(15, Math.min(85, pct)) + '%';
  }

  function updateRaceBoard(){
    const target = getTargetScore();
    teamDefs().slice(0,3).forEach(ti => {
      const sc = score[ti.id] || 0;
      const pct = Math.max(0, Math.min(100, (sc / target) * 100));
      const fill = $(ti.id + 'TrackFill');
      const runner = $(ti.id + 'Runner');
      const laneScore = $(ti.id + 'LaneScore');
      if(fill) fill.style.width = pct + '%';
      if(runner) runner.style.left = pct + '%';
      if(laneScore) laneScore.textContent = `${sc}/${target}`;
    });
  }

  function submitAnswer(teamId){
    if(!running || paused){
      briefFeedback(teamId, running ? t('paused') : t('startFirst'), false);
      return;
    }
    const input = $(teamId + 'Input');
    const answer = cleanAnswer(input.value);
    const correct = cleanAnswer(current[teamId]?.answer || '');
    if(!answer){ briefFeedback(teamId, t('empty'), false); return; }

    if(answer === correct){
      score[teamId] = (score[teamId] || 0) + 1;
      const scoreEl = $(teamId + 'Score');
      if(scoreEl) scoreEl.textContent = score[teamId];
      const count = getTeamCount();
      if(count === 2){
        if(teamId === 'red') tug -= 1;
        if(teamId === 'blue') tug += 1;
        updateRope();
      } else {
        updateRaceBoard();
      }
      briefFeedback(teamId, count === 2 ? t('correct2') : t('correct3'), true);
      const panel = document.querySelector(`.team.${teamId}`);
      if(panel){ panel.classList.add('pulse'); setTimeout(() => panel.classList.remove('pulse'), 360); }
      playTone('ok');

      if(count === 2){
        if(tug <= -MAX_TUG) return endGame('red');
        if(tug >= MAX_TUG) return endGame('blue');
      } else {
        if(score[teamId] >= getTargetScore()) return endGame(teamId);
      }
      pickQuestion(teamId);
    } else {
      briefFeedback(teamId, t('tryAgain'), false);
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 340);
      playTone('bad');
      input.select();
    }
  }

  function briefFeedback(teamId, msg, ok){
    const el = $(teamId + 'Feedback');
    if(!el) return;
    el.textContent = msg;
    el.className = 'feedback ' + (ok ? 'ok' : 'bad');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => { el.textContent = ''; el.className = 'feedback'; }, 1800);
  }

  function bankCharacterPool(){
    const chars = [];
    bank.forEach(q => Array.from(q.answer || '').forEach(ch => { if(!/\s/.test(ch)) chars.push(ch); }));
    return [...new Set(chars)];
  }

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1; i>0; i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function dynamicKeysForAnswer(answer){
    const chars = [...new Set(Array.from(String(answer || '')).filter(ch => !/\s/.test(ch)))];
    const pool = bankCharacterPool().filter(ch => !chars.includes(ch));
    const targetCount = Math.min(18, Math.max(10, chars.length + 6));
    const extra = shuffle(pool).slice(0, Math.max(0, targetCount - chars.length));
    return shuffle([...chars, ...extra]);
  }

  function buildKeyboard(teamId){
    const container = $(teamId + 'Keyboard');
    if(!container) return;
    const answer = current[teamId]?.answer || '';
    container.innerHTML = '';
    container.className = 'keyboard';

    if(!answer || isLatinAnswer(answer)){
      const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
      letters.forEach(ch => {
        const b = document.createElement('button');
        b.className = 'key'; b.type = 'button'; b.textContent = shift[teamId] ? ch.toUpperCase() : ch;
        b.addEventListener('click', () => appendChar(teamId, shift[teamId] ? ch.toUpperCase() : ch));
        container.appendChild(b);
      });
      const shiftBtn = document.createElement('button');
      shiftBtn.className = 'key shift'; shiftBtn.type='button'; shiftBtn.textContent = 'Shift';
      shiftBtn.addEventListener('click', () => { shift[teamId] = !shift[teamId]; buildKeyboard(teamId); });
      container.appendChild(shiftBtn);
      const apostrophe = document.createElement('button');
      apostrophe.className = 'key'; apostrophe.type='button'; apostrophe.textContent = "'";
      apostrophe.addEventListener('click', () => appendChar(teamId, "'"));
      container.appendChild(apostrophe);
      const hyphen = document.createElement('button');
      hyphen.className = 'key'; hyphen.type='button'; hyphen.textContent = '-';
      hyphen.addEventListener('click', () => appendChar(teamId, '-'));
      container.appendChild(hyphen);
    } else {
      container.className = 'keyboard dynamic';
      dynamicKeysForAnswer(answer).forEach(ch => {
        const b = document.createElement('button');
        b.className = 'key'; b.type = 'button'; b.textContent = ch;
        b.addEventListener('click', () => appendChar(teamId, ch));
        container.appendChild(b);
      });
    }

    const space = document.createElement('button');
    space.className = 'key space'; space.type='button'; space.textContent = t('space');
    space.addEventListener('click', () => appendChar(teamId, ' '));
    container.appendChild(space);

    const clear = document.createElement('button');
    clear.className = 'key clear'; clear.type='button'; clear.textContent = t('clear');
    clear.addEventListener('click', () => { const input = $(teamId + 'Input'); if(input){ input.value=''; input.focus(); } });
    container.appendChild(clear);

    const back = document.createElement('button');
    back.className = 'key back'; back.type='button'; back.textContent = '⌫';
    back.addEventListener('click', () => backspace(teamId));
    container.appendChild(back);

    const enter = document.createElement('button');
    enter.className = 'key enter'; enter.type='button'; enter.textContent = 'Enter';
    enter.addEventListener('click', () => submitAnswer(teamId));
    container.appendChild(enter);
  }

  function appendChar(teamId, ch){
    const input = $(teamId + 'Input'); if(!input) return;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.value = input.value.slice(0,start) + ch + input.value.slice(end);
    input.focus(); input.selectionStart = input.selectionEnd = start + ch.length;
  }
  function backspace(teamId){
    const input = $(teamId + 'Input'); if(!input) return;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    if(start !== end){ input.value = input.value.slice(0,start) + input.value.slice(end); input.selectionStart = input.selectionEnd = start; }
    else if(start > 0){ input.value = input.value.slice(0,start-1) + input.value.slice(start); input.selectionStart = input.selectionEnd = start-1; }
    input.focus();
  }

  function playTone(type){
    if(!soundOn) return;
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      const map = { ok:880, bad:180, start:520, win:1046, draw:360 };
      osc.frequency.value = map[type] || 440;
      osc.type = type === 'bad' ? 'sawtooth' : 'sine';
      gain.gain.setValueAtTime(.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .18);
      osc.start(); osc.stop(ctx.currentTime + .2);
      setTimeout(() => ctx.close(), 260);
    } catch(e) {}
  }

  function speechLangFor(text){
    if(/[\u3400-\u9FFF]/.test(text)) return 'zh-CN';
    if(lang === 'ms') return 'ms-MY';
    if(lang === 'en') return 'en-US';
    return I18N[lang].langCode;
  }

  function speakPrompt(teamId){
    const q = current[teamId];
    if(!q || !('speechSynthesis' in window)) return;
    const utter = new SpeechSynthesisUtterance(q.prompt);
    utter.lang = speechLangFor(q.prompt);
    utter.rate = .88;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  function exportTxt(){
    const blob = new Blob([els.wordBank.value], { type:'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = t('downloadName');
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  function bindEvents(){
    els.toggleSetup.addEventListener('click', () => {
      els.setupPanel.classList.toggle('hidden');
      els.toggleSetup.textContent = els.setupPanel.classList.contains('hidden') ? t('showSetup') : t('hideSetup');
    });
    els.languageSelect.addEventListener('change', () => {
      lang = els.languageSelect.value;
      saveSettings();
      applyLanguage();
      renderTeams();
      activeTeams.forEach(ti => pickQuestion(ti.id));
    });
    els.fullScreenBtn.addEventListener('click', () => {
      if(!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    });
    els.teamCount.addEventListener('change', () => { saveSettings(); renderTeams(); resetRound(true); });
    els.targetScore.addEventListener('change', () => { saveSettings(); renderRaceBoard(); updateRaceBoard(); });
    els.minutes.addEventListener('change', () => { saveSettings(); resetRound(true); });
    els.applyBank.addEventListener('click', () => applyBank(true));
    els.sampleBtn.addEventListener('click', () => { els.wordBank.value = defaultBank; applyBank(true); });
    els.importBtn.addEventListener('click', () => els.fileInput.click());
    els.fileInput.addEventListener('change', async (e) => {
      const file = e.target.files?.[0]; if(!file) return;
      els.wordBank.value = await file.text(); applyBank(true); e.target.value = '';
    });
    els.exportBtn.addEventListener('click', exportTxt);
    els.soundBtn.addEventListener('click', () => { soundOn = !soundOn; els.soundBtn.textContent = `${t('sound')}：${soundOn ? t('on') : t('off')}`; });
    els.startBtn.addEventListener('click', startGame);
    els.pauseBtn.addEventListener('click', pauseGame);
    els.resetBtn.addEventListener('click', () => resetRound(true));
    els.playAgainBtn.addEventListener('click', () => { els.announcement.classList.remove('show'); startGame(); });
    els.closeModalBtn.addEventListener('click', () => els.announcement.classList.remove('show'));
    window.addEventListener('beforeunload', saveSettings);
  }

  bindEvents();
  loadSettings();
  resetRound(true);
})();
