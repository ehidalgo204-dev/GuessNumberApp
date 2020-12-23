'use strict';

let secretNumber = Math.floor(Math.random() * 10 + 1);

const scoreNumber = document.querySelector('.score-number');
const highscoreNumber = document.querySelector('.highscore-number');
const message = document.querySelector('.message');
let score = 10;
let highscore = 10;

// Function for wrong number animation
function shake(element) {
  setTimeout(() => {
    element.classList.add('shake');
    element.style.color = 'red';
  }, 100);

  element.classList.remove('shake');
}

function newContent(element, message) {
  document.querySelector(element).textContent = message;
}

// Guess/Check Button
document.querySelector('#check').addEventListener('click', function () {
  let numberByUser = Number(document.querySelector('.guess').value);

  console.log(numberByUser);

  // If not a number on the input
  if (!numberByUser) {
    console.log('Not a number!');
    newContent('.message', 'Not a number!');
    shake(message);
    // If the number was guessed!
  } else if (numberByUser === secretNumber) {
    console.log('Correct');
    newContent('.message', 'Correct!');
    newContent('.number', secretNumber);
    newContent('.score-number', ++score);
    if (score > highscore) {
      highscore = score;
      newContent('.highscore-number', highscore);
    }
    message.style.color = 'white';
    document.body.style.backgroundColor = 'green';
    document.querySelector('#check').disabled = true;
    document.querySelector('.guess').disabled = true;
    // Wrong guess!
  } else if (numberByUser > secretNumber) {
    console.log('Too high!');
    newContent('.message', 'Too high!');
    shake(message);
    newContent('.score-number', --score);
  } else if (numberByUser < secretNumber) {
    console.log('Too low!');
    newContent('.message', 'Too low!');
    shake(message);
    newContent('.score-number', --score);
  }
});

//   Reset Button
document.querySelector('.reset').addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  message.style.color = 'white';
  document.querySelector('.guess').value = '';
  document.querySelector('#check').disabled = false;
  document.querySelector('.guess').disabled = false;
  document.body.style.backgroundColor = '#222222';
  secretNumber = Math.floor(Math.random() * 5 + 1);
  console.log(secretNumber);
});

var number = document.querySelector('.guess');

// Listen for input event on numInput.
number.onkeydown = function (e) {
  if (
    !(
      (e.keyCode > 95 && e.keyCode < 106) ||
      (e.keyCode > 47 && e.keyCode < 58) ||
      e.keyCode == 8
    )
  ) {
    return false;
  }
};

console.log(secretNumber);
console.log(scoreNumber.textContent);
console.log(highscoreNumber.textContent);
