window.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.getElementById('search-toggle');
  const searchModal = document.getElementById('search-modal');
  const searchBackdrop = document.getElementById('search-backdrop');

  
  if (typeof PagefindUI === 'undefined') {
    console.warn('PagefindUI not found. Search is disabled in dev mode until you run "npx pagefind --site public".');
    return;
  }

  // 1. 初始化 Pagefind
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: false,
    translations: {
      placeholder: "Search posts...",
      zero_results: "No results found for [SEARCH_TERM]"
    }
  });

  // --- Helper Functions ---

  const openModal = () => {
    if (!searchModal) return;
    searchModal.classList.remove('hidden');
    // 防止背景滾動
    document.body.style.overflow = 'hidden';
    
    // 自動聚焦輸入框
    setTimeout(() => {
      const input = document.querySelector('.pagefind-ui__search-input');
      if (input) input.focus();
    }, 100);
  };

  const closeModal = () => {
    if (!searchModal) return;
    searchModal.classList.add('hidden');
    // 恢復背景滾動
    document.body.style.overflow = '';
  };

  // --- Event Listeners ---

  // 點擊按鈕開啟
  if (searchToggle) {
    searchToggle.addEventListener('click', openModal);
  }

  // 點擊背景關閉
  if (searchBackdrop) {
    searchBackdrop.addEventListener('click', closeModal);
  }

  // 鍵盤事件
  document.addEventListener('keydown', (e) => {
    // ESC 關閉
    if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
      closeModal();
    }
    
    // Cmd+K / Ctrl+K 開啟
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault(); // 防止瀏覽器預設行為 (如 Chrome 的搜尋列)
      openModal();
    }
  });
});