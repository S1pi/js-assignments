'use strict';

let numbers = [];

let loop = true;

while (loop) {
  const num = parseInt(prompt('Enter a number: '));
  numbers.push(num);
  if (confirm('Press ok if you want to stop') == true) {
    loop = false;
  }
}

let evenNums = [];

for (const i of numbers) {
  if (i % 2 == 0) {
    evenNums.push(i);
  }
}

const element = document.getElementById('result');

// element.textContent = Boolean(evenNums.length)
//   ? 'Even Numbers: ' + evenNums1
//   : 'Even Numbers: None';

element.textContent =
  evenNums != 0 ? 'Even Numbers: ' + evenNums : 'Even Numbers: None';
