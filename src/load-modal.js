import selectTask from './select-task';
import createProject from './create-project';

function loadModal() {
	displayModal();

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearForms();
		hideModal();
		hideSelectProject();
	});
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
	if (selectType.value === 'default') {
		alert('Please Select Type');
	} else if(title.value === '') {
        alert('Please Enter a Title')
    } else if (title.value.length > 30) {
        alert('Title exceeds maximum character limit of 30 characters');
    } else {
		chooseType();
	}
});

const selectType = document.querySelector('#type');
const selectProject = document.querySelector('#select-project');

selectType.addEventListener('change', function () {
	if (selectType.value === 'task' || selectType.value === 'Task') {
		displaySelectProject();
	}
	if (selectType.value === 'project' || selectType.value === 'Project') {
		hideSelectProject();
	}
});

function chooseType() {
	if (selectType.value === 'task') {
		selectTask();
		hideModal();
		hideSelectProject();
		clearForms();
	} else {
		createProject();
		hideModal();
		hideSelectProject();
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

function displaySelectProject() {
	selectProject.style.display = 'block';
}

function hideSelectProject() {
	selectProject.style.display = 'none';
}

function clearForms() {
	selectType.selectedIndex = 0;
	selectProject.selectedIndex = 0;
	title.value = null;
	due.value = null;
	notes.value = null;
}

export default loadModal;
