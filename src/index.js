/*

const input = document.querySelector('input'),
h2 = document.querySelector('h2')

input.addEventListener('keyup', display);

function display() {
    localStorage.setItem('value', input.value)
}

h2.innerHTML = localStorage.getItem('value')

*/

const { ta } = require('date-fns/locale');

headerButton = document.querySelector('#header-button');
headerButton.addEventListener('click', (e) => {
	addNew();
});

/* will import from modal.js */

function addNew() {
	const modal = document.querySelector('#modal');
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
	const task = newTask('dishes', 'today', 'clean the dishes');
	storeTask(task);
	displayNewTask(task);
	modal.style.display = 'none';
	overlay.style.display = 'none';
});

const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', (e) => {
	const task = newTask('dishes', 'today', 'clean the dishes');
	displayNewTask(task);
	modal.style.display = 'none';
	overlay.style.display = 'none';
});

const newTask = (title, due, notes) => {
	return { title, due, notes };
};

function storeTask(task) {
	localStorage.setItem('task', JSON.stringify(task));
}

function displayNewTask(task) {
	const content = document.querySelector('#content');

	const taskDiv = document.createElement('div');
	content.appendChild(taskDiv);

	const title = document.createElement('div');
	title.textContent = task.title;
	taskDiv.appendChild(title);

	const due = document.createElement('div');
	due.textContent = task.due;
	taskDiv.appendChild(due);

	const notes = document.createElement('div');
	notes.textContent = task.notes;
	taskDiv.appendChild(notes);
}
