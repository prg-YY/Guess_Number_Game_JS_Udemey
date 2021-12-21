'use strict';
// console.log(document.querySelector('.message').textContent);

// const setEl = document.querySelector('.message');

// setEl.textContent = 'Correct Number 😀';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
  const gusess = Number(document.querySelector('.guess').value);
  console.log(gusess, typeof gusess);
  if (!gusess) {
    document.querySelector('.message').textContent = '🤪 No Number!';
  }
});
