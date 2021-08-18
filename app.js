// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);

// functions
function addTodo(event){
event.preventDefault();



// todo Div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
//creste li
const newTodo = document.createElement('li');
newTodo.innerHTML = todoInput.value;
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
//clear the todo value
todoInput.value = '';
}
function deleteCheck(e){
const item = e.target;
//delete todo
if(item.classList[0] === "trash-btn"){
    const todo= item.parentElement
    todo.classList.add("fall");
    todo.addEventListener("animationend", function(){
        todo.remove();
    });
    }

if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}
