const modalConsultation = document.querySelector('#consultation');
const modalOrder = document.querySelector('#order');
const btn = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
const modalThanks = document.querySelector('#thanks');
const btnCat = document.querySelectorAll('.button--catalog');
const catalogSubtitle = document.querySelectorAll('.catalog-item__subtitle');
const modalDescr = document.querySelector('#order .modal__descr');
const close = document.querySelectorAll('.modal__close');

function chanceModaldescr(){   //меняем descr  modal
    btnCat.forEach((item, index) => {
        item.addEventListener('click', ()  => {
            modalDescr.innerHTML = catalogSubtitle[index].innerHTML;
        });
    });
}

export function openModal(){   // открываем модальные окна
    if(this.getAttribute('data-modal') === 'consultation') {
        overlay.style.display = 'block';
        modalConsultation.style.display = 'block';
    }
    else if(this.getAttribute('data-modal') === 'order'){
        overlay.style.display = 'block';
        modalOrder.style.display = 'block';
        chanceModaldescr();
    }
}

btn.forEach(item =>  item.addEventListener('click', openModal));  //на кнопки вешаем ф-ю openModal

export function closeModal(){            //закрываем модальные окна
    overlay.style.display = 'none';
    modalConsultation .style.display = 'none';
    modalOrder.style.display = 'none';
    modalThanks.style.display = 'none';
}
export function thanksModal(){         //открываем окно благодарносьти при отправленной форм
    overlay.style.display = 'block';
    modalThanks.style.display = 'block';
};

close.forEach(item => item.addEventListener('click', closeModal));    // на кркстик вешаем закрітие модального окна

