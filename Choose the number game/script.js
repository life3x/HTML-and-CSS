//Guess The Number Game
//Author: Abhirath Dubey
//Date: 22-10-2021

'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);

document.querySelector('.levelbtn').onclick = function () {
  if (document.querySelector('.dropdownlist').value === '1') {
    document.querySelector('.between').textContent = '(Between 1 and 20)';
    randomNumber = Math.floor(Math.random() * 20 + 1);
  } else if (document.querySelector('.dropdownlist').value === '2') {
    document.querySelector('.between').textContent = '(Between 1 and 30)';
    randomNumber = Math.floor(Math.random() * 30 + 1);
  } else if (document.querySelector('.dropdownlist').value === '3') {
    document.querySelector('.between').textContent = '(Between 1 and 40)';
    randomNumber = Math.floor(Math.random() * 40 + 1);
  }
};
//----------//
document.querySelector('.again').onclick = function () {
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  if (document.querySelector('.dropdownlist').value === '1') {
    randomNumber = Math.floor(Math.random() * 20 + 1);
  } else if (document.querySelector('.dropdownlist').value === '2') {
    randomNumber = Math.floor(Math.random() * 30 + 1);
  } else if (document.querySelector('.dropdownlist').value === '3') {
    randomNumber = Math.floor(Math.random() * 40 + 1);
  }
  document.querySelector('body').style.backgroundColor = '#222';
};
//-----------------------//
document.querySelector('.check').onclick = function () {
  const guessVal = Number(document.querySelector('.guess').value);
  if (guessVal == randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct!';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) + 3;
    randomNumber = Math.floor(Math.random() * 20 + 1);

    if (
      document.querySelector('.score').textContent >
      document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
      document.querySelector('.highscore').textContent =
        document.querySelector('.highscore').textContent;
    }
    document.querySelector('.number').textContent = '!';
    document.querySelector('body').style.backgroundColor = '#67B7D1';
  } else if (!guessVal) {
    document.querySelector('.message').textContent = '⛔ No values entered';
  } else if (
    guessVal !== randomNumber &&
    document.querySelector('.score').textContent === '12'
  ) {
    document.querySelector('.message').textContent = '😭 Sorry, you lost';
    document.querySelector('.gmn').textContent = 'The Number Was';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#7c98ab';
  } else if (guessVal < randomNumber && guessVal !== randomNumber) {
    document.querySelector('.message').textContent = '🔻 Too Low';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
    document.querySelector('body').style.backgroundColor = '#222';
  } else if (guessVal > randomNumber && guessVal !== randomNumber) {
    document.querySelector('.message').textContent = '🔺 Too High';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
    document.querySelector('body').style.backgroundColor = '#222';
  }
  document.querySelector('.guess').value = ' ';
};
