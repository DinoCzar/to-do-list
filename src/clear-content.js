function clearContent() {
	const domElements = document.querySelectorAll('.task-div');
	domElements.forEach(function (element) {
		element.remove();
	});
}

export default clearContent;
