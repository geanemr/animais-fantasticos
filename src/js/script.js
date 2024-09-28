import SmoothScroll from "./scroll-suave.js";
import Accordion from "./accordion.js";
import TabNav from "./tabnav.js";
import Modal from "./modal.js";
import Tooltip from "./tooltip.js";
import ScrollAnima from "./scroll-animation.js";
import initDropdownMenu from "./dropdown-menu.js";
import initMobileMenu from "./mobile-menu.js";
import initOpeningHours from "./opening-hours.js";
import fetchAnimals from "./fetch-animals.js";
import fetchBitcoin from "./fetch-bitcoin.js";

const smoothScroll = new SmoothScroll('.js-menu a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion(".faq-lista dt");
accordion.init();

const tabNav = new TabNav(".js-tabmenu li", ".js-tabcontent section");
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima(".js-scroll");
scrollAnima.init();

fetchAnimals("./animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco")


initDropdownMenu();
initMobileMenu();
initOpeningHours();
