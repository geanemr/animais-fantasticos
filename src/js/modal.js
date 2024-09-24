export default class Modal {
  constructor(openModal, closeModal, modalContainer) {
    this.openModal = document.querySelector(openModal);
    this.closeModal = document.querySelector(closeModal);
    this.modalContainer = document.querySelector(modalContainer);
    //bind this ao objeto para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.openModal.addEventListener("click", this.eventToggleModal);
    this.closeModal.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.modalContainer && this.openModal && this.closeModal) {
      this.addModalEvents();
    }
    return this; //para o this do modal ser o objeto dele mesmo, que é criado com a classe. Sem retornar this, é undefined. Assim posso linkar outro método em script.js
  }
}
