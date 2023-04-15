import getArray from './get-array';
import createTask from './create-task';
import store from './store';
import loadPage from './load-page';
import clearContent from './clear-content';
import { parse } from 'date-fns';

function selectTask() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}

	const date = new Date(due.value);
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options);

	const task = newTask(
		type.value,
		project.value,
		title.value,
		formattedDate,
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

due.addEventListener('change', (event) => {
	const enteredDate = event.target.value;
	const parsedDate = parse(enteredDate, 'yyyy-MM-dd', new Date());
});

const project = document.querySelector('#select-project');

const newTask = (type, project, title, due, notes) => {
	return { type, project, title, due, notes };
};

export default selectTask;
