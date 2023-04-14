import selectTask from './select-task';
import createProject from './create-project';

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
	if (selectType.value === 'default') {
		alert('Please Select Type');
	} else {
		chooseType();
	}
});

const selectType = document.querySelector('#type');

function chooseType() {
	if (selectType.value === 'task') {
		selectTask();
		hideModal();
		clearForms();
	} else {
		createProject();
		hideModal();
		clearForms();
	}
}

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
	selectType.selectedIndex = 0;
	title.value = null;
	due.value = null;
	notes.value = null;
}

export default loadModal;
