import createTask from './create-task';
import getArray from './get-array';
import store from './store';

function createProject() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}
	const project = newProject(title.value, due.value, notes.value);
	myArray.push(project);
	const index = myArray.findIndex((obj) => obj === project);
	createTask(project, index);
	store(myArray);
}

const newProject = (title, due, notes) => {
	return { title, due, notes };
};

export default createProject;
