'use strict';

const element = document.getElementById('answer');

const side1 = parseInt(prompt('First side lenght?'));
const side2 = parseInt(prompt('Second side leght'));
const side3 = parseInt(prompt('Third side lengh'));

if (side1 == side2 && side2 == side3) {
  element.textContent = 'Triangle is equilateral';
} else if (side1 != side2 && side1 != side3 && side2 != side3) {
  element.textContent = 'Triangle is scalene';
} else {
  element.textContent = 'Triangle is isosceles';
}
