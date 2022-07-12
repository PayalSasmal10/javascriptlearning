'use strict';

// selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// setting score elements
score0El.textContent = 0;
score1El.textContent = 0;

// hide dice
diceEl.classList.add('hidden');
