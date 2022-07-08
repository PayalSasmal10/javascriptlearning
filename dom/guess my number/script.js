'use strict';

/* document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 80;
console.log(document.querySelector('.guess').value);*/

let score = 20;

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number';
    }

    else if( guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
    }
    else if(guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '💥 You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
        
    }
    else if(guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '💥 You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = secretNumber;
})


