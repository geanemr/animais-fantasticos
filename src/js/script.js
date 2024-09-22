import SmoothScroll from "./scroll-suave.js";
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

const smoothScroll = new SmoothScroll('.js-menu a[href^="#"]')
smoothScroll.init();

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
