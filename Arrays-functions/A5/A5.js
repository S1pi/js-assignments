'use strict';

function sortArray(array, order) {
  switch (order) {
    case 'asc':
      let ascArray = array.slice().sort((a, b) => a - b);
      return ascArray;
    case 'desc':
      let descArray = array.slice().sort((a, b) => b - a);
      return descArray;
  }
}

const numbers = [8, 2, 12, 5, 77, 0];

console.log('Original Array: ' + numbers);

// const sortedNumbers = sortArray(numbers);
console.log('Sorted Array: ' + sortArray(numbers, 'asc'));
console.log('Sorted Array: ' + sortArray(numbers, 'desc'));
