function createTextInput(objArr, i) {
  if (
    objArr[i].type === "text" ||
    objArr[i].type === "tel" ||
    objArr[i].type === "email"
  ) {
    var newInput = document.createElement("input");
    newInput.type = objArr[i].type;
    newInput.id = objArr[i].id;
    newInput.placeholder = objArr[i].label;
    form.appendChild(newInput);
  }
}

function createSelectInput(objArr, i) {
  if (objArr[i].type === "select") {
    var newSelect = document.createElement("select");
    newSelect.id = objArr[i].id;
    var options = objArr[i].options;
    for (var k = 0; k < options.length; k++) {
      var newOption = document.createElement("option");
      newOption.value = options[k].value;
      newOption.textContent = options[k].label;
      newSelect.appendChild(newOption);
    }
    form.appendChild(newSelect);
  }
}

function createTextArea(objArr, i) {
  if (objArr[i].type === "textarea") {
    var newTextArea = document.createElement("textarea");
    newTextArea.placeholder = objArr[i].label;
    newTextArea.id = objArr[i].id;
    form.appendChild(newTextArea);
  }
}
