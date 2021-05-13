
import slider from './modules/slider.js'
import togleCataloContent from './modules/togleCataloContent.js'
import forms from "./modules/forms.js"
import {closeModal, openModal} from './modules/modal.js'

window.addEventListener('DOMContentLoaded', () =>{
    slider('.slider__prev', '.slider__next', '.slider__block__item');
    togleCataloContent({
        contentItem: '.catalog-item__content',
        contenList: '.catalog-item__list',
        link: '.catalog-item__link',
        linkBack: '.catalog-item__back',
        classContentActive: 'catalog-item__content--active',
        classListActive: 'catalog-item__list--active'
    });
    forms('form');
    closeModal();
    openModal();
});





