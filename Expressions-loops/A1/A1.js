'use strict';

const celsius = parseFloat(prompt('Give me temerature (celsius)'));
console.log('testi');

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;
console.log(`${fahrenheit} & k= ${kelvin}`);

let element = document.getElementById('answer');

element.innerHTML = `
        <tr>
          <td>Fahrenheit</td>
          <td>${fahrenheit.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Kelvin</td>
          <td>${kelvin.toFixed(2)}</td>
        </tr>
        `;
