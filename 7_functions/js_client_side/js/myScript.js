"use strict";

function sayHelloForIndex(message) {
  try {
    let dom = document.getElementById('message')
    dom.textContent = message;
    console.log('ok');
  } catch(err) {
    console.log('ng');
    console.log(err);
  } finally {
    //
  }

}

window.onload = function() {
  sayHelloForIndex('This is index page!!');
};