'use strict';

// selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
// setting score elements
score0El.textContent = 0;
score1El.textContent = 0;

// hide dice
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generate random dice roll.
    const randomDice = Math.trunc(Math.random()*6)+1;

    // 2. Display dice roll.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomDice}.png`;

    // dice r0ll number is 1 or not.
    if (randomDice !== 1){
        // add dice to current score
        currentScore += randomDice;
        // add current score to players.
        current0El.textContent = currentScore;
    }else
    {
        // Switch to next player
    }
})