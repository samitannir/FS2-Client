"use strict";

function sayHelloFunction(message) {
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
  sayHelloFunction('Hello World');
};