import loadPage from './load-page';
import getArray from './get-array';

function deleteTask(id) {
	const myArray = getArray();
	myArray.splice(id, 1);

	const clearContent = document.querySelectorAll('.task-div');
	clearContent.forEach(function (element) {
		element.remove();
	});

	loadPage(myArray);
}

export default deleteTask;