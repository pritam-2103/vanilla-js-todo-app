const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const filterTodo = document.getElementById("filterTodo");
const todoContainer = document.getElementById("todoContainer");
const todoUl = document.getElementById("todoList");
const completeButton = document.getElementsByClassName("completeButton");
const removeButton = document.getElementsByClassName("removeButton");

const todoList = [];

const addTodo = todoButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  class Todo {
    constructor(todo) {
      (this.todo = todo),
        (this.status = false),
        (this.id = Math.random() * 1000);
    }
  }
  const todo = new Todo((this.todo = todoInput.value));
  todoList.push(todo);
  todoInput.value = "";
  renderTodo(todo);
});

const renderTodo = (todo) => {
  const newTodo = document.createElement("li");
  const createTodoItem = document.createElement("p");
  const todoTextNode = document.createTextNode(todo.todo);
  const completeButton = document.createElement("button");
  const removeButton = document.createElement("button");

  todoUl
    .appendChild(newTodo)
    .appendChild(createTodoItem)
    .appendChild(todoTextNode);
  newTodo.appendChild(completeButton);
  newTodo.appendChild(removeButton);
  newTodo.classList.add("todo");
  newTodo.setAttribute("id", todo.id);
  createTodoItem.classList.add("todoItem");
  completeButton.classList.add("completeButton");
  removeButton.classList.add("removeButton");
  completeButton.addEventListener("click", completeEventHandler);
  removeButton.addEventListener("click", removeEventHandler);
};

//find todo object with id

//completeButton event handler
const completeEventHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  const todoElement = e.target.parentElement;

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === Number(todoElement.id)) {
      todoElement.classList.toggle("complete");
      if (todoElement.classList.contains("complete")) {
        todoList[i].status = true;
      } else {
        todoList[i].status = false;
      }
    } else {
      return;
    }
  }
};

//removeButton event handler
const removeEventHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  const todoElement = e.target.parentElement;

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === Number(todoElement.id)) {
      todoList.splice(i, 1);
      todoUl.removeChild(todoElement);
      console.log(todoList);
    } else {
      return;
    }
  }
};
