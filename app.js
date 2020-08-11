//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
//Functions
function addTodo(event) {
	//Prevent form from submitting
	event.preventDefault();
	//Todo Div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	//Create LI
	const newTodo = document.createElement('li');
	newTodo.innerText = 'hey';
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//Checkmark Button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
}
