import loadModal from './load-modal';
import deleteTask from './delete-task';

function editTask(task, taskId) {
	const editTitle = document.getElementById('title');
	const editDue = document.getElementById('due');
	const editNotes = document.getElementById('notes');
	editTitle.value = task.title;
	editDue.value = task.due;
	editNotes.value = task.notes;
	loadModal();
	deleteTask(taskId);
}

export default editTask;
