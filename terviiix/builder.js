const fs = require('fs');

// 1. Parse 25-ad-scripts.md
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
        const headlineMatch = adBlock.match(/### 🛍️ HEADLINE\n([^#]+)/);
        const descMatch = adBlock.match(/### 🛍️ DESCRIPTION\n([^#]+)/);
        
        let primaryText = '';
        if (platformMatch && platformMatch[1].includes('Shopify')) {
            if (primaryTextMatch) primaryText = primaryTextMatch[1].trim();
        } else {
            if (captionMatch) primaryText = captionMatch[1].trim();
        }

        let adHeadline = headlineMatch ? headlineMatch[1].trim().replace(/"/g, '') : title;
        let adDesc = descMatch ? descMatch[1].trim() : 'Free shipping. 30-day guarantee.';

        // Try to get a bold hook for the first line
        let firstLine = '';
        let restText = primaryText;
        let splitText = primaryText.split('\\n');
        if (splitText.length > 0) {
            firstLine = splitText[0].replace(/\\*\\*/g, '');
            restText = splitText.slice(1).join('\\n').trim();
        }

        const idLabel = ['A','B','C','D','E'][index] + (adIndex + 1);

        ads.push({
            id: (index + 1) + '.' + (adIndex + 1),
            label: idLabel,
            angleName: title,
            hookType: adNumMatch ? adNumMatch[2] : 'Hook',
            platform: platformMatch ? platformMatch[1].replace('🎵', '').replace('🛍️', '').trim() : '',
            primaryText: primaryText,
            firstLine: firstLine,
            restText: restText,
            headline: adHeadline,
            desc: adDesc,
            prompt: ''
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

// 2. Parse ai-image-prompts.md
const promptContent = fs.readFileSync('ai-image-prompts.md', 'utf8');
const promptBlocks = promptContent.split(/## AD /);
promptBlocks.shift(); // remove header
const brandBlockMatch = promptContent.match(/BRAND REFERENCE BLOCK[\s\S]*?(```[\s\S]*?```)/);
const brandBlock = brandBlockMatch ? brandBlockMatch[1] : '';

promptBlocks.forEach(block => {
    const match = block.match(/^([A-E]\d+)/);
    if (!match) return;
    const adLabel = match[1];
    
    let lines = block.split('\\n');
    lines.shift();
    
    let searchLabel = adLabel;
    
    angles.forEach(angle => {
        angle.ads.forEach(ad => {
            if (ad.label === searchLabel || (block.includes('B5-STATIC') && ad.label === 'B5')) {
                ad.prompt = brandBlock + '\\n\\n' + lines.join('\\n').trim();
            }
        });
    });
});

// 3. Generate HTML
let htmlArray = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '    <title>Terviiix - Ad Matrix</title>',
    '    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">',
    '    <style>',
    '        * { margin:0; padding:0; box-sizing:border-box; }',
    '        body { font-family:"Inter",sans-serif; background:#f8f9fa; color:#1a1a1a; }',
    '        details > summary { list-style: none; }',
    '        details > summary::-webkit-details-marker { display: none; }',
    '        .ad-img-wrap { border-top:1px solid #f0f0f0; border-bottom:1px solid #f0f0f0; overflow:hidden; background:#f1f5f9; min-height: 280px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#9ca3af; font-size:14px; padding: 20px; text-align:center;}',
    '        .prompt-box { background:#1e293b; color:#f8fafc; padding:12px; border-radius:6px; font-family:monospace; font-size:11px; white-space:pre-wrap; max-height:300px; overflow-y:auto; margin-top:8px;}',
    '        @media (max-width: 768px) { .ad-grid { grid-template-columns: 1fr !important; } }',
    '    </style>',
    '</head>',
    '<body>',
    '    <div style="background:linear-gradient(135deg, #0f172a, #1e3a5f); padding:48px 24px; text-align:center;">',
    '        <h1 style="font-family:\'DM Serif Display\',Georgia,serif; font-size:36px; color:white; margin-bottom:8px;">Terviiix Ionic Thermal Brush</h1>',
    '        <p style="font-size:16px; color:rgba(255,255,255,0.8); max-width:600px; margin:0 auto 24px;">5x5 Ad Matrix &mdash; 25 total ads. Each ad includes full copy and specific visual strategy.</p>',
    '        <div class="hero-stats" style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">',
    '            <div style="background:rgba(255,255,255,0.15); padding:12px 20px; border-radius:10px;">',
    '                <div style="font-size:28px; font-weight:800; color:white;">25</div>',
    '                <div style="font-size:11px; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:0.05em;">Total Ads</div>',
    '            </div>',
    '            <div style="background:rgba(255,255,255,0.15); padding:12px 20px; border-radius:10px;">',
    '                <div style="font-size:28px; font-weight:800; color:white;">5</div>',
    '                <div style="font-size:11px; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:0.05em;">Angles</div>',
    '            </div>',
    '            <div style="background:rgba(255,255,255,0.15); padding:12px 20px; border-radius:10px;">',
    '                <div style="font-size:28px; font-weight:800; color:white;">5</div>',
    '                <div style="font-size:11px; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:0.05em;">Hooks Each</div>',
    '            </div>',
    '            <div style="background:rgba(245,158,11,0.25); padding:12px 20px; border-radius:10px; border:1px solid rgba(245,158,11,0.4);">',
    '                <div style="font-size:28px; font-weight:800; color:white;">5</div>',
    '                <div style="font-size:11px; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:0.05em;">Cheeky Ads</div>',
    '            </div>',
    '        </div>',
    '    </div>',
    '    <div style="max-width:1200px; margin:0 auto; padding:24px 24px 0;">',
    '        <div style="background:white; border:1px solid #e5e7eb; border-radius:12px; padding:16px 20px; margin-bottom:32px; display:flex; gap:20px; align-items:center; flex-wrap:wrap;">',
    '            <span style="font-size:13px; font-weight:600; color:#333;">Each ad includes:</span>',
    '            <span style="display:flex; align-items:center; gap:4px; font-size:12px; color:#65676b;">',
    '                <span style="background:#2563eb22; color:#2563eb; padding:1px 6px; border-radius:4px; font-size:10px; font-weight:700;">Copy</span> View Full Ad Copy',
    '            </span>',
    '            <span style="display:flex; align-items:center; gap:4px; font-size:12px; color:#65676b;">',
    '                <span style="background:#fef3c7; color:#d97706; padding:1px 6px; border-radius:4px; font-size:10px; font-weight:700;">AI</span> Image Prompt (paste-ready)',
    '            </span>',
    '        </div>',
    '    </div>',
    '    <div style="max-width:1200px; margin:0 auto; padding:0 24px 24px;">'
];

angles.forEach(angle => {
    htmlArray.push(
        '        <div style="margin-bottom:48px;">',
        '            <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #0f172a33;">',
        '                <div style="background:#0f172a; color:white; width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px;">',
        '                    ' + angle.num,
        '                </div>',
        '                <div>',
        '                    <h2 style="margin:0; font-size:20px; font-weight:700; color:#1a1a1a;">' + angle.title + '</h2>',
        '                    <div style="font-size:13px; color:#6b7280;">Emotion: ' + angle.emotion + ' | ' + angle.target + ' | 5 hook variations</div>',
        '                </div>',
        '            </div>',
        '            <div class="ad-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">'
    );

    angle.ads.forEach(ad => {
        let snippet = ad.restText.substring(0, 100);
        if (ad.restText.length > 100) snippet += '...';

        htmlArray.push(
            '                <div style="background:#ffffff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; break-inside:avoid; margin-bottom:20px;">',
            '                    <div style="padding:12px 16px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #f0f0f0;">',
            '                        <div style="width:36px;height:36px;border-radius:50%;background:#0f172a;display:flex;align-items:center;justify-content:center;">',
            '                            <span style="color:white;font-weight:700;font-size:12px;">' + ad.id + '</span>',
            '                        </div>',
            '                        <div>',
            '                            <div style="font-weight:600;font-size:13px;color:#1a1a1a;">' + angle.title + '</div>',
            '                            <div style="font-size:11px;color:#65676b;">Sponsored</div>',
            '                        </div>',
            '                        <div style="margin-left:auto; display:flex; gap:6px; flex-wrap:wrap;">',
            '                            <span style="font-size:10px; background:#2563eb22; color:#2563eb; padding:2px 8px; border-radius:12px; font-weight:600;">' + ad.hookType + '</span>',
            '                        </div>',
            '                    </div>',
            '                    <div style="padding:12px 16px;">',
            '                        <div style="font-size:13px; line-height:1.5; color:#1a1a1a;">',
            '                            <strong style="display:block; margin-bottom:6px; font-size:14px;">' + ad.firstLine + '</strong>',
            '                            <span style="color:#444;">' + snippet + '</span>',
            '                            <span style="color:#2563eb; cursor:pointer; font-weight:500;"> See more</span>',
            '                        </div>',
            '                    </div>',
            '                    <div class="ad-img-wrap">',
            '                        <div style="font-size:24px; color:#cbd5e1; margin-bottom:8px;">🖼️</div>',
            '                        <div style="color:#94a3b8; font-weight:500;">No images generated yet</div>',
            '                    </div>',
            '                    <div style="padding:10px 16px; display:flex; align-items:center; justify-content:space-between; background:#f8f9fa;">',
            '                        <div style="max-width:70%;">',
            '                            <div style="font-size:11px; color:#65676b;">terviiix.com/shop</div>',
            '                            <div style="font-size:13px; font-weight:600; color:#1a1a1a; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' + ad.headline + '</div>',
            '                            <div style="font-size:11px; color:#65676b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' + ad.desc + '</div>',
            '                        </div>',
            '                        <button style="background:#2563eb; color:white; border:none; padding:6px 16px; border-radius:6px; font-size:12px; font-weight:600; cursor:pointer; white-space:nowrap;">Learn More</button>',
            '                    </div>',
            '                    <details style="border-top:1px solid #f0f0f0;">',
            '                        <summary style="padding:10px 16px; font-size:12px; color:#2563eb; font-weight:600; cursor:pointer; list-style:none;">View Full Ad Copy</summary>',
            '                        <div style="padding:8px 16px 16px; font-size:13px; line-height:1.6; color:#333; white-space:pre-wrap;">' + ad.primaryText.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>',
            '                    </details>'
        );

        if (ad.prompt && ad.prompt.length > 0) {
            htmlArray.push(
            '                    <details style="border-top:1px solid #f0f0f0; background:#fffbeb;">',
            '                        <summary style="padding:10px 16px; font-size:12px; color:#d97706; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px; list-style:none;">',
            '                            <span style="background:#fef3c7; color:#d97706; padding:1px 6px; border-radius:4px; font-size:10px; font-weight:700;">AI</span> Image Prompt (paste-ready)',
            '                        </summary>',
            '                        <div style="padding:8px 16px 16px;">',
            '                            <div class="prompt-box">' + ad.prompt.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>',
            '                        </div>',
            '                    </details>'
            );
        }

        htmlArray.push('                </div>');
    });

    htmlArray.push(
        '            </div>',
        '        </div>'
    );
});

htmlArray.push(
    '    </div>',
    '</body>',
    '</html>'
);

fs.writeFileSync('ads.html', htmlArray.join('\\n'));
console.log('Successfully generated ads.html');