export default function initScrollAnimation() {
    const sections = document.querySelectorAll(".js-scroll");
    if (sections.length) {
      const halfWindow = window.innerHeight * 0.6;
  
      function animeScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - halfWindow < 0;
          if (isSectionVisible) {
            section.classList.add("ativo");
          } else {
            section.classList.remove("ativo");
          }
        });
      }
      animeScroll();
      window.addEventListener("scroll", animeScroll);
    }
  }