import createTask from './create-task';
import store from './store';
import updateSelections from './update-selections';

function loadPage(myArray) {
	const selections = document.querySelectorAll('.project-option');
	selections.forEach(function (element) {
		element.remove();
	});

	myArray.forEach((task, index) => {
		createTask(task, index);
		if (task.type === 'project') {
			updateSelections(task.title);
		}
	});
	store(myArray);
}

export default loadPage;
