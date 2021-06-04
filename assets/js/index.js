// what do we need?

// grab html elements here

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo); // Event listener
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// add todo function needed

function addTodo(event) {
    event.preventDefault(); // Prevents my form from submitting

    const todoDiv = document.createElement("div"); // Creates the ToDo div tag and adds class
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li"); // Creates the list item and adds class 
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    saveLocalTodos(todoInput.value)

    const completedButton = document.createElement("button"); // Adds check button
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv); // Append to list

    todoInput.value = ""; // clears to do input box
}

// delete todo function needed

// filter todo??

// get todos?

// access + munipulate local storage?

