import getArray from './get-array';
import createTask from './create-task';
import store from './store';
import loadPage from './load-page';
import clearContent from './clear-content';

function selectTask() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}

	const task = newTask(
		type.value,
		project.value,
		title.value,
		due.value,
		notes.value
	);

	if (task.project === 'default' || task.project === 'none') {
		myArray.push(task);
		const index = myArray.findIndex((obj) => obj === task);
		createTask(task, index);
		store(myArray);
	} else {
		myArray.forEach((element) => {
			if (element.title === task.project) {
				element.tasks.push(task);
				store(myArray);
				clearContent();
				loadPage(myArray);
			}
		});
	}
}

const type = document.querySelector('#type');
const due = document.querySelector('#due');
const project = document.querySelector('#select-project');

const newTask = (type, project, title, due, notes) => {
	return { type, project, title, due, notes };
};

export default selectTask;
