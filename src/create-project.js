import createTask from './create-task';
import getArray from './get-array';
import store from './store';
import updateSelections from './update-selections';

function createProject() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}
	const project = newProject(
		type.value,
		title.value,
		due.value,
		notes.value,
		tasks
	);
	myArray.push(project);
	const index = myArray.findIndex((obj) => obj === project);
	createTask(project, index);
	store(myArray);
	updateSelections(title.value);
}

const type = document.querySelector('#type');

const tasks = [];

const newProject = (type, title, due, notes, tasks) => {
	return { type, title, due, notes, tasks };
};

export default createProject;
