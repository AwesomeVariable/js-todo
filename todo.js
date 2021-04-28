//select html elements
const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos'


let todos = [];

function del(event) {
  
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = todos.filter(function filterFn(todo) {
    
    return todo.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveTodos();
    
  
  
}


function saveTodos() {
  localStorage.setItem(TODOS_LS,  JSON.stringify(todos));
}
function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = todos.length + 1;
  delBtn.innerText = "✔";
  delBtn.addEventListener("click", del);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
  li.id = newID;
  const todoObj = {
    text: text,
    id: newID
  };

  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}


function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if(loadedTodos !== null){
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function(todo) {
      paintTodo(todo.text);
    });
  } 
}
  

function init() {
loadTodos();
todoForm.addEventListener("submit", handleSubmit);
}
init();