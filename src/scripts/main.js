import * as galleries from './components/galleries/index.js';
import * as modals from './components/modals/index.js';
import * as accordion from './components/accordion/index.js';
import * as form from './components/form/index.js';
import PhoneMask from './phone-mask.js';
import setCurrentyear from './year-setter.js';

PhoneMask('.form__control--phone');

setCurrentyear('.copyright__year');