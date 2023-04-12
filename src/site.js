import createProject from './project';
import createTask from './task';
import loadModal from './modal';

function loadSite() {
	if (localStorage.getItem('myArray') !== null) {
		const getArray = JSON.parse(localStorage.getItem('myArray'));
		getArray.forEach((item) => createTask(item));
	}
	loadUi();
}

function loadUi() {
	const headerButton = document.querySelector('#header-button');
	headerButton.addEventListener('click', (e) => {
		loadModal();
	});
}

export default loadSite;
