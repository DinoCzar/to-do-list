import loadPage from './load-page';
import getArray from './get-array';
import clearContent from './clear-content';

function deleteProjectTask(projectId, taskId) {
	const myArray = getArray();
	myArray[projectId].tasks.splice(taskId, 1);
	clearContent();
	loadPage(myArray);
}

export default deleteProjectTask;