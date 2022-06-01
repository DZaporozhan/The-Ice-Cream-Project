(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-howmade]'),
    openModalBtnHeader: document.querySelector('[data-modal-open-header]'),
    closeModalBtn: document.querySelector('[data-modal-close-howmade]'),
    modal: document.querySelector('[data-modal-howmade]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnHeader.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
  }
})();
