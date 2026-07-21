#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成可本地运行的单文件 HTML 离线版本"""
import os
import re

base_dir = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(base_dir, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

# 读取需要内联的脚本
with open(os.path.join(base_dir, 'data-loader.js'), 'r', encoding='utf-8') as f:
    data_loader = f.read()

with open(os.path.join(base_dir, 'questions.js'), 'r', encoding='utf-8') as f:
    questions = f.read()

with open(os.path.join(base_dir, 'app.js'), 'r', encoding='utf-8') as f:
    app = f.read()

with open(os.path.join(base_dir, 'data.min.json'), 'r', encoding='utf-8') as f:
    data_json = f.read()

# 修改 data-loader.js：让它在有内嵌数据时直接使用
data_loader_modified = data_loader.replace(
    "function loadData() {",
    """function loadData() {
    // 单文件模式：检查是否已有内嵌数据
    if (typeof window.__INLINE_DATA__ !== 'undefined' && window.__INLINE_DATA__) {
      try {
        setLoadingText('数据解析中...', '正在整理知识点');
        setTimeout(function() {
          onDataLoaded(window.__INLINE_DATA__);
        }, 50);
        return;
      } catch (e) {
        console.warn('Inline data load failed, fallback to XHR:', e);
      }
    }
"""
)

# 替换外链脚本引用
html = re.sub(
    r'<script\s+src="data-loader\.js\?v=[^"]*"\s*></script>',
    '<script>\n' + data_loader_modified + '\n</script>',
    html
)
html = re.sub(
    r'<script\s+src="questions\.js\?v=[^"]*"\s*></script>',
    '<script>\n' + questions + '\n</script>',
    html
)
html = re.sub(
    r'<script\s+src="app\.js\?v=[^"]*"\s*></script>',
    '<script>\n' + app + '\n</script>',
    html
)

# 注入数据
data_script = '<script>window.__INLINE_DATA__ = ' + data_json + ';</script>'
html = html.replace('</head>', data_script + '\n</head>')

# 修改标题
html = html.replace(
    '<title>医智学 - 肌骨康复学习</title>',
    '<title>医智学 - 肌骨康复学习（离线版）</title>'
)

output_path = os.path.join(base_dir, 'yizhixue-offline.html')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

size_mb = len(html.encode('utf-8')) / 1024 / 1024
print(f"单文件版本已生成: {output_path}")
print(f"总大小: {size_mb:.2f} MB")
print(f"下载后双击即可在浏览器中打开运行")
