import AnimaNumbers from "./numbers-anima.js";

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function animaAnimalNumbers() {
    const animaNumbers = new AnimaNumbers("[data-numero]");
    animaNumbers.init();
  }

  function fillAnimals(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => fillAnimals(animal));
      animaAnimalNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
