'use strict';

const randomNumber = Math.floor(Math.random() * 5 + 1);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = randomNumber;

// document.querySelector('.number').textContent = 20;

// document.querySelector('.guess').value = 24;

console.log(randomNumber);

// Code for when the button is clicked
document
  .querySelector('#check')
  .addEventListener('click', function checkButton() {
    let userInput = document.querySelector('.guess').value;
    const hintText = document.querySelector('.message');
    if (userInput == randomNumber) {
      console.log('Success');
    } else if (userInput < randomNumber) {
    }
  });
