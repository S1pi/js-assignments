'use strict';

let numbers = [];

for (let i = 1; i < 6; i++) {
  const number = parseInt(prompt(`Enter Number ${i}: `));
  numbers.push(number);
}

console.log('Numbers: ', numbers);

const cNumber = parseInt(prompt('Enter number to search: '));

console.log(
  numbers.includes(cNumber)
    ? `Number ${cNumber} is found in the array.`
    : `Number ${cNumber} not found in the array`
);

numbers.pop();
console.log('Updated Numbers: ', numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log('Sorted Numbers: ', numbers);
