import getArray from './get-array';
import createTask from './create-task';
import store from './store';

function loadModal() {
	displayModal();

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearForms();
		hideModal();
	});
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}
	const task = newTask(title.value, due.value, notes.value);
	myArray.push(task);
    const index = myArray.findIndex((obj) => obj === task)
	createTask(task, index);
	store(myArray);
	hideModal();
	clearForms();
});

const newTask = (title, due, notes) => {
	return { title, due, notes };
};

const modal = document.querySelector('#modal');

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
