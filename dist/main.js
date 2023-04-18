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
	console.log(myArray);
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
		notes.value
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

const newTask = (type, project, title, due, notes) => {
	return { type, project, title, due, notes };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7O1VDUmhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbGVhci1jb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtcHJvamVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0LWFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtc2l0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtdWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZWxlY3QtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXBkYXRlLXNlbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuXHRjb25zdCBkb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRpdicpO1xuXHRkb21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDtcbiIsImltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVwZGF0ZVNlbGVjdGlvbnMgZnJvbSAnLi91cGRhdGUtc2VsZWN0aW9ucyc7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cblx0Y29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QoXG5cdFx0Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUudmFsdWUpLFxuXHRcdHRpdGxlLnZhbHVlLFxuXHRcdGR1ZS52YWx1ZSxcblx0XHRub3Rlcy52YWx1ZSxcblx0XHR0YXNrc1xuXHQpO1xuXHRteUFycmF5LnB1c2gocHJvamVjdCk7XG5cdHN0b3JlKG15QXJyYXkpO1xuXHR1cGRhdGVTZWxlY3Rpb25zKHRpdGxlLnZhbHVlKTtcblx0Y2xlYXJDb250ZW50KCk7XG5cdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRjb25zb2xlLmxvZyhteUFycmF5KTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuXHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcbmNvbnN0IHRhc2tzID0gW107XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAodHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzKSA9PiB7XG5cdHJldHVybiB7IHR5cGUsIHRpdGxlLCBkdWUsIG5vdGVzLCB0YXNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlLXRhc2snO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gJy4vZWRpdC10YXNrJztcbmltcG9ydCBlZGl0UHJvamVjdFRhc2sgZnJvbSAnLi9lZGl0LXByb2plY3QtdGFzayc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdFRhc2sgZnJvbSAnLi9kZWxldGUtcHJvamVjdC10YXNrJztcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBpbmRleCkge1xuXHR0YXNrLmlkID0gaW5kZXg7XG5cdGNvbnN0IHRhc2tJZCA9IHRhc2suaWQ7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cdHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2suaWQpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgdHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0eXBlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdHlwZS1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0eXBlRGl2KTtcblxuXHRjb25zdCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHR5cGUuY2xhc3NMaXN0LmFkZCgndGFzay10eXBlJyk7XG5cdHR5cGUudGV4dENvbnRlbnQgPSB0YXNrLnR5cGU7XG5cdHR5cGVEaXYuYXBwZW5kQ2hpbGQodHlwZSk7XG5cblx0XG5cblxuXG5cblx0Y29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZGl2Jyk7XG5cdHR5cGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3hEaXYpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG5cdGxhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlOiAnO1xuXG5cdGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0Y2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdGNoZWNrYm94LmlkID0gJ3Rhc2stY2hlY2tib3gnO1xuXHRjaGVja2JveC5uYW1lID0gJ3Rhc2stY2hlY2tib3gnO1xuXG4gICAgY2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRjaGVja2JveERpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cdFxuXG5cdGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNoZWNrYm94Jyk7XG5cblx0dGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuXHRcdFx0dGFzay5jb21wbGV0ZSA9ICdjb21wbGV0ZSAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXNrLmNvbXBsZXRlID0gJ2luY29tcGxldGUnO1xuXHRcdH1cblx0fSk7XG5cblxuXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0Y29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGR1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZScpO1xuXHRkdWUudGV4dENvbnRlbnQgPSAnRHVlOiAnICsgdGFzay5kdWU7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlKTtcblxuXHRjb25zdCBleHBhbmRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGV4cGFuZFRhc2suY2xhc3NMaXN0LmFkZCgnZXhwYW5kLXRhc2snKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUYXNrKTtcblxuXHRjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRub3Rlcy5jbGFzc0xpc3QuYWRkKCd0YXNrLW5vdGVzJyk7XG5cdG5vdGVzLnRleHRDb250ZW50ID0gJ05vdGVzOiAnICsgdGFzay5ub3Rlcztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChub3Rlcyk7XG5cblx0Y29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cdGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGVkaXRUYXNrKHRhc2ssIHRhc2tJZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGRlbGV0ZVRhc2sodGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgYWRkVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0YWRkVGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2tzLWRpdicpO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tzRGl2KTtcblxuXHRjb25zdCBleHBhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmREaXYpO1xuXG5cdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnLiAuIC4nO1xuXHRleHBhbmREaXYuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblx0ZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID09PSAnZ3JpZCcpIHtcblx0XHRcdGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9IGVsc2UgaWYgKChleHBhbmRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpKSB7XG5cdFx0XHRleHBhbmRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgdGFza0FycmF5ID0gdGFzay50YXNrcztcblxuXHRpZiAodGFza0FycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR0YXNrQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbUlkID0gdGFza0FycmF5LmluZGV4T2YoaXRlbSk7XG5cblx0XHRcdGNvbnN0IHByb2plY3RUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stZGl2Jyk7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5pZCk7XG5cdFx0XHRhZGRUYXNrc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0Rpdik7XG5cblx0XHRcdGNvbnN0IHRhc2tUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0YXNrVHlwZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stdHlwZScpO1xuXHRcdFx0dGFza1R5cGUudGV4dENvbnRlbnQgPSBpdGVtLnR5cGU7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVHlwZSk7XG5cblx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay10aXRsZScpO1xuXHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cblx0XHRcdGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWR1ZScpO1xuXHRcdFx0dGFza0R1ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyBpdGVtLmR1ZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWUpO1xuXG5cdFx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tOb3Rlcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stbm90ZXMnKTtcblx0XHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIGl0ZW0ubm90ZXM7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpO1xuXG5cdFx0XHRjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZWRpdFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ1dHRvbicpO1xuXHRcdFx0ZWRpdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG5cdFx0XHRlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGVkaXRQcm9qZWN0VGFzayhpdGVtLCB0YXNrSWQsIGl0ZW1JZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idXR0b24nKTtcblx0XHRcdGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGRlbGV0ZVByb2plY3RUYXNrKHRhc2tJZCwgaXRlbUlkKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhc2socHJvamVjdElkLCB0YXNrSWQpIHtcblx0Y29uc3QgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdG15QXJyYXlbcHJvamVjdElkXS50YXNrcy5zcGxpY2UodGFza0lkLCAxKTtcblx0Y2xlYXJDb250ZW50KCk7XG5cdGxvYWRQYWdlKG15QXJyYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0VGFzazsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bXlBcnJheS5zcGxpY2UoaWQsIDEpO1xuXHRjbGVhckNvbnRlbnQoKTtcblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7XG4iLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZnVuY3Rpb24gZWRpdFByb2plY3RUYXNrKGl0ZW0sIHRhc2tJZCwgaXRlbUlkKSB7XG5cdGRpc3BsYXlFZGl0VmFsdWVzKGl0ZW0pO1xuXHRkaXNwbGF5RWRpdE1vZGFsKCk7XG5cblx0Y29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1idXR0b24nKTtcblx0Y2FuY2VsRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Y2xlYXJFZGl0Rm9ybXMoKTtcblx0XHRoaWRlRWRpdE1vZGFsKCk7XG5cdH0pO1xuXG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bGV0IHRhc2tBcnJheSA9IG15QXJyYXlbdGFza0lkXS50YXNrc1tpdGVtSWRdO1xuXG5cdGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWJ1dHRvbicpO1xuXHRjcmVhdGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZWRpdFRhc2tUaXRsZS52YWx1ZS5sZW5ndGggPiAzMCkge1xuXHRcdFx0YWxlcnQoJ1RpdGxlIGV4Y2VlZHMgbWF4aW11bSBjaGFyYWN0ZXIgbGltaXQgb2YgMzAgY2hhcmFjdGVycycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXNrQXJyYXkudGl0bGUgPSBlZGl0VGFza1RpdGxlLnZhbHVlO1xuXHRcdFx0dGFza0FycmF5LmR1ZSA9IGVkaXRUYXNrRHVlLnZhbHVlO1xuXHRcdFx0dGFza0FycmF5Lm5vdGVzID0gZWRpdFRhc2tOb3Rlcy52YWx1ZTtcblx0XHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHRcdFx0c3RvcmUobXlBcnJheSk7XG5cdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHR9XG5cdH0pO1xufVxuXG5jb25zdCBlZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1tb2RhbCcpO1xuXG5jb25zdCBlZGl0VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZScpO1xuY29uc3QgZWRpdFRhc2tEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWR1ZScpO1xuY29uc3QgZWRpdFRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbm90ZXMnKTtcblxuZnVuY3Rpb24gZGlzcGxheUVkaXRWYWx1ZXMoaXRlbSkge1xuXHRlZGl0VGFza1RpdGxlLnZhbHVlID0gaXRlbS50aXRsZTtcblx0ZWRpdFRhc2tEdWUudmFsdWUgPSBpdGVtLmR1ZTtcblx0ZWRpdFRhc2tOb3Rlcy52YWx1ZSA9IGl0ZW0ubm90ZXM7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0TW9kYWwoKSB7XG5cdGVkaXRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVFZGl0TW9kYWwoKSB7XG5cdGVkaXRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRGb3JtcygpIHtcblx0ZWRpdFRhc2tUaXRsZS52YWx1ZSA9IG51bGw7XG5cdGVkaXRUYXNrRHVlLnZhbHVlID0gbnVsbDtcblx0ZWRpdFRhc2tOb3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRQcm9qZWN0VGFzaztcbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0YXNrSWQpIHtcblx0ZGlzcGxheUVkaXRWYWx1ZXModGFzayk7XG5cdGRpc3BsYXlFZGl0TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1lZGl0LWJ1dHRvbicpO1xuXHRjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckVkaXRGb3JtcygpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0fSk7XG5cblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRsZXQgdGFza0FycmF5ID0gbXlBcnJheVt0YXNrSWRdLnRhc2tzO1xuXG5cdGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWVkaXQtYnV0dG9uJyk7XG5cdGNyZWF0ZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmICh0YXNrQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFza0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5wcm9qZWN0ID0gZWRpdFRpdGxlLnZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGVkaXRUaXRsZS52YWx1ZS5sZW5ndGggPiAzMCkge1xuXHRcdFx0YWxlcnQoJ1RpdGxlIGV4Y2VlZHMgbWF4aW11bSBjaGFyYWN0ZXIgbGltaXQgb2YgMzAgY2hhcmFjdGVycycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRteUFycmF5W3Rhc2tJZF0udGl0bGUgPSBlZGl0VGl0bGUudmFsdWU7XG5cdFx0XHRteUFycmF5W3Rhc2tJZF0uZHVlID0gZWRpdER1ZS52YWx1ZTtcblx0XHRcdG15QXJyYXlbdGFza0lkXS5ub3RlcyA9IGVkaXROb3Rlcy52YWx1ZTtcblx0XHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHRcdFx0c3RvcmUobXlBcnJheSk7XG5cdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHR9XG5cdH0pO1xufVxuXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tb2RhbCcpO1xuXG5jb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpO1xuY29uc3QgZWRpdER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZScpO1xuY29uc3QgZWRpdE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbm90ZXMnKTtcblxuZnVuY3Rpb24gZGlzcGxheUVkaXRWYWx1ZXModGFzaykge1xuXHRlZGl0VGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuXHRlZGl0RHVlLnZhbHVlID0gdGFzay5kdWU7XG5cdGVkaXROb3Rlcy52YWx1ZSA9IHRhc2subm90ZXM7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0TW9kYWwoKSB7XG5cdGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZUVkaXRNb2RhbCgpIHtcblx0ZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0Rm9ybXMoKSB7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IG51bGw7XG5cdGVkaXREdWUudmFsdWUgPSBudWxsO1xuXHRlZGl0Tm90ZXMudmFsdWUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0VGFzaztcbiIsImZ1bmN0aW9uIGdldEFycmF5KCkge1xuXHRjb25zdCBteUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlBcnJheScpKTtcblx0aWYgKG15QXJyYXkgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gbXlBcnJheTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBcnJheTtcbiIsImltcG9ydCBzZWxlY3RUYXNrIGZyb20gJy4vc2VsZWN0LXRhc2snO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGUtcHJvamVjdCc7XG5cbmZ1bmN0aW9uIGxvYWRNb2RhbCgpIHtcblx0ZGlzcGxheU1vZGFsKCk7XG5cblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1idXR0b24nKTtcblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckZvcm1zKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0fSk7XG59XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ2RlZmF1bHQnKSB7XG5cdFx0YWxlcnQoJ1BsZWFzZSBTZWxlY3QgVHlwZScpO1xuXHR9IGVsc2UgaWYodGl0bGUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgRW50ZXIgYSBUaXRsZScpXG4gICAgfSBlbHNlIGlmICh0aXRsZS52YWx1ZS5sZW5ndGggPiAzMCkge1xuICAgICAgICBhbGVydCgnVGl0bGUgZXhjZWVkcyBtYXhpbXVtIGNoYXJhY3RlciBsaW1pdCBvZiAzMCBjaGFyYWN0ZXJzJyk7XG4gICAgfSBlbHNlIHtcblx0XHRjaG9vc2VUeXBlKCk7XG5cdH1cbn0pO1xuXG5jb25zdCBzZWxlY3RUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuc2VsZWN0VHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAndGFzaycgfHwgc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ1Rhc2snKSB7XG5cdFx0ZGlzcGxheVNlbGVjdFByb2plY3QoKTtcblx0fVxuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ3Byb2plY3QnIHx8IHNlbGVjdFR5cGUudmFsdWUgPT09ICdQcm9qZWN0Jykge1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBjaG9vc2VUeXBlKCkge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ3Rhc2snKSB7XG5cdFx0c2VsZWN0VGFzaygpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9IGVsc2Uge1xuXHRcdGNyZWF0ZVByb2plY3QoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0fVxufVxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNlbGVjdFByb2plY3QoKSB7XG5cdHNlbGVjdFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVTZWxlY3RQcm9qZWN0KCkge1xuXHRzZWxlY3RQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybXMoKSB7XG5cdHNlbGVjdFR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHNlbGVjdFByb2plY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZHVlLnZhbHVlID0gbnVsbDtcblx0bm90ZXMudmFsdWUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTW9kYWw7XG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB1cGRhdGVTZWxlY3Rpb25zIGZyb20gJy4vdXBkYXRlLXNlbGVjdGlvbnMnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZShteUFycmF5KSB7XG5cdGNvbnN0IHNlbGVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1vcHRpb24nKTtcblx0c2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG5cblx0bXlBcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIERhdGUucGFyc2UoYS5kdWUpIC0gRGF0ZS5wYXJzZShiLmR1ZSk7XG5cdH0pO1xuXG5cdG15QXJyYXkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcblx0XHRjb25zdCB0YXNrQXJyYXkgPSB0YXNrLnRhc2tzO1xuXHRcdGlmICh0YXNrQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFza0FycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIERhdGUucGFyc2UoYS5kdWUpIC0gRGF0ZS5wYXJzZShiLmR1ZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjcmVhdGVUYXNrKHRhc2ssIGluZGV4KTtcblx0XHRpZiAodGFzay50eXBlID09PSAnUHJvamVjdCcpIHtcblx0XHRcdHVwZGF0ZVNlbGVjdGlvbnModGFzay50aXRsZSk7XG5cdFx0fVxuXHR9KTtcblx0c3RvcmUobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiaW1wb3J0IGxvYWRVaSBmcm9tICcuL2xvYWQtdWknO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5cbmZ1bmN0aW9uIGxvYWRTaXRlKCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKG15QXJyYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBteUFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYS5kdWUpIC0gRGF0ZS5wYXJzZShiLmR1ZSk7XG4gICAgICAgICAgfSk7XG5cdFx0bG9hZFBhZ2UobXlBcnJheSk7XG5cdH1cblx0bG9hZFVpKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTaXRlO1xuIiwiaW1wb3J0IGxvYWRNb2RhbCBmcm9tICcuL2xvYWQtbW9kYWwnO1xuXG5mdW5jdGlvbiBsb2FkVWkoKSB7XG5cdGNvbnN0IGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItYnV0dG9uJyk7XG5cdGhlYWRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0bG9hZE1vZGFsKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkVWk7XG4iLCJpbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBzZWxlY3RUYXNrKCkge1xuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGlmICghbXlBcnJheSkge1xuXHRcdG15QXJyYXkgPSBbXTtcblx0fVxuXG5cdGNvbnN0IHRhc2sgPSBuZXdUYXNrKFxuXHRcdGNhcGl0YWxpemVGaXJzdExldHRlcih0eXBlLnZhbHVlKSxcblx0XHRwcm9qZWN0LnZhbHVlLFxuXHRcdHRpdGxlLnZhbHVlLFxuXHRcdGR1ZS52YWx1ZSxcblx0XHRub3Rlcy52YWx1ZVxuXHQpO1xuXG5cdGlmICh0YXNrLnByb2plY3QgPT09ICdkZWZhdWx0JyB8fCB0YXNrLnByb2plY3QgPT09ICdub25lJykge1xuXHRcdG15QXJyYXkucHVzaCh0YXNrKTtcblx0XHRjb25zdCBpbmRleCA9IG15QXJyYXkuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gdGFzayk7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdFx0bXlBcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZS5wYXJzZShhLmR1ZSkgLSBEYXRlLnBhcnNlKGIuZHVlKTtcblx0XHR9KTtcblx0XHRzdG9yZShteUFycmF5KTtcblx0fSBlbHNlIHtcblx0XHRteUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGlmIChlbGVtZW50LnRpdGxlID09PSB0YXNrLnByb2plY3QpIHtcblx0XHRcdFx0ZWxlbWVudC50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcblx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5jb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlJyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5cbmNvbnN0IG5ld1Rhc2sgPSAodHlwZSwgcHJvamVjdCwgdGl0bGUsIGR1ZSwgbm90ZXMpID0+IHtcblx0cmV0dXJuIHsgdHlwZSwgcHJvamVjdCwgdGl0bGUsIGR1ZSwgbm90ZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdFRhc2s7XG4iLCJmdW5jdGlvbiBzdG9yZShteUFycmF5KSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUFycmF5JywgSlNPTi5zdHJpbmdpZnkobXlBcnJheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbnMocHJvamVjdCkge1xuXHRjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5cdGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0YWRkUHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuXHRhZGRQcm9qZWN0LnRleHQgPSBwcm9qZWN0O1xuXHRzZWxlY3RQcm9qZWN0LmFkZChhZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlU2VsZWN0aW9ucztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vbG9hZC1zaXRlJztcblxubG9hZFNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==