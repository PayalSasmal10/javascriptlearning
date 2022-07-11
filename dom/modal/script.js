'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
// console.log(btnsShowModal);

for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener("click", function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btncloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);