//Selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');

//Event Listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


//Functions
function addTodo(event) {
    event.preventDefault();
    //To do Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //To Do Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear input 
    todoInput.value = ""
}

//Delete & Complete
function deleteCheck(e) {
    const item = e.target;
    //Delete Task
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //Complete Task
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}
