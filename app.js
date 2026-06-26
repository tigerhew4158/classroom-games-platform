// GAMELEVEL_FIXED_20260624_3

const GAME_DATA = [
  {id:'memory_match', code:'S001', preview:'previews/memory_match.svg', icon:'🃏', price:20, free:true, path:'games/memory_match_game/index.html', download:'downloads/memory_match.zip'},
  {id:'true_false', code:'S002', preview:'previews/true_false.svg', icon:'⚡', price:20, free:true, path:'games/true_false_flash_game/index.html', download:'downloads/true_false.zip'},
  {id:'sentence_order', code:'S003', preview:'previews/sentence_order.svg', icon:'🧩', price:20, free:false, path:'games/sentence_order_game/index.html', download:'downloads/sentence_order.zip'},
  {id:'treasure_box', code:'S004', preview:'previews/treasure_box.svg', icon:'🎁', price:20, free:false, path:'games/treasure_box_game/index.html', download:'downloads/treasure_box.zip'},
  {id:'lucky_wheel', code:'S005', preview:'previews/lucky_wheel.svg', icon:'🎡', price:20, free:false, path:'games/lucky_wheel_quiz_game/index.html', download:'downloads/lucky_wheel.zip'},
  {id:'classification_conveyor', code:'P001', preview:'previews/classification_conveyor.svg', icon:'📦', price:20, free:false, path:'games/classification_conveyor_game/index.html', download:'downloads/classification_conveyor.zip'},
  {id:'platform_quiz', code:'H001', preview:'previews/platform_quiz.svg', icon:'🕹️', price:20, free:false, path:'games/platform_quiz_adventure_game/index.html', download:'downloads/platform_quiz.zip'},
  {id:'monster_defense', code:'P005', preview:'previews/monster_defense.svg', icon:'👾', price:20, free:false, path:'games/monster_defense_game/index.html', download:'downloads/monster_defense.zip'},
  {id:'whack_mole', code:'S007', preview:'previews/whack_mole.svg', icon:'🔨', price:20, free:false, path:'games/whack_a_mole_quiz_game/index.html', download:'downloads/whack_mole.zip'},
  {id:'text_match', code:'S006', preview:'previews/text_match.svg', icon:'🔤', price:20, free:false, path:'games/tug_spell_game/index.html', download:'downloads/text_match.zip'},
  {id:'bomb_quiz', code:'P003', preview:'previews/bomb_quiz.svg', icon:'💣', price:20, free:false, path:'games/bomb_quiz_game/index.html', download:'downloads/bomb_quiz.zip'},
  {id:'knowledge_race', code:'P004', preview:'previews/knowledge_race.svg', icon:'🏇', price:20, free:false, path:'games/knowledge_race_game/index.html', download:'downloads/knowledge_race.zip'},
  {id:'dungeon_dragon_raid', code:'H003', preview:'previews/dungeon_dragon_raid.svg', icon:'🐉', price:20, free:false, path:'games/dungeon_dragon_raid_game/index.html', download:'downloads/dungeon_dragon_raid.zip'},
  {id:'picture_word_guess', code:'H004', preview:'previews/picture_word_guess.svg', icon:'🖼️', price:20, free:false, path:'games/picture_word_guess_game/index.html', download:'downloads/picture_word_guess.zip'},
  {id:'image_puzzle_speed_race', code:'P002', preview:'previews/image_puzzle_speed_race.svg', icon:'🧩', price:20, free:false, path:'games/image_puzzle_speed_race_game/index.html', download:'downloads/image_puzzle_speed_race.zip'},
  {id:'two_team_puzzle_duel', code:'H006', preview:'previews/two_team_puzzle_duel.svg', icon:'🖼️', price:20, free:false, path:'games/two_team_puzzle_duel_game/index.html', download:'downloads/two_team_puzzle_duel.zip'},
  {id:'island_conquest', code:'H007', preview:'previews/island_conquest.svg', icon:'🏝️', price:20, free:false, path:'games/island_conquest_game/index.html', download:'downloads/island_conquest.zip'},
  {id:'timeline_sort_challenge', code:'P008', preview:'previews/timeline_sort_challenge.svg', icon:'⏳', price:20, free:false, path:'games/timeline_sort_challenge_game/index.html', download:'downloads/timeline_sort_challenge.zip'},
  {id:'image_label_match', code:'P009', preview:'previews/image_label_match.svg', icon:'🏷️', price:20, free:false, path:'games/image_label_match_game/index.html', download:'downloads/image_label_match.zip'},
  {id:'team_relay_quiz', code:'P010', preview:'previews/team_relay_quiz.svg', icon:'🏃', price:20, free:false, path:'games/team_relay_quiz_game/index.html', download:'downloads/team_relay_quiz.zip'},
  {id:'find_difference', code:'P006', preview:'previews/find_difference.svg', icon:'🔎', price:20, free:false, path:'games/find_difference_game/index.html', download:'downloads/find_difference.zip'},
  {id:'keyword_beachhead', code:'P007', preview:'previews/keyword_beachhead.svg', icon:'🏖️', price:20, free:false, path:'games/keyword_beachhead_game/index.html', download:'downloads/keyword_beachhead.zip'},
  {id:'kingdom_resource_battle', code:'H008', preview:'previews/kingdom_resource_battle.svg', icon:'🏰', price:20, free:false, path:'games/kingdom_resource_battle_game/index.html', download:'downloads/kingdom_resource_battle.zip'},
  {id:'spot_diff_v2', code:'H009', preview:'previews/spot_diff_v2.svg', icon:'🔍', price:20, free:false, path:'games/spot_diff_v2_game/index.html', download:'downloads/spot_diff_v2.zip'},
];

const PACKAGES = [
  {id:'single', price:20, type:'single'},
  {id:'pick5', price:50, type:'pick5'},
  {id:'all_access', price:100, type:'all'}
];

const GAME_LEVELS = {
  beginner: ['memory_match','true_false','sentence_order','treasure_box','lucky_wheel','text_match','whack_mole'],
  intermediate: ['classification_conveyor','image_puzzle_speed_race','bomb_quiz','knowledge_race','monster_defense','find_difference','keyword_beachhead','timeline_sort_challenge','image_label_match','team_relay_quiz'],
  advanced: ['platform_quiz','dungeon_dragon_raid','picture_word_guess','two_team_puzzle_duel','island_conquest','kingdom_resource_battle','spot_diff_v2']
};

const LEVEL_ORDER = ['beginner','intermediate','advanced'];

const BASE_FREE_GAMES = ['memory_match','true_false'];
const PROFILE_REWARD_GAME = 'sentence_order';
const MALAYSIA_STATES = ['Johor','Kedah','Kelantan','Melaka','Negeri Sembilan','Pahang','Perak','Perlis','Pulau Pinang','Sabah','Sarawak','Selangor','Terengganu'];
const ORG_TYPES = ['小学','中学','補习中心','幼兒園','其他'];


const LEVEL_TEXT = {
  zh: {
    beginner: {label:'初阶', desc:'规则简单，适合课堂暖身、快速复习、第一次使用。'},
    intermediate: {label:'进阶', desc:'有分组、计时、分类、竞赛或上传题材，适合正式课堂活动。'},
    advanced: {label:'高阶', desc:'有地图、路线、策略、多阶段任务或复杂对战，适合大型白板互动。'}
  },
  en: {
    beginner: {label:'Beginner', desc:'Simple rules for warm-ups, quick review and first-time use.'},
    intermediate: {label:'Intermediate', desc:'Team play, timers, classification, competition or uploaded materials.'},
    advanced: {label:'Advanced', desc:'Maps, routes, strategy, multi-stage missions or complex team battles.'}
  },
  ms: {
    beginner: {label:'Asas', desc:'Peraturan mudah untuk pemanasan, ulang kaji pantas dan penggunaan pertama.'},
    intermediate: {label:'Pertengahan', desc:'Aktiviti kumpulan, masa, klasifikasi, pertandingan atau bahan dimuat naik.'},
    advanced: {label:'Lanjutan', desc:'Peta, laluan, strategi, misi berperingkat atau pertempuran kumpulan yang kompleks.'}
  }
};

const LANGS = [
  {id:'zh', label:'简体中文'},
  {id:'en', label:'English'},
  {id:'ms', label:'Melayu'}
];

const I18N = {
  zh: {
    appTitle:'课堂游戏网站',
    tagline:'免登录｜老師后台｜白板专用｜离线下载',
    authBullet1:'管理员可控制每个用户能使用哪些游戏。',
    authBullet2:'免费注册即可先用 2 个游戏，完善资料后再送 1 个。',
    authBullet3:'播放器採用白板专用安全模式，并提供离线 ZIP 下载。',
    authBullet4:'适合互動白板、投影机、电脑荧幕。',
    login:'登录', register:'免费注册', username:'账号', password:'密码', confirmPassword:'确认密码',
    name:'姓名', quickAdmin:'管理员登录', resetDemo:'重置 Demo', loginFail:'登录失敗，請檢查账号或密码。',
    fillAll:'請完整填写资料', passwordMismatch:'兩次密码不一致', accountExists:'账号已存在', registerSuccess:'注册成功，請登录',
    demoAccounts:'测试账号：admin / admin123 ｜ 一般用户：teacher / 123456',
    dashboardSub:'免登录版本，老師可直接进入后台设置题库与游戏包',
    currentUser:'目前用户', admin:'管理员', user:'用户', logout:'登出',
    accountInfo:'账号资讯', role:'角色', package:'配套', normalUser:'一般用户',
    planInfo:'方案說明', single:'配套 1', pick5:'配套 2', all_access:'配套 3',
    singleDesc:'单个购买，每个 RM20', pick5Desc:'RM50 任选五个', allAccessDesc:'RM100 任意使用全部游戏，包括之后开发的',
    demoBuy:'Demo 购买', chooseSingle:'請在游戏卡片上选择要单獨购买的游戏。',
    openAdmin:'打开老師后台', adminPanel:'老師后台', collapse:'收起',
    adminHelp:'此版本不需要登录；老師可直接设置题库、素材与游戏包。',
    authorizedGames:'已授权游戏', operation:'操作', save:'保存设置', selectAll:'全选', clear:'清除',
    freeUser:'免费用户', pack2:'配套 2（五选）', pack3:'配套 3（全授权）',
    playerFeatures:'播放器特色', featureLines:'• 全屏时保持中央安全区<br>• 自動等比放大<br>• 不出現上下轴<br>• 适合互動白板',
    whiteboardMode:'白板专用模式', whiteboardDesc:'打开游戏后会自動进入中央安全区，按鈕放大，适合互動白板上课。',
    enabled:'预設已开启', offlineZip:'离线 ZIP 下载', offlineDesc:'老師先制作题库，再套用版型生成完整游戏压缩包。',
    downloadAll:'下载全部离线包', gameMaker:'游戏制作', makerDesc:'先整理课堂标题与题库；正式版可自動写入设置并打包下载。',
    openMaker:'打开制作区', makerTitle:'游戏制作资料填写区',
    makerHelp:'老師先选择游戏版型，再填入题库或上传素材。按「生成游戏包」后，系统会把版型与题库打包成完整 ZIP。',
    titlePlaceholder:'课堂游戏标题，例如：第3课 词语复习', subjectPlaceholder:'科目 / 年級，例如：华文 三年級',
    questionsPlaceholder:'输入题目资料。建議格式：\\n题目 | 答案 | 选项A,选项B,选项C\\n或直接貼上你的题库内容',
    downloadQuestionTxt:'下载题库 TXT', availableGames:'可用游戏', lockedGames:'尚未授权',
    freeGamesNote:'注册送 2 个游戏，完善资料再送 1 个，其餘可单购或升級配套', lockedNote:'管理员可授权，或使用 Demo 购买',
    free:'免费', paid:'付費', available:'已可使用', locked:'未授权', whiteboardClass:'白板上课', downloadZip:'下载ZIP', make:'制作',
    singleBuy:'单个 RM20', addPick5:'加入五选配套', playing:'正在播放', playerSubtitle:'白板专用｜中央安全区｜无上下轴｜三语切換',
    safe169:'16:9 安全区', safe43:'4:3 安全区', auto:'自動', browserFullscreen:'浏览器全屏', close:'关闭',
    announcements1:'免费注册可先使用 3 个基礎游戏。', announcements2:'平台已加入三语切換、白板安全显示、图片拼图与孤島抢奪赛。',
    language:'语言',
    gameNames: {
      memory_match:'翻翻乐', true_false:'真假判斷快閃', sentence_order:'句子排序挑战', treasure_box:'宝箱开开看',
      lucky_wheel:'幸运转盘问答', classification_conveyor:'分类运输带', platform_quiz:'平台闖关问答',
      monster_defense:'怪獸防守战', whack_mole:'打地鼠问答', text_match:'文字对应', bomb_quiz:'炸弹倒数抢答',
      knowledge_race:'知識赛马', dungeon_dragon_raid:'地牢巨龙討伐战', image_puzzle_speed_race:'图片拼图竞速赛', two_team_puzzle_duel:'双组拼图对战', island_conquest:'孤岛抢夺赛', timeline_sort_challenge:'时间线排序挑战', image_label_match:'图片标签配对赛', team_relay_quiz:'团队答题接力赛', find_difference:'大家來找不同', keyword_beachhead:'关键词抢滩战', kingdom_resource_battle:'王国资源争夺战：围绕中央王都开发农田、森林与金矿，并触发随机好坏事件。'
    },
    gameDesc: {
      memory_match:'記憶翻牌配对，适合暖身与小组競赛。', true_false:'快速判斷题，提升反应力与概念辨識。',
      sentence_order:'适合语文课堂，訓练句子与流程排序。', treasure_box:'抽题与闖关式互動，增加课堂驚喜感。',
      lucky_wheel:'转盘抽题，适合班級抢答活動。', classification_conveyor:'支援图片与文字分类，老師可按分类上传图片，学生在运输带上点选正确分类。',
      platform_quiz:'角色闖关搭配问答，游戏感較強。', monster_defense:'答题防守玩法，适合團体合作。',
      whack_mole:'互動白板很好玩，学生參与度高。', text_match:'词语、拼字、配对类题目都适合。',
      bomb_quiz:'限时压力感強，适合复习与競赛。', knowledge_race:'比赛感強，适合全班分组对抗。',
      dungeon_dragon_raid:'地牢RPG闖关，兩隊答题打怪、補血、找鑰匙，最后討伐巨龙。',
      image_puzzle_speed_race:'老师上传图片作为题目，各组轮流拼图，系统记录时间，最快组别胜利。',
      two_team_puzzle_duel:'两组同时拼同一张图片，适合互动白板分组竞赛，最快完成者胜利。',
      island_conquest:'两队在大海上的六边形岛屿抢占土地，可设定胜利条件、起点、海草障碍与回合限制。',
      timeline_sort_challenge:'老师输入事件或步骤，学生拖动卡片排成正确时间线，适合历史、科学流程与项目步骤。',
      image_label_match:'老师上传图片并输入标签，学生把正确标签拖到对应图片，适合识图、词汇与概念学习。',
      team_relay_quiz:'分组轮流答题，答对前进，先完成接力进度的队伍获胜。'
    }
  },
  en: {
    appTitle:'Classroom Games Platform',
    tagline:'Admin control | User access | Whiteboard mode | Offline ZIP',
    authBullet1:'Admins can control which games each user can use.',
    authBullet2:'Free registration includes 2 games, and completing the profile unlocks 1 more.',
    authBullet3:'The player uses a whiteboard-safe display mode and supports offline ZIP download.',
    authBullet4:'Suitable for interactive whiteboards, projectors and computer screens.',
    login:'Login', register:'Free registration', username:'Username', password:'Password', confirmPassword:'Confirm password',
    name:'Name', quickAdmin:'Admin login', resetDemo:'Reset demo', loginFail:'Login failed. Please check your username or password.',
    fillAll:'Please complete all fields', passwordMismatch:'The two passwords do not match', accountExists:'This username already exists', registerSuccess:'Registration successful. Please login.',
    demoAccounts:'Demo accounts: admin / admin123 | Teacher: teacher / 123456',
    dashboardSub:'After admin authorization, users only see the games they can use',
    currentUser:'Current user', admin:'Admin', user:'User', logout:'Logout',
    accountInfo:'Account info', role:'Role', package:'Package', normalUser:'Standard user',
    planInfo:'Package plans', single:'Plan 1', pick5:'Plan 2', all_access:'Plan 3',
    singleDesc:'Buy individually, RM20 per game', pick5Desc:'RM50 for any 5 games', allAccessDesc:'RM100 for all games, including future games',
    demoBuy:'Demo purchase', chooseSingle:'Please choose an individual game from the game card.',
    openAdmin:'Open admin panel', adminPanel:'Admin panel', collapse:'Collapse',
    adminHelp:'Admins can set which games each user may use. Free games do not require extra authorization.',
    authorizedGames:'Authorized games', operation:'Actions', save:'Save', selectAll:'Select all', clear:'Clear',
    freeUser:'Free user', pack2:'Plan 2 (pick 5)', pack3:'Plan 3 (all access)',
    playerFeatures:'Player features', featureLines:'• Keeps content in the central safe area<br>• Auto proportional scaling<br>• No vertical scrollbars<br>• Suitable for interactive whiteboards',
    whiteboardMode:'Whiteboard mode', whiteboardDesc:'Games open in a central safe area with larger controls for whiteboard teaching.',
    enabled:'Enabled by default', offlineZip:'Offline ZIP download', offlineDesc:'Teachers create content first, then apply a template to generate a complete game ZIP.',
    downloadAll:'Download all offline pack', gameMaker:'Game maker', makerDesc:'Prepare class title and questions; the full version can write settings and generate a ZIP.',
    openMaker:'Open maker', makerTitle:'Game maker data panel',
    makerHelp:'Choose a game template, then add questions or materials. Click Generate Game Pack to package the template and content into a complete ZIP.',
    titlePlaceholder:'Game title, e.g. Lesson 3 Vocabulary Review', subjectPlaceholder:'Subject / grade, e.g. English Year 3',
    questionsPlaceholder:'Enter questions. Suggested format:\\nQuestion | Answer | Option A,Option B,Option C\\nOr paste your question bank here',
    downloadQuestionTxt:'Download question TXT', availableGames:'Available games', lockedGames:'Not authorized',
    freeGamesNote:'2 games after registration, 1 more after completing profile. Other games can be bought or unlocked with a package.', lockedNote:'Admin may authorize it, or use demo purchase.',
    free:'Free', paid:'Paid', available:'Available', locked:'Locked', whiteboardClass:'Whiteboard class', downloadZip:'Download ZIP', make:'Make',
    singleBuy:'Single RM20', addPick5:'Add to pick-5 plan', playing:'Now playing', playerSubtitle:'Whiteboard mode | Central safe area | No scrollbars | Trilingual',
    safe169:'16:9 Safe', safe43:'4:3 Safe', auto:'Auto', browserFullscreen:'Browser fullscreen', close:'Close',
    announcements1:'Free registration includes 3 basic games.', announcements2:'Chinese, English and Malay language switching has been added, while keeping whiteboard-safe display.',
    language:'Language',
    gameNames: {
      memory_match:'Memory Match', true_false:'True/False Flash', sentence_order:'Sentence Order Challenge', treasure_box:'Treasure Box',
      lucky_wheel:'Lucky Wheel Quiz', classification_conveyor:'Classification Conveyor', platform_quiz:'Platform Quiz Adventure',
      monster_defense:'Monster Defense', whack_mole:'Whack-a-Mole Quiz', text_match:'Text Matching', bomb_quiz:'Bomb Countdown Quiz',
      knowledge_race:'Knowledge Race', dungeon_dragon_raid:'Dungeon Dragon Raid', image_puzzle_speed_race:'Image Puzzle Speed Race', two_team_puzzle_duel:'Two-Team Puzzle Duel', island_conquest:'Island Conquest', timeline_sort_challenge:'Timeline Sorting Challenge', image_label_match:'Image Label Matching', team_relay_quiz:'Team Relay Quiz', find_difference:'Let\'s Find the Differences', keyword_beachhead:'Keyword Beachhead Battle', kingdom_resource_battle:'Kingdom Resource Battle'
    },
    gameDesc: {
      memory_match:'A memory card matching game for warm-ups and team competition.', true_false:'Fast true/false questions for reaction and concept checking.',
      sentence_order:'Great for language lessons, sentence order and process sequencing.', treasure_box:'Question drawing and checkpoint gameplay with surprise elements.',
      lucky_wheel:'Spin the wheel to draw questions for class quiz activities.', classification_conveyor:'Supports image and text classification. Teachers upload images by category and students choose the correct conveyor category.',
      platform_quiz:'Character platform adventure with quiz checkpoints.', monster_defense:'Answer questions to defend against monsters in team play.',
      whack_mole:'Highly interactive whiteboard game for class participation.', text_match:'Suitable for vocabulary, spelling and matching tasks.',
      bomb_quiz:'Timed quiz pressure for revision and competition.', knowledge_race:'Race-style team competition for whole-class review.',
      dungeon_dragon_raid:'Dungeon RPG where teams answer, fight monsters, heal, find keys and defeat the dragon.',
      image_puzzle_speed_race:'Teachers upload an image as the question. Teams solve it in turns and the fastest time wins.',
      two_team_puzzle_duel:'Two teams solve the same uploaded image puzzle at the same time. Fastest team wins.',
      island_conquest:'Two teams capture hex islands over the sea, with configurable win condition, starting positions, seaweed barriers and round limit.',
      timeline_sort_challenge:'Teachers enter events or steps. Students drag cards into the correct timeline for history, processes and project steps.',
      image_label_match:'Teachers upload images and labels. Students drag each label to the correct image for vocabulary and concept learning.',
      team_relay_quiz:'Teams answer in turns. Correct answers move forward; the first team to finish the relay wins.',
      find_difference:'Teachers upload an original and a modified image, then mark 5 difference spots. Students play a classic spot-the-difference game on the right image. 5 wrong taps fails; all 5 found clears the round.',
      keyword_beachhead:'Two teams take turns selecting correct keywords. Correct answers capture beach ground and score points.',
      kingdom_resource_battle:'Two kingdoms fight for farms, forests and gold mines. Students answer questions to capture strategic resource nodes.'
    }
  },
  ms: {
    appTitle:'Platform Permainan Kelas',
    tagline:'Kawalan admin | Akses pengguna | Mod papan putih | ZIP luar talian',
    authBullet1:'Admin boleh mengawal permainan yang boleh digunakan oleh setiap pengguna.',
    authBullet2:'Pendaftaran percuma menyediakan 2 permainan, dan lengkap profil untuk membuka 1 lagi.',
    authBullet3:'Pemain menggunakan paparan selamat untuk papan putih dan menyokong muat turun ZIP luar talian.',
    authBullet4:'Sesuai untuk papan putih interaktif, projektor dan skrin komputer.',
    login:'Log masuk', register:'Daftar percuma', username:'Nama pengguna', password:'Kata laluan', confirmPassword:'Sahkan kata laluan',
    name:'Nama', quickAdmin:'Log masuk admin', resetDemo:'Tetapkan semula demo', loginFail:'Log masuk gagal. Sila semak nama pengguna atau kata laluan.',
    fillAll:'Sila lengkapkan semua maklumat', passwordMismatch:'Kata laluan tidak sepadan', accountExists:'Nama pengguna telah wujud', registerSuccess:'Pendaftaran berjaya. Sila log masuk.',
    demoAccounts:'Akaun demo: admin / admin123 | Guru: teacher / 123456',
    dashboardSub:'Selepas kebenaran admin, pengguna hanya melihat permainan yang dibenarkan',
    currentUser:'Pengguna semasa', admin:'Admin', user:'Pengguna', logout:'Log keluar',
    accountInfo:'Maklumat akaun', role:'Peranan', package:'Pakej', normalUser:'Pengguna biasa',
    planInfo:'Pakej', single:'Pakej 1', pick5:'Pakej 2', all_access:'Pakej 3',
    singleDesc:'Beli satu-satu, RM20 setiap permainan', pick5Desc:'RM50 pilih mana-mana 5 permainan', allAccessDesc:'RM100 untuk semua permainan, termasuk permainan akan datang',
    demoBuy:'Beli demo', chooseSingle:'Sila pilih permainan individu daripada kad permainan.',
    openAdmin:'Buka panel admin', adminPanel:'Panel admin', collapse:'Tutup',
    adminHelp:'Admin boleh menetapkan permainan yang boleh digunakan oleh setiap pengguna. Permainan percuma tidak memerlukan kebenaran tambahan.',
    authorizedGames:'Permainan dibenarkan', operation:'Tindakan', save:'Simpan', selectAll:'Pilih semua', clear:'Kosongkan',
    freeUser:'Pengguna percuma', pack2:'Pakej 2 (pilih 5)', pack3:'Pakej 3 (akses penuh)',
    playerFeatures:'Ciri pemain', featureLines:'• Kekalkan kandungan di kawasan selamat tengah<br>• Skala automatik berkadar<br>• Tiada bar skrol menegak<br>• Sesuai untuk papan putih interaktif',
    whiteboardMode:'Mod papan putih', whiteboardDesc:'Permainan dibuka dalam kawasan selamat tengah dengan butang yang lebih besar untuk pengajaran.',
    enabled:'Diaktifkan secara lalai', offlineZip:'Muat turun ZIP luar talian', offlineDesc:'Guru menyediakan kandungan dahulu, kemudian menggunakan templat untuk menjana ZIP permainan lengkap.',
    downloadAll:'Muat turun semua pek luar talian', gameMaker:'Pembina permainan', makerDesc:'Sediakan tajuk kelas dan soalan; versi penuh boleh menjana ZIP secara automatik.',
    openMaker:'Buka pembina', makerTitle:'Panel data pembina permainan',
    makerHelp:'Pilih templat permainan, kemudian tambah soalan atau bahan. Klik Jana Pek Permainan untuk membungkus templat dan kandungan sebagai ZIP lengkap.',
    titlePlaceholder:'Tajuk permainan, contoh: Ulang Kaji Kosa Kata Bab 3', subjectPlaceholder:'Subjek / tahun, contoh: BM Tahun 3',
    questionsPlaceholder:'Masukkan soalan. Format cadangan:\\nSoalan | Jawapan | Pilihan A,Pilihan B,Pilihan C\\nAtau tampal bank soalan anda',
    downloadQuestionTxt:'Muat turun TXT soalan', availableGames:'Permainan tersedia', lockedGames:'Belum dibenarkan',
    freeGamesNote:'2 permainan selepas daftar, 1 lagi selepas lengkap profil. Permainan lain boleh dibeli atau dibuka melalui pakej.', lockedNote:'Admin boleh memberi kebenaran, atau gunakan pembelian demo.',
    free:'Percuma', paid:'Berbayar', available:'Boleh digunakan', locked:'Dikunci', whiteboardClass:'Kelas papan putih', downloadZip:'Muat turun ZIP', make:'Bina',
    singleBuy:'Satu RM20', addPick5:'Tambah ke pakej pilih-5', playing:'Sedang dimainkan', playerSubtitle:'Mod papan putih | Kawasan selamat tengah | Tiada skrol | Tiga bahasa',
    safe169:'Selamat 16:9', safe43:'Selamat 4:3', auto:'Auto', browserFullscreen:'Skrin penuh', close:'Tutup',
    announcements1:'Pendaftaran percuma menyediakan 3 permainan asas.', announcements2:'Pertukaran bahasa Cina, Inggeris dan Melayu telah ditambah, dengan paparan selamat papan putih.',
    language:'Bahasa',
    gameNames: {
      memory_match:'Padanan Memori', true_false:'Benar/Palsu Pantas', sentence_order:'Cabaran Susun Ayat', treasure_box:'Buka Peti Harta',
      lucky_wheel:'Kuiz Roda Bertuah', classification_conveyor:'Tali Sawat Klasifikasi', platform_quiz:'Pengembaraan Platform Kuiz',
      monster_defense:'Pertahanan Raksasa', whack_mole:'Kuiz Ketuk Tikus', text_match:'Padanan Teks', bomb_quiz:'Kuiz Bom Kiraan Detik',
      knowledge_race:'Lumba Pengetahuan', dungeon_dragon_raid:'Serbuan Naga Bawah Tanah', image_puzzle_speed_race:'Perlumbaan Pantas Puzzle Gambar', two_team_puzzle_duel:'Duel Puzzle Dua Kumpulan', island_conquest:'Perebutan Pulau', timeline_sort_challenge:'Cabaran Susun Garis Masa', image_label_match:'Padanan Label Gambar', team_relay_quiz:'Kuiz Relay Berkumpulan', find_difference:'Mari Cari Perbezaan', keyword_beachhead:'Pertempuran Pantai Kata Kunci', kingdom_resource_battle:'Pertempuran Sumber Kerajaan'
    },
    gameDesc: {
      memory_match:'Permainan padanan kad memori untuk pemanasan dan pertandingan kumpulan.', true_false:'Soalan benar/palsu pantas untuk semakan konsep.',
      sentence_order:'Sesuai untuk pelajaran bahasa, susunan ayat dan urutan proses.', treasure_box:'Cabutan soalan dan permainan berperingkat dengan unsur kejutan.',
      lucky_wheel:'Putar roda untuk memilih soalan kuiz kelas.', classification_conveyor:'Menyokong klasifikasi gambar dan teks. Guru memuat naik gambar mengikut kategori dan murid memilih kategori yang betul.',
      platform_quiz:'Pengembaraan watak dengan titik kuiz.', monster_defense:'Jawab soalan untuk mempertahankan pasukan daripada raksasa.',
      whack_mole:'Permainan papan putih yang sangat interaktif.', text_match:'Sesuai untuk kosa kata, ejaan dan padanan.',
      bomb_quiz:'Kuiz bermasa untuk ulang kaji dan pertandingan.', knowledge_race:'Pertandingan gaya lumba untuk ulang kaji kelas.',
      dungeon_dragon_raid:'RPG bawah tanah: jawab soalan, lawan raksasa, pulihkan nyawa, cari kunci dan tewaskan naga.',
      image_puzzle_speed_race:'Guru memuat naik gambar sebagai soalan. Kumpulan menyusun secara bergilir dan masa terpantas menang.',
      two_team_puzzle_duel:'Dua kumpulan menyusun puzzle gambar yang sama secara serentak. Kumpulan terpantas menang.',
      island_conquest:'Dua pasukan merebut pulau heksagon di laut, dengan syarat menang, kedudukan mula, halangan rumpai laut dan had pusingan yang boleh ditetapkan.',
      timeline_sort_challenge:'Guru memasukkan peristiwa atau langkah. Murid menyeret kad ke garis masa yang betul.',
      image_label_match:'Guru memuat naik gambar dan label. Murid menyeret label ke gambar yang betul.',
      team_relay_quiz:'Pasukan menjawab secara bergilir. Jawapan betul maju; pasukan pertama tamat menang.',
      find_difference:'Guru memuat naik gambar asal dan gambar diubah, kemudian menanda 5 lokasi perbezaan. Murid bermain gaya klasik cari perbezaan pada gambar kanan. Salah 5 kali gagal; jumpa semua 5 dikira lulus.',
      keyword_beachhead:'Dua kumpulan bergilir-gilir memilih kata kunci yang betul. Jawapan betul merampas pantai dan memperoleh markah.',
      kingdom_resource_battle:'Dua kerajaan berebut ladang, hutan dan lombong emas. Murid menjawab soalan untuk menawan nod sumber secara strategik.'
    }
  }
};

const STORAGE_KEY = 'classroom_games_hybrid_auth_v1';
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
let state = loadState();
let currentAspectMode = 'auto';
let currentPlayerGame = null;

function L(){ return I18N[state.lang || 'zh'] || I18N.zh; }
function t(key){ return L()[key] ?? I18N.zh[key] ?? key; }
function gameName(id){ return L().gameNames?.[id] || I18N.zh.gameNames[id] || id; }
function gameDesc(id){ return L().gameDesc?.[id] || I18N.zh.gameDesc[id] || ''; }

function gameLevel(id){
  for(const level of LEVEL_ORDER){
    if((GAME_LEVELS[level] || []).includes(id)) return level;
  }
  return 'beginner';
}
function levelText(level){
  return (LEVEL_TEXT[state.lang || 'zh'] || LEVEL_TEXT.zh)[level] || LEVEL_TEXT.zh[level] || {label:level, desc:''};
}
function gameCode(id){
  const game = GAME_DATA.find(g => g.id === id);
  return game?.code || id;
}
function gamePreview(id){
  const game = GAME_DATA.find(g => g.id === id);
  return game?.preview || '';
}
function langSelect(id='langSelect'){
  return `<label class="lang-wrap">${t('language')} <select id="${id}" class="select lang-select">${LANGS.map(l=>`<option value="${l.id}" ${state.lang===l.id?'selected':''}>${l.label}</option>`).join('')}</select></label>`;
}
function bindLangSelects(){
  $$('.lang-select').forEach(sel => {
    sel.onchange = () => { state.lang = sel.value; saveState(); render(); };
  });
}

function defaultState(){
  return {
    lang:'zh',
    feedback:[],
    users:[
      {
        id:'u_admin',
        email:'admin@lead.ai',
        username:'admin@lead.ai',
        password:'admin123',
        name:'系统管理员',
        role:'admin',
        accountStatus:'approved',
        disabled:false,
        ownedGames: GAME_DATA.map(g=>g.id),
        package:'all_access',
        profileCompleted:true,
        profile:{email:'admin@lead.ai', phone:'', chineseName:'系统管理员', englishName:'Admin', state:'Johor', orgTypes:['其他']}
      },
      {
        id:'u_teacher',
        email:'teacher@example.com',
        username:'teacher@example.com',
        password:'123456',
        name:'示範老師',
        role:'user',
        accountStatus:'approved',
        disabled:false,
        ownedGames: GAME_DATA.map(g=>g.id),
        package:'all_access',
        profileCompleted:true,
        profile:{email:'teacher@example.com', phone:'', chineseName:'示範老師', englishName:'Demo Teacher', state:'Johor', orgTypes:['学校老師']}
      }
    ],
    currentUser:null
  };
}


function saveMigratedState(nextState){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState)); }catch(e){} }
function ensureDefaultAccounts(parsed){
  parsed.users = Array.isArray(parsed.users) ? parsed.users : [];
  const defaults = defaultState().users;
  defaults.forEach(def => {
    let existing = parsed.users.find(u => normalizeEmail(u.email || u.username) === normalizeEmail(def.email));
    if(!existing){
      parsed.users.push({...def});
      return;
    }
    existing.id = existing.id || def.id;
    existing.email = def.email;
    existing.username = def.email;
    existing.name = existing.name || def.name;
    existing.role = def.role;
    existing.accountStatus = 'approved';
    existing.disabled = false;
    if(def.role === 'admin') {
      existing.password = 'admin123';
      existing.package = 'all_access';
      existing.ownedGames = GAME_DATA.map(g=>g.id);
    }
    if(def.email === 'teacher@example.com') {
      existing.password = '123456';
      existing.package = 'all_access';
      existing.ownedGames = GAME_DATA.map(g=>g.id);
    }
    existing.profile = existing.profile || def.profile;
    existing.profileCompleted = true;
  });
  return parsed;
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(!parsed.users || !Array.isArray(parsed.users)) return defaultState();
      if(!parsed.lang) parsed.lang='zh';
      if(!Array.isArray(parsed.feedback)) parsed.feedback=[];
      parsed.users.forEach(u=>{
        if(!u.email) u.email = u.username && u.username.includes('@') ? u.username : (u.username==='admin'?'admin@lead.ai':`${u.username || 'teacher'}@example.com`);
        u.username = u.email;
        if(!u.profile) u.profile = {email:u.email, phone:'', chineseName:u.name || '', englishName:'', state:'Johor', orgTypes:[]};
        if(!u.profile.email) u.profile.email = u.email;
        if(!u.accountStatus) u.accountStatus = 'approved';
        if(typeof u.disabled !== 'boolean') u.disabled = false;
        if(u.role==='admin') u.profileCompleted = true;
        if(typeof u.profileCompleted !== 'boolean') u.profileCompleted = isProfileComplete(u);
      });
      ensureDefaultAccounts(parsed);
      saveMigratedState(parsed);
      return parsed;
    }
  }catch(e){}
  const initial = defaultState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function resetDemo(){ state = defaultState(); saveState(); render(); }
function getUser(){ return state.users.find(u=>u.id===state.currentUser) || null; }
function findGame(id){ return GAME_DATA.find(g=>g.id===id); }
function userHasAccess(user, gameId){
  if(!user) return false;
  if(user.role==='admin') return true;
  if(user.package==='all_access') return true;
  if(BASE_FREE_GAMES.includes(gameId)) return true;
  return (user.ownedGames || []).includes(gameId);
}

function availableGamesForUser(user){ return GAME_DATA.filter(g => g.free || userHasAccess(user, g.id)); }
function lockedGamesForUser(user){ return GAME_DATA.filter(g => !(g.free || userHasAccess(user, g.id))); }

function normalizeEmail(email){
  return String(email || '').trim().toLowerCase();
}
function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email));
}
function login(email, password){
  const normalized = normalizeEmail(email);
  const passwordText = String(password || '').trim();
  ensureDefaultAccounts(state);
  let user = state.users.find(u => normalizeEmail(u.email || u.username)===normalized && String(u.password || '').trim()===passwordText);
  if(!user && normalized==='admin@lead.ai' && passwordText==='admin123'){
    ensureDefaultAccounts(state);
    user = state.users.find(u => normalizeEmail(u.email || u.username)==='admin@lead.ai');
  }
  if(!user && normalized==='teacher@example.com' && passwordText==='123456'){
    ensureDefaultAccounts(state);
    user = state.users.find(u => normalizeEmail(u.email || u.username)==='teacher@example.com');
  }
  if(!user) return {ok:false, msg:t('loginFail')};
  if(user.disabled) return {ok:false, msg:'此账号已停用，請联络管理员。'};
  if(user.accountStatus !== 'approved') return {ok:false, msg:'账号申請已送出，請等待管理员批准。'};
  state.currentUser = user.id;
  saveState();
  render();
  return {ok:true, msg:''};
}
function registerTeacherAccount(name, email, password){
  const normalized = normalizeEmail(email);
  const teacherName = String(name || '').trim();
  if(!teacherName || !normalized || !password) return {ok:false, msg:t('fillAll')};
  if(!isValidEmail(normalized)) return {ok:false, msg:'請输入有效电郵。'};
  if(state.users.some(u => normalizeEmail(u.email || u.username)===normalized)) return {ok:false, msg:t('accountExists')};
  state.users.push({
    id:'u_'+Date.now(),
    email:normalized,
    username:normalized,
    password,
    name:teacherName,
    role:'user',
    accountStatus:'pending',
    disabled:false,
    ownedGames:[],
    package:'free',
    profileCompleted:false,
    profile:{email:normalized, phone:'', chineseName:teacherName, englishName:'', state:'Johor', orgTypes:[]}
  });
  saveState();
  return {ok:true, msg:'申請已送出。請等待管理员批准后再登录。'};
}
function register(email, password){
  return registerTeacherAccount(email, email, password);
}
function isProfileComplete(user){
  const p = user?.profile || {};
  return !!(p.email && p.phone && (p.chineseName || p.englishName) && p.state && Array.isArray(p.orgTypes) && p.orgTypes.length);
}
function completeProfile(userId, profile){
  const user = state.users.find(u=>u.id===userId);
  if(!user) return false;
  user.profile = {...(user.profile||{}), ...profile, email:user.email};
  user.name = profile.chineseName || profile.englishName || user.email;
  const wasCompleted = user.profileCompleted;
  user.profileCompleted = isProfileComplete(user);
  if(user.profileCompleted && !wasCompleted && !user.ownedGames.includes(PROFILE_REWARD_GAME)){
    user.ownedGames.push(PROFILE_REWARD_GAME);
  }
  saveState();
  render();
  return true;
}
function submitFeedback(gameCode, message){
  const user = getUser();
  if(!user || !message.trim()) return false;
  state.feedback = state.feedback || [];
  state.feedback.unshift({
    id:'fb_'+Date.now(),
    date:new Date().toLocaleString(),
    userEmail:user.email,
    userName:user.name,
    gameCode:(gameCode||'').trim(),
    message:message.trim()
  });
  saveState();
  render();
  return true;
}

function logout(){ state.currentUser = null; saveState(); closePlayer(); render(); }

function render(){
  updatePlayerLabels();
  const app = $('#app');
  const user = getUser();
  if(!user){
    app.innerHTML = renderAuth();
    bindAuth();
    bindLangSelects();
    return;
  }
  app.innerHTML = renderDashboard(user);
  bindDashboard();
  bindLangSelects();
}

function renderAuth(){
  return `
  <div class="auth-wrap hybrid-auth-wrap">
    <div class="card auth-card hybrid-auth-card">
      <div class="auth-left">
        <div class="brand"><div class="logo">🎮</div><div><h1>${t('appTitle')}</h1><div class="sub">老師账号登录｜管理员管理｜白板游戏库</div></div></div>
        <ul class="auth-list">
          <li>老師需要账号登录后才能进入游戏库。</li>
          <li>老師可自行注册申請账号，等待管理员批准。</li>
          <li>管理员可新增、批准、停用、刪除老師账号。</li>
          <li>登录后可在老師后台设置题库、课堂标题与素材。</li>
        </ul>
        <div class="notice">
          测试老師：teacher@example.com / 123456<br>
          管理员：admin@lead.ai / admin123
        </div>
      </div>
      <div class="auth-right">
        <div style="display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:12px">
          <h3 style="margin:0">老師 / 管理员登录</h3>
          ${langSelect('authLangSelect')}
        </div>
        <div class="form-row one">
          <input id="loginEmail" class="input" placeholder="电郵 Email" value="teacher@example.com" />
          <input id="loginPassword" class="input" placeholder="${t('password')}" type="password" value="123456" />
        </div>
        <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
          <button id="loginBtn" type="button" class="btn" onclick="handleLoginClick()">登录</button>
          <button id="quickAdminBtn" type="button" class="btn secondary" onclick="handleQuickAdminClick()">管理员登录</button>
          <button id="resetDemoBtn" type="button" class="btn secondary" onclick="resetDemo()">重置 Demo</button>
        </div>
        <p id="loginMsg" class="muted"></p>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:22px 0" />
        <h3>老師注册申請账号</h3>
        <div class="form-row one">
          <input id="regName" class="input" placeholder="老師姓名" />
          <input id="regEmail" class="input" placeholder="电郵 Email" />
          <input id="regPassword" class="input" type="password" placeholder="设置密码" />
          <input id="regPassword2" class="input" type="password" placeholder="再次输入密码" />
        </div>
        <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
          <button id="registerBtn" type="button" class="btn maker" onclick="handleRegisterClick()">送出申請</button>
        </div>
        <p id="regMsg" class="muted"></p>
      </div>
    </div>
  </div>`;
}

function renderLevelLegend(){
  return `<div class="level-legend compact">
    ${LEVEL_ORDER.map(level=>`<div class="level-chip ${level}"><b>${levelText(level).label}</b><span>${levelText(level).desc}</span></div>`).join('')}
  </div>`;
}
function renderGameGroups(games, accessible, user, prefix=''){
  return LEVEL_ORDER.map(level=>{
    const group = games.filter(g => gameLevel(g.id) === level);
    if(!group.length) return '';
    const info = levelText(level);
    const openAttr = accessible ? 'open' : '';
    return `<details class="level-accordion ${level}" ${openAttr}>
      <summary>
        <div><b>${info.label}</b><span>${info.desc}</span></div>
        <em>${group.length}</em>
      </summary>
      <div class="game-grid simplified-grid">${group.map(g=>gameCard(g, accessible, user)).join('')}</div>
    </details>`;
  }).join('');
}
function renderAuthorizedSummary(user, available){
  const list = available.map(g=>`<span class="summary-game ${gameLevel(g.id)}">${gameCode(g.id)}｜${gameName(g.id)}</span>`).join('');
  return `<div class="authorized-summary">
    <div>
      <h3>目前授权可使用：${available.length} 款</h3>
      <p>已授权游戏会出現在下方「可使用游戏」区；未授权游戏会集中在「未授权游戏」区。</p>
    </div>
    <div class="summary-game-list">${list}</div>
  </div>`;
}
function renderProfilePanel(user){
  if(user.role==='admin') return '';
  const p = user.profile || {};
  const completed = isProfileComplete(user);
  return `<div class="profile-panel ${completed?'completed':'incomplete'}">
    <div class="profile-head">
      <div>
        <h3>${completed?'老師资料已完成':'完善老師资料，再送 1 个游戏'}</h3>
        <p>${completed?'已解鎖资料完善奖励游戏。':'請填写电話、姓名、州屬与服務类型。完成后会自動解鎖 S003 句子排序挑战。'}</p>
      </div>
      <span>${completed?'已完成':'未完成'}</span>
    </div>
    <div class="profile-form">
      <input id="profileEmail" class="input" value="${user.email}" disabled />
      <input id="profilePhone" class="input" placeholder="电話 / WhatsApp" value="${p.phone||''}" />
      <input id="profileChineseName" class="input" placeholder="中文姓名" value="${p.chineseName||''}" />
      <input id="profileEnglishName" class="input" placeholder="英文姓名" value="${p.englishName||''}" />
      <select id="profileState" class="select">
        ${MALAYSIA_STATES.map(s=>`<option value="${s}" ${p.state===s?'selected':''}>${s}</option>`).join('')}
      </select>
      <div class="org-checks">
        ${ORG_TYPES.map(type=>`<label><input type="checkbox" class="profileOrgType" value="${type}" ${(p.orgTypes||[]).includes(type)?'checked':''}> ${type}</label>`).join('')}
      </div>
      <button id="saveProfileBtn" class="btn good">保存老師资料</button>
    </div>
  </div>`;
}
function renderFeedbackPanel(){
  return `<div class="feedback-panel">
    <div class="filter-row">
      <h3>回饋 / 询问</h3>
      <div class="muted">若有针对某个游戏，請写明游戏代号，例如 S001、P001、H007。</div>
    </div>
    <div class="feedback-form">
      <input id="feedbackGameCode" class="input" placeholder="游戏代号，可留空，例如 H007" />
      <textarea id="feedbackMessage" class="input" placeholder="請输入回饋、问题、建議或希望新增的功能"></textarea>
      <button id="submitFeedbackBtn" class="btn maker">送出回饋</button>
    </div>
  </div>`;
}

function renderDashboard(user){
  const available = user.role==='admin' ? GAME_DATA : availableGamesForUser(user);
  const locked = user.role==='admin' ? [] : lockedGamesForUser(user);
  const roleText = user.role==='admin' ? '管理员' : '老師';
  return `
  <div class="page simplified-page hybrid-dashboard">
    <div class="hero">
      <div class="brand">
        <div class="logo">🎮</div>
        <div>
          <h1>${t('appTitle')}</h1>
          <div class="sub">老師账号制｜管理员后台｜题库设置｜白板上课</div>
        </div>
      </div>
      <div class="top-actions">
        ${langSelect('dashLangSelect')}
        <div class="pill teacher-mode-pill">${user.name || user.email}（${roleText}）</div>
        <button id="logoutBtn" class="btn secondary">登出</button>
      </div>
    </div>

    <div class="authorized-summary">
      <div>
        <h3>${user.role==='admin' ? '管理员后台' : '老師游戏库'}｜目前可使用：${available.length} 款</h3>
        <p>${user.role==='admin' ? '管理员可新增老師、批准申請、重設密码、停用账号，也可进入游戏库测试所有游戏。' : '老師登录后，可使用已授权游戏，并在老師后台设置题库、课堂标题与素材。'}</p>
      </div>
      <div class="summary-game-list">${available.map(g=>`<span class="summary-game ${gameLevel(g.id)}">${gameCode(g.id)}｜${gameName(g.id)}</span>`).join('')}</div>
    </div>

    ${user.role==='admin' ? renderAdminPanel() : ''}
    ${renderTeacherBackendPanel()}

    <div class="teacher-simple-layout">
      <div class="card main simplified-main">
        <div class="filter-row">
          <h3>游戏库</h3>
          <div class="muted">点开初階 / 进階 / 高階，即可查看該階級游戏。可直接白板上课，或套用版型进入老師后台。</div>
        </div>
        ${renderGameGroups(available, true, user)}
        ${locked.length ? `<div class="filter-row locked-title"><h3>未授权游戏（${locked.length}）</h3><div class="muted">請由管理员授权后使用。</div></div>${renderGameGroups(locked, false, user)}`:''}
        ${renderFeedbackPanel()}
      </div>
    </div>
  </div>`;
}

function renderTeacherBackendPanel(){
  return `
  <div id="makerPanel" class="card teacher-backend-panel">
    <div class="filter-row">
      <div>
        <h3>老師后台｜题库与游戏包设置</h3>
        <div class="muted">老師登录后可选择游戏版型，再输入题库 / 素材說明，生成设置资料与对应游戏包。</div>
      </div>
      <button id="closeMakerBtn" class="btn secondary small">收起后台</button>
    </div>
    <div class="backend-grid">
      <div class="backend-field">
        <label>选择游戏版型</label>
        <select id="makerGameSelect" class="select">
          ${GAME_DATA.map(g=>`<option value="${g.id}">${gameCode(g.id)}｜${gameName(g.id)}</option>`).join('')}
        </select>
      </div>
      <div class="backend-field">
        <label>课堂游戏标题</label>
        <input id="makerTitleInput" class="input" placeholder="${t('titlePlaceholder')}" />
      </div>
      <div class="backend-field">
        <label>科目 / 年級</label>
        <input id="makerSubject" class="input" placeholder="${t('subjectPlaceholder')}" />
      </div>
      <div class="backend-field full">
        <label>题库 / 素材设置</label>
        <textarea id="makerQuestions" class="input maker-textarea" placeholder="${t('questionsPlaceholder')}"></textarea>
      </div>
    </div>
    <div class="notice backend-notice">
      建議题库格式：题目｜答案｜选项A,选项B,选项C。图片类游戏可在此記錄图片名稱、答案位置或上传素材說明；正式部署可再接入自動写入 game-config.json。
    </div>
    <div class="backend-actions">
      <button id="downloadMakerTxtBtn" class="btn secondary">下载题库 TXT</button>
      <button id="generateTemplateZipBtn" class="btn download">生成 / 下载游戏包</button>
      <button id="downloadAllOfflineBtn" class="btn maker">下载全部离线包</button>
    </div>
  </div>`;
}

function renderTeacherTools(user){
  return `
  <div class="teacher-tools">
    <div class="tool-card">
      <h4>🖥️ ${t('whiteboardMode')}</h4>
      <p>${t('whiteboardDesc')}</p>
      <div class="mode-badge">${t('enabled')}</div>
    </div>
    <div class="tool-card">
      <h4>📦 ${t('offlineZip')}</h4>
      <p>${t('offlineDesc')}</p>
      <button id="downloadAllPackBtn" class="btn download small">${t('downloadAll')}</button>
    </div>
    <div class="tool-card">
      <h4>🛠️ ${t('gameMaker')}</h4>
      <p>${t('makerDesc')}</p>
      <button id="openMakerBtn" class="btn maker small">${t('openMaker')}</button>
    </div>
  </div>`;
}

function gameCard(g, accessible, user){
  const level = gameLevel(g.id);
  const code = gameCode(g.id);
  return `<div class="game-card ${accessible?'':'locked'} level-card ${level}">
      <div class="game-preview-wrap">
        <img class="game-preview" src="${gamePreview(g.id)}" alt="${code} ${gameName(g.id)} preview" />
        <div class="game-code-badge">${code}</div>
      </div>
      <h4>${gameName(g.id)}</h4>
      <div class="tag-row">
        <span class="tag level ${level}">${levelText(level).label}</span>
        <span class="tag code">${code}</span>
        ${accessible?`<span class="tag">${t('available')}</span>`:`<span class="tag lock">${t('locked')}</span>`}
      </div>
      <div class="spacer"></div>
      ${accessible
        ? `<div class="card-actions"><button class="btn whiteboard open-game-btn" data-game="${g.id}">${t('whiteboardClass')}</button><button class="btn maker small make-game-btn" data-game="${g.id}">套用版型</button><button class="btn download small generate-game-btn" data-game="${g.id}">生成游戏包</button></div>`
        : `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn secondary small buy-single-btn" data-game="${g.id}">${t('singleBuy')}</button><button class="btn small buy-pick5-fast-btn" data-game="${g.id}">${t('addPick5')}</button></div>`}
    </div>`;
}


function renderAdminPanel(){
  const teachers = state.users.filter(u=>u.role!=='admin');
  const pendingCount = teachers.filter(u=>u.accountStatus==='pending').length;
  const feedback = state.feedback || [];
  return `
  <div id="adminPanel" class="card admin-account-panel">
    <div class="filter-row"><h3>管理员后台｜老師账号管理</h3><div class="muted">待批准：${pendingCount} 位｜老師總数：${teachers.length} 位</div></div>
    <div class="notice">管理员可新增老師账号、批准老師申請、停用 / 启用账号、重設密码，也可设置老師可使用的游戏。</div>

    <div class="add-teacher-box">
      <h4>新增老師账号</h4>
      <div class="backend-grid admin-add-grid">
        <input id="newTeacherName" class="input" placeholder="老師姓名" />
        <input id="newTeacherEmail" class="input" placeholder="老師电郵 Email" />
        <input id="newTeacherPassword" class="input" placeholder="初始密码，例如 123456" />
        <select id="newTeacherPackage" class="select">
          <option value="all_access">全部游戏授权</option>
          <option value="free">免费 / 基礎授权</option>
          <option value="pick5">五选授权</option>
        </select>
      </div>
      <button id="addTeacherBtn" class="btn maker small">新增老師</button>
      <span id="addTeacherMsg" class="muted"></span>
    </div>

    <table class="admin-table account-table">
      <thead><tr><th>老師账号</th><th>状态</th><th>${t('package')}</th><th>${t('authorizedGames')}</th><th>${t('operation')}</th></tr></thead>
      <tbody>
      ${teachers.map(u=>`<tr class="${u.accountStatus==='pending'?'pending-row':''} ${u.disabled?'disabled-row':''}">
        <td><b>${u.name}</b><br><span class="muted">${u.email || u.username}</span><br><span class="muted">密码：${u.password}</span></td>
        <td>${accountStatusBadge(u)}</td>
        <td>
          <select class="select admin-package-select" data-user="${u.id}">
            <option value="free" ${u.package==='free'?'selected':''}>${t('freeUser')}</option>
            <option value="pick5" ${u.package==='pick5'?'selected':''}>${t('pack2')}</option>
            <option value="all_access" ${u.package==='all_access'?'selected':''}>${t('pack3')}</option>
          </select>
        </td>
        <td>${renderGameChecks(u)}</td>
        <td class="account-actions">
          <button class="btn small save-user-btn" data-user="${u.id}">${t('save')}</button>
          ${u.accountStatus==='pending'?`<button class="btn good small approve-teacher-btn" data-user="${u.id}">批准</button>`:''}
          <button class="btn secondary small grant-all-btn" data-user="${u.id}">${t('selectAll')}</button>
          <button class="btn secondary small reset-password-btn" data-user="${u.id}">重設密码</button>
          <button class="btn ${u.disabled?'maker':'danger'} small disable-teacher-btn" data-user="${u.id}">${u.disabled?'启用':'停用'}</button>
          <button class="btn danger small delete-teacher-btn" data-user="${u.id}">刪除</button>
        </td>
      </tr>`).join('')}
      </tbody>
    </table>

    <div class="feedback-admin">
      <h3>老師回饋 / 询问</h3>
      ${feedback.length ? feedback.map(f=>`<div class="feedback-item">
        <b>${f.gameCode || '未指定游戏'}</b>
        <span>${f.date}｜${f.userName || ''}｜${f.userEmail || ''}</span>
        <p>${f.message}</p>
      </div>`).join('') : `<div class="muted">目前沒有回饋。</div>`}
    </div>
  </div>`;
}

function accountStatusBadge(u){
  if(u.disabled) return '<span class="status-badge disabled">已停用</span>';
  if(u.accountStatus==='pending') return '<span class="status-badge pending">待批准</span>';
  return '<span class="status-badge approved">已批准</span>';
}

function renderGameChecks(user){
  return `<div class="check-grid">${GAME_DATA.filter(g=>!g.free).map(g=>`<label class="check-item"><input type="checkbox" class="admin-game-check" data-user="${user.id}" data-game="${g.id}" ${(user.ownedGames||[]).includes(g.id)?'checked':''}/> <span>${gameName(g.id)}</span></label>`).join('')}</div>`;
}
function packageName(pkg){ return t(pkg) || pkg; }
function packageDesc(pkg){
  if(pkg==='single') return t('singleDesc');
  if(pkg==='pick5') return t('pick5Desc');
  if(pkg==='all_access') return t('allAccessDesc');
  return '';
}
function packageLabel(pkg){
  if(pkg==='all_access') return `${t('all_access')}｜${t('pack3')}`;
  if(pkg==='pick5') return `${t('pick5')}｜${t('pack2')}`;
  if(pkg==='free') return t('freeUser');
  return t('single');
}


function handleLoginClick(){
  const email = $('#loginEmail')?.value?.trim() || '';
  const password = $('#loginPassword')?.value || '';
  const result = login(email, password);
  const msg = $('#loginMsg');
  if(msg) msg.textContent = result.ok ? '' : result.msg;
}
function handleQuickAdminClick(){
  const email = $('#loginEmail');
  const password = $('#loginPassword');
  if(email) email.value='admin@lead.ai';
  if(password) password.value='admin123';
  const result = login('admin@lead.ai','admin123');
  const msg = $('#loginMsg');
  if(msg) msg.textContent = result.ok ? '' : result.msg;
}
function handleRegisterClick(){
  const name = $('#regName')?.value?.trim() || '';
  const email = $('#regEmail')?.value?.trim() || '';
  const p1 = $('#regPassword')?.value || '';
  const p2 = $('#regPassword2')?.value || '';
  const msg = $('#regMsg');
  if(!name || !email || !p1){ if(msg) msg.textContent=t('fillAll'); return; }
  if(p1 !== p2){ if(msg) msg.textContent=t('passwordMismatch'); return; }
  const result = registerTeacherAccount(name, email, p1);
  if(msg) msg.textContent = result.msg;
  if(result.ok){
    if($('#regName')) $('#regName').value='';
    if($('#regEmail')) $('#regEmail').value='';
    if($('#regPassword')) $('#regPassword').value='';
    if($('#regPassword2')) $('#regPassword2').value='';
  }
}

function bindAuth(){
  const loginBtn = $('#loginBtn'); if(loginBtn) loginBtn.onclick = handleLoginClick;
  const quickAdminBtn = $('#quickAdminBtn'); if(quickAdminBtn) quickAdminBtn.onclick = handleQuickAdminClick;
  const resetDemoBtn = $('#resetDemoBtn'); if(resetDemoBtn) resetDemoBtn.onclick = resetDemo;
  const registerBtn = $('#registerBtn'); if(registerBtn) registerBtn.onclick = handleRegisterClick;
  ['loginEmail','loginPassword'].forEach(id=>{
    const el = $(id);
    if(el) el.onkeydown = (ev)=>{ if(ev.key==='Enter') handleLoginClick(); };
  });
}


function addTeacherAccount(){
  const name = $('#newTeacherName')?.value?.trim() || '';
  const email = $('#newTeacherEmail')?.value?.trim() || '';
  const password = $('#newTeacherPassword')?.value?.trim() || '123456';
  const pkg = $('#newTeacherPackage')?.value || 'all_access';
  const normalized = normalizeEmail(email);
  const msg = $('#addTeacherMsg');
  if(!name || !normalized){ if(msg) msg.textContent='請填写老師姓名与电郵。'; return; }
  if(!isValidEmail(normalized)){ if(msg) msg.textContent='請输入有效电郵。'; return; }
  if(state.users.some(u=>normalizeEmail(u.email || u.username)===normalized)){ if(msg) msg.textContent='此电郵已存在。'; return; }
  state.users.push({
    id:'u_'+Date.now(), email:normalized, username:normalized, password, name,
    role:'user', accountStatus:'approved', disabled:false,
    ownedGames: pkg==='all_access' ? GAME_DATA.map(g=>g.id) : [],
    package:pkg,
    profileCompleted:true,
    profile:{email:normalized, phone:'', chineseName:name, englishName:'', state:'Johor', orgTypes:['学校老師']}
  });
  saveState();
  render();
}
function approveTeacher(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  u.accountStatus='approved'; u.disabled=false;
  if(!u.package) u.package='free';
  saveState(); render();
}
function toggleTeacherDisabled(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  u.disabled = !u.disabled;
  saveState(); render();
}
function deleteTeacherAccount(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  if(!confirm(`确定刪除老師账号：${u.name || u.email}？`)) return;
  state.users = state.users.filter(x=>x.id!==userId);
  saveState(); render();
}
function resetTeacherPassword(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  const p = prompt(`請输入 ${u.name || u.email} 的新密码：`, '123456');
  if(!p) return;
  u.password = p;
  saveState(); render();
}
function bindDashboard(){
  const logoutBtn = $('#logoutBtn'); if(logoutBtn) logoutBtn.onclick = logout;
  const saveProfileBtn = $('#saveProfileBtn');
  if(saveProfileBtn) saveProfileBtn.onclick = () => {
    const orgTypes = $$('.profileOrgType').filter(x=>x.checked).map(x=>x.value);
    const profile = {
      email:getUser().email,
      phone:$('#profilePhone')?.value?.trim() || '',
      chineseName:$('#profileChineseName')?.value?.trim() || '',
      englishName:$('#profileEnglishName')?.value?.trim() || '',
      state:$('#profileState')?.value || '',
      orgTypes
    };
    completeProfile(getUser().id, profile);
  };
  const submitFeedbackBtn = $('#submitFeedbackBtn');
  if(submitFeedbackBtn) submitFeedbackBtn.onclick = () => {
    const ok = submitFeedback($('#feedbackGameCode')?.value || '', $('#feedbackMessage')?.value || '');
    if(!ok) alert('請先输入回饋内容。');
  };
  $$('.open-game-btn').forEach(btn => btn.onclick = () => openGame(btn.dataset.game));
  $$('.make-game-btn').forEach(btn => btn.onclick = () => openMaker(btn.dataset.game));
  $$('.generate-game-btn').forEach(btn => btn.onclick = () => generateGamePackage(btn.dataset.game));
  const openMakerBtn = $('#openMakerBtn');
  if(openMakerBtn) openMakerBtn.onclick = () => openMaker();
  const closeMakerBtn = $('#closeMakerBtn');
  if(closeMakerBtn) closeMakerBtn.onclick = () => $('#makerPanel').classList.toggle('hidden');
  const makerGameSelect = $('#makerGameSelect');
  if(makerGameSelect) makerGameSelect.onchange = () => openMaker(makerGameSelect.value);
  const downloadMakerTxtBtn = $('#downloadMakerTxtBtn');
  if(downloadMakerTxtBtn) downloadMakerTxtBtn.onclick = downloadMakerTxt;
  const downloadAllPackBtn = $('#downloadAllPackBtn');
  if(downloadAllPackBtn) downloadAllPackBtn.onclick = () => openMaker();
  const downloadAllOfflineBtn = $('#downloadAllOfflineBtn');
  if(downloadAllOfflineBtn) downloadAllOfflineBtn.onclick = () => location.href = 'downloads/all_classroom_games_offline_pack.zip';
  const generateTemplateZipBtn = $('#generateTemplateZipBtn');
  if(generateTemplateZipBtn) generateTemplateZipBtn.onclick = () => generateGamePackage(makerSelectedGameId);
  $$('.buy-single-btn').forEach(btn => btn.onclick = () => buySingle(btn.dataset.game));
  $$('.buy-package-btn').forEach(btn => btn.onclick = () => buyPackage(btn.dataset.package));
  $$('.buy-pick5-fast-btn').forEach(btn => btn.onclick = () => buyPick5Fast(btn.dataset.game));
  const openAdmin = $('#openAdminBtn');
  if(openAdmin) openAdmin.onclick = () => { $('#adminPanel').classList.remove('hidden'); };
  const closeAdmin = $('#closeAdminBtn');
  if(closeAdmin) closeAdmin.onclick = () => { $('#adminPanel').classList.add('hidden'); };
  $$('.save-user-btn').forEach(btn => btn.onclick = () => saveUserConfig(btn.dataset.user));
  $$('.grant-all-btn').forEach(btn => btn.onclick = () => setAllChecks(btn.dataset.user, true));
  $$('.clear-all-btn').forEach(btn => btn.onclick = () => setAllChecks(btn.dataset.user, false));
  $$('.approve-teacher-btn').forEach(btn => btn.onclick = () => approveTeacher(btn.dataset.user));
  $$('.disable-teacher-btn').forEach(btn => btn.onclick = () => toggleTeacherDisabled(btn.dataset.user));
  $$('.delete-teacher-btn').forEach(btn => btn.onclick = () => deleteTeacherAccount(btn.dataset.user));
  $$('.reset-password-btn').forEach(btn => btn.onclick = () => resetTeacherPassword(btn.dataset.user));
  const addTeacherBtn = $('#addTeacherBtn');
  if(addTeacherBtn) addTeacherBtn.onclick = addTeacherAccount;

  $('#closePlayerBtn').onclick = closePlayer;
  $('#fullscreenBtn').onclick = toggleBrowserFullscreen;
  $('#fit169Btn').onclick = () => { currentAspectMode = '16:9'; fitFrame(); };
  $('#fit43Btn').onclick = () => { currentAspectMode = '4:3'; fitFrame(); };
  $('#fitAutoBtn').onclick = () => { currentAspectMode = 'auto'; fitFrame(); };
  window.onresize = () => { if(!$('#playerOverlay').classList.contains('hidden')) fitFrame(); };
}

function openMaker(gameId){
  const panel = $('#makerPanel');
  if(!panel) return;
  makerSelectedGameId = gameId || makerSelectedGameId;
  panel.classList.remove('hidden');
  panel.scrollIntoView({behavior:'smooth', block:'start'});
  const sel = $('#makerGameSelect');
  if(sel && makerSelectedGameId) sel.value = makerSelectedGameId;
  const title = $('#makerTitleInput');
  if(makerSelectedGameId && title){
    title.value = `${gameCode(makerSelectedGameId)}｜${gameName(makerSelectedGameId)}｜课堂题库`;
  }
}

function generateGamePackage(gameId){
  const id = gameId || $('#makerGameSelect')?.value || makerSelectedGameId;
  if(!id){
    alert('請先选择一个游戏版型。');
    openMaker();
    return;
  }
  const game = findGame(id);
  if(!game) return;
  const title = $('#makerTitleInput')?.value?.trim() || `${gameCode(id)}_${gameName(id)}`;
  const subject = $('#makerSubject')?.value?.trim() || '';
  const questions = $('#makerQuestions')?.value?.trim() || '';
  const meta = [
    `游戏代碼：${gameCode(id)}`,
    `游戏版型：${gameName(id)}`,
    `课堂标题：${title}`,
    `科目 / 年級：${subject}`,
    '',
    '题库 / 素材說明：',
    questions || '尚未填入题库。'
  ].join('\\n');

  downloadTextFile(`${gameCode(id)}_${title.replace(/[\\/:*?"<>|]/g,'_')}_设置资料.txt`, meta);

  // Static demo limitation:
  // The template ZIP is already prepared in downloads/. In the production version,
  // this button should call the backend to merge teacher content into game-config.json
  // and return a customized ZIP.
  setTimeout(() => {
    location.href = game.download;
  }, 350);
}

function downloadTextFile(filename, content){
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 800);
}

function downloadMakerTxt(){
  const title = $('#makerTitleInput')?.value?.trim() || t('gameMaker');
  const subject = $('#makerSubject')?.value?.trim() || '';
  const questions = $('#makerQuestions')?.value?.trim() || '';
  const content = [
    `${t('makerTitle')}：${title}`,
    `${t('subjectPlaceholder')}：${subject}`,
    '',
    `${t('downloadQuestionTxt')}：`,
    questions || ''
  ].join('\n');
  downloadTextFile(`${title.replace(/[\\/:*?"<>|]/g,'_')}_questions.txt`, content);
}

function setAllChecks(userId, checked){ $$(`.admin-game-check[data-user="${userId}"]`).forEach(el => el.checked = checked); }
function saveUserConfig(userId){
  const user = state.users.find(u => u.id===userId);
  if(!user) return;
  user.package = $(`.admin-package-select[data-user="${userId}"]`).value;
  user.ownedGames = $$(`.admin-game-check[data-user="${userId}"]`).filter(el=>el.checked).map(el=>el.dataset.game);
  saveState();
  render();
}
function buySingle(gameId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  if(!user.ownedGames.includes(gameId)) user.ownedGames.push(gameId);
  if(user.package==='free') user.package = 'single';
  saveState(); render();
  setTimeout(()=>openGame(gameId), 100);
}
function buyPackage(packageId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  if(packageId==='all_access'){
    user.package = 'all_access';
    user.ownedGames = GAME_DATA.filter(g=>!g.free).map(g=>g.id);
  } else if(packageId==='pick5'){
    user.package = 'pick5';
    const locked = GAME_DATA.filter(g=>!g.free).map(g=>g.id).filter(id=>!user.ownedGames.includes(id));
    user.ownedGames = [...new Set([...user.ownedGames, ...locked.slice(0,5)])];
  } else if(packageId==='single') {
    alert(t('chooseSingle'));
    return;
  }
  saveState(); render();
}
function buyPick5Fast(gameId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  user.package = 'pick5';
  const set = new Set(user.ownedGames || []);
  set.add(gameId);
  for(const g of GAME_DATA.filter(g=>!g.free)){
    if(set.size >= 5) break;
    set.add(g.id);
  }
  user.ownedGames = [...set].slice(0,5);
  saveState(); render();
}

function openGame(gameId){
  const user = getUser();
  if(!userHasAccess(user, gameId) && !findGame(gameId)?.free) return;
  const game = findGame(gameId);
  currentPlayerGame = game;
  if(game.id === 'island_conquest') currentAspectMode = '16:9';
  $('#playerGameTitle').textContent = `${t('playing')}：${gameName(game.id)}`;
  $('#playerOverlay').classList.remove('hidden');
  $('#playerOverlay').classList.add('whiteboard-mode');
  document.body.classList.add('overlay-open');
  const iframe = $('#gameFrame');
  const sep = game.path.includes('?') ? '&' : '?';
  iframe.src = `${game.path}${sep}lang=${state.lang || 'zh'}`;
  iframe.onload = () => { stabilizeFrameFit(); };
}
function closePlayer(){
  const overlay = $('#playerOverlay');
  if(overlay){ overlay.classList.add('hidden'); overlay.classList.remove('whiteboard-mode'); }
  document.body.classList.remove('overlay-open');
  const iframe = $('#gameFrame');
  if(iframe) iframe.src = 'about:blank';
}
function toggleBrowserFullscreen(){
  const overlay = $('#playerOverlay');
  if(!document.fullscreenElement){ overlay.requestFullscreen?.(); }
  else { document.exitFullscreen?.(); }
}
function injectIframeSafeStyles(iframe){
  try{
    const doc = iframe.contentDocument;
    if(!doc) return;
    let style = doc.getElementById('safe-stage-style');
    if(!style){
      style = doc.createElement('style');
      style.id = 'safe-stage-style';
      style.textContent = `html,body{overflow:hidden !important; overscroll-behavior:none !important;} body::-webkit-scrollbar, html::-webkit-scrollbar{display:none !important;} *{scrollbar-width:none !important;}`;
      doc.head.appendChild(style);
    }
  }catch(e){ console.warn('Cannot inject styles', e); }
}
function measureDocumentBounds(doc){
  const de = doc.documentElement;
  const body = doc.body;
  const win = doc.defaultView;
  let maxRight = 0;
  let maxBottom = 0;
  try {
    const nodes = [body, ...body.querySelectorAll('*')];
    for(const el of nodes){
      if(!el || !el.getBoundingClientRect) continue;
      const r = el.getBoundingClientRect();
      maxRight = Math.max(maxRight, r.right + (win.scrollX || 0));
      maxBottom = Math.max(maxBottom, r.bottom + (win.scrollY || 0));
    }
  } catch(e) {}
  let w = Math.max(de?.scrollWidth || 0, body?.scrollWidth || 0, de?.offsetWidth || 0, body?.offsetWidth || 0, de?.clientWidth || 0, body?.clientWidth || 0, Math.ceil(maxRight), win?.innerWidth || 0);
  let h = Math.max(de?.scrollHeight || 0, body?.scrollHeight || 0, de?.offsetHeight || 0, body?.offsetHeight || 0, de?.clientHeight || 0, body?.clientHeight || 0, Math.ceil(maxBottom), win?.innerHeight || 0);
  w += 24; h += 48;
  w = Math.max(1024, Math.min(w, 2600));
  h = Math.max(700, Math.min(h, 2200));
  return { w, h };
}
function getNaturalFrameSize(){
  const iframe = $('#gameFrame');

  // Some games use a full-screen setup overlay and absolute-positioned map layers.
  // Measuring every DOM node can make the safe player think the game is much larger/smaller
  // than the real teaching canvas, causing the setup panel to shrink in the middle.
  // Island Conquest is designed as a whiteboard 16:9 canvas, so keep a fixed canvas size.
  if(currentPlayerGame && currentPlayerGame.id === 'island_conquest'){
    return { w: 1520, h: 856 };
  }

  let w = 1600, h = 900;
  try{
    const doc = iframe.contentDocument;
    if(doc){ const measured = measureDocumentBounds(doc); w = measured.w; h = measured.h; }
  }catch(e){}
  return {w,h};
}
function stabilizeFrameFit(){
  const checks = [0, 120, 350, 700, 1200, 1800];
  checks.forEach(delay => setTimeout(() => {
    const iframe = $('#gameFrame');
    if(!iframe || !iframe.contentDocument) return;
    injectIframeSafeStyles(iframe);
    fitFrame();
  }, delay));
}
function fitFrame(){
  const overlay = $('#playerOverlay');
  if(overlay.classList.contains('hidden')) return;
  const stage = $('#playerStage');
  const shell = $('#frameShell');
  const iframe = $('#gameFrame');
  if(!stage || !shell || !iframe) return;
  const pad = 36;
  const availableW = Math.max(320, stage.clientWidth - pad*2);
  const availableH = Math.max(180, stage.clientHeight - pad*2);

  // Special handling for Island Conquest:
  // use a responsive iframe sized directly to the safe 16:9 viewport,
  // instead of scaling a huge internal canvas. This prevents the teacher
  // settings dialog from collapsing into a tiny block in the center.
  if(currentPlayerGame && currentPlayerGame.id === 'island_conquest'){
    const targetRatio = currentAspectMode === '4:3' ? 4/3 : 16/9;
    let shellW = availableW;
    let shellH = shellW / targetRatio;
    if(shellH > availableH){
      shellH = availableH;
      shellW = shellH * targetRatio;
    }
    shellW = Math.floor(shellW);
    shellH = Math.floor(shellH);
    shell.style.width = shellW + 'px';
    shell.style.height = shellH + 'px';
    iframe.style.width = shellW + 'px';
    iframe.style.height = shellH + 'px';
    iframe.style.transformOrigin = 'top left';
    iframe.style.transform = 'none';
    return;
  }

  let {w:baseW, h:baseH} = getNaturalFrameSize();
  if(currentAspectMode === '16:9'){
    const targetRatio = 16/9;
    if(baseW/baseH > targetRatio) baseH = baseW / targetRatio;
    else baseW = baseH * targetRatio;
  } else if(currentAspectMode === '4:3'){
    const targetRatio = 4/3;
    if(baseW/baseH > targetRatio) baseH = baseW / targetRatio;
    else baseW = baseH * targetRatio;
  } else {
    const ratio = baseW / baseH;
    if(ratio > 2.0){ baseH = baseW / (16/9); }
    if(ratio < 1.1){ baseW = baseH * (4/3); }
  }
  const scale = Math.min(availableW/baseW, availableH/baseH);
  const finalScale = Math.max(0.1, scale);
  const shellW = Math.floor(baseW * finalScale);
  const shellH = Math.floor(baseH * finalScale);
  shell.style.width = shellW + 'px';
  shell.style.height = shellH + 'px';
  iframe.style.width = baseW + 'px';
  iframe.style.height = baseH + 'px';
  iframe.style.transformOrigin = 'top left';
  iframe.style.transform = `scale(${finalScale})`;
}


function updatePlayerLabels(){
  const sub = $('#playerSubtitle');
  if(sub) sub.textContent = t('playerSubtitle');
  const b169 = $('#fit169Btn'); if(b169) b169.textContent = t('safe169');
  const b43 = $('#fit43Btn'); if(b43) b43.textContent = t('safe43');
  const ba = $('#fitAutoBtn'); if(ba) ba.textContent = t('auto');
  const bf = $('#fullscreenBtn'); if(bf) bf.textContent = t('browserFullscreen');
  const bc = $('#closePlayerBtn'); if(bc) bc.textContent = t('close');
}

document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && !$('#playerOverlay').classList.contains('hidden')) closePlayer();
});
document.addEventListener('fullscreenchange', () => {
  if(!$('#playerOverlay').classList.contains('hidden')) stabilizeFrameFit();
});

I18N.zh.gameNames.picture_word_guess='看图猜生字';
I18N.zh.gameDesc.picture_word_guess='老師上传图片与答案。图片切成 5×5，每 3 秒自動揭开一片，由 2–4 组学生抢答，老師判斷正确后加分。';
I18N.en.gameNames.picture_word_guess='Picture Word Guess';
I18N.en.gameDesc.picture_word_guess='Teachers upload an image and answer. The image is split into 5×5 tiles, reveals one tile every 3 seconds, and 2–4 teams buzz in to guess.';
I18N.ms.gameNames.picture_word_guess='Teka Perkataan Melalui Gambar';
I18N.ms.gameDesc.picture_word_guess='Guru memuat naik gambar dan jawapan. Gambar dipotong 5×5, satu bahagian dibuka setiap 3 saat, dan 2–4 kumpulan menekan buzzer untuk meneka.';


I18N.zh.gameNames.spot_diff_v2='大家来找碴(自带后台)';
I18N.zh.gameDesc.spot_diff_v2='高阶找不同游戏。支持左图、右图与红色答案图，后台可新增 / 编辑 / 删除关卡，适合制作多关卡观察力挑战。';
I18N.en.gameNames.spot_diff_v2='Spot the Difference (Built-in Admin)';
I18N.en.gameDesc.spot_diff_v2='Advanced spot-the-difference game with left/right images, red answer mask, rankings, hints, and an admin level editor.';
I18N.ms.gameNames.spot_diff_v2='Cari Perbezaan (Admin Terbina)';
I18N.ms.gameDesc.spot_diff_v2='Permainan cari perbezaan tahap tinggi dengan imej kiri/kanan, mask jawapan merah, ranking, petunjuk dan editor tahap admin.';

render();
