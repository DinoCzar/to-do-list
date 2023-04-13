import loadUi from './load-ui';
import loadPage from './load-page';
import getArray from './get-array';

function loadSite() {
	const myArray = getArray();
	if (myArray !== undefined) {
		loadPage(myArray);
	}
	loadUi();
}

export default loadSite;
