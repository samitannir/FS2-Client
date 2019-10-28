function validate() {
  checkForm("name");
  checkForm("age");

  return false;
}

function checkForm(id) {
  try {
    var element = document.getElementById(id);
    console.log(element);

    if (!element.checkValidity()) {
      console.log(element.validationMessage);
      element.nextElementSibling.innerHTML = element.validationMessage;
      return;
    }

    element.nextElementSibling.innerHTML = "";
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
