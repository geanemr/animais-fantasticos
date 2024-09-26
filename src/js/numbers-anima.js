export default class AnimaNumbers {
  constructor(numbers) {
    this.numbers = document.querySelectorAll(numbers);
  }

  static incrementNumber(number) { //static porque não precisa do objeto para funcionar
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
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  init() {
    if (this.numbers.length) {
      this.animaNumbers();
    }
    return this;
  }
}
