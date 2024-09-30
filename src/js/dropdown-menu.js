import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "ativo";
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events;
    }
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
