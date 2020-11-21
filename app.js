// Selectors
const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 



// Events Listeners
todoButton.addEventListener('click',addTodo); 
todoList.addEventListener('click',deleteCheck); 


// Functions 

function addTodo(e) {
// this function stop refreshing my page unnecessarily
    e.preventDefault(); 

// We need to create a Div who will generate the following :              
/*<div class="todo">
    <li></li>
    <button>Delete</button>
    <button>Checked</button>
</div>*/

// Create Todo Div
const todoDiv = document.createElement("div");
// Add a class 'todo' to div   
todoDiv.classList.add("todo"); 
// Create li tag 
const newTodo = document.createElement("li");  
newTodo.innerText = todoInput.value; 
// add a class to li "todo-item"
newTodo.classList.add = ('todo-item'); 
//
todoDiv.appendChild(newTodo); 

// CHECK MARK BUTTON

// Create CheckMark button
const completeButton = document. createElement('button'); 
// Add a class to CheckMark button
completeButton.classList.add("complete-btn"); 
// Add <i> tag to CheckMark button
completeButton.innerHTML = '<i class="fas fa-check"></i>'; 
//
todoDiv.appendChild(completeButton); 


// CHECK TRASH BUTTON

const trashButton = document. createElement('button'); 
// Add a class to Trash button
trashButton.classList.add("trash-btn"); 
// Add <i> tag to Trash button
trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
//
todoDiv.appendChild(trashButton); 



// THIS IS HOW WE ACTUALLY GENERATE A NEW TODO LIST
// APPEND TO UL => TODO-LIST
todoList.appendChild(todoDiv); 
// Clear todo Input value
todoInput.value = ""; 

}   


function deleteCheck(e) {   // console.log(e.target) to see on what are you clicking
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement; 
        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionned', function () {
            todo.remove();
        })
    }
    // CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement; 
        todo.classList.toggle("completed");
    }
}