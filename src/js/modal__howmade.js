(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-howmade]'),
    closeModalBtn: document.querySelector('[data-modal-close-howmade]'),
    modal: document.querySelector('[data-modal-howmade]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
