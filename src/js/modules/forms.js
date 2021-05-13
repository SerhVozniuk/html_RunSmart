import post from './post.js'
import {closeModal, thanksModal} from './modal.js'

function forms(formSelector) {

    let forms = document.querySelectorAll(formSelector);
    forms.forEach(form => postData(form));

    function postData(form){
        form.addEventListener('submit', (event) =>{
            event.preventDefault();

            const formData = new FormData(form);
            const data = JSON.stringify( Object.fromEntries(formData.entries()));
        
            post('https://jsonplaceholder.typicode.com/posts', data)
            .then((json) =>{
                console.log(json)
                closeModal();
                thanksModal();
            })
            .catch(() => console.log('errooor'))
            .finally(() => form.reset());
        });
    }
}

export default forms;