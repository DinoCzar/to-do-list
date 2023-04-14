import selectTask from './select-task';

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

const modal = document.querySelector('#modal');

function chooseType() {
	if (selectType.value === 'task') {
		selectTask();
		hideModal();
		clearForms();
	} else {
		console.log('project');
		hideModal();
		clearForms();
	}
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
	selectType.selectedIndex = 0;
	title.value = null;
	due.value = null;
	notes.value = null;
}

export default loadModal;
