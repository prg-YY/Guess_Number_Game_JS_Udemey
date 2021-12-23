'use strict';
// console.log(document.querySelector('.message').textContent);

// const setEl = document.querySelector('.message');

// setEl.textContent = 'Correct Number 😀';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const gusess = Number(document.querySelector('.guess').value);
  console.log(gusess, typeof gusess);

  //When there is no input
  if (!gusess) {
    // document.querySelector('.message').textContent = '🤪 No Number!...';
    displayMessage('🤪 No Number!...');

    //when player wins
  } else if (gusess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 Correct Number!...';
    displayMessage('🏆 Correct Number!...');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').style.width = '40rem';

    //When guess is wrong
  } else if (gusess !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   gusess > secretNumber ? '📈 Too Higth!...' : '📈 Too Low!...';
    score--;
    displayMessage(
      gusess > secretNumber ? '📈 Too Higth!...' : '📈 Too Low!...'
    );
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = '💣 You Lost The Game!...';
    displayMessage('💣 You Lost The Game!...');
    document.querySelector('.score').textContent = 0;
  }
});

// When gues is too high
//   } else if (gusess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too Higth!...';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '💣 You Lost The Game!...';
//       document.querySelector('.score').textContent = 0;
//     }

//     //When guess is too low
//   } else if (gusess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too Low!...';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '💣 You Lost The Game!...';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
