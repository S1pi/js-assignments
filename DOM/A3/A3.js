'use strict';

// const browserName = navigator.userAgent;

const target = document.querySelector('#target');

const browserInfo = navigator.userAgent;
const bi = document.createElement('p');
bi.textContent = `Browser name and version: ${browserInfo}`;

const operatingSystem = navigator.platform;
const os = document.createElement('p');
os.textContent = `Operating system: ${operatingSystem}`;

// console.log(browserInfo.split(' '));

let screenWidth = screen.width;
let screenHeight = screen.height;
const screenNode = document.createElement('p');
screenNode.textContent = `Screen width: ${screenWidth}, Screen height: ${screenHeight}`;

let browserWidth = screen.availWidth;
let browserHeight = screen.availHeight;
const browserNode = document.createElement('p');
browserNode.textContent = `Availaible width for browser: ${browserWidth}, Availaible height for browser: ${browserHeight}`;

const date = new Date();
const options = {
  day: 'numeric',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const currentDate = date.toLocaleDateString('FI', options);
const dateNode = document.createElement('p');
dateNode.textContent = currentDate;

target.append(bi, os, screenNode, browserNode, dateNode);
