import * as galleries from './components/galleries/index.js';
import * as modals from './components/modals/index.js';
import * as accordion from './components/accordion/index.js';
//import Accordion from './components/accordion/accordion.js';
import FormValidator from './form-validator.js';
import PhoneMask from './phone-mask.js';
import setCurrentyear from './year-setter.js';

// document.querySelectorAll('details').forEach((el) => {
//   new Accordion(el);
// });

const FORM = document.getElementById('callback-form');
const FIELDS = ['phone-number'];
const inputValidation = new FormValidator(FORM, FIELDS, '+1');
inputValidation.initialize();

PhoneMask('.form__control--phone');

setCurrentyear('.copyright__year');