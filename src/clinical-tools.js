// ============================================================
// 肌骨康复速查 V2.0 - 康复临床工具数据
// 包含关节活动度、肌力分级、痉挛评估、步态分析、感觉评估、
// 反射检查及常用计算工具
// 数据来源：AAOS《关节活动度测量》、Daniels《徒手肌力检查》、
//           Bohannon《改良Ashworth量表》、Perry《步态分析》等
// ============================================================

const clinicalTools = [

  // ==================== 一、关节活动度参考值 ====================

  {
    id: 'rom_shoulder',
    name: '肩关节活动度',
    category: '关节测角',
    description: '肩关节（盂肱关节）各方向正常活动范围，含功能活动范围',
    type: 'reference',
    content: {
      joint: '肩关节',
      position: '坐位或仰卧位，固定肩胛骨',
      goniometer: '轴心：肩峰下方；固定臂：与躯干平行；移动臂：与肱骨长轴平行',
      movements: [
        { name: '前屈', normal: '0-180°', functional: '0-120°', notes: '三角肌前束、喙肱肌' },
        { name: '后伸', normal: '0-60°', functional: '0-45°', notes: '背阔肌、三角肌后束' },
        { name: '外展', normal: '0-180°', functional: '0-120°', notes: '三角肌中束、冈上肌' },
        { name: '内收', normal: '0-45°', functional: '0-30°', notes: '胸大肌、背阔肌' },
        { name: '外旋', normal: '0-90°', functional: '0-60°', notes: '冈下肌、小圆肌' },
        { name: '内旋', normal: '0-90°', functional: '0-70°', notes: '肩胛下肌、胸大肌' },
        { name: '水平内收', normal: '0-135°', functional: '0-100°', notes: '胸大肌、三角肌前束' },
        { name: '水平外展', normal: '0-30°', functional: '0-20°', notes: '三角肌后束、冈下肌' }
      ]
    }
  },

  {
    id: 'rom_elbow',
    name: '肘关节活动度',
    category: '关节测角',
    description: '肘关节及前臂正常活动范围',
    type: 'reference',
    content: {
      joint: '肘关节及前臂',
      position: '坐位，上臂贴近躯干，肘屈90°，前臂中立位',
      goniometer: '轴心：肱骨外上髁；固定臂：肱骨长轴；移动臂：桡骨长轴',
      movements: [
        { name: '屈曲', normal: '0-150°', functional: '0-140°', notes: '肱二头肌、肱肌、肱桡肌' },
        { name: '伸展', normal: '0°', functional: '0°', notes: '肱三头肌；过伸＞10°为关节松弛' },
        { name: '旋前', normal: '0-80°', functional: '0-75°', notes: '旋前方肌、旋前圆肌' },
        { name: '旋后', normal: '0-80°', functional: '0-75°', notes: '肱二头肌、旋后肌' }
      ]
    }
  },

  {
    id: 'rom_wrist',
    name: '腕关节活动度',
    category: '关节测角',
    description: '腕关节（桡腕关节）各方向正常活动范围',
    type: 'reference',
    content: {
      joint: '腕关节',
      position: '坐位，前臂置于桌面，肘屈90°，前臂旋前',
      goniometer: '轴心：腕关节尺骨茎突；固定臂：前臂背侧中线；移动臂：第3掌骨',
      movements: [
        { name: '掌屈', normal: '0-80°', functional: '0-60°', notes: '桡侧腕屈肌、尺侧腕屈肌、掌长肌' },
        { name: '背伸', normal: '0-70°', functional: '0-50°', notes: '桡侧腕长/短伸肌、尺侧腕伸肌' },
        { name: '桡偏', normal: '0-20°', functional: '0-15°', notes: '桡侧腕屈肌、桡侧腕长伸肌' },
        { name: '尺偏', normal: '0-30°', functional: '0-20°', notes: '尺侧腕屈肌、尺侧腕伸肌' }
      ]
    }
  },

  {
    id: 'rom_hip',
    name: '髋关节活动度',
    category: '关节测角',
    description: '髋关节各方向正常活动范围',
    type: 'reference',
    content: {
      joint: '髋关节',
      position: '仰卧位（屈/展/收/旋）；俯卧位（伸展）',
      goniometer: '轴心：股骨大转子；固定臂：躯干中线；移动臂：股骨长轴',
      movements: [
        { name: '屈曲', normal: '0-120°', functional: '0-100°', notes: '髂腰肌、股直肌；膝屈可达135°' },
        { name: '伸展', normal: '0-30°', functional: '0-20°', notes: '臀大肌、腘绳肌；俯卧位测量' },
        { name: '外展', normal: '0-45°', functional: '0-30°', notes: '臀中肌、臀小肌' },
        { name: '内收', normal: '0-30°', functional: '0-20°', notes: '长/短收肌、大收肌、股薄肌' },
        { name: '内旋', normal: '0-45°', functional: '0-30°', notes: '臀小肌、阔筋膜张肌' },
        { name: '外旋', normal: '0-45°', functional: '0-30°', notes: '梨状肌、股方肌、闭孔内/外肌' }
      ]
    }
  },

  {
    id: 'rom_knee',
    name: '膝关节活动度',
    category: '关节测角',
    description: '膝关节屈伸正常活动范围',
    type: 'reference',
    content: {
      joint: '膝关节',
      position: '仰卧位（屈曲）；俯卧位或仰卧位（伸展）',
      goniometer: '轴心：股骨外上髁；固定臂：股骨长轴；移动臂：腓骨小头与外踝连线',
      movements: [
        { name: '屈曲', normal: '0-135°', functional: '0-110°', notes: '腘绳肌、股薄肌、缝匠肌、腓肠肌' },
        { name: '伸展', normal: '0°', functional: '0°', notes: '股四头肌；过伸5-10°可正常' }
      ]
    }
  },

  {
    id: 'rom_ankle',
    name: '踝关节活动度',
    category: '关节测角',
    description: '踝关节及后足正常活动范围',
    type: 'reference',
    content: {
      joint: '踝关节及距下关节',
      position: '坐位，膝屈90°，踝中立位',
      goniometer: '背屈/跖屈：轴心外踝下方，固定臂腓骨小头至外踝，移动臂第5跖骨；内外翻：轴心踝前方两踝中点',
      movements: [
        { name: '背屈', normal: '0-20°', functional: '0-10°', notes: '胫骨前肌、趾长伸肌、拇长伸肌；膝伸直时受腘绳肌限制' },
        { name: '跖屈', normal: '0-45°', functional: '0-30°', notes: '腓肠肌、比目鱼肌、胫骨后肌' },
        { name: '内翻', normal: '0-35°', functional: '0-20°', notes: '胫骨后肌、小腿三头肌；距下关节' },
        { name: '外翻', normal: '0-20°', functional: '0-10°', notes: '腓骨长肌、腓骨短肌；距下关节' }
      ]
    }
  },

  {
    id: 'rom_spine',
    name: '脊柱活动度',
    category: '关节测角',
    description: '颈椎及腰椎各方向正常活动范围',
    type: 'reference',
    content: {
      joint: '颈椎、腰椎',
      position: '颈椎：坐位，固定胸廓；腰椎：站立位，固定骨盆',
      goniometer: '颈椎用电子测角器或目测；腰椎可用改良Schober法',
      sections: [
        {
          region: '颈椎',
          movements: [
            { name: '屈曲', normal: '0-45°', functional: '0-30°', notes: '胸锁乳突肌、颈长肌' },
            { name: '伸展', normal: '0-45°', functional: '0-30°', notes: '斜方肌、肩胛提肌、颈夹肌' },
            { name: '侧屈（左右）', normal: '0-45°', functional: '0-30°', notes: '斜角肌、斜方肌上束' },
            { name: '旋转（左右）', normal: '0-60°', functional: '0-45°', notes: '胸锁乳突肌、头下斜肌' }
          ]
        },
        {
          region: '腰椎',
          movements: [
            { name: '屈曲', normal: '0-60°', functional: '0-45°', notes: '腹直肌、腹内/外斜肌；改良Schober法' },
            { name: '伸展', normal: '0-25°', functional: '0-15°', notes: '竖脊肌、多裂肌' },
            { name: '侧屈（左右）', normal: '0-30°', functional: '0-20°', notes: '腰方肌、腹内/外斜肌' },
            { name: '旋转（左右）', normal: '0-30°', functional: '0-20°', notes: '腹内/外斜肌、多裂肌' }
          ]
        }
      ]
    }
  },

  // ==================== 二、肌力分级 ====================

  {
    id: 'mmt',
    name: '徒手肌力测试 (MMT)',
    category: '肌力评估',
    description: '0-5级徒手肌力测试标准（Daniels & Worthingham 标准）',
    type: 'reference',
    content: {
      method: 'Lovett 分级系统',
      principle: '0-3级为重力试验；4-5级为抗阻试验。3级是关键分界——抗重力完成全范围活动',
      grades: [
        { grade: '0', level: '无', desc: '无可见、可触及的肌肉收缩', test: '触诊肌腹，无收缩' },
        { grade: '1', level: '微缩', desc: '可触及或可见肌肉收缩，但无关节活动', test: '触诊肌腹，有收缩无关节运动' },
        { grade: '2', level: '差', desc: '去重力位下可完成全范围关节活动', test: '消除重力体位下完成全ROM' },
        { grade: '3', level: '可', desc: '抗重力位下可完成全范围关节活动，但不能抗阻', test: '抗重力完成全ROM，不能抗外加阻力' },
        { grade: '4', level: '良', desc: '抗重力及中等阻力完成全范围活动', test: '抗重力及中等阻力完成全ROM' },
        { grade: '5', level: '正常', desc: '抗重力及最大阻力完成全范围活动（正常）', test: '抗重力及最大阻力完成全ROM' }
      ],
      modifiers: [
        { symbol: '+', desc: '可完成该级动作，且抗阻可达上一级阻力1/4以上' },
        { symbol: '-', desc: '可完成该级动作范围（ROM）的1/2以上但不足全范围' }
      ],
      notes: '4+、5-常用于区分抗阻能力的细微差异；3+表示抗重力全ROM且能抗最小阻力'
    }
  },

  {
    id: 'oxford',
    name: 'Oxford 肌力分级',
    category: '肌力评估',
    description: 'Oxford 0-5级肌力分级系统，英国及部分国家常用',
    type: 'reference',
    content: {
      method: 'Oxford Scale（与Lovett/MRC分级同源）',
      grades: [
        { grade: '0', level: 'nil', desc: '完全无肌肉收缩' },
        { grade: '1', level: 'trace', desc: '可见/可触及肌肉收缩，无关节运动' },
        { grade: '2', level: 'poor', desc: '去重力位下主动活动，完成全范围' },
        { grade: '3', level: 'fair', desc: '抗重力主动活动，完成全范围，不能抗阻' },
        { grade: '4', level: 'good', desc: '抗重力及一定阻力下完成全范围活动' },
        { grade: '5', level: 'normal', desc: '正常肌力，能抗最大阻力' }
      ],
      notes: 'Oxford分级由Medical Research Council (MRC) 1943年提出，常用于神经学检查记录；与Lovett分级基本一致'
    }
  },

  {
    id: 'daniels',
    name: 'Daniels 肌力测试标准',
    category: '肌力评估',
    description: 'Daniels & Worthingham 徒手肌力测试详细标准（含+/-分级及抗阻原则）',
    type: 'reference',
    content: {
      method: 'Daniels & Worthingham MMT',
      principle: '固定近端肢体；阻力方向与运动方向相反并施加于运动肢体远端；3级以下测试在去重力位进行',
      grades: [
        { grade: '0', level: '零(Zero)', desc: '无肌肉收缩', criteria: '触诊无任何收缩感' },
        { grade: '1', level: '微缩(Trace)', desc: '有轻微收缩，无关节运动', criteria: '触诊可及收缩，无关节运动' },
        { grade: '2-', level: '差-(Poor-)', desc: '去重力位完成部分ROM', criteria: '去重力下活动范围＜全ROM' },
        { grade: '2', level: '差(Poor)', desc: '去重力位完成全ROM', criteria: '去重力下完成全ROM' },
        { grade: '2+', level: '差+(Poor+)', desc: '去重力完成全ROM，抗重力完成部分ROM', criteria: '抗重力下ROM<50%' },
        { grade: '3-', level: '可-(Fair-)', desc: '抗重力完成大部分ROM', criteria: '抗重力下ROM>50%但<100%' },
        { grade: '3', level: '可(Fair)', desc: '抗重力完成全ROM，不能抗阻', criteria: '抗重力全ROM，无抗阻' },
        { grade: '3+', level: '可+(Fair+)', desc: '抗重力全ROM，抗最小阻力', criteria: '抗重力全ROM，可抗最小阻力' },
        { grade: '4', level: '良(Good)', desc: '抗重力及中等阻力完成全ROM', criteria: '中等阻力下完成全ROM' },
        { grade: '5', level: '正常(Normal)', desc: '抗重力及最大阻力完成全ROM', criteria: '最大阻力下完成全ROM' }
      ],
      rules: [
        '记录格式：左侧/右侧，如 4/5 表示左4级、右5级',
        '疼痛限制时记为 P (pain) 或注明"因痛未能测试"',
        '关节挛缩/活动受限时记录可活动范围内的肌力',
        '双侧对比，健侧为参考标准'
      ]
    }
  },

  // ==================== 三、痉挛评估 ====================

  {
    id: 'mas_detail',
    name: '改良Ashworth痉挛量表 (MAS)',
    category: '痉挛评估',
    description: '改良Ashworth痉挛量表详细版，按关节评分，临床最常用',
    type: 'reference',
    content: {
      method: 'Modified Ashworth Scale (Bohannon & Smith, 1987)',
      procedure: '患者放松，1秒内被动完成关节全范围活动，评估整个ROM中的阻力',
      grades: [
        { grade: '0', desc: '无肌张力增高' },
        { grade: '1', desc: '肌张力轻度增高，在ROM终末有轻微的"卡住-释放"感或最小阻力' },
        { grade: '1+', desc: '肌张力轻度增高，在ROM后50%（≤后一半）出现catch，随后有轻微阻力或释放' },
        { grade: '2', desc: '肌张力较明显增高，通过ROM大部分时出现catch，但被动活动较易' },
        { grade: '3', desc: '肌张力明显增高，被动活动困难' },
        { grade: '4', desc: '僵直，受累部分被动屈伸时活动不能' }
      ],
      joints: [
        { joint: '肘关节屈肌', position: '仰卧位，上肢伸展置于体侧', raterNote: '检查者被动伸展肘关节' },
        { joint: '肘关节伸肌', position: '仰卧位，肘屈90°', raterNote: '检查者被动屈曲肘关节' },
        { joint: '腕关节屈肌', position: '前臂旋前，腕屈曲位', raterNote: '检查者被动伸展腕关节' },
        { joint: '膝屈肌（仰卧）', position: '仰卧位，髋屈45°，膝屈90°', raterNote: '检查者被动伸展膝关节' },
        { joint: '膝伸肌（俯卧）', position: '俯卧位，膝伸直', raterNote: '检查者被动屈曲膝关节' },
        { joint: '踝跖屈肌', position: '仰卧位，下肢伸展', raterNote: '检查者被动背屈踝关节' }
      ],
      scoring: '0=1分；1=2分；1+=3分；2=4分；3=5分；4=6分；分值越高痉挛越重',
      notes: '推荐同一评定者重复评估以保证信度；MAS对下肢信度低于上肢，可结合Tardieu量表'
    }
  },

  {
    id: 'tardieu',
    name: 'Tardieu 量表',
    category: '痉挛评估',
    description: 'Tardieu痉挛量表详细版，通过不同速度被动牵伸评估速度依赖性肌张力',
    type: 'reference',
    content: {
      method: 'Tardieu Scale (Tardieu et al., 1954; Held & Pierrot-Deseilligny 1969改良)',
      principle: '在3种不同速度下被动牵伸肌肉，记录肌肉反应性质(X)及catch出现角度(Y)',
      velocities: [
        { code: 'V1', desc: '尽可能慢的速度（<自然下落速度）', purpose: '评估非速度依赖性肌张力' },
        { code: 'V2', desc: '自然下落速度（重力作用）', purpose: '用于下肢测试' },
        { code: 'V3', desc: '尽可能快的速度', purpose: '评估速度依赖性痉挛' }
      ],
      xScale: [
        { grade: '0', desc: '整个ROM中无阻力' },
        { grade: '1', desc: '整个ROM中轻度阻力，无catch' },
        { grade: '2', desc: '在某个角度出现明显catch' },
        { grade: '3', desc: '出现疲劳性clonus（<10秒）' },
        { grade: '4', desc: '出现持续clonus（≥10秒）' }
      ],
      yMeasure: '记录catch/clonus出现时的角度（相对于关节中立位，伸展为负，屈曲为正）',
      spasticityAngle: 'R2 - R1（V1慢速ROM与V3快速catch角度差）；R2-R1 > 0 提示存在速度依赖性痉挛',
      assessment: [
        { joint: '肘屈肌', v1: '慢速伸展肘关节，记录全ROM', v3: '快速伸展，记录catch角度' },
        { joint: '肘伸肌', v1: '慢速屈曲肘关节', v3: '快速屈曲' },
        { joint: '膝屈肌', v1: '慢速伸展膝关节（坐位）', v3: '快速伸展' },
        { joint: '踝跖屈肌', v1: '慢速背屈踝关节（膝屈/伸位分别）', v3: '快速背屈' }
      ],
      notes: 'Tardieu量表可区分痉挛与挛缩，比MAS更敏感；推荐用于上运动神经元损伤患者的定期评估'
    }
  },

  {
    id: 'penn',
    name: 'Penn 痉挛频率量表',
    category: '痉挛评估',
    description: 'Penn痉挛频率量表，评估1小时内自发性痉挛发作频率',
    type: 'reference',
    content: {
      method: 'Penn Spasm Frequency Scale (PSFS)',
      scope: '脊髓损伤、多发性硬化等患者下肢痉挛频率自评',
      grades: [
        { grade: '0', desc: '无痉挛' },
        { grade: '1', desc: '由刺激引起的轻度痉挛（1小时内）' },
        { grade: '2', desc: '痉挛发作每小时≤1次' },
        { grade: '3', desc: '痉挛发作每小时＞1次' },
        { grade: '4', desc: '痉挛发作每小时≥10次，或呈持续状态' }
      ],
      procedure: '观察期1小时，记录自发性痉挛发作次数（非由外界刺激诱发）',
      notes: '常与PSFS-2（Penn痉挛频率严重度量表）联合使用，后者将频率与严重度分别评估'
    }
  },

  // ==================== 四、步态分析 ====================

  {
    id: 'gait_normal',
    name: '正常步态参数',
    category: '步态分析',
    description: '正常成人平地自然行走步态周期参数',
    type: 'reference',
    content: {
      method: '时空参数与步态周期参考值',
      references: 'Perry J. Gait Analysis: Normal and Pathological Function. 1992.',
      parameters: [
        { name: '步长 (Step length)', value: '约0.75 m (0.52-0.87 m)', notes: '一脚足跟着地至对侧足跟着地的距离' },
        { name: '步幅 (Stride length)', value: '约1.5 m (1.20-1.70 m)', notes: '同一足两次连续足跟着地的距离' },
        { name: '步频 (Cadence)', value: '100-120 步/分', notes: '老年人与儿童略低' },
        { name: '步速 (Velocity)', value: '1.2-1.4 m/s', notes: '老年≥1.0 m/s；<0.6 m/s为慢速' },
        { name: '步宽 (Base of support)', value: '5-10 cm', notes: '双足足跟内侧间距' },
        { name: '步态周期 (Cycle time)', value: '约1.0 秒', notes: '同侧足跟两次着地为一个周期' }
      ],
      phases: [
        { phase: '支撑相 (Stance phase)', percentage: '60%', desc: '足与地面接触期，从足跟着地到足趾离地' },
        { phase: '摆动相 (Swing phase)', percentage: '40%', desc: '足离开地面向前摆动期' },
        { phase: '双支撑期 (Double support)', percentage: '20%（每侧10%）', desc: '双足同时着地期，正常步速下各占10%' },
        { phase: '单支撑期 (Single support)', percentage: '40%（每侧）', desc: '一侧足着地，对侧足摆动' }
      ],
      subPhases: [
        { name: '跟着地 (Heel strike)', desc: '周期0%，足跟着地，膝关节伸展，髋屈30°' },
        { name: '足平放 (Foot flat)', desc: '约周期8%，足底全接触地面' },
        { name: '支撑中段 (Mid-stance)', desc: '约周期10-30%，身体重心越过支撑足' },
        { name: '足跟离地 (Heel off)', desc: '约周期40%，开始蹬离' },
        { name: '足趾离地 (Toe off)', desc: '约周期60%，进入摆动相' },
        { name: '摆动早段 (Acceleration)', desc: '约周期60-75%，下肢加速向前' },
        { name: '摆动中段 (Mid-swing)', desc: '约周期75-85%，膝屈最大，足廓清' },
        { name: '摆动末段 (Deceleration)', desc: '约周期85-100%，下肢减速准备着地' }
      ]
    }
  },

  {
    id: 'gait_abnormal',
    name: '常见异常步态',
    category: '步态分析',
    description: '常见神经/肌骨源性异常步态特征及原因',
    type: 'reference',
    content: {
      gaits: [
        { name: '偏瘫步态 (Hemiplegic / 圈状步态)', features: '患侧下肢伸肌痉挛，膝僵硬伸直，足下垂内翻，摆动相患侧画半圆避免拖地；患侧上肢屈曲内收', cause: '脑卒中、脑外伤等上运动神经元损伤' },
        { name: '剪刀步态 (Scissor gait)', features: '双下肢内收肌痉挛，摆动相双腿交叉前进，步宽窄，足尖着地', cause: '脑瘫、脊髓损伤、双侧上运动神经元损伤' },
        { name: '跨阈步态 (Steppage / Drop foot)', features: '摆动相髋膝过度屈曲以代偿足下垂，足尖先着地（拍地）', cause: '腓总神经损伤、L4-L5神经根病变、胫前肌无力' },
        { name: '蹒跚步态 / 臀中肌步态 (Trendelenburg)', features: '患侧支撑相躯干向患侧倾斜代偿外展肌无力；双侧受累呈鸭步', cause: '臀中肌无力、髋关节病变、股骨头坏死' },
        { name: '鸭步 (Waddling gait)', features: '躯干左右摇摆，腰椎前凸，足间距宽，臀部无力起立困难', cause: '肌营养不良、进行性肌病、妊娠晚期' },
        { name: '共济失调步态 (Ataxic)', features: '步基宽，步态不稳，左右摇晃，闭目加重（感觉性共济失调）', cause: '小脑病变、脊髓后索损伤、前庭功能障碍' },
        { name: '慌张步态 (Festinating gait)', features: '起步困难，起步后步频渐快、步长渐短，前倾前冲，止步困难', cause: '帕金森病、帕金森综合征' },
        { name: '减痛步态 (Antalgic)', features: '患侧支撑相缩短（<50%），健侧支撑相延长，步态不对称', cause: '髋/膝/踝关节疼痛、骨折、急性损伤' },
        { name: '短腿步态 (Short-leg gait)', features: '步态周期不对称，患侧足跟着地时骨盆下降，躯干向患侧倾斜', cause: '双下肢不等长（差异>2cm明显）' },
        { name: '股四头肌无力步态 (Quadriceps)', features: '支撑相膝过伸代偿，身体前倾，手压膝维持伸直（Gowers征样）', cause: '股四头肌无力、股神经损伤、脊髓灰质炎' },
        { name: '腘绳肌无力步态 (Gluteus maximus / 臀大肌)', features: '支撑相躯干后仰，髋过伸代偿伸髋无力', cause: '臀大肌无力、骶丛损伤' }
      ]
    }
  },

  {
    id: 'fac',
    name: '功能性步行分级 (FAC)',
    category: '步态分析',
    description: '功能性步行分级，评估患者步行所需辅助程度',
    type: 'reference',
    content: {
      method: 'Functional Ambulation Category (Holden et al., 1984)',
      grades: [
        { grade: '0', level: '不能步行', desc: '不能步行或需2人以上协助才能站立/行走' },
        { grade: '1', level: '需持续辅助', desc: '需1人持续给予身体支持以维持平衡或承担重量' },
        { grade: '2', level: '需持续监护', desc: '需1人间断或持续协助以维持平衡和协调' },
        { grade: '3', level: '需口头监督', desc: '需口头监督或1人随时准备协助，但不需要身体接触' },
        { grade: '4', level: '平地独立', desc: '可在平地独立步行，但上下台阶/斜坡/不平整地面仍需协助' },
        { grade: '5', level: '完全独立', desc: '可在任何地面（含台阶、斜坡、不平地面）独立步行' }
      ],
      notes: 'FAC是脑卒中后步行能力评估常用工具；建议结合10米步行试验、6分钟步行试验评估步行速度与耐力'
    }
  },

  // ==================== 五、感觉评估 ====================

  {
    id: 'sensory_light',
    name: '轻触觉评估',
    category: '感觉评估',
    description: '轻触觉评估方法、分级及皮节分布',
    type: 'reference',
    content: {
      method: '轻触觉 (Light touch) 评估',
      tool: '棉签或棉絮',
      procedure: '患者闭眼，用棉签轻触皮肤，按皮节依次测试，双侧对比',
      grades: [
        { grade: '0', level: '缺失', desc: '完全无感觉' },
        { grade: '1', level: '减退/异常', desc: '感觉减弱或异常感觉' },
        { grade: '2', level: '正常', desc: '感觉正常' }
      ],
      dermatomes: [
        { level: 'C2', area: '枕后部' },
        { level: 'C3', area: '锁骨上窝' },
        { level: 'C4', area: '肩锁关节顶部' },
        { level: 'C5', area: '肘前窝外侧（三角肌外侧）' },
        { level: 'C6', area: '拇指' },
        { level: 'C7', area: '中指' },
        { level: 'C8', area: '小指' },
        { level: 'T1', area: '肘前窝内侧' },
        { level: 'T2', area: '腋窝顶部' },
        { level: 'T4', area: '乳头平面' },
        { level: 'T6', area: '剑突平面' },
        { level: 'T10', area: '脐平面' },
        { level: 'T12', area: '腹股沟韧带中点' },
        { level: 'L1', area: '大腿前上部' },
        { level: 'L2', area: '大腿前中部' },
        { level: 'L3', area: '股骨内髁' },
        { level: 'L4', area: '内踝' },
        { level: 'L5', area: '足背第3跖趾关节' },
        { level: 'S1', area: '足跟外侧' },
        { level: 'S2', area: '腘窝中点' },
        { level: 'S3', area: '坐骨结节' },
        { level: 'S4-S5', area: '肛周' }
      ],
      notes: '感觉减退可定位神经根/周围神经损伤；建议同时绘制感觉图谱便于追踪'
    }
  },

  {
    id: 'sensory_pain',
    name: '痛觉评估',
    category: '感觉评估',
    description: '痛觉评估方法、分级及神经传导通路',
    type: 'reference',
    content: {
      method: '锐痛觉 (Pinprick / Sharp-dull) 评估',
      tool: '一次性安全针或神经检查针',
      procedure: '患者闭眼，随机用针尖或针帽触碰皮肤，让患者辨别"尖"或"钝"，按皮节双侧对比',
      grades: [
        { grade: '0', level: '缺失', desc: '完全无痛觉' },
        { grade: '1', level: '减退/异常', desc: '痛觉减弱、感觉异常（如烧灼、麻木）' },
        { grade: '2', level: '正常', desc: '能正确区分尖/钝' }
      ],
      pathway: '痛温觉经脊髓丘脑侧束上行；轻触觉经脊髓丘脑前束上行；本体觉经后索-内侧丘系上行',
      peripheral: [
        { nerve: '正中神经', area: '拇指、食指、中指掌侧及指尖' },
        { nerve: '尺神经', area: '小指及环指尺侧' },
        { nerve: '桡神经', area: '手背"虎口"区（第1-2掌骨间）' },
        { nerve: '腓总神经', area: '足背' },
        { nerve: '胫神经', area: '足底' },
        { nerve: '股外侧皮神经', area: '大腿前外侧（感觉异常性股痛）' }
      ],
      notes: '脊髓节段感觉平面定位对脊髓损伤ASIA分级至关重要；尖锐-钝物体分辨是ASIA感觉评分的标准方法'
    }
  },

  // ==================== 六、反射检查 ====================

  {
    id: 'reflex_deep',
    name: '深反射 (腱反射)',
    category: '反射检查',
    description: '常用深反射检查方法、神经节段及分级',
    type: 'reference',
    content: {
      method: '深反射 (Deep Tendon Reflex, DTR)',
      tool: '叩诊锤',
      procedure: '患者放松，肌肉适度张力下用叩诊锤快速叩击肌腱，双侧对比',
      grades: [
        { grade: '0', level: '消失', desc: '无反射' },
        { grade: '1+', level: '减弱', desc: '反射减弱，需强化法才可引出' },
        { grade: '2+', level: '正常', desc: '正常反射' },
        { grade: '3+', level: '活跃', desc: '反射活跃，可正常或提示上运动神经元损害' },
        { grade: '4+', level: '亢进', desc: '反射亢进伴阵挛，提示上运动神经元损害' }
      ],
      reflexes: [
        { name: '肱二头肌反射', segment: 'C5-C6（主要C5）', technique: '检查者拇指按压肱二头肌腱，叩击拇指', normal: '肘关节屈曲' },
        { name: '肱三头肌反射', segment: 'C7-C8（主要C7）', technique: '肘屈90°，叩击鹰嘴上方的肱三头肌腱', normal: '肘关节伸展' },
        { name: '桡骨膜反射', segment: 'C5-C6', technique: '前臂半旋前，叩击桡骨茎突', normal: '肘屈、前臂旋后、指屈' },
        { name: '膝腱反射', segment: 'L2-L4（主要L4）', technique: '坐位小腿自然下垂或卧位膝屈位，叩击髌韧带', normal: '膝关节伸展（小腿前踢）' },
        { name: '跟腱反射', segment: 'S1-S2（主要S1）', technique: '踝背屈位，叩击跟腱', normal: '踝关节跖屈' }
      ],
      reinforcement: [
        'Jendrassik法：检查上肢反射时让患者双手相扣用力拉；检查下肢反射时让患者双手扣紧用力拉',
        '让患者紧咬牙关或做计数等分散注意力动作'
      ],
      interpretation: [
        '反射消失/减弱：下运动神经元损伤、周围神经病变、脊髓休克期、肌病',
        '反射亢进/阵挛：上运动神经元损害（脑卒中、脊髓损伤、ALS上运动神经元期）',
        '反射不对称：单侧病变提示，需结合其他体征'
      ]
    }
  },

  {
    id: 'reflex_superficial',
    name: '浅反射',
    category: '反射检查',
    description: '常用浅反射检查方法、神经节段及临床意义',
    type: 'reference',
    content: {
      method: '浅反射 (Superficial Reflexes)',
      principle: '通过刺激皮肤/黏膜诱发的反射，反射弧涉及大脑皮质，消失提示上运动神经元损害',
      reflexes: [
        { name: '腹壁反射（上）', segment: 'T7-T9', technique: '由外向内划过上腹部皮肤', normal: '上腹壁肌肉收缩，脐孔向上内侧移动' },
        { name: '腹壁反射（中）', segment: 'T9-T11', technique: '由外向内划过中腹部皮肤', normal: '中腹壁肌肉收缩，脐孔水平移动' },
        { name: '腹壁反射（下）', segment: 'T11-L1', technique: '由外向内划过下腹部皮肤', normal: '下腹壁肌肉收缩，脐孔向下内侧移动' },
        { name: '提睾反射', segment: 'L1-L2', technique: '由下向上划过大腿内侧皮肤', normal: '同侧睾丸上提', notes: '双侧消失提示上运动神经元损害；老年或可单侧消失' },
        { name: '跖反射', segment: 'L5-S1（S1-S2）', technique: '由后向前划足底外侧缘', normal: '足趾跖屈', notes: '出现Babinski征（拇趾背伸）为异常' },
        { name: '肛门反射', segment: 'S2-S4', technique: '针刺肛周皮肤', normal: '肛门括约肌收缩', notes: '消失提示圆锥/马尾损伤' }
      ],
      abnormal: [
        'Babinski征阳性（拇趾背伸±其余趾扇形展开）：提示锥体束损害',
        '腹壁反射消失、跖反射正常：常见于多发性硬化、脊髓损伤早期',
        '所有浅反射消失：广泛皮质/锥体束损害'
      ]
    }
  },

  // ==================== 七、其他常用工具 ====================

  {
    id: 'vitals',
    name: '生命体征参考值',
    category: '生命体征',
    description: '成人生命体征正常范围及临床意义',
    type: 'reference',
    content: {
      items: [
        {
          name: '体温',
          normal: '36.0-37.2 °C（口测）',
          abnormal: '≥37.3 低热；≥38.0 中热；≥39.0 高热；≥41.0 超高热',
          notes: '肛温较口温高0.3-0.5°C；腋温较口温低0.2-0.4°C；晨低午后高，昼夜波动<1°C'
        },
        {
          name: '脉搏/心率',
          normal: '60-100 次/分（安静成人）',
          abnormal: '<60 心动过缓；>100 心动过速；运动员静息可40-60',
          notes: '与颈动脉搏动一致；节律、强弱需同步评估'
        },
        {
          name: '呼吸频率',
          normal: '12-20 次/分（成人）',
          abnormal: '<12 呼吸过缓；>20 呼吸过速；<8 或 >30 提示严重呼吸问题',
          notes: '儿童：新生儿30-60，幼儿20-30，学龄儿18-25'
        },
        {
          name: '血压',
          normal: '收缩压 90-139 mmHg；舒张压 60-89 mmHg',
          abnormal: '≥140/90 高血压；<90/60 低血压；理想<120/80',
          notes: '2017 ACC/AHA高血压标准≥130/80；中国指南仍按140/90诊断'
        },
        {
          name: '血氧饱和度 (SpO₂)',
          normal: '≥95%（海平面空气）',
          abnormal: '90-94% 轻度低氧；85-89% 中度低氧；<85% 重度低氧',
          notes: ' COPD患者靶值88-92%；脉氧仪在末梢循环差、涂抹指甲油时读数不准'
        },
        {
          name: '血糖（空腹）',
          normal: '3.9-6.1 mmol/L',
          abnormal: '<3.9 偏低；<2.8 低血糖；6.1-7.0 空腹血糖受损；≥7.0 糖尿病',
          notes: '随机血糖≥11.1 mmol/L伴症状可诊断糖尿病'
        }
      ],
      warning: [
        '呼吸<8或>30次/分、SpO₂<90%、收缩压<90或>180 mmHg、心率<40或>130、意识改变——属急症，应紧急评估',
        '生命体征异常合并急性疼痛、胸痛、呼吸困难时优先排查致命病因'
      ]
    }
  },

  {
    id: 'bmi',
    name: 'BMI 计算器',
    category: '体格评估',
    description: '通过身高体重计算身体质量指数(BMI)并分级',
    type: 'calculator',
    content: {
      formula: 'BMI = 体重(kg) / [身高(m)]²',
      inputs: [
        { name: 'weight', label: '体重', unit: 'kg', type: 'number', min: 20, max: 300 },
        { name: 'height', label: '身高', unit: 'cm', type: 'number', min: 80, max: 250 }
      ],
      calculate: function(weight, height) {
        if (!weight || !height) return null;
        const h = height / 100;
        const bmi = weight / (h * h);
        return {
          bmi: parseFloat(bmi.toFixed(1)),
          height: height,
          weight: weight
        };
      },
      interpretation: [
        { range: '<18.5', level: '偏瘦', color: 'warning', desc: '营养不足风险增加，免疫力降低' },
        { range: '18.5-23.9', level: '正常', color: 'success', desc: '健康范围，慢性病风险最低' },
        { range: '24.0-27.9', level: '超重', color: 'warning', desc: '慢性病风险增加，建议控制体重' },
        { range: '≥28.0', level: '肥胖', color: 'danger', desc: '心血管/代谢病风险显著增加' }
      ],
      standards: [
        { standard: '中国成人BMI标准 (WGOC)', normal: '18.5-23.9', overweight: '24-27.9', obese: '≥28' },
        { standard: 'WHO国际标准', normal: '18.5-24.9', overweight: '25-29.9', obese: '≥30' }
      ],
      notes: 'BMI不区分肌肉与脂肪比例；运动员、孕妇、老年人不适用此标准'
    }
  },

  {
    id: 'target_hr',
    name: '靶心率计算器',
    category: '运动处方',
    description: '根据年龄及安静心率计算运动训练靶心率范围',
    type: 'calculator',
    content: {
      formula: '最大心率 = 220 - 年龄；靶心率 = 最大心率 × 强度百分比',
      inputs: [
        { name: 'age', label: '年龄', unit: '岁', type: 'number', min: 10, max: 100 },
        { name: 'restingHr', label: '安静心率', unit: 'bpm', type: 'number', min: 30, max: 150, optional: true }
      ],
      calculate: function(age, restingHr) {
        if (!age) return null;
        const maxHr = 220 - age;
        const result = {
          maxHr: maxHr,
          moderate: { min: Math.round(maxHr * 0.60), max: Math.round(maxHr * 0.70) },
          vigorous: { min: Math.round(maxHr * 0.70), max: Math.round(maxHr * 0.85) },
          low: { min: Math.round(maxHr * 0.50), max: Math.round(maxHr * 0.60) }
        };
        if (restingHr) {
          result.karvonen = {
            moderate: { min: Math.round((maxHr - restingHr) * 0.40 + restingHr), max: Math.round((maxHr - restingHr) * 0.59 + restingHr) },
            vigorous: { min: Math.round((maxHr - restingHr) * 0.60 + restingHr), max: Math.round((maxHr - restingHr) * 0.84 + restingHr) }
          };
        }
        return result;
      },
      intensityLevels: [
        { level: '低强度', hrRange: '50-60%最大心率', desc: '热身、恢复期、初期康复训练', vo2: '约30-49% VO₂max' },
        { level: '中等强度', hrRange: '60-70%最大心率', desc: '有氧训练、心脏康复、减脂', vo2: '约50-69% VO₂max' },
        { level: '高强度', hrRange: '70-85%最大心率', desc: '心肺耐力训练、运动员训练', vo2: '约70-89% VO₂max' }
      ],
      methods: [
        { name: '最大心率法', formula: '靶心率 = 最大心率 × 强度%', pros: '简单易算', cons: '个体差异大，误差±10次' },
        { name: 'Karvonen法（储备心率法）', formula: '靶心率 = (最大心率 - 安静心率) × 强度% + 安静心率', pros: '考虑个体安静心率，更精确', cons: '需测安静心率' }
      ],
      notes: '心脏康复患者须在心电监护下确定运动处方；服用β受体阻滞剂者心率不能反映运动强度，应用Borg自觉用力评分(RPE 12-16)'
    }
  },

  {
    id: 'mmt_grade',
    name: '肌力分级速查',
    category: '肌力评估',
    description: 'MMT 0-5级与Oxford/MRC对照及3级关键动作速查',
    type: 'reference',
    content: {
      comparison: [
        { mmt: '0', oxford: '0', mrc: '0', desc: '无收缩', functional: '完全瘫痪' },
        { mmt: '1', oxford: '1', mrc: '1', desc: '微缩，可触及收缩', functional: '无功能' },
        { mmt: '2', oxford: '2', mrc: '2', desc: '去重力全ROM', functional: '去重力下可活动' },
        { mmt: '3', oxford: '3', mrc: '3', desc: '抗重力全ROM', functional: '可做无阻力功能活动' },
        { mmt: '4', oxford: '4', mrc: '4', desc: '抗重力+中等阻力', functional: '功能良好但弱于正常' },
        { mmt: '5', oxford: '5', mrc: '5', desc: '抗重力+最大阻力', functional: '正常肌力' }
      ],
      keyPositions: [
        { muscle: '三角肌（肩外展）', gravityEliminated: '仰卧位，上肢在桌面滑动外展', againstGravity: '坐位，上肢水平外展' },
        { muscle: '肱二头肌（肘屈）', gravityEliminated: '仰卧位，肩外展90°，前臂水平屈伸', againstGravity: '坐位，前臂垂直屈曲' },
        { muscle: '肱三头肌（肘伸）', gravityEliminated: '仰卧位，肩外展90°，前臂水平伸', againstGravity: '俯卧位，肩外展90°，前臂垂直伸展' },
        { muscle: '髂腰肌（髋屈）', gravityEliminated: '侧卧位，髋屈', againstGravity: '坐位，髋屈90°以上' },
        { muscle: '臀中肌（髋外展）', gravityEliminated: '仰卧位，下肢在床面滑动外展', againstGravity: '侧卧位，下肢外展' },
        { muscle: '股四头肌（膝伸）', gravityEliminated: '侧卧位，膝伸', againstGravity: '坐位，小腿伸直' },
        { muscle: '腘绳肌（膝屈）', gravityEliminated: '侧卧位，膝屈', againstGravity: '俯卧位，膝屈' },
        { muscle: '胫骨前肌（踝背屈）', gravityEliminated: '足外旋位，踝背屈', againstGravity: '坐位，足跟离地，踝背屈' }
      ],
      clinicalTips: [
        '3级是关键分界：能否抗重力完成全ROM',
        '检查者需固定近端关节，防止代偿',
        '4-5级需对比双侧，健侧为参考',
        '关节挛缩时记录"在受限ROM内的肌力"',
        '疼痛时记为"P"，不能可靠评估'
      ]
    }
  },

  {
    id: 'stretch_duration',
    name: '牵伸时间建议',
    category: '运动处方',
    description: '基于循证证据的肌肉牵伸持续时间、频率及方法建议',
    type: 'reference',
    content: {
      principle: '牵伸通过延长肌肉-肌腱单位改善柔韧性，应遵循"低负荷、长时间、无痛"原则',
      recommendations: [
        { population: '健康成人（一般柔韧性）', duration: '15-30 秒/次', reps: '2-4 次', frequency: '每周≥2-3次', notes: 'ACSM推荐，可显著改善ROM' },
        { population: '老年人（≥65岁）', duration: '30-60 秒/次', reps: '2-4 次', frequency: '每周≥2-3次', notes: '老年人结缔组织刚度增加，需更长牵伸时间' },
        { population: '运动员/竞技柔韧性', duration: '30-60 秒/次', reps: '3-5 次', frequency: '每周5-7次', notes: '高负荷训练后或专项需求' },
        { population: '神经康复患者（痉挛）', duration: '30 秒-5 分钟/次', reps: '3-5 次', frequency: '每日2-3次', notes: '持续慢牵伸降低肌张力；配合PNF效果更佳' },
        { population: '术后关节挛缩预防', duration: '30-60 秒/次', reps: '3-5 次', frequency: '每日多次', notes: '早期开始，避免粘连' }
      ],
      methods: [
        { name: '静态牵伸 (Static)', desc: '被动牵伸至有牵拉感（无痛），维持15-60秒', indication: '常规柔韧性训练、康复后期' },
        { name: '动态牵伸 (Dynamic)', desc: '主动控制范围内反复摆动，速度递增', indication: '运动前热身' },
        { name: 'PNF: 收缩-放松 (CR)', desc: '被动牵伸→主动肌抗阻等长收缩5-8秒→放松→加深牵伸', indication: '增加ROM最有效，需搭档配合' },
        { name: 'PNF: 收缩-放松-拮抗肌收缩 (CRAC)', desc: 'CR基础上加拮抗肌主动收缩', indication: 'ROM改善优于CR' },
        { name: '持续机械牵伸 (Splint)', desc: '低负荷长时间（15-30分钟+）', indication: '关节挛缩、烧伤后瘢痕' }
      ],
      precautions: [
        '禁忌：骨折未愈合、急性炎症、关节内渗出、未控制的骨质疏松',
        '避免弹震式牵伸（Ballistic），易致肌肉微损伤',
        '牵伸前热身5-10分钟提高组织温度',
        '疼痛为停止信号，不应超过可耐受牵拉感',
        '孕期、关节松弛综合征患者需谨慎'
      ],
      reference: 'ACSM Guidelines for Exercise Testing and Prescription (10th ed.); Page P. Int J Sports Phys Ther. 2012.'
    }
  }

];
