(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openMenuBtn: document.querySelector('.btn-open'),
    closeMenuBtn: document.querySelector('.btn-close'),
    menu: document.querySelector('.mobile-header'),
    menuBtn: document.querySelector('.mobile-menu-btn')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuBtn.addEventListener('click', toggleMenu);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.openMenuBtn.classList.toggle('is-hidden');
    refs.closeMenuBtn.classList.toggle('is-hidden');
  }
})();