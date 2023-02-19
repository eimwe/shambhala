import Accordion from './accordion.js';

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});