'use strict';

// selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
console.log(btnHold);

let currentScore = 0;
let activePlayer = 0;
let score = [0,0];
let total = 0;
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
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
        // current0El.textContent = currentScore;
    }else
    {
        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
    }
})

// holding scoire feature
const holdScore = function() {
    total += currentScore;
    console.log(`inside hold score ${total}`);
    document.getElementById(`score--${activePlayer}`).textContent = total;
} 

btnHold.addEventListener('click', holdScore);
    