import loadUi from './load-ui';
import loadPage from './load-page';
import getArray from './get-array';

function loadSite() {
	const myArray = getArray();
	if (myArray !== undefined) {
        myArray.sort(function(a, b) {
            return Date.parse(a.due) - Date.parse(b.due);
          });
		loadPage(myArray);
	}
	loadUi();
}

export default loadSite;
