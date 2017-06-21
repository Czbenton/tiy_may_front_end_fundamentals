function createForm(objArr) {
  var form = document.querySelector("#form");
  for (var i = 0; i < objArr.length; i++) {
    createTextInput(objArr, i);
    createSelectInput(objArr, i);
    createTextArea(objArr, i);
  }
}

createForm(formData);
