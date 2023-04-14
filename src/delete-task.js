import loadPage from './load-page';
import getArray from './get-array';
import clearContent from './clear-content';

function deleteTask(id) {
	const myArray = getArray();
	myArray.splice(id, 1);
	clearContent();
	loadPage(myArray);
}

export default deleteTask;
