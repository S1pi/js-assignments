'use strict';

const plane1 = prompt(
  'Give me x and y coordinates for plane 1 (seperate them with space): '
);
const plane2 = prompt(
  'Give me x and y coordinates for plane 2 (seperate them with space): '
);

const plane1X = parseFloat(plane1.split(' ')[0]);
const plane1Y = parseFloat(plane1.split(' ')[1]);
const plane2X = parseFloat(plane2.split(' ')[0]);
const plane2Y = parseFloat(plane2.split(' ')[1]);

const distance = Math.sqrt((plane2X - plane1X) ** 2 + (plane2Y - plane1Y) ** 2);

let element = document.getElementById('results');

element.textContent = `${distance.toFixed(3)}`;
