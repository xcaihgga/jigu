// ============================================================
// 肌骨康复速查 - 知识库文件
// 内容：疾病-评定量表映射 + 临床指南核心推荐摘要
// 数据基于公开医学指南与专家共识整理，仅供临床参考
// ============================================================

// ==================== 疾病-评定映射 ====================
// core(🔴)        : 核心评定量表，建议所有患者常规使用
// recommended(🟡) : 推荐评定量表，根据病情和阶段选用
// optional(🔵)    : 可选评定量表，用于特殊场景或深入研究
const diseaseScaleMap = {
  '脑卒中': {
    core: ['Fugl-Meyer上肢', 'Fugl-Meyer下肢', 'Berg平衡量表', 'Barthel指数', '改良Ashworth量表'],
    recommended: ['TUG起立行走', 'MMSE简易精神状态', '洼田饮水试验', 'FIM功能独立性', 'Brunnstrom分期'],
    optional: ['MoCA认知评估', 'HAMD抑郁量表', 'Frenchay构音障碍', '功能性步行分级']
  },
  '脊髓损伤': {
    core: ['ASIA脊髓损伤评定', '运动平面关键肌', '感觉平面关键点', '改良Ashworth量表', 'Barthel指数'],
    recommended: ['SCIM脊髓损伤独立性', '膀胱功能评定', 'VAS疼痛评分', '深静脉血栓筛查', 'FIM功能独立性'],
    optional: ['心理评估', '性功能评估', '体位性低血压评估', '自主神经反射不良评估']
  },
  '脑外伤': {
    core: ['GCS格拉斯哥昏迷评分', 'GOSE扩展格拉斯哥结局', 'Barthel指数', 'FIM功能独立性', 'Rancho Los Amigos认知分级'],
    recommended: ['MMSE简易精神状态', 'Berg平衡量表', '改良Ashworth量表', '洼田饮水试验', 'HAMD抑郁量表'],
    optional: ['MoCA认知评估', '神经行为认知状态测试NCSE', 'Galveston定向遗忘测试GOAT', 'TUG起立行走']
  },
  '帕金森病': {
    core: ['UPDRS统一帕金森评分', 'Hoehn-Yahr分期', 'Berg平衡量表', 'TUG起立行走', '改良Ashworth量表'],
    recommended: ['Schwab-England日常生活能力', 'MMSE简易精神状态', 'HAMD抑郁量表', 'PDQ-39生活质量', '帕金森病睡眠量表PDSS'],
    optional: ['MoCA认知评估', 'Frenchay构音障碍', '嗅觉评估', '便秘评估量表']
  },
  '多发性硬化': {
    core: ['EDSS扩展残疾状态量表', 'Barthel指数', 'Berg平衡量表', 'TUG起立行走', 'VAS疼痛评分'],
    recommended: ['FSS疲劳严重度量表', 'MMSE简易精神状态', 'HAMD抑郁量表', '膀胱功能评定', '改良Ashworth量表'],
    optional: ['MoCA认知评估', '9孔钉测试', 'MS生活质量MSIS-29', '视觉功能评估']
  },
  '脑瘫（儿童）': {
    core: ['GMFCS粗大运动分级', '粗大运动功能评定GMFM', 'MAS改良Ashworth量表', 'Barthel指数', 'PEDI儿童能力评估'],
    recommended: ['MACS手功能分级', 'GMFM-66', '细运动功能评定FMFM', 'VAS疼痛评分', 'Frenchay构音障碍'],
    optional: ['CFCS交流功能分级', 'EDACS进食饮水能力', 'Vigotsky智力测验', '儿童生活质量量表PedsQL']
  },
  '周围神经损伤': {
    core: ['徒手肌力评定MMT', 'MRC神经感觉运动分级', '两点辨别觉', 'VAS疼痛评分', 'Barthel指数'],
    recommended: ['Semmes-Weinstein单丝感觉', 'Tinel征', '关节活动度测量', 'FIM功能独立性', '神经传导检查NCS'],
    optional: ['肌电图EMG', '9孔钉测试', '握力测定', 'Minnesota精细运动评定']
  },
  '面神经麻痹': {
    core: ['House-Brackmann面神经分级', 'Sunnybrook面神经评定', '面部静态/动态评估', 'VAS疼痛评分', '角膜检查'],
    recommended: ['FDI面部残疾指数', '面神经电图ENoG', 'Schirmer泪液试验', '味觉测定', '镫骨肌反射'],
    optional: ['Stennert面神经评分', 'Yanagihara评分', '眨眼反射', '肌电图EMG']
  },
  '膝关节骨关节炎': {
    core: ['WOMAC骨关节炎指数', 'VAS疼痛评分', '膝关节ROM测量', 'KOOS膝关节损伤和骨关节炎', '徒手肌力评定MMT'],
    recommended: ['Kellgren-Lawrence影像分级', 'TUG起立行走', '6分钟步行试验', '下肢肌力测定', '单腿站立平衡'],
    optional: ['NRS疼痛评分', '数字步态分析', 'Berg平衡量表', 'Lysholm膝关节评分']
  },
  '腰椎间盘突出': {
    core: ['VAS疼痛评分', '直腿抬高试验', 'JOA腰痛评价表', 'Oswestry功能障碍指数ODI', '神经定位检查'],
    recommended: ['徒手肌力评定MMT', '下肢神经牵拉试验', '感觉检查', '反射检查', '关节活动度测量'],
    optional: ['SF-36生活质量', 'McGill疼痛问卷', 'Beck抑郁量表', '恐惧回避信念问卷FABQ']
  },
  '肩袖损伤': {
    core: ['VAS疼痛评分', 'Constant-Murley肩关节评分', 'ASES美国肩肘外科评分', '肩关节ROM测量', '徒手肌力评定MMT'],
    recommended: ['空罐试验Jobe', '落臂试验', 'Neer撞击试验', 'Hawkins撞击试验', '外旋衰减征'],
    optional: ['DASH上肢功能障碍', 'UCLA肩关节评分', '简明肩关节疼痛评分SPADI', '数字触诊肌力']
  },
  '髋关节置换术后': {
    core: ['VAS疼痛评分', 'Harris髋关节评分', 'HOS髋关节结局评分', '髋关节ROM测量', '徒手肌力评定MMT'],
    recommended: ['TUG起立行走', '6分钟步行试验', 'Barthel指数', '下肢长度测量', '步态分析'],
    optional: ['SF-12生活质量', 'WOMAC骨关节炎指数', 'Oxford髋关节评分', '单腿站立平衡']
  },
  '颈椎病': {
    core: ['VAS疼痛评分', 'NDI颈椎功能障碍指数', '颈椎ROM测量', 'JOA颈椎评分', '神经定位检查'],
    recommended: ['Spurling压颈试验', '臂丛神经牵拉试验', 'Hoffmann征', '徒手肌力评定MMT', '上肢神经传导NCS'],
    optional: ['上肢两点辨别觉', 'SF-36生活质量', '颈痛量表NPQ', 'NRS疼痛评分']
  },
  '骨折后康复': {
    core: ['VAS疼痛评分', '骨折部位ROM测量', '徒手肌力评定MMT', '影像愈合评估', 'Barthel指数'],
    recommended: ['关节活动度测量', '肢体周径测量', '负重能力评估', '下肢长度测量', 'TUG起立行走'],
    optional: ['SF-36生活质量', '握力/肌力测定', 'Berg平衡量表', '步态分析']
  },
  'COPD': {
    core: ['mMRC呼吸困难评分', 'CAT慢阻肺评估测试', 'BODE指数', '6分钟步行试验', '肺功能FEV1'],
    recommended: ['Borg呼吸困难评分', '呼气峰流速PEF', 'Borg疲劳评分RPE', '圣乔治呼吸问卷SGRQ', '股四头肌肌力'],
    optional: ['HAMD抑郁量表', 'EQ-5D生活质量', '血气分析PaO2', '膈肌活动度超声']
  },
  '冠心病/心绞痛': {
    core: ['NYHA心功能分级', 'CCS心绞痛分级', '6分钟步行试验', 'METs代谢当量评估', '心电图运动负荷试验'],
    recommended: ['Borg疲劳评分RPE', 'VAS疼痛评分', '血压心率监测', 'DASI疾病特异性问卷', 'SF-36生活质量'],
    optional: ['HADS焦虑抑郁', 'EQ-5D生活质量', '西雅图心绞痛问卷SAQ', 'PHQ-9抑郁筛查']
  },
  '心力衰竭': {
    core: ['NYHA心功能分级', '6分钟步行试验', 'BNP/NT-proBNP', '明尼苏达心衰生活质量MLHFQ', 'METs代谢当量评估'],
    recommended: ['Borg呼吸困难评分', 'Borg疲劳评分RPE', '30秒坐起测试', '血压心率监测', 'HFSS心衰生存评分'],
    optional: ['HADS焦虑抑郁', 'EQ-5D生活质量', '体液潴留评估', '握力测定']
  },
  '肺康复（通用）': {
    core: ['mMRC呼吸困难评分', 'CAT慢阻肺评估测试', '6分钟步行试验', 'Borg呼吸困难评分', '肺功能FEV1'],
    recommended: ['Borg疲劳评分RPE', '圣乔治呼吸问卷SGRQ', '呼吸肌力测定MIP/MEP', '呼气峰流速PEF', '股四头肌肌力'],
    optional: ['HADS焦虑抑郁', 'EQ-5D生活质量', '膈肌活动度超声', '咳嗽峰流速']
  },
  '盆底功能障碍': {
    core: ['盆底肌力分级Oxford', '盆底功能障碍指数PFDI-20', '盆底障碍影响简易问卷PFIQ-7', 'VAS疼痛评分', '尿失禁影响问卷IIQ-7'],
    recommended: ['盆底表面肌电评估', '尿垫试验', '3天排尿日记', '肛提肌触诊', '盆底超声'],
    optional: ['性功能评估FSFI', '盆底脏器脱垂POP-Q', '便秘评估Wexner', 'HADS焦虑抑郁']
  },
  '产后盆底康复': {
    core: ['盆底肌力分级Oxford', '盆底功能障碍指数PFDI-20', 'Edinburgh产后抑郁EPDS', 'VAS疼痛评分', '腹直肌分离测量'],
    recommended: ['尿失禁影响问卷IIQ-7', '盆底表面肌电评估', '3天排尿日记', '会阴伤口评估', '盆底超声'],
    optional: ['性功能评估FSFI', '腹壁肌力测定', '骨盆带疼痛评估', '体成分分析']
  },
  '老年综合评估': {
    core: ['MMSE简易精神状态', 'Barthel指数', 'IADL工具性日常生活', 'TUG起立行走', 'MNA营养评估'],
    recommended: ['Berg平衡量表', '跌倒风险评估', 'HAMD抑郁量表', 'Get-up-and-Go', '多重用药评估'],
    optional: ['MoCA认知评估', 'Fried衰弱表型', 'Charlson合并症指数', '谵妄评估CAM']
  },
  '跌倒高风险': {
    core: ['Berg平衡量表', 'TUG起立行走', '五次坐立测试', '单腿站立平衡', '功能性伸展测试'],
    recommended: ['跌倒风险评估量表Morse', '步态分析', 'Romberg闭眼站立', '下肢肌力评定', '视力评估'],
    optional: ['Berg附加测试', '感觉检查', '多重用药评估', '起立行走计时TUG']
  },
  '认知障碍/痴呆': {
    core: ['MMSE简易精神状态', 'MoCA认知评估', 'AD8早期痴呆筛查', '日常生活能力ADL', 'Hachinski缺血评分'],
    recommended: ['Barthel指数', 'IADL工具性日常生活', 'HAMD抑郁量表', '临床痴呆评定CDR', '神经精神科问卷NPI'],
    optional: ['画钟试验CDT', '韦氏智力测验WAIS', 'HADS焦虑抑郁', '痴呆生活质量QoL-AD']
  },
  '儿童发育迟缓': {
    core: ['Gesell发育诊断量表', '丹佛发育筛查DDST', '贝利婴幼儿发育量表BSID', 'Peabody运动发育量表', '粗大运动功能评定GMFM'],
    recommended: ['GMFCS粗大运动分级', 'MACS手功能分级', 'PEDI儿童能力评估', '儿童孤独症评定CARS', 'WeeFIM儿童功能独立性'],
    optional: ['语言发育评估S-S法', '感觉统合评定量表', '儿童生活质量PedsQL', 'Vigotsky智力测验']
  },
  'ADHD/注意力缺陷': {
    core: ['Conners儿童行为量表', 'SNAP-IV注意力评定', 'Vanderbilt ADHD评定量表', 'Achenbach儿童行为量表CBCL', '韦氏智力测验WISC'],
    recommended: ['持续性操作测试CPT', 'BRIEF执行功能问卷', '划销测验', '儿童睡眠评估CSHQ', '儿童生活质量PedsQL'],
    optional: ['Weiss功能缺陷量表WFIRS', 'NICHQ Vanderbilt随访', '儿童焦虑量表SCARED', '感觉统合评定量表']
  }
};

// ==================== 临床指南核心推荐摘要 ====================
// 证据等级说明：
//   A — 高质量证据，强烈推荐（多项RCT或Meta分析支持）
//   B — 中等质量证据，推荐（单项RCT或高质量观察性研究）
//   C — 低质量证据，可选（专家共识或病例报告）
const clinicalGuidelines = [
  {
    id: 'stroke_2024',
    title: '中国脑卒中康复指南（2024版）',
    category: '神经',
    source: '中华医学会神经病学分会脑血管病学组',
    year: '2024',
    recommendations: [
      { text: '卒中后应尽早开始康复评定，推荐72小时内进行初次评定', level: 'A' },
      { text: '推荐采用Fugl-Meyer评估运动功能', level: 'A' },
      { text: '推荐对吞咽功能进行早期筛查，洼田饮水试验阳性者进一步行VFSS或FEES检查', level: 'A' },
      { text: '对存在痉挛的患者推荐采用改良Ashworth量表评定肌张力', level: 'B' },
      { text: '推荐多学科团队(MDT)协作模式进行卒中康复', level: 'B' }
    ],
    relatedScales: ['Fugl-Meyer上肢', 'Fugl-Meyer下肢', 'Berg平衡量表', 'Barthel指数', '改良Ashworth量表', '洼田饮水试验']
  },
  {
    id: 'sci_2025',
    title: '脊髓损伤康复临床指南（2025版）',
    category: '神经',
    source: '中华医学会物理医学与康复学分会',
    year: '2025',
    recommendations: [
      { text: '推荐采用ISNCSCI（ASIA）标准进行神经平面和损伤程度评定', level: 'A' },
      { text: '推荐伤后72小时内进行首次神经评定并定期复查', level: 'A' },
      { text: '对脊髓损伤患者应进行呼吸、膀胱、肠道及皮肤等多系统并发症管理', level: 'A' },
      { text: '推荐使用SCIM评估脊髓损伤患者日常生活能力', level: 'B' },
      { text: '对存在神经病理性疼痛的患者推荐使用VAS/NRS评定', level: 'B' }
    ],
    relatedScales: ['ASIA脊髓损伤评定', 'SCIM脊髓损伤独立性', 'VAS疼痛评分', 'Barthel指数', '改良Ashworth量表', '膀胱功能评定']
  },
  {
    id: 'tbi_2023',
    title: '创伤性脑损伤康复指南（2023版）',
    category: '神经',
    source: '中华医学会创伤学分会神经创伤专业组',
    year: '2023',
    recommendations: [
      { text: '推荐GCS评分评估伤情严重程度，GCS≤8分为重度脑外伤', level: 'A' },
      { text: '伤后应尽早开始意识、认知、运动、吞咽等多维度评定', level: 'A' },
      { text: '推荐Rancho Los Amigos认知功能分级评估意识恢复阶段', level: 'B' },
      { text: '对存在行为和情绪障碍的患者推荐使用HAMD/HAMA评估', level: 'B' },
      { text: '推荐GOSE评估长期结局和重返社会能力', level: 'A' }
    ],
    relatedScales: ['GCS格拉斯哥昏迷评分', 'GOSE扩展格拉斯哥结局', 'Rancho Los Amigos认知分级', 'Barthel指数', 'FIM功能独立性', 'HAMD抑郁量表']
  },
  {
    id: 'pd_2023',
    title: '帕金森病康复指南（2023版）',
    category: '神经',
    source: '中华医学会神经病学分会帕金森病及运动障碍学组',
    year: '2023',
    recommendations: [
      { text: '推荐采用MDS-UPDRS全面评估帕金森病运动和非运动症状', level: 'A' },
      { text: '应依据Hoehn-Yahr分期制定个体化康复方案', level: 'A' },
      { text: '对存在平衡障碍患者推荐Berg平衡量表和TUG评估跌倒风险', level: 'A' },
      { text: '推荐规律有氧训练和平衡训练以改善运动功能', level: 'A' },
      { text: '对存在抑郁的患者推荐使用HAMD筛查和干预', level: 'B' }
    ],
    relatedScales: ['UPDRS统一帕金森评分', 'Hoehn-Yahr分期', 'Berg平衡量表', 'TUG起立行走', 'HAMD抑郁量表', 'PDQ-39生活质量']
  },
  {
    id: 'koa_2024',
    title: '膝关节骨关节炎康复指南（2024版）',
    category: '骨科',
    source: '中华医学会骨科学分会关节外科学组',
    year: '2024',
    recommendations: [
      { text: '推荐采用WOMAC评估膝骨关节炎疼痛、僵硬和功能', level: 'A' },
      { text: '推荐Kellgren-Lawrence影像分级评估疾病严重程度', level: 'A' },
      { text: '规律进行股四头肌力量训练是核心康复措施', level: 'A' },
      { text: '体重管理可显著减轻膝关节负荷和症状', level: 'A' },
      { text: '对中重度患者推荐采用TUG和6分钟步行评估功能', level: 'B' }
    ],
    relatedScales: ['WOMAC骨关节炎指数', 'VAS疼痛评分', 'KOOS膝关节损伤和骨关节炎', 'Kellgren-Lawrence影像分级', 'TUG起立行走', '6分钟步行试验']
  },
  {
    id: 'ldh_2023',
    title: '腰椎间盘突出症康复指南（2023版）',
    category: '骨科',
    source: '中华医学会骨科学分会脊柱外科学组',
    year: '2023',
    recommendations: [
      { text: '推荐VAS/NRS评估腰腿痛程度', level: 'A' },
      { text: '推荐直腿抬高试验及神经定位检查评估神经根受压', level: 'A' },
      { text: '对慢性腰痛患者推荐使用ODI评估功能障碍程度', level: 'A' },
      { text: '核心稳定训练和McKenzie疗法是保守治疗的核心', level: 'A' },
      { text: '出现马尾综合征或进行性神经功能缺损应立即手术评估', level: 'A' }
    ],
    relatedScales: ['VAS疼痛评分', 'Oswestry功能障碍指数ODI', 'JOA腰痛评价表', '直腿抬高试验', '徒手肌力评定MMT', '神经定位检查']
  },
  {
    id: 'rct_2024',
    title: '肩袖损伤康复指南（2024版）',
    category: '骨科',
    source: '中华医学会运动医疗分会',
    year: '2024',
    recommendations: [
      { text: '推荐Constant-Murley评分全面评估肩关节功能', level: 'A' },
      { text: '推荐Jobe空罐试验和落臂试验筛查肩袖撕裂', level: 'A' },
      { text: '术后康复应严格遵循保护-渐进-强化分期原则', level: 'A' },
      { text: '推荐ASES评分评估术前及术后功能变化', level: 'B' },
      { text: '应早期介入被动活动以防止关节粘连', level: 'B' }
    ],
    relatedScales: ['Constant-Murley肩关节评分', 'ASES美国肩肘外科评分', 'VAS疼痛评分', '肩关节ROM测量', '徒手肌力评定MMT', '空罐试验Jobe']
  },
  {
    id: 'tha_2024',
    title: '全髋关节置换围手术期康复指南（2024版）',
    category: '骨科',
    source: '中华医学会骨科学分会关节外科学组',
    year: '2024',
    recommendations: [
      { text: '推荐Harris髋关节评分评估髋关节功能', level: 'A' },
      { text: '推荐术后当天或次日即开始早期下床活动', level: 'A' },
      { text: '术后6周内应避免髋关节过度屈曲、内收和内旋以防脱位', level: 'A' },
      { text: '推荐TUG和6分钟步行评估术后行走功能', level: 'B' },
      { text: '出院前应进行跌倒风险和居家环境评估', level: 'B' }
    ],
    relatedScales: ['Harris髋关节评分', 'HOS髋关节结局评分', 'VAS疼痛评分', 'TUG起立行走', '6分钟步行试验', 'Barthel指数']
  },
  {
    id: 'copd_2024',
    title: 'COPD肺康复临床实践指南（GOLD 2024中国版）',
    category: '心肺',
    source: '中华医学会呼吸病学分会慢性阻塞性肺疾病学组',
    year: '2024',
    recommendations: [
      { text: '推荐所有中重度COPD患者接受肺康复治疗', level: 'A' },
      { text: '推荐采用mMRC或CAT评估呼吸困难和生活质量', level: 'A' },
      { text: '推荐6分钟步行试验评估运动耐力', level: 'A' },
      { text: '推荐下肢肌力训练联合有氧训练作为核心方案', level: 'A' },
      { text: 'BODE指数可用于评估预后和死亡风险', level: 'B' }
    ],
    relatedScales: ['mMRC呼吸困难评分', 'CAT慢阻肺评估测试', 'BODE指数', '6分钟步行试验', '肺功能FEV1', '圣乔治呼吸问卷SGRQ']
  },
  {
    id: 'chd_2023',
    title: '冠心病心脏康复指南（2023版）',
    category: '心肺',
    source: '中国康复医学会心血管病专业委员会',
    year: '2023',
    recommendations: [
      { text: '推荐所有冠心病患者参加心脏康复程序', level: 'A' },
      { text: '推荐依据NYHA和CCS分级进行心功能和心绞痛评估', level: 'A' },
      { text: '推荐心电图运动负荷试验制定个体化运动处方', level: 'A' },
      { text: '运动训练目标心率为静息心率+20-30次/分，或采用Borg评分11-13', level: 'B' },
      { text: '推荐心理评估和干预改善患者预后', level: 'B' }
    ],
    relatedScales: ['NYHA心功能分级', 'CCS心绞痛分级', '6分钟步行试验', 'METs代谢当量评估', 'Borg疲劳评分RPE', '心电图运动负荷试验']
  },
  {
    id: 'hf_2023',
    title: '心力衰竭康复指南（2023版）',
    category: '心肺',
    source: '中国康复医学会心血管病专业委员会',
    year: '2023',
    recommendations: [
      { text: '推荐稳定期心衰患者接受心脏康复', level: 'A' },
      { text: '推荐NYHA分级和6分钟步行评估心功能和运动耐力', level: 'A' },
      { text: '推荐BNP/NT-proBNP监测评估心衰严重程度', level: 'A' },
      { text: '运动训练应从低强度开始，逐步进阶至中等强度', level: 'A' },
      { text: '推荐使用MLHFQ评估心衰患者生活质量', level: 'B' }
    ],
    relatedScales: ['NYHA心功能分级', '6分钟步行试验', 'BNP/NT-proBNP', '明尼苏达心衰生活质量MLHFQ', 'Borg呼吸困难评分', 'METs代谢当量评估']
  },
  {
    id: 'pfd_2024',
    title: '盆底功能障碍康复专家共识（2024版）',
    category: '盆底',
    source: '中华医学会妇产科学分会盆底学组',
    year: '2024',
    recommendations: [
      { text: '推荐Oxford盆底肌力分级评估盆底肌力量', level: 'A' },
      { text: '推荐PFDI-20和PFIQ-7评估盆底功能障碍对生活的影响', level: 'A' },
      { text: '盆底表面肌电和盆底超声是客观评估的重要手段', level: 'B' },
      { text: '推荐凯格尔训练作为一线保守治疗方案', level: 'A' },
      { text: '对尿失禁患者推荐尿垫试验和3天排尿日记', level: 'B' }
    ],
    relatedScales: ['盆底肌力分级Oxford', '盆底功能障碍指数PFDI-20', '盆底障碍影响简易问卷PFIQ-7', '尿失禁影响问卷IIQ-7', 'VAS疼痛评分', '盆底表面肌电评估']
  },
  {
    id: 'cga_2023',
    title: '老年综合评估专家共识（2023修订版）',
    category: '老年',
    source: '中华医学会老年医学分会',
    year: '2023',
    recommendations: [
      { text: '推荐对≥70岁老年人常规进行综合评估', level: 'A' },
      { text: '评估应涵盖躯体、认知、心理、社会和环境多个维度', level: 'A' },
      { text: '推荐MMSE/MoCA筛查认知功能', level: 'A' },
      { text: '推荐Barthel指数和IADL评估日常生活能力', level: 'A' },
      { text: '应对跌倒风险、营养、用药和衰弱进行系统筛查', level: 'B' }
    ],
    relatedScales: ['MMSE简易精神状态', 'Barthel指数', 'IADL工具性日常生活', 'TUG起立行走', 'MNA营养评估', 'Berg平衡量表']
  },
  {
    id: 'cp_2023',
    title: '儿童脑性瘫痪康复指南（2023版）',
    category: '儿童',
    source: '中华医学会儿科学分会康复学组',
    year: '2023',
    recommendations: [
      { text: '推荐GMFCS粗大运动分级进行功能分级和预后评估', level: 'A' },
      { text: '推荐GMFM评估粗大运动功能变化', level: 'A' },
      { text: '推荐MAS改良Ashworth量表评估痉挛程度', level: 'A' },
      { text: '应结合PEDI评估儿童参与和自理能力', level: 'B' },
      { text: '推荐多学科团队协作进行家庭为中心的康复', level: 'B' }
    ],
    relatedScales: ['GMFCS粗大运动分级', '粗大运动功能评定GMFM', 'MAS改良Ashworth量表', 'PEDI儿童能力评估', 'MACS手功能分级', 'Barthel指数']
  },
  {
    id: 'dd_2023',
    title: '儿童发育迟缓康复指南（2023版）',
    category: '儿童',
    source: '中华医学会儿科学分会发育行为学组',
    year: '2023',
    recommendations: [
      { text: '推荐Gesell发育诊断量表全面评估发育水平', level: 'A' },
      { text: '推荐丹佛发育筛查DDST进行早期筛查', level: 'A' },
      { text: '对疑似智力障碍患儿推荐使用韦氏智力测验确诊', level: 'B' },
      { text: '应早期识别并干预语言、运动、社交等多个领域迟缓', level: 'A' },
      { text: '家庭参与和家长教育是康复的重要组成部分', level: 'B' }
    ],
    relatedScales: ['Gesell发育诊断量表', '丹佛发育筛查DDST', '贝利婴幼儿发育量表BSID', 'Peabody运动发育量表', '粗大运动功能评定GMFM', 'WeeFIM儿童功能独立性']
  },
  {
    id: 'fracture_2023',
    title: '骨折后康复指南（2023版）',
    category: '骨科',
    source: '中华医学会骨科学分会创伤骨科学组',
    year: '2023',
    recommendations: [
      { text: '推荐影像学评估骨折愈合进程，结合临床体征决定负重进度', level: 'A' },
      { text: '推荐VAS评估骨折后疼痛，指导镇痛和康复进度', level: 'A' },
      { text: '推荐关节活动度和肌力评定监测功能恢复', level: 'A' },
      { text: '早期等长收缩训练可预防肌肉萎缩和关节僵硬', level: 'A' },
      { text: '推荐渐进负重训练，遵循保护-部分负重-完全负重原则', level: 'B' }
    ],
    relatedScales: ['VAS疼痛评分', '骨折部位ROM测量', '徒手肌力评定MMT', 'Barthel指数', 'TUG起立行走', '关节活动度测量']
  },
  {
    id: 'cervical_2023',
    title: '颈椎病康复指南（2023版）',
    category: '骨科',
    source: '中华医学会物理医学与康复学分会',
    year: '2023',
    recommendations: [
      { text: '推荐NDI颈椎功能障碍指数评估颈椎功能', level: 'A' },
      { text: '推荐JOA颈椎评分评估脊髓型颈椎病神经功能', level: 'A' },
      { text: '推荐Spurling试验和臂丛牵拉试验定位神经根受压', level: 'B' },
      { text: '保守治疗包括颈深屈肌训练、姿势矫正和手法治疗', level: 'A' },
      { text: '出现脊髓压迫体征应警惕脊髓型颈椎病，必要时手术', level: 'A' }
    ],
    relatedScales: ['NDI颈椎功能障碍指数', 'JOA颈椎评分', 'VAS疼痛评分', '颈椎ROM测量', '徒手肌力评定MMT', '神经定位检查']
  },
  {
    id: 'bell_2023',
    title: '面神经麻痹康复指南（2023版）',
    category: '神经',
    source: '中华医学会神经病学分会神经免疫学组',
    year: '2023',
    recommendations: [
      { text: '推荐House-Brackmann分级评估面神经功能', level: 'A' },
      { text: '推荐Sunnybrook面神经评定系统动态评估恢复情况', level: 'B' },
      { text: '急性期(72h内)糖皮质激素治疗可改善预后', level: 'A' },
      { text: '应进行角膜评估和保护，预防暴露性角膜炎', level: 'A' },
      { text: '推荐面部肌肉训练和镜像疗法促进功能恢复', level: 'B' }
    ],
    relatedScales: ['House-Brackmann面神经分级', 'Sunnybrook面神经评定', '面部静态/动态评估', 'VAS疼痛评分', 'FDI面部残疾指数', '面神经电图ENoG']
  },
  {
    id: 'osteo_2023',
    title: '骨质疏松症康复指南（2023版）',
    category: '骨科',
    source: '中华医学会骨科学分会骨质疏松学组',
    year: '2023',
    recommendations: [
      { text: '推荐DEXA双能X线测量骨密度，T值≤-2.5诊断骨质疏松', level: 'A' },
      { text: '推荐FRAX评估10年骨折风险', level: 'A' },
      { text: '推荐规律负重运动和抗阻训练改善骨密度', level: 'A' },
      { text: '对跌倒高风险患者推荐平衡训练预防骨折', level: 'A' },
      { text: '推荐VAS评估骨质疏松性骨折后疼痛', level: 'B' }
    ],
    relatedScales: ['VAS疼痛评分', 'TUG起立行走', 'Berg平衡量表', '跌倒风险评估', 'Barthel指数', '下肢肌力测定']
  },
  {
    id: 'dysphagia_2024',
    title: '吞咽障碍康复指南（2024版）',
    category: '神经',
    source: '中华医学会物理医学与康复学分会吞咽障碍学组',
    year: '2024',
    recommendations: [
      { text: '推荐对卒中、脑外伤等高危人群早期进行吞咽筛查', level: 'A' },
      { text: '推荐洼田饮水试验作为床旁筛查工具', level: 'A' },
      { text: '对筛查阳性者推荐VFSS或FEES进行进一步评估', level: 'A' },
      { text: '推荐容积-黏度测试(VVST)指导食物质地调整', level: 'B' },
      { text: '应制定个体化吞咽训练方案，包括代偿性和恢复性训练', level: 'B' }
    ],
    relatedScales: ['洼田饮水试验', 'GUSS吞咽功能评估', 'VFSS吞咽造影', 'FOIS功能经口摄入', 'EAT-10吞咽评估', '容积-黏度测试VVST']
  }
];
