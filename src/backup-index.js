const { ta } = require('date-fns/locale');
const { get } = require('lodash');

headerButton = document.querySelector('#header-button');
headerButton.addEventListener('click', (e) => {
	addNew();
});

/* will import from modal.js */

function addNew() {
	const modal = document.querySelector('#modal');
	displayModal();
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
	const task = newTask(title.value, due.value, notes.value);
	storeTask(task);
	displayNewTask(task);
	hideModal();
	clearForms();
});

const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', (e) => {
	clearForms();
	hideModal();
});

const newTask = (title, due, notes) => {
	return { title, due, notes };
};

function storeTask(task) {
    let myArray = JSON.parse(localStorage.getItem('myArray'));
	if (!myArray) {
		myArray = [];
	}
    myArray.push(task);
	localStorage.setItem('myArray', JSON.stringify(myArray));
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

function displayModal() {
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideModal() {
	modal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearForms() {
	title.value = '';
	due.value = '';
	notes.value = '';
}

function loadWebsite() {
    const getArray = JSON.parse(localStorage.getItem('myArray'));
    getArray.forEach(item => 
        displayNewTask(item));
}

loadWebsite();