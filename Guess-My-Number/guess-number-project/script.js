'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins!
  } else if (guess === secretNumber) {
    displayMessage('💥 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🙄 Too high!' : '😫 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😌 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
