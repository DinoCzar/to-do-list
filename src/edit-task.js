import clearContent from './clear-content';
import getArray from './get-array';
import loadPage from './load-page';
import store from './store';

function editTask(task, taskId) {
	displayEditValues(task);
	displayEditModal();

	const cancelEditButton = document.querySelector('#cancel-edit-button');
	cancelEditButton.addEventListener('click', (e) => {
		clearEditForms();
		hideEditModal();
	});

    createEditButton(taskId);
}

function createEditButton(taskId) {
	const createEditButton = document.querySelector('#create-edit-button');
	createEditButton.addEventListener('click', (e) => {
		let myArray = getArray();
		myArray[taskId].title = editTitle.value;
		myArray[taskId].due = editDue.value;
		myArray[taskId].notes = editNotes.value;
		store(myArray);
		clearEditForms();
		hideEditModal();
		clearContent();
		loadPage(myArray);
	});
}

const editModal = document.querySelector('#edit-modal');

const editTitle = document.querySelector('#edit-title');
const editDue = document.querySelector('#edit-due');
const editNotes = document.querySelector('#edit-notes');

function displayEditValues(task) {
	editTitle.value = task.title;
	editDue.value = task.due;
	editNotes.value = task.notes;
}

function displayEditModal() {
	editModal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideEditModal() {
	editModal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearEditForms() {
	editTitle.value = null;
	editDue.value = null;
	editNotes.value = null;
}

export default editTask;
