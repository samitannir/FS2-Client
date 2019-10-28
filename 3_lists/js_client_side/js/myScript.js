"use strict";

function showList() {
  const list = ['one', 'two', 'three'];
  
  try {
    let ul = document.createElement('ul');
    let li;
    for (var i = 0; i < list.length; i++) {
      li = document.createElement('li');
      li.textContent = list[i];
      ul.appendChild(li);
    }

    let div = document.getElementById('display');
    div.appendChild(ul);
    console.log('ok');
  } catch(err) {
    console.log('ng');
    console.log(err);
  }
}

window.onload = function() {
  showList();
};