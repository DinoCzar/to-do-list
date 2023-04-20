import deleteTask from './delete-task';
import editTask from './edit-task';
import editProjectTask from './edit-project-task';
import deleteProjectTask from './delete-project-task';
import getArray from './get-array';
import store from './store';
import clearContent from './clear-content';
import loadPage from './load-page';

function createTask(task, index) {
	task.id = index;
	const taskId = task.id;

	const content = document.querySelector('#content');

	const taskDiv = document.createElement('div');
	taskDiv.classList.add('task-div');
	taskDiv.setAttribute('id', task.id);
	content.appendChild(taskDiv);

	const taskTypeDiv = document.createElement('div');
	taskTypeDiv.classList.add('task-type-div');
	taskDiv.appendChild(taskTypeDiv);

	const taskType = document.createElement('div');
	taskType.classList.add('task-type');
	taskType.textContent = task.type;
	taskTypeDiv.appendChild(taskType);

	const checkboxDiv = document.createElement('div');
	checkboxDiv.classList.add('checkbox-div');
	taskTypeDiv.appendChild(checkboxDiv);

	const label = document.createElement('label');
	label.classList.add('label');
	label.textContent = 'Complete: ';
	checkboxDiv.appendChild(label);

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.name = 'checkbox';
    checkbox.classList.add('checkbox');
	checkboxDiv.appendChild(checkbox);
	if (task.complete === 'complete') {
		checkbox.checked = true;
	} else {
		checkbox.checked = false;
	}
	checkbox.addEventListener('change', function () {
		const myArray = getArray();
		if (checkbox.checked) {
			myArray[index].complete = 'complete';
		} else {
			myArray[index].complete = 'incomplete';
		}
		store(myArray);
		clearContent();
		loadPage(myArray);
	});

	const taskTitle = document.createElement('div');
	taskTitle.classList.add('task-title');
	taskTitle.textContent = task.title;
	taskDiv.appendChild(taskTitle);

	const taskDue = document.createElement('div');
	taskDue.classList.add('task-due');
	taskDue.textContent = 'Due: ' + task.due;
	taskDiv.appendChild(taskDue);

	const expandTask = document.createElement('div');
	expandTask.classList.add('expand-task');
	taskDiv.appendChild(expandTask);

	const taskNotes = document.createElement('div');
	taskNotes.classList.add('task-notes');
	taskNotes.textContent = 'Notes: ' + task.notes;
	expandTask.appendChild(taskNotes);

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

			const projectTaskTypeDiv = document.createElement('div');
			projectTaskTypeDiv.classList.add('project-task-type-div');
			projectTaskDiv.appendChild(projectTaskTypeDiv);

			const projectTaskType = document.createElement('div');
			projectTaskType.classList.add('project-task-type');
			projectTaskType.textContent = item.type;
			projectTaskTypeDiv.appendChild(projectTaskType);

			const taskCheckboxDiv = document.createElement('div');
			taskCheckboxDiv.classList.add('task-checkbox-div');
			projectTaskTypeDiv.appendChild(taskCheckboxDiv);

			const taskLabel = document.createElement('label');
			taskLabel.classList.add('label');
			taskLabel.textContent = 'Complete: ';
			taskCheckboxDiv.appendChild(taskLabel);

			const taskCheckbox = document.createElement('input');
			taskCheckbox.type = 'checkbox';
			taskCheckbox.name = 'task-checkbox';
            taskCheckbox.classList.add('task-checkbox');
			taskCheckboxDiv.appendChild(taskCheckbox);
			if (item.complete === 'complete') {
				taskCheckbox.checked = true;
			} else {
				taskCheckbox.checked = false;
			}
			taskCheckbox.addEventListener('change', function () {
				let thisArray = getArray();
				if (taskCheckbox.checked) {
					thisArray[index].tasks[itemId].complete = 'complete';
				} else {
					thisArray[index].tasks[itemId].complete = 'incomplete';
				}
				store(thisArray);
				clearContent();
				loadPage(thisArray);
			});

			const projectTaskTitle = document.createElement('div');
			projectTaskTitle.classList.add('project-task-title');
			projectTaskTitle.textContent = item.title;
			projectTaskDiv.appendChild(projectTaskTitle);

			const projectTaskDue = document.createElement('div');
			projectTaskDue.classList.add('project-task-due');
			projectTaskDue.textContent = 'Due: ' + item.due;
			projectTaskDiv.appendChild(projectTaskDue);

			const projectTaskNotes = document.createElement('div');
			projectTaskNotes.classList.add('project-task-notes');
			projectTaskNotes.textContent = 'Notes: ' + item.notes;
			projectTaskDiv.appendChild(projectTaskNotes);

			const taskEditButton = document.createElement('button');
			taskEditButton.classList.add('task-edit-button');
			taskEditButton.textContent = 'Edit';
			projectTaskDiv.appendChild(taskEditButton);
			taskEditButton.addEventListener('click', (e) => {
				editProjectTask(item, taskId, itemId);
			});

			const taskDeleteButton = document.createElement('button');
			taskDeleteButton.classList.add('task-delete-button');
			taskDeleteButton.textContent = 'Delete';
			projectTaskDiv.appendChild(taskDeleteButton);
			taskDeleteButton.addEventListener('click', (e) => {
				deleteProjectTask(taskId, itemId);
			});
		});
	}
}

export default createTask;
