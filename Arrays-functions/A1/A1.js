'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits: ', fruits);
console.log('Lenght of Fruits: ' + fruits.length);
console.log('Last Element of Fruits: ' + fruits[fruits.length - 1]);
console.log('Element at index 2: ' + fruits[2]);

let vegetables = [];

for (let i = 0; i < 3; i++) {
  const vegetable = prompt('Give me a vegetable');
  vegetables.push(vegetable);
}

console.log('Vegetables: ', vegetables);
console.log('Lenght of vegetables: ' + vegetables.length);
