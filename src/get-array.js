function getArray() {
	const myArray = JSON.parse(localStorage.getItem('myArray'));
	if (myArray !== null) {
		return myArray
	}
}



export default getArray;

/* other code 

if ((localStorage.getItem('myArray') !== null)) {
	return JSON.parse(localStorage.getItem('myArray'));
}

*/
