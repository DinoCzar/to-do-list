function updateSelections(project) {
addProject.value = project;
addProject.text = project;
selectProject.add(addProject)
}

const selectProject = document.querySelector('#select-project');
const addProject = document.createElement('option')

export default updateSelections;
