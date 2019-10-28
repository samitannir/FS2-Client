"use strict";

function showStringList() {
  const s = ['one', 'two', 'three'];
  
  try {
    let div = document.getElementById('strings');
    let ul = document.createElement('ul');
    for (var i = 0; i < s.length; i++) {
      let li = document.createElement('li');
      li.textContent = s[i];
      ul.appendChild(li);
    }
    div.appendChild(ul);
    console.log('ok');
  } catch(err) {
    console.log('ng');
    console.log(err);
  }
}

function showNumberList() {
  const n = [1, 2, 3];
  
  try {
    let div = document.getElementById('numbers');
    let ul = document.createElement('ul');
    for (var i = 0; i < n.length; i++) {
      let li = document.createElement('li');
      let text = n[i] + ' is ';
      switch(n[i]) {
        case 1:
          text += 'less than 2';
          break;
        case 2:
          text += 'equal 2';
          break;
        case 3:
          text += 'greater than 2';
          break;
        default:
          text += '...';
          console.log('No number');
      }
      li.textContent = text;
      ul.appendChild(li);
    }
    div.appendChild(ul);
    console.log('ok');
  } catch(err) {
    console.log('ng');
    console.log(err);
  }
}

window.onload = function() {
  showStringList();
  showNumberList();
};