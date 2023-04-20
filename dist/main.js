/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear-content.js":
/*!******************************!*\
  !*** ./src/clear-content.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearContent() {
	const domElements = document.querySelectorAll('.task-div');
	domElements.forEach(function (element) {
		element.remove();
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);


/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _update_selections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-selections */ "./src/update-selections.js");
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");






function createProject() {
	let myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_0__["default"])();
	if (!myArray) {
		myArray = [];
	}

	const project = newProject(
		capitalizeFirstLetter(type.value),
		title.value,
		due.value,
		notes.value,
		tasks
	);
	myArray.push(project);
	(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
	(0,_update_selections__WEBPACK_IMPORTED_MODULE_3__["default"])(title.value);
	(0,_clear_content__WEBPACK_IMPORTED_MODULE_4__["default"])();
	(0,_load_page__WEBPACK_IMPORTED_MODULE_1__["default"])(myArray);
}

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const type = document.querySelector('#type');
const due = document.querySelector('#due');
const tasks = [];

const newProject = (type, title, due, notes, tasks) => {
	return { type, title, due, notes, tasks };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-task */ "./src/delete-task.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");
/* harmony import */ var _edit_project_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-project-task */ "./src/edit-project-task.js");
/* harmony import */ var _delete_project_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-project-task */ "./src/delete-project-task.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");









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
	checkboxDiv.appendChild(label);

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = 'checkbox';
	checkbox.name = 'checkbox';
    checkbox.classList.add('checkbox');
	checkboxDiv.appendChild(checkbox);
	if (task.complete === 'complete') {
		checkbox.checked = true;
	} else {
		checkbox.checked = false;
	}
	checkbox.addEventListener('change', function () {
		const myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_4__["default"])();
		if (checkbox.checked) {
			myArray[index].complete = 'complete';
		} else {
			myArray[index].complete = 'incomplete';
		}
		(0,_store__WEBPACK_IMPORTED_MODULE_5__["default"])(myArray);
		(0,_clear_content__WEBPACK_IMPORTED_MODULE_6__["default"])();
		(0,_load_page__WEBPACK_IMPORTED_MODULE_7__["default"])(myArray);
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
		(0,_edit_task__WEBPACK_IMPORTED_MODULE_1__["default"])(task, taskId);
	});

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	deleteButton.textContent = 'Delete';
	expandTask.appendChild(deleteButton);
	deleteButton.addEventListener('click', (e) => {
		(0,_delete_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskId);
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

			const taskTypeDiv = document.createElement('div');
			taskTypeDiv.classList.add('task-type-div');
			projectTaskDiv.appendChild(taskTypeDiv);

			const taskType = document.createElement('div');
			taskType.classList.add('project-task-type');
			taskType.textContent = item.type;
			taskTypeDiv.appendChild(taskType);

			const taskCheckboxDiv = document.createElement('div');
			taskCheckboxDiv.classList.add('task-checkbox-div');
			taskTypeDiv.appendChild(taskCheckboxDiv);

			const taskLabel = document.createElement('label');
			taskLabel.classList.add('label');
			taskLabel.textContent = 'Complete: ';
			taskCheckboxDiv.appendChild(taskLabel);

			const taskCheckbox = document.createElement('input');
			taskCheckbox.type = 'checkbox';
			taskCheckbox.id = 'task-checkbox';
			taskCheckbox.name = 'task-checkbox';
            taskCheckbox.classList.add('task-checkbox');
			taskCheckboxDiv.appendChild(taskCheckbox);
			if (item.complete === 'complete') {
				taskCheckbox.checked = true;
			} else {
				taskCheckbox.checked = false;
			}
			taskCheckbox.addEventListener('change', function () {
				let thisArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_4__["default"])();
				if (taskCheckbox.checked) {
					thisArray[index].tasks[itemId].complete = 'complete';
				} else {
					thisArray[index].tasks[itemId].complete = 'incomplete';
				}
				(0,_store__WEBPACK_IMPORTED_MODULE_5__["default"])(thisArray);
				(0,_clear_content__WEBPACK_IMPORTED_MODULE_6__["default"])();
				(0,_load_page__WEBPACK_IMPORTED_MODULE_7__["default"])(thisArray);
			});

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
				(0,_edit_project_task__WEBPACK_IMPORTED_MODULE_2__["default"])(item, taskId, itemId);
			});

			const deleteTaskButton = document.createElement('button');
			deleteTaskButton.classList.add('task-delete-button');
			deleteTaskButton.textContent = 'Delete';
			projectTaskDiv.appendChild(deleteTaskButton);
			deleteTaskButton.addEventListener('click', (e) => {
				(0,_delete_project_task__WEBPACK_IMPORTED_MODULE_3__["default"])(taskId, itemId);
			});
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/delete-project-task.js":
/*!************************************!*\
  !*** ./src/delete-project-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");




function deleteProjectTask(projectId, taskId) {
	const myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_1__["default"])();
	myArray[projectId].tasks.splice(taskId, 1);
	(0,_clear_content__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_load_page__WEBPACK_IMPORTED_MODULE_0__["default"])(myArray);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteProjectTask);

/***/ }),

/***/ "./src/delete-task.js":
/*!****************************!*\
  !*** ./src/delete-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");




function deleteTask(id) {
	const myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_1__["default"])();
	myArray.splice(id, 1);
	(0,_clear_content__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_load_page__WEBPACK_IMPORTED_MODULE_0__["default"])(myArray);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);


/***/ }),

/***/ "./src/edit-project-task.js":
/*!**********************************!*\
  !*** ./src/edit-project-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");





function editProjectTask(item, taskId, itemId) {
	displayEditValues(item);
	displayEditModal();

	const cancelEditButton = document.querySelector('#cancel-task-button');
	cancelEditButton.addEventListener('click', (e) => {
		clearEditForms();
		hideEditModal();
	});

	let myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_1__["default"])();
	let taskArray = myArray[taskId].tasks[itemId];

	const createEditButton = document.querySelector('#edit-task-button');
	createEditButton.addEventListener('click', (e) => {
		if (editTaskTitle.value.length > 30) {
			alert('Title exceeds maximum character limit of 30 characters');
		} else {
			taskArray.title = editTaskTitle.value;
			taskArray.due = editTaskDue.value;
			taskArray.notes = editTaskNotes.value;
			(0,_clear_content__WEBPACK_IMPORTED_MODULE_0__["default"])();
			hideEditModal();
			(0,_store__WEBPACK_IMPORTED_MODULE_3__["default"])(myArray);
			(0,_load_page__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
		}
	});
}

const editTaskModal = document.querySelector('#edit-task-modal');

const editTaskTitle = document.querySelector('#edit-task-title');
const editTaskDue = document.querySelector('#edit-task-due');
const editTaskNotes = document.querySelector('#edit-task-notes');

function displayEditValues(item) {
	editTaskTitle.value = item.title;
	editTaskDue.value = item.due;
	editTaskNotes.value = item.notes;
}

function displayEditModal() {
	editTaskModal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideEditModal() {
	editTaskModal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearEditForms() {
	editTaskTitle.value = null;
	editTaskDue.value = null;
	editTaskNotes.value = null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editProjectTask);


/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");





function editTask(task, taskId) {
	displayEditValues(task);
	displayEditModal();

	const cancelEditButton = document.querySelector('#cancel-edit-button');
	cancelEditButton.addEventListener('click', (e) => {
		clearEditForms();
		hideEditModal();
	});

	let myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_1__["default"])();
	let taskArray = myArray[taskId].tasks;

	const createEditButton = document.querySelector('#create-edit-button');
	createEditButton.addEventListener('click', (e) => {
		if (taskArray !== undefined) {
			taskArray.forEach((element) => {
				element.project = editTitle.value;
			});
		}

		if (editTitle.value.length > 30) {
			alert('Title exceeds maximum character limit of 30 characters');
		} else {
			myArray[taskId].title = editTitle.value;
			myArray[taskId].due = editDue.value;
			myArray[taskId].notes = editNotes.value;
			(0,_clear_content__WEBPACK_IMPORTED_MODULE_0__["default"])();
			hideEditModal();
			(0,_store__WEBPACK_IMPORTED_MODULE_3__["default"])(myArray);
			(0,_load_page__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
		}
	});
}

const editModal = document.querySelector('#edit-modal');

const editTitle = document.querySelector('#edit-title');
const editDue = document.querySelector('#edit-due');
const editNotes = document.querySelector('#edit-notes');

function displayEditValues(task) {
	editTitle.value = task.title;
	editDue.value = task.due;
	editNotes.value = task.notes;
}

function displayEditModal() {
	editModal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideEditModal() {
	editModal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearEditForms() {
	editTitle.value = null;
	editDue.value = null;
	editNotes.value = null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);


/***/ }),

/***/ "./src/get-array.js":
/*!**************************!*\
  !*** ./src/get-array.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getArray() {
	const myArray = JSON.parse(localStorage.getItem('myArray'));
	if (myArray !== null) {
		return myArray;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getArray);


/***/ }),

/***/ "./src/load-modal.js":
/*!***************************!*\
  !*** ./src/load-modal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _select_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-task */ "./src/select-task.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");



function loadModal() {
	displayModal();

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearForms();
		hideModal();
		hideSelectProject();
	});
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
	if (selectType.value === 'default') {
		alert('Please Select Type');
	} else if(title.value === '') {
        alert('Please Enter a Title')
    } else if (title.value.length > 30) {
        alert('Title exceeds maximum character limit of 30 characters');
    } else {
		chooseType();
	}
});

const selectType = document.querySelector('#type');
const selectProject = document.querySelector('#select-project');

selectType.addEventListener('change', function () {
	if (selectType.value === 'task' || selectType.value === 'Task') {
		displaySelectProject();
	}
	if (selectType.value === 'project' || selectType.value === 'Project') {
		hideSelectProject();
	}
});

function chooseType() {
	if (selectType.value === 'task') {
		(0,_select_task__WEBPACK_IMPORTED_MODULE_0__["default"])();
		hideModal();
		hideSelectProject();
		clearForms();
	} else {
		(0,_create_project__WEBPACK_IMPORTED_MODULE_1__["default"])();
		hideModal();
		hideSelectProject();
		clearForms();
	}
}

const modal = document.querySelector('#modal');

function displayModal() {
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideModal() {
	modal.style.display = 'none';
	overlay.style.display = 'none';
}

function displaySelectProject() {
	selectProject.style.display = 'block';
}

function hideSelectProject() {
	selectProject.style.display = 'none';
}

function clearForms() {
	selectType.selectedIndex = 0;
	selectProject.selectedIndex = 0;
	title.value = null;
	due.value = null;
	notes.value = null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadModal);


/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _update_selections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-selections */ "./src/update-selections.js");




function loadPage(myArray) {
	const selections = document.querySelectorAll('.project-option');
	selections.forEach(function (element) {
		element.remove();
	});

	myArray.sort(function (a, b) {
		return Date.parse(a.due) - Date.parse(b.due);
	});

	myArray.forEach((task, index) => {
		const taskArray = task.tasks;
		if (taskArray !== undefined) {
			taskArray.sort(function (a, b) {
				return Date.parse(a.due) - Date.parse(b.due);
			});
		}

		(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task, index);
		if (task.type === 'Project') {
			(0,_update_selections__WEBPACK_IMPORTED_MODULE_2__["default"])(task.title);
		}
	});
	(0,_store__WEBPACK_IMPORTED_MODULE_1__["default"])(myArray);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ }),

/***/ "./src/load-site.js":
/*!**************************!*\
  !*** ./src/load-site.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-ui */ "./src/load-ui.js");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");




function loadSite() {
	const myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_2__["default"])();
	if (myArray !== undefined) {
        myArray.sort(function(a, b) {
            return Date.parse(a.due) - Date.parse(b.due);
          });
		(0,_load_page__WEBPACK_IMPORTED_MODULE_1__["default"])(myArray);
	}
	(0,_load_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSite);


/***/ }),

/***/ "./src/load-ui.js":
/*!************************!*\
  !*** ./src/load-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-modal */ "./src/load-modal.js");


function loadUi() {
	const headerButton = document.querySelector('#header-button');
	headerButton.addEventListener('click', (e) => {
		(0,_load_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadUi);


/***/ }),

/***/ "./src/select-task.js":
/*!****************************!*\
  !*** ./src/select-task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _clear_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear-content */ "./src/clear-content.js");






function selectTask() {
	let myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_0__["default"])();
	if (!myArray) {
		myArray = [];
	}

	const task = newTask(
		capitalizeFirstLetter(type.value),
		project.value,
		title.value,
		due.value,
		notes.value,
        complete
	);

	if (task.project === 'default' || task.project === 'none') {
		myArray.push(task);
		const index = myArray.findIndex((obj) => obj === task);
		(0,_create_task__WEBPACK_IMPORTED_MODULE_1__["default"])(task, index);
		myArray.sort(function (a, b) {
			return Date.parse(a.due) - Date.parse(b.due);
		});
		(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
	} else {
		myArray.forEach((element) => {
			if (element.title === task.project) {
				element.tasks.push(task);
				(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
				(0,_clear_content__WEBPACK_IMPORTED_MODULE_4__["default"])();
				(0,_load_page__WEBPACK_IMPORTED_MODULE_3__["default"])(myArray);
			}
		});
	}
}

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const type = document.querySelector('#type');
const due = document.querySelector('#due');
const project = document.querySelector('#select-project');
const complete = '';

const newTask = (type, project, title, due, notes, complete) => {
	return { type, project, title, due, notes, complete };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectTask);


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function store(myArray) {
	localStorage.setItem('myArray', JSON.stringify(myArray));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/update-selections.js":
/*!**********************************!*\
  !*** ./src/update-selections.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateSelections(project) {
	const selectProject = document.querySelector('#select-project');
	const addProject = document.createElement('option');
	addProject.className = 'project-option';
	addProject.text = project;
	selectProject.add(addProject);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateSelections);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-site */ "./src/load-site.js");


(0,_load_site__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVTtBQUNaO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxrREFBSztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFLO0FBQ1QsSUFBSSwwREFBWTtBQUNoQixJQUFJLHNEQUFRO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0RDFCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7OztVQ1JoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xlYXItY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGUtcHJvamVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldC1hcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLXNpdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLXVpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2VsZWN0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VwZGF0ZS1zZWxlY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcblx0Y29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kaXYnKTtcblx0ZG9tRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbnRlbnQ7XG4iLCJpbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB1cGRhdGVTZWxlY3Rpb25zIGZyb20gJy4vdXBkYXRlLXNlbGVjdGlvbnMnO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGlmICghbXlBcnJheSkge1xuXHRcdG15QXJyYXkgPSBbXTtcblx0fVxuXG5cdGNvbnN0IHByb2plY3QgPSBuZXdQcm9qZWN0KFxuXHRcdGNhcGl0YWxpemVGaXJzdExldHRlcih0eXBlLnZhbHVlKSxcblx0XHR0aXRsZS52YWx1ZSxcblx0XHRkdWUudmFsdWUsXG5cdFx0bm90ZXMudmFsdWUsXG5cdFx0dGFza3Ncblx0KTtcblx0bXlBcnJheS5wdXNoKHByb2plY3QpO1xuXHRzdG9yZShteUFycmF5KTtcblx0dXBkYXRlU2VsZWN0aW9ucyh0aXRsZS52YWx1ZSk7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRsb2FkUGFnZShteUFycmF5KTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuXHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcbmNvbnN0IHRhc2tzID0gW107XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAodHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzKSA9PiB7XG5cdHJldHVybiB7IHR5cGUsIHRpdGxlLCBkdWUsIG5vdGVzLCB0YXNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlLXRhc2snO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gJy4vZWRpdC10YXNrJztcbmltcG9ydCBlZGl0UHJvamVjdFRhc2sgZnJvbSAnLi9lZGl0LXByb2plY3QtdGFzayc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdFRhc2sgZnJvbSAnLi9kZWxldGUtcHJvamVjdC10YXNrJztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIGluZGV4KSB7XG5cdHRhc2suaWQgPSBpbmRleDtcblx0Y29uc3QgdGFza0lkID0gdGFzay5pZDtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcblx0dGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzay5pZCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cblx0Y29uc3QgdHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0eXBlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdHlwZS1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0eXBlRGl2KTtcblxuXHRjb25zdCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHR5cGUuY2xhc3NMaXN0LmFkZCgndGFzay10eXBlJyk7XG5cdHR5cGUudGV4dENvbnRlbnQgPSB0YXNrLnR5cGU7XG5cdHR5cGVEaXYuYXBwZW5kQ2hpbGQodHlwZSk7XG5cblx0Y29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZGl2Jyk7XG5cdHR5cGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3hEaXYpO1xuXG5cdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0bGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcblx0bGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGU6ICc7XG5cdGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuXHRjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuXHRjaGVja2JveC5pZCA9ICdjaGVja2JveCc7XG5cdGNoZWNrYm94Lm5hbWUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5cdGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblx0aWYgKHRhc2suY29tcGxldGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG5cdH1cblx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRcdGlmIChjaGVja2JveC5jaGVja2VkKSB7XG5cdFx0XHRteUFycmF5W2luZGV4XS5jb21wbGV0ZSA9ICdjb21wbGV0ZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG15QXJyYXlbaW5kZXhdLmNvbXBsZXRlID0gJ2luY29tcGxldGUnO1xuXHRcdH1cblx0XHRzdG9yZShteUFycmF5KTtcblx0XHRjbGVhckNvbnRlbnQoKTtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fSk7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcblx0ZHVlLnRleHRDb250ZW50ID0gJ0R1ZTogJyArIHRhc2suZHVlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cblx0Y29uc3QgZXhwYW5kVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRleHBhbmRUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kVGFzayk7XG5cblx0Y29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bm90ZXMuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xuXHRub3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIHRhc2subm90ZXM7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG5cdGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuXHRlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXHRlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRlZGl0VGFzayh0YXNrLCB0YXNrSWQpO1xuXHR9KTtcblxuXHRjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcblx0ZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRkZWxldGVUYXNrKHRhc2tJZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGFkZFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGFkZFRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrcy1kaXYnKTtcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrc0Rpdik7XG5cblx0Y29uc3QgZXhwYW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGV4cGFuZERpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtZGl2Jyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kRGl2KTtcblxuXHRjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1idXR0b24nKTtcblx0ZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gJy4gLiAuJztcblx0ZXhwYW5kRGl2LmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cdGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0aWYgKGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9PT0gJ2dyaWQnKSB7XG5cdFx0XHRleHBhbmRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fSBlbHNlIGlmICgoZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSkge1xuXHRcdFx0ZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXHRcdH1cblx0fSk7XG5cblx0bGV0IHRhc2tBcnJheSA9IHRhc2sudGFza3M7XG5cblx0aWYgKHRhc2tBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGFza0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IGl0ZW1JZCA9IHRhc2tBcnJheS5pbmRleE9mKGl0ZW0pO1xuXG5cdFx0XHRjb25zdCBwcm9qZWN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWRpdicpO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0uaWQpO1xuXHRcdFx0YWRkVGFza3NEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tEaXYpO1xuXG5cdFx0XHRjb25zdCB0YXNrVHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza1R5cGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10eXBlLWRpdicpO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1R5cGVEaXYpO1xuXG5cdFx0XHRjb25zdCB0YXNrVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza1R5cGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLXR5cGUnKTtcblx0XHRcdHRhc2tUeXBlLnRleHRDb250ZW50ID0gaXRlbS50eXBlO1xuXHRcdFx0dGFza1R5cGVEaXYuYXBwZW5kQ2hpbGQodGFza1R5cGUpO1xuXG5cdFx0XHRjb25zdCB0YXNrQ2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tDaGVja2JveERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrYm94LWRpdicpO1xuXHRcdFx0dGFza1R5cGVEaXYuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94RGl2KTtcblxuXHRcdFx0Y29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdHRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuXHRcdFx0dGFza0xhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlOiAnO1xuXHRcdFx0dGFza0NoZWNrYm94RGl2LmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG5cblx0XHRcdGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHR0YXNrQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdFx0XHR0YXNrQ2hlY2tib3guaWQgPSAndGFzay1jaGVja2JveCc7XG5cdFx0XHR0YXNrQ2hlY2tib3gubmFtZSA9ICd0YXNrLWNoZWNrYm94JztcbiAgICAgICAgICAgIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrYm94Jyk7XG5cdFx0XHR0YXNrQ2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblx0XHRcdGlmIChpdGVtLmNvbXBsZXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0XHRcdHRhc2tDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhc2tDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0YXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsZXQgdGhpc0FycmF5ID0gZ2V0QXJyYXkoKTtcblx0XHRcdFx0aWYgKHRhc2tDaGVja2JveC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0dGhpc0FycmF5W2luZGV4XS50YXNrc1tpdGVtSWRdLmNvbXBsZXRlID0gJ2NvbXBsZXRlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzQXJyYXlbaW5kZXhdLnRhc2tzW2l0ZW1JZF0uY29tcGxldGUgPSAnaW5jb21wbGV0ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcmUodGhpc0FycmF5KTtcblx0XHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRcdGxvYWRQYWdlKHRoaXNBcnJheSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLXRpdGxlJyk7XG5cdFx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuXHRcdFx0Y29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza0R1ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stZHVlJyk7XG5cdFx0XHR0YXNrRHVlLnRleHRDb250ZW50ID0gJ0R1ZTogJyArIGl0ZW0uZHVlO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG5cblx0XHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza05vdGVzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1ub3RlcycpO1xuXHRcdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gJ05vdGVzOiAnICsgaXRlbS5ub3Rlcztcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XG5cblx0XHRcdGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtYnV0dG9uJyk7XG5cdFx0XHRlZGl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrQnV0dG9uKTtcblx0XHRcdGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZWRpdFByb2plY3RUYXNrKGl0ZW0sIHRhc2tJZCwgaXRlbUlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWJ1dHRvbicpO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cdFx0XHRkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZGVsZXRlUHJvamVjdFRhc2sodGFza0lkLCBpdGVtSWQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0VGFzayhwcm9qZWN0SWQsIHRhc2tJZCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bXlBcnJheVtwcm9qZWN0SWRdLnRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xuXHRjbGVhckNvbnRlbnQoKTtcblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVByb2plY3RUYXNrOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRteUFycmF5LnNwbGljZShpZCwgMSk7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRsb2FkUGFnZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzaztcbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5mdW5jdGlvbiBlZGl0UHJvamVjdFRhc2soaXRlbSwgdGFza0lkLCBpdGVtSWQpIHtcblx0ZGlzcGxheUVkaXRWYWx1ZXMoaXRlbSk7XG5cdGRpc3BsYXlFZGl0TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10YXNrLWJ1dHRvbicpO1xuXHRjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckVkaXRGb3JtcygpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0fSk7XG5cblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRsZXQgdGFza0FycmF5ID0gbXlBcnJheVt0YXNrSWRdLnRhc2tzW2l0ZW1JZF07XG5cblx0Y29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stYnV0dG9uJyk7XG5cdGNyZWF0ZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChlZGl0VGFza1RpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG5cdFx0XHRhbGVydCgnVGl0bGUgZXhjZWVkcyBtYXhpbXVtIGNoYXJhY3RlciBsaW1pdCBvZiAzMCBjaGFyYWN0ZXJzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhc2tBcnJheS50aXRsZSA9IGVkaXRUYXNrVGl0bGUudmFsdWU7XG5cdFx0XHR0YXNrQXJyYXkuZHVlID0gZWRpdFRhc2tEdWUudmFsdWU7XG5cdFx0XHR0YXNrQXJyYXkubm90ZXMgPSBlZGl0VGFza05vdGVzLnZhbHVlO1xuXHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRoaWRlRWRpdE1vZGFsKCk7XG5cdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRcdH1cblx0fSk7XG59XG5cbmNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLW1vZGFsJyk7XG5cbmNvbnN0IGVkaXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJyk7XG5jb25zdCBlZGl0VGFza0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZHVlJyk7XG5jb25zdCBlZGl0VGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1ub3RlcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFZhbHVlcyhpdGVtKSB7XG5cdGVkaXRUYXNrVGl0bGUudmFsdWUgPSBpdGVtLnRpdGxlO1xuXHRlZGl0VGFza0R1ZS52YWx1ZSA9IGl0ZW0uZHVlO1xuXHRlZGl0VGFza05vdGVzLnZhbHVlID0gaXRlbS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpIHtcblx0ZWRpdFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZUVkaXRNb2RhbCgpIHtcblx0ZWRpdFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWRpdEZvcm1zKCkge1xuXHRlZGl0VGFza1RpdGxlLnZhbHVlID0gbnVsbDtcblx0ZWRpdFRhc2tEdWUudmFsdWUgPSBudWxsO1xuXHRlZGl0VGFza05vdGVzLnZhbHVlID0gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdFByb2plY3RUYXNrO1xuIiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tJZCkge1xuXHRkaXNwbGF5RWRpdFZhbHVlcyh0YXNrKTtcblx0ZGlzcGxheUVkaXRNb2RhbCgpO1xuXG5cdGNvbnN0IGNhbmNlbEVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWVkaXQtYnV0dG9uJyk7XG5cdGNhbmNlbEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRWRpdEZvcm1zKCk7XG5cdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHR9KTtcblxuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGxldCB0YXNrQXJyYXkgPSBteUFycmF5W3Rhc2tJZF0udGFza3M7XG5cblx0Y29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZWRpdC1idXR0b24nKTtcblx0Y3JlYXRlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0aWYgKHRhc2tBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0YXNrQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnByb2plY3QgPSBlZGl0VGl0bGUudmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZWRpdFRpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG5cdFx0XHRhbGVydCgnVGl0bGUgZXhjZWVkcyBtYXhpbXVtIGNoYXJhY3RlciBsaW1pdCBvZiAzMCBjaGFyYWN0ZXJzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG15QXJyYXlbdGFza0lkXS50aXRsZSA9IGVkaXRUaXRsZS52YWx1ZTtcblx0XHRcdG15QXJyYXlbdGFza0lkXS5kdWUgPSBlZGl0RHVlLnZhbHVlO1xuXHRcdFx0bXlBcnJheVt0YXNrSWRdLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlO1xuXHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRoaWRlRWRpdE1vZGFsKCk7XG5cdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRcdH1cblx0fSk7XG59XG5cbmNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW1vZGFsJyk7XG5cbmNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XG5jb25zdCBlZGl0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlJyk7XG5jb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFZhbHVlcyh0YXNrKSB7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG5cdGVkaXREdWUudmFsdWUgPSB0YXNrLmR1ZTtcblx0ZWRpdE5vdGVzLnZhbHVlID0gdGFzay5ub3Rlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpIHtcblx0ZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlRWRpdE1vZGFsKCkge1xuXHRlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRGb3JtcygpIHtcblx0ZWRpdFRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZWRpdER1ZS52YWx1ZSA9IG51bGw7XG5cdGVkaXROb3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUYXNrO1xuIiwiZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUFycmF5JykpO1xuXHRpZiAobXlBcnJheSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBteUFycmF5O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFycmF5O1xuIiwiaW1wb3J0IHNlbGVjdFRhc2sgZnJvbSAnLi9zZWxlY3QtdGFzayc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2NyZWF0ZS1wcm9qZWN0JztcblxuZnVuY3Rpb24gbG9hZE1vZGFsKCkge1xuXHRkaXNwbGF5TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWJ1dHRvbicpO1xuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHR9KTtcbn1cblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAnZGVmYXVsdCcpIHtcblx0XHRhbGVydCgnUGxlYXNlIFNlbGVjdCBUeXBlJyk7XG5cdH0gZWxzZSBpZih0aXRsZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBFbnRlciBhIFRpdGxlJylcbiAgICB9IGVsc2UgaWYgKHRpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgIGFsZXJ0KCdUaXRsZSBleGNlZWRzIG1heGltdW0gY2hhcmFjdGVyIGxpbWl0IG9mIDMwIGNoYXJhY3RlcnMnKTtcbiAgICB9IGVsc2Uge1xuXHRcdGNob29zZVR5cGUoKTtcblx0fVxufSk7XG5cbmNvbnN0IHNlbGVjdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpO1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuXG5zZWxlY3RUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJyB8fCBzZWxlY3RUeXBlLnZhbHVlID09PSAnVGFzaycpIHtcblx0XHRkaXNwbGF5U2VsZWN0UHJvamVjdCgpO1xuXHR9XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAncHJvamVjdCcgfHwgc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ1Byb2plY3QnKSB7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIGNob29zZVR5cGUoKSB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAndGFzaycpIHtcblx0XHRzZWxlY3RUYXNrKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y3JlYXRlUHJvamVjdCgpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9XG59XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2VsZWN0UHJvamVjdCgpIHtcblx0c2VsZWN0UHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZVNlbGVjdFByb2plY3QoKSB7XG5cdHNlbGVjdFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcblx0c2VsZWN0VHlwZS5zZWxlY3RlZEluZGV4ID0gMDtcblx0c2VsZWN0UHJvamVjdC5zZWxlY3RlZEluZGV4ID0gMDtcblx0dGl0bGUudmFsdWUgPSBudWxsO1xuXHRkdWUudmFsdWUgPSBudWxsO1xuXHRub3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNb2RhbDtcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLXRhc2snO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVwZGF0ZVNlbGVjdGlvbnMgZnJvbSAnLi91cGRhdGUtc2VsZWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKG15QXJyYXkpIHtcblx0Y29uc3Qgc2VsZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuXHRzZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcblxuXHRteUFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4gRGF0ZS5wYXJzZShhLmR1ZSkgLSBEYXRlLnBhcnNlKGIuZHVlKTtcblx0fSk7XG5cblx0bXlBcnJheS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IHRhc2tBcnJheSA9IHRhc2sudGFza3M7XG5cdFx0aWYgKHRhc2tBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0YXNrQXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0XHRyZXR1cm4gRGF0ZS5wYXJzZShhLmR1ZSkgLSBEYXRlLnBhcnNlKGIuZHVlKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRcdGlmICh0YXNrLnR5cGUgPT09ICdQcm9qZWN0Jykge1xuXHRcdFx0dXBkYXRlU2VsZWN0aW9ucyh0YXNrLnRpdGxlKTtcblx0XHR9XG5cdH0pO1xuXHRzdG9yZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgbG9hZFVpIGZyb20gJy4vbG9hZC11aSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcblxuZnVuY3Rpb24gbG9hZFNpdGUoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAobXlBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG15QXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShhLmR1ZSkgLSBEYXRlLnBhcnNlKGIuZHVlKTtcbiAgICAgICAgICB9KTtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fVxuXHRsb2FkVWkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNpdGU7XG4iLCJpbXBvcnQgbG9hZE1vZGFsIGZyb20gJy4vbG9hZC1tb2RhbCc7XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcblx0Y29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1idXR0b24nKTtcblx0aGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRsb2FkTW9kYWwoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRVaTtcbiIsImltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhc2soKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cblx0Y29uc3QgdGFzayA9IG5ld1Rhc2soXG5cdFx0Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUudmFsdWUpLFxuXHRcdHByb2plY3QudmFsdWUsXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0ZHVlLnZhbHVlLFxuXHRcdG5vdGVzLnZhbHVlLFxuICAgICAgICBjb21wbGV0ZVxuXHQpO1xuXG5cdGlmICh0YXNrLnByb2plY3QgPT09ICdkZWZhdWx0JyB8fCB0YXNrLnByb2plY3QgPT09ICdub25lJykge1xuXHRcdG15QXJyYXkucHVzaCh0YXNrKTtcblx0XHRjb25zdCBpbmRleCA9IG15QXJyYXkuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gdGFzayk7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdFx0bXlBcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZS5wYXJzZShhLmR1ZSkgLSBEYXRlLnBhcnNlKGIuZHVlKTtcblx0XHR9KTtcblx0XHRzdG9yZShteUFycmF5KTtcblx0fSBlbHNlIHtcblx0XHRteUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGlmIChlbGVtZW50LnRpdGxlID09PSB0YXNrLnByb2plY3QpIHtcblx0XHRcdFx0ZWxlbWVudC50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcblx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5jb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlJyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5jb25zdCBjb21wbGV0ZSA9ICcnO1xuXG5jb25zdCBuZXdUYXNrID0gKHR5cGUsIHByb2plY3QsIHRpdGxlLCBkdWUsIG5vdGVzLCBjb21wbGV0ZSkgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcywgY29tcGxldGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdFRhc2s7XG4iLCJmdW5jdGlvbiBzdG9yZShteUFycmF5KSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUFycmF5JywgSlNPTi5zdHJpbmdpZnkobXlBcnJheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbnMocHJvamVjdCkge1xuXHRjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5cdGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0YWRkUHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuXHRhZGRQcm9qZWN0LnRleHQgPSBwcm9qZWN0O1xuXHRzZWxlY3RQcm9qZWN0LmFkZChhZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlU2VsZWN0aW9ucztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vbG9hZC1zaXRlJztcblxubG9hZFNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==