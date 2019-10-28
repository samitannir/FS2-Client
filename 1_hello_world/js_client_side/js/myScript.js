"use strict";

function sayHelloFunction(message) {
	let dom = document.getElementById('message')
	dom.textContent = message;
}

window.onload = function() {
  sayHelloFunction('Hello World');
};