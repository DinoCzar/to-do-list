import getArray from './get-array';
import createTask from './create-task';
import store from './store';

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
		const element = 'none';
		myArray.push(task);
		const index = myArray.findIndex((obj) => obj === task);
		createTask(task, index, element);
		store(myArray);
	} else {
		myArray.forEach((element) => {
			if (element.title === task.project) {
				element.tasks.push(task);
				const index = element.tasks.findIndex((obj) => obj === task);
				createTask(task, index, element);
				store(myArray);
			}
		});
	}
}

const type = document.querySelector('#type');
const project = document.querySelector('#select-project');

const newTask = (type, project, title, due, notes) => {
	return { type, project, title, due, notes };
};

export default selectTask;
