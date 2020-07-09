import modals from './modules/modals';
import forms from './modules/forms';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    forms();
    modals();
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
}); 


