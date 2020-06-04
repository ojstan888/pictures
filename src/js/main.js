import modals from './modules/modals';
import forms from './modules/forms';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    forms();
    modals();
    showMoreStyles('.button-styles', '#styles .row');
}); 