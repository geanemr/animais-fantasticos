export default class OpeningHours {
  constructor(opening, activeClass) {
    this.opening = document.querySelector(opening);
    this.activeClass = activeClass;
  }

  dataOpening() {
    this.week = this.opening.dataset.semana.split(",").map(Number);
    this.hourWeek = this.opening.dataset.horario.split(",").map(Number);
  }

  dataNow() {
    this.now = new Date();
    this.dayNow = this.now.getDay();
    this.hourNow = this.now.getUTCHours() - 3;
  }

  isOpen() {
    const openWeek = this.week.indexOf(this.dayNow) !== -1;
    const openHours =
      this.hourNow >= this.hourWeek[0] && this.hourNow < this.hourWeek[1];
    return openWeek && openHours;
  }

  openActive() {
    if (this.isOpen()) {
      this.opening.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.opening) {
      this.dataOpening();
      this.dataNow();
      this.openActive();
    }
    return this;
  }
}
