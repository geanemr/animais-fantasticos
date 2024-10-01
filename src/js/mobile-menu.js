import outsideClick from "./outside-click.js";

export default class MobileMenu {
  constructor(menuButton, menuList, menuEvents) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    if (menuEvents === undefined) {
      this.menuEvents = ["click", "touchstart"];
    } else {
      this.menuEvents;
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.menuEvents, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.menuEvents.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
