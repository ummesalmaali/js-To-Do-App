// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(event){
event.preventDefault();



// todo Div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
//creste li
const newTodo = document.createElement('li');
newTodo.innerHTML = 'hey'
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//completed button//
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//delete button//
const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
deleteButton.classList.add("trash-btn");
todoDiv.appendChild(deleteButton);


//append-child
todoList.appendChild(todoDiv);
}
