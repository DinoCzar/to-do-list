function createTask(task, index) {
	task.id = index;

	const content = document.querySelector('#content');

	const taskDiv = document.createElement('div');
	taskDiv.classList.add('task-div');
	taskDiv.setAttribute('id', task.id);
	content.appendChild(taskDiv);

	const title = document.createElement('div');
	title.classList.add('task-title');
	title.textContent = task.title;
	taskDiv.appendChild(title);

	const due = document.createElement('div');
	due.classList.add('task-due');
	due.textContent = 'Due: ' + task.due;
	taskDiv.appendChild(due);

	const notes = document.createElement('div');
	notes.classList.add('task-notes');
	notes.textContent = 'Notes: ' + task.notes;
	taskDiv.appendChild(notes);

	const editTask = document.createElement('button');
	editTask.classList.add('edit-task');
	editTask.textContent = 'edit';
	taskDiv.appendChild(editTask);
	editTask.addEventListener('click', (e) => {
		console.log('edit');
	});

	const viewNotes = document.createElement('button');
	viewNotes.classList.add('view-notes');
	viewNotes.textContent = '...';
	taskDiv.appendChild(viewNotes);
	viewNotes.addEventListener('click', (e) => {
		notes.style.display = 'block';
	});
}

export default createTask;
