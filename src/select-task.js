import getArray from './get-array';
import createTask from './create-task';
import store from './store';
import loadPage from './load-page';
import clearContent from './clear-content';
import { compact } from 'lodash';

function selectTask() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}

	const task = newTask(
		capitalizeFirstLetter(type.value),
		project.value,
		title.value,
		due.value,
		notes.value,
        complete
	);

	if (task.project === 'default' || task.project === 'none') {
		myArray.push(task);
		const index = myArray.findIndex((obj) => obj === task);
		createTask(task, index);
		myArray.sort(function (a, b) {
			return Date.parse(a.due) - Date.parse(b.due);
		});
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

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const type = document.querySelector('#type');
const due = document.querySelector('#due');
const project = document.querySelector('#select-project');
const complete = '';

const newTask = (type, project, title, due, notes, complete) => {
	return { type, project, title, due, notes, complete };
};

export default selectTask;
