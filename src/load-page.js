import createTask from './create-task';
import store from './store';
import updateSelections from './update-selections';

function loadPage(myArray) {
	const selections = document.querySelectorAll('.project-option');
	selections.forEach(function (element) {
		element.remove();
	});

	myArray.sort(function (a, b) {
		return Date.parse(a.due) - Date.parse(b.due);
	});

	myArray.forEach((task, index) => {
		const taskArray = task.tasks;
		taskArray.sort(function (a, b) {
			return Date.parse(a.due) - Date.parse(b.due);
		});

		createTask(task, index);
		if (task.type === 'Project') {
			updateSelections(task.title);
		}
	});
	store(myArray);
}

export default loadPage;
