export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const openModal = document.querySelector('[data-modal="abrir"]');
  const closeModal = document.querySelector('[data-modal="fechar"]');

  if (modalContainer && openModal && closeModal) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function clickOutsideModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    openModal.addEventListener("click", toggleModal);
    closeModal.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickOutsideModal);
  }
}
