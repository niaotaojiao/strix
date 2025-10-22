// main.js - 主題切換和圖示更新功能

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  
  if (!themeToggle || !sunIcon || !moonIcon) return;
  
  // 更新圖示顯示狀態
  function updateIcons(theme) {
    if (theme === 'dark') {
      // 深色模式：顯示太陽圖示（點擊後切換到淺色）
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      // 淺色模式：顯示月亮圖示（點擊後切換到深色）
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }
  
  // 初始化圖示狀態
  const currentTheme = document.documentElement.getAttribute('data-theme');
  updateIcons(currentTheme);
  
  // 點擊切換主題
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
  });
}

// 監聽系統主題變化
function watchSystemTheme() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  mediaQuery.addEventListener('change', (e) => {
    // 只在使用者沒有手動設定時才跟隨系統
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // 更新圖示
      const sunIcon = document.getElementById('sun-icon');
      const moonIcon = document.getElementById('moon-icon');
      if (sunIcon && moonIcon) {
        if (newTheme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    }
  });
}

// DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  watchSystemTheme();
  
  // 未來可以在這裡加入其他初始化功能
  // initMobileMenu();
  // initSearchBar();
});