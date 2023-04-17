import createTask from './create-task';
import getArray from './get-array';
import loadPage from './load-page';
import store from './store';
import updateSelections from './update-selections';

function createProject() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}

	const project = newProject(
		capitalizeFirstLetter(type.value),
		title.value,
		due.value,
		notes.value,
		tasks
	);
	myArray.push(project);
	const index = myArray.findIndex((obj) => obj === project);
	store(myArray);
	updateSelections(title.value);
    loadPage(myArray)
}

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const type = document.querySelector('#type');
const due = document.querySelector('#due');
const tasks = [];

const newProject = (type, title, due, notes, tasks) => {
	return { type, title, due, notes, tasks };
};

export default createProject;
