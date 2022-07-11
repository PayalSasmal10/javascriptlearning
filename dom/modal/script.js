'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
// console.log(btnsShowModal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener("click",openModal );
}

btncloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// using esc key to close the modal
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
        
    }
})
