const assessmentScales = [
  {
    id: 'vas',
    name: 'VAS 视觉模拟疼痛评分',
    shortName: 'VAS',
    category: 'pain',
    description: '最常用的疼痛评估工具，通过0-10cm视觉模拟尺评估疼痛强度',
    reliability: '信度高，广泛应用于临床各科疼痛评估',
    reference: '中华医学会疼痛学分会推荐',
    totalScore: 10,
    type: 'slider',
    question: '请标记您当前的疼痛程度',
    labels: ['无痛', '最剧烈疼痛'],
    interpretation: [
      { min: 0, max: 0, level: '无痛', color: 'success', desc: '无疼痛感觉' },
      { min: 1, max: 3, level: '轻度疼痛', color: 'success', desc: '疼痛轻微，不影响日常生活和睡眠' },
      { min: 4, max: 6, level: '中度疼痛', color: 'warning', desc: '疼痛明显，影响部分日常活动，睡眠受干扰' },
      { min: 7, max: 10, level: '重度疼痛', color: 'danger', desc: '疼痛剧烈，严重影响日常生活和睡眠' }
    ],
    calculate: function(answers) {
      return { score: answers[0] || 0, maxScore: 10 };
    }
  },
  {
    id: 'nrs',
    name: 'NRS 数字疼痛评分量表',
    shortName: 'NRS',
    category: 'pain',
    description: '0-10分数字评分法，更易操作，适合老年患者和儿童',
    reliability: '与VAS高度相关，临床操作简便',
    reference: '国际疼痛研究协会(IASP)推荐',
    totalScore: 10,
    type: 'number',
    min: 0,
    max: 10,
    question: '请用0-10的数字描述您的疼痛程度（0=无痛，10=最剧烈疼痛）',
    interpretation: [
      { min: 0, max: 0, level: '无痛', color: 'success', desc: '无疼痛感觉' },
      { min: 1, max: 3, level: '轻度疼痛', color: 'success', desc: '疼痛轻微，不影响日常生活' },
      { min: 4, max: 6, level: '中度疼痛', color: 'warning', desc: '疼痛明显，影响部分活动' },
      { min: 7, max: 10, level: '重度疼痛', color: 'danger', desc: '疼痛剧烈，难以忍受' }
    ],
    calculate: function(answers) {
      return { score: answers[0] || 0, maxScore: 10 };
    }
  },
  {
    id: 'p4',
    name: 'P4 疼痛强度量表',
    shortName: 'P4',
    category: 'pain',
    description: '4个维度评估疼痛：程度、频率、对睡眠影响、对日常活动影响',
    reliability: '简洁实用，适合快速筛查',
    reference: '初级保健疼痛评估工具',
    totalScore: 40,
    type: 'choice',
    questions: [
      { text: '疼痛程度', options: ['0分 - 无痛', '1分 - 很轻', '2分 - 轻度', '3分 - 中度', '4分 - 较重', '5分 - 剧烈', '6分 - 难以忍受', '7分 - 极剧烈', '8分 - 无法想象', '9分 - 剧痛', '10分 - 最剧烈'], scores: [0,1,2,3,4,5,6,7,8,9,10] },
      { text: '疼痛频率', options: ['0分 - 从不', '1分 - 很少', '2分 - 偶尔', '3分 - 有时', '4分 - 经常', '5分 - 很经常', '6分 - 频繁', '7分 - 很频繁', '8分 - 几乎总是', '9分 - 总是', '10分 - 持续不断'], scores: [0,1,2,3,4,5,6,7,8,9,10] },
      { text: '对睡眠的影响', options: ['0分 - 无影响', '1分 - 轻微影响', '2分 - 轻度影响', '3分 - 中度影响', '4分 - 较重影响', '5分 - 严重影响', '6分 - 很严重影响', '7分 - 非常严重', '8分 - 几乎不能睡', '9分 - 完全不能睡', '10分 - 痛醒彻夜'], scores: [0,1,2,3,4,5,6,7,8,9,10] },
      { text: '对日常活动的影响', options: ['0分 - 无影响', '1分 - 轻微影响', '2分 - 轻度影响', '3分 - 中度影响', '4分 - 较重影响', '5分 - 严重影响', '6分 - 很严重影响', '7分 - 非常严重', '8分 - 几乎不能活动', '9分 - 完全不能活动', '10分 - 需卧床'], scores: [0,1,2,3,4,5,6,7,8,9,10] }
    ],
    interpretation: [
      { min: 0, max: 10, level: '轻微疼痛', color: 'success', desc: '疼痛对生活影响很小' },
      { min: 11, max: 20, level: '轻度疼痛', color: 'success', desc: '疼痛有一定影响，但可正常生活' },
      { min: 21, max: 30, level: '中度疼痛', color: 'warning', desc: '疼痛明显影响生活质量，需干预' },
      { min: 31, max: 40, level: '重度疼痛', color: 'danger', desc: '疼痛严重影响生活，需积极治疗' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 40 };
    }
  },
  {
    id: 'ndi',
    name: 'NDI 颈椎功能障碍指数',
    shortName: 'NDI',
    category: 'neck',
    description: '10个项目，评估颈椎功能障碍程度，是颈椎评估的金标准',
    reliability: 'Cronbach\'s α = 0.87-0.93，重测信度好',
    reference: 'Vernon H, Mior S. The Neck Disability Index. J Manipulative Physiol Ther. 1991.',
    totalScore: 50,
    type: 'choice',
    questions: [
      { text: '1. 疼痛强度', options: ['无疼痛', '轻微疼痛', '中度疼痛', '较严重疼痛', '严重疼痛', '最严重疼痛'], scores: [0,1,2,3,4,5] },
      { text: '2. 个人护理（洗漱、穿衣等）', options: ['完全可以自理', '能正常自理但有疼痛', '自理时有疼痛、动作慢', '需要部分帮助', '大部分需要帮助', '完全不能自理'], scores: [0,1,2,3,4,5] },
      { text: '3. 提起重物', options: ['能提重物且无痛', '能提重物但有痛', '能提中等重物', '只能提轻物', '几乎不能提物', '完全不能提物'], scores: [0,1,2,3,4,5] },
      { text: '4. 阅读', options: ['可随意阅读无痛', '阅读时有轻度痛', '阅读时有中度痛', '因疼痛阅读困难', '因疼痛很少阅读', '因疼痛完全不能阅读'], scores: [0,1,2,3,4,5] },
      { text: '5. 头痛', options: ['完全无头痛', '偶尔轻微头痛', '中度头痛', '较严重头痛', '严重头痛', '频繁剧烈头痛'], scores: [0,1,2,3,4,5] },
      { text: '6. 注意力集中', options: ['完全可以集中', '轻度困难', '中度困难', '较难集中', '很难集中', '完全无法集中'], scores: [0,1,2,3,4,5] },
      { text: '7. 工作', options: ['正常工作无影响', '工作轻度受影响', '工作中度受影响', '工作大部分受影响', '工作严重受影响', '完全不能工作'], scores: [0,1,2,3,4,5] },
      { text: '8. 驾驶', options: ['可驾驶且无痛', '驾驶时轻度痛', '驾驶时中度痛', '驾驶较困难', '几乎不能驾驶', '完全不能驾驶'], scores: [0,1,2,3,4,5] },
      { text: '9. 睡眠', options: ['睡眠正常', '睡眠轻度受影响', '睡眠中度受影响', '睡眠较受影响', '睡眠严重受影响', '完全不能入睡'], scores: [0,1,2,3,4,5] },
      { text: '10. 娱乐活动', options: ['正常参加无痛', '参加时有轻度痛', '参加时有中度痛', '只能参加少量活动', '几乎不能参加', '完全不能参加'], scores: [0,1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 4, level: '无功能障碍', color: 'success', desc: '颈椎功能正常，日常生活不受影响' },
      { min: 5, max: 14, level: '轻度功能障碍', color: 'success', desc: '有轻微症状，基本不影响日常生活' },
      { min: 15, max: 24, level: '中度功能障碍', color: 'warning', desc: '症状明显，日常生活部分受限' },
      { min: 25, max: 34, level: '重度功能障碍', color: 'warning', desc: '功能受限明显，影响工作和生活' },
      { min: 35, max: 50, level: '完全功能障碍', color: 'danger', desc: '严重功能障碍，日常生活需他人协助' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 50 };
    }
  },
  {
    id: 'joa-cervical',
    name: 'JOA 颈椎评分',
    shortName: 'JOA-C',
    category: 'neck',
    description: '日本骨科协会颈椎评分，评估脊髓型颈椎病的功能状态',
    reliability: '国际通用，评估内容全面',
    reference: 'Japanese Orthopaedic Association',
    totalScore: 17,
    type: 'choice',
    questions: [
      { text: '1. 上肢运动功能', options: ['0分 - 不能用筷子或勺子进食', '1分 - 不能用筷子但能用勺子', '2分 - 用筷子很困难', '3分 - 用筷子不灵活', '4分 - 正常'], scores: [0,1,2,3,4] },
      { text: '2. 下肢运动功能', options: ['0分 - 不能行走', '1分 - 需在平坦处扶拐行走', '2分 - 上下楼梯需扶扶手', '3分 - 上下楼梯稍感困难', '4分 - 正常'], scores: [0,1,2,3,4] },
      { text: '3. 感觉功能-上肢', options: ['0分 - 有明显感觉障碍', '1分 - 有轻度感觉障碍或麻木', '2分 - 正常'], scores: [0,1,2] },
      { text: '4. 感觉功能-下肢', options: ['0分 - 有明显感觉障碍', '1分 - 有轻度感觉障碍或麻木', '2分 - 正常'], scores: [0,1,2] },
      { text: '5. 感觉功能-躯干', options: ['0分 - 有明显感觉障碍', '1分 - 有轻度感觉障碍', '2分 - 正常'], scores: [0,1,2] },
      { text: '6. 膀胱功能', options: ['0分 - 尿潴留', '1分 - 严重排尿困难', '2分 - 轻度排尿困难', '3分 - 正常'], scores: [0,1,2,3] }
    ],
    interpretation: [
      { min: 0, max: 4, level: '重度障碍', color: 'danger', desc: '脊髓功能严重受损，需紧急处理' },
      { min: 5, max: 9, level: '中度障碍', color: 'warning', desc: '功能明显受损，建议积极治疗' },
      { min: 10, max: 14, level: '轻度障碍', color: 'warning', desc: '有一定功能影响，保守治疗可改善' },
      { min: 15, max: 17, level: '正常', color: 'success', desc: '颈椎功能基本正常' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 17 };
    }
  },
  {
    id: 'odi',
    name: 'ODI Oswestry功能障碍指数',
    shortName: 'ODI',
    category: 'back',
    description: '评估腰痛功能障碍程度的金标准，10个维度',
    reliability: 'Cronbach\'s α = 0.92，全球最常用腰痛评估量表',
    reference: 'Fairbank JC et al. The Oswestry Low Back Pain Disability Questionnaire. Physiotherapy. 1980.',
    totalScore: 50,
    type: 'choice',
    questions: [
      { text: '1. 疼痛强度', options: ['无疼痛', '轻微疼痛', '中度疼痛', '较严重疼痛', '严重疼痛', '最严重疼痛'], scores: [0,1,2,3,4,5] },
      { text: '2. 个人护理', options: ['完全自理无痛', '自理有轻微疼痛', '自理疼痛动作慢', '需要部分帮助', '大部分需要帮助', '完全不能自理'], scores: [0,1,2,3,4,5] },
      { text: '3. 提举物品', options: ['可提重物无痛', '可提重物但痛', '可提中等重物', '只能提轻物', '几乎不能提', '完全不能提'], scores: [0,1,2,3,4,5] },
      { text: '4. 行走', options: ['行走无限制', '行走有轻微痛', '行走疼痛受限制', '需拐杖或助行器', '大部分时间卧床', '完全卧床'], scores: [0,1,2,3,4,5] },
      { text: '5. 坐位', options: ['随意坐无痛', '久坐有轻微痛', '坐1小时后疼痛', '坐半小时就痛', '坐10分钟就痛', '完全不能坐'], scores: [0,1,2,3,4,5] },
      { text: '6. 站立', options: ['随意站立无痛', '久站轻微疼痛', '站1小时后疼痛', '站半小时就痛', '站10分钟就痛', '完全不能站'], scores: [0,1,2,3,4,5] },
      { text: '7. 睡眠', options: ['睡眠正常无痛', '睡眠偶有疼痛', '因疼痛睡眠不足6小时', '因疼痛睡眠不足4小时', '因疼痛睡眠不足2小时', '彻夜痛不能眠'], scores: [0,1,2,3,4,5] },
      { text: '8. 性生活', options: ['正常且无痛', '正常但有轻微痛', '中度疼痛影响', '因疼痛明显减少', '因疼痛很少进行', '因疼痛完全不能'], scores: [0,1,2,3,4,5] },
      { text: '9. 社交活动', options: ['正常社交无痛', '社交有轻微疼痛', '社交中度受限制', '社交明显减少', '只能在家活动', '因疼痛完全不出门'], scores: [0,1,2,3,4,5] },
      { text: '10. 旅行', options: ['可长途旅行无痛', '旅行有轻微疼痛', '旅行超过2小时疼痛', '旅行超过1小时疼痛', '旅行超过30分钟疼痛', '完全不能旅行'], scores: [0,1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 4, level: '无功能障碍', color: 'success', desc: '腰部功能正常，日常生活不受限' },
      { min: 5, max: 14, level: '轻度功能障碍', color: 'success', desc: '轻微症状，基本不影响日常生活' },
      { min: 15, max: 24, level: '中度功能障碍', color: 'warning', desc: '症状明显，日常生活部分受限' },
      { min: 25, max: 34, level: '重度功能障碍', color: 'warning', desc: '功能受限明显，影响工作生活' },
      { min: 35, max: 50, level: '完全功能障碍', color: 'danger', desc: '严重功能障碍，卧床或需他人照料' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 50 };
    }
  },
  {
    id: 'joa-lumbar',
    name: 'JOA 腰椎评分',
    shortName: 'JOA-L',
    category: 'back',
    description: '日本骨科协会腰椎评分，全面评估腰椎功能',
    reliability: '国际通用的腰椎功能评估标准',
    reference: 'Japanese Orthopaedic Association',
    totalScore: 29,
    type: 'choice',
    questions: [
      { text: '1. 主观症状-腰痛', options: ['无疼痛', '偶有轻微疼痛', '常有轻度疼痛', '常有中度疼痛', '持续重度疼痛'], scores: [3,2,1,0,0] },
      { text: '2. 主观症状-腿痛/麻木', options: ['无疼痛麻木', '偶有轻微症状', '常有轻度症状', '常有中度症状', '持续重度症状'], scores: [3,2,1,0,0] },
      { text: '3. 主观症状-步态', options: ['正常', '轻度受限但可快走', '上下楼困难', '平地行走困难', '不能行走'], scores: [3,2,1,0,0] },
      { text: '4. 体征-直腿抬高试验', options: ['正常，抬高>70°', '30°-70°', '<30°'], scores: [2,1,0] },
      { text: '5. 体征-感觉障碍', options: ['无', '轻度', '明显'], scores: [2,1,0] },
      { text: '6. 体征-肌力下降', options: ['无', '轻度(4级)', '明显(0-3级)'], scores: [2,1,0] },
      { text: '7. 膀胱功能', options: ['正常', '轻度困难', '重度困难', '尿潴留/尿失禁'], scores: [0,-3,-6,-9] },
      { text: '8. 日常生活活动-翻身', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] },
      { text: '9. 日常生活活动-站立', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] },
      { text: '10. 日常生活活动-洗漱', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] },
      { text: '11. 日常生活活动-前屈', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] },
      { text: '12. 日常生活活动-坐位1小时', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] },
      { text: '13. 日常生活活动-提重物', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] },
      { text: '14. 日常生活活动-行走', options: ['完全可以', '有些困难', '非常困难'], scores: [2,1,0] }
    ],
    interpretation: [
      { min: 0, max: 10, level: '重度障碍', color: 'danger', desc: '腰椎功能严重受损，日常生活明显受限' },
      { min: 11, max: 18, level: '中度障碍', color: 'warning', desc: '功能明显受损，需积极治疗' },
      { min: 19, max: 25, level: '轻度障碍', color: 'warning', desc: '有一定功能影响，保守治疗可改善' },
      { min: 26, max: 29, level: '正常', color: 'success', desc: '腰椎功能基本正常' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 29 };
    }
  },
  {
    id: 'roland-morris',
    name: 'Roland-Morris功能障碍问卷',
    shortName: 'RMQ',
    category: 'back',
    description: '24项问卷，评估腰痛对日常生活的影响',
    reliability: 'Cronbach\'s α = 0.87-0.94，敏感度高',
    reference: 'Roland M, Morris R. A study of the natural history of back pain. Part I. Spine. 1983.',
    totalScore: 24,
    type: 'yesno',
    questions: [
      '我因为腰痛而呆在家里',
      '我比平时走得慢',
      '因为腰痛，我不能做我平时在家做的事',
      '因为腰痛，我需要借助扶手才能上楼梯',
      '因为腰痛，我早晨起床时比平时更痛',
      '因为腰痛，我不得不更频繁地换姿势',
      '我必须要小心才能避免扭到腰',
      '因为腰痛，我发现做任何事都很费力',
      '因为腰痛，我不能弯腰',
      '因为腰痛，我睡眠不好',
      '因为腰痛，我穿衣有困难',
      '因为腰痛，我走路时不得不跛行',
      '因为腰痛，我觉得我应该去看医生',
      '因为腰痛，我比平时吃得少',
      '因为腰痛，我很难自己穿袜子',
      '因为腰痛，我只能坐很短的时间',
      '因为腰痛，我的工作受到影响',
      '因为腰痛，我不能做我平时喜欢的事',
      '因为腰痛，我比平时更易怒、脾气更坏',
      '因为腰痛，我上楼梯有困难',
      '因为腰痛，我下楼梯有困难',
      '因为腰痛，我只能做很少的家务',
      '因为腰痛，我的性生活受到影响',
      '因为腰痛，我不得不用拐杖或手杖行走'
    ],
    interpretation: [
      { min: 0, max: 5, level: '轻微功能障碍', color: 'success', desc: '腰痛对日常生活影响很小' },
      { min: 6, max: 12, level: '轻度功能障碍', color: 'success', desc: '腰痛有一定影响，但可正常生活' },
      { min: 13, max: 18, level: '中度功能障碍', color: 'warning', desc: '腰痛明显影响生活质量' },
      { min: 19, max: 24, level: '重度功能障碍', color: 'danger', desc: '腰痛严重影响日常生活，需积极治疗' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { if (a) total++; });
      return { score: total, maxScore: 24 };
    }
  },
  {
    id: 'ucla-shoulder',
    name: 'UCLA 肩袖评分',
    shortName: 'UCLA',
    category: 'upper',
    description: '加州大学洛杉矶分校肩袖评分，评估肩袖损伤术后及功能',
    reliability: '广泛应用于肩袖损伤评估',
    reference: 'University of California, Los Angeles',
    totalScore: 35,
    type: 'choice',
    questions: [
      { text: '1. 疼痛', options: ['无痛', '轻微活动痛', '轻度活动痛', '中度疼痛', '重度疼痛'], scores: [10,8,5,0,0] },
      { text: '2. 功能', options: ['正常活动及工作', '可做大部分活动', '可做中等量活动', '可做少量活动', '完全不能活动'], scores: [10,7,4,0,0] },
      { text: '3. 向前屈曲角度', options: ['>150°', '120°-150°', '90°-119°', '45°-89°', '<45°'], scores: [5,4,3,2,1] },
      { text: '4. 前屈肌力', options: ['5级（正常）', '4级（良好）', '3级（尚可）', '2级（差）', '0-1级（瘫痪）'], scores: [5,4,3,2,1] },
      { text: '5. 患者满意度', options: ['非常满意', '满意', '一般', '不满意', '非常不满意'], scores: [5,4,3,0,0] }
    ],
    interpretation: [
      { min: 34, max: 35, level: '优', color: 'success', desc: '肩关节功能优秀，恢复良好' },
      { min: 28, max: 33, level: '良', color: 'success', desc: '肩关节功能良好，基本正常' },
      { min: 21, max: 27, level: '可', color: 'warning', desc: '肩关节功能中等，仍有改善空间' },
      { min: 0, max: 20, level: '差', color: 'danger', desc: '肩关节功能差，需进一步治疗' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 35 };
    }
  },
  {
    id: 'constant-murley',
    name: 'Constant-Murley 肩关节评分',
    shortName: 'Constant',
    category: 'upper',
    description: '100分制，全面评估肩关节疼痛、活动度、肌力和日常活动',
    reliability: '国际通用的肩关节功能评估金标准',
    reference: 'Constant CR, Murley AH. Clinical method of functional assessment of the shoulder. Clin Orthop. 1987.',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 疼痛（15分）', options: ['无疼痛', '轻度疼痛', '中度疼痛', '重度疼痛', '剧烈疼痛'], scores: [15,10,5,0,0] },
      { text: '2. 日常活动（20分）- 工作', options: ['正常', '轻度受限', '中度受限', '重度受限', '不能工作'], scores: [4,3,2,1,0] },
      { text: '3. 日常活动-娱乐运动', options: ['正常', '轻度受限', '中度受限', '重度受限', '不能参与'], scores: [4,3,2,1,0] },
      { text: '4. 日常活动-睡眠', options: ['不受影响', '轻度影响', '中度影响', '重度影响', '不能入睡'], scores: [4,3,2,1,0] },
      { text: '5. 日常活动-穿衣', options: ['完全正常', '轻度困难', '中度困难', '重度困难', '不能穿衣'], scores: [4,3,2,1,0] },
      { text: '6. 日常活动-个人卫生', options: ['完全正常', '轻度困难', '中度困难', '重度困难', '不能自理'], scores: [4,3,2,1,0] },
      { text: '7. 前屈活动度', options: ['>150°', '120°-150°', '90°-119°', '60°-89°', '30°-59°', '<30°'], scores: [10,8,6,4,2,0] },
      { text: '8. 外展活动度', options: ['>150°', '120°-150°', '90°-119°', '60°-89°', '30°-59°', '<30°'], scores: [10,8,6,4,2,0] },
      { text: '9. 内旋活动度', options: ['可到T1以上', 'T1-T6', 'T7-T12', 'L1-L5', '骶部', '不能'], scores: [10,8,6,4,2,0] },
      { text: '10. 外旋活动度', options: ['>60°', '45°-60°', '30°-44°', '15°-29°', '0°-14°', '后伸位'], scores: [10,8,6,4,2,0] },
      { text: '11. 肌力（25分）', options: ['5级-正常对抗阻力', '4级-可对抗部分阻力', '3级-可对抗重力', '2级-可水平活动', '1级-肌肉收缩', '0级-无收缩'], scores: [25,20,15,10,5,0] }
    ],
    interpretation: [
      { min: 90, max: 100, level: '优', color: 'success', desc: '肩关节功能优秀' },
      { min: 75, max: 89, level: '良', color: 'success', desc: '肩关节功能良好' },
      { min: 60, max: 74, level: '可', color: 'warning', desc: '肩关节功能中等' },
      { min: 40, max: 59, level: '差', color: 'warning', desc: '肩关节功能较差' },
      { min: 0, max: 39, level: '很差', color: 'danger', desc: '肩关节功能严重受损' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'dash',
    name: 'DASH 上肢功能障碍评定',
    shortName: 'DASH',
    category: 'upper',
    description: '30个项目，评估上肢肌肉骨骼疾病的功能状态',
    reliability: 'Cronbach\'s α = 0.96，国际通用上肢功能量表',
    reference: 'Hudak PL et al. Development of an upper extremity outcome measure. Am J Ind Med. 1996.',
    totalScore: 100,
    type: 'choice',
    note: 'DASH评分计算方式：[(所有项目得分总和 - 30) / 1.2]，得分越高表示功能障碍越重',
    questions: [
      { text: '1. 打开罐头或瓶盖', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '2. 书写', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '3. 转动钥匙', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '4. 准备饭菜', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '5. 在房屋内搬东西', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '6. 在外面搬运杂货', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '7. 提重物（5公斤以上）', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '8. 放在高处的物品', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '9. 穿衣服', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '10. 洗头', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '11. 用毛巾擦干后背', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '12. 系安全带', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '13. 处理小物件', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '14. 打扫房屋', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '15. 铺床', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '16. 使用园艺工具', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '17. 做爱', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '18. 推购物车', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '19. 爬楼梯', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '20. 站立半小时', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '21. 坐2小时', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '22. 打喷嚏或咳嗽', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '23. 开车或坐车', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '24. 休闲活动', options: ['无影响', '轻度影响', '中度影响', '重度影响', '无法进行'], scores: [1,2,3,4,5] },
      { text: '25. 工作中需要的活动', options: ['无影响', '轻度影响', '中度影响', '重度影响', '无法工作'], scores: [1,2,3,4,5] },
      { text: '26. 疼痛程度', options: ['无疼痛', '轻度疼痛', '中度疼痛', '重度疼痛', '极严重疼痛'], scores: [1,2,3,4,5] },
      { text: '27. 麻木刺痛', options: ['无', '轻度', '中度', '重度', '极严重'], scores: [1,2,3,4,5] },
      { text: '28. 刺痛', options: ['无', '轻度', '中度', '重度', '极严重'], scores: [1,2,3,4,5] },
      { text: '29. 无力感', options: ['无', '轻度', '中度', '重度', '极严重'], scores: [1,2,3,4,5] },
      { text: '30. 僵硬感', options: ['无', '轻度', '中度', '重度', '极严重'], scores: [1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 15, level: '轻度功能障碍', color: 'success', desc: '上肢功能基本正常' },
      { min: 16, max: 35, level: '中度功能障碍', color: 'warning', desc: '上肢功能有一定影响' },
      { min: 36, max: 55, level: '重度功能障碍', color: 'warning', desc: '上肢功能明显受限' },
      { min: 56, max: 100, level: '极重度功能障碍', color: 'danger', desc: '上肢功能严重受损' }
    ],
    calculate: function(answers) {
      let sum = 0;
      answers.forEach(a => { sum += (a || 0); });
      const score = ((sum - 30) / 1.2).toFixed(1);
      return { score: parseFloat(score), maxScore: 100 };
    }
  },
  {
    id: 'quickdash',
    name: 'QuickDASH 简短上肢功能评分',
    shortName: 'QuickDASH',
    category: 'wrist',
    description: 'DASH简化版，11个项目，快速评估上肢功能',
    reliability: 'Cronbach\'s α = 0.93，与DASH高度相关',
    reference: 'Beaton DE et al. QuickDASH. J Hand Ther. 2005.',
    totalScore: 100,
    type: 'choice',
    note: 'QuickDASH计算：[(总和 - 11) / 0.4]，得分越高功能障碍越重',
    questions: [
      { text: '1. 打开罐头或瓶盖', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '2. 书写', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '3. 在家里搬东西', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '4. 提起5公斤以上重物', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '5. 穿衣服', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '6. 用毛巾擦干后背', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '7. 处理小物件', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '8. 打扫房屋', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [1,2,3,4,5] },
      { text: '9. 疼痛程度', options: ['无疼痛', '轻度疼痛', '中度疼痛', '重度疼痛', '极严重'], scores: [1,2,3,4,5] },
      { text: '10. 刺痛感', options: ['无', '轻度', '中度', '重度', '极严重'], scores: [1,2,3,4,5] },
      { text: '11. 工作/日常活动受影响', options: ['无影响', '轻度影响', '中度影响', '重度影响', '无法进行'], scores: [1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 15, level: '轻度功能障碍', color: 'success', desc: '上肢功能基本正常' },
      { min: 16, max: 35, level: '中度功能障碍', color: 'warning', desc: '上肢功能有一定影响' },
      { min: 36, max: 55, level: '重度功能障碍', color: 'warning', desc: '上肢功能明显受限' },
      { min: 56, max: 100, level: '极重度功能障碍', color: 'danger', desc: '上肢功能严重受损' }
    ],
    calculate: function(answers) {
      let sum = 0;
      answers.forEach(a => { sum += (a || 0); });
      const score = ((sum - 11) / 0.4).toFixed(1);
      return { score: parseFloat(score), maxScore: 100 };
    }
  },
  {
    id: 'cooney-wrist',
    name: 'Cooney 腕关节评分',
    shortName: 'Cooney',
    category: 'wrist',
    description: '腕关节临床评分系统，评估疼痛、功能、活动度、握力',
    reliability: '广泛应用于腕关节疾病评估',
    reference: 'Cooney WP et al. Clinical evaluation of wrist disorders. J Bone Joint Surg. 1981.',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 疼痛', options: ['无疼痛', '轻微疼痛', '中度疼痛', '严重疼痛', '剧烈疼痛'], scores: [25,20,15,5,0] },
      { text: '2. 功能状况', options: ['正常工作生活', '可做大部分工作', '可做部分工作', '不能工作', '完全不能用腕'], scores: [25,20,15,5,0] },
      { text: '3. 腕部屈伸活动度', options: ['>90°', '60°-90°', '30°-59°', '<30°', '僵硬'], scores: [25,20,15,5,0] },
      { text: '4. 握力（与健侧比）', options: ['>90%', '60%-90%', '30%-59%', '<30%', '0'], scores: [25,20,15,5,0] }
    ],
    interpretation: [
      { min: 90, max: 100, level: '优', color: 'success', desc: '腕关节功能优秀' },
      { min: 75, max: 89, level: '良', color: 'success', desc: '腕关节功能良好' },
      { min: 60, max: 74, level: '可', color: 'warning', desc: '腕关节功能中等' },
      { min: 40, max: 59, level: '差', color: 'warning', desc: '腕关节功能较差' },
      { min: 0, max: 39, level: '很差', color: 'danger', desc: '腕关节功能严重受损' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'mayo-elbow',
    name: 'Mayo 肘关节功能评分',
    shortName: 'Mayo',
    category: 'upper',
    description: 'Mayo肘关节评分，评估疼痛、活动度、稳定性和功能',
    reliability: '国际通用肘关节功能评估标准',
    reference: 'Mayo Clinic Elbow Performance Score',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 疼痛（45分）', options: ['无疼痛', '轻微疼痛', '中度疼痛', '明显疼痛', '严重疼痛'], scores: [45,35,20,10,0] },
      { text: '2. 功能-日常生活活动', options: ['可以梳头、吃饭、穿衣', '可以吃饭穿衣，梳头困难', '吃饭穿衣均困难', '完全不能自理'], scores: [25,18,10,0] },
      { text: '3. 功能-提物能力', options: ['可提5公斤以上', '可提2-5公斤', '可提1公斤', '不能提物'], scores: [10,7,4,0] },
      { text: '4. 活动范围（屈伸+旋转）', options: ['>100°', '50°-100°', '<50°', '僵硬'], scores: [20,12,5,0] },
      { text: '5. 稳定性', options: ['稳定', '轻度不稳', '中度不稳', '重度不稳'], scores: [10,5,0,0] }
    ],
    interpretation: [
      { min: 90, max: 100, level: '优', color: 'success', desc: '肘关节功能优秀' },
      { min: 75, max: 89, level: '良', color: 'success', desc: '肘关节功能良好' },
      { min: 60, max: 74, level: '可', color: 'warning', desc: '肘关节功能中等' },
      { min: 40, max: 59, level: '差', color: 'warning', desc: '肘关节功能较差' },
      { min: 0, max: 39, level: '很差', color: 'danger', desc: '肘关节功能严重受损' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'hhs',
    name: 'HHS 髋关节评分',
    shortName: 'HHS',
    category: 'lower',
    description: 'Harris髋关节评分，评估髋关节疼痛、功能、畸形和活动度',
    reliability: '全髋关节置换术金标准评估工具',
    reference: 'Harris WH. Traumatic arthritis of the hip. J Bone Joint Surg. 1969.',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 疼痛', options: ['完全无痛', '偶尔轻微疼痛', '轻度疼痛不影响活动', '中度疼痛可忍受', '明显疼痛', '病残性疼痛', '剧烈疼痛'], scores: [44,40,30,20,10,0,0] },
      { text: '2. 功能-跛行', options: ['无', '轻度', '中度', '重度', '不能行走'], scores: [11,8,5,0,0] },
      { text: '3. 功能-辅助行走工具', options: ['不用', '单手杖长距离', '单拐杖', '双拐', '不能行走'], scores: [11,7,5,0,0] },
      { text: '4. 功能-坐椅子', options: ['坐普通椅子1小时无痛', '坐高椅子半小时', '坐高椅子不舒服', '不能坐椅子'], scores: [5,3,1,0] },
      { text: '5. 功能-乘公共汽车', options: ['可以', '不能'], scores: [1,0] },
      { text: '6. 功能-行走距离', options: ['6个街区以上', '4-5个街区', '2-3个街区', '室内行走', '卧床不能走'], scores: [11,8,5,2,0] },
      { text: '7. 功能-上下楼梯', options: ['正常上下', '需扶栏杆', '一步一阶', '不能上下楼'], scores: [4,2,1,0] },
      { text: '8. 功能-穿袜子/系鞋带', options: ['容易', '困难', '不能'], scores: [4,2,0] },
      { text: '9. 畸形', options: ['无畸形', '轻度畸形', '中度畸形', '重度畸形'], scores: [4,3,1,0] },
      { text: '10. 活动范围-屈曲', options: ['>90°', '60°-90°', '30°-59°', '<30°'], scores: [5,3,1,0] },
      { text: '11. 活动范围-内收外展', options: ['>30°', '15°-30°', '<15°', '0°'], scores: [3,2,1,0] },
      { text: '12. 活动范围-旋转', options: ['>30°', '15°-30°', '<15°', '0°'], scores: [2,1,0,0] }
    ],
    interpretation: [
      { min: 90, max: 100, level: '优', color: 'success', desc: '髋关节功能优秀' },
      { min: 80, max: 89, level: '良', color: 'success', desc: '髋关节功能良好' },
      { min: 70, max: 79, level: '可', color: 'warning', desc: '髋关节功能中等' },
      { min: 60, max: 69, level: '差', color: 'warning', desc: '髋关节功能较差' },
      { min: 0, max: 59, level: '很差', color: 'danger', desc: '髋关节功能严重受损' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'lysholm',
    name: 'Lysholm 膝关节评分',
    shortName: 'Lysholm',
    category: 'lower',
    description: '评估膝关节功能的常用量表，尤其适用于韧带损伤',
    reliability: 'Cronbach\'s α = 0.90，韧带损伤评估金标准',
    reference: 'Lysholm J, Gillquist J. Evaluation of knee ligament surgery results. Am J Sports Med. 1982.',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 跛行', options: ['无', '轻度/周期性', '重度', '不能行走'], scores: [5,3,1,0] },
      { text: '2. 拐杖支撑', options: ['不需要', '长距离需要手杖', '总是需要手杖', '不能负重'], scores: [5,3,1,0] },
      { text: '3. 交锁', options: ['无交锁或卡感', '偶有卡感', '经常卡感', '体检时交锁'], scores: [15,10,6,0] },
      { text: '4. 不稳定', options: ['在任何运动中都不打软腿', '在剧烈运动中偶有', '在日常活动中偶有', '经常发生', '每走一步都有'], scores: [25,20,15,10,0] },
      { text: '5. 疼痛', options: ['无疼痛', '剧烈运动后轻微疼痛', '剧烈运动后中度疼痛', '行走超过2公里后明显疼痛', '行走不到2公里即疼痛', '持续疼痛'], scores: [25,20,15,10,5,0] },
      { text: '6. 肿胀', options: ['无肿胀', '剧烈运动后有', '日常活动后有', '持续肿胀'], scores: [10,6,2,0] },
      { text: '7. 上下楼梯', options: ['正常无困难', '轻微乏力', '每次屈曲都乏力', '不能下楼'], scores: [10,6,2,0] },
      { text: '8. 下蹲', options: ['正常无困难', '轻微困难', '不能超过90°', '完全不能下蹲'], scores: [5,3,1,0] }
    ],
    interpretation: [
      { min: 95, max: 100, level: '优', color: 'success', desc: '膝关节功能优秀' },
      { min: 84, max: 94, level: '良', color: 'success', desc: '膝关节功能良好' },
      { min: 65, max: 83, level: '可', color: 'warning', desc: '膝关节功能中等' },
      { min: 0, max: 64, level: '差', color: 'danger', desc: '膝关节功能差' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'oxford-knee',
    name: 'Oxford 膝关节评分',
    shortName: 'Oxford-K',
    category: 'lower',
    description: '12项患者自评量表，评估膝关节置换术后功能',
    reliability: 'Cronbach\'s α = 0.88，国际广泛使用',
    reference: 'Oxford Knee Score, 1998',
    totalScore: 60,
    type: 'choice',
    note: '注意：Oxford评分越低表示功能越好（12-60分）',
    questions: [
      { text: '1. 您的膝关节疼痛程度如何？', options: ['完全无痛', '很轻微', '轻微', '中度', '严重'], scores: [1,2,3,4,5] },
      { text: '2. 夜间您因膝关节痛而醒的频率？', options: ['从不', '仅在睡前/刚醒', '每晚一次', '每晚两次以上', '经常因痛醒'], scores: [1,2,3,4,5] },
      { text: '3. 休息或坐着时膝关节疼痛？', options: ['完全无痛', '很轻微', '轻微', '中度', '严重'], scores: [1,2,3,4,5] },
      { text: '4. 行走时膝关节疼痛？', options: ['完全无痛', '很轻微', '轻微', '中度', '严重'], scores: [1,2,3,4,5] },
      { text: '5. 您能上几级楼梯？', options: ['正常', '很多层', '一层以上', '仅一层', '几乎不能'], scores: [1,2,3,4,5] },
      { text: '6. 您能下几级楼梯？', options: ['正常', '很多层', '一层以上', '仅一层', '几乎不能'], scores: [1,2,3,4,5] },
      { text: '7. 您能从椅子上站起来吗？', options: ['容易', '稍微用手', '用手帮忙', '需扶椅子', '几乎不能'], scores: [1,2,3,4,5] },
      { text: '8. 您能单腿站一会儿吗？', options: ['很容易', '可以但不稳', '只能站很短', '几乎不能', '完全不能'], scores: [1,2,3,4,5] },
      { text: '9. 您能在不平的路面行走吗？', options: ['容易', '稍困难', '中度困难', '很困难', '需扶着'], scores: [1,2,3,4,5] },
      { text: '10. 您能弯腰捡起东西吗？', options: ['容易', '稍困难', '中度困难', '很困难', '几乎不能'], scores: [1,2,3,4,5] },
      { text: '11. 您的膝关节在走路时打软腿吗？', options: ['从不', '很少', '有时', '经常', '很频繁'], scores: [1,2,3,4,5] },
      { text: '12. 您能进出汽车吗？', options: ['容易', '稍困难', '中度困难', '很困难', '几乎不能'], scores: [1,2,3,4,5] }
    ],
    interpretation: [
      { min: 12, max: 19, level: '优', color: 'success', desc: '膝关节功能优秀' },
      { min: 20, max: 29, level: '良', color: 'success', desc: '膝关节功能良好' },
      { min: 30, max: 39, level: '可', color: 'warning', desc: '膝关节功能中等' },
      { min: 40, max: 60, level: '差', color: 'danger', desc: '膝关节功能差' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 60 };
    }
  },
  {
    id: 'ikdc',
    name: 'IKDC 膝关节评分',
    shortName: 'IKDC',
    category: 'lower',
    description: '国际膝关节文献委员会评分，全面评估膝关节功能',
    reliability: '国际通用的膝关节功能评估标准',
    reference: 'International Knee Documentation Committee',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 上下楼梯', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '2. 跪下', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '3. 坐在地上后站起来', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '4. 深蹲', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '5. 跑步', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '6. 跳跃', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '7. 急停变向', options: ['无困难', '轻微困难', '中度困难', '重度困难', '无法做'], scores: [10,7,4,2,0] },
      { text: '8. 疼痛-日常活动', options: ['无痛', '轻微', '中度', '重度', '极重'], scores: [10,7,4,2,0] },
      { text: '9. 肿胀-日常活动', options: ['无', '轻微', '中度', '重度', '明显'], scores: [10,7,4,2,0] },
      { text: '10. 打软腿/错动感', options: ['从未', '很少', '有时', '经常', '总是'], scores: [10,7,4,2,0] }
    ],
    interpretation: [
      { min: 85, max: 100, level: '正常', color: 'success', desc: '膝关节功能正常' },
      { min: 70, max: 84, level: '接近正常', color: 'success', desc: '膝关节功能接近正常' },
      { min: 50, max: 69, level: '异常', color: 'warning', desc: '膝关节功能异常' },
      { min: 0, max: 49, level: '明显异常', color: 'danger', desc: '膝关节功能明显异常' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'aofas',
    name: 'AOFAS 踝-后足评分',
    shortName: 'AOFAS',
    category: 'ankle',
    description: '美国骨科足踝学会评分，评估踝后足疼痛、功能和力线',
    reliability: '国际通用足踝评估标准',
    reference: 'American Orthopaedic Foot and Ankle Society',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 疼痛（40分）', options: ['无疼痛', '轻度偶尔疼痛', '中度日常活动痛', '重度持续疼痛'], scores: [40,30,20,0] },
      { text: '2. 功能-日常活动限制', options: ['无限制', '日常活动不受限，重体力受限', '日常活动部分受限', '日常活动明显受限'], scores: [10,8,5,0] },
      { text: '3. 功能-最大步行距离', options: ['>6个街区', '4-6个街区', '1-3个街区', '<1个街区'], scores: [10,7,4,0] },
      { text: '4. 功能-行走路面', options: ['任何路面正常', '不平路面轻度困难', '不平路面中度困难', '只能在平路行走'], scores: [5,4,2,0] },
      { text: '5. 功能-上下楼梯', options: ['正常', '轻度困难', '中度困难', '不能'], scores: [5,4,2,0] },
      { text: '6. 功能-踝后足僵硬', options: ['无', '轻度', '中度', '重度'], scores: [8,6,3,0] },
      { text: '7. 功能-鞋的选择', options: ['任何鞋都可以', '大多数鞋可以', '只能穿宽松鞋', '不能穿鞋'], scores: [5,4,2,0] },
      { text: '8. 力线（10分）', options: ['良好', '轻度异常', '中度异常', '重度异常'], scores: [10,7,3,0] }
    ],
    interpretation: [
      { min: 90, max: 100, level: '优', color: 'success', desc: '踝后足功能优秀' },
      { min: 75, max: 89, level: '良', color: 'success', desc: '踝后足功能良好' },
      { min: 50, max: 74, level: '可', color: 'warning', desc: '踝后足功能中等' },
      { min: 0, max: 49, level: '差', color: 'danger', desc: '踝后足功能差' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'faam',
    name: 'FAAM 足踝能力评分',
    shortName: 'FAAM',
    category: 'ankle',
    description: '足踝功能活动量表，评估日常活动和运动功能',
    reliability: 'Cronbach\'s α = 0.89-0.98，效度好',
    reference: 'Foot and Ankle Ability Measure',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '日常生活活动-1. 站立', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-2. 行走', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-3. 上下楼梯', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-4. 穿鞋袜', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-5. 从椅子上站起', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-6. 深蹲', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-7. 转身', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '日常生活活动-8. 不平路面行走', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '运动功能-1. 跑步', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '运动功能-2. 跳跃', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '运动功能-3. 左右移动', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] },
      { text: '运动功能-4. 急停变向', options: ['无困难', '轻度困难', '中度困难', '重度困难', '无法做到'], scores: [4,3,2,1,0] }
    ],
    interpretation: [
      { min: 85, max: 100, level: '正常', color: 'success', desc: '足踝功能正常' },
      { min: 70, max: 84, level: '轻度异常', color: 'success', desc: '足踝功能轻度异常' },
      { min: 50, max: 69, level: '中度异常', color: 'warning', desc: '足踝功能中度异常' },
      { min: 0, max: 49, level: '重度异常', color: 'danger', desc: '足踝功能重度异常' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      const score = ((total / (answers.length * 4)) * 100).toFixed(1);
      return { score: parseFloat(score), maxScore: 100 };
    }
  },
  {
    id: 'psfs',
    name: 'PSFS 患者特异性功能量表',
    shortName: 'PSFS',
    category: 'function',
    description: '患者自己选择3-5项最重要的活动进行评分，个体化评估',
    reliability: 'Cronbach\'s α = 0.87，个体敏感度高',
    reference: 'Stratford PW et al. Patient-specific functional scale. Phys Ther. 1995.',
    totalScore: 30,
    type: 'number',
    customQuestions: true,
    questionCount: 3,
    instruction: '请输入3项对您最重要但因伤/病受限的活动，然后为每项打分（0分=完全不能做，10分=可以正常做）',
    min: 0,
    max: 10,
    interpretation: [
      { min: 0, max: 3, level: '严重功能受限', color: 'danger', desc: '所选活动基本无法完成' },
      { min: 4, max: 7, level: '中度功能受限', color: 'warning', desc: '所选活动完成有明显困难' },
      { min: 8, max: 10, level: '接近正常', color: 'success', desc: '所选活动基本可以正常完成' }
    ],
    calculate: function(answers, customActivities) {
      let total = 0;
      let count = 0;
      answers.forEach(a => { if (a !== undefined && a !== null) { total += parseFloat(a) || 0; count++; } });
      const avg = count > 0 ? (total / count).toFixed(1) : 0;
      return { score: parseFloat(avg), maxScore: 10, detail: '平均分' };
    }
  },
  {
    id: 'barthel',
    name: 'Barthel 指数',
    shortName: 'Barthel',
    category: 'function',
    description: '评估日常生活活动能力的最常用量表，10项内容',
    reliability: 'Cronbach\'s α = 0.89，全球通用',
    reference: 'Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. 1965.',
    totalScore: 100,
    type: 'choice',
    questions: [
      { text: '1. 进食', options: ['完全独立', '需部分帮助', '需大量帮助/不能进食'], scores: [10,5,0] },
      { text: '2. 洗澡', options: ['独立完成', '需帮助'], scores: [5,0] },
      { text: '3. 修饰（洗脸、刷牙、刮脸/梳头）', options: ['独立完成', '需帮助'], scores: [5,0] },
      { text: '4. 穿衣', options: ['独立完成', '需部分帮助', '需大量帮助'], scores: [10,5,0] },
      { text: '5. 控制大便', options: ['不失禁', '偶有失禁', '完全失禁'], scores: [10,5,0] },
      { text: '6. 控制小便', options: ['不失禁', '偶有失禁', '完全失禁/留置尿管'], scores: [10,5,0] },
      { text: '7. 上厕所', options: ['独立完成', '需部分帮助', '需大量帮助'], scores: [10,5,0] },
      { text: '8. 床椅转移', options: ['独立完成', '需少量帮助', '需大量帮助', '不能坐起'], scores: [15,10,5,0] },
      { text: '9. 平地行走', options: ['独立行走50米以上', '需辅助器具走50米', '需人帮助走50米', '不能行走'], scores: [15,10,5,0] },
      { text: '10. 上下楼梯', options: ['独立上下一层以上', '需辅助器具', '需帮助', '不能上下'], scores: [10,5,0,0] }
    ],
    interpretation: [
      { min: 100, max: 100, level: '完全独立', color: 'success', desc: '日常生活完全自理' },
      { min: 61, max: 99, level: '轻度依赖', color: 'success', desc: '轻度功能障碍，基本独立' },
      { min: 41, max: 60, level: '中度依赖', color: 'warning', desc: '中度功能障碍，部分需要帮助' },
      { min: 21, max: 40, level: '重度依赖', color: 'warning', desc: '重度功能障碍，大部分需要帮助' },
      { min: 0, max: 20, level: '完全依赖', color: 'danger', desc: '完全不能自理，需他人照料' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 100 };
    }
  },
  {
    id: 'fim',
    name: 'FIM 功能独立性评定',
    shortName: 'FIM',
    category: 'function',
    description: '18项功能独立性评定，评估运动和认知功能',
    reliability: '康复医学通用评估标准',
    reference: 'Uniform Data System for Medical Rehabilitation',
    totalScore: 126,
    type: 'choice',
    questions: [
      { text: '运动功能-1. 进食', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-2. 梳洗修饰', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-3. 洗澡', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-4. 穿上衣', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-5. 穿下衣', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-6. 入厕', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-7. 膀胱控制', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-8. 直肠控制', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-9. 床椅转移', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-10. 如厕转移', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-11. 浴盆转移', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-12. 行走/轮椅', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '运动功能-13. 上下楼梯', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '认知功能-14. 理解', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '认知功能-15. 表达', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '认知功能-16. 社会交往', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '认知功能-17. 问题解决', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] },
      { text: '认知功能-18. 记忆', options: ['完全独立', '基本独立', '有条件独立', '轻度依赖', '中度依赖', '重度依赖', '完全依赖'], scores: [7,6,5,4,3,2,1] }
    ],
    interpretation: [
      { min: 108, max: 126, level: '完全独立', color: 'success', desc: '功能基本独立，生活自理' },
      { min: 90, max: 107, level: '基本独立', color: 'success', desc: '轻度功能障碍，基本独立' },
      { min: 72, max: 89, level: '轻度依赖', color: 'warning', desc: '轻度依赖，需要少量帮助' },
      { min: 54, max: 71, level: '中度依赖', color: 'warning', desc: '中度依赖，需要较多帮助' },
      { min: 36, max: 53, level: '重度依赖', color: 'danger', desc: '重度依赖，大部分需要帮助' },
      { min: 18, max: 35, level: '极重度依赖', color: 'danger', desc: '极重度依赖，基本完全需要帮助' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 126 };
    }
  },
  {
    id: 'berg',
    name: 'Berg 平衡量表 (BBS)',
    shortName: 'Berg',
    category: 'balance',
    description: '14项平衡功能评定，评估静态和动态平衡能力',
    reliability: 'Cronbach\'s α = 0.95，平衡评估金标准',
    reference: 'Berg KO et al. Measuring balance in the elderly. Can J Public Health. 1989.',
    totalScore: 56,
    type: 'choice',
    questions: [
      { text: '1. 坐位到站立', options: ['4分 - 独立完成且稳定', '3分 - 需手辅助独立完成', '2分 - 需数次尝试且用手', '1分 - 需最小量帮助', '0分 - 需中/大量帮助'], scores: [4,3,2,1,0] },
      { text: '2. 无支撑站立', options: ['4分 - 可安全站2分钟', '3分 - 可在监护下站2分钟', '2分 - 可站立30秒', '1分 - 需数次尝试才能站30秒', '0分 - 不能独立站30秒'], scores: [4,3,2,1,0] },
      { text: '3. 无支撑坐位', options: ['4分 - 可安全坐2分钟', '3分 - 可在监护下坐2分钟', '2分 - 可坐30秒', '1分 - 可坐10秒', '0分 - 不能坐10秒'], scores: [4,3,2,1,0] },
      { text: '4. 站立到坐位', options: ['4分 - 独立完成且稳定', '3分 - 需手辅助独立完成', '2分 - 坐下时需手控制', '1分 - 需最小量帮助', '0分 - 需中/大量帮助'], scores: [4,3,2,1,0] },
      { text: '5. 转移', options: ['4分 - 独立安全转移', '3分 - 需手辅助独立完成', '2分 - 需口头提示/监护', '1分 - 需一人帮助', '0分 - 需两人帮助'], scores: [4,3,2,1,0] },
      { text: '6. 闭目站立', options: ['4分 - 可安全站立10秒', '3分 - 可在监护下站10秒', '2分 - 可站3秒', '1分 - 不能闭眼3秒但站稳', '0分 - 需帮助防跌倒'], scores: [4,3,2,1,0] },
      { text: '7. 双脚并拢站立', options: ['4分 - 独立安全站10秒', '3分 - 可在监护下站10秒', '2分 - 可双脚并拢站3秒', '1分 - 需帮助但脚可并拢', '0分 - 脚不能并拢且需帮助'], scores: [4,3,2,1,0] },
      { text: '8. 上肢前伸', options: ['4分 - 可前伸25cm以上', '3分 - 可前伸12cm以上', '2分 - 可前伸5cm以上', '1分 - 前伸需监护', '0分 - 前伸时失去平衡'], scores: [4,3,2,1,0] },
      { text: '9. 从地面捡起物品', options: ['4分 - 可独立安全捡起', '3分 - 可在监护下捡起', '2分 - 伸手差2-3cm但保持平衡', '1分 - 伸手需监护', '0分 - 不能尝试/需帮助'], scores: [4,3,2,1,0] },
      { text: '10. 转身向后看', options: ['4分 - 左右侧都可且重心转移好', '3分 - 一侧可另一侧差', '2分 - 只能侧转但保持平衡', '1分 - 转身需监护', '0分 - 转身需帮助'], scores: [4,3,2,1,0] },
      { text: '11. 转身一周', options: ['4分 - 独立安全在4秒内完成', '3分 - 独立安全但>4秒', '2分 - 可独立但需监护', '1分 - 需最小量帮助', '0分 - 需大量帮助'], scores: [4,3,2,1,0] },
      { text: '12. 无支撑将脚放在台阶上', options: ['4分 - 独立安全且每脚放4次', '3分 - 独立放置2次', '2分 - 可独立放1次', '1分 - 需监护/最小帮助', '0分 - 需帮助防跌倒'], scores: [4,3,2,1,0] },
      { text: '13. 一脚在前站立', options: ['4分 - 独立站稳30秒', '3分 - 可在监护下站30秒', '2分 - 可站10秒', '1分 - 可迈一小步并保持3秒', '0分 - 迈步或站立时失去平衡'], scores: [4,3,2,1,0] },
      { text: '14. 单腿站立', options: ['4分 - 可独立站10秒以上', '3分 - 可独立站5-10秒', '2分 - 可独立站3-5秒', '1分 - 尝试抬腿但不能站3秒但保持站立', '0分 - 不能尝试/需帮助'], scores: [4,3,2,1,0] }
    ],
    interpretation: [
      { min: 45, max: 56, level: '平衡功能良好', color: 'success', desc: '平衡功能良好，可独立行走，跌倒风险低' },
      { min: 40, max: 44, level: '平衡功能一般', color: 'warning', desc: '有一定平衡障碍，有跌倒风险' },
      { min: 21, max: 39, level: '平衡功能差', color: 'warning', desc: '平衡功能差，需辅助行走，跌倒风险较高' },
      { min: 0, max: 20, level: '平衡功能很差', color: 'danger', desc: '平衡功能严重受损，需轮椅代步，跌倒风险高' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 56 };
    }
  },
  {
    id: 'holden',
    name: 'Holden 步行功能分级',
    shortName: 'Holden',
    category: 'balance',
    description: 'Holden步行功能分级，评估步行能力和独立性',
    reliability: '康复医学常用步行功能评估',
    reference: 'Holden MK et al. Functional gait categories. Phys Ther. 1984.',
    totalScore: 5,
    type: 'choice',
    questions: [
      { text: '请选择最符合患者步行功能的级别', options: [
        '0级 - 不能行走或需2人以上帮助',
        '1级 - 需1人持续有力搀扶才能行走',
        '2级 - 需1人间断搀扶以保持平衡',
        '3级 - 需1人口头指导或监护，不需身体接触',
        '4级 - 可在平地上独立行走，上下楼梯需扶手',
        '5级 - 完全独立，可上下楼梯、走斜坡、不平路面'
      ], scores: [0,1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 0, level: '0级 - 无步行能力', color: 'danger', desc: '不能行走，需完全依赖' },
      { min: 1, max: 1, level: '1级 - 大量辅助', color: 'danger', desc: '需大量身体辅助才能行走' },
      { min: 2, max: 2, level: '2级 - 少量辅助', color: 'warning', desc: '需少量身体辅助以保持平衡' },
      { min: 3, max: 3, level: '3级 - 监护/口头指导', color: 'warning', desc: '不需身体接触，但需监护或口头指导' },
      { min: 4, max: 4, level: '4级 - 基本独立', color: 'success', desc: '平地独立行走，上下楼需辅助' },
      { min: 5, max: 5, level: '5级 - 完全独立', color: 'success', desc: '完全独立，适应各种复杂路面' }
    ],
    calculate: function(answers) {
      return { score: answers[0] || 0, maxScore: 5 };
    }
  },
  {
    id: 'sf12',
    name: 'SF-12 生活质量量表',
    shortName: 'SF-12',
    category: 'quality',
    description: 'SF-36简化版，12个项目，评估躯体健康和心理健康',
    reliability: 'Cronbach\'s α = 0.72-0.89，与SF-36高度相关',
    reference: 'Ware JE Jr et al. SF-12 Health Survey. 1996.',
    totalScore: 100,
    type: 'choice',
    note: '包含躯体健康总评(PCS)和心理健康总评(MCS)两个维度',
    questions: [
      { text: '1. 总体来说，您的健康状况是？', options: ['非常好', '很好', '好', '一般', '差'], scores: [5,4,3,2,1] },
      { text: '2. 因健康原因，剧烈活动受限程度', options: ['完全不受限', '大部分不受限', '中度受限', '重度受限', '完全不能做'], scores: [5,4,3,2,1] },
      { text: '3. 因健康原因，适度活动受限程度', options: ['完全不受限', '大部分不受限', '中度受限', '重度受限', '完全不能做'], scores: [5,4,3,2,1] },
      { text: '4. 因健康原因，提重物受限程度', options: ['完全不受限', '大部分不受限', '中度受限', '重度受限', '完全不能做'], scores: [5,4,3,2,1] },
      { text: '5. 因健康原因，爬楼梯受限程度', options: ['完全不受限', '大部分不受限', '中度受限', '重度受限', '完全不能做'], scores: [5,4,3,2,1] },
      { text: '6. 过去4周，因身体健康问题减少工作或其他活动时间', options: ['完全没有', '有一点', '中等程度', '大部分时间', '所有时间'], scores: [5,4,3,2,1] },
      { text: '7. 过去4周，因情绪问题减少工作或其他活动时间', options: ['完全没有', '有一点', '中等程度', '大部分时间', '所有时间'], scores: [5,4,3,2,1] },
      { text: '8. 过去4周，因健康问题活动受限', options: ['完全没有', '有一点', '中等程度', '大部分时间', '所有时间'], scores: [5,4,3,2,1] },
      { text: '9. 过去4周，您的疼痛程度', options: ['完全无痛', '很轻微', '轻度', '中度', '重度'], scores: [5,4,3,2,1] },
      { text: '10. 过去4周，您精力充沛吗？', options: ['一直是', '大部分时间', '有时', '偶尔', '从来没有'], scores: [5,4,3,2,1] },
      { text: '11. 过去4周，您感到情绪低落、抑郁吗？', options: ['从来没有', '偶尔', '有时', '大部分时间', '一直是'], scores: [5,4,3,2,1] },
      { text: '12. 过去4周，您的心理健康影响社交活动吗？', options: ['完全不影响', '轻度影响', '中度影响', '重度影响', '完全不能社交'], scores: [5,4,3,2,1] }
    ],
    interpretation: [
      { min: 50, max: 60, level: '生活质量优秀', color: 'success', desc: '身心健康状态良好' },
      { min: 40, max: 49, level: '生活质量良好', color: 'success', desc: '身心健康状态较好' },
      { min: 30, max: 39, level: '生活质量中等', color: 'warning', desc: '身心健康状态一般' },
      { min: 20, max: 29, level: '生活质量较差', color: 'warning', desc: '身心健康状态较差' },
      { min: 12, max: 19, level: '生活质量差', color: 'danger', desc: '身心健康状态差' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      const score = ((total / (answers.length * 5)) * 100).toFixed(1);
      return { score: parseFloat(score), maxScore: 100 };
    }
  },
  {
    id: 'mmt',
    name: 'MMT 徒手肌力测试',
    shortName: 'MMT',
    category: 'muscle',
    description: '6级分级法，评估肌肉力量',
    reliability: '临床最常用肌力评估方法',
    reference: 'Kendall FP. Muscles: Testing and Function.',
    totalScore: 5,
    type: 'choice',
    questions: [
      { text: '请选择受测肌肉的肌力等级', options: [
        '0级 - 无肌肉收缩（完全瘫痪）',
        '1级 - 有肌肉收缩但无关节活动',
        '2级 - 消除重力下可完成全范围活动',
        '3级 - 抗重力下可完成全范围活动',
        '4级 - 抗重力+部分阻力下可完成全范围活动',
        '5级 - 抗重力+充分阻力下可完成全范围活动（正常）'
      ], scores: [0,1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 0, level: '0级 - 完全瘫痪', color: 'danger', desc: '无肌肉收缩，完全瘫痪' },
      { min: 1, max: 1, level: '1级 - 微缩', color: 'danger', desc: '有肌肉收缩但无关节活动' },
      { min: 2, max: 2, level: '2级 - 差', color: 'warning', desc: '消除重力下可完成全范围活动' },
      { min: 3, max: 3, level: '3级 - 尚可', color: 'warning', desc: '抗重力下可完成全范围活动' },
      { min: 4, max: 4, level: '4级 - 良好', color: 'success', desc: '抗重力+部分阻力下可完成全范围活动' },
      { min: 5, max: 5, level: '5级 - 正常', color: 'success', desc: '抗重力+充分阻力下可完成全范围活动' }
    ],
    calculate: function(answers) {
      return { score: answers[0] || 0, maxScore: 5 };
    }
  },
  {
    id: 'rom',
    name: 'ROM 关节活动度评估',
    shortName: 'ROM',
    category: 'muscle',
    description: '评估关节活动范围，与健侧或正常值对比',
    reliability: '骨科康复基础评估项目',
    reference: '关节活动度测量标准',
    totalScore: 100,
    type: 'number',
    instruction: '请填写患侧关节活动度数（与健侧/正常值对比，按百分比计算得分）',
    questions: [
      { text: '患侧关节活动度（度）', placeholder: '请输入度数', min: 0, max: 360 },
      { text: '健侧/正常值（度）', placeholder: '请输入正常度数', min: 0, max: 360 }
    ],
    interpretation: [
      { min: 85, max: 100, level: '正常', color: 'success', desc: '关节活动度基本正常' },
      { min: 60, max: 84, level: '轻度受限', color: 'success', desc: '关节活动度轻度受限' },
      { min: 40, max: 59, level: '中度受限', color: 'warning', desc: '关节活动度中度受限' },
      { min: 20, max: 39, level: '重度受限', color: 'warning', desc: '关节活动度重度受限' },
      { min: 0, max: 19, level: '严重受限', color: 'danger', desc: '关节活动度严重受限' }
    ],
    calculate: function(answers) {
      const affected = parseFloat(answers[0]) || 0;
      const normal = parseFloat(answers[1]) || 1;
      const score = Math.min(100, Math.max(0, (affected / normal) * 100)).toFixed(1);
      return { score: parseFloat(score), maxScore: 100, detail: `患侧${affected}°/正常${normal}°` };
    }
  },
  {
    id: 'ashworth',
    name: '改良Ashworth 肌张力量表',
    shortName: 'MAS',
    category: 'muscle',
    description: '评估肌张力增高程度，6级分级法',
    reliability: '国际通用肌张力评估标准',
    reference: 'Modified Ashworth Scale',
    totalScore: 5,
    type: 'choice',
    questions: [
      { text: '请选择肌张力等级', options: [
        '0级 - 肌张力无增加',
        '1级 - 肌张力轻度增加，在ROM末出现卡住或突然释放',
        '1+级 - 肌张力轻度增加，在ROM前50%内出现卡住',
        '2级 - 肌张力明显增加，大部分ROM内肌张力均增加',
        '3级 - 肌张力严重增加，被动活动困难',
        '4级 - 僵直，受累肢体被动活动时呈僵直状态'
      ], scores: [0,1,2,3,4,5] }
    ],
    interpretation: [
      { min: 0, max: 0, level: '0级 - 正常肌张力', color: 'success', desc: '肌张力正常' },
      { min: 1, max: 2, level: '轻度增高', color: 'warning', desc: '肌张力轻度增高' },
      { min: 3, max: 3, level: '中度增高', color: 'warning', desc: '肌张力明显增高' },
      { min: 4, max: 4, level: '重度增高', color: 'danger', desc: '肌张力严重增高' },
      { min: 5, max: 5, level: '僵直', color: 'danger', desc: '关节僵直' }
    ],
    calculate: function(answers) {
      return { score: answers[0] || 0, maxScore: 5 };
    }
  },
  {
    id: 'gad7',
    name: 'GAD-7 焦虑自评量表',
    shortName: 'GAD-7',
    category: 'mental',
    description: '7个项目，筛查广泛性焦虑障碍',
    reliability: 'Cronbach\'s α = 0.92，国际通用焦虑筛查工具',
    reference: 'Spitzer RL et al. A brief measure for assessing generalized anxiety disorder. Arch Intern Med. 2006.',
    totalScore: 21,
    type: 'choice',
    questions: [
      { text: '1. 感到紧张、焦虑或烦躁', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '2. 不能停止或控制担忧', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '3. 对各种事情过度担忧', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '4. 难以放松', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '5. 坐立不安、难以静下来', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '6. 容易烦恼或急躁', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '7. 害怕有可怕的事情发生', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] }
    ],
    interpretation: [
      { min: 0, max: 4, level: '无焦虑症状', color: 'success', desc: '无明显焦虑症状' },
      { min: 5, max: 9, level: '轻度焦虑', color: 'success', desc: '轻度焦虑，建议自我调节' },
      { min: 10, max: 14, level: '中度焦虑', color: 'warning', desc: '中度焦虑，建议心理咨询' },
      { min: 15, max: 21, level: '重度焦虑', color: 'danger', desc: '重度焦虑，建议专业治疗' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 21 };
    }
  },
  {
    id: 'phq9',
    name: 'PHQ-9 抑郁自评量表',
    shortName: 'PHQ-9',
    category: 'mental',
    description: '9个项目，筛查抑郁障碍的严重程度',
    reliability: 'Cronbach\'s α = 0.89，国际通用抑郁筛查工具',
    reference: 'Kroenke K et al. The PHQ-9. J Gen Intern Med. 2001.',
    totalScore: 27,
    type: 'choice',
    questions: [
      { text: '1. 做事提不起劲或没有兴趣', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '2. 感到心情低落、沮丧或绝望', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '3. 入睡困难、睡不安或睡眠过多', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '4. 感觉疲倦或没有活力', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '5. 食欲不振或吃太多', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '6. 觉得自己很糟或自己是失败者', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '7. 注意力难以集中', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '8. 动作/说话缓慢，或烦躁焦虑', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] },
      { text: '9. 有不如死掉或伤害自己的念头', options: ['完全没有', '几天', '一半以上时间', '几乎每天'], scores: [0,1,2,3] }
    ],
    interpretation: [
      { min: 0, max: 4, level: '无抑郁症状', color: 'success', desc: '无明显抑郁症状' },
      { min: 5, max: 9, level: '轻度抑郁', color: 'success', desc: '轻度抑郁，建议自我调节' },
      { min: 10, max: 14, level: '中度抑郁', color: 'warning', desc: '中度抑郁，建议心理咨询' },
      { min: 15, max: 19, level: '中重度抑郁', color: 'warning', desc: '中重度抑郁，建议专业治疗' },
      { min: 20, max: 27, level: '重度抑郁', color: 'danger', desc: '重度抑郁，需立即专业干预' }
    ],
    calculate: function(answers) {
      let total = 0;
      answers.forEach(a => { total += (a || 0); });
      return { score: total, maxScore: 27 };
    }
  }
];

const scaleCategoryInfo = {
  pain: { name: '疼痛评估', icon: 'pain' },
  neck: { name: '颈肩评估', icon: 'cervical' },
  back: { name: '腰背评估', icon: 'lumbar' },
  upper: { name: '上肢评估', icon: 'hand' },
  wrist: { name: '腕手评估', icon: 'hand' },
  lower: { name: '下肢评估', icon: 'knee' },
  ankle: { name: '踝足评估', icon: 'ankle' },
  function: { name: '功能与生活能力', icon: 'function' },
  balance: { name: '平衡与步行', icon: 'balance' },
  quality: { name: '生活质量', icon: 'quality' },
  muscle: { name: '肌肉与关节功能', icon: 'muscleTest' },
  mental: { name: '心理状态', icon: 'mental' }
};
