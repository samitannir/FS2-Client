"use strict";

function sayHelloForPage1(message) {
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
  sayHelloForPage1('This is Page1!!');
};