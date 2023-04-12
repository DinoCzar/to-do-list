function createTask(task) {
	const content = document.querySelector('#content');

	const taskDiv = document.createElement('div');
	taskDiv.classList.add('task-div');
	content.appendChild(taskDiv);

	const title = document.createElement('div');
	title.classList.add('task-title');
	title.textContent = task.title;
	taskDiv.appendChild(title);

	const due = document.createElement('div');
	due.classList.add('task-due');
	due.textContent = task.due;
	taskDiv.appendChild(due);

	const notes = document.createElement('div');
	notes.classList.add('task-notes');
	notes.textContent = task.notes;
	taskDiv.appendChild(notes);
}

export default createTask;
