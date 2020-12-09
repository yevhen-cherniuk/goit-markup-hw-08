(() => {
  const refs = {
    
    openMenuBtn: document.querySelector('.btn-open'),
    closeMenuBtn: document.querySelector('.btn-close'),
    menu: document.querySelector('.mobile-header'),
    menuBtn: document.querySelector('.mobile-menu-btn')
  };
 
  refs.menuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.openMenuBtn.classList.toggle('is-hidden');
    refs.closeMenuBtn.classList.toggle('is-hidden');
  }
})();