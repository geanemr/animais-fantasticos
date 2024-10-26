import initSmoothScroll from "./scroll-suave.js";
import initScrollAnimation from "./scroll-animation.js";
import initAccordion from "./accordion.js";
import initTabNav from "./tabnav.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initMobileMenu from "./mobile-menu.js";
import initOpeningHours from "./opening-hours.js";
import initFetchAnimals from "./fetch-animals.js";
import initFetchBitcoin from "./fetch-bitcoin.js";
import SlideNav from "./slide.js";

initSmoothScroll();
initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initOpeningHours();
initFetchAnimals();
initFetchBitcoin();

const slide = new SlideNav(".slide", ".slide-wrapper");

slide.init();

slide.addControl(".custom-controls");
