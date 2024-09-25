export default class AnimaNumbers {
  constructor(numbers) {
    this.numbers = document.querySelectorAll(numbers);
  }

  incrementNumber(number) {
    const total = +number.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumbers() {
    this.numbers.forEach((number) => this.incrementNumber(number));
  }

  init() {
    if (this.numbers) {
      this.animaNumbers();
    }
    return this;
  }
}
