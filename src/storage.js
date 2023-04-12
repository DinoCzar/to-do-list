function store(task) {
	let myArray = JSON.parse(localStorage.getItem('myArray'));
	if (!myArray) {
		myArray = [];
	}
	myArray.push(task);
	localStorage.setItem('myArray', JSON.stringify(myArray));
}

export default store;
