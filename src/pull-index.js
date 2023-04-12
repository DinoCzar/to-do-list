const { ta } = require('date-fns/locale');
const { get } = require('lodash');

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

function loadWebsite() {
    const getArray = JSON.parse(localStorage.getItem('myArray'));
    getArray.forEach(item => 
        displayNewTask(item));
}

loadWebsite();