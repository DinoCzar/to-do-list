function updateSelections(project) {
	const selectProject = document.querySelector('#select-project');
	const addProject = document.createElement('option');

	addProject.value = project;
	addProject.text = project;
	selectProject.add(addProject);
}

export default updateSelections;
