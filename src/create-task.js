import deleteTask from './delete-task';
import editTask from './edit-task';
import editProjectTask from './edit-project-task';
import deleteProjectTask from './delete-project-task';

function createTask(task, index) {
	task.id = index;
	const taskId = task.id;

	const content = document.querySelector('#content');

	const taskDiv = document.createElement('div');
	taskDiv.classList.add('task-div');
	taskDiv.setAttribute('id', task.id);
	content.appendChild(taskDiv);

    const typeDiv = document.createElement('div');
	typeDiv.classList.add('task-type-div');
	taskDiv.appendChild(typeDiv);

	const type = document.createElement('div');
	type.classList.add('task-type');
	type.textContent = task.type;
	typeDiv.appendChild(type);

	




	const checkboxDiv = document.createElement('div');
	checkboxDiv.classList.add('checkbox-div');
	typeDiv.appendChild(checkboxDiv);

    const label = document.createElement('label');
    label.classList.add('label');
	label.textContent = 'Complete: ';

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = 'task-checkbox';
	checkbox.name = 'task-checkbox';

    checkboxDiv.appendChild(label);
	checkboxDiv.appendChild(checkbox);
	

	const taskCheckbox = document.getElementById('task-checkbox');

	taskCheckbox.addEventListener('change', function () {
		if (checkbox.checked) {
			task.complete = 'complete ';
		} else {
			task.complete = 'incomplete';
		}
	});




    const title = document.createElement('div');
	title.classList.add('task-title');
	title.textContent = task.title;
	taskDiv.appendChild(title);

	const due = document.createElement('div');
	due.classList.add('task-due');
	due.textContent = 'Due: ' + task.due;
	taskDiv.appendChild(due);

	const expandTask = document.createElement('div');
	expandTask.classList.add('expand-task');
	taskDiv.appendChild(expandTask);

	const notes = document.createElement('div');
	notes.classList.add('task-notes');
	notes.textContent = 'Notes: ' + task.notes;
	expandTask.appendChild(notes);

	const editButton = document.createElement('button');
	editButton.classList.add('edit-button');
	editButton.textContent = 'Edit';
	expandTask.appendChild(editButton);
	editButton.addEventListener('click', (e) => {
		editTask(task, taskId);
	});

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	deleteButton.textContent = 'Delete';
	expandTask.appendChild(deleteButton);
	deleteButton.addEventListener('click', (e) => {
		deleteTask(taskId);
	});

	const addTasksDiv = document.createElement('div');
	addTasksDiv.classList.add('add-tasks-div');
	expandTask.appendChild(addTasksDiv);

	const expandDiv = document.createElement('div');
	expandDiv.classList.add('expand-div');
	taskDiv.appendChild(expandDiv);

	const expandButton = document.createElement('button');
	expandButton.classList.add('expand-button');
	expandButton.textContent = '. . .';
	expandDiv.appendChild(expandButton);
	expandButton.addEventListener('click', (e) => {
		if (expandTask.style.display === 'grid') {
			expandTask.style.display = 'none';
		} else if ((expandTask.style.display = 'none')) {
			expandTask.style.display = 'grid';
		}
	});

	let taskArray = task.tasks;

	if (taskArray !== undefined) {
		taskArray.forEach((item) => {
			const itemId = taskArray.indexOf(item);

			const projectTaskDiv = document.createElement('div');
			projectTaskDiv.classList.add('project-task-div');
			projectTaskDiv.setAttribute('id', item.id);
			addTasksDiv.appendChild(projectTaskDiv);

			const taskType = document.createElement('div');
			taskType.classList.add('project-task-type');
			taskType.textContent = item.type;
			projectTaskDiv.appendChild(taskType);

			const taskTitle = document.createElement('div');
			taskTitle.classList.add('project-task-title');
			taskTitle.textContent = item.title;
			projectTaskDiv.appendChild(taskTitle);

			const taskDue = document.createElement('div');
			taskDue.classList.add('project-task-due');
			taskDue.textContent = 'Due: ' + item.due;
			projectTaskDiv.appendChild(taskDue);

			const taskNotes = document.createElement('div');
			taskNotes.classList.add('project-task-notes');
			taskNotes.textContent = 'Notes: ' + item.notes;
			projectTaskDiv.appendChild(taskNotes);

			const editTaskButton = document.createElement('button');
			editTaskButton.classList.add('task-edit-button');
			editTaskButton.textContent = 'Edit';
			projectTaskDiv.appendChild(editTaskButton);
			editTaskButton.addEventListener('click', (e) => {
				editProjectTask(item, taskId, itemId);
			});

			const deleteTaskButton = document.createElement('button');
			deleteTaskButton.classList.add('task-delete-button');
			deleteTaskButton.textContent = 'Delete';
			projectTaskDiv.appendChild(deleteTaskButton);
			deleteTaskButton.addEventListener('click', (e) => {
				deleteProjectTask(taskId, itemId);
			});
		});
	}
}

export default createTask;
