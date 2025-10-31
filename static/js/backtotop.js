// backtotop.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const showAt = 300; // 滾動超過多少像素後顯示（可調）
  let ticking = false;

  // 更新按鈕顯示狀態（使用 requestAnimationFrame 避免頻繁重繪）
  function updateVisibility() {
    const scY = window.scrollY || window.pageYOffset;
    const shouldShow = scY > showAt;

    btn.classList.toggle('opacity-0', !shouldShow);
    btn.classList.toggle('translate-y-4', !shouldShow);
    btn.classList.toggle('pointer-events-none', !shouldShow);
    btn.setAttribute('aria-hidden', String(!shouldShow));
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateVisibility();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 初始檢查（如果頁面載入時已經在中間）
  updateVisibility();

  // 點擊：採用 smooth scroll，但尊重 prefers-reduced-motion
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    // 可在點擊後給 focus 到 body，避免鍵盤使用者困在按鈕
    document.body.focus?.();
  });

  // 鍵盤支援（按 Enter / Space 也會觸發按鈕）
  btn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      e.preventDefault();
      btn.click();
    }
  });
});
