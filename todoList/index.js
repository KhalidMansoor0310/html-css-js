var todos = [];

var addTodoForm = document.querySelector("#addTodoForm");
var listGroup  = document.querySelector('.list-group');

function renderTodos(todos){
    todos.forEach(todo => {
        var li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerHTML = todo.value;
        listGroup.appendChild(li);
    });
}

//Check is todo Exist in LocalStorage
var storedTodos = localStorage.getItem("todos");
// if Exist
if (storedTodos) {
  var parsedStoredTodos = JSON.parse(storedTodos);
  todos = parsedStoredTodos;
  renderTodos(todos);
  // Loop over Array, create li Element and Append to the DOM
}

addTodoForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    var todoValue = addTodoForm.todo.value;
  
    todos.push({
      value: todoValue,
      completed: false,
    });
  
    addTodoForm.todo.value = "";
  
    localStorage.setItem("todos", JSON.stringify(todos));
  
});