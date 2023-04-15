import createTask from './create-task';
import getArray from './get-array';
import store from './store';
import updateSelections from './update-selections';
import { parse } from 'date-fns';

function createProject() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}

    const date = new Date(due.value);
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options);

	const project = newProject(
		type.value,
		title.value,
		formattedDate,
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
const due = document.querySelector('#due');

due.addEventListener('change', (event) => {
	const enteredDate = event.target.value;
	const parsedDate = parse(enteredDate, 'yyyy-MM-dd', new Date());
});

const tasks = [];

const newProject = (type, title, due, notes, tasks) => {
	return { type, title, due, notes, tasks };
};

export default createProject;
