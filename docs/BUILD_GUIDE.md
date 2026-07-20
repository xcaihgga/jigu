# 构建与运行指南

## 1. 运行方式

### 1.1 本地开发运行

项目是纯前端单页应用，无需安装依赖，直接打开即可运行。

#### 方式一：直接打开HTML文件

```bash
# 在浏览器中直接打开
open index.html
```

#### 方式二：使用本地HTTP服务器（推荐）

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然后在浏览器中访问：`http://localhost:8000`

### 1.2 使用单文件版本

项目已提供预构建的单文件版本：

```bash
open single-file-v5.html
```

单文件版本包含所有JavaScript资源内联，适合离线使用或分享。

### 1.3 线上访问

项目已部署至GitHub Pages：

```
https://xcaihgga.github.io/jigu/
```

---

## 2. 构建单文件版本

### 2.1 构建脚本说明

项目提供 `build_single.py` 脚本，用于将所有外部JavaScript文件内联到 `index.html` 中，生成单文件版本。

#### 构建流程

```
index.html (引用外部JS)
    │
    ├── data.js
    ├── scales.js
    ├── scales-extra.js
    ├── scales-pro.js
    ├── clinical-tools.js
    ├── knowledge-base.js
    ├── rehab-protocols.js
    ├── protocols-pro.js
    └── pain-protocols.js
            │
            ▼
    build_single.py (内联所有JS)
            │
            ▼
single-file-v5.html (单文件版本)
```

### 2.2 执行构建

```bash
cd /workspace
python3 build_single.py
```

### 2.3 构建脚本参数

脚本会自动完成以下操作：

1. 读取 `index.html` 文件
2. 根据 `script_map` 映射表找到所有外部脚本标签
3. 将每个脚本文件内容读取并内联到HTML中
4. 修改页面标题为"肌骨康复速查 V5.0 专业版（单文件）"
5. 输出到 `single-file-v5.html`

### 2.4 脚本映射表

```javascript
script_map = {
    'data.js?v=4.0': 'data.js',
    'scales.js?v=4.0': 'scales.js',
    'scales-extra.js?v=4.0': 'scales-extra.js',
    'scales-pro.js?v=4.0': 'scales-pro.js',
    'clinical-tools.js?v=4.0': 'clinical-tools.js',
    'knowledge-base.js?v=4.0': 'knowledge-base.js',
    'rehab-protocols.js?v=4.0': 'rehab-protocols.js',
    'protocols-pro.js?v=4.0': 'protocols-pro.js',
    'pain-protocols.js?v=4.0': 'pain-protocols.js',
}
```

---

## 3. 项目结构说明

### 3.1 核心文件

| 文件 | 说明 |
|-----|------|
| `index.html` | 主应用入口，包含完整UI结构和内联CSS |
| `single-file-v5.html` | 预构建的单文件版本 |
| `build_single.py` | 单文件构建脚本 |
| `data.js` | 肌肉数据文件 |
| `README.md` | 项目说明文档 |

### 3.2 源代码目录

```
src/
├── scales.js           # 核心评估量表（20+种）
├── scales-extra.js     # 扩展评估量表（认知、吞咽、心肺等）
├── scales-pro.js       # 专业评估量表（进阶工具）
├── clinical-tools.js   # 临床工具（关节活动度、肌力分级等）
├── knowledge-base.js   # 疾病知识库（疾病-量表映射、临床指南）
├── rehab-protocols.js  # 康复方案（PT/OT/ST）
├── protocols-pro.js    # 专业康复方案（进阶方案）
└── pain-protocols.js   # 疼痛治疗方案
```

### 3.3 资源目录

```
assets/
└── illustrations/      # 医学插图资源（WebP格式）
    ├── anatomy-*.webp  # 解剖学插图
    ├── medical-*.webp  # 医学相关插图
    ├── rehab-*.webp    # 康复训练插图
    └── sport-*.webp    # 运动相关插图
```

---

## 4. 开发指南

### 4.1 修改现有数据

直接编辑对应的JavaScript文件即可，无需重新构建：

```bash
# 修改评估量表
vim src/scales.js

# 修改临床工具
vim src/clinical-tools.js

# 修改疾病知识库
vim src/knowledge-base.js

# 修改康复方案
vim src/rehab-protocols.js

# 修改疼痛方案
vim src/pain-protocols.js

# 修改肌肉数据
vim data.js
```

### 4.2 添加新功能

#### 添加新评估量表

1. 在 `src/scales.js` 中添加量表对象
2. 确保实现 `calculate()` 方法
3. 添加评分解释 `interpretation` 数组

#### 添加新临床工具

1. 在 `src/clinical-tools.js` 中添加工具对象
2. 指定 `type` 为 `reference` 或 `calculator`
3. 填充 `content` 对象

#### 添加新疾病映射

1. 在 `src/knowledge-base.js` 的 `diseaseScaleMap` 中添加疾病
2. 指定 `core`、`recommended`、`optional` 量表列表

#### 添加新临床指南

1. 在 `src/knowledge-base.js` 的 `clinicalGuidelines` 数组中添加指南对象
2. 指定证据等级 `level`（A/B/C）
3. 添加相关量表 `relatedScales`

#### 添加新康复方案

1. 在 `src/rehab-protocols.js` 中添加方案对象
2. 指定分类 `category`（PT/OT/ST）
3. 添加分期 `stages` 数组

### 4.3 测试修改

修改后刷新浏览器即可查看效果：

```bash
# 如果使用本地服务器
# 只需刷新浏览器页面
```

如需生成单文件版本供他人使用：

```bash
python3 build_single.py
```

---

## 5. 部署指南

### 5.1 GitHub Pages 部署

项目已配置为自动部署到GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 访问：`https://xcaihgga.github.io/jigu/`

### 5.2 自定义部署

将项目文件部署到任意静态站点托管服务：

#### 使用 Vercel

```bash
npm install -g vercel
vercel deploy
```

#### 使用 Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### 使用 Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. 创建 Pages 项目
3. 连接 GitHub 仓库
4. 配置构建命令为空，输出目录为根目录

### 5.3 离线使用

下载 `single-file-v5.html` 文件到本地，直接在浏览器中打开即可离线使用。

---

## 6. 浏览器兼容性

### 6.1 支持的浏览器

| 浏览器 | 最低版本 |
|-------|---------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |
| Opera | 47+ |

### 6.2 移动端支持

- iOS Safari 12+
- Android Chrome 60+
- 微信内置浏览器

---

## 7. 常见问题

### 7.1 跨域问题

由于项目使用本地文件引用，直接打开 `index.html` 可能会遇到跨域问题。**解决方案**：使用本地HTTP服务器运行。

### 7.2 资源加载失败

确保所有JavaScript文件路径正确，构建脚本会检查文件是否存在。

### 7.3 构建失败

```bash
# 错误：文件不存在
# 解决方案：确认文件路径正确

# 错误：编码问题
# 解决方案：确保所有文件使用UTF-8编码
```

### 7.4 页面显示异常

```bash
# 清空浏览器缓存
# Chrome: Ctrl+Shift+R
# Firefox: Ctrl+Shift+R
# Safari: Cmd+Shift+R

# 或在index.html中添加版本号参数
# <script src="data.js?v=4.0"></script>
```

---

## 8. 性能优化

### 8.1 单文件版本优势

- 减少HTTP请求次数（9个JS文件合并为1个）
- 提高加载速度
- 支持离线使用

### 8.2 图片优化

- 所有图片使用WebP格式
- 图片尺寸经过优化
- 按需加载图片资源

### 8.3 缓存策略

```html
<!-- index.html 头部设置 -->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
```

---

## 9. 文档导航

- [项目概述](PROJECT_OVERVIEW.md)
- [核心模块详细说明](MODULES_DETAILED.md)
- [数据结构与关键函数](DATA_STRUCTURES.md)