/* ============================================================
 * TaskWise automation demos — animated mockups
 * All positions measured at runtime so nothing can drift.
 * ============================================================ */

/* ---------- Workflow demo: SVG paths drawn between live node bounds ---------- */
(function workflowDemo() {
  const root = document.querySelector('[data-demo="workflow"]');
  if (!root) return;
  const canvas = root.querySelector('.hwf-canvas');
  const svg = root.querySelector('.wf-svg');
  const nodes = [...root.querySelectorAll('.wf-node')];
  if (!canvas || !svg || nodes.length < 5) return;

  // Snake flow: TL → TC → TR → BR → BL
  // Edges (4): TL→TC, TC→TR (both horizontal top), TR→BR (vertical right), BR→BL (horizontal bottom)
  const edgeDefs = [
    { from: 0, fSide: 'right',  to: 1, tSide: 'left' },
    { from: 1, fSide: 'right',  to: 2, tSide: 'left' },
    { from: 2, fSide: 'bottom', to: 3, tSide: 'top'  },
    { from: 3, fSide: 'left',   to: 4, tSide: 'right'},
  ];

  let edgePaths = [];

  function relAnchor(node, side) {
    const r = node.getBoundingClientRect();
    const cr = canvas.getBoundingClientRect();
    const cx = (r.left + r.right) / 2 - cr.left;
    const cy = (r.top + r.bottom) / 2 - cr.top;
    switch (side) {
      case 'top':    return { x: cx, y: r.top    - cr.top    };
      case 'bottom': return { x: cx, y: r.bottom - cr.top    };
      case 'left':   return { x: r.left  - cr.left, y: cy };
      case 'right':  return { x: r.right - cr.left, y: cy };
    }
  }

  function layout() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    // Preserve any active/done state so we don't flash on resize
    const prev = edgePaths.map(p => ({
      active: p.classList.contains('active'),
      done: p.classList.contains('done'),
    }));
    svg.innerHTML = '';
    edgePaths = [];
    edgeDefs.forEach((e, i) => {
      const p1 = relAnchor(nodes[e.from], e.fSide);
      const p2 = relAnchor(nodes[e.to],   e.tSide);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      // Straight line — our snake layout makes every edge orthogonal
      path.setAttribute('d', `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`);
      path.setAttribute('class', 'wf-edge-path');
      if (prev[i]) {
        if (prev[i].active) path.classList.add('active');
        if (prev[i].done)   path.classList.add('done');
      }
      svg.appendChild(path);
      edgePaths.push(path);
    });
  }

  function tick() {
    nodes.forEach(n => n.classList.remove('processing', 'done'));
    edgePaths.forEach(p => p.classList.remove('active', 'done'));

    let i = 0;
    function step() {
      if (i > 0) {
        nodes[i - 1].classList.remove('processing');
        nodes[i - 1].classList.add('done');
        if (edgePaths[i - 1]) {
          edgePaths[i - 1].classList.remove('active');
          edgePaths[i - 1].classList.add('done');
        }
      }
      if (i >= nodes.length) {
        setTimeout(tick, 2200);
        return;
      }
      nodes[i].classList.add('processing');
      if (edgePaths[i]) edgePaths[i].classList.add('active');
      i++;
      setTimeout(step, 1100);
    }
    step();
  }

  // Initial layout when fonts/images settle
  function safeLayout() { try { layout(); } catch (e) { /* noop */ } }
  if (document.readyState === 'complete') safeLayout();
  else window.addEventListener('load', safeLayout);
  safeLayout();
  window.addEventListener('resize', safeLayout);
  if ('ResizeObserver' in window) {
    new ResizeObserver(safeLayout).observe(canvas);
  }

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { safeLayout(); tick(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(root);
})();

/* ---------- OCR demo: highlight overlays sized to live target text ---------- */
(function ocrDemo() {
  const root = document.querySelector('[data-demo="ocr"]');
  if (!root) return;
  const paper = root.querySelector('.ocr-doc-paper');
  const scan  = root.querySelector('.ocr-scan-line');
  const fields = [...root.querySelectorAll('.ocr-field')];
  if (!paper || !scan) return;

  const highlightByField = new Map();

  function buildHighlights() {
    // Remove any existing dynamic highlights
    paper.querySelectorAll('.ocr-highlight').forEach(h => h.remove());
    highlightByField.clear();

    const pr = paper.getBoundingClientRect();
    fields.forEach(f => {
      const name = f.dataset.target;
      if (!name) return;
      const target = paper.querySelector(`[data-ocr="${name}"]`);
      if (!target) return;
      const r = target.getBoundingClientRect();
      const hl = document.createElement('div');
      hl.className = 'ocr-highlight';
      const pad = 3;
      hl.style.left   = (r.left - pr.left - pad) + 'px';
      hl.style.top    = (r.top  - pr.top  - pad) + 'px';
      hl.style.width  = (r.width  + pad * 2) + 'px';
      hl.style.height = (r.height + pad * 2) + 'px';
      paper.appendChild(hl);
      highlightByField.set(f, hl);
    });
  }

  function play() {
    scan.classList.remove('scanning');
    fields.forEach(f => f.classList.remove('shown'));
    highlightByField.forEach(h => h.classList.remove('show'));

    // Re-measure before each play in case anything reflowed (fonts, etc.)
    buildHighlights();

    setTimeout(() => scan.classList.add('scanning'), 300);

    fields.forEach((f, i) => {
      setTimeout(() => {
        f.classList.add('shown');
        const hl = highlightByField.get(f);
        if (hl) hl.classList.add('show');
      }, 700 + i * 380);
    });

    setTimeout(play, 7200);
  }

  // Build once at load so things look right even before scroll
  function safeBuild() { try { buildHighlights(); } catch (e) {} }
  if (document.readyState === 'complete') safeBuild();
  else window.addEventListener('load', safeBuild);
  window.addEventListener('resize', safeBuild);
  if ('ResizeObserver' in window) {
    new ResizeObserver(safeBuild).observe(paper);
  }

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { play(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(root);
})();

/* ---------- Messaging demo: messages appear in sequence ---------- */
(function msgDemo() {
  const root = document.querySelector('[data-demo="messaging"]');
  if (!root) return;
  const slackMsgs = root.querySelectorAll('.slack .msg');
  const wappMsgs  = root.querySelectorAll('.wapp .msg');

  function play() {
    [...slackMsgs, ...wappMsgs].forEach(m => m.classList.remove('shown'));
    slackMsgs.forEach((m, i) => {
      setTimeout(() => m.classList.add('shown'), 400 + i * 700);
    });
    wappMsgs.forEach((m, i) => {
      setTimeout(() => m.classList.add('shown'), 1200 + i * 800);
    });
    setTimeout(play, 8000);
  }

  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { play(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(root);
})();

/* ---------- Smooth-scroll for [data-scroll] buttons ---------- */
(function scrollLinks() {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-scroll]');
    if (!t) return;
    const sel = t.getAttribute('data-scroll');
    const target = document.querySelector(sel);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
    // Briefly highlight the first field for affordance
    setTimeout(() => {
      const firstInput = target.querySelector('input, textarea');
      if (firstInput) firstInput.focus({ preventScroll: true });
    }, 500);
  });
})();

/* ---------- Nav scroll state ---------- */
(function nav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
