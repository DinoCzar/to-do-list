function store(myArray) {
	localStorage.setItem('myArray', JSON.stringify(myArray));
}

export default store;
