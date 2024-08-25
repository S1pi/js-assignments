'use strict';

function sortArray(array) {
  let sortedArray = array.slice().sort((a, b) => a - b);
  return sortedArray;
}

const numbers = [8, 2, 12, 5, 77, 0];

console.log('Original Array: ' + numbers);

const sortedNumbers = sortArray(numbers);
console.log('Sorted Array: ' + sortedNumbers);
