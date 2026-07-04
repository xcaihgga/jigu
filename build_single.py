#!/usr/bin/env python3
"""将 index.html 中的外部脚本内联，生成单文件版本"""
import re
import os

base_dir = os.path.dirname(os.path.abspath(__file__))

# 读取 index.html
with open(os.path.join(base_dir, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

# 需要内联的外部脚本映射
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

# 逐个替换
for src_attr, filename in script_map.items():
    filepath = os.path.join(base_dir, filename)
    if not os.path.exists(filepath):
        print(f"警告: 文件不存在 {filepath}")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    old_tag = f'<script src="{src_attr}"></script>'
    new_tag = f'<script>\n{content}\n</script>'

    if old_tag in html:
        html = html.replace(old_tag, new_tag)
        print(f"已内联: {filename} ({len(content)} bytes)")
    else:
        print(f"警告: 未找到标签 {old_tag}")

# 同时更新版本号
html = html.replace('<title>肌骨康复速查 V4.0 专业版</title>', '<title>肌骨康复速查 V4.0 专业版（单文件）</title>')
# 替换整段 Service Worker 注册代码
html = html.replace(
    """      navigator.serviceWorker.register('service-worker.js?v=4.0')
        .then(function(registration) {
          console.log('ServiceWorker registration successful');
          registration.update();
        })
        .catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });""",
    "      // 单文件版本不使用 Service Worker"
)

# 保存单文件版本
output_path = os.path.join(base_dir, 'single-file-v4.html')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n单文件版本已生成: {output_path}")
print(f"总大小: {len(html) / 1024 / 1024:.2f} MB")
