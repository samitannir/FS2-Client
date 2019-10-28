"use strict";

const pageNameList = ["index", "welcome", "form", "page1"];

let searchPage = event => {
  let text = event.target.value;
  console.log(text);
  if (text) {
    let pageName = "";
    pageNameList.forEach(name => {
      if (name.indexOf(text) == 0) {
        pageName = name;
        return;
      }
    });
    console.log(pageName);
    if (pageName == "") {
      setDisabledButton();
      return;
    }
    setEabledButton(pageName);
  } else {
    setDisabledButton();
  }
};

function setEabledButton(pagename) {
  document.getElementById("result").innerHTML = `Found page:${pagename}.html`;
  let button = document.getElementById("move");
  button.onclick = () => (window.location.href = `${pagename}.html`);
  button.innerHTML = `Move to this page!!`;
  button.disabled = "";
}

function setDisabledButton() {
  document.getElementById("result").innerHTML =
    "Not matching any pages. Plese input other text.";
  let button = document.getElementById("move");
  button.innerHTML = `No target page`;
  button.disabled = "disabled";
}

window.onload = () => {
  setDisabledButton();
  document.getElementById("search").addEventListener("input", searchPage);
};
