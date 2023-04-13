import createTask from './create-task';
import store from './store';

function loadPage(myArray) {
	myArray.forEach((task, index) => {
		createTask(task, index);
	});
	store(myArray);
}

export default loadPage;
