(function() {
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', systemPreference);
  }
})();