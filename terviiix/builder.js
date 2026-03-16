const fs = require('fs');

const mdContent = fs.readFileSync('25-ad-scripts.md', 'utf8');

const angles = [];
const angleBlocks = mdContent.split(/# \S+ ANGLE \d+:/);
angleBlocks.shift();

angleBlocks.forEach((block, index) => {
    const angleMatch = block.match(/^\s*"([^"]+)"/);
    const title = angleMatch ? angleMatch[1] : 'Angle ' + (index + 1);
    
    const emotionMatch = block.match(/\*\*Core emotion:\*\*\s*(.+)/);
    const targetMatch = block.match(/\*\*Target:\*\*\s*(.+)/);
    
    const ads = [];
    const adBlocks = block.split(/## AD [A-E]\d+ — /);
    adBlocks.shift();
    
    adBlocks.forEach((adBlock, adIndex) => {
        const adNumMatch = adBlock.match(/Angle \d+ × Hook ([A-E]) \(([^)]+)\)/);
        const platformMatch = adBlock.match(/\*\*Platform:\*\*\s*(.+)/);
        
        const captionMatch = adBlock.match(/### 📝 CAPTION\n([^#]+)/);
        const primaryTextMatch = adBlock.match(/### 🛍️ PRIMARY TEXT\n([^#]+)/);
        
        let primaryText = '';
        if (platformMatch && platformMatch[1].includes('Shopify')) {
            if (primaryTextMatch) primaryText = primaryTextMatch[1].trim();
        } else {
            if (captionMatch) primaryText = captionMatch[1].trim();
        }

        ads.push({
            id: (index + 1) + '.' + (adIndex + 1),
            angleName: title,
            hookType: adNumMatch ? adNumMatch[2] : 'Hook',
            platform: platformMatch ? platformMatch[1].replace('🎵', '').replace('🛍️', '').trim() : '',
            primaryText: primaryText
        });
    });
    
    angles.push({
        num: index + 1,
        title: title,
        emotion: emotionMatch ? emotionMatch[1] : '',
        target: targetMatch ? targetMatch[1] : '',
        ads: ads
    });
});

let html = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '    <meta charset="UTF-8">',
    '    <title>Terviiix - Ad Matrix</title>',
    '    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">',
    '    <style>',
    '        * { margin:0; padding:0; box-sizing:border-box; }',
    '        body { font-family:"Inter",sans-serif; background:#f8f9fa; color:#1a1a1a; }',
    '        .ad-img-wrap { border-top:1px solid #f0f0f0; border-bottom:1px solid #f0f0f0; overflow:hidden; background:#f1f5f9; min-height: 250px; display:flex; align-items:center; justify-content:center; color:#9ca3af; font-size:14px; }',
    '        @media (max-width: 768px) { .ad-grid { grid-template-columns: 1fr !important; } }',
    '    </style>',
    '</head>',
    '<body>',
    '    <div style="background:linear-gradient(135deg, #0f172a, #1e3a5f); padding:48px 24px; text-align:center;">',
    '        <h1 style="font-family:\'DM Serif Display\',Georgia,serif; font-size:36px; color:white; margin-bottom:8px;">Terviiix Ionic Thermal Brush</h1>',
    '        <p style="font-size:16px; color:rgba(255,255,255,0.8); max-width:600px; margin:0 auto 24px;">5x5 Ad Matrix &mdash; 25 total ads. Sabri Suby Framework. Each ad includes paste-ready AI image prompts and video storyboards.</p>',
    '        <div class="hero-stats" style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">',
    '            <div style="background:rgba(255,255,255,0.15); padding:12px 20px; border-radius:10px;">',
    '                <div style="font-size:28px; font-weight:800; color:white;">25</div>',
    '                <div style="font-size:11px; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:0.05em;">Total Ads</div>',
    '            </div>',
    '            <div style="background:rgba(255,255,255,0.15); padding:12px 20px; border-radius:10px;">',
    '                <div style="font-size:28px; font-weight:800; color:white;">5</div>',
    '                <div style="font-size:11px; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:0.05em;">Angles</div>',
    '            </div>',
    '        </div>',
    '    </div>',
    '    <div style="max-width:1200px; margin:0 auto; padding:24px 24px 0;">',
    '        <div style="background:white; border:1px solid #e5e7eb; border-radius:12px; padding:16px 20px; margin-bottom:16px; display:flex; gap:20px; align-items:center; flex-wrap:wrap;">',
    '            <span style="font-size:13px; font-weight:600; color:#333;">Each ad includes:</span>',
    '            <span style="display:flex; align-items:center; gap:4px; font-size:12px; color:#65676b;">',
    '                <span style="background:#2563eb22; color:#2563eb; padding:1px 6px; border-radius:4px; font-size:10px; font-weight:700;">Copy</span> View Full Ad Copy',
    '            </span>',
    '            <span style="display:flex; align-items:center; gap:4px; font-size:12px; color:#65676b;">',
    '                <span style="background:#fef3c7; color:#d97706; padding:1px 6px; border-radius:4px; font-size:10px; font-weight:700;">AI</span> Prompt (paste-ready)',
    '            </span>',
    '        </div>',
    '    </div>',
    '    <div style="max-width:1200px; margin:0 auto; padding:0 24px 24px;">'
].join('\\n');

angles.forEach(angle => {
    html += [
        '        <div style="margin-bottom:48px;">',
        '            <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #0f172a33;">',
        '                <div style="background:#0f172a; color:white; width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px;">',
        '                    ' + angle.num,
        '                </div>',
        '                <div>',
        '                    <h2 style="margin:0; font-size:20px; font-weight:700; color:#1a1a1a;">' + angle.title + '</h2>',
        '                    <div style="font-size:13px; color:#6b7280;">Emotion: ' + angle.emotion + ' | Target: ' + angle.target + '</div>',
        '                </div>',
        '            </div>',
        '            <div class="ad-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:16px;">'
    ].join('\\n') + '\\n';

    angle.ads.forEach(ad => {
        let snippet = ad.primaryText.substring(0, 150);
        if (ad.primaryText.length > 150) snippet += '...';
        snippet = snippet.replace(/\\n/g, '<br>');

        html += [
            '                <div style="background:#ffffff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; break-inside:avoid; margin-bottom:20px;">',
            '                    <div style="padding:12px 16px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #f0f0f0;">',
            '                        <div style="width:36px;height:36px;border-radius:50%;background:#0f172a;display:flex;align-items:center;justify-content:center;">',
            '                            <span style="color:white;font-weight:700;font-size:12px;">' + ad.id + '</span>',
            '                        </div>',
            '                        <div>',
            '                            <div style="font-weight:600;font-size:13px;color:#1a1a1a;">Angle ' + angle.num + '</div>',
            '                            <div style="font-size:11px;color:#65676b;">' + ad.platform + '</div>',
            '                        </div>',
            '                        <div style="margin-left:auto; display:flex; gap:6px; flex-wrap:wrap;">',
            '                            <span style="font-size:10px; background:#2563eb22; color:#2563eb; padding:2px 8px; border-radius:12px; font-weight:600;">' + ad.hookType + '</span>',
            '                        </div>',
            '                    </div>',
            '                    <div style="padding:12px 16px;">',
            '                        <div style="font-size:13px; line-height:1.5; color:#1a1a1a; height: 100px; overflow: hidden;">',
            '                            <span style="color:#444;">' + snippet + '</span>',
            '                            ' + (ad.primaryText.length > 150 ? '<span style="color:#2563eb; cursor:pointer; font-weight:500;"> See more</span>' : ''),
            '                        </div>',
            '                    </div>',
            '                    <div class="ad-img-wrap">No images generated yet</div>',
            '                    <div style="padding:10px 16px; display:flex; align-items:center; justify-content:space-between; background:#f8f9fa;">',
            '                        <div style="max-width:70%;">',
            '                            <div style="font-size:11px; color:#65676b;">terviiix.com</div>',
            '                            <div style="font-size:13px; font-weight:600; color:#1a1a1a; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' + angle.title + '</div>',
            '                        </div>',
            '                        <button style="background:#2563eb;color:white;border:none;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer;">Learn More</button>',
            '                    </div>',
            '                    <div style="padding:16px; border-top:1px solid #f0f0f0; background:white; display:flex; flex-direction:column; gap:12px;">',
            '                        <div style="color:#2563eb; font-size:12px; font-weight:600; cursor:pointer;"><span style="background:#2563eb22; padding:2px 6px; border-radius:4px; font-size:10px; font-weight:700; margin-right:4px;">Copy</span> View Full Ad Copy</div>',
            '                        <div style="color:#d97706; font-size:12px; font-weight:600; cursor:pointer;"><span style="background:#fef3c7; padding:2px 6px; border-radius:4px; font-size:10px; font-weight:700; margin-right:4px;">AI</span> Prompt (paste-ready)</div>',
            '                    </div>',
            '                </div>'
        ].join('\\n') + '\\n';
    });

    html += [
        '            </div>',
        '        </div>'
    ].join('\\n') + '\\n';
});

html += [
    '    </div>',
    '</body>',
    '</html>'
].join('\\n') + '\\n';

fs.writeFileSync('ads.html', html);
console.log('Successfully generated ads.html');