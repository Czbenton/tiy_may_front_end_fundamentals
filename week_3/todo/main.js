// Add your JS here.
var todoList = document.querySelector(".todo-list");
var todoInput = document.querySelector(".new-todo");

todoInput.addEventListener("keypress", addLi);

function addLi(event) {
  var listItem = document.createElement("li");
  if (event.which === 13) {
    // listItem.textContent = event.target.value;
    listItem.innerHTML =
      "<div class='view'><label>" + todoInput.value + "</label></div>";
    listItem;
    todoList.appendChild(listItem);
    todoInput.value = "";
  }
}
