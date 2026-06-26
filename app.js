// TEMPLATE_EXPLAINER_PAGE_20260626_6_PURCHASE_APPROVAL_FLOW

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

const SAMPLE_BANKS = {
  "memory_match": "# S001 翻翻乐｜题库范例\n# 用途：记忆配对、词语配对、术语配对、图文配对。\n# 建议格式：配对A | 配对B\n苹果 | Apple\n香蕉 | Banana\n红色 | Red\n蓝色 | Blue\n人工智能 | Artificial Intelligence\n网络安全 | Cybersecurity\n数据 | Data\n算法 | Algorithm\n",
  "true_false": "# S002 真假判断快闪｜题库范例\n# 用途：快速判断概念是否正确。\n# 建议格式：题目 | true/false\nAI 可以帮助老师准备课堂活动。 | true\n所有网络资料都一定正确。 | false\n密码越简单越安全。 | false\n遇到可疑链接，应先检查来源。 | true\n使用 AI 生成内容时，也要检查事实。 | true\n",
  "sentence_order": "# S003 句子排序挑战｜题库范例\n# 用途：句子排序、步骤排序、流程排序。\n# 建议格式：正确顺序用 | 分隔\n我 | 喜欢 | 学习 | 人工智能\n先观察 | 再思考 | 最后回答\n打开电脑 | 输入密码 | 开始学习\n收集资料 | 分析资料 | 做出结论\n",
  "treasure_box": "# S004 宝箱开开看｜题库范例\n# 用途：抽题、复习、奖励式问答。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\nAI 的英文全名是什么？ | Artificial Intelligence | Artificial Intelligence,Auto Internet,Advanced Image,Active Input\n哪一种密码较安全？ | 长且混合不同字符 | 123456,生日日期,长且混合不同字符,名字拼音\n看到可疑链接时应该怎么做？ | 先检查来源 | 马上点击,先检查来源,输入密码,转发朋友\n",
  "lucky_wheel": "# S005 幸运转盘问答｜题库范例\n# 用途：转盘抽题、随机复习、抢答。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\n太阳系中最大的行星是？ | 木星 | 地球,木星,火星,土星\nAI 从什么学习？ | 训练资料 | 魔法,训练资料,猜测,什么都不需要\n个人资料可以随便公开吗？ | 不可以 | 可以,不可以,看心情,只有周末可以\n",
  "text_match": "# S006 文字对应｜题库范例\n# 用途：词语配对、拼字、概念对应。\n# 建议格式：词语 | 对应解释\n资料 | 用来分析和学习的信息\n算法 | 解决问题的步骤\n密码 | 保护账号的秘密文字\n网络安全 | 保护设备与个人资料的方法\n人工智能 | 让机器模拟人类思考的技术\n",
  "whack_mole": "# S007 打地鼠问答｜题库范例\n# 用途：快速点击正确答案，训练反应与复习。\n# 建议格式：题目 | 正确答案 | 错误选项1,错误选项2,错误选项3\n哪一个是水果？ | 苹果 | 书本,椅子,铅笔\n哪一个是安全密码？ | BlueSky!2026 | 123456,生日,名字\nAI 需要什么来学习？ | 数据 | 魔法,睡觉,糖果\n",
  "classification_conveyor": "# P001 分类输送带｜题库范例\n# 用途：把项目归类到正确分类。\n# 建议格式：项目 | 正确分类\n苹果 | 水果\n香蕉 | 水果\n老虎 | 动物\n狮子 | 动物\n键盘 | 电脑设备\n鼠标 | 电脑设备\n密码 | 网络安全\n可疑链接 | 网络安全\n",
  "image_puzzle_speed_race": "# P002 图片拼图竞速赛｜题库范例\n# 用途：上传图片作为拼图，学生拼图后回答相关问题。\n# 建议格式：图片文件名 | 题目 | 正确答案 | 选项A,选项B,选项C,选项D\nsolar-system.png | 太阳系中心是什么？ | 太阳 | 地球,太阳,月亮,火星\ncomputer-parts.png | 图片中负责输入文字的是？ | 键盘 | 屏幕,键盘,喇叭,打印机\nplant-growth.png | 植物生长需要什么？ | 阳光和水 | 阳光和水,石头,塑料,金属\n",
  "bomb_quiz": "# P003 炸弹倒数抢答｜题库范例\n# 用途：限时抢答，适合复习与竞赛。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\nHTML 主要用来做什么？ | 网页结构 | 网页结构,数据储存,画图,播放音乐\n哪个是安全上网行为？ | 不随便下载不明文件 | 随便点击广告,不随便下载不明文件,公开密码,转发谣言\nAI 回答一定正确吗？ | 不一定，需要检查 | 一定正确,不一定，需要检查,永远错误,不能使用\n",
  "knowledge_race": "# P004 知识赛马｜题库范例\n# 用途：分组竞速答题，答对前进。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\n地球绕太阳一周大约多久？ | 1年 | 1天,1个月,1年,10年\n哪一个是输入设备？ | 键盘 | 键盘,屏幕,投影机,喇叭\n保护账号最重要的是？ | 使用强密码 | 使用弱密码,公开密码,使用强密码,告诉陌生人\n",
  "monster_defense": "# P005 怪兽防守战｜题库范例\n# 用途：答题防守，答对击退怪兽。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\n网络安全中，OTP 是什么？ | 一次性密码 | 一次性密码,普通密码,公开号码,游戏分数\n可疑电邮要求输入密码，应怎么做？ | 不输入并报告老师或家长 | 马上输入,不输入并报告老师或家长,转发给朋友,截图发社交媒体\nAI 图片可能出错吗？ | 可能 | 不可能,可能,一定没有问题,只在晚上出错\n",
  "find_difference": "# P006 大家来找不同｜题库范例\n# 用途：上传两张图片，让学生观察差异。\n# 建议格式：原图文件名 | 修改图文件名 | 差异说明\nclassroom-original.png | classroom-edited.png | 黑板上的字不同；桌上的书本颜色不同；窗边多了一盆植物\npark-original.png | park-edited.png | 树上少了一只鸟；长椅颜色不同；地上多了足球\n# 可在后台上传原图、修改图，并标示 3-5 个答案点。\n",
  "keyword_beachhead": "# P007 关键词抢滩战｜题库范例\n# 用途：学生根据提示抢关键词，适合词汇、概念、重点复习。\n# 建议格式：提示 | 正确关键词 | 干扰词1,干扰词2,干扰词3\n保护账号的秘密文字 | 密码 | 用户名,头像,背景图\n让机器学习资料并做判断的技术 | 人工智能 | 计算器,投影机,白板笔\n网页的基本结构语言 | HTML | CSS,Excel,PowerPoint\n",
  "timeline_sort_challenge": "# P008 时间线排序挑战｜题库范例\n# 用途：历史事件、科学流程、项目步骤排序。\n# 建议格式：顺序编号 | 事件 / 步骤\n1 | 收集资料\n2 | 整理资料\n3 | 分析资料\n4 | 呈现结论\n\n1 | 打开学习平台\n2 | 选择游戏模板\n3 | 输入题库\n4 | 开始白板上课\n",
  "image_label_match": "# P009 图片标签配对赛｜题库范例\n# 用途：图片与标签配对，适合词汇、科学、地理、资讯科技。\n# 建议格式：图片文件名 | 正确标签\napple.png | 苹果\nbanana.png | 香蕉\nkeyboard.png | 键盘\nmonitor.png | 显示器\nforest.png | 森林\nmine.png | 金矿\n",
  "team_relay_quiz": "# P010 团队答题接力赛｜题库范例\n# 用途：分组接力答题，答对前进，适合全班复习。\n# 建议格式：题目 | 正确答案 | 错误选项A,错误选项B,错误选项C\nAI 的英文全名是什么？ | Artificial Intelligence | Auto Internet,Advanced Image,Active Input\n哪一种密码较安全？ | 长且混合不同字符 | 123456,生日日期,名字拼音\n看到可疑链接时应该？ | 先检查来源 | 马上点开,输入密码,转发给朋友\n",
  "platform_quiz": "# H001 平台闯关问答｜题库范例\n# 用途：角色闯关，每关答题后继续前进。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\n哪一个是输出设备？ | 显示器 | 键盘,鼠标,显示器,扫描器\nAI 使用时要注意什么？ | 诚实与负责任 | 随便抄袭,不检查资料,诚实与负责任,公开别人资料\n数据可以帮助 AI 做什么？ | 学习和判断 | 睡觉,吃饭,学习和判断,变魔术\n",
  "dungeon_dragon_raid": "# H003 地牢巨龙讨伐战｜题库范例\n# 用途：两队答题打怪、补血、找钥匙，最后讨伐巨龙。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D | 奖励类型\n哪一个行为能保护个人资料？ | 不公开密码 | 公开密码,不公开密码,随便上传证件,告诉陌生人 | key\nAI 回答错误时，我们应该？ | 查证资料 | 直接相信,查证资料,马上转发,删除电脑 | heal\n网络谣言应该如何处理？ | 查证后再分享 | 马上转发,查证后再分享,改成更夸张,发给所有人 | attack\n",
  "picture_word_guess": "# H004 看图猜生字｜题库范例\n# 用途：图片逐步显示，学生猜词或生字。\n# 建议格式：图片文件名 | 答案 | 提示\napple.png | 苹果 | 一种红色或绿色的水果\nrobot.png | 机器人 | 可以执行任务的机器\nforest.png | 森林 | 很多树木聚集的地方\nkeyboard.png | 键盘 | 用来输入文字的设备\n",
  "two_team_puzzle_duel": "# H006 双组拼图对战｜题库范例\n# 用途：两组同时拼图，完成后答题或说明。\n# 建议格式：图片文件名 | 主题 | 答案说明\nsolar-system.png | 太阳系 | 认识行星与太阳的位置\nplant-cycle.png | 植物生长 | 种子、发芽、成长、开花\nnetwork-safety.png | 网络安全 | 密码、链接、个人资料保护\n",
  "island_conquest": "# H007 孤岛抢夺赛｜题库范例\n# 用途：两队抢占地图格子，答对占领土地。\n# 建议格式：题目 | 正确答案 | 选项A,选项B,选项C,选项D\n保护个人资料时，哪一项最重要？ | 不随便公开 | 公开地址,公开密码,不随便公开,上传证件\nAI 生成图片可以用来伤害别人吗？ | 不可以 | 可以,不可以,只要好玩就可以,没人发现就可以\n团队合作时应该？ | 轮流发言并尊重队友 | 抢着说话,轮流发言并尊重队友,不听别人,故意捣乱\n",
  "kingdom_resource_battle": "# H008 王国资源争夺战｜题库范例\n# 用途：开发农田、森林、金矿，答题获得资源并触发事件卡。\n# 题库格式：题目 | 选项A | 选项B | 选项C | 选项D | 正确编号\nAI 从什么学习？ | 训练资料 | 魔法 | 只靠猜测 | 什么都不需要 | 1\n看到可疑链接时应该？ | 马上点开 | 先检查来源 | 输入密码 | 转发给朋友 | 2\n哪一种密码较安全？ | 123456 | 生日日期 | BlueSky!2026 | 名字拼音 | 3\n\n# 事件卡格式：区域 | 类型 | 标题 | 描述 | 分数变动\nfarm | good | 农作物大丰收 | 天气理想，粮食大增，额外 +2 分。 | 2\nforest | bad | 森林大火 | 大火烧毁林地，王国损失资源，扣 2 分。 | -2\nmine | good | 发现金矿新矿脉 | 金矿产量提升，额外 +3 分。 | 3\n",
  "spot_diff_v2": "# H009 大家来找碴(自带后台)｜题库范例\n# 用途：老师上传原图、修改图、答案图，让学生找出不同处。\n# 建议格式：关卡名称 | 原图 | 修改图 | 答案图 | 差异说明\n教室找碴 | classroom_original.png | classroom_changed.png | classroom_answer.png | 黑板文字不同；桌上多了书；窗边少了植物\n公园找碴 | park_original.png | park_changed.png | park_answer.png | 长椅颜色不同；树上多了鸟；地上少了球\n# 自带后台可新增 / 编辑 / 删除关卡，并可上传图片。\n"
};


const PACKAGES = [
  {id:'single_beginner', price:20, type:'single', level:'beginner'},
  {id:'single_intermediate', price:30, type:'single', level:'intermediate'},
  {id:'single_advanced', price:50, type:'single', level:'advanced'},
  {id:'pick4_plus_advanced1', price:100, type:'combo'},
  {id:'all_access', price:300, originalPrice:790, type:'all'}
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
const ORG_TYPES = ['小學','中學','補習中心','幼兒園','其他'];


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

const TEMPLATE_COPY = {
  "zh": {
    "kicker": "Classroom Game Template Platform",
    "title": "课堂游戏模板网站",
    "subtitle": "让老师套用现成模板，快速制作互动白板课堂游戏。",
    "heroText": "不用从零开发。选择模板、放入题库或图片素材，就能把复习、抢答、分类、拼图、地图策略等活动变成可玩的课堂游戏。",
    "primary": "查看 24 款模板",
    "secondary": "老师登录 / 购买",
    "stats": [
      [
        "24",
        "课堂游戏模板"
      ],
      [
        "3",
        "初阶 / 进阶 / 高阶"
      ],
      [
        "白板",
        "大按钮互动设计"
      ]
    ],
    "stepsTitle": "老师使用流程",
    "steps": [
      [
        "选择模板",
        "按照科目与课堂目标，选择最合适的游戏模板。"
      ],
      [
        "设定题库",
        "登录后在老师后台输入题目、答案、图片或事件卡。"
      ],
      [
        "白板上课",
        "一键打开白板模式，让学生分组互动、抢答与闯关。"
      ]
    ],
    "catalogTitle": "24 款课堂游戏模板说明",
    "catalogSub": "按初阶、进阶、高阶分类。点击每一款模板可展开查看适合科目、玩法和准备方式。",
    "subject": "适合科目",
    "play": "核心玩法",
    "setup": "老师准备",
    "best": "适合场景",
    "ctaTitle": "准备开始制作课堂游戏？",
    "ctaText": "老师登录后可进入模板库与老师后台；管理员可管理老师账号、批准申请、停用账号与设置授权。",
    "plansTitle": "登录 / 购买入口",
    "plans": [
      [
        "初阶单一模板",
        "RM20 / 款",
        "适合先测试基础互动游戏。"
      ],
      [
        "进阶单一模板",
        "RM30 / 款",
        "适合需要图片、排序、配对或小组竞赛的课堂。"
      ],
      [
        "高阶单一模板",
        "RM50 / 款",
        "适合地图闯关、策略对抗与自带后台的高互动游戏。"
      ],
      [
        "组合特惠模板",
        "特惠 RM100",
        "初阶或进阶任选 4 个模板，再加 1 个高阶模板。"
      ],
      [
        "全部模板",
        "原价 RM790｜特惠 RM300",
        "一次取得全部模板，并包括未来新开发的新游戏。"
      ]
    ],
    "loginTitle": "老师 / 管理员登录",
    "email": "电子邮件",
    "password": "密码",
    "login": "登录",
    "registerTitle": "老师账号申请",
    "promoNote": "推广期间：申请账号可获得 2 个初阶体验模板，无需购买，批准后即可测试。",
    "name": "姓名",
    "phone": "电话",
    "apply": "送出申请",
    "invalidEmail": "请输入有效电子邮件。",
    "registerSuccess": "申请已送出，请等待管理员批准。推广期间，账号批准后可免费体验 2 个初阶游戏模板。"
  },
  "en": {
    "kicker": "Classroom Game Template Platform",
    "title": "Classroom Game Template Platform",
    "subtitle": "Ready-made templates for interactive whiteboard classroom games.",
    "heroText": "No need to build from scratch. Choose a template, add questions or images, and turn review, quizzes, sorting, puzzles and strategy activities into playable classroom games.",
    "primary": "View 24 Templates",
    "secondary": "Teacher Login / Purchase",
    "stats": [
      [
        "24",
        "Game templates"
      ],
      [
        "3",
        "Beginner / Intermediate / Advanced"
      ],
      [
        "Whiteboard",
        "Large touch-friendly controls"
      ]
    ],
    "stepsTitle": "How Teachers Use It",
    "steps": [
      [
        "Choose a template",
        "Select the best game format for your subject and lesson goal."
      ],
      [
        "Set content",
        "After login, enter questions, answers, images or event cards in the teacher backend."
      ],
      [
        "Teach on whiteboard",
        "Launch whiteboard mode for teams to play, answer and compete."
      ]
    ],
    "catalogTitle": "24 Classroom Game Template Guide",
    "catalogSub": "Grouped into Beginner, Intermediate and Advanced. Expand each template to view subjects, gameplay and preparation.",
    "subject": "Suitable subjects",
    "play": "Gameplay",
    "setup": "Teacher setup",
    "best": "Best use",
    "ctaTitle": "Ready to create your classroom game?",
    "ctaText": "Teachers can log in to use templates and backend settings. Admins can manage teacher accounts, approve applications, disable accounts and set template access.",
    "plansTitle": "Login / Purchase Area",
    "plans": [
      [
        "Beginner single template",
        "RM20 / template",
        "Good for testing a basic classroom game first."
      ],
      [
        "Intermediate single template",
        "RM30 / template",
        "Good for image, sorting, matching or team-competition lessons."
      ],
      [
        "Advanced single template",
        "RM50 / template",
        "Good for map stages, strategy battles and high-interaction templates with built-in settings."
      ],
      [
        "Combo promo template pack",
        "Promo RM100",
        "Choose 4 templates from Beginner or Intermediate, plus 1 Advanced template."
      ],
      [
        "All templates",
        "Total RM790｜Promo RM300",
        "Includes all current templates and future newly developed games."
      ]
    ],
    "loginTitle": "Teacher / Admin Login",
    "email": "Email",
    "password": "Password",
    "login": "Login",
    "registerTitle": "Teacher Account Request",
    "promoNote": "Promotion: each approved teacher account receives 2 free Beginner trial templates. No purchase is required for these samples.",
    "name": "Name",
    "phone": "Phone",
    "apply": "Submit Request",
    "invalidEmail": "Please enter a valid email address.",
    "registerSuccess": "Your request has been submitted. Please wait for admin approval. During the promotion period, you can test 2 free Beginner templates after approval."
  },
  "ms": {
    "kicker": "Platform Templat Permainan Kelas",
    "title": "Platform Templat Permainan Kelas",
    "subtitle": "Templat sedia ada untuk permainan kelas papan putih interaktif.",
    "heroText": "Tidak perlu bina dari kosong. Pilih templat, masukkan soalan atau gambar, dan jadikan ulang kaji, kuiz, klasifikasi, puzzle dan strategi sebagai permainan kelas.",
    "primary": "Lihat 24 Templat",
    "secondary": "Log Masuk / Pembelian",
    "stats": [
      [
        "24",
        "Templat permainan"
      ],
      [
        "3",
        "Asas / Pertengahan / Lanjutan"
      ],
      [
        "Papan putih",
        "Butang besar mesra sentuhan"
      ]
    ],
    "stepsTitle": "Cara Guru Menggunakannya",
    "steps": [
      [
        "Pilih templat",
        "Pilih format permainan yang sesuai dengan subjek dan objektif kelas."
      ],
      [
        "Tetapkan kandungan",
        "Selepas log masuk, masukkan soalan, jawapan, imej atau kad peristiwa."
      ],
      [
        "Main di papan putih",
        "Lancarkan mod papan putih untuk aktiviti kumpulan."
      ]
    ],
    "catalogTitle": "Panduan 24 Templat Permainan Kelas",
    "catalogSub": "Dibahagikan kepada Asas, Pertengahan dan Lanjutan. Buka setiap templat untuk melihat subjek, cara bermain dan persediaan.",
    "subject": "Subjek sesuai",
    "play": "Cara bermain",
    "setup": "Persediaan guru",
    "best": "Kegunaan sesuai",
    "ctaTitle": "Sedia untuk membina permainan kelas?",
    "ctaText": "Guru boleh log masuk untuk menggunakan templat dan tetapan backend. Admin boleh mengurus akaun guru, meluluskan permohonan, menyahaktifkan akaun dan menetapkan akses templat.",
    "plansTitle": "Log Masuk / Pembelian",
    "plans": [
      [
        "Satu templat asas",
        "RM20 / templat",
        "Sesuai untuk mencuba permainan interaktif asas dahulu."
      ],
      [
        "Satu templat pertengahan",
        "RM30 / templat",
        "Sesuai untuk aktiviti bergambar, susunan, padanan atau pertandingan kumpulan."
      ],
      [
        "Satu templat lanjutan",
        "RM50 / templat",
        "Sesuai untuk peta misi, strategi kumpulan dan templat interaktif dengan tetapan terbina."
      ],
      [
        "Pakej promosi kombo",
        "Promosi RM100",
        "Pilih 4 templat daripada Asas atau Pertengahan, dan tambah 1 templat Lanjutan."
      ],
      [
        "Semua templat",
        "Jumlah RM790｜Promosi RM300",
        "Termasuk semua templat semasa dan permainan baharu yang dibangunkan pada masa depan."
      ]
    ],
    "loginTitle": "Log Masuk Guru / Admin",
    "email": "Emel",
    "password": "Kata Laluan",
    "login": "Log Masuk",
    "registerTitle": "Permohonan Akaun Guru",
    "promoNote": "Promosi: setiap akaun guru yang diluluskan menerima 2 templat Asas percubaan secara percuma. Templat ini tidak perlu dibeli.",
    "name": "Nama",
    "phone": "Telefon",
    "apply": "Hantar Permohonan",
    "invalidEmail": "Sila masukkan alamat emel yang sah.",
    "registerSuccess": "Permohonan telah dihantar. Sila tunggu kelulusan admin. Semasa promosi, anda boleh mencuba 2 templat Asas percuma selepas diluluskan."
  }
};

const TEMPLATE_DETAILS = {
  "zh": {
    "memory_match": {
      "subjects": "语文词汇、英文 / Melayu 单词、数学口诀、科学概念",
      "play": "学生翻开两张卡，找出正确配对，例如词语与解释、图片与名称、问题与答案。",
      "setup": "老师输入配对内容即可使用，适合 5–10 分钟暖身。",
      "best": "适合低年级、复习课、词汇记忆与概念配对。"
    },
    "true_false": {
      "subjects": "任何科目快速判断题、AI素养、安全教育、科学常识",
      "play": "屏幕快速出现判断题，学生选择真或假，系统即时反馈。",
      "setup": "老师准备是非题，适合快速检查全班理解。",
      "best": "适合课堂导入、结课前检测、抢答活动。"
    },
    "sentence_order": {
      "subjects": "华文、英文、Melayu、历史事件、科学流程、作文结构",
      "play": "学生拖动句子或步骤，把内容排成正确顺序。",
      "setup": "老师输入句子、步骤或时间线，学生按逻辑排序。",
      "best": "适合语文句序、流程学习、历史时间线。"
    },
    "treasure_box": {
      "subjects": "语文、数学、科学、常识、道德教育",
      "play": "学生选择宝箱抽题，答对获得奖励或触发惊喜。",
      "setup": "老师输入题库，系统随机抽题，游戏节奏轻松。",
      "best": "适合复习课、奖励机制、低压力互动。"
    },
    "lucky_wheel": {
      "subjects": "全科复习、班级抢答、主题活动",
      "play": "转盘决定题目或挑战，学生分组回答。",
      "setup": "老师输入题目或任务，转盘随机抽取。",
      "best": "适合制造期待感、课堂破冰、复习活动。"
    },
    "text_match": {
      "subjects": "词语配对、拼字、定义配对、公式与答案",
      "play": "学生把文字、答案或标签拖到正确位置，完成对应。",
      "setup": "老师输入两组对应资料，可用于词汇或概念配对。",
      "best": "适合语文词汇、英语单词、数学公式。"
    },
    "whack_mole": {
      "subjects": "快速问答、乘法表、词汇认读、科学概念",
      "play": "地鼠出现题目或答案，学生快速点击正确目标。",
      "setup": "老师准备题库，系统以快节奏呈现。",
      "best": "适合互动白板、高参与度练习、快速复习。"
    },
    "classification_conveyor": {
      "subjects": "科学分类、语文词性、数学图形、图片分类",
      "play": "学生把输送带上的项目分到正确类别。",
      "setup": "老师设置分类名称，并加入文字或图片项目。",
      "best": "适合概念分类、图片识别、知识归纳。"
    },
    "image_puzzle_speed_race": {
      "subjects": "美术、科学图片、地理地图、课文插图、活动照片",
      "play": "老师上传图片，各组轮流拼图，系统记录完成时间。",
      "setup": "上传一张图片，设定拼图难度与组别。",
      "best": "适合看图复习、图像观察、分组竞赛。"
    },
    "bomb_quiz": {
      "subjects": "全科限时复习、考试前抢答、概念检测",
      "play": "倒数炸弹增加紧张感，学生必须在时间内回答。",
      "setup": "输入题库与倒计时，适合短时间高强度复习。",
      "best": "适合高年级、考试复习、竞赛型课堂。"
    },
    "knowledge_race": {
      "subjects": "常识、科学、历史、语言问答、综合测验",
      "play": "答对即可推动赛马或队伍前进，先到终点者获胜。",
      "setup": "老师输入题库与队伍名称，系统自动推进。",
      "best": "适合全班分组对抗与知识竞赛。"
    },
    "monster_defense": {
      "subjects": "数学运算、词汇问答、科学概念、综合复习",
      "play": "怪兽进攻时学生答题防守，答对可击退怪兽。",
      "setup": "输入题库与难度，学生分组合作守关。",
      "best": "适合团队合作、即时反馈、课堂高潮。"
    },
    "find_difference": {
      "subjects": "观察力训练、美术、科学图像、语文细节理解",
      "play": "学生在两张图片中找出不同点。",
      "setup": "老师上传图片或使用示范图，设置差异数量。",
      "best": "适合观察训练、低年级视觉辨识。"
    },
    "keyword_beachhead": {
      "subjects": "关键词复习、阅读理解、历史重点、科学术语",
      "play": "学生抢占关键词据点，答对后占领区域。",
      "setup": "老师输入关键词与提示，分组抢答。",
      "best": "适合主题复习、概念整理、分组抢答。"
    },
    "timeline_sort_challenge": {
      "subjects": "历史时间线、科学实验步骤、作文流程、项目步骤",
      "play": "学生把事件或步骤按正确时间 / 逻辑排序。",
      "setup": "老师输入事件卡片，系统打乱后让学生排列。",
      "best": "适合历史、科学流程、说明文结构。"
    },
    "image_label_match": {
      "subjects": "识图、科学器官、地图、词汇、物品名称",
      "play": "学生把标签拖到对应图片或图片位置。",
      "setup": "老师上传图片并输入标签，学生完成配对。",
      "best": "适合图片教学、实物认知、双语词汇。"
    },
    "team_relay_quiz": {
      "subjects": "全科复习、分组竞赛、单元测验",
      "play": "各组轮流答题，答对推进接力进度。",
      "setup": "老师设置组别、题库与胜利条件。",
      "best": "适合大型课堂、分组合作与课堂总结。"
    },
    "platform_quiz": {
      "subjects": "语文、英文、数学、科学、主题综合问答",
      "play": "角色在平台地图上闯关，遇到题目答对才能继续。",
      "setup": "老师输入关卡题目，学生控制角色挑战。",
      "best": "适合高参与度闯关课、电脑室或白板互动。"
    },
    "dungeon_dragon_raid": {
      "subjects": "综合复习、故事化问答、团队合作课程",
      "play": "两队进入地牢，答题打怪、补血、找钥匙，最后讨伐巨龙。",
      "setup": "老师准备题库与关卡，系统生成 RPG 流程。",
      "best": "适合较长课堂、游戏化复习、成果活动。"
    },
    "picture_word_guess": {
      "subjects": "华文字词、英文单词、Melayu 词汇、看图说话",
      "play": "图片逐格揭开，学生抢答猜词语或答案。",
      "setup": "老师上传图片与答案，设置组数与揭图速度。",
      "best": "适合词汇教学、识图猜词、课堂抢答。"
    },
    "two_team_puzzle_duel": {
      "subjects": "图像观察、地图、科学图片、课文插图",
      "play": "两组同时拼同一张图，最快完成者获胜。",
      "setup": "老师上传图片，设置拼图切割与组别。",
      "best": "适合白板分组竞赛、图像复习、活动暖场。"
    },
    "island_conquest": {
      "subjects": "策略问答、地理、历史、综合复习、团队竞赛",
      "play": "两队在岛屿地图上抢占土地，答题决定行动结果。",
      "setup": "老师设置地图、起点、障碍、回合与题库。",
      "best": "适合高阶策略型课堂与长时段活动。"
    },
    "kingdom_resource_battle": {
      "subjects": "综合问答、AI素养、经济概念、资源管理、项目复习",
      "play": "队伍开发农田、森林与金矿，答题获得资源并触发事件卡。",
      "setup": "老师设置题库、事件卡、回合和目标分数。",
      "best": "适合项目式复习、成果课、分组策略对抗。"
    },
    "spot_diff_v2": {
      "subjects": "观察力训练、图片阅读、艺术、科学图像、安全教育",
      "play": "学生在左图与右图中找碴，系统可显示红色答案图。",
      "setup": "自带后台，可新增、编辑、删除关卡，上传左右图与答案图。",
      "best": "适合多关卡观察挑战、亲子活动、白板互动。"
    }
  },
  "en": {
    "memory_match": {
      "subjects": "Languages, vocabulary, math facts, science terms",
      "play": "Students flip two cards and match pairs such as word-definition, image-label or question-answer.",
      "setup": "Enter matching pairs; ideal for 5–10 minute warm-ups.",
      "best": "Warm-up, vocabulary memory and concept matching."
    },
    "true_false": {
      "subjects": "All subjects, AI literacy, safety education, science facts",
      "play": "Students answer true/false statements with instant feedback.",
      "setup": "Prepare quick statements to check whole-class understanding.",
      "best": "Lesson starters, exit tickets and quick checks."
    },
    "sentence_order": {
      "subjects": "Chinese, English, Malay, history, science procedures, writing",
      "play": "Students drag sentences or steps into the correct order.",
      "setup": "Enter sentences, steps or events; the system shuffles them.",
      "best": "Sequencing, process learning and reading logic."
    },
    "treasure_box": {
      "subjects": "Languages, mathematics, science, general knowledge, values education",
      "play": "Students open treasure boxes to draw questions and earn rewards.",
      "setup": "Enter a question bank; the game randomly draws questions.",
      "best": "Low-pressure review and reward-based interaction."
    },
    "lucky_wheel": {
      "subjects": "All-subject review, class quiz, theme activities",
      "play": "A wheel decides the question or challenge for teams.",
      "setup": "Enter questions or tasks; spin to select randomly.",
      "best": "Class warm-up, review and engagement."
    },
    "text_match": {
      "subjects": "Vocabulary, spelling, definitions, formulas and answers",
      "play": "Students drag matching text, answers or labels to the right places.",
      "setup": "Enter two sets of matching items.",
      "best": "Language vocabulary, formula matching and concept review."
    },
    "whack_mole": {
      "subjects": "Quick quiz, multiplication, vocabulary reading, science concepts",
      "play": "Students quickly click the correct mole/target.",
      "setup": "Prepare a question bank for fast-paced practice.",
      "best": "Whiteboard interaction and rapid recall practice."
    },
    "classification_conveyor": {
      "subjects": "Science classification, grammar, shapes, image sorting",
      "play": "Students sort conveyor items into correct categories.",
      "setup": "Set category names and add text or image items.",
      "best": "Concept grouping, image recognition and knowledge organization."
    },
    "image_puzzle_speed_race": {
      "subjects": "Art, science images, geography maps, textbook pictures",
      "play": "Groups solve image puzzles and the system records time.",
      "setup": "Upload an image and set difficulty/team mode.",
      "best": "Image observation and team competition."
    },
    "bomb_quiz": {
      "subjects": "Timed review, exam preparation, concept checks",
      "play": "A countdown bomb creates urgency while students answer.",
      "setup": "Enter questions and timer settings.",
      "best": "Older students, exam review and fast competition."
    },
    "knowledge_race": {
      "subjects": "General knowledge, science, history, language quiz",
      "play": "Correct answers move the team forward in a race.",
      "setup": "Set questions and teams; the race advances automatically.",
      "best": "Whole-class quiz competition."
    },
    "monster_defense": {
      "subjects": "Math, vocabulary, science, unit review",
      "play": "Students answer questions to defend against monsters.",
      "setup": "Enter questions and difficulty for team defense.",
      "best": "Teamwork and exciting lesson peaks."
    },
    "find_difference": {
      "subjects": "Observation, art, science images, reading details",
      "play": "Students find differences between two images.",
      "setup": "Upload or use sample images and set the number of differences.",
      "best": "Visual discrimination and observation training."
    },
    "keyword_beachhead": {
      "subjects": "Keywords, reading comprehension, history points, science terms",
      "play": "Teams capture keyword zones by answering correctly.",
      "setup": "Enter keywords and clues for team play.",
      "best": "Theme review, concept consolidation and team response."
    },
    "timeline_sort_challenge": {
      "subjects": "History, science experiments, writing process, project steps",
      "play": "Students arrange events or steps in the correct order.",
      "setup": "Enter event cards; the game shuffles them.",
      "best": "History timelines and process learning."
    },
    "image_label_match": {
      "subjects": "Image recognition, science diagrams, maps, vocabulary",
      "play": "Students drag labels to the matching image or position.",
      "setup": "Upload images and enter labels.",
      "best": "Visual learning, diagrams and bilingual vocabulary."
    },
    "team_relay_quiz": {
      "subjects": "All-subject review, team competition, unit tests",
      "play": "Teams answer in relay turns; correct answers advance progress.",
      "setup": "Set teams, questions and win condition.",
      "best": "Large classes and team cooperation."
    },
    "platform_quiz": {
      "subjects": "Languages, math, science, integrated quiz",
      "play": "A character clears platform stages by answering questions.",
      "setup": "Enter stage questions for adventure play.",
      "best": "High-engagement challenge lessons."
    },
    "dungeon_dragon_raid": {
      "subjects": "Integrated review, story quiz, teamwork",
      "play": "Teams raid a dungeon, fight monsters, heal, find keys and defeat a dragon.",
      "setup": "Prepare question bank and stage settings.",
      "best": "Longer review sessions and gamified events."
    },
    "picture_word_guess": {
      "subjects": "Chinese words, English vocabulary, Malay words, picture speaking",
      "play": "Image tiles reveal gradually; teams buzz to guess the word/answer.",
      "setup": "Upload image and answer; set teams and reveal speed.",
      "best": "Vocabulary teaching and picture-based guessing."
    },
    "two_team_puzzle_duel": {
      "subjects": "Image observation, maps, science pictures, textbook images",
      "play": "Two teams solve the same image puzzle at the same time.",
      "setup": "Upload image and set puzzle grid/team mode.",
      "best": "Whiteboard team duel and visual review."
    },
    "island_conquest": {
      "subjects": "Strategy quiz, geography, history, integrated review",
      "play": "Teams conquer hex islands and answer questions to move.",
      "setup": "Set map, starting points, obstacles, rounds and questions.",
      "best": "Advanced strategy lessons and long activities."
    },
    "kingdom_resource_battle": {
      "subjects": "Integrated quiz, AI literacy, economics, resource management",
      "play": "Teams develop farms, forests and mines, earn resources and trigger event cards.",
      "setup": "Set questions, event cards, rounds and target score.",
      "best": "Project-based review and strategic team battle."
    },
    "spot_diff_v2": {
      "subjects": "Observation, image reading, art, science images, safety education",
      "play": "Students spot differences between left/right images with optional red answer mask.",
      "setup": "Built-in admin allows levels to be added, edited and deleted.",
      "best": "Multi-level observation challenges and whiteboard play."
    }
  },
  "ms": {
    "memory_match": {
      "subjects": "Bahasa, kosa kata, fakta matematik, konsep sains",
      "play": "Murid membuka dua kad dan memadankan pasangan yang betul.",
      "setup": "Guru masukkan pasangan padanan; sesuai untuk pemanasan 5–10 minit.",
      "best": "Pemanasan, ingatan kosa kata dan padanan konsep."
    },
    "true_false": {
      "subjects": "Semua subjek, literasi AI, keselamatan, fakta sains",
      "play": "Murid memilih betul atau salah dengan maklum balas segera.",
      "setup": "Sediakan soalan benar/salah untuk semak kefahaman kelas.",
      "best": "Set induksi, penutup dan semakan pantas."
    },
    "sentence_order": {
      "subjects": "Bahasa Cina, Inggeris, Melayu, sejarah, proses sains",
      "play": "Murid menyusun ayat atau langkah mengikut urutan betul.",
      "setup": "Masukkan ayat, langkah atau peristiwa; sistem akan mengacaknya.",
      "best": "Urutan ayat, proses dan logik bacaan."
    },
    "treasure_box": {
      "subjects": "Bahasa, matematik, sains, pengetahuan am, nilai",
      "play": "Murid memilih peti harta untuk mendapatkan soalan dan ganjaran.",
      "setup": "Masukkan bank soalan; sistem memilih secara rawak.",
      "best": "Ulang kaji santai dan interaksi ganjaran."
    },
    "lucky_wheel": {
      "subjects": "Ulang kaji semua subjek, kuiz kelas, aktiviti tema",
      "play": "Roda menentukan soalan atau cabaran untuk kumpulan.",
      "setup": "Masukkan soalan atau tugasan; putar untuk pilih.",
      "best": "Pemanasan, ulang kaji dan penglibatan murid."
    },
    "text_match": {
      "subjects": "Kosa kata, ejaan, definisi, formula dan jawapan",
      "play": "Murid menyeret teks, jawapan atau label ke tempat betul.",
      "setup": "Masukkan dua set item padanan.",
      "best": "Kosa kata, formula dan ulang kaji konsep."
    },
    "whack_mole": {
      "subjects": "Kuiz pantas, sifir, bacaan perkataan, konsep sains",
      "play": "Murid klik sasaran yang betul dengan cepat.",
      "setup": "Sediakan bank soalan untuk latihan pantas.",
      "best": "Papan putih interaktif dan hafalan pantas."
    },
    "classification_conveyor": {
      "subjects": "Klasifikasi sains, tatabahasa, bentuk, gambar",
      "play": "Murid mengelaskan item pada tali sawat ke kategori betul.",
      "setup": "Tetapkan kategori dan tambah item teks atau gambar.",
      "best": "Pengelasan konsep dan pengenalan imej."
    },
    "image_puzzle_speed_race": {
      "subjects": "Seni, gambar sains, peta, ilustrasi buku teks",
      "play": "Kumpulan menyusun puzzle gambar dan masa direkodkan.",
      "setup": "Muat naik imej dan tetapkan tahap/kumpulan.",
      "best": "Pemerhatian imej dan pertandingan kumpulan."
    },
    "bomb_quiz": {
      "subjects": "Ulang kaji berwaktu, persediaan peperiksaan, semakan konsep",
      "play": "Bom kira detik mewujudkan cabaran masa.",
      "setup": "Masukkan soalan dan tetapan masa.",
      "best": "Murid tahap tinggi dan ulang kaji kompetitif."
    },
    "knowledge_race": {
      "subjects": "Pengetahuan am, sains, sejarah, bahasa",
      "play": "Jawapan betul menggerakkan pasukan dalam perlumbaan.",
      "setup": "Tetapkan soalan dan pasukan.",
      "best": "Pertandingan kuiz kelas."
    },
    "monster_defense": {
      "subjects": "Matematik, kosa kata, sains, ulang kaji unit",
      "play": "Murid menjawab soalan untuk mempertahankan diri daripada raksasa.",
      "setup": "Masukkan soalan dan tahap kesukaran.",
      "best": "Kerjasama pasukan dan suasana aktif."
    },
    "find_difference": {
      "subjects": "Pemerhatian, seni, imej sains, perincian bacaan",
      "play": "Murid mencari perbezaan antara dua gambar.",
      "setup": "Muat naik imej atau guna contoh dan tetapkan jumlah perbezaan.",
      "best": "Latihan pemerhatian dan diskriminasi visual."
    },
    "keyword_beachhead": {
      "subjects": "Kata kunci, kefahaman bacaan, sejarah, istilah sains",
      "play": "Pasukan menawan zon kata kunci dengan jawapan betul.",
      "setup": "Masukkan kata kunci dan petunjuk.",
      "best": "Ulang kaji tema dan pengukuhan konsep."
    },
    "timeline_sort_challenge": {
      "subjects": "Sejarah, eksperimen sains, proses menulis, langkah projek",
      "play": "Murid menyusun peristiwa atau langkah mengikut urutan betul.",
      "setup": "Masukkan kad peristiwa dan sistem mengacaknya.",
      "best": "Garis masa sejarah dan pembelajaran proses."
    },
    "image_label_match": {
      "subjects": "Pengenalan gambar, rajah sains, peta, kosa kata",
      "play": "Murid menyeret label ke gambar atau posisi yang betul.",
      "setup": "Muat naik imej dan masukkan label.",
      "best": "Pembelajaran visual dan kosa kata dwibahasa."
    },
    "team_relay_quiz": {
      "subjects": "Ulang kaji semua subjek, pertandingan kumpulan, ujian unit",
      "play": "Pasukan menjawab secara bergilir dan maju apabila betul.",
      "setup": "Tetapkan pasukan, soalan dan syarat kemenangan.",
      "best": "Kelas besar dan kerjasama kumpulan."
    },
    "platform_quiz": {
      "subjects": "Bahasa, matematik, sains, kuiz integrasi",
      "play": "Watak melepasi platform dengan menjawab soalan.",
      "setup": "Masukkan soalan untuk setiap peringkat.",
      "best": "Kelas cabaran yang sangat menarik."
    },
    "dungeon_dragon_raid": {
      "subjects": "Ulang kaji integrasi, kuiz cerita, kerjasama",
      "play": "Pasukan menyerbu dungeon, melawan raksasa dan mengalahkan naga.",
      "setup": "Sediakan bank soalan dan tetapan peringkat.",
      "best": "Sesi ulang kaji panjang dan acara gamifikasi."
    },
    "picture_word_guess": {
      "subjects": "Perkataan Cina, Inggeris, Melayu, bercerita berdasarkan gambar",
      "play": "Bahagian gambar dibuka sedikit demi sedikit dan pasukan meneka.",
      "setup": "Muat naik gambar dan jawapan; tetapkan kumpulan dan kelajuan.",
      "best": "Pengajaran kosa kata dan teka gambar."
    },
    "two_team_puzzle_duel": {
      "subjects": "Pemerhatian gambar, peta, gambar sains, ilustrasi buku",
      "play": "Dua pasukan menyusun gambar yang sama serentak.",
      "setup": "Muat naik gambar dan tetapkan grid/kumpulan.",
      "best": "Pertandingan papan putih dan ulang kaji visual."
    },
    "island_conquest": {
      "subjects": "Kuiz strategi, geografi, sejarah, ulang kaji integrasi",
      "play": "Pasukan menawan pulau heksagon melalui jawapan betul.",
      "setup": "Tetapkan peta, titik mula, halangan, pusingan dan soalan.",
      "best": "Aktiviti strategi tahap tinggi."
    },
    "kingdom_resource_battle": {
      "subjects": "Kuiz integrasi, literasi AI, ekonomi, pengurusan sumber",
      "play": "Pasukan membangunkan ladang, hutan dan lombong serta mencetuskan kad peristiwa.",
      "setup": "Tetapkan soalan, kad peristiwa, pusingan dan skor sasaran.",
      "best": "Ulang kaji berasaskan projek dan strategi kumpulan."
    },
    "spot_diff_v2": {
      "subjects": "Pemerhatian, pembacaan imej, seni, imej sains, keselamatan",
      "play": "Murid mencari perbezaan antara gambar kiri dan kanan.",
      "setup": "Admin terbina membolehkan guru tambah, edit dan padam tahap.",
      "best": "Cabaran pemerhatian berbilang tahap."
    }
  }
};


const I18N = {
  zh: {
    appTitle:'课堂游戏模板网站',
    tagline:'老师后台｜模板套用｜白板上课｜离线下载',
    authBullet1:'管理員可控制每個用戶能使用哪些遊戲。',
    authBullet2:'免費註冊即可先用 2 個遊戲，完善資料後再送 1 個。',
    authBullet3:'播放器採用白板專用安全模式，並提供離線 ZIP 下載。',
    authBullet4:'適合互動白板、投影機、電腦螢幕。',
    login:'登录', register:'账号申请', username:'账号', password:'密码', confirmPassword:'确认密码',
    name:'姓名', quickAdmin:'管理员登录', resetDemo:'重置 Demo', loginFail:'登录失败，请检查账号或密码。',
    fillAll:'请完整填写资料', passwordMismatch:'两次密码不一致', accountExists:'账号已存在', registerSuccess:'注册成功，请登录',
    demoAccounts:'測試帳號：admin / admin123 ｜ 一般用戶：teacher / 123456',
    dashboardSub:'免登入版本，老師可直接進入後台設定題庫與遊戲包',
    currentUser:'目前用户', admin:'管理员', user:'用户', logout:'退出',
    accountInfo:'账号资讯', role:'角色', package:'用户分类', normalUser:'一般用户',
    planInfo:'方案说明', single:'配套 1', pick5:'配套 2', all_access:'配套 3',
    singleDesc:'初阶 RM20 / 款；进阶 RM30 / 款；高阶 RM50 / 款', pick5Desc:'特惠 RM100：初阶或进阶任选 4 个，再加 1 个高阶模板', allAccessDesc:'原价 RM790，特惠 RM300，包含未来新开发游戏',
    demoBuy:'Demo 購買', chooseSingle:'請在遊戲卡片上選擇要單獨購買的遊戲。',
    openAdmin:'打開老師後台', adminPanel:'老師後台', collapse:'收起',
    adminHelp:'此版本不需要登入；老師可直接設定題庫、素材與遊戲包。',
    authorizedGames:'已授权游戏', operation:'操作', save:'保存设置', selectAll:'全选', clear:'清除',
    freeUser:'免费用户', freePendingUser:'免费用户｜新注册未批准', trialUser:'体验用户｜已批准＋2 个免费模板', singleAuthUser:'单一授权用户', multiAuthUser:'多授权用户', bundleAuthUser:'4+1 授权用户', allAuthUser:'全部授权用户', pack2:'配套 2（4+1组合）', pack3:'配套 3（全授權）',
    playerFeatures:'播放器特色', featureLines:'• 全屏時保持中央安全區<br>• 自動等比放大<br>• 不出現上下軸<br>• 適合互動白板',
    whiteboardMode:'白板專用模式', whiteboardDesc:'打開遊戲後會自動進入中央安全區，按鈕放大，適合互動白板上課。',
    enabled:'預設已開啟', offlineZip:'離線 ZIP 下載', offlineDesc:'老師先制作題庫，再套用版型生成完整遊戲壓縮包。',
    downloadAll:'下载全部离线包', gameMaker:'遊戲制作', makerDesc:'先整理課堂標題與題庫；正式版可自動寫入設定並打包下載。',
    openMaker:'打开制作区', makerTitle:'遊戲制作資料填寫區',
    makerHelp:'老師先選擇遊戲版型，再填入題庫或上傳素材。按「生成遊戲包」後，系統會把版型與題庫打包成完整 ZIP。',
    titlePlaceholder:'課堂遊戲標題，例如：第3課 詞語複習', subjectPlaceholder:'科目 / 年級，例如：華文 三年級',
    questionsPlaceholder:'輸入題目資料。建議格式：\\n題目 | 答案 | 選項A,選項B,選項C\\n或直接貼上你的題庫內容',
    downloadQuestionTxt:'下載題庫 TXT', availableGames:'可用游戏', lockedGames:'尚未授权',
    freeGamesNote:'註冊送 2 個遊戲，完善資料再送 1 個，其餘可單購或升級配套', lockedNote:'管理員可授權，或使用 Demo 購買',
    free:'免費', paid:'付費', available:'已可使用', locked:'未授权', freeExperienceTemplate:'体验模板｜无需购买', authorizedOnlyHint:'这里只显示你已授权可使用的游戏模板。', notAuthorizedTemplate:'你尚未授权使用这个游戏模板。', noAuthorizedGamesForBackend:'目前还没有可使用的游戏模板。', whiteboardClass:'白板上课', downloadZip:'下载ZIP', make:'制作',
    singleBuy:'单款购买', addPick5:'加入五選配套', playing:'正在播放', playerSubtitle:'白板專用｜中央安全區｜無上下軸｜三語切換',
    safe169:'16:9 安全區', safe43:'4:3 安全區', auto:'自動', browserFullscreen:'瀏覽器全屏', close:'關閉',
    announcements1:'免費註冊可先使用 3 個基礎遊戲。', announcements2:'平台已加入三語切換、白板安全顯示、圖片拼圖與孤島搶奪賽。',
    language:'语言',
    gameNames: {
      memory_match:'翻翻樂', true_false:'真假判斷快閃', sentence_order:'句子排序挑戰', treasure_box:'寶箱開開看',
      lucky_wheel:'幸運轉盤問答', classification_conveyor:'分類運輸帶', platform_quiz:'平台闖關問答',
      monster_defense:'怪獸防守戰', whack_mole:'打地鼠問答', text_match:'文字對應', bomb_quiz:'炸彈倒數搶答',
      knowledge_race:'知識賽馬', dungeon_dragon_raid:'地牢巨龍討伐戰', image_puzzle_speed_race:'图片拼图竞速赛', two_team_puzzle_duel:'双组拼图对战', island_conquest:'孤岛抢夺赛', timeline_sort_challenge:'时间线排序挑战', image_label_match:'图片标签配对赛', team_relay_quiz:'团队答题接力赛', find_difference:'大家來找不同', keyword_beachhead:'关键词抢滩战', kingdom_resource_battle:'王国资源争夺战：围绕中央王都开发农田、森林与金矿，并触发随机好坏事件。'
    },
    gameDesc: {
      memory_match:'記憶翻牌配對，適合暖身與小組競賽。', true_false:'快速判斷題，提升反應力與概念辨識。',
      sentence_order:'適合語文課堂，訓練句子與流程排序。', treasure_box:'抽題與闖關式互動，增加課堂驚喜感。',
      lucky_wheel:'轉盤抽題，適合班級搶答活動。', classification_conveyor:'支援圖片與文字分類，老師可按分類上傳圖片，學生在運輸帶上點選正確分類。',
      platform_quiz:'角色闖關搭配問答，遊戲感較強。', monster_defense:'答題防守玩法，適合團體合作。',
      whack_mole:'互動白板很好玩，學生參與度高。', text_match:'詞語、拼字、配對類題目都適合。',
      bomb_quiz:'限時壓力感強，適合複習與競賽。', knowledge_race:'比賽感強，適合全班分組對抗。',
      dungeon_dragon_raid:'地牢RPG闖關，兩隊答題打怪、補血、找鑰匙，最後討伐巨龍。',
      image_puzzle_speed_race:'老师上传图片作为题目，各组轮流拼图，系统记录时间，最快组别胜利。',
      two_team_puzzle_duel:'两组同时拼同一张图片，适合互动白板分组竞赛，最快完成者胜利。',
      island_conquest:'两队在大海上的六边形岛屿抢占土地，可设定胜利条件、起点、海草障碍与回合限制。',
      timeline_sort_challenge:'老师输入事件或步骤，学生拖动卡片排成正确时间线，适合历史、科学流程与项目步骤。',
      image_label_match:'老师上传图片并输入标签，学生把正确标签拖到对应图片，适合识图、词汇与概念学习。',
      team_relay_quiz:'分组轮流答题，答对前进，先完成接力进度的队伍获胜。'
    }
  },
  en: {
    appTitle:'Classroom Game Template Platform',
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
    accountInfo:'Account info', role:'Role', package:'User Category', normalUser:'Standard user',
    planInfo:'Package plans', single:'Plan 1', pick5:'Plan 2', all_access:'Plan 3',
    singleDesc:'Beginner RM20, Intermediate RM30, Advanced RM50 per template', pick5Desc:'Promo RM100: 4 Beginner/Intermediate templates + 1 Advanced template', allAccessDesc:'Total RM790, promo RM300, including future new games',
    demoBuy:'Demo purchase', chooseSingle:'Please choose an individual game from the game card.',
    openAdmin:'Open admin panel', adminPanel:'Admin panel', collapse:'Collapse',
    adminHelp:'Admins can set which games each user may use. Free games do not require extra authorization.',
    authorizedGames:'Authorized games', operation:'Actions', save:'Save', selectAll:'Select all', clear:'Clear',
    freeUser:'Free user', freePendingUser:'Free user | Newly registered, not approved', trialUser:'Trial user | Approved + 2 free templates', singleAuthUser:'Single-template user', multiAuthUser:'Multi-template user', bundleAuthUser:'4+1 authorized user', allAuthUser:'All-access user', pack2:'Plan 2 (pick 5)', pack3:'Plan 3 (all access)',
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
    free:'Free', paid:'Paid', available:'Available', locked:'Locked', freeExperienceTemplate:'Trial template | No purchase needed', authorizedOnlyHint:'Only templates authorized for your account are shown here.', notAuthorizedTemplate:'This template is not authorized for your account yet.', noAuthorizedGamesForBackend:'No authorized templates available yet.', whiteboardClass:'Whiteboard class', downloadZip:'Download ZIP', make:'Make',
    singleBuy:'Buy single', addPick5:'Add to pick-5 plan', playing:'Now playing', playerSubtitle:'Whiteboard mode | Central safe area | No scrollbars | Trilingual',
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
    appTitle:'Platform Templat Permainan Kelas',
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
    accountInfo:'Maklumat akaun', role:'Peranan', package:'Kategori Pengguna', normalUser:'Pengguna biasa',
    planInfo:'Pakej', single:'Pakej 1', pick5:'Pakej 2', all_access:'Pakej 3',
    singleDesc:'Asas RM20, Pertengahan RM30, Lanjutan RM50 setiap templat', pick5Desc:'Promosi RM100: 4 templat Asas/Pertengahan + 1 templat Lanjutan', allAccessDesc:'Jumlah RM790, promosi RM300, termasuk permainan baharu akan datang',
    demoBuy:'Beli demo', chooseSingle:'Sila pilih permainan individu daripada kad permainan.',
    openAdmin:'Buka panel admin', adminPanel:'Panel admin', collapse:'Tutup',
    adminHelp:'Admin boleh menetapkan permainan yang boleh digunakan oleh setiap pengguna. Permainan percuma tidak memerlukan kebenaran tambahan.',
    authorizedGames:'Permainan dibenarkan', operation:'Tindakan', save:'Simpan', selectAll:'Pilih semua', clear:'Kosongkan',
    freeUser:'Pengguna percuma', freePendingUser:'Pengguna percuma | Baru daftar, belum diluluskan', trialUser:'Pengguna percubaan | Diluluskan + 2 templat percuma', singleAuthUser:'Pengguna satu templat', multiAuthUser:'Pengguna pelbagai templat', bundleAuthUser:'Pengguna akses 4+1', allAuthUser:'Pengguna akses semua', pack2:'Pakej 2 (kombo 4+1)', pack3:'Pakej 3 (akses penuh)',
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
    free:'Percuma', paid:'Berbayar', available:'Boleh digunakan', locked:'Dikunci', freeExperienceTemplate:'Templat percubaan | Tidak perlu dibeli', authorizedOnlyHint:'Hanya templat yang dibenarkan untuk akaun anda dipaparkan di sini.', notAuthorizedTemplate:'Templat ini belum dibenarkan untuk akaun anda.', noAuthorizedGamesForBackend:'Belum ada templat yang dibenarkan.', whiteboardClass:'Kelas papan putih', downloadZip:'Muat turun ZIP', make:'Bina',
    singleBuy:'Beli satu', addPick5:'Tambah ke pakej pilih-5', playing:'Sedang dimainkan', playerSubtitle:'Mod papan putih | Kawasan selamat tengah | Tiada skrol | Tiga bahasa',
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


// Strict dashboard language override: all dashboard / backend UI text must follow selected language.
// This prevents new UI keys from falling back to Simplified Chinese when English or Melayu is selected.
const UI_OVERRIDE = {
  zh: {
    appTitle:'课堂游戏模板网站', tagline:'老师后台｜模板套用｜白板上课｜离线下载', language:'语言', logout:'登出', admin:'管理员', user:'用户', teacherRole:'老师',
    dashboardTagline:'老师账号制｜管理员后台｜题库设定｜白板上课', adminDashboardTitle:'管理员后台', teacherLibraryTitle:'老师游戏库', currentlyAvailable:'目前可使用：{n} 款',
    adminDashboardDesc:'管理员可新增老师、批准申请、重设密码、停用账号，也可进入游戏库测试所有游戏。', teacherDashboardDesc:'老师登录后，可使用已授权游戏，并在老师后台设定题库、课堂标题与素材。',
    gameLibraryTitle:'游戏库', gameLibraryDesc:'点开初阶 / 进阶 / 高阶，即可查看该阶级游戏。可直接白板上课，或套用模板进入老师后台。', lockedGamesCount:'未授权游戏（{n}）', lockedGamesDesc:'请由管理员授权后使用。',
    teacherBackendTitle:'老师后台｜题库与游戏包设定', teacherBackendDesc:'老师登录后可选择游戏模板，再输入题库 / 素材说明，生成设定资料与对应游戏包。', collapseBackend:'收起后台', selectGameTemplate:'选择游戏模板', classGameTitle:'课堂游戏标题', subjectGrade:'科目 / 年级', questionMaterialSettings:'题库 / 素材设定',
    titlePlaceholder:'课堂游戏标题，例如：第3课 词语复习', subjectPlaceholder:'科目 / 年级，例如：华文 三年级', questionsPlaceholder:'输入题目资料。建议格式：\n题目 | 答案 | 选项A,选项B,选项C\n或直接贴上你的题库内容', questionFormatNotice:'建议题库格式：题目｜答案｜选项A,选项B,选项C。图片类游戏可在此记录图片名称、答案位置或上传素材说明；正式部署可再接入自动写入 game-config.json。',
    downloadQuestionTxt:'下载题库 TXT', generateDownloadPack:'生成 / 下载游戏包', downloadAll:'下载全部离线包', whiteboardClass:'白板上课', applyTemplate:'套用模板', generateGamePack:'生成游戏包', available:'已可使用', locked:'未授权', freeExperienceTemplate:'体验模板｜无需购买', authorizedOnlyHint:'这里只显示你已授权可使用的游戏模板。', notAuthorizedTemplate:'你尚未授权使用这个游戏模板。', noAuthorizedGamesForBackend:'目前还没有可使用的游戏模板。', singleBuy:'单款购买', addPick5:'加入 4+1 组合',
    feedbackTitle:'反馈 / 询问', feedbackHint:'若有针对某个游戏，请写明游戏代号，例如 S001、P001、H007。', feedbackGameCodePlaceholder:'游戏代号，可留空，例如 H007', feedbackMessagePlaceholder:'请输入反馈、问题、建议或希望新增的功能', submitFeedback:'送出反馈', feedbackRequired:'请先输入反馈内容。',
    adminAccountPanelTitle:'管理员后台｜老师账号管理', adminAccountStats:'待批准：{pending} 位｜老师总数：{total} 位', adminAccountNotice:'管理员可新增老师账号、批准老师申请、停用 / 启用账号、重设密码，也可设置老师可使用的游戏。推广期间，新老师批准后可免费体验 S001 与 S002 两个初阶模板，无需购买。',
    addTeacherAccount:'新增老师账号', teacherNamePlaceholder:'老师姓名', teacherEmailPlaceholder:'老师电子邮件', phonePlaceholder:'电话', initialPasswordPlaceholder:'初始密码', allGamesAccess:'全部授权用户', freeBasicAccess:'体验用户', pick5Access:'4+1 授权用户', addTeacher:'新增老师', teacherAccount:'老师账号', status:'状态', package:'用户分类', authorizedGames:'已授权游戏', operation:'操作', save:'保存设置', selectAll:'全选', clear:'清除', freeUser:'免费用户', freePendingUser:'免费用户｜新注册未批准', trialUser:'体验用户｜已批准＋2 个免费模板', singleAuthUser:'单一授权用户', multiAuthUser:'多授权用户', bundleAuthUser:'4+1 授权用户', allAuthUser:'全部授权用户', pack2:'4+1 授权用户', pack3:'全部授权用户', phoneLabel:'电话：', phoneNotProvided:'电话未填', promoGiftLabel:'体验模板：', approve:'批准', resetPassword:'重设密码', enableAccount:'启用', disableAccount:'停用', deleteAccount:'删除', teacherFeedbackTitle:'老师反馈 / 询问', noGameSpecified:'未指定游戏', noFeedback:'目前没有反馈。', disabledStatus:'已停用', pendingStatus:'待批准', approvedStatus:'已批准',
    teacherNameEmailRequired:'请填写老师姓名与电子邮件。', validEmailRequired:'请输入有效电子邮件。', emailExists:'此电子邮件已存在。', schoolTeacherOrg:'学校老师', confirmDeleteTeacher:'确定删除老师账号：{name}？', promptNewPassword:'请输入 {name} 的新密码：', classQuestionBankSuffix:'课堂题库', selectTemplateFirst:'请先选择一个游戏模板。', gameCodeLabel:'游戏代码', gameTemplateLabel:'游戏模板', classTitleLabel:'课堂标题', noQuestionBankYet:'尚未填入题库。', settingsFileSuffix:'设定资料',
    profileCompletedTitle:'老师资料已完成', profileIncompleteTitle:'完善老师资料，再送 1 个游戏', profileCompletedDesc:'已解锁资料完善奖励游戏。', profileIncompleteDesc:'请填写电话、姓名、州属与服务类型。完成后会自动解锁 S003 句子排序挑战。', completed:'已完成', incomplete:'未完成', namePlaceholder:'姓名', englishNamePlaceholder:'英文姓名', saveTeacherProfile:'保存老师资料', authorizedSummaryTitle:'目前授权可使用：{n} 款', authorizedSummaryDesc:'已授权游戏会出现在下方「可使用游戏」区；未授权游戏会集中在「未授权游戏」区。',
    make:'制作', playerSubtitle:'白板专用｜中央安全区｜无上下轴｜三语切换', safe169:'16:9 安全区', safe43:'4:3 安全区', auto:'自动', browserFullscreen:'浏览器全屏', close:'关闭'
  },
  en: {
    appTitle:'Classroom Game Template Platform', tagline:'Teacher backend | Template builder | Whiteboard teaching | Offline downloads', language:'Language', logout:'Log out', admin:'Admin', user:'User', teacherRole:'Teacher',
    dashboardTagline:'Teacher accounts | Admin console | Question banks | Whiteboard teaching', adminDashboardTitle:'Admin Console', teacherLibraryTitle:'Teacher Game Library', currentlyAvailable:'Available: {n}',
    adminDashboardDesc:'Admins can add teachers, approve applications, reset passwords, disable accounts, and test all games in the library.', teacherDashboardDesc:'After login, teachers can use authorized games and set question banks, lesson titles and materials in the teacher backend.',
    gameLibraryTitle:'Game Library', gameLibraryDesc:'Expand Beginner / Intermediate / Advanced to view each game. You can start whiteboard teaching directly or apply a template in the teacher backend.', lockedGamesCount:'Unauthorized Games ({n})', lockedGamesDesc:'Please ask an administrator to grant access.',
    teacherBackendTitle:'Teacher Backend | Question Bank & Game Pack Setup', teacherBackendDesc:'Choose a game template, then enter question bank or material notes to generate setup data and the related game package.', collapseBackend:'Collapse Backend', selectGameTemplate:'Select Game Template', classGameTitle:'Classroom Game Title', subjectGrade:'Subject / Grade', questionMaterialSettings:'Question Bank / Material Settings',
    titlePlaceholder:'Game title, e.g. Lesson 3 Vocabulary Review', subjectPlaceholder:'Subject / grade, e.g. English Year 3', questionsPlaceholder:'Enter questions. Suggested format:\nQuestion | Answer | Option A, Option B, Option C\nOr paste your question bank here', questionFormatNotice:'Suggested format: Question | Answer | Option A, Option B, Option C. For image-based games, record image file names, answer positions or material notes here; production deployment can later write directly to game-config.json.',
    downloadQuestionTxt:'Download Question TXT', generateDownloadPack:'Generate / Download Game Pack', downloadAll:'Download all offline packs', whiteboardClass:'Whiteboard Class', applyTemplate:'Apply Template', generateGamePack:'Generate Game Pack', available:'Available', locked:'Locked', freeExperienceTemplate:'Trial template | No purchase needed', authorizedOnlyHint:'Only templates authorized for your account are shown here.', notAuthorizedTemplate:'This template is not authorized for your account yet.', noAuthorizedGamesForBackend:'No authorized templates available yet.', singleBuy:'Buy single template', addPick5:'Add to 4+1 combo',
    feedbackTitle:'Feedback / Inquiry', feedbackHint:'If the feedback is about a specific game, include the game code, such as S001, P001 or H007.', feedbackGameCodePlaceholder:'Game code, optional, e.g. H007', feedbackMessagePlaceholder:'Enter feedback, questions, suggestions or requested new features', submitFeedback:'Submit Feedback', feedbackRequired:'Please enter feedback first.',
    adminAccountPanelTitle:'Admin Console | Teacher Account Management', adminAccountStats:'Pending: {pending} | Total teachers: {total}', adminAccountNotice:'Admins can add teacher accounts, approve applications, enable / disable accounts, reset passwords and assign game access. During the promotion period, approved teacher accounts receive 2 free Beginner trial templates. These samples do not need to be purchased.',
    addTeacherAccount:'Add Teacher Account', teacherNamePlaceholder:'Teacher name', teacherEmailPlaceholder:'Teacher email', phonePlaceholder:'Phone', initialPasswordPlaceholder:'Initial password', allGamesAccess:'All-access user', freeBasicAccess:'Trial user', pick5Access:'4+1 authorized user', addTeacher:'Add Teacher', teacherAccount:'Teacher Account', status:'Status', package:'User Category', authorizedGames:'Authorized Games', operation:'Action', save:'Save', selectAll:'Select all', clear:'Clear', freeUser:'Free user', freePendingUser:'Free user | Newly registered, not approved', trialUser:'Trial user | Approved + 2 free templates', singleAuthUser:'Single-template user', multiAuthUser:'Multi-template user', bundleAuthUser:'4+1 authorized user', allAuthUser:'All-access user', pack2:'4+1 authorized user', pack3:'All-access user', phoneLabel:'Phone: ', phoneNotProvided:'Phone not provided', promoGiftLabel:'Trial templates: ', approve:'Approve', resetPassword:'Reset Password', enableAccount:'Enable', disableAccount:'Disable', deleteAccount:'Delete', teacherFeedbackTitle:'Teacher Feedback / Inquiry', noGameSpecified:'No game specified', noFeedback:'No feedback yet.', disabledStatus:'Disabled', pendingStatus:'Pending', approvedStatus:'Approved',
    teacherNameEmailRequired:'Please enter teacher name and email.', validEmailRequired:'Please enter a valid email.', emailExists:'This email already exists.', schoolTeacherOrg:'School teacher', confirmDeleteTeacher:'Delete teacher account: {name}?', promptNewPassword:'Enter a new password for {name}:', classQuestionBankSuffix:'Class Question Bank', selectTemplateFirst:'Please select a game template first.', gameCodeLabel:'Game code', gameTemplateLabel:'Game template', classTitleLabel:'Class title', noQuestionBankYet:'No question bank entered yet.', settingsFileSuffix:'settings',
    profileCompletedTitle:'Teacher profile completed', profileIncompleteTitle:'Complete profile to unlock 1 more game', profileCompletedDesc:'Profile completion reward has been unlocked.', profileIncompleteDesc:'Fill in phone, name, state and organization type to unlock S003 Sentence Order Challenge.', completed:'Completed', incomplete:'Incomplete', namePlaceholder:'Name', englishNamePlaceholder:'English name', saveTeacherProfile:'Save Teacher Profile', authorizedSummaryTitle:'Authorized: {n} games', authorizedSummaryDesc:'Authorized games appear in the available games section; unauthorized games are grouped separately.',
    make:'Make', playerSubtitle:'Whiteboard mode | Center safe area | No scroll bars | Three languages', safe169:'16:9 Safe Area', safe43:'4:3 Safe Area', auto:'Auto', browserFullscreen:'Browser Fullscreen', close:'Close'
  },
  ms: {
    appTitle:'Platform Templat Permainan Kelas', tagline:'Backend guru | Pembina templat | Pengajaran papan putih | Muat turun luar talian', language:'Bahasa', logout:'Log keluar', admin:'Admin', user:'Pengguna', teacherRole:'Guru',
    dashboardTagline:'Akaun guru | Konsol admin | Bank soalan | Papan putih', adminDashboardTitle:'Konsol Admin', teacherLibraryTitle:'Perpustakaan Permainan Guru', currentlyAvailable:'Boleh digunakan: {n}',
    adminDashboardDesc:'Admin boleh tambah guru, luluskan permohonan, tetapkan semula kata laluan, nyahaktifkan akaun dan menguji semua permainan.', teacherDashboardDesc:'Selepas log masuk, guru boleh menggunakan permainan yang dibenarkan dan menetapkan bank soalan, tajuk kelas serta bahan dalam backend guru.',
    gameLibraryTitle:'Perpustakaan Permainan', gameLibraryDesc:'Buka Asas / Pertengahan / Lanjutan untuk melihat setiap permainan. Guru boleh terus mengajar di papan putih atau menggunakan templat dalam backend guru.', lockedGamesCount:'Permainan Belum Dibenarkan ({n})', lockedGamesDesc:'Sila minta admin memberikan akses.',
    teacherBackendTitle:'Backend Guru | Tetapan Bank Soalan & Pek Permainan', teacherBackendDesc:'Pilih templat permainan, kemudian masukkan bank soalan atau nota bahan untuk menjana data tetapan dan pek permainan berkaitan.', collapseBackend:'Sorok Backend', selectGameTemplate:'Pilih Templat Permainan', classGameTitle:'Tajuk Permainan Kelas', subjectGrade:'Subjek / Tahun', questionMaterialSettings:'Tetapan Bank Soalan / Bahan',
    titlePlaceholder:'Tajuk permainan, contoh: Ulang Kaji Kosa Kata Bab 3', subjectPlaceholder:'Subjek / tahun, contoh: BM Tahun 3', questionsPlaceholder:'Masukkan soalan. Format cadangan:\nSoalan | Jawapan | Pilihan A, Pilihan B, Pilihan C\nAtau tampal bank soalan anda', questionFormatNotice:'Format cadangan: Soalan | Jawapan | Pilihan A, Pilihan B, Pilihan C. Untuk permainan bergambar, catat nama fail imej, kedudukan jawapan atau nota bahan di sini; versi produksi boleh menulis terus ke game-config.json.',
    downloadQuestionTxt:'Muat turun TXT soalan', generateDownloadPack:'Jana / Muat Turun Pek Permainan', downloadAll:'Muat turun semua pek luar talian', whiteboardClass:'Kelas Papan Putih', applyTemplate:'Guna Templat', generateGamePack:'Jana Pek Permainan', available:'Boleh digunakan', locked:'Dikunci', freeExperienceTemplate:'Templat percubaan | Tidak perlu dibeli', authorizedOnlyHint:'Hanya templat yang dibenarkan untuk akaun anda dipaparkan di sini.', notAuthorizedTemplate:'Templat ini belum dibenarkan untuk akaun anda.', noAuthorizedGamesForBackend:'Belum ada templat yang dibenarkan.', singleBuy:'Beli satu templat', addPick5:'Tambah ke kombo 4+1',
    feedbackTitle:'Maklum Balas / Pertanyaan', feedbackHint:'Jika berkaitan permainan tertentu, masukkan kod permainan seperti S001, P001 atau H007.', feedbackGameCodePlaceholder:'Kod permainan, pilihan, contoh H007', feedbackMessagePlaceholder:'Masukkan maklum balas, soalan, cadangan atau fungsi baharu yang diingini', submitFeedback:'Hantar Maklum Balas', feedbackRequired:'Sila masukkan maklum balas dahulu.',
    adminAccountPanelTitle:'Konsol Admin | Pengurusan Akaun Guru', adminAccountStats:'Menunggu: {pending} | Jumlah guru: {total}', adminAccountNotice:'Admin boleh tambah akaun guru, luluskan permohonan, aktif / nyahaktifkan akaun, tetapkan semula kata laluan dan tetapkan akses permainan. Semasa promosi, akaun guru yang diluluskan menerima 2 templat Asas percubaan percuma. Templat ini tidak perlu dibeli.',
    addTeacherAccount:'Tambah Akaun Guru', teacherNamePlaceholder:'Nama guru', teacherEmailPlaceholder:'E-mel guru', phonePlaceholder:'Telefon', initialPasswordPlaceholder:'Kata laluan awal', allGamesAccess:'Pengguna akses semua', freeBasicAccess:'Pengguna percubaan', pick5Access:'Pengguna akses 4+1', addTeacher:'Tambah Guru', teacherAccount:'Akaun Guru', status:'Status', package:'Kategori Pengguna', authorizedGames:'Permainan Dibenarkan', operation:'Tindakan', save:'Simpan', selectAll:'Pilih semua', clear:'Kosongkan', freeUser:'Pengguna percuma', freePendingUser:'Pengguna percuma | Baru daftar, belum diluluskan', trialUser:'Pengguna percubaan | Diluluskan + 2 templat percuma', singleAuthUser:'Pengguna satu templat', multiAuthUser:'Pengguna pelbagai templat', bundleAuthUser:'Pengguna akses 4+1', allAuthUser:'Pengguna akses semua', pack2:'Pengguna akses 4+1', pack3:'Pengguna akses semua', phoneLabel:'Telefon: ', phoneNotProvided:'Telefon belum diisi', promoGiftLabel:'Templat percubaan: ', approve:'Luluskan', resetPassword:'Tetap Semula Kata Laluan', enableAccount:'Aktifkan', disableAccount:'Nyahaktifkan', deleteAccount:'Padam', teacherFeedbackTitle:'Maklum Balas / Pertanyaan Guru', noGameSpecified:'Tiada permainan dinyatakan', noFeedback:'Belum ada maklum balas.', disabledStatus:'Dinyahaktifkan', pendingStatus:'Menunggu', approvedStatus:'Diluluskan',
    teacherNameEmailRequired:'Sila isi nama dan e-mel guru.', validEmailRequired:'Sila masukkan e-mel yang sah.', emailExists:'E-mel ini sudah wujud.', schoolTeacherOrg:'Guru sekolah', confirmDeleteTeacher:'Padam akaun guru: {name}?', promptNewPassword:'Masukkan kata laluan baharu untuk {name}:', classQuestionBankSuffix:'Bank Soalan Kelas', selectTemplateFirst:'Sila pilih templat permainan dahulu.', gameCodeLabel:'Kod permainan', gameTemplateLabel:'Templat permainan', classTitleLabel:'Tajuk kelas', noQuestionBankYet:'Bank soalan belum dimasukkan.', settingsFileSuffix:'tetapan',
    profileCompletedTitle:'Profil guru lengkap', profileIncompleteTitle:'Lengkapkan profil untuk buka 1 lagi permainan', profileCompletedDesc:'Ganjaran lengkap profil telah dibuka.', profileIncompleteDesc:'Isi telefon, nama, negeri dan jenis organisasi untuk membuka S003 Cabaran Susun Ayat.', completed:'Lengkap', incomplete:'Belum lengkap', namePlaceholder:'Nama', englishNamePlaceholder:'Nama Inggeris', saveTeacherProfile:'Simpan Profil Guru', authorizedSummaryTitle:'Dibenarkan: {n} permainan', authorizedSummaryDesc:'Permainan yang dibenarkan muncul dalam bahagian tersedia; permainan belum dibenarkan dikumpulkan berasingan.',
    make:'Bina', playerSubtitle:'Mod papan putih | Kawasan selamat tengah | Tiada skrol | Tiga bahasa', safe169:'Kawasan Selamat 16:9', safe43:'Kawasan Selamat 4:3', auto:'Auto', browserFullscreen:'Skrin Penuh Pelayar', close:'Tutup'
  }
};

const STORAGE_KEY = 'classroom_games_hybrid_auth_v1';
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
let state = loadState();
let currentAspectMode = 'auto';
let currentPlayerGame = null;
let makerSelectedGameId = null;

let pendingReceiptData = null;
let pendingReceiptName = '';
let lastPurchaseMessage = '';

const PURCHASE_COPY = {
  zh:{
    panelTitle:'模板订购与付款上传', panelDesc:'选择要购买的模板或配套，使用 Touch n Go / 银行 App 扫描二维码付款后上传收据。管理员确认收款后，系统会开放对应模板授权。',
    selectPackage:'选择订购方式', single:'购买单一模板', combo:'4+1 组合特惠', all:'全部模板特惠', singleHint:'勾选需要购买的单一模板，系统会按阶级计算价格：初阶 RM20、进阶 RM30、高阶 RM50。', comboHint:'初阶或进阶任选 4 个模板，再加 1 个高阶模板，特惠 RM100。', allHint:'一次购买全部模板，原价 RM790，特惠 RM300，并包括未来新开发的新游戏。',
    beginnerIntermediate:'初阶 / 进阶模板', advancedTemplate:'高阶模板', paymentTitle:'付款方式', paymentHint:'请用 TNG 或任何支持 DuitNow QR 的银行 / 电子钱包扫描付款。', qrName:'收款人：HEW KIM FOO', uploadReceipt:'上传付款收据', receiptRequired:'请先上传付款收据图片。', submitOrder:'送出订购申请', noTemplateSelected:'请先选择要购买的模板。', comboRule:'4+1 组合必须选择 4 个初阶或进阶模板，再选择 1 个高阶模板。', orderSubmitted:'订购申请已送出，请等待管理员确认收款。', amount:'应付金额', myOrders:'我的订购记录', noOrders:'目前没有订购记录。', pendingPayment:'待确认收款', confirmed:'已确认并授权', rejected:'已拒绝', orderId:'订单编号', receipt:'付款收据',
    adminOrdersTitle:'订购 / 付款审核', adminOrdersDesc:'管理员在这里查看老师订购的模板、付款收据，并在确认收款后开放模板授权。', noPurchaseOrders:'目前没有订购申请。', confirmPayment:'确认收款并授权', rejectOrder:'拒绝', orderTeacher:'申请老师', orderPackage:'购买项目', orderGames:'模板授权', orderAmount:'金额', orderStatus:'状态', orderedAt:'申请时间', trialTemplates:'系统体验模板', trialTemplatesDesc:'注册批准后系统赠送 S001 与 S002 两个初阶体验模板，无需购买。', alreadyAuthorized:'已授权', notPurchasableTrial:'体验模板，无需购买'
  },
  en:{
    panelTitle:'Template Purchase & Payment Upload', panelDesc:'Select templates or a package, pay with Touch n Go / banking app by scanning the QR code, then upload the receipt. After the admin confirms payment, the selected templates will be unlocked.',
    selectPackage:'Select purchase option', single:'Buy individual templates', combo:'4+1 bundle offer', all:'All-template offer', singleHint:'Tick the individual templates you want to buy. Prices are calculated by level: Beginner RM20, Intermediate RM30, Advanced RM50.', comboHint:'Choose 4 templates from Beginner or Intermediate, plus 1 Advanced template. Special price RM100.', allHint:'Get all templates. Normal total RM790, special price RM300, including future new games.',
    beginnerIntermediate:'Beginner / Intermediate templates', advancedTemplate:'Advanced template', paymentTitle:'Payment method', paymentHint:'Pay by scanning with TNG or any DuitNow QR-supported banking / e-wallet app.', qrName:'Receiver: HEW KIM FOO', uploadReceipt:'Upload payment receipt', receiptRequired:'Please upload a receipt image first.', submitOrder:'Submit purchase request', noTemplateSelected:'Please select at least one template.', comboRule:'The 4+1 bundle requires 4 Beginner or Intermediate templates plus 1 Advanced template.', orderSubmitted:'Purchase request submitted. Please wait for admin payment confirmation.', amount:'Amount payable', myOrders:'My purchase records', noOrders:'No purchase records yet.', pendingPayment:'Pending payment confirmation', confirmed:'Confirmed and unlocked', rejected:'Rejected', orderId:'Order ID', receipt:'Payment receipt',
    adminOrdersTitle:'Purchase / Payment Review', adminOrdersDesc:'Admins can review teacher template purchases and payment receipts, then unlock the purchased templates after confirming payment.', noPurchaseOrders:'No purchase requests yet.', confirmPayment:'Confirm payment & unlock', rejectOrder:'Reject', orderTeacher:'Teacher', orderPackage:'Purchase', orderGames:'Templates', orderAmount:'Amount', orderStatus:'Status', orderedAt:'Submitted', trialTemplates:'System trial templates', trialTemplatesDesc:'After approval, teachers receive S001 and S002 Beginner trial templates free of charge.', alreadyAuthorized:'Authorized', notPurchasableTrial:'Trial template, no purchase needed'
  },
  ms:{
    panelTitle:'Pembelian Templat & Muat Naik Resit', panelDesc:'Pilih templat atau pakej, bayar menggunakan Touch n Go / aplikasi bank dengan mengimbas kod QR, kemudian muat naik resit. Selepas admin mengesahkan bayaran, templat yang dipilih akan dibuka.',
    selectPackage:'Pilih pilihan pembelian', single:'Beli templat individu', combo:'Promosi kombo 4+1', all:'Promosi semua templat', singleHint:'Tandakan templat individu yang ingin dibeli. Harga mengikut tahap: Asas RM20, Pertengahan RM30, Lanjutan RM50.', comboHint:'Pilih 4 templat daripada Asas atau Pertengahan, dan tambah 1 templat Lanjutan. Harga promosi RM100.', allHint:'Dapatkan semua templat. Jumlah asal RM790, harga promosi RM300, termasuk permainan baharu akan datang.',
    beginnerIntermediate:'Templat Asas / Pertengahan', advancedTemplate:'Templat Lanjutan', paymentTitle:'Cara bayaran', paymentHint:'Bayar dengan mengimbas menggunakan TNG atau mana-mana aplikasi bank / e-dompet yang menyokong DuitNow QR.', qrName:'Penerima: HEW KIM FOO', uploadReceipt:'Muat naik resit bayaran', receiptRequired:'Sila muat naik imej resit dahulu.', submitOrder:'Hantar permohonan pembelian', noTemplateSelected:'Sila pilih sekurang-kurangnya satu templat.', comboRule:'Kombo 4+1 memerlukan 4 templat Asas atau Pertengahan dan 1 templat Lanjutan.', orderSubmitted:'Permohonan pembelian telah dihantar. Sila tunggu pengesahan bayaran oleh admin.', amount:'Jumlah perlu dibayar', myOrders:'Rekod pembelian saya', noOrders:'Belum ada rekod pembelian.', pendingPayment:'Menunggu pengesahan bayaran', confirmed:'Disahkan dan dibuka', rejected:'Ditolak', orderId:'ID pesanan', receipt:'Resit bayaran',
    adminOrdersTitle:'Semakan Pembelian / Bayaran', adminOrdersDesc:'Admin boleh menyemak pembelian templat dan resit bayaran guru, kemudian membuka akses templat selepas bayaran disahkan.', noPurchaseOrders:'Belum ada permohonan pembelian.', confirmPayment:'Sahkan bayaran & buka akses', rejectOrder:'Tolak', orderTeacher:'Guru', orderPackage:'Pembelian', orderGames:'Templat', orderAmount:'Jumlah', orderStatus:'Status', orderedAt:'Dihantar', trialTemplates:'Templat percubaan sistem', trialTemplatesDesc:'Selepas diluluskan, guru menerima templat percubaan Asas S001 dan S002 secara percuma.', alreadyAuthorized:'Dibenarkan', notPurchasableTrial:'Templat percubaan, tidak perlu dibeli'
  }
};
function pc(key, vars={}){
  const lang = state?.lang || 'zh';
  const base = PURCHASE_COPY[lang] || PURCHASE_COPY.zh;
  return String(base[key] || PURCHASE_COPY.zh[key] || key).replace(/\{(\w+)\}/g, (_, k)=>Object.prototype.hasOwnProperty.call(vars,k)?vars[k]:'');
}

function L(){ return I18N[state.lang || 'zh'] || I18N.zh; }
function t(key){ const lang = state.lang || 'zh'; return UI_OVERRIDE[lang]?.[key] ?? L()[key] ?? I18N.zh[key] ?? key; }
function tt(key, vars={}){
  return String(t(key)).replace(/\{(\w+)\}/g, (_, k) => Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : '');
}
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

function paidAuthorizedGameIds(user){
  return [...new Set((user?.ownedGames || []).filter(id => !BASE_FREE_GAMES.includes(id)))];
}
function teacherUserCategoryKey(user){
  if(!user) return 'freePendingUser';
  if(user.role === 'admin') return 'admin';
  if(user.accountStatus === 'pending') return 'freePendingUser';
  if(user.package === 'all_access') return 'allAuthUser';
  if(user.package === 'pick5') return 'bundleAuthUser';
  const paidCount = paidAuthorizedGameIds(user).length;
  if(user.package === 'multi' || paidCount > 1) return 'multiAuthUser';
  if(user.package === 'single' || paidCount === 1) return 'singleAuthUser';
  return 'trialUser';
}
function teacherUserCategoryLabel(user){
  return t(teacherUserCategoryKey(user));
}
function updateTeacherPackageByOwnedGames(user){
  if(!user || user.role === 'admin') return;
  if(user.package === 'all_access' || user.package === 'pick5') return;
  const paidCount = paidAuthorizedGameIds(user).length;
  if(paidCount > 1) user.package = 'multi';
  else if(paidCount === 1) user.package = 'single';
  else user.package = 'free';
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
    purchaseOrders:[],
    users:[
      {
        id:'u_admin',
        email:'admin@lead.ai',
        username:'admin@lead.ai',
        password:'admin123',
        name:'系統管理員',
        role:'admin',
        accountStatus:'approved',
        disabled:false,
        ownedGames: GAME_DATA.map(g=>g.id),
        package:'all_access',
        profileCompleted:true,
        profile:{email:'admin@lead.ai', phone:'', chineseName:'系統管理員', englishName:'Admin', state:'Johor', orgTypes:['其他']}
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
        ownedGames: [],
        promoGift: BASE_FREE_GAMES,
        package:'free',
        profileCompleted:true,
        profile:{email:'teacher@example.com', phone:'', chineseName:'示範老師', englishName:'Demo Teacher', state:'Johor', orgTypes:['學校老師']}
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
      existing.package = 'free';
      existing.ownedGames = [];
      existing.promoGift = freeTrialTemplates();
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
      if(!Array.isArray(parsed.purchaseOrders)) parsed.purchaseOrders=[];
      parsed.users.forEach(u=>{
        if(!u.email) u.email = u.username && u.username.includes('@') ? u.username : (u.username==='admin'?'admin@lead.ai':`${u.username || 'teacher'}@example.com`);
        u.username = u.email;
        if(!u.profile) u.profile = {email:u.email, phone:'', chineseName:u.name || '', englishName:'', state:'Johor', orgTypes:[]};
        if(!u.profile.email) u.profile.email = u.email;
        if(!u.accountStatus) u.accountStatus = 'approved';
        if(typeof u.disabled !== 'boolean') u.disabled = false;
        if(u.role !== 'admin' && u.package === 'free' && Array.isArray(u.ownedGames) && u.ownedGames.length === 1 && !BASE_FREE_GAMES.includes(u.ownedGames[0])){
          u.ownedGames = [];
          u.promoGift = freeTrialTemplates();
        }
        if(u.role !== 'admin' && u.package === 'free' && u.promoGift && !Array.isArray(u.promoGift)){
          u.promoGift = freeTrialTemplates();
        }
        if(u.role !== 'admin') updateTeacherPackageByOwnedGames(u);
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

function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  }catch(e){
    console.error('Save state failed:', e);
    return false;
  }
}
function resetDemo(){ state = defaultState(); saveState(); render(); }
function getUser(){ return state.users.find(u=>u.id===state.currentUser) || null; }
function findGame(id){ return GAME_DATA.find(g=>g.id===id); }

function sampleTxtLabel(){ return ({zh:'题库范例 TXT', en:'Sample TXT', ms:'TXT Contoh'})[state.lang || 'zh'] || 'Sample TXT'; }
function loadSampleLabel(){ return ({zh:'载入题库范例', en:'Load sample bank', ms:'Muat contoh soalan'})[state.lang || 'zh'] || 'Load sample bank'; }
function sampleTextFor(gameId){ return SAMPLE_BANKS[gameId] || '# Sample question bank\n'; }
function sampleFilenameFor(gameId){ const g=findGame(gameId); return `${g?.code || gameId}_${gameId}_sample.txt`; }
function downloadSampleForGame(gameId){ downloadTextFile(sampleFilenameFor(gameId), sampleTextFor(gameId)); }
function loadSampleIntoMaker(gameId){
  const q = $('#makerQuestions');
  if(!q || !gameId) return;
  q.value = sampleTextFor(gameId);
  q.dataset.sampleGame = gameId;
}

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

  // Hard fallback for built-in admin account. This prevents old localStorage,
  // accidental disable, missing password, or migration issues from locking the admin out.
  if(normalized === 'admin@lead.ai' && passwordText === 'admin123'){
    const adminDefault = defaultState().users.find(u => u.role === 'admin');
    let admin = state.users.find(u => normalizeEmail(u.email || u.username) === 'admin@lead.ai');
    if(!admin){
      admin = {...adminDefault};
      state.users.push(admin);
    }
    admin.id = admin.id || 'u_admin';
    admin.email = 'admin@lead.ai';
    admin.username = 'admin@lead.ai';
    admin.password = 'admin123';
    admin.name = admin.name || adminDefault.name || 'Admin';
    admin.role = 'admin';
    admin.accountStatus = 'approved';
    admin.disabled = false;
    admin.package = 'all_access';
    admin.ownedGames = GAME_DATA.map(g=>g.id);
    admin.profileCompleted = true;
    admin.profile = admin.profile || adminDefault.profile;
    state.currentUser = admin.id;
    saveState();
    render();
    return {ok:true, msg:''};
  }

  // Hard fallback for demo teacher account.
  if(normalized === 'teacher@example.com' && passwordText === '123456'){
    const teacherDefault = defaultState().users.find(u => normalizeEmail(u.email) === 'teacher@example.com');
    let teacher = state.users.find(u => normalizeEmail(u.email || u.username) === 'teacher@example.com');
    if(!teacher){
      teacher = {...teacherDefault};
      state.users.push(teacher);
    }
    teacher.id = teacher.id || 'u_teacher';
    teacher.email = 'teacher@example.com';
    teacher.username = 'teacher@example.com';
    teacher.password = '123456';
    teacher.role = 'user';
    teacher.accountStatus = 'approved';
    teacher.disabled = false;
    teacher.package = 'free';
    teacher.ownedGames = [];
    teacher.promoGift = freeTrialTemplates();
    state.currentUser = teacher.id;
    saveState();
    render();
    return {ok:true, msg:''};
  }

  let user = state.users.find(u => normalizeEmail(u.email || u.username)===normalized && String(u.password || '').trim()===passwordText);
  if(!user) return {ok:false, msg:t('loginFail')};
  if(user.disabled) return {ok:false, msg:t('accountDisabled') || 'This account has been disabled. Please contact the administrator.'};
  if(user.accountStatus !== 'approved') return {ok:false, msg:t('accountPending') || 'Your account request has been submitted. Please wait for admin approval.'};
  state.currentUser = user.id;
  saveState();
  render();
  return {ok:true, msg:''};
}
function freeTrialTemplates(){ return [...BASE_FREE_GAMES]; }
function registerTeacherAccount(name, email, phone, password){
  const normalized = normalizeEmail(email);
  const teacherName = String(name || '').trim();
  const phoneText = String(phone || '').trim();
  const passwordText = String(password || '').trim();
  const c = authCopy();
  if(!teacherName || !normalized || !phoneText || !passwordText) return {ok:false, msg:t('fillAll')};
  if(!isValidEmail(normalized)) return {ok:false, msg:c.invalidEmail};
  if(passwordText.length < 6) return {ok:false, msg: state.lang==='en' ? 'Password must be at least 6 characters.' : (state.lang==='ms' ? 'Kata laluan mesti sekurang-kurangnya 6 aksara.' : '登录密码至少需要 6 个字符。')};
  if(state.users.some(u => normalizeEmail(u.email || u.username)===normalized)) return {ok:false, msg:t('accountExists')};
  const trialGames = freeTrialTemplates();
  state.users.push({
    id:'u_'+Date.now(),
    email:normalized,
    username:normalized,
    password:passwordText,
    name:teacherName,
    role:'user',
    accountStatus:'pending',
    disabled:false,
    ownedGames:[],
    promoGift:trialGames,
    package:'free',
    profileCompleted:false,
    profile:{email:normalized, phone:phoneText, chineseName:teacherName, englishName:'', state:'Johor', orgTypes:[]}
  });
  saveState();
  return {ok:true, msg:c.registerSuccess};
}
function register(email, password){
  return registerTeacherAccount(email, email, '', password);
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


function authCopy(){
  const lang = state.lang || 'zh';
  return TEMPLATE_COPY[lang] || TEMPLATE_COPY.zh;
}
function templateInfo(id){
  const lang = state.lang || 'zh';
  return (TEMPLATE_DETAILS[lang] && TEMPLATE_DETAILS[lang][id]) || TEMPLATE_DETAILS.zh[id] || {subjects:'', play:'', setup:'', best:''};
}
function renderLandingStats(c){
  return `<div class="template-stat-grid">${c.stats.map(item=>`<div class="template-stat"><b>${item[0]}</b><span>${item[1]}</span></div>`).join('')}</div>`;
}
function renderLandingSteps(c){
  return `<section class="template-section template-steps-section"><div class="template-section-head"><h2>${c.stepsTitle}</h2></div><div class="template-step-grid">${c.steps.map((s,i)=>`<div class="template-step"><em>${i+1}</em><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div></section>`;
}
function renderTemplateDirectory(c){
  return `<section id="templateCatalog" class="template-section template-catalog-section">
    <div class="template-section-head"><div><h2>${c.catalogTitle}</h2><p>${c.catalogSub}</p></div></div>
    <div class="template-level-list">
      ${LEVEL_ORDER.map(level=>{
        const info = levelText(level);
        const games = (GAME_LEVELS[level] || []).map(id=>findGame(id)).filter(Boolean);
        return `<div class="template-level-block ${level}">
          <div class="template-level-title"><div><b>${info.label}</b><span>${info.desc}</span></div><em>${games.length}</em></div>
          <div class="template-detail-list">
            ${games.map(g=>{
              const d = templateInfo(g.id);
              return `<details class="template-detail-card">
                <summary><span class="template-code ${level}">${g.code}</span><span class="template-icon">${g.icon || '🎮'}</span><strong>${gameName(g.id)}</strong><small>${gameDesc(g.id)}</small></summary>
                <div class="template-detail-body">
                  <div><b>${c.subject}</b><p>${d.subjects}</p></div>
                  <div><b>${c.play}</b><p>${d.play}</p></div>
                  <div><b>${c.setup}</b><p>${d.setup}</p></div>
                  <div><b>${c.best}</b><p>${d.best}</p></div>
                </div>
              </details>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}
function renderPurchaseLogin(c){
  return `<section id="loginPurchase" class="template-section login-purchase-section">
    <div class="template-section-head"><div><h2>${c.plansTitle}</h2><p>${c.ctaText}</p></div></div>
    <div class="purchase-login-grid">
      <div class="plan-grid">${c.plans.map(p=>`<div class="plan-card"><h3>${p[0]}</h3><b>${p[1]}</b><p>${p[2]}</p></div>`).join('')}</div>
      <div class="auth-right formal-auth-right landing-login-panel">
        <div class="formal-auth-top"><h3>${c.loginTitle}</h3></div>
        <div class="formal-form-block">
          <input id="loginEmail" class="input" placeholder="${c.email}" />
          <input id="loginPassword" class="input" placeholder="${c.password}" type="password" />
          <button id="loginBtn" type="button" class="btn formal-primary-btn" onclick="handleLoginClick()">${c.login}</button>
          <p id="loginMsg" class="muted formal-msg"></p>
        </div>
        <div class="formal-divider"></div>
        <h3 class="formal-section-title">${c.registerTitle}</h3>
        <div class="formal-form-block compact">
          <input id="regName" class="input" placeholder="${c.name}" />
          <input id="regEmail" class="input" placeholder="${c.email}" />
          <input id="regPhone" class="input" placeholder="${c.phone}" />
          <input id="regPassword" class="input" placeholder="${c.password}" type="password" />
          <div class="promo-register-note">${c.promoNote}</div>
          <button id="registerBtn" type="button" class="btn maker formal-secondary-btn" onclick="handleRegisterClick()">${c.apply}</button>
          <p id="regMsg" class="muted formal-msg"></p>
        </div>
      </div>
    </div>
  </section>`;
}
function renderAuth(){
  const c = authCopy();
  return `
  <div class="template-landing-wrap">
    <header class="template-nav">
      <div class="template-brand"><div class="logo formal-logo">🎮</div><div><b>${c.title}</b><span>${c.subtitle}</span></div></div>
      <div class="template-nav-actions">${langSelect('authLangSelect')}<a class="btn secondary small" href="#templateCatalog">${c.primary}</a><a class="btn small" href="#loginPurchase">${c.secondary}</a></div>
    </header>
    <main class="template-landing-main">
      <section class="template-hero">
        <div class="template-hero-copy">
          <div class="formal-kicker">${c.kicker}</div>
          <h1>${c.title}</h1>
          <p>${c.heroText}</p>
          ${renderLandingStats(c)}
          <div class="template-hero-actions"><a class="btn big" href="#templateCatalog">${c.primary}</a><a class="btn secondary big" href="#loginPurchase">${c.secondary}</a></div>
        </div>
        <div class="template-hero-card">
          <div class="template-preview-window"><div class="preview-toolbar"><i></i><i></i><i></i></div><div class="preview-board"><span>🧩</span><span>🎡</span><span>🏰</span><span>🔎</span></div></div>
          <h3>${c.badge}</h3><p>${c.subtitle}</p>
        </div>
      </section>
      ${renderLandingSteps(c)}
      ${renderTemplateDirectory(c)}
      <section class="template-cta-band"><h2>${c.ctaTitle}</h2><p>${c.ctaText}</p><a class="btn big" href="#loginPurchase">${c.secondary}</a></section>
      ${renderPurchaseLogin(c)}
    </main>
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
      <h3>${tt('authorizedSummaryTitle', {n: available.length})}</h3>
      <p>${t('authorizedSummaryDesc')}</p>
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
        <h3>${completed?t('profileCompletedTitle'):t('profileIncompleteTitle')}</h3>
        <p>${completed?t('profileCompletedDesc'):t('profileIncompleteDesc')}</p>
      </div>
      <span>${completed?t('completed'):t('incomplete')}</span>
    </div>
    <div class="profile-form">
      <input id="profileEmail" class="input" value="${user.email}" disabled />
      <input id="profilePhone" class="input" placeholder="${t('phonePlaceholder')}" value="${p.phone||''}" />
      <input id="profileChineseName" class="input" placeholder="${t('namePlaceholder')}" value="${p.chineseName||''}" />
      <input id="profileEnglishName" class="input" placeholder="${t('englishNamePlaceholder')}" value="${p.englishName||''}" />
      <select id="profileState" class="select">
        ${MALAYSIA_STATES.map(s=>`<option value="${s}" ${p.state===s?'selected':''}>${s}</option>`).join('')}
      </select>
      <div class="org-checks">
        ${ORG_TYPES.map(type=>`<label><input type="checkbox" class="profileOrgType" value="${type}" ${(p.orgTypes||[]).includes(type)?'checked':''}> ${type}</label>`).join('')}
      </div>
      <button id="saveProfileBtn" class="btn good">${t('saveTeacherProfile')}</button>
    </div>
  </div>`;
}
function renderFeedbackPanel(){
  return `<div class="feedback-panel">
    <div class="filter-row">
      <h3>${t('feedbackTitle')}</h3>
      <div class="muted">${t('feedbackHint')}</div>
    </div>
    <div class="feedback-form">
      <input id="feedbackGameCode" class="input" placeholder="${t('feedbackGameCodePlaceholder')}" />
      <textarea id="feedbackMessage" class="input" placeholder="${t('feedbackMessagePlaceholder')}"></textarea>
      <button id="submitFeedbackBtn" class="btn maker">${t('submitFeedback')}</button>
    </div>
  </div>`;
}

function gamePrice(gameId){
  const level = gameLevel(gameId);
  if(level === 'beginner') return 20;
  if(level === 'intermediate') return 30;
  if(level === 'advanced') return 50;
  return 20;
}
function formatGameLabel(id){ return `${gameCode(id)}｜${gameName(id)}`; }
function purchasableGamesForUser(user){ return GAME_DATA.filter(g => !g.free && !userHasAccess(user, g.id)); }
function teacherOrders(user){ return (state.purchaseOrders || []).filter(o => o.teacherId === user?.id); }
function orderStatusLabel(status){
  if(status === 'confirmed') return pc('confirmed');
  if(status === 'rejected') return pc('rejected');
  return pc('pendingPayment');
}
function orderPackageLabel(o){
  if(o.packageType === 'all_access') return `${pc('all')}｜RM300`;
  if(o.packageType === 'combo') return `${pc('combo')}｜RM100`;
  return `${pc('single')}｜RM${o.amount}`;
}
function orderGamesText(o){
  if(o.packageType === 'all_access') return GAME_DATA.filter(g=>!g.free).map(g=>formatGameLabel(g.id)).join('，');
  return (o.gameIds || []).map(formatGameLabel).join('，');
}
function calcOrderAmount(type, ids){
  if(type === 'all_access') return 300;
  if(type === 'combo') return 100;
  return [...new Set(ids || [])].reduce((sum,id)=>sum+gamePrice(id),0);
}
function renderGamePurchaseChecks(games, className){
  if(!games.length) return `<div class="muted">${pc('alreadyAuthorized')}</div>`;
  return `<div class="purchase-check-grid">${games.map(g=>`<label class="purchase-check"><input type="checkbox" class="${className}" value="${g.id}"> <b>${gameCode(g.id)}</b><span>${gameName(g.id)}</span><em>RM${gamePrice(g.id)}</em></label>`).join('')}</div>`;
}
function renderMyOrders(user){
  const orders = teacherOrders(user).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));
  return `<div class="my-orders-box"><h4>${pc('myOrders')}</h4>${orders.length ? orders.map(o=>`<div class="order-mini ${o.status}"><b>${pc('orderId')}: ${o.id}</b><span>${orderPackageLabel(o)}</span><span>${pc('orderStatus')}: ${orderStatusLabel(o.status)}</span></div>`).join('') : `<div class="muted">${pc('noOrders')}</div>`}</div>`;
}
function renderPurchasePanel(user){
  if(!user || user.role === 'admin') return '';
  const locked = purchasableGamesForUser(user);
  const singleGames = locked;
  const biGames = locked.filter(g => ['beginner','intermediate'].includes(gameLevel(g.id)));
  const advGames = locked.filter(g => gameLevel(g.id) === 'advanced');
  return `<div class="card purchase-panel" id="purchasePanel">
    <div class="filter-row"><div><h3>${pc('panelTitle')}</h3><div class="muted">${pc('panelDesc')}</div></div></div>
    <div class="notice trial-notice"><b>${pc('trialTemplates')}</b><br>${pc('trialTemplatesDesc')}</div>
    <div class="purchase-layout">
      <div class="purchase-left">
        <h4>${pc('selectPackage')}</h4>
        <div class="package-tabs">
          <label><input type="radio" name="purchaseType" value="single" checked> ${pc('single')}</label>
          <label><input type="radio" name="purchaseType" value="combo"> ${pc('combo')}</label>
          <label><input type="radio" name="purchaseType" value="all_access"> ${pc('all')}</label>
        </div>
        <div class="package-box" data-package-box="single"><p>${pc('singleHint')}</p>${renderGamePurchaseChecks(singleGames,'purchase-single-game')}</div>
        <div class="package-box hidden" data-package-box="combo"><p>${pc('comboHint')}</p><h5>${pc('beginnerIntermediate')}</h5>${renderGamePurchaseChecks(biGames,'purchase-combo-bi')}<h5>${pc('advancedTemplate')}</h5>${renderGamePurchaseChecks(advGames,'purchase-combo-adv')}</div>
        <div class="package-box hidden" data-package-box="all_access"><p>${pc('allHint')}</p><b class="purchase-amount">RM300</b></div>
      </div>
      <div class="purchase-right">
        <h4>${pc('paymentTitle')}</h4>
        <p class="muted">${pc('paymentHint')}</p>
        <div class="qr-card"><img src="assets/tng_payment_qr.png" alt="Touch n Go QR"><b>${pc('qrName')}</b></div>
        <label class="receipt-upload"><span>${pc('uploadReceipt')}</span><input id="purchaseReceiptInput" type="file" accept="image/*"></label>
        <img id="receiptPreview" class="receipt-preview hidden" alt="receipt preview">
        <div id="purchaseAmountPreview" class="purchase-amount-preview">${pc('amount')}: RM0</div>
        <button id="submitPurchaseBtn" class="btn maker block">${pc('submitOrder')}</button>
        <div id="purchaseMsg" class="purchase-msg">${lastPurchaseMessage || ''}</div>
      </div>
    </div>
    ${renderMyOrders(user)}
  </div>`;
}
function getSelectedPurchase(){
  const type = document.querySelector('input[name="purchaseType"]:checked')?.value || 'single';
  let ids=[];
  if(type === 'single') ids = $$('.purchase-single-game:checked').map(x=>x.value);
  if(type === 'combo') ids = [...$$('.purchase-combo-bi:checked').map(x=>x.value), ...$$('.purchase-combo-adv:checked').map(x=>x.value)];
  if(type === 'all_access') ids = GAME_DATA.filter(g=>!g.free).map(g=>g.id);
  return {type, ids:[...new Set(ids)], amount:calcOrderAmount(type, ids)};
}
function validatePurchaseSelection(sel){
  if(sel.type === 'all_access') return {ok:true};
  if(sel.type === 'single') return sel.ids.length ? {ok:true} : {ok:false, msg:pc('noTemplateSelected')};
  const bi = sel.ids.filter(id=>['beginner','intermediate'].includes(gameLevel(id))).length;
  const adv = sel.ids.filter(id=>gameLevel(id)==='advanced').length;
  if(bi !== 4 || adv !== 1) return {ok:false, msg:pc('comboRule')};
  return {ok:true};
}
function updatePurchaseAmountPreview(){
  const sel = getSelectedPurchase();
  const el = $('#purchaseAmountPreview');
  if(el) el.textContent = `${pc('amount')}: RM${sel.amount}`;
}
function handleReceiptFileChange(ev){
  const file = ev.target.files?.[0];
  pendingReceiptData = null; pendingReceiptName = ''; lastPurchaseMessage = '';
  const preview = $('#receiptPreview');
  const msg = $('#purchaseMsg');
  if(msg) msg.textContent = '';
  if(!file){ if(preview) preview.classList.add('hidden'); return; }
  pendingReceiptName = file.name;
  const reader = new FileReader();
  reader.onload = () => {
    const raw = String(reader.result || '');
    const img = new Image();
    img.onload = () => {
      const maxSide = 900;
      const ratio = Math.min(1, maxSide / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width * ratio));
      const h = Math.max(1, Math.round(img.height * ratio));
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      pendingReceiptData = canvas.toDataURL('image/jpeg', 0.72);
      if(preview){ preview.src = pendingReceiptData; preview.classList.remove('hidden'); }
    };
    img.onerror = () => {
      pendingReceiptData = raw;
      if(preview){ preview.src = pendingReceiptData; preview.classList.remove('hidden'); }
    };
    img.src = raw;
  };
  reader.readAsDataURL(file);
}
function submitPurchaseOrder(){
  const user = getUser();
  const msg = $('#purchaseMsg');
  const btn = $('#submitPurchaseBtn');
  if(msg) msg.textContent = '';
  const sel = getSelectedPurchase();
  const valid = validatePurchaseSelection(sel);
  if(!valid.ok){ if(msg) msg.textContent = valid.msg; return; }
  if(!pendingReceiptData){ if(msg) msg.textContent = pc('receiptRequired'); return; }
  if(btn) btn.disabled = true;
  const order = {
    id:'PO'+Date.now(), teacherId:user.id, teacherName:user.name, teacherEmail:user.email,
    teacherPhone:user.profile?.phone || '', packageType:sel.type, gameIds:sel.ids, amount:sel.amount,
    receiptData:pendingReceiptData, receiptName:pendingReceiptName, status:'pending', createdAt:new Date().toLocaleString()
  };
  if(!Array.isArray(state.purchaseOrders)) state.purchaseOrders=[];
  state.purchaseOrders.push(order);
  pendingReceiptData=null; pendingReceiptName='';
  lastPurchaseMessage = pc('orderSubmitted');
  const saved = saveState();
  if(!saved){
    state.purchaseOrders = state.purchaseOrders.filter(o => o.id !== order.id);
    lastPurchaseMessage = '';
    if(msg) msg.textContent = (state.lang==='en' ? 'The receipt image is too large. Please upload a smaller image.' : state.lang==='ms' ? 'Imej resit terlalu besar. Sila muat naik imej yang lebih kecil.' : '收据图片太大，请上传较小的图片。');
    if(btn) btn.disabled = false;
    return;
  }
  render();
  setTimeout(()=>{
    const panel = $('#purchasePanel'); if(panel) panel.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}
function renderPurchaseOrdersPanel(){
  const orders = [...(state.purchaseOrders || [])].sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));
  return `<div class="purchase-admin-box"><h3>${pc('adminOrdersTitle')}</h3><div class="muted">${pc('adminOrdersDesc')}</div>
    ${orders.length ? `<div class="purchase-order-list">${orders.map(o=>`<div class="purchase-order ${o.status}">
      <div><b>${pc('orderId')}: ${o.id}</b><br><span>${pc('orderTeacher')}: ${o.teacherName}｜${o.teacherEmail}｜${o.teacherPhone||''}</span><br><span>${pc('orderedAt')}: ${o.createdAt}</span></div>
      <div><b>${pc('orderPackage')}</b><p>${orderPackageLabel(o)}</p><b>${pc('orderGames')}</b><p>${orderGamesText(o)}</p></div>
      <div><b>${pc('orderAmount')}</b><p>RM${o.amount}</p><b>${pc('orderStatus')}</b><p>${orderStatusLabel(o.status)}</p></div>
      <div>${o.receiptData?`<button type="button" class="receipt-view-btn" data-order="${o.id}" title="${state.lang==='en'?'View receipt':state.lang==='ms'?'Lihat resit':'查看收据'}"><img class="admin-receipt" src="${o.receiptData}" alt="${state.lang==='en'?'Payment receipt':state.lang==='ms'?'Resit bayaran':'付款收据'}"><span>${state.lang==='en'?'View receipt':state.lang==='ms'?'Lihat resit':'查看收据'}</span></button>`:`<span class="muted">${pc('receiptRequired')}</span>`}</div>
      <div class="account-actions">${o.status==='pending'?`<button class="btn good small approve-purchase-btn" data-order="${o.id}">${pc('confirmPayment')}</button><button class="btn danger small reject-purchase-btn" data-order="${o.id}">${pc('rejectOrder')}</button>`:''}</div>
    </div>`).join('')}</div>` : `<div class="muted">${pc('noPurchaseOrders')}</div>`}
  </div>`;
}
function receiptViewerText(key){
  const dict = {
    zh:{title:'付款收据查看', close:'关闭', open:'新视窗打开', hint:'管理员可放大查看老师上传的付款收据。'},
    en:{title:'Payment Receipt Viewer', close:'Close', open:'Open in new window', hint:'Admins can enlarge and review the uploaded payment receipt.'},
    ms:{title:'Paparan Resit Bayaran', close:'Tutup', open:'Buka dalam tetingkap baharu', hint:'Admin boleh membesarkan dan menyemak resit bayaran yang dimuat naik.'}
  };
  return (dict[state.lang] || dict.zh)[key] || key;
}
function openReceiptViewer(orderId){
  const order = (state.purchaseOrders || []).find(o => o.id === orderId);
  if(!order || !order.receiptData) return;
  const existing = document.getElementById('receiptViewerLayer');
  if(existing) existing.remove();
  const layer = document.createElement('div');
  layer.id = 'receiptViewerLayer';
  layer.className = 'receipt-viewer-layer';
  layer.innerHTML = `
    <div class="receipt-viewer-card" role="dialog" aria-modal="true">
      <div class="receipt-viewer-head">
        <div>
          <h3>${receiptViewerText('title')}</h3>
          <p>${receiptViewerText('hint')}</p>
          <small>${pc('orderId')}: ${order.id} ｜ ${order.teacherName || ''} ｜ RM${order.amount || ''}</small>
        </div>
        <button type="button" class="btn secondary small" id="closeReceiptViewerBtn">${receiptViewerText('close')}</button>
      </div>
      <div class="receipt-viewer-body"><img src="${order.receiptData}" alt="${pc('receipt')}"></div>
      <div class="receipt-viewer-actions">
        <button type="button" class="btn secondary" id="openReceiptNewTabBtn">${receiptViewerText('open')}</button>
      </div>
    </div>`;
  document.body.appendChild(layer);
  const close = () => layer.remove();
  document.getElementById('closeReceiptViewerBtn').onclick = close;
  layer.onclick = e => { if(e.target === layer) close(); };
  document.getElementById('openReceiptNewTabBtn').onclick = () => {
    const w = window.open();
    if(w){
      w.document.write(`<title>${receiptViewerText('title')}</title><body style="margin:0;background:#0f172a;display:grid;place-items:center;min-height:100vh"><img src="${order.receiptData}" style="max-width:100%;max-height:100vh;object-fit:contain"></body>`);
      w.document.close();
    } else {
      window.open(order.receiptData, '_blank');
    }
  };
}
function grantOrderAccess(order){
  const user = state.users.find(u=>u.id===order.teacherId); if(!user) return;
  if(order.packageType === 'all_access'){
    user.package='all_access';
    user.ownedGames = GAME_DATA.filter(g=>!g.free).map(g=>g.id);
  } else {
    const set = new Set(user.ownedGames || []);
    (order.gameIds || []).forEach(id=>set.add(id));
    user.ownedGames = [...set];
    if(order.packageType === 'combo') user.package='pick5';
    else updateTeacherPackageByOwnedGames(user);
  }
}
function approvePurchaseOrder(orderId){
  const o = (state.purchaseOrders||[]).find(x=>x.id===orderId); if(!o) return;
  o.status='confirmed'; o.confirmedAt=new Date().toLocaleString();
  grantOrderAccess(o); saveState(); render();
}
function rejectPurchaseOrder(orderId){
  const o = (state.purchaseOrders||[]).find(x=>x.id===orderId); if(!o) return;
  o.status='rejected'; o.rejectedAt=new Date().toLocaleString();
  saveState(); render();
}
function renderDashboard(user){
  const available = availableGamesForUser(user);
  const locked = lockedGamesForUser(user);
  const roleText = user.role==='admin' ? t('admin') : t('teacherRole');
  return `
  <div class="page simplified-page hybrid-auth-mode">
    <div class="hero">
      <div class="brand">
        <div class="logo">🎮</div>
        <div>
          <h1>${t('appTitle')}</h1>
          <div class="sub">${t('dashboardTagline')}</div>
        </div>
      </div>
      <div class="top-actions">
        ${langSelect('dashLangSelect')}
        <div class="pill teacher-mode-pill">${user.name}（${roleText}）</div>
        <button id="logoutBtn" class="btn secondary">${t('logout')}</button>
      </div>
    </div>

    <div class="authorized-summary">
      <div>
        <h3>${user.role==='admin' ? t('adminDashboardTitle') : t('teacherLibraryTitle')}｜${tt('currentlyAvailable', {n: available.length})}</h3>
        <p>${user.role==='admin' ? t('adminDashboardDesc') : t('teacherDashboardDesc')}</p>
      </div>
      <div class="summary-game-list">${available.map(g=>`<span class="summary-game ${gameLevel(g.id)}">${gameCode(g.id)}｜${gameName(g.id)}</span>`).join('')}</div>
    </div>

    ${user.role==='admin' ? renderAdminPanel() : ''}
    ${user.role!=='admin' ? renderTeacherBackendPanel() : ''}
    ${user.role!=='admin' ? renderPurchasePanel(user) : ''}

    <div class="teacher-simple-layout">
      <div class="card main simplified-main">
        <div class="filter-row">
          <h3>${t('gameLibraryTitle')}</h3>
          <div class="muted">${t('gameLibraryDesc')}</div>
        </div>
        ${renderGameGroups(available, true, user)}
        ${locked.length ? `<div class="filter-row locked-title"><h3>${tt('lockedGamesCount', {n: locked.length})}</h3><div class="muted">${t('lockedGamesDesc')}</div></div>${renderGameGroups(locked, false, user)}`:''}
        ${renderFeedbackPanel()}
      </div>
    </div>
  </div>`;
}

function renderTeacherBackendPanel(){
  const currentUser = getUser();
  const backendGames = availableGamesForUser(currentUser);
  const firstGame = backendGames[0];
  if(!firstGame){
    return `<div id="makerPanel" class="card teacher-backend-panel"><div class="filter-row"><h3>${t('teacherBackendTitle')}</h3></div><div class="notice">${t('noAuthorizedGamesForBackend') || 'No authorized templates available yet.'}</div></div>`;
  }
  if(!makerSelectedGameId || !backendGames.some(g=>g.id===makerSelectedGameId)) makerSelectedGameId = firstGame.id;
  return `
  <div id="makerPanel" class="card teacher-backend-panel">
    <div class="filter-row">
      <div>
        <h3>${t('teacherBackendTitle')}</h3>
        <div class="muted">${t('teacherBackendDesc')}</div>
      </div>
      <button id="closeMakerBtn" class="btn secondary small">${t('collapseBackend')}</button>
    </div>
    <div class="backend-grid">
      <div class="backend-field">
        <label>${t('selectGameTemplate')}</label>
        <select id="makerGameSelect" class="select">
          ${backendGames.map(g=>`<option value="${g.id}" ${g.id===makerSelectedGameId?'selected':''}>${gameCode(g.id)}｜${gameName(g.id)}</option>`).join('')}
        </select>
        <small class="backend-hint">${t('authorizedOnlyHint')}</small>
      </div>
      <div class="backend-field">
        <label>${t('classGameTitle')}</label>
        <input id="makerTitleInput" class="input" placeholder="${t('titlePlaceholder')}" />
      </div>
      <div class="backend-field">
        <label>${t('subjectGrade')}</label>
        <input id="makerSubject" class="input" placeholder="${t('subjectPlaceholder')}" />
      </div>
      <div class="backend-field full">
        <label>${t('questionMaterialSettings')}</label>
        <textarea id="makerQuestions" class="input maker-textarea" placeholder="${t('questionsPlaceholder')}"></textarea>
      </div>
    </div>
    <div class="notice backend-notice">
      ${t('questionFormatNotice')}
    </div>
    <div class="backend-actions">
      <button id="loadSampleTxtBtn" class="btn secondary">${loadSampleLabel()}</button><button id="downloadMakerTxtBtn" class="btn secondary">${t('downloadQuestionTxt')}</button>
      <button id="generateTemplateZipBtn" class="btn download">${t('generateDownloadPack')}</button>
      ${currentUser?.role==='admin' ? `<button id="downloadAllOfflineBtn" class="btn maker">${t('downloadAll')}</button>` : ''}
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
        ${g.free ? `<span class="tag free-trial">${t('freeExperienceTemplate')}</span>` : ''}
        ${accessible?`<span class="tag">${t('available')}</span>`:`<span class="tag lock">${t('locked')}</span>`}
      </div>
      <div class="spacer"></div>
      ${accessible
        ? `<div class="card-actions"><button class="btn whiteboard open-game-btn" data-game="${g.id}">${t('whiteboardClass')}</button><button class="btn maker small make-game-btn" data-game="${g.id}">${t('applyTemplate')}</button><button class="btn secondary small sample-txt-btn" data-game="${g.id}">${sampleTxtLabel()}</button><button class="btn download small generate-game-btn" data-game="${g.id}">${t('generateGamePack')}</button></div>`
        : `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn secondary small buy-single-btn" data-game="${g.id}">${t('singleBuy')}</button><button class="btn small buy-pick5-fast-btn" data-game="${g.id}">${t('addPick5')}</button></div>`}
    </div>`;
}


function renderAdminPanel(){
  const teachers = state.users.filter(u=>u.role!=='admin');
  const pendingCount = teachers.filter(u=>u.accountStatus==='pending').length;
  const feedback = state.feedback || [];
  return `
  <div id="adminPanel" class="card admin-account-panel">
    <div class="filter-row"><h3>${t('adminAccountPanelTitle')}</h3><div class="muted">${tt('adminAccountStats', {pending: pendingCount, total: teachers.length})}</div></div>
    <div class="notice">${t('adminAccountNotice')}</div>
    ${renderPurchaseOrdersPanel()}

    <div class="add-teacher-box">
      <h4>${t('addTeacherAccount')}</h4>
      <div class="backend-grid admin-add-grid">
        <input id="newTeacherName" class="input" placeholder="${t('teacherNamePlaceholder')}" />
        <input id="newTeacherEmail" class="input" placeholder="${t('teacherEmailPlaceholder')}" />
        <input id="newTeacherPhone" class="input" placeholder="${t('phonePlaceholder')}" />
        <input id="newTeacherPassword" class="input" placeholder="${t('initialPasswordPlaceholder')}" />
        <select id="newTeacherPackage" class="select">
          <option value="free">${t('trialUser')}</option>
          <option value="single">${t('singleAuthUser')}</option>
          <option value="multi">${t('multiAuthUser')}</option>
          <option value="pick5">${t('bundleAuthUser')}</option>
          <option value="all_access">${t('allAuthUser')}</option>
        </select>
      </div>
      <button id="addTeacherBtn" class="btn maker small">${t('addTeacher')}</button>
      <span id="addTeacherMsg" class="muted"></span>
    </div>

    <table class="admin-table account-table">
      <thead><tr><th>${t('teacherAccount')}</th><th>${t('status')}</th><th>${t('package')}</th><th>${t('authorizedGames')}</th><th>${t('operation')}</th></tr></thead>
      <tbody>
      ${teachers.map(u=>`<tr class="${u.accountStatus==='pending'?'pending-row':''} ${u.disabled?'disabled-row':''}">
        <td><b>${u.name}</b><br><span class="muted">${u.email || u.username}</span><br><span class="muted">${u.profile?.phone ? t('phoneLabel') + u.profile.phone : t('phoneNotProvided')}</span>${u.promoGift ? `<br><span class="muted">${t('promoGiftLabel')}${(Array.isArray(u.promoGift)?u.promoGift:[u.promoGift]).map(id=>`${gameCode(id)}｜${gameName(id)}`).join('，')}</span>` : ''}</td>
        <td>${accountStatusBadge(u)}</td>
        <td>
          <div class="user-category-current">${teacherUserCategoryLabel(u)}</div>
          <select class="select admin-package-select" data-user="${u.id}">
            <option value="free" ${u.package==='free'?'selected':''}>${t('trialUser')}</option>
            <option value="single" ${u.package==='single'?'selected':''}>${t('singleAuthUser')}</option>
            <option value="multi" ${u.package==='multi'?'selected':''}>${t('multiAuthUser')}</option>
            <option value="pick5" ${u.package==='pick5'?'selected':''}>${t('bundleAuthUser')}</option>
            <option value="all_access" ${u.package==='all_access'?'selected':''}>${t('allAuthUser')}</option>
          </select>
        </td>
        <td>${renderGameChecks(u)}</td>
        <td class="account-actions">
          <button class="btn small save-user-btn" data-user="${u.id}">${t('save')}</button>
          ${u.accountStatus==='pending'?`<button class="btn good small approve-teacher-btn" data-user="${u.id}">${t('approve')}</button>`:''}
          <button class="btn secondary small grant-all-btn" data-user="${u.id}">${t('selectAll')}</button>
          <button class="btn secondary small reset-password-btn" data-user="${u.id}">${t('resetPassword')}</button>
          <button class="btn ${u.disabled?'maker':'danger'} small disable-teacher-btn" data-user="${u.id}">${u.disabled?t('enableAccount'):t('disableAccount')}</button>
          <button class="btn danger small delete-teacher-btn" data-user="${u.id}">${t('deleteAccount')}</button>
        </td>
      </tr>`).join('')}
      </tbody>
    </table>

    <div class="feedback-admin">
      <h3>${t('teacherFeedbackTitle')}</h3>
      ${feedback.length ? feedback.map(f=>`<div class="feedback-item">
        <b>${f.gameCode || t('noGameSpecified')}</b>
        <span>${f.date}｜${f.userName || ''}｜${f.userEmail || ''}</span>
        <p>${f.message}</p>
      </div>`).join('') : `<div class="muted">${t('noFeedback')}</div>`}
    </div>
  </div>`;
}


function accountStatusBadge(u){
  if(u.disabled) return `<span class="status-badge disabled">${t('disabledStatus')}</span>`;
  if(u.accountStatus==='pending') return `<span class="status-badge pending">${t('pendingStatus')}</span>`;
  return `<span class="status-badge approved">${t('approvedStatus')}</span>`;
}


function renderGameChecks(user){
  return `<div class="admin-auth-games">${LEVEL_ORDER.map(level=>{
    const group = GAME_DATA.filter(g=>!g.free && gameLevel(g.id)===level);
    if(!group.length) return '';
    return `<div class="admin-auth-level ${level}">
      <div class="admin-auth-level-head"><b>${levelText(level).label}</b><em>${group.length}</em></div>
      <div class="admin-auth-game-list">${group.map(g=>`<label class="admin-game-check-card ${level}">
        <input type="checkbox" class="admin-game-check" data-user="${user.id}" data-game="${g.id}" ${(user.ownedGames||[]).includes(g.id)?'checked':''}/>
        <span class="admin-game-code">${gameCode(g.id)}</span>
        <span class="admin-game-name">${gameName(g.id)}</span>
        <span class="admin-game-price">RM${gamePrice(g.id)}</span>
      </label>`).join('')}</div>
    </div>`;
  }).join('')}</div>`;
}
function packageName(pkg){ return packageLabel(pkg); }
function packageDesc(pkg){
  if(pkg==='single') return t('singleAuthUser');
  if(pkg==='multi') return t('multiAuthUser');
  if(pkg==='pick5') return t('bundleAuthUser');
  if(pkg==='all_access') return t('allAuthUser');
  return t('trialUser');
}
function packageLabel(pkg){
  if(pkg==='all_access') return t('allAuthUser');
  if(pkg==='pick5') return t('bundleAuthUser');
  if(pkg==='multi') return t('multiAuthUser');
  if(pkg==='single') return t('singleAuthUser');
  return t('trialUser');
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
  const phone = $('#regPhone')?.value?.trim() || '';
  const password = $('#regPassword')?.value?.trim() || '';
  const msg = $('#regMsg');
  if(!name || !email || !phone || !password){ if(msg) msg.textContent=t('fillAll'); return; }
  const result = registerTeacherAccount(name, email, phone, password);
  if(msg) msg.textContent = result.msg;
  if(result.ok){
    if($('#regName')) $('#regName').value='';
    if($('#regEmail')) $('#regEmail').value='';
    if($('#regPhone')) $('#regPhone').value='';
    if($('#regPassword')) $('#regPassword').value='';
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
  const phone = $('#newTeacherPhone')?.value?.trim() || '';
  const password = $('#newTeacherPassword')?.value?.trim() || '123456';
  const pkg = $('#newTeacherPackage')?.value || 'all_access';
  const normalized = normalizeEmail(email);
  const msg = $('#addTeacherMsg');
  if(!name || !normalized){ if(msg) msg.textContent=t('teacherNameEmailRequired'); return; }
  if(!isValidEmail(normalized)){ if(msg) msg.textContent=t('validEmailRequired'); return; }
  if(state.users.some(u=>normalizeEmail(u.email || u.username)===normalized)){ if(msg) msg.textContent=t('emailExists'); return; }
  state.users.push({
    id:'u_'+Date.now(), email:normalized, username:normalized, password, name,
    role:'user', accountStatus:'approved', disabled:false,
    ownedGames: pkg==='all_access' ? GAME_DATA.map(g=>g.id) : [],
    package:pkg,
    profileCompleted:true,
    profile:{email:normalized, phone, chineseName:name, englishName:'', state:'Johor', orgTypes:[t('schoolTeacherOrg')]}
  });
  saveState();
  render();
}
function approveTeacher(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  u.accountStatus='approved'; u.disabled=false;
  if(!u.package) u.package='free';
  if(!Array.isArray(u.promoGift)) u.promoGift = freeTrialTemplates();
  updateTeacherPackageByOwnedGames(u);
  saveState(); render();
}
function toggleTeacherDisabled(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  u.disabled = !u.disabled;
  saveState(); render();
}
function deleteTeacherAccount(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  if(!confirm(tt('confirmDeleteTeacher', {name: u.name || u.email}))) return;
  state.users = state.users.filter(x=>x.id!==userId);
  saveState(); render();
}
function resetTeacherPassword(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  const p = prompt(tt('promptNewPassword', {name: u.name || u.email}), '123456');
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
    if(!ok) alert(t('feedbackRequired'));
  };
  $$('.open-game-btn').forEach(btn => btn.onclick = () => openGame(btn.dataset.game));
  $$('.make-game-btn').forEach(btn => btn.onclick = () => openMaker(btn.dataset.game));
  $$('.sample-txt-btn').forEach(btn => btn.onclick = () => downloadSampleForGame(btn.dataset.game));
  $$('.generate-game-btn').forEach(btn => btn.onclick = () => generateGamePackage(btn.dataset.game));
  const openMakerBtn = $('#openMakerBtn');
  if(openMakerBtn) openMakerBtn.onclick = () => openMaker();
  const closeMakerBtn = $('#closeMakerBtn');
  if(closeMakerBtn) closeMakerBtn.onclick = () => $('#makerPanel').classList.toggle('hidden');
  const makerGameSelect = $('#makerGameSelect');
  if(makerGameSelect) makerGameSelect.onchange = () => openMaker(makerGameSelect.value);
  const loadSampleTxtBtn = $('#loadSampleTxtBtn');
  if(loadSampleTxtBtn) loadSampleTxtBtn.onclick = () => loadSampleIntoMaker($('#makerGameSelect')?.value || makerSelectedGameId);
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
  const receiptInput = $('#purchaseReceiptInput'); if(receiptInput) receiptInput.onchange = handleReceiptFileChange;
  const submitPurchaseBtn = $('#submitPurchaseBtn'); if(submitPurchaseBtn) submitPurchaseBtn.onclick = submitPurchaseOrder;
  $$('input[name="purchaseType"], .purchase-single-game, .purchase-combo-bi, .purchase-combo-adv').forEach(el => el.onchange = () => {
    const type = document.querySelector('input[name="purchaseType"]:checked')?.value || 'single';
    $$('[data-package-box]').forEach(box => box.classList.toggle('hidden', box.dataset.packageBox !== type));
    updatePurchaseAmountPreview();
  });
  updatePurchaseAmountPreview();
  $$('.approve-purchase-btn').forEach(btn => btn.onclick = () => approvePurchaseOrder(btn.dataset.order));
  $$('.reject-purchase-btn').forEach(btn => btn.onclick = () => rejectPurchaseOrder(btn.dataset.order));
  $$('.receipt-view-btn').forEach(btn => btn.onclick = () => openReceiptViewer(btn.dataset.order));

  const closePlayerBtn = $('#closePlayerBtn'); if(closePlayerBtn) closePlayerBtn.onclick = closePlayer;
  const fullscreenBtn = $('#fullscreenBtn'); if(fullscreenBtn) fullscreenBtn.onclick = toggleBrowserFullscreen;
  const fit169Btn = $('#fit169Btn'); if(fit169Btn) fit169Btn.onclick = () => { currentAspectMode = '16:9'; fitFrame(); };
  const fit43Btn = $('#fit43Btn'); if(fit43Btn) fit43Btn.onclick = () => { currentAspectMode = '4:3'; fitFrame(); };
  const fitAutoBtn = $('#fitAutoBtn'); if(fitAutoBtn) fitAutoBtn.onclick = () => { currentAspectMode = 'auto'; fitFrame(); };
  window.onresize = () => { if(!$('#playerOverlay').classList.contains('hidden')) fitFrame(); };
}

function openMaker(gameId){
  const panel = $('#makerPanel');
  if(!panel) return;
  const allowed = availableGamesForUser(getUser()).map(g=>g.id);
  makerSelectedGameId = (gameId && allowed.includes(gameId)) ? gameId : (allowed.includes(makerSelectedGameId) ? makerSelectedGameId : allowed[0]);
  panel.classList.remove('hidden');
  panel.scrollIntoView({behavior:'smooth', block:'start'});
  const sel = $('#makerGameSelect');
  if(sel && makerSelectedGameId) sel.value = makerSelectedGameId;
  const title = $('#makerTitleInput');
  if(makerSelectedGameId && title){
    title.value = `${gameCode(makerSelectedGameId)}｜${gameName(makerSelectedGameId)}｜${t('classQuestionBankSuffix')}`;
  }
  loadSampleIntoMaker(makerSelectedGameId);
}

function generateGamePackage(gameId){
  const id = gameId || $('#makerGameSelect')?.value || makerSelectedGameId;
  if(!id){
    alert(t('selectTemplateFirst'));
    openMaker();
    return;
  }
  const game = findGame(id);
  if(!game) return;
  if(!userHasAccess(getUser(), id) && !game.free){ alert(t('notAuthorizedTemplate')); return; }
  const title = $('#makerTitleInput')?.value?.trim() || `${gameCode(id)}_${gameName(id)}`;
  const subject = $('#makerSubject')?.value?.trim() || '';
  const questions = $('#makerQuestions')?.value?.trim() || '';
  const meta = [
    `${t('gameCodeLabel')}：${gameCode(id)}`,
    `${t('gameTemplateLabel')}：${gameName(id)}`,
    `${t('classTitleLabel')}：${title}`,
    `${t('subjectGrade')}：${subject}`,
    '',
    `${t('questionMaterialSettings')}：`,
    questions || t('noQuestionBankYet')
  ].join('\n');

  downloadTextFile(`${gameCode(id)}_${title.replace(/[\\/:*?"<>|]/g,'_')}_${t('settingsFileSuffix')}.txt`, meta);

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
  if(user.package === 'free') updateTeacherPackageByOwnedGames(user);
  saveState();
  render();
}
function buySingle(gameId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  if(!user.ownedGames.includes(gameId)) user.ownedGames.push(gameId);
  updateTeacherPackageByOwnedGames(user);
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
  if(!game) return;
  const sep = game.path.includes('?') ? '&' : '?';
  const url = `${game.path}${sep}lang=${state.lang || 'zh'}`;
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if(!win){
    location.href = url;
  }
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

I18N.zh.gameNames.picture_word_guess='看圖猜生字';
I18N.zh.gameDesc.picture_word_guess='老師上傳圖片與答案。圖片切成 5×5，每 3 秒自動揭開一片，由 2–4 組學生搶答，老師判斷正確後加分。';
I18N.en.gameNames.picture_word_guess='Picture Word Guess';
I18N.en.gameDesc.picture_word_guess='Teachers upload an image and answer. The image is split into 5×5 tiles, reveals one tile every 3 seconds, and 2–4 teams buzz in to guess.';
I18N.ms.gameNames.picture_word_guess='Teka Perkataan Melalui Gambar';
I18N.ms.gameDesc.picture_word_guess='Guru memuat naik gambar dan jawapan. Gambar dipotong 5×5, satu bahagian dibuka setiap 3 saat, dan 2–4 kumpulan menekan buzzer untuk meneka.';


I18N.zh.gameNames.spot_diff_v2='大家来找碴(自帶后台)';
I18N.zh.gameDesc.spot_diff_v2='高阶找不同游戏。支持左图、右图与红色答案图，后台可新增 / 编辑 / 删除关卡，适合制作多关卡观察力挑战。';
I18N.en.gameNames.spot_diff_v2='Spot the Difference (Built-in Admin)';
I18N.en.gameDesc.spot_diff_v2='Advanced spot-the-difference game with left/right images, red answer mask, rankings, hints, and an admin level editor.';
I18N.ms.gameNames.spot_diff_v2='Cari Perbezaan (Admin Terbina)';
I18N.ms.gameDesc.spot_diff_v2='Permainan cari perbezaan tahap tinggi dengan imej kiri/kanan, mask jawapan merah, ranking, petunjuk dan editor tahap admin.';


// Simplified Chinese display names and descriptions for the template explainer page.
Object.assign(I18N.zh.gameNames, {
  memory_match:'翻翻乐',
  true_false:'真假判断快闪',
  sentence_order:'句子排序挑战',
  treasure_box:'宝箱开开看',
  lucky_wheel:'幸运转盘问答',
  classification_conveyor:'分类输送带',
  platform_quiz:'平台闯关问答',
  monster_defense:'怪兽防守战',
  whack_mole:'打地鼠问答',
  text_match:'文字对应',
  bomb_quiz:'炸弹倒数抢答',
  knowledge_race:'知识赛马',
  dungeon_dragon_raid:'地牢巨龙讨伐战',
  picture_word_guess:'看图猜生字',
  image_puzzle_speed_race:'图片拼图竞速赛',
  two_team_puzzle_duel:'双组拼图对战',
  island_conquest:'孤岛抢夺赛',
  timeline_sort_challenge:'时间线排序挑战',
  image_label_match:'图片标签配对赛',
  team_relay_quiz:'团队答题接力赛',
  find_difference:'大家来找不同',
  keyword_beachhead:'关键词抢滩战',
  kingdom_resource_battle:'王国资源争夺战',
  spot_diff_v2:'大家来找碴(自带后台)'
});
Object.assign(I18N.zh.gameDesc, {
  memory_match:'记忆翻牌配对，适合暖身与小组竞赛。',
  true_false:'快速判断题，提升反应力与概念辨识。',
  sentence_order:'适合语文课堂，训练句子与流程排序。',
  treasure_box:'抽题与闯关式互动，增加课堂惊喜感。',
  lucky_wheel:'转盘抽题，适合班级抢答活动。',
  classification_conveyor:'支持图片与文字分类，老师可按分类上传图片。',
  platform_quiz:'角色闯关搭配问答，游戏感较强。',
  monster_defense:'答题防守玩法，适合团体合作。',
  whack_mole:'互动白板很好玩，学生参与度高。',
  text_match:'词语、拼字、配对类题目都适合。',
  bomb_quiz:'限时压力感强，适合复习与竞赛。',
  knowledge_race:'比赛感强，适合全班分组对抗。',
  dungeon_dragon_raid:'地牢 RPG 闯关，两队答题打怪、补血、找钥匙，最后讨伐巨龙。',
  picture_word_guess:'老师上传图片与答案，图片逐格揭开，由学生抢答猜词。',
  image_puzzle_speed_race:'老师上传图片作为题目，各组轮流拼图，系统记录时间。',
  two_team_puzzle_duel:'两组同时拼同一张图片，最快完成者胜利。',
  island_conquest:'两队在六边形岛屿地图上抢占土地，可设置胜利条件与回合限制。',
  timeline_sort_challenge:'老师输入事件或步骤，学生拖动卡片排成正确时间线。',
  image_label_match:'老师上传图片并输入标签，学生把正确标签拖到对应图片。',
  team_relay_quiz:'分组轮流答题，答对前进，先完成接力进度的队伍获胜。',
  find_difference:'图片找不同玩法，训练观察力与细节辨识。',
  keyword_beachhead:'围绕关键词抢占据点，适合阅读重点与概念复习。',
  kingdom_resource_battle:'围绕中央王都开发农田、森林与金矿，并触发随机事件。',
  spot_diff_v2:'高阶找不同游戏，自带后台，可新增 / 编辑 / 删除关卡。'
});


// Full dashboard/backend UI translations. These keys remove remaining hardcoded Chinese from the logged-in screens.
Object.assign(I18N.zh, {
  teacherRole:'老师', dashboardTagline:'老师账号制｜管理员后台｜题库设定｜白板上课', adminDashboardTitle:'管理员后台', teacherLibraryTitle:'老师游戏库', currentlyAvailable:'目前可使用：{n} 款',
  adminDashboardDesc:'管理员可新增老师、批准申请、重设密码、停用账号，也可进入游戏库测试所有游戏。', teacherDashboardDesc:'老师登录后，可使用已授权游戏，并在老师后台设定题库、课堂标题与素材。',
  gameLibraryTitle:'游戏库', gameLibraryDesc:'点开初阶 / 进阶 / 高阶，即可查看该阶级游戏。可直接白板上课，或套用模板进入老师后台。', lockedGamesCount:'未授权游戏（{n}）', lockedGamesDesc:'请由管理员授权后使用。',
  teacherBackendTitle:'老师后台｜题库与游戏包设定', teacherBackendDesc:'老师登录后可选择游戏模板，再输入题库 / 素材说明，生成设定资料与对应游戏包。', collapseBackend:'收起后台', selectGameTemplate:'选择游戏模板', classGameTitle:'课堂游戏标题', subjectGrade:'科目 / 年级', questionMaterialSettings:'题库 / 素材设定',
  questionFormatNotice:'建议题库格式：题目｜答案｜选项A,选项B,选项C。图片类游戏可在此记录图片名称、答案位置或上传素材说明；正式部署可再接入自动写入 game-config.json。', generateDownloadPack:'生成 / 下载游戏包', applyTemplate:'套用模板', generateGamePack:'生成游戏包',
  feedbackTitle:'反馈 / 询问', feedbackHint:'若有针对某个游戏，请写明游戏代号，例如 S001、P001、H007。', feedbackGameCodePlaceholder:'游戏代号，可留空，例如 H007', feedbackMessagePlaceholder:'请输入反馈、问题、建议或希望新增的功能', submitFeedback:'送出反馈', feedbackRequired:'请先输入反馈内容。',
  adminAccountPanelTitle:'管理员后台｜老师账号管理', adminAccountStats:'待批准：{pending} 位｜老师总数：{total} 位', adminAccountNotice:'管理员可新增老师账号、批准老师申请、停用 / 启用账号、重设密码，也可设置老师可使用的游戏。推广期间，新老师批准后可免费体验 S001 与 S002 两个初阶模板，无需购买。',
  addTeacherAccount:'新增老师账号', teacherNamePlaceholder:'老师姓名', teacherEmailPlaceholder:'老师电子邮件', phonePlaceholder:'电话', initialPasswordPlaceholder:'初始密码', allGamesAccess:'全部授权用户', freeBasicAccess:'体验用户', pick5Access:'4+1 授权用户', addTeacher:'新增老师', teacherAccount:'老师账号', status:'状态', freeExperienceTemplate:'体验模板｜无需购买', authorizedOnlyHint:'这里只显示你已授权可使用的游戏模板。', notAuthorizedTemplate:'你尚未授权使用这个游戏模板。', noAuthorizedGamesForBackend:'目前还没有可使用的游戏模板。', phoneLabel:'电话：', phoneNotProvided:'电话未填', promoGiftLabel:'体验模板：', approve:'批准', resetPassword:'重设密码', enableAccount:'启用', disableAccount:'停用', deleteAccount:'删除', teacherFeedbackTitle:'老师反馈 / 询问', noGameSpecified:'未指定游戏', noFeedback:'目前没有反馈。', disabledStatus:'已停用', pendingStatus:'待批准', approvedStatus:'已批准',
  teacherNameEmailRequired:'请填写老师姓名与电子邮件。', validEmailRequired:'请输入有效电子邮件。', emailExists:'此电子邮件已存在。', schoolTeacherOrg:'学校老师', confirmDeleteTeacher:'确定删除老师账号：{name}？', promptNewPassword:'请输入 {name} 的新密码：', classQuestionBankSuffix:'课堂题库', selectTemplateFirst:'请先选择一个游戏模板。', gameCodeLabel:'游戏代码', gameTemplateLabel:'游戏模板', classTitleLabel:'课堂标题', noQuestionBankYet:'尚未填入题库。', settingsFileSuffix:'设定资料',
  profileCompletedTitle:'老师资料已完成', profileIncompleteTitle:'完善老师资料，再送 1 个游戏', profileCompletedDesc:'已解锁资料完善奖励游戏。', profileIncompleteDesc:'请填写电话、姓名、州属与服务类型。完成后会自动解锁 S003 句子排序挑战。', completed:'已完成', incomplete:'未完成', namePlaceholder:'姓名', englishNamePlaceholder:'英文姓名', saveTeacherProfile:'保存老师资料', authorizedSummaryTitle:'目前授权可使用：{n} 款', authorizedSummaryDesc:'已授权游戏会出现在下方「可使用游戏」区；未授权游戏会集中在「未授权游戏」区。',
  make:'制作', addPick5:'加入 4+1 组合', playerSubtitle:'白板专用｜中央安全区｜无上下轴｜三语切换', safe169:'16:9 安全区', safe43:'4:3 安全区', auto:'自动', browserFullscreen:'浏览器全屏', close:'关闭'
});
Object.assign(I18N.en, {
  teacherRole:'Teacher', dashboardTagline:'Teacher accounts | Admin console | Question banks | Whiteboard teaching', adminDashboardTitle:'Admin Console', teacherLibraryTitle:'Teacher Game Library', currentlyAvailable:'Available: {n}',
  adminDashboardDesc:'Admins can add teachers, approve applications, reset passwords, disable accounts and test all games in the library.', teacherDashboardDesc:'After login, teachers can use authorized games and set question banks, lesson titles and materials in the teacher backend.',
  gameLibraryTitle:'Game Library', gameLibraryDesc:'Expand Beginner / Intermediate / Advanced to view each game. You can start whiteboard teaching directly or apply a template in the teacher backend.', lockedGamesCount:'Unauthorized Games ({n})', lockedGamesDesc:'Please ask an administrator to grant access.',
  teacherBackendTitle:'Teacher Backend | Question Bank & Game Pack Setup', teacherBackendDesc:'Choose a game template, then enter question bank or material notes to generate setup data and the related game package.', collapseBackend:'Collapse Backend', selectGameTemplate:'Select Game Template', classGameTitle:'Classroom Game Title', subjectGrade:'Subject / Grade', questionMaterialSettings:'Question Bank / Material Settings',
  questionFormatNotice:'Suggested format: Question | Answer | Option A, Option B, Option C. For image-based games, record image file names, answer positions or material notes here; production deployment can later write directly to game-config.json.', generateDownloadPack:'Generate / Download Game Pack', applyTemplate:'Apply Template', generateGamePack:'Generate Game Pack',
  feedbackTitle:'Feedback / Inquiry', feedbackHint:'If the feedback is about a specific game, include the game code, such as S001, P001 or H007.', feedbackGameCodePlaceholder:'Game code, optional, e.g. H007', feedbackMessagePlaceholder:'Enter feedback, questions, suggestions or requested new features', submitFeedback:'Submit Feedback', feedbackRequired:'Please enter feedback first.',
  adminAccountPanelTitle:'Admin Console | Teacher Account Management', adminAccountStats:'Pending: {pending} | Total teachers: {total}', adminAccountNotice:'Admins can add teacher accounts, approve applications, enable / disable accounts, reset passwords and assign game access. During the promotion period, approved teacher accounts receive 2 free Beginner trial templates. These samples do not need to be purchased.',
  addTeacherAccount:'Add Teacher Account', teacherNamePlaceholder:'Teacher name', teacherEmailPlaceholder:'Teacher email', phonePlaceholder:'Phone', initialPasswordPlaceholder:'Initial password', allGamesAccess:'All-access user', freeBasicAccess:'Trial user', pick5Access:'4+1 authorized user', addTeacher:'Add Teacher', teacherAccount:'Teacher Account', status:'Status', freeExperienceTemplate:'Trial template | No purchase needed', authorizedOnlyHint:'Only templates authorized for your account are shown here.', notAuthorizedTemplate:'This template is not authorized for your account yet.', noAuthorizedGamesForBackend:'No authorized templates available yet.', phoneLabel:'Phone: ', phoneNotProvided:'Phone not provided', promoGiftLabel:'Trial templates: ', approve:'Approve', resetPassword:'Reset Password', enableAccount:'Enable', disableAccount:'Disable', deleteAccount:'Delete', teacherFeedbackTitle:'Teacher Feedback / Inquiry', noGameSpecified:'No game specified', noFeedback:'No feedback yet.', disabledStatus:'Disabled', pendingStatus:'Pending', approvedStatus:'Approved',
  teacherNameEmailRequired:'Please enter teacher name and email.', validEmailRequired:'Please enter a valid email.', emailExists:'This email already exists.', schoolTeacherOrg:'School teacher', confirmDeleteTeacher:'Delete teacher account: {name}?', promptNewPassword:'Enter a new password for {name}:', classQuestionBankSuffix:'Class Question Bank', selectTemplateFirst:'Please select a game template first.', gameCodeLabel:'Game code', gameTemplateLabel:'Game template', classTitleLabel:'Class title', noQuestionBankYet:'No question bank entered yet.', settingsFileSuffix:'settings',
  profileCompletedTitle:'Teacher profile completed', profileIncompleteTitle:'Complete profile to unlock 1 more game', profileCompletedDesc:'Profile completion reward has been unlocked.', profileIncompleteDesc:'Fill in phone, name, state and organization type to unlock S003 Sentence Order Challenge.', completed:'Completed', incomplete:'Incomplete', namePlaceholder:'Name', englishNamePlaceholder:'English name', saveTeacherProfile:'Save Teacher Profile', authorizedSummaryTitle:'Authorized: {n} games', authorizedSummaryDesc:'Authorized games appear in the available games section; unauthorized games are grouped separately.',
  make:'Make', addPick5:'Add to 4+1 combo'
});
Object.assign(I18N.ms, {
  teacherRole:'Guru', dashboardTagline:'Akaun guru | Konsol admin | Bank soalan | Papan putih', adminDashboardTitle:'Konsol Admin', teacherLibraryTitle:'Perpustakaan Permainan Guru', currentlyAvailable:'Boleh digunakan: {n}',
  adminDashboardDesc:'Admin boleh tambah guru, luluskan permohonan, tetapkan semula kata laluan, nyahaktifkan akaun dan menguji semua permainan.', teacherDashboardDesc:'Selepas log masuk, guru boleh menggunakan permainan yang dibenarkan dan menetapkan bank soalan, tajuk kelas serta bahan dalam backend guru.',
  gameLibraryTitle:'Perpustakaan Permainan', gameLibraryDesc:'Buka Asas / Pertengahan / Lanjutan untuk melihat setiap permainan. Guru boleh terus mengajar di papan putih atau menggunakan templat dalam backend guru.', lockedGamesCount:'Permainan Belum Dibenarkan ({n})', lockedGamesDesc:'Sila minta admin memberikan akses.',
  teacherBackendTitle:'Backend Guru | Tetapan Bank Soalan & Pek Permainan', teacherBackendDesc:'Pilih templat permainan, kemudian masukkan bank soalan atau nota bahan untuk menjana data tetapan dan pek permainan berkaitan.', collapseBackend:'Sorok Backend', selectGameTemplate:'Pilih Templat Permainan', classGameTitle:'Tajuk Permainan Kelas', subjectGrade:'Subjek / Tahun', questionMaterialSettings:'Tetapan Bank Soalan / Bahan',
  questionFormatNotice:'Format cadangan: Soalan | Jawapan | Pilihan A, Pilihan B, Pilihan C. Untuk permainan bergambar, catat nama fail imej, kedudukan jawapan atau nota bahan di sini; versi produksi boleh menulis terus ke game-config.json.', generateDownloadPack:'Jana / Muat Turun Pek Permainan', applyTemplate:'Guna Templat', generateGamePack:'Jana Pek Permainan',
  feedbackTitle:'Maklum Balas / Pertanyaan', feedbackHint:'Jika berkaitan permainan tertentu, masukkan kod permainan seperti S001, P001 atau H007.', feedbackGameCodePlaceholder:'Kod permainan, pilihan, contoh H007', feedbackMessagePlaceholder:'Masukkan maklum balas, soalan, cadangan atau fungsi baharu yang diingini', submitFeedback:'Hantar Maklum Balas', feedbackRequired:'Sila masukkan maklum balas dahulu.',
  adminAccountPanelTitle:'Konsol Admin | Pengurusan Akaun Guru', adminAccountStats:'Menunggu: {pending} | Jumlah guru: {total}', adminAccountNotice:'Admin boleh tambah akaun guru, luluskan permohonan, aktif / nyahaktifkan akaun, tetapkan semula kata laluan dan tetapkan akses permainan. Semasa promosi, akaun guru yang diluluskan menerima 2 templat Asas percubaan percuma. Templat ini tidak perlu dibeli.',
  addTeacherAccount:'Tambah Akaun Guru', teacherNamePlaceholder:'Nama guru', teacherEmailPlaceholder:'E-mel guru', phonePlaceholder:'Telefon', initialPasswordPlaceholder:'Kata laluan awal', allGamesAccess:'Pengguna akses semua', freeBasicAccess:'Pengguna percubaan', pick5Access:'Pengguna akses 4+1', addTeacher:'Tambah Guru', teacherAccount:'Akaun Guru', status:'Status', freeExperienceTemplate:'Templat percubaan | Tidak perlu dibeli', authorizedOnlyHint:'Hanya templat yang dibenarkan untuk akaun anda dipaparkan di sini.', notAuthorizedTemplate:'Templat ini belum dibenarkan untuk akaun anda.', noAuthorizedGamesForBackend:'Belum ada templat yang dibenarkan.', phoneLabel:'Telefon: ', phoneNotProvided:'Telefon belum diisi', promoGiftLabel:'Templat percubaan: ', approve:'Luluskan', resetPassword:'Tetap Semula Kata Laluan', enableAccount:'Aktifkan', disableAccount:'Nyahaktifkan', deleteAccount:'Padam', teacherFeedbackTitle:'Maklum Balas / Pertanyaan Guru', noGameSpecified:'Tiada permainan dinyatakan', noFeedback:'Belum ada maklum balas.', disabledStatus:'Dinyahaktifkan', pendingStatus:'Menunggu', approvedStatus:'Diluluskan',
  teacherNameEmailRequired:'Sila isi nama dan e-mel guru.', validEmailRequired:'Sila masukkan e-mel yang sah.', emailExists:'E-mel ini sudah wujud.', schoolTeacherOrg:'Guru sekolah', confirmDeleteTeacher:'Padam akaun guru: {name}?', promptNewPassword:'Masukkan kata laluan baharu untuk {name}:', classQuestionBankSuffix:'Bank Soalan Kelas', selectTemplateFirst:'Sila pilih templat permainan dahulu.', gameCodeLabel:'Kod permainan', gameTemplateLabel:'Templat permainan', classTitleLabel:'Tajuk kelas', noQuestionBankYet:'Bank soalan belum dimasukkan.', settingsFileSuffix:'tetapan',
  profileCompletedTitle:'Profil guru lengkap', profileIncompleteTitle:'Lengkapkan profil untuk buka 1 lagi permainan', profileCompletedDesc:'Ganjaran lengkap profil telah dibuka.', profileIncompleteDesc:'Isi telefon, nama, negeri dan jenis organisasi untuk membuka S003 Cabaran Susun Ayat.', completed:'Lengkap', incomplete:'Belum lengkap', namePlaceholder:'Nama', englishNamePlaceholder:'Nama Inggeris', saveTeacherProfile:'Simpan Profil Guru', authorizedSummaryTitle:'Dibenarkan: {n} permainan', authorizedSummaryDesc:'Permainan yang dibenarkan muncul dalam bahagian tersedia; permainan belum dibenarkan dikumpulkan berasingan.',
  make:'Bina', addPick5:'Tambah ke kombo 4+1'
});

render();
