'use strict';

const secretNumber = Math.floor(Math.random() * 5 + 1);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = secretNumber;

// document.querySelector('.number').textContent = 20;

// document.querySelector('.guess').value = 24;

let message = document.querySelector('.message');
const scoreNumber = document.querySelector('.score-number');
const highscoreNumber = document.querySelector('.highscore-number');

// Function for wrong number efect
function shakeEffect(element) {
  setTimeout(() => {
    element.style.color = 'red';
    element.classList.add('shake');
  }, 100);
  element.classList.remove('shake');
}

// Function for substracting 1 after failed attemp
const substractNumber = function () {
  scoreNumber.textContent = Number(scoreNumber.textContent - 1);
};

// Code for when the button is clicked
document
  .querySelector('#check')
  .addEventListener('click', function checkButton() {
    let userInput = document.querySelector('.guess').value;
    if (!userInput) {
      message.textContent = 'No number!';
    } else if (Number(userInput) === secretNumber) {
      console.log('Sucess!');
      message.textContent = 'Correct!';
      scoreNumber.textContent = Number(scoreNumber.textContent + 1);
      document.querySelector('#check').disabled = true;
      document.querySelector('.guess').disabled = true;

      // Incorrect Validations Below:
    } else if (Number(userInput) > secretNumber) {
      console.log('Number is to high!');
      message.textContent = 'Number is to high..';
      shakeEffect(message);
      substractNumber();
    } else if (Number(userInput) < secretNumber) {
      console.log('Number is to low!');
      message.textContent = 'Number is to low..';
      shakeEffect(message);
      substractNumber();
    } else {
      console.log('Not a number!');
      message.textContent = 'Not a number.';
    }
  });

//   Reset Button

console.log(secretNumber);
console.log(scoreNumber.textContent);
console.log(highscoreNumber.textContent);
