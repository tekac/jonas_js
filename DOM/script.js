'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;
let score = 20;

//Reset Functionality
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Reset Styling
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Guess Functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    //When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Congratulations! You win!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //When Guess is TO LOW
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST!';
    }

    //When Guess is To HIGH
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
    }
  }
});
