"use strict";

function showList() {
  const strings = ['one', 'two', 'three'];
  const numbers = [1, 2, 3];
  
  try {
    let div = document.getElementById('display');
    let p;
    for (var i = 0; i < strings.length; i++) {
      p = document.createElement('p');
      p.textContent = numbers[i] + '. ' + strings[i];
      div.appendChild(p);
    }
    console.log('ok');
  } catch(err) {
    console.log('ng');
    console.log(err);
  }
}

window.onload = function() {
  showList();
};