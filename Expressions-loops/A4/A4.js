'use strict';

const score = parseInt(prompt('Give your assessment score: '));

const element = document.getElementById('result');

switch (true) {
  case score >= 0 && score <= 39:
    element.textContent = 'Your grade is 0';
    break;
  case score >= 40 && score <= 51:
    element.textContent = 'Your grade is 1';
    break;
  case score >= 52 && score <= 63:
    element.textContent = 'Your grade is 2';
    break;
  case score >= 64 && score <= 75:
    element.textContent = 'Your grade is 3';
    break;
  case score >= 76 && score <= 87:
    element.textContent = 'Your grade is 4';
    break;
  default:
    element.textContent = 'Your grade is 5';
    break;
}
