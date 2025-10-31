document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  if (menuToggle && mobileMenu && hamburgerIcon && closeIcon) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';

      if (isOpen) {
        // close menus
        mobileMenu.style.maxHeight = '0px';
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        // open menus
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        mobileMenu.style.maxHeight = '0px';
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    });
  }
});
