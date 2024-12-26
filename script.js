'use strict';

setMessage('Guess Guess Guess...');

let secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);

let highscore = document.querySelector('.highscore').textContent;

//initialize the score number
let score = 15;
setScore(score);

document.querySelector('.guess').value = 12;

// A litener for the button 'Check'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when the guess number is zero
  if (!guess) {
    setMessage('No number!');
  }
  //when the player wins
  else if (guess === secretNumber) {
    setMessage('Correct Number ;)');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;
  }
  //when the playes guessed a wrong number
  else if (guess != secretNumber) {
    if (score > 1) {
      //when the player guessed a higher number
      if (guess > secretNumber) {
        setMessage('Too high');
      }
      //when the player guessed a lower number
      else {
        setMessage('Too low');
      }
      score--;
      setScore(score);
    } else {
      setMessage('You lost the game');
      setScore(0);
    }
  }
});

const originalBackgroung = '#222';
const originalWidth = '15rem';

// When the palyer wants to play again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 21);
  score = 15;
  document.querySelector('body').style.backgroundColor = originalBackgroung;
  document.querySelector('.number').style.width = originalWidth;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  setMessage('Guess Guess Guess...');
  setScore(score);
});

// A function to set the text of the message
function setMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setScore(num) {
  document.querySelector('.score').textContent = num;
}

console.log('hiiii');
console.log('hiiii');

console.log('hiiii');
console.log('hiiii');
