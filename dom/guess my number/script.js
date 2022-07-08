'use strict';

/* document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 80;
console.log(document.querySelector('.guess').value);*/

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number';
    }
})


