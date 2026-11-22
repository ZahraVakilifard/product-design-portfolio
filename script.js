document.getElementById("year").textContent = new Date().getFullYear();

function openArt(el) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const caption = document.getElementById("lightbox-caption");
  if (!box || !img) return;
  img.src = el.src;
  img.alt = el.alt || "";
  title.textContent = el.dataset.title || "";
  caption.textContent = el.dataset.caption || "";
  box.classList.add("open");
}

function closeArt() {
  const box = document.getElementById("lightbox");
  if (box) box.classList.remove("open");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeArt();
});

(() => {
  const canvas = document.getElementById("hero-canvas");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1, queued = false;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");

  function resize() {
    const r = canvas.getBoundingClientRect();
    w = r.width;
    h = r.height;
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    request();
  }

  function draw() {
    queued = false;
    ctx.clearRect(0, 0, w, h);
    const p = reduce.matches ? 0 : Math.max(0, Math.min(1.4, scrollY / Math.max(hero.offsetHeight, 1)));
    const cx = w * (w < 650 ? 0.77 : 0.72) + Math.sin(p * 2) * w * 0.05;
    const cy = h * 0.48 + p * h * 0.08;
    const max = Math.max(w, h) * 1.75;

    for (let i = 0; i < 58; i++) {
      const depth = i / 58;
      const size = max * Math.pow(0.933, i + 1) * (1 + p * 0.12);
      const angle = i * 0.085 + p * 2.7;
      const x = cx + Math.sin(i * 0.14 + p * 2) * w * 0.05 * depth;
      const y = cy + Math.cos(i * 0.12 + p) * h * 0.06 * depth;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = `rgba(209,255,94,${(0.52 - depth * 0.37) * Math.min(1, size / 35)})`;
      ctx.lineWidth = depth > 0.6 ? 0.8 : 1.3;
      ctx.strokeRect(-size / 2, -size / 2, size, size);
      ctx.restore();
    }

    for (let i = 0; i < 10; i++) {
      const a = i * Math.PI / 5 + p * 0.3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * max, cy + Math.sin(a) * max);
      ctx.strokeStyle = "rgba(209,255,94,0.04)";
      ctx.stroke();
    }
  }

  function request() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(draw);
    }
  }

  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", resize, { passive: true });
  reduce.addEventListener?.("change", request);
  resize();
})();
