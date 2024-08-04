export default function initOpeningHours() {
  const opening = document.querySelector("[data-semana]");
  const week = opening.dataset.semana.split(",").map(Number);
  const hourWeek = opening.dataset.horario.split(",").map(Number);
  const now = new Date();
  const dayNow = now.getDay();
  const hourNow = now.getHours();

  const isOpenDay = week.indexOf(dayNow) !== -1;
  const isOpenHour = hourNow >= hourWeek[0] && hourNow < hourWeek[1];

  if (isOpenDay && isOpenHour) {
    opening.classList.add("aberto");
  }
}
