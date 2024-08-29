'use strict';

const integer = parseInt(prompt('Give me a positive integer: '));

const div = document.querySelector('#result');
const node = document.createElement('table');

for (let i = 1; i <= integer; i++) {
  const trNode = document.createElement('tr');
  node.appendChild(trNode);
  for (let j = 1; j <= integer; j++) {
    const tdNode = document.createElement('td');
    tdNode.textContent = `${i * j}`;
    trNode.appendChild(tdNode);
  }
}

div.appendChild(node);
