/**
 * BookedSolid Pro — Image Generation Studio
 * Adds to the 5x5 ad matrix page:
 * - Auto-render initial images with Nano Banana Pro (conceptual previews)
 * - Editable structured JSON prompts per ad
 * - Enhance button with model selection (Nano Banana Pro, Nano Banana Pro, GPT Image 1.5)
 * - Image carousel per ad with delete capability
 * - Structured JSON prompts for consistency
 * - Persistent storage via IndexedDB
 */

(function() {
  'use strict';

  // Keys decoded at runtime
  const _d = s => atob(s);
  const OPENAI_API_KEY = () => _d('c2stcHJvai1GY2RFb3BCNGF5cm1zY1pzTnZnMUkwSWRHWkU0Z01pbXVFN09JWExtRzlLYkNsbVlaT3VvN3FrVi1QVF9GQl83bzNkWnEwcEg3bFQzQmxia0ZKSjUtc2dtSHo0RHpjM2tCOG56a3FheUdvNl9HcnpRdGY0b0ttLVRWSS1EdzZ2c09TYkRmM2t2OFR0MDhUX1E4NnZvNTlIYmd1a0E=');
  const GEMINI_API_KEY = () => _d('QUl6YVN5Q2NSZXAtRURxR3NsRkZzekZiMlY4WnprU2lEdTBhVk1J');
  const MODEL_CONFIG = {
    'gpt-image-1.5':    { provider: 'openai', model: 'gpt-image-1', quality: 'high' },
    'nano-banana-pro':   { provider: 'gemini', model: 'gemini-3-pro-image-preview' }
  };
  const DB_NAME = 'bsp-image-studio';
  const DB_VERSION = 1;
  const STORE_NAME = 'ad-images';

  // ─── IndexedDB helpers ───────────────────────────────────────────
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function saveImage(adId, imageData, model, prompt) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).add({
        adId,
        imageData,
        model,
        prompt,
        timestamp: Date.now()
      });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function getImages(adId) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const all = store.getAll();
      all.onsuccess = () => {
        resolve(all.result.filter(img => img.adId === adId).sort((a, b) => a.timestamp - b.timestamp));
      };
      all.onerror = () => reject(all.error);
    });
  }

  async function deleteImage(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function hasAnyImages(adId) {
    const images = await getImages(adId);
    return images.length > 0;
  }

  // ─── Structured Prompt Parser ────────────────────────────────────
  // Section headers in order of appearance — used to split the raw prompt into editable fields.
  // Each entry: [key, regex that matches the start of the section].
  const SECTION_ORDER = [
    ['brand_style',           /^BRAND STYLE:\s*/m],
    ['color_palette',         /^COLOR PALETTE:\s*/m],
    ['typography',            /^TYPOGRAPHY:\s*/m],
    ['logo',                  /^LOGO:\s*/m],
    ['overall_aesthetic',     /^OVERALL AESTHETIC:\s*/m],
    ['rendering_style',       /^RENDERING STYLE:\s*/m],
    ['composition_background',/^COMPOSITION[^:\n]*:\s*/m],
    ['headline',              /^(?:- )?HEADLINE[^:\n]*:\s*/m],
    ['visual_element',        /^(?:- )?VISUAL ELEMENT[^:\n]*:\s*/m],
    ['supporting_text',       /^(?:- )?SUPPORTING TEXT[^:\n]*:\s*/m],
    ['cta',                   /^(?:- )?CTA:\s*/m],
    ['brand_mark',            /^(?:- )?BRAND MARK:\s*/m],
    ['lighting',              /^(?:- )?LIGHTING:\s*/m],
  ];

  // Converts the existing text prompt into structured JSON fields
  function parsePromptToStructured(textPrompt) {
    const sections = {};
    SECTION_ORDER.forEach(([key]) => { sections[key] = ''; });

    // Find every section header's position in the text
    const found = [];
    for (const [key, rx] of SECTION_ORDER) {
      const m = textPrompt.match(rx);
      if (m) {
        found.push({ key, start: m.index, headerEnd: m.index + m[0].length });
      }
    }
    // Sort by position in text
    found.sort((a, b) => a.start - b.start);

    // Extract content between headers
    for (let i = 0; i < found.length; i++) {
      const contentStart = found[i].headerEnd;
      const contentEnd = i + 1 < found.length ? found[i + 1].start : textPrompt.length;
      sections[found[i].key] = textPrompt.slice(contentStart, contentEnd).trim();
    }

    return sections;
  }

  // Reconstruct text prompt from structured JSON
  function structuredToText(s) {
    let parts = [];
    if (s.brand_style) parts.push(`BRAND STYLE: ${s.brand_style}`);
    if (s.color_palette) parts.push(`COLOR PALETTE: ${s.color_palette}`);
    if (s.typography) parts.push(`TYPOGRAPHY: ${s.typography}`);
    if (s.logo) parts.push(`LOGO: ${s.logo}`);
    if (s.overall_aesthetic) parts.push(`OVERALL AESTHETIC: ${s.overall_aesthetic}`);
    if (s.rendering_style) parts.push(`\nRENDERING STYLE: ${s.rendering_style}`);
    if (s.composition_background) parts.push(`\nCOMPOSITION:\n${s.composition_background}`);
    if (s.headline) parts.push(`\nHEADLINE:\n${s.headline}`);
    if (s.visual_element) parts.push(`\nVISUAL ELEMENT:\n${s.visual_element}`);
    if (s.supporting_text) parts.push(`\nSUPPORTING TEXT:\n${s.supporting_text}`);
    if (s.cta) parts.push(`\nCTA: ${s.cta}`);
    if (s.brand_mark) parts.push(`\nBRAND MARK: ${s.brand_mark}`);
    if (s.lighting) parts.push(`\nLIGHTING: ${s.lighting}`);
    return parts.join('\n');
  }

  // ─── Image Generation (OpenAI + Gemini) ──────────────────────────
  async function generateImage(prompt, model, size) {
    const config = MODEL_CONFIG[model] || MODEL_CONFIG['nano-banana-pro'];

    if (config.provider === 'gemini') {
      return await generateGemini(prompt, config, size);
    } else {
      return await generateOpenAI(prompt, config, size);
    }
  }

  async function generateOpenAI(prompt, config, size) {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: config.model,
        prompt: prompt.trim(),
        n: 1,
        size: size || '1024x1024',
        quality: config.quality
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error?.message || 'OpenAI API error');
    // gpt-image-1 returns b64_json by default
    const b64 = data?.data?.[0]?.b64_json;
    if (b64) return `data:image/png;base64,${b64}`;
    // Fallback: if URL is returned instead
    const url = data?.data?.[0]?.url;
    if (url) return url;
    throw new Error('No image data in response');
  }

  async function generateGemini(prompt, config, size) {
    // Map size to Gemini aspect ratio
    let aspectRatio = '1:1';
    if (size === '1024x1536' || (size || '').includes('1350')) aspectRatio = '3:4';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${GEMINI_API_KEY()}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt.trim() }] }],
        generationConfig: {
          responseModalities: ['TEXT', 'IMAGE'],
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: '1K'
          }
        }
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error?.message || 'Gemini API error');

    // Find the image part in the response
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const imgPart = parts.find(p => p.inline_data && p.inline_data.mime_type?.startsWith('image/'));
    if (!imgPart) throw new Error('No image in Gemini response');

    const mime = imgPart.inline_data.mime_type || 'image/png';
    return `data:${mime};base64,${imgPart.inline_data.data}`;
  }

  // ─── UI Components ───────────────────────────────────────────────

  // Build the image carousel for an ad
  function buildCarousel(images, adId, container) {
    container.innerHTML = '';
    if (images.length === 0) {
      container.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8;font-size:12px;">No images generated yet</div>';
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;gap:8px;overflow-x:auto;padding:8px;scroll-snap-type:x mandatory;';

    images.forEach((img, idx) => {
      const card = document.createElement('div');
      card.style.cssText = 'flex:0 0 auto;width:200px;scroll-snap-align:start;position:relative;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;background:#f8f9fa;';

      const imgEl = document.createElement('img');
      imgEl.src = img.imageData;
      imgEl.style.cssText = 'width:100%;height:200px;object-fit:cover;display:block;cursor:pointer;';
      imgEl.title = `${img.model} — ${new Date(img.timestamp).toLocaleString()}`;
      imgEl.onclick = () => {
        // Open full-size in a modal
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:10000;cursor:pointer;';
        const fullImg = document.createElement('img');
        fullImg.src = img.imageData;
        fullImg.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;';
        modal.appendChild(fullImg);
        modal.onclick = () => modal.remove();
        document.body.appendChild(modal);
      };

      const modelBadge = document.createElement('div');
      modelBadge.style.cssText = 'position:absolute;top:4px;left:4px;background:rgba(0,0,0,0.7);color:white;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;';
      modelBadge.textContent = img.model;

      const deleteBtn = document.createElement('button');
      deleteBtn.style.cssText = 'position:absolute;top:4px;right:4px;background:rgba(239,68,68,0.9);color:white;border:none;width:22px;height:22px;border-radius:50%;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.title = 'Delete this rendering';
      deleteBtn.onclick = async (e) => {
        e.stopPropagation();
        if (confirm('Delete this image rendering?')) {
          await deleteImage(img.id);
          const updated = await getImages(adId);
          buildCarousel(updated, adId, container);
        }
      };

      const countLabel = document.createElement('div');
      countLabel.style.cssText = 'position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.6);color:white;font-size:9px;padding:2px 6px;border-radius:4px;';
      countLabel.textContent = `${idx + 1}/${images.length}`;

      card.appendChild(imgEl);
      card.appendChild(modelBadge);
      card.appendChild(deleteBtn);
      card.appendChild(countLabel);
      wrapper.appendChild(card);
    });

    container.appendChild(wrapper);
  }

  // Build the structured prompt editor
  function buildPromptEditor(structured, adId) {
    const container = document.createElement('div');
    container.style.cssText = 'padding:8px 16px 16px;';

    const fields = [
      { key: 'rendering_style', label: 'Rendering Style', rows: 2 },
      { key: 'composition_background', label: 'Composition / Background', rows: 3 },
      { key: 'headline', label: 'Headline', rows: 4 },
      { key: 'visual_element', label: 'Visual Element', rows: 4 },
      { key: 'supporting_text', label: 'Supporting Text', rows: 2 },
      { key: 'cta', label: 'CTA', rows: 2 },
      { key: 'brand_mark', label: 'Brand Mark', rows: 1 },
      { key: 'lighting', label: 'Lighting', rows: 1 }
    ];

    fields.forEach(f => {
      if (!structured[f.key]) return;
      const label = document.createElement('label');
      label.style.cssText = 'display:block;font-size:10px;font-weight:600;color:#6b7280;margin:8px 0 2px;text-transform:uppercase;letter-spacing:0.05em;';
      label.textContent = f.label;

      const textarea = document.createElement('textarea');
      textarea.style.cssText = 'width:100%;font-size:11px;font-family:Inter,sans-serif;line-height:1.5;padding:6px 8px;border:1px solid #e5e7eb;border-radius:6px;resize:vertical;background:#fafafa;color:#333;';
      textarea.rows = f.rows;
      textarea.value = structured[f.key];
      textarea.dataset.field = f.key;
      textarea.dataset.adId = adId;

      // Update structured data on change
      textarea.addEventListener('input', () => {
        structured[f.key] = textarea.value;
        // Store updated structured prompt
        localStorage.setItem(`bsp-prompt-${adId}`, JSON.stringify(structured));
      });

      container.appendChild(label);
      container.appendChild(textarea);
    });

    return container;
  }

  // Build the generate/enhance controls
  function buildControls(adId, structured, carouselContainer) {
    const controls = document.createElement('div');
    controls.style.cssText = 'padding:8px 16px 12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;border-top:1px solid #f0f0f0;';

    // Model selector
    const select = document.createElement('select');
    select.style.cssText = 'font-size:11px;padding:6px 10px;border:1px solid #e5e7eb;border-radius:6px;background:white;color:#333;font-weight:500;cursor:pointer;';
    [
      { value: 'gpt-image-1.5', label: 'GPT Image 1.5 — $0.04' },
      { value: 'nano-banana-pro', label: 'Nano Banana Pro — $0.13 (best)' }
    ].forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      select.appendChild(o);
    });

    // Generate button
    const genBtn = document.createElement('button');
    genBtn.style.cssText = 'background:#2563eb;color:white;border:none;padding:6px 14px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;';
    genBtn.innerHTML = '&#9881; Generate';

    // Enhance button
    const enhanceBtn = document.createElement('button');
    enhanceBtn.style.cssText = 'background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;';
    enhanceBtn.innerHTML = '&#10024; Enhance';

    // Status
    const status = document.createElement('span');
    status.style.cssText = 'font-size:11px;color:#6b7280;margin-left:auto;';

    async function doGenerate(model) {
      const btn = model === select.value ? genBtn : enhanceBtn;
      const origText = btn.innerHTML;
      btn.disabled = true;
      btn.style.opacity = '0.6';
      btn.innerHTML = '&#8987; Generating...';
      status.textContent = `Sending to ${model}...`;

      try {
        // Get latest structured prompt (may have been edited)
        const stored = localStorage.getItem(`bsp-prompt-${adId}`);
        const currentStructured = stored ? JSON.parse(stored) : structured;
        const reconstructed = structuredToText(currentStructured);

        // Use raw prompt if reconstruction lost too much content (>30% shorter)
        const rawStored = localStorage.getItem(`bsp-raw-${adId}`) || '';
        const textPrompt = (rawStored.length > 0 && reconstructed.length < rawStored.length * 0.7)
          ? rawStored
          : reconstructed;

        // Determine size from composition or raw prompt
        let size = '1024x1024';
        const compText = (currentStructured.composition_background || rawStored).toLowerCase();
        if (compText.includes('1080x1350') || compText.includes('vertical') || compText.includes('1350')) {
          size = '1024x1536';
        }

        const imageData = await generateImage(textPrompt, model, size);
        await saveImage(adId, imageData, model, textPrompt);
        const images = await getImages(adId);
        buildCarousel(images, adId, carouselContainer);
        status.textContent = `Done! ${images.length} image${images.length > 1 ? 's' : ''}`;
      } catch (err) {
        status.textContent = `Error: ${err.message}`;
        console.error('Image generation error:', err);
      } finally {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerHTML = origText;
      }
    }

    genBtn.onclick = () => doGenerate(select.value);
    enhanceBtn.onclick = () => doGenerate('nano-banana-pro');

    controls.appendChild(select);
    controls.appendChild(genBtn);
    controls.appendChild(enhanceBtn);
    controls.appendChild(status);

    return controls;
  }

  // ─── Main: Inject studio into each ad card ───────────────────────
  async function initStudio() {
    // Find all ad cards
    const allSpans = document.querySelectorAll('span');
    const adCards = [];

    allSpans.forEach(span => {
      const text = span.textContent.trim();
      if (/^\d+\.\d+$/.test(text)) {
        // Walk up to the card container
        let el = span;
        for (let i = 0; i < 20; i++) {
          el = el.parentElement;
          if (!el) break;
          const css = (el.style?.cssText || '').toLowerCase();
          if (el.tagName === 'DIV' && css.includes('border-radius') && (css.includes('#ffffff') || css.includes('rgb(255, 255, 255)') || css.includes('background:#ffffff') || css.includes('background: #ffffff'))) {
            adCards.push({ adId: text, card: el });
            break;
          }
        }
      }
    });

    for (const { adId, card } of adCards) {
      // Find the existing image prompt <pre> element
      const pres = card.querySelectorAll('pre');
      let promptPre = null;
      pres.forEach(pre => {
        if (pre.textContent.includes('BRAND STYLE') || pre.textContent.includes('RENDERING STYLE') || pre.textContent.includes('COMPOSITION')) {
          promptPre = pre;
        }
      });

      if (!promptPre) continue;

      const rawPrompt = promptPre.textContent;

      // Parse prompt to structured JSON
      // Always store the raw prompt as source of truth
      localStorage.setItem(`bsp-raw-${adId}`, rawPrompt);

      let structured = parsePromptToStructured(rawPrompt);

      // Check for saved edits — but validate they have real content
      const savedPrompt = localStorage.getItem(`bsp-prompt-${adId}`);
      if (savedPrompt) {
        try {
          const saved = JSON.parse(savedPrompt);
          // If saved parse has empty composition but raw doesn't, re-parse (fix broken parses)
          if (!saved.composition_background && rawPrompt.includes('COMPOSITION')) {
            structured = parsePromptToStructured(rawPrompt);
            localStorage.setItem(`bsp-prompt-${adId}`, JSON.stringify(structured));
          } else {
            structured = saved;
          }
        } catch (e) {}
      } else {
        localStorage.setItem(`bsp-prompt-${adId}`, JSON.stringify(structured));
      }

      // ─── Build UI elements ───

      // 1. Image Carousel (insert after the image placeholder area, before CTA bar)
      const carouselContainer = document.createElement('div');
      carouselContainer.style.cssText = 'border-top:1px solid #f0f0f0;background:#f8fafc;';
      carouselContainer.id = `carousel-${adId}`;

      // Load existing images
      const existingImages = await getImages(adId);
      buildCarousel(existingImages, adId, carouselContainer);

      // Find insertion point: gradient div, or CTA bar, or first details element
      const gradientDiv = card.querySelector('div[style*="linear-gradient"]');
      const ctaBar = card.querySelector('div[style*="background:#f8f9fa"]');
      const firstDetails = card.querySelector('details');
      const insertBefore = (gradientDiv && gradientDiv.nextSibling) || ctaBar || firstDetails;

      if (insertBefore && insertBefore.parentNode) {
        insertBefore.parentNode.insertBefore(carouselContainer, insertBefore);
      } else {
        // Fallback: append to card
        card.appendChild(carouselContainer);
      }

      // 2. Generate/Enhance Controls
      const controls = buildControls(adId, structured, carouselContainer);

      // Insert controls after carousel
      if (carouselContainer.parentNode) {
        carouselContainer.parentNode.insertBefore(controls, carouselContainer.nextSibling);
      }

      // 3. Structured Prompt Editor (replace the raw prompt <pre>)
      // Find the details element containing the image prompt
      const allDetails = card.querySelectorAll('details');
      allDetails.forEach(details => {
        const summary = details.querySelector('summary');
        if (summary && summary.textContent.includes('Image Prompt')) {
          // Replace the pre content with the structured editor
          const editorContainer = details.querySelector('div[style*="position:relative"]') || details.querySelector('div');
          if (editorContainer) {
            // Keep the copy button but replace the pre
            const copyBtn = editorContainer.querySelector('button');

            // Build structured editor
            const editor = buildPromptEditor(structured, adId);

            // Add a "Copy Full Prompt" button at top of editor
            const fullCopyBtn = document.createElement('button');
            fullCopyBtn.style.cssText = 'background:#0f172a;color:white;border:none;padding:4px 12px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;margin-bottom:8px;';
            fullCopyBtn.textContent = 'Copy Full Prompt';
            fullCopyBtn.onclick = () => {
              const stored = localStorage.getItem(`bsp-prompt-${adId}`);
              const current = stored ? JSON.parse(stored) : structured;
              const text = structuredToText(current);
              navigator.clipboard.writeText(text).then(() => {
                fullCopyBtn.textContent = 'Copied!';
                setTimeout(() => fullCopyBtn.textContent = 'Copy Full Prompt', 1500);
              });
            };

            // Add a "View Raw" toggle
            const rawToggle = document.createElement('button');
            rawToggle.style.cssText = 'background:transparent;color:#6b7280;border:1px solid #e5e7eb;padding:4px 12px;border-radius:6px;font-size:11px;font-weight:500;cursor:pointer;margin-left:8px;margin-bottom:8px;';
            rawToggle.textContent = 'View Raw';

            const rawView = document.createElement('pre');
            rawView.style.cssText = 'font-size:11px;line-height:1.5;color:#333;white-space:pre-wrap;background:#fefce8;padding:12px;border-radius:8px;border:1px solid #fef08a;margin-top:4px;max-height:400px;overflow-y:auto;display:none;';

            rawToggle.onclick = () => {
              if (rawView.style.display === 'none') {
                const stored = localStorage.getItem(`bsp-prompt-${adId}`);
                const current = stored ? JSON.parse(stored) : structured;
                rawView.textContent = structuredToText(current);
                rawView.style.display = 'block';
                editor.style.display = 'none';
                rawToggle.textContent = 'Edit Structured';
              } else {
                rawView.style.display = 'none';
                editor.style.display = 'block';
                rawToggle.textContent = 'View Raw';
              }
            };

            // Replace contents
            editorContainer.innerHTML = '';
            editorContainer.style.cssText = 'padding:8px 16px 16px;';
            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:0;';
            btnRow.appendChild(fullCopyBtn);
            btnRow.appendChild(rawToggle);
            editorContainer.appendChild(btnRow);
            editorContainer.appendChild(editor);
            editorContainer.appendChild(rawView);
          }
        }
      });
    }

    // ─── Auto-render initial images for ads without any ───
    // Only runs ONCE ever (tracked via localStorage flag). After that, user clicks Generate manually.
    const autoRenderDone = localStorage.getItem('bsp-auto-render-done');
    const autoRenderQueue = [];
    if (!autoRenderDone) {
      for (const { adId } of adCards) {
        const hasImages = await hasAnyImages(adId);
        if (!hasImages) {
          const angleNum = parseInt(adId.split('.')[0]);
          if (angleNum >= 7) {
            autoRenderQueue.push(adId);
          }
        }
      }
    }

    if (autoRenderQueue.length > 0) {
      console.log(`[Image Studio] Auto-rendering ${autoRenderQueue.length} images with Nano Banana Pro...`);
      // Show a global progress bar
      const progressBar = document.createElement('div');
      progressBar.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#0f172a;color:white;padding:12px 24px;font-size:13px;font-weight:600;z-index:9999;display:flex;align-items:center;gap:12px;';
      const progressText = document.createElement('span');
      progressText.textContent = `Generating concept images: 0/${autoRenderQueue.length}`;
      const progressFill = document.createElement('div');
      progressFill.style.cssText = 'flex:1;height:4px;background:#1e293b;border-radius:2px;overflow:hidden;';
      const progressInner = document.createElement('div');
      progressInner.style.cssText = 'height:100%;background:#2563eb;border-radius:2px;transition:width 0.3s;width:0%;';
      progressFill.appendChild(progressInner);
      progressBar.appendChild(progressText);
      progressBar.appendChild(progressFill);
      document.body.appendChild(progressBar);

      let completed = 0;
      for (const adId of autoRenderQueue) {
        try {
          const stored = localStorage.getItem(`bsp-prompt-${adId}`);
          const s = stored ? JSON.parse(stored) : {};
          const reconstructed = structuredToText(s);

          // Prefer raw prompt — it has full detail for better image generation
          const rawStored = localStorage.getItem(`bsp-raw-${adId}`) || '';
          const textPrompt = rawStored.length > reconstructed.length ? rawStored : reconstructed;

          let size = '1024x1024';
          const comp = (s.composition_background || rawStored).toLowerCase();
          if (comp.includes('1350') || comp.includes('vertical')) size = '1024x1536';

          const imageData = await generateImage(textPrompt, 'nano-banana-pro', size);
          await saveImage(adId, imageData, 'nano-banana-pro', textPrompt);

          // Update carousel
          const carousel = document.getElementById(`carousel-${adId}`);
          if (carousel) {
            const images = await getImages(adId);
            buildCarousel(images, adId, carousel);
          }
        } catch (err) {
          console.error(`[Image Studio] Failed to generate for ${adId}:`, err);
        }

        completed++;
        progressText.textContent = `Generating concept images: ${completed}/${autoRenderQueue.length}`;
        progressInner.style.width = `${(completed / autoRenderQueue.length) * 100}%`;
      }

      progressText.textContent = `Done! ${completed} concept images generated.`;
      localStorage.setItem('bsp-auto-render-done', 'true');
      setTimeout(() => progressBar.remove(), 3000);
    }
  }

  // ─── Boot ────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStudio);
  } else {
    initStudio();
  }
})();
