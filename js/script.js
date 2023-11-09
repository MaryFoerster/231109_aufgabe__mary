"use strict";


let vorname = "Mary";
let h1Element = document.querySelector('h1');
h1Element.textContent = h1Element.textContent + " " + "von" + ' ' + vorname;

let newLi = document.createElement('li');
newLi.textContent = 'Hund streicheln';
newLi.style.backgroundColor = 'red';
document.querySelector('ul').appendChild(newLi);

let firstLi = document.querySelector('li');
firstLi.remove();

let secondLi = document.querySelector('li');
secondLi.classList.add('done');