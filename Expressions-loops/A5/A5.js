'use strict';

const integer = parseInt(prompt('Input positive integer: '));

let sum = 0;

for (let i = 0; i <= integer; i++) {
  sum += i;
}

const element = document.getElementById('result');

element.textContent = `Sum: ${sum}`;
