const questions = [
    {
        question: "马克思主义具有四大基本特征，其中不包括（）。",
        options: ["科学性", "发展性", "人民性", "物质性"],
        answer: "物质性"
    },
    {
        question: "马克思主义生命力的根源在于（）。",
        options: ["以实践为基础的科学性与革命性的统一", "与时俱进", "科学性与阶级性的统一", "科学性"],
        answer: "以实践为基础的科学性与革命性的统一"
    },
    {
        question: "（）是马克思主义哲学的直接理论来源。",
        options: ["英国古典哲学", "德国古典哲学", "法国古典哲学", "古希腊哲学"],
        answer: "德国古典哲学"
    },
    {
        question: "无产阶级的科学世界观和方法论是（）。",
        options: ["朴素唯物主义", "机械唯物主义", "辩证唯物主义和历史唯物主义", "庸俗唯物主义"],
        answer: "辩证唯物主义和历史唯物主义"
    },
    {
        question: "马克思主义是由三个基本组成部分构成的理论体系，其中不包括（）。",
        options: ["马克思主义哲学", "空想社会主义", "马克思主义政治经济学", "科学社会主义"],
        answer: "空想社会主义"
    },
    {
        question: "“与时俱进、开拓创新”是（）。",
        options: ["马克思主义具有的基本内容", "马克思主义具有的功能作用", "马克思主义具有的理论品质", "马克思主义具有的实践基础"],
        answer: "马克思主义具有的理论品质"
    },
    {
        question: "学习马克思主义基本原理的根本方法是（）。",
        options: ["理论联系实际", "历史分析", "走群众路线", "抽象分析"],
        answer: "理论联系实际"
    },
    {
        question: "标志着马克思主义的公开问世，是1848年2月发表的（）。",
        options: ["《共产党宣言》", "《关于费尔巴哈的提纲》", "《神圣家族》", "《德意志意识形态》"],
        answer: "《共产党宣言》"
    },
    {
        question: "马克思主义哲学和具体科学的关系是()",
        options: ["主要矛盾和次要矛盾的关系", "整体和部分的关系", "一般和个别的关系", "理论和实际的关系"],
        answer: "一般和个别的关系"
    },
    {
        question: "马克思系统阐述剩余价值学说的著作是（）。",
        options: ["《1844 年经济学哲学手稿》", "《资本论》", "《法兰西内战》", "《反杜林论》"],
        answer: "《资本论》"
    },
    {
        question: "哲学的基本问题是（）",
        options: ["社会和自然的关系问题", "思维与存在的关系问题", "政治和经济的关系问题", "实践和理论的关系问题"],
        answer: "思维与存在的关系问题"
    },
    {
        question: "下列观点属于主观唯心主义的是（）",
        options: ["心外无物，心外无理", "理在气中，理随事变", "富贵在天，死生由命", "理在事先，事随理变"],
        answer: "心外无物，心外无理"
    },
    {
        question: "下列属于客观唯心主义的是（）",
        options: ["存在就是被感知", "物是感觉的复合", "意识是万物的本原", "理在事先"],
        answer: "理在事先"
    },
    {
        question: "“存在就是被感知”是（）",
        options: ["机械唯物主义观点", "客观唯物主义观点", "朴素唯物主义观点", "主观唯心主义观点"],
        answer: "主观唯心主义观点"
    },
    {
        question: "在马克思主义哲学产生以前不曾存在（）",
        options: ["唯物主义和唯心主义的斗争", "唯物史观和唯心史观的斗争", "辩证法和形而上学的斗争", "可知论和不可知论的斗争"],
        answer: "唯物史观和唯心史观的斗争"
    },
    {
        question: "古代朴素唯物主义把世界的本原归根结为（）",
        options: ["绝对观念", "客观实在", "理念世界", "'原初'物质"],
        answer: "'原初'物质"
    },
    {
        question: "“观念的东西不外是移入人脑并在人的头脑中改造过的物质的东西而已。”这种观念是（）",
        options: ["客观唯心主义观点", "朴素唯物主义观点", "唯意志主义观点", "辩证唯物主义观点"],
        answer: "辩证唯物主义观点"
    },
    {
        question: "人工智能的出现和发展证明（）",
        options: ["意识不是人类所特有的现象", "物质是意识产生的基础", "对人脑机能的认识已经完成", "机器思维最终会超过人类思维"],
        answer: "物质是意识产生的基础"
    },
    {
        question: "古希腊哲学家克拉底鲁指出，万物瞬息万变，不可捉摸，人连一次也不能踏 进同一条河流。这是一种（）",
        options: ["唯心主义的观点", "形而上学的观点", "相对主义诡辩论的观点", "庸俗进化论的观点"],
        answer: "相对主义诡辩论的观点"
    },
    {
        question: `时间和空间"离开了物质，当然都是无，都只是在我们头脑中存在地空洞的 观念、抽象。"这段话是（）`,
        options: ["时间和空间是人脑中自生的概念", "时间和空间是物质存在的形式", "时间和空间是相对和绝对的统一", "时间和空间离开物质只是形式"],
        answer: "时间和空间离开物质只是形式"
    },
    {
        question: "“只见树木，不见森林；只见局部，不见整体”这是（）",
        options: ["唯物辩证法观点", "唯心主义观点", "唯心辩证法观点", "形而上学观点"],
        answer: "形而上学观点"
    },
    {
        question: "“世界不是既成事物的集合体，而是过程的集合体。”这句话是一种（）",
        options: ["唯物辩证法的观点", "唯心主义的观点", "形而上学的观点", "相对主义的观点"],
        answer: "唯物辩证法的观点"
    },
    {
        question: "“肯定和否定相互渗透，在一定意义上，肯定就是否定。”这是一种（）",
        options: ["相对主义诡辩论的观点", "唯物辩证法的观点", "主观唯心主义的观点", "形而上学的观点"],
        answer: "唯物辩证法的观点"
    },
    {
        question: "矛盾的斗争性是一个广泛的哲学范畴，它的含义是（）",
        options: ["对立面双方相互依存的性质", "对立面双方相互贯通的性质", "对立面双方相互转化的性质", "对立面双方相互排斥的性质"],
        answer: "对立面双方相互排斥的性质"
    },
    {
        question: "马克思主义普遍真理同各国具体实际相结合的哲学基础是（）。",
        options: ["矛盾的对立性和统一性辩证关系原理", "矛盾的普遍性和特殊性辩证关系原理", "世界的物质统一性原理", "社会存在和社会意识辩证关系原理"],
        answer: "矛盾的普遍性和特殊性辩证关系原理"
    },
    {
        question: "“不经一番寒彻骨，哪得梅花扑鼻香”体现了辩证法的（）。",
        options: ["否定之否定规律", "质量互变规律", "联系和发展的原理", "对立统一规律"],
        answer: "否定之否定规律"
    },
    {
        question: `古希腊哲学家用"水"、"气"、"火"、"原子"等解释世界，属于（）。`,
        options: ["朴素唯物主义物质观", "唯心主义物质观", "形而上学物质观", "辩证唯物主义物质观"],
        answer: "朴素唯物主义物质观"
    },
    {
        question: "“一把钥匙开一把锁”。这句话强调的是，在解决复杂问题时 （）。",
        options: ["要具体地分析矛盾的特殊性", "要具体地分析矛盾的普遍性", "要具体地分析矛盾的斗争性", "要具体地分析矛盾的同一性"],
        answer: "要具体地分析矛盾的特殊性"
    },
    {
        question: "认识我国改革开放和社会主义现代化建设的形势，我们要分清主流和支流，要看主流，同时又不忽略支流。这里依据的哲学道理是（）",
        options: ["矛盾的普遍性和特殊性辩证关系的原理", "主要矛盾和次要矛盾辩证关系的原理", "矛盾的主要方面和次要方面辩证关系的原理", "事物变化的内因和外因辩证关系的原理"],
        answer: "矛盾的主要方面和次要方面辩证关系的原理"
    },
    {
        question: "辩证法体系的实质和核心是（）。",
        options: ["联系和发展的规律", "对立统一规律", "否定之否定规律", "质量互变规律"],
        answer: "对立统一规律"
    },
    {
        question: "“勿以善小而不为，勿以恶小而为之”说明（）。",
        options: ["量变是由质变引起的", "质变与量变是相互渗透的", "质变在事物发展中起重要作用", "质变是由量变引起的"],
        answer: "质变是由量变引起的"
    },
    {
        question: "明代大儒王阳明提出“心外无物，心外无事，心外无理”，这种观点属于（）",
        options: ["形而上学的观点", "经验主义的观点", "主观唯心主义的观点", "客观唯心主义的观点"],
        answer: "主观唯心主义的观点"
    },
    {
        question: "“注意分寸”、“掌握火候”、“适可而止”等等，体现的是辩证法的（）",
        options: ["否定之否定规律", "量变质变规律", "联系和发展的原理", "对立统一规律"],
        answer: "量变质变规律"
    },
    {
        question: "有一首描述在战争中缺了钉子的马掌会导致国家灭亡的童谣：“钉子缺，蹄铁卸，战马蹶；战马蹶，骑士绝；骑士绝，战事折；战事折，国家灭。”这首童谣包含的哲学原理是（）。",
        options: ["事物是普遍联系的", "事物是变化的", "事物的现象是本质的表现", "事物的量变引起质变"],
        answer: "事物是普遍联系的"
    },
    {
        question: "意识是人脑的机能和属性，但不是（）。",
        options: ["客观世界的主观映像", "自然界长期发展的产物", "社会历史发展的产物", "先于物质而存在的范畴"],
        answer: "先于物质而存在的范畴"
    },
    {
        question: `人的认识是主体对客体的直观反映。"这种观点属于（）`,
        options: ["辩证唯物主义认识论", "客观唯心主义认识论", "主观唯心主义认识论", "形而上学唯物主义认识论"],
        answer: "形而上学唯物主义认识论"
    },
    {
        question: "认识的主体和客体之间的最基本的关系是（）",
        options: ["改造与被改造的实践关系", "反映与被反映的认识关系", "相互依存的关系", "相互作用的关系"],
        answer: "改造与被改造的实践关系"
    },
    {
        question: "辩证唯物主义认识论第一的和基本的观点是（）",
        options: ["认识是主体对客体的反映", "实践是认识的基础", "认识是一个辩证发展过程", "认识是从物到感觉和思想的过程"],
        answer: "实践是认识的基础"
    },
    {
        question: `宋代诗人陆游在一首诗中说："纸上得来终觉浅，绝知此事要躬行。"这里是强调（）`,
        options: ["读书不能获得真知", "实践是认识发展的动力", "实践是认识的来源", "实践是认识的目的"],
        answer: "实践是认识的来源"
    },
    {
        question: "感性认识和理性认识的根本区别在于（）",
        options: ["感性认识包含错误，理性认识则完全正确", "感性认识反映事物的现象，理性认识反映事物的本质", "感性认识来源于社会实践，理性认识来源于抽象思维", "感性认识产生于日常生活，理性认识则产生于科学实验"],
        answer: "感性认识反映事物的现象，理性认识反映事物的本质"
    },
    {
        question: "由感性认识上升到理性认识的过程是（）",
        options: ["完全自发的过程", "积极能动的过程", "消极被动的过程", "主观随意的过程"],
        answer: "积极能动的过程"
    },
    {
        question: "一个完整的认识需要经过两次飞跃。下列选项中属于第二次飞跃的是（）",
        options: ["调查研究，了解情况", "深入思考，形成理论", "精心安排，制定计划", "执行计划，付诸实践"],
        answer: "执行计划，付诸实践"
    },
    {
        question: "谬误与真理的关系是对立统一的，因此谬误（）",
        options: ["永远也不能变为真理", "在一定条件下可以变为真理", "是对客观事物的正确反映", "包含在相对真理之中的"],
        answer: "在一定条件下可以变为真理"
    },
    {
        question: "实践是检验真理的唯一标准，这主要是因为()",
        options: ["实践具有把主观和客观联系起来的特性", "实践是一个无限发展的过程", "实践是人类生存和发展的基础", "实践是认识的来源和目的"],
        answer: "实践具有把主观和客观联系起来的特性"
    },
    {
        question: "实践是检验真理的唯一标准，主要是因为实践是一种（）",
        options: ["客观物质性活动", "自觉能动性活动", "社会历史性活动", "主观见之于客观的活动"],
        answer: "主观见之于客观的活动"
    },
    {
        question: "实践之所以是驳斥不可知论的最有力的论据，是因为（）",
        options: ["实践本身是社会物质活动", "坚持实践的观点就是坚持唯物论", "实践的成功证明我们对客观事物的认识是正确的", "世界不存在永远不能认识的事物"],
        answer: "实践的成功证明我们对客观事物的认识是正确的"
    },
    {
        question: "任何科学理论都不能穷尽真理，而只能在实践中不断开辟认识真理的道路。 这说明（）",
        options: ["真理具有绝对性", "真理具有相对性", "真理具有客观性", "真理具有全面性"],
        answer: "真理具有相对性"
    },
    {
        question: "感觉、知觉、表象，它们是（）",
        options: ["社会心理的三种形式", "社会意识形态的三种形式", "感性认识的三种形式", "理性认识的三种形式"],
        answer: "感性认识的三种形式"
    },
    {
        question: "“人的智力是按照人如何学会改造自然界而发展的。”这句话说明（）",
        options: ["实践是认识的来源", "实践是认识的目的", "实践是认识发展的动力", "实践是检验认识正确与否的标准"],
        answer: "实践是认识发展的动力"
    },
    {
        question: "直接经验与间接经验的关系是（）",
        options: ["第一性和第二性的关系", "感性认识和理性认识的关系", "认识的'源'与'流'的关系", "唯物主义反映论与唯心主义先验论的关系"],
        answer: "认识的'源'与'流'的关系"
    },
    {
        question: "我国科学家屠呦呦采用科学的实验方法探寻疟疾的新疗法，目的是为了拯救成千上万疟疾患者的生命，体现了（）",
        options: ["真理尺度和价值尺度的辩证统一", "逻辑和历史的辩证统一", "真理的绝对性和真理的相对性的辩证统一", "理性认识和感性认识的辩证统一"],
        answer: "真理尺度和价值尺度的辩证统一"
    },
    {
        question: `"问渠那得清如许，为有源头活水来"，认识的"源头活水"是（）`,
        options: ["经典", "信仰", "实践", "兴趣"],
        answer: "实践"
    },
    {
        question: "有人说，趋利避害是人的本能，因此人性自私，这一观点的错误在于（）",
        options: ["违背了社会主义核心价值观", "违背了人追求公平、正义的天性", "违背人的本质属性是社会属性的观点", "违背人的本质属性是自然属性的观点"],
        answer: "违背人的本质属性是社会属性的观点"
    },
    {
        question: "真理的一元性是由（）决定的。",
        options: ["真理的主观性", "真理的客观性", "真理的多样性", "真理的相对性"],
        answer: "真理的客观性"
    },
    {
        question: "“社会一旦有技术上的需要，这种需要就会比十所大学更能把科学推向前进”，体现了 （）。",
        options: ["实践是认识的来源", "间接经验毫无作用", "实践是认识的目的", "实践是推动认识发展的动力"],
        answer: "实践是推动认识发展的动力"
    },
    {
        question: "生产方式包括（）。",
        options: ["劳动者和劳动工具两个方面", "地理环境和人口因素两个方面", "生产力和生产关系两个方面", "经济基础和上层建筑两个方面"],
        answer: "生产力和生产关系两个方面"
    },
    {
        question: "历史唯物主义认为，社会改革和社会革命都根源于（）。",
        options: ["生产力和生产关系的矛盾", "社会存在和社会意识的矛盾", "人口增长和资源匮乏的矛盾", "创新意识和传统观念的矛盾"],
        answer: "生产力和生产关系的矛盾"
    },
    {
        question: `马克思指出："旧唯物主义是半截子的唯物主义。"这是说（）。`,
        options: ["旧唯物主义是形而上学的唯物主义", "旧唯物主义在社会历史观上是唯心主义", "旧唯物主义是机械唯物主义", "旧唯物主义是割裂了运动与静止的辩证法"],
        answer: "旧唯物主义在社会历史观上是唯心主义"
    },
    {
        question: "一定的社会上层建筑由（）两部分组成。",
        options: ["政治制度与军队、警察武装力量", "生产关系与政治制度", "政治上层建筑与观念上层建筑", "政权与政治"],
        answer: "政治上层建筑与观念上层建筑"
    },
    {
        question: "社会发展的根本动力是()。",
        options: ["人民群众", "社会基本矛盾", "科学技术", "社会制度"],
        answer: "社会基本矛盾"
    },
    {
        question: "马克思的两个伟大理论发现是（）。",
        options: ["辩证唯物主义和历史唯物主义", "阶级斗争和无产阶级专政学说", "唯物史观和剩余价值学说", "社会主义和共产主义理论"],
        answer: "唯物史观和剩余价值学说"
    },
    {
        question: "衡量生产力的客观尺度是 ()。",
        options: ["劳动技能", "科学技术", "生产管理", "生产工具"],
        answer: "生产工具"
    },
    {
        question: "生产关系的基础是()。",
        options: ["人们在生产中的地位", "产品分配方式", "人们在劳动组织中的作用", "生产资料"],
        answer: "生产资料"
    },
    {
        question: "所有制形式上层建筑的根本性质取决于（）。",
        options: ["经济基础", "政治制度", "国家政权", "意识形态"],
        answer: "经济基础"
    },
    {
        question: "人的本质是（）。",
        options: ["阶级关系的总和", "生产关系的总和", "生产力和生产关系的总和", "一切社会关系的总和"],
        answer: "一切社会关系的总和"
    },
    {
        question: `马克思说"任何一个民族，如果停止劳动，不用说一年，就是几个星期，也要灭亡"，他认为在人们的社会物质生活条件中，社会历史发展的决定力量是（）`,
        options: ["地理环境", "人口数量", "生产工具", "生产方式"],
        answer: "生产方式"
    },
    {
        question: "“手推磨产生的是封建主的社会，蒸汽磨产生的是工业资本家的社会”,这句话揭示了（）。",
        options: ["生产工具是衡量生产力水平的重要尺度", "科学技术是第一生产力", "社会形态的更替有其一定的顺序性", "生产力决定生产关系"],
        answer: "生产力决定生产关系"
    },
    {
        question: "社会革命根源于（）。",
        options: ["人口太多", "少数英雄人物的非凡能力", "社会基本矛盾的尖锐化", "先进思想和革命理论的传播"],
        answer: "社会基本矛盾的尖锐化"
    },
    {
        question: `马克思认为，（）是"伟大的历史杠杆"，是"最明显的字面意义而言的革命力量"。`,
        options: ["改革", "科学", "社会革命", "社会基本矛盾"],
        answer: "科学"
    },
    {
        question: "政治上层建筑的核心是（）。",
        options: ["文学艺术", "哲学思想", "政党结构", "国家政权"],
        answer: "国家政权"
    },
    {
        question: "生产商品的劳动二重性是指（）。",
        options: ["必要劳动和剩余劳动", "简单劳动和复杂劳动", "具体劳动和抽象劳动", "私人劳动和社会劳动"],
        answer: "具体劳动和抽象劳动"
    },
    {
        question: "商品是（）。",
        options: ["用于满足人们需要的劳动产品", "为市场交换而生产的有用的劳动产品", "一切物品", "一切有用的物品"],
        answer: "为市场交换而生产的有用的劳动产品"
    },
    {
        question: "简单商品经济的矛盾是指 （）。",
        options: ["价值和使用价值的矛盾", "价值和交换价值的矛盾", "私人劳动和社会劳动的矛盾", "具体劳动和抽象劳动的矛盾"],
        answer: "私人劳动和社会劳动的矛盾"
    },
    {
        question: "在下列生产要素中既属于不变资本又属于固定资本的是 （）。",
        options: ["厂房、设备", "原料", "燃料", "劳动力"],
        answer: "厂房、设备"
    },
    {
        question: "利润率和剩余价值率在数量上（）。",
        options: ["二者相等", "利润率大于剩余价值率", "利润率小于剩余价值率", "上述三者都有可能"],
        answer: "利润率小于剩余价值率"
    },
    {
        question: "马克思主义政治经济学认为，构成商品价格基础的是（）。",
        options: ["使用价值", "价值", "商品供给", "商品需求"],
        answer: "价值"
    },
    {
        question: "以私有制为基础的商品经济的基本矛盾是 （）。",
        options: ["价值与使用价值的矛盾", "具体劳动与抽象劳动的矛盾", "私人劳动与社会劳动的矛盾", "生产社会化与占有私人性的矛盾"],
        answer: "私人劳动与社会劳动的矛盾"
    },
    {
        question: "某资本家投资100万元，每次投资所得的利润是15万元，假定其预付资本的有机构成是4:1，那么该资本家每次投资所实现的剩余价值率为（）。",
        options: ["15%", "75%", "100%", "125%"],
        answer: "75%"
    },
    {
        question: "超额剩余价值是（）。",
        options: ["个别资本家改进技术的结果", "全社会劳动生产率普遍提高的结果", "延长工作日的结果", "降低劳动力价值的结果"],
        answer: "个别资本家改进技术的结果"
    },
    {
        question: "资本循环中实现价值增殖的阶段是（）。",
        options: ["购买阶段", "生产阶段", "销售阶段", "运输阶段"],
        answer: "生产阶段"
    },
    {
        question: "在市场上，我们经常看到价格与价值背离的现象。究其原因主要是（）。",
        options: ["市场上商品的供给和需求不平衡引起的", "市场上商品生产能力不足引起的", "市场上人们追逐热门商品的潮流引起的", "市场上人们的持币数量多少引起的"],
        answer: "市场上商品的供给和需求不平衡引起的"
    },
    {
        question: "导致2008年金融危机的根本原因是（）。",
        options: ["华尔街资本家的贪婪", "资本主义的基本矛盾", "美国政府的错误政策", "美国人民的错误预期"],
        answer: "资本主义的基本矛盾"
    },
    {
        question: "垄断与竞争的关系是（）。",
        options: ["垄断消除了竞争", "垄断缓和了竞争", "垄断无关于竞争", "垄断加剧了竞争"],
        answer: "垄断加剧了竞争"
    },
    {
        question: "商品价值量的大小是由()。",
        options: ["生产商品的社会必要劳动时间决定的", "商品使用价值的大小决定的", "商品生产者的个别劳动时间决定的", "商品的供求关系决定的"],
        answer: "生产商品的社会必要劳动时间决定的"
    },
    {
        question: "在当代资本主义生产自动化的条件下，剩余价值的源泉是()。",
        options: ["科学技术的创新", "劳动力的使用价值", "自动化的机器设备", "高额的技术投资"],
        answer: "劳动力的使用价值"
    },
    {
        question: "资本主义工资的本质是（）。",
        options: ["劳动的全部报酬", "劳动的价值或价格", "劳动力的价值或价格", "劳动者的价值或价格"],
        answer: "劳动力的价值或价格"
    },
    {
        question: "资本积累的本质是()。",
        options: ["剩余价值资本化", "增加社会财富总量", "扩大生产规模来增强竞争能力", "用无偿占有的剩余价值进一步扩大剥削"],
        answer: "用无偿占有的剩余价值进一步扩大剥削"
    },
    {
        question: "当代西方国家企业职工参与决策、终身雇佣、职工持股等制度的实施表明（）。",
        options: ["资本主义制度的本质正在发生变化", "工人已经为企业的主人", "垄断资产阶级失去了生产资料所有权", "资本主义国家对分配关系进行了调整"],
        answer: "资本主义国家对分配关系进行了调整"
    },
    {
        question: "金融寡头在经济上的统治是（）。",
        options: ["通过'个人联合'实现的", "通过'参与制'实现的", "通过工业垄断实现的", "通过银行垄断实现的"],
        answer: "通过'参与制'实现的"
    },
    {
        question: "共产主义社会的显著特征和一面旗子是（）。",
        options: ["各尽所能，平均分配", "各尽所能，公平分配", "各尽所能，按劳分配", "各尽所能，按需分配"],
        answer: "各尽所能，按需分配"
    },
    {
        question: "劳动不再仅仅是一种谋生手段而同时成为人们生活第一需要的社会是（）。",
        options: ["社会主义社会", "共产主义社会", "资本主义社会", "信息社会"],
        answer: "共产主义社会"
    },
    {
        question: `20世纪初，列宁提出"社会主义将首先在一个或者几个国家内获得胜利"，此论断的理论依据是（）。`,
        options: ["经济和政治发展的不平衡是资本主义的绝对规律", "资本主义必然灭亡、社会主义必然胜利的规律", "人类社会发展的一般规律", "无产阶级和资产阶级斗争的规律"],
        answer: "经济和政治发展的不平衡是资本主义的绝对规律"
    },
    {
        question: `在共产主义社会，个人消费品的分配方式是"各尽所能，按需分配"，其物质条件是（）。`,
        options: ["劳动是人们生活的第一需要", "劳动不再是谋生手段", "脑力劳动和体力劳动对立的消除", "生产力高度发展，社会财富极大丰富"],
        answer: "生产力高度发展，社会财富极大丰富"
    },
    {
        question: "“任何杰出人物的历史作用都不能超越他所处的历史阶段许可的范围”的观点属于（）。",
        options: ["宿命论", "唯物史观", "机械唯物主义", "循环论经济文化"],
        answer: "唯物史观"
    },
    {
        question: "相对落后的国家可以先于资本主义国家进入社会主义，其根本原因是由于（）。",
        options: ["经济文化相对落后的国家具有较高的精神文明", "革命的客观形势和条件决定的", "它是以高度社会化的资本主义大生产作为社会主义革命的物质前提的", "社会主义生产关系可以在旧社会的内部孕育生长起来"],
        answer: "革命的客观形势和条件决定的"
    },
    {
        question: "社会主义经济制度的基础是（）。",
        options: ["发达的生产力", "生产资料公有制", "按劳分配原则", "共同富裕"],
        answer: "生产资料公有制"
    },
    {
        question: "“代替那存在着阶级和阶级对立的资产阶级旧社会的，将是这样一个联合体，在那里，每个人的自由发展是一切人的自由发展的条件”，描述的是（）",
        options: ["原始社会", "共产主义社会", "资本主义社会", "社会主义社会"],
        answer: "共产主义社会"
    },
    {
        question: "马克思、恩格斯适应社会的需要，在新的历史条件下创立了（），为实现社会主义从空想到科学的飞跃奠定了坚实的理论基础。",
        options: ["劳动价值论", "唯物史观和剩余价值学说", "辩证唯物主义", "唯物论与辩证法"],
        answer: "唯物史观和剩余价值学说"
    },
    {
        question: "共产党人的最高理想是（）。",
        options: ["保障人权", "消灭阶级、消灭国家", "实现每个人的绝对自由", "实现共产主义"],
        answer: "实现共产主义"
    }
];

let currentQuestionIndex = 0;
let selectedOption = null;

const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const currentQuestionIndexElement = document.getElementById('current-question-index');
const totalQuestionsElement = document.getElementById('total-questions');
const totalQuestionsDisplayElement = document.getElementById('total-questions-display');

function loadQuestion() {
    selectedOption = null;
    feedbackContainer.innerHTML = '';
    submitBtn.disabled = false;
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');

    currentQuestionIndexElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = questions.length;
    totalQuestionsDisplayElement.textContent = questions.length;

    const question = questions[currentQuestionIndex];
    questionTextElement.textContent = question.question;
    optionsContainer.innerHTML = '';

    const optionLabels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = `<span class="font-bold mr-2">${optionLabels[index]}.</span> ${option}`;
        button.dataset.option = option;
        button.className = 'w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 border-2 border-transparent';
        
        button.addEventListener('click', () => {
            if (submitBtn.disabled) return;

            // Deselect others
            Array.from(optionsContainer.children).forEach(child => {
                child.classList.remove('bg-blue-200', 'border-blue-500');
            });
            // Select current
            button.classList.add('bg-blue-200', 'border-blue-500');
            selectedOption = button.dataset.option;
        });
        optionsContainer.appendChild(button);
    });
}

submitBtn.addEventListener('click', () => {
    if (selectedOption === null) {
        alert('请选择一个选项！');
        return;
    }

    submitBtn.disabled = true;
    const question = questions[currentQuestionIndex];
    const correct = selectedOption === question.answer;

    if (correct) {
        feedbackContainer.innerHTML = `<div class="text-green-500 font-bold">✓ 回答正确！</div>`;
    } else {
        feedbackContainer.innerHTML = `<div class="text-red-500 font-bold">✗ 回答错误！正确答案是: ${question.answer}</div>`;
    }

    // Highlight correct/wrong answers
    Array.from(optionsContainer.children).forEach(child => {
        if(child.dataset.option === question.answer){
            child.classList.add('bg-green-200', 'border-green-500');
            child.classList.remove('bg-blue-200', 'border-blue-500');
        } else if (child.dataset.option === selectedOption) {
            child.classList.add('bg-red-200', 'border-red-500');
            child.classList.remove('bg-blue-200', 'border-blue-500');
        }
    });

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionTextElement.textContent = '所有题目已完成！';
        optionsContainer.innerHTML = '';
        feedbackContainer.innerHTML = '';
        submitBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }
});

window.onload = loadQuestion; 