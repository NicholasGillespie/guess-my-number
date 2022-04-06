'use strict';

// SELECT ELEMENT
// document.querySelector('#msg');

// READ textContent
// document.querySelector('#msg').textContent;

// MODIFY textContent
// document.querySelector('#msg').textContent = 'Test';

// SET A VALUE
// document.querySelector('#input').value = 23;

// GET A VALUE
// document.querySelector('#input').value;

// LISTEN FOR EVENT + SPECIFY REACTION (with function)
// ↳ add reactions below
/* document.querySelector('#check').addEventListener('click', function () {
  document.querySelector('#number').textContent = 'Test';
  const input = Number(document.querySelector('#input').value);
  console.log(input);
  console.log(typeof input);
}); */

////////////////////////////////////////
////////////////////////////////////////

// document.querySelector('#number').textContent = 'Test';
// document.querySelector('#input').textContent = 'Test';
// document.querySelector('#check').textContent = 'Test';
// document.querySelector('#msg').textContent = 'Test';
// document.querySelector('#score').textContent = 'Test';
// document.querySelector('#highScore').textContent = 'Test';

////////////////////////////////////////
////////////////////////////////////////

// declaring number
let number = Math.trunc(Math.random() * 20 + 1);
// declaring score
let score = 20;
document.querySelector('#score').value = score;
// declaring highScore
let highScore = 0;

// document.querySelector('#number').textContent = number;

document.querySelector('#check').addEventListener('click', function () {
  const input = Number(document.querySelector('#input').value);
  // NO NUMBER
  if (!input) {
    document.querySelector('#msg').textContent = '⛔ No number';
    // RESULT GOOD
  } else if (input === number) {
    document.querySelector('#msg').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = 'var(--clr-win)';
    document.querySelector('#number').style.minInlineSize = '23rem';
    document.querySelector('#number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('#highScore').textContent = highScore;
    }
    // RESULT TOO HIGH
  } else if (input > number) {
    if (score > 1) {
      document.querySelector('#msg').textContent = '📈 Too high';
      score = score - 1;
      document.querySelector('#score').textContent = score;
    } else {
      document.querySelector('#msg').textContent = '💥 Game Over!';
      document.querySelector('#score').textContent = 0;
    }
    // RESULT TOO LOW
  } else if (input < number) {
    if (score > 1) {
      document.querySelector('#msg').textContent = '📉 Too low';
      score = score - 1;
      document.querySelector('#score').textContent = score;
    } else {
      document.querySelector('#msg').textContent = '💥 Game Over!';
      document.querySelector('#score').textContent = 0;
    }
  }
});

document.querySelector('#again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('#msg').textContent = 'Start guessing...';
  document.querySelector('#score').textContent = score;
  document.querySelector('#number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'var(--clr-dark)';
  document.querySelector('#number').style.minInlineSize = '11.5rem';
  document.querySelector('#input').textContent = '';
});
