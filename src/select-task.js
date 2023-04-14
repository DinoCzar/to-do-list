import getArray from './get-array';
import createTask from './create-task';
import store from './store';

function selectTask() {
	let myArray = getArray();
	if (!myArray) {
		myArray = [];
	}
	const task = newTask(title.value, due.value, notes.value);
	myArray.push(task);
	const index = myArray.findIndex((obj) => obj === task);
	createTask(task, index);
	store(myArray);
}

const newTask = (title, due, notes) => {
	return { title, due, notes };
};

export default selectTask;
