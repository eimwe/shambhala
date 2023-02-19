import FormValidator from './form-validator.js';

const FORM = document.getElementById('callback-form');
const FIELDS = ['phone-number'];
const inputValidation = new FormValidator(FORM, FIELDS, '+1');

inputValidation.initialize();