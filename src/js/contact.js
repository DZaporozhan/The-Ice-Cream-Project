(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-contact]'),
    closeModalBtn: document.querySelector('[data-modal-close-contact]'),
    modal: document.querySelector('[data-modal-contact]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
