import createTask from './task';
import createProject from './project';
import store from './storage';

function loadModal() {
	const modal = document.querySelector('#modal');
	displayModal();

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearForms();
		hideModal();
	});
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
	const task = newTask(title.value, due.value, notes.value);
	store(task);
	createTask(task);
	hideModal();
	clearForms();
});

const newTask = (title, due, notes) => {
	return { title, due, notes };
};

function displayModal() {
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideModal() {
	modal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearForms() {
	title.value = null;
	due.value = null;
	notes.value = null;
}

export default loadModal;
