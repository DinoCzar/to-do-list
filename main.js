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
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/create-task.js");
/* harmony import */ var _get_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-array */ "./src/get-array.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _update_selections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-selections */ "./src/update-selections.js");





function createProject() {
	let myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_1__["default"])();
	if (!myArray) {
		myArray = [];
	}

	const project = newProject(
		type.value,
		title.value,
		due.value,
		notes.value,
		tasks
	);
	myArray.push(project);
	const index = myArray.findIndex((obj) => obj === project);
	(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(project, index);
	(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
	(0,_update_selections__WEBPACK_IMPORTED_MODULE_3__["default"])(title.value);
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
	expandButton.textContent = 'Expand';
	expandDiv.appendChild(expandButton);
    expandButton.addEventListener('click', (e) => {
		if (expandTask.style.display === 'grid') {
            expandTask.style.display = 'none';
          } else if (expandTask.style.display = 'none') {
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
	} else if (title.value.length > 30) {
        alert('Title exceeds maximum character limit of 30 characters');
    } else {
		chooseType();
	}
});

const selectType = document.querySelector('#type');
const selectProject = document.querySelector('#select-project');

selectType.addEventListener('change', function () {
	if (selectType.value === 'task') {
		displaySelectProject();
	}
	if (selectType.value === 'project') {
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

	myArray.forEach((task, index) => {
		(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task, index);
		if (task.type === 'project') {
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
		type.value,
		project.value,
		title.value,
		due.value,
		notes.value
	);

	if (task.project === 'default' || task.project === 'none') {
		myArray.push(task);
		const index = myArray.findIndex((obj) => obj === task);
		(0,_create_task__WEBPACK_IMPORTED_MODULE_1__["default"])(task, index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xlYXItY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGUtcHJvamVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldC1hcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLXNpdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLXVpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2VsZWN0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VwZGF0ZS1zZWxlY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcblx0Y29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kaXYnKTtcblx0ZG9tRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbnRlbnQ7XG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgdXBkYXRlU2VsZWN0aW9ucyBmcm9tICcuL3VwZGF0ZS1zZWxlY3Rpb25zJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAoIW15QXJyYXkpIHtcblx0XHRteUFycmF5ID0gW107XG5cdH1cblxuXHRjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChcblx0XHR0eXBlLnZhbHVlLFxuXHRcdHRpdGxlLnZhbHVlLFxuXHRcdGR1ZS52YWx1ZSxcblx0XHRub3Rlcy52YWx1ZSxcblx0XHR0YXNrc1xuXHQpO1xuXHRteUFycmF5LnB1c2gocHJvamVjdCk7XG5cdGNvbnN0IGluZGV4ID0gbXlBcnJheS5maW5kSW5kZXgoKG9iaikgPT4gb2JqID09PSBwcm9qZWN0KTtcblx0Y3JlYXRlVGFzayhwcm9qZWN0LCBpbmRleCk7XG5cdHN0b3JlKG15QXJyYXkpO1xuXHR1cGRhdGVTZWxlY3Rpb25zKHRpdGxlLnZhbHVlKTtcbn1cblxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5jb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlJyk7XG5jb25zdCB0YXNrcyA9IFtdO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gKHR5cGUsIHRpdGxlLCBkdWUsIG5vdGVzLCB0YXNrcykgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCB0aXRsZSwgZHVlLCBub3RlcywgdGFza3MgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XG4iLCJpbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuL2RlbGV0ZS10YXNrJztcbmltcG9ydCBlZGl0VGFzayBmcm9tICcuL2VkaXQtdGFzayc7XG5pbXBvcnQgZWRpdFByb2plY3RUYXNrIGZyb20gJy4vZWRpdC1wcm9qZWN0LXRhc2snO1xuaW1wb3J0IGRlbGV0ZVByb2plY3RUYXNrIGZyb20gJy4vZGVsZXRlLXByb2plY3QtdGFzayc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpIHtcblx0dGFzay5pZCA9IGluZGV4O1xuXHRjb25zdCB0YXNrSWQgPSB0YXNrLmlkO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cdGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuXHR0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrLmlkKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0Y29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGR1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZScpO1xuXHRkdWUudGV4dENvbnRlbnQgPSAnRHVlOiAnICsgdGFzay5kdWU7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlKTtcblxuXHRjb25zdCBleHBhbmRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGV4cGFuZFRhc2suY2xhc3NMaXN0LmFkZCgnZXhwYW5kLXRhc2snKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUYXNrKTtcblxuXHRjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRub3Rlcy5jbGFzc0xpc3QuYWRkKCd0YXNrLW5vdGVzJyk7XG5cdG5vdGVzLnRleHRDb250ZW50ID0gJ05vdGVzOiAnICsgdGFzay5ub3Rlcztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChub3Rlcyk7XG5cblx0Y29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cdGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGVkaXRUYXNrKHRhc2ssIHRhc2tJZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGRlbGV0ZVRhc2sodGFza0lkKTtcblx0fSk7XG5cbiAgICBjb25zdCBhZGRUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRhZGRUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFza3MtZGl2Jyk7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza3NEaXYpO1xuXG5cdGNvbnN0IGV4cGFuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRleHBhbmREaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWRpdicpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZERpdik7XG5cblx0Y29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuXHRleHBhbmREaXYuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcbiAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChleHBhbmRUYXNrLnN0eWxlLmRpc3BsYXkgPT09ICdncmlkJykge1xuICAgICAgICAgICAgZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSB7XG4gICAgICAgICAgICBleHBhbmRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgICAgfVxuXHR9KTtcblxuXHRsZXQgdGFza0FycmF5ID0gdGFzay50YXNrcztcblxuXHRpZiAodGFza0FycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR0YXNrQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbUlkID0gdGFza0FycmF5LmluZGV4T2YoaXRlbSk7XG5cblx0XHRcdGNvbnN0IHByb2plY3RUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stZGl2Jyk7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5pZCk7XG5cdFx0XHRhZGRUYXNrc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0Rpdik7XG5cblx0XHRcdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay10aXRsZScpO1xuXHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cblx0XHRcdGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWR1ZScpO1xuXHRcdFx0dGFza0R1ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyBpdGVtLmR1ZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWUpO1xuXG5cdFx0XHRjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tOb3Rlcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stbm90ZXMnKTtcblx0XHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIGl0ZW0ubm90ZXM7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpO1xuXG5cdFx0XHRjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZWRpdFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ1dHRvbicpO1xuXHRcdFx0ZWRpdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG5cdFx0XHRlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGVkaXRQcm9qZWN0VGFzayhpdGVtLCB0YXNrSWQsIGl0ZW1JZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idXR0b24nKTtcblx0XHRcdGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGRlbGV0ZVByb2plY3RUYXNrKHRhc2tJZCwgaXRlbUlkKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhc2socHJvamVjdElkLCB0YXNrSWQpIHtcblx0Y29uc3QgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdG15QXJyYXlbcHJvamVjdElkXS50YXNrcy5zcGxpY2UodGFza0lkLCAxKTtcblx0Y2xlYXJDb250ZW50KCk7XG5cdGxvYWRQYWdlKG15QXJyYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0VGFzazsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bXlBcnJheS5zcGxpY2UoaWQsIDEpO1xuXHRjbGVhckNvbnRlbnQoKTtcblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7XG4iLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZnVuY3Rpb24gZWRpdFByb2plY3RUYXNrKGl0ZW0sIHRhc2tJZCwgaXRlbUlkKSB7XG5cdGRpc3BsYXlFZGl0VmFsdWVzKGl0ZW0pO1xuXHRkaXNwbGF5RWRpdE1vZGFsKCk7XG5cblx0Y29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1idXR0b24nKTtcblx0Y2FuY2VsRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Y2xlYXJFZGl0Rm9ybXMoKTtcblx0XHRoaWRlRWRpdE1vZGFsKCk7XG5cdH0pO1xuXG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bGV0IHRhc2tBcnJheSA9IG15QXJyYXlbdGFza0lkXS50YXNrc1tpdGVtSWRdO1xuXG5cdGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWJ1dHRvbicpO1xuXHRjcmVhdGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZWRpdFRhc2tUaXRsZS52YWx1ZS5sZW5ndGggPiAzMCkge1xuXHRcdFx0YWxlcnQoJ1RpdGxlIGV4Y2VlZHMgbWF4aW11bSBjaGFyYWN0ZXIgbGltaXQgb2YgMzAgY2hhcmFjdGVycycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXNrQXJyYXkudGl0bGUgPSBlZGl0VGFza1RpdGxlLnZhbHVlO1xuXHRcdFx0dGFza0FycmF5LmR1ZSA9IGVkaXRUYXNrRHVlLnZhbHVlO1xuXHRcdFx0dGFza0FycmF5Lm5vdGVzID0gZWRpdFRhc2tOb3Rlcy52YWx1ZTtcblx0XHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHRcdFx0c3RvcmUobXlBcnJheSk7XG5cdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHR9XG5cdH0pO1xufVxuXG5jb25zdCBlZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1tb2RhbCcpO1xuXG5jb25zdCBlZGl0VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZScpO1xuY29uc3QgZWRpdFRhc2tEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWR1ZScpO1xuY29uc3QgZWRpdFRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbm90ZXMnKTtcblxuZnVuY3Rpb24gZGlzcGxheUVkaXRWYWx1ZXMoaXRlbSkge1xuXHRlZGl0VGFza1RpdGxlLnZhbHVlID0gaXRlbS50aXRsZTtcblx0ZWRpdFRhc2tEdWUudmFsdWUgPSBpdGVtLmR1ZTtcblx0ZWRpdFRhc2tOb3Rlcy52YWx1ZSA9IGl0ZW0ubm90ZXM7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0TW9kYWwoKSB7XG5cdGVkaXRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVFZGl0TW9kYWwoKSB7XG5cdGVkaXRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRGb3JtcygpIHtcblx0ZWRpdFRhc2tUaXRsZS52YWx1ZSA9IG51bGw7XG5cdGVkaXRUYXNrRHVlLnZhbHVlID0gbnVsbDtcblx0ZWRpdFRhc2tOb3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRQcm9qZWN0VGFzaztcbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0YXNrSWQpIHtcblx0ZGlzcGxheUVkaXRWYWx1ZXModGFzayk7XG5cdGRpc3BsYXlFZGl0TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1lZGl0LWJ1dHRvbicpO1xuXHRjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckVkaXRGb3JtcygpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0fSk7XG5cblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRsZXQgdGFza0FycmF5ID0gbXlBcnJheVt0YXNrSWRdLnRhc2tzO1xuXG5cdGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWVkaXQtYnV0dG9uJyk7XG5cdGNyZWF0ZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmICh0YXNrQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFza0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5wcm9qZWN0ID0gZWRpdFRpdGxlLnZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGVkaXRUaXRsZS52YWx1ZS5sZW5ndGggPiAzMCkge1xuXHRcdFx0YWxlcnQoJ1RpdGxlIGV4Y2VlZHMgbWF4aW11bSBjaGFyYWN0ZXIgbGltaXQgb2YgMzAgY2hhcmFjdGVycycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRteUFycmF5W3Rhc2tJZF0udGl0bGUgPSBlZGl0VGl0bGUudmFsdWU7XG5cdFx0XHRteUFycmF5W3Rhc2tJZF0uZHVlID0gZWRpdER1ZS52YWx1ZTtcblx0XHRcdG15QXJyYXlbdGFza0lkXS5ub3RlcyA9IGVkaXROb3Rlcy52YWx1ZTtcblx0XHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHRcdFx0c3RvcmUobXlBcnJheSk7XG5cdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHR9XG5cdH0pO1xufVxuXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tb2RhbCcpO1xuXG5jb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpO1xuY29uc3QgZWRpdER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZScpO1xuY29uc3QgZWRpdE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbm90ZXMnKTtcblxuZnVuY3Rpb24gZGlzcGxheUVkaXRWYWx1ZXModGFzaykge1xuXHRlZGl0VGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuXHRlZGl0RHVlLnZhbHVlID0gdGFzay5kdWU7XG5cdGVkaXROb3Rlcy52YWx1ZSA9IHRhc2subm90ZXM7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0TW9kYWwoKSB7XG5cdGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZUVkaXRNb2RhbCgpIHtcblx0ZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJFZGl0Rm9ybXMoKSB7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IG51bGw7XG5cdGVkaXREdWUudmFsdWUgPSBudWxsO1xuXHRlZGl0Tm90ZXMudmFsdWUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0VGFzaztcbiIsImZ1bmN0aW9uIGdldEFycmF5KCkge1xuXHRjb25zdCBteUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlBcnJheScpKTtcblx0aWYgKG15QXJyYXkgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gbXlBcnJheTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBcnJheTtcbiIsImltcG9ydCBzZWxlY3RUYXNrIGZyb20gJy4vc2VsZWN0LXRhc2snO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGUtcHJvamVjdCc7XG5cbmZ1bmN0aW9uIGxvYWRNb2RhbCgpIHtcblx0ZGlzcGxheU1vZGFsKCk7XG5cblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1idXR0b24nKTtcblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckZvcm1zKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0fSk7XG59XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ2RlZmF1bHQnKSB7XG5cdFx0YWxlcnQoJ1BsZWFzZSBTZWxlY3QgVHlwZScpO1xuXHR9IGVsc2UgaWYgKHRpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgIGFsZXJ0KCdUaXRsZSBleGNlZWRzIG1heGltdW0gY2hhcmFjdGVyIGxpbWl0IG9mIDMwIGNoYXJhY3RlcnMnKTtcbiAgICB9IGVsc2Uge1xuXHRcdGNob29zZVR5cGUoKTtcblx0fVxufSk7XG5cbmNvbnN0IHNlbGVjdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpO1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuXG5zZWxlY3RUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJykge1xuXHRcdGRpc3BsYXlTZWxlY3RQcm9qZWN0KCk7XG5cdH1cblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICdwcm9qZWN0Jykge1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBjaG9vc2VUeXBlKCkge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ3Rhc2snKSB7XG5cdFx0c2VsZWN0VGFzaygpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9IGVsc2Uge1xuXHRcdGNyZWF0ZVByb2plY3QoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0fVxufVxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNlbGVjdFByb2plY3QoKSB7XG5cdHNlbGVjdFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVTZWxlY3RQcm9qZWN0KCkge1xuXHRzZWxlY3RQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybXMoKSB7XG5cdHNlbGVjdFR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHNlbGVjdFByb2plY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZHVlLnZhbHVlID0gbnVsbDtcblx0bm90ZXMudmFsdWUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTW9kYWw7XG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB1cGRhdGVTZWxlY3Rpb25zIGZyb20gJy4vdXBkYXRlLXNlbGVjdGlvbnMnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZShteUFycmF5KSB7XG5cdGNvbnN0IHNlbGVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1vcHRpb24nKTtcblx0c2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG5cblx0bXlBcnJheS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRcdGlmICh0YXNrLnR5cGUgPT09ICdwcm9qZWN0Jykge1xuXHRcdFx0dXBkYXRlU2VsZWN0aW9ucyh0YXNrLnRpdGxlKTtcblx0XHR9XG5cdH0pO1xuXHRzdG9yZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgbG9hZFVpIGZyb20gJy4vbG9hZC11aSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcblxuZnVuY3Rpb24gbG9hZFNpdGUoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXG5cdGlmIChteUFycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fVxuXHRsb2FkVWkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNpdGU7XG4iLCJpbXBvcnQgbG9hZE1vZGFsIGZyb20gJy4vbG9hZC1tb2RhbCc7XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcblx0Y29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1idXR0b24nKTtcblx0aGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRsb2FkTW9kYWwoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRVaTtcbiIsImltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhc2soKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cblx0Y29uc3QgdGFzayA9IG5ld1Rhc2soXG5cdFx0dHlwZS52YWx1ZSxcblx0XHRwcm9qZWN0LnZhbHVlLFxuXHRcdHRpdGxlLnZhbHVlLFxuXHRcdGR1ZS52YWx1ZSxcblx0XHRub3Rlcy52YWx1ZVxuXHQpO1xuXG5cdGlmICh0YXNrLnByb2plY3QgPT09ICdkZWZhdWx0JyB8fCB0YXNrLnByb2plY3QgPT09ICdub25lJykge1xuXHRcdG15QXJyYXkucHVzaCh0YXNrKTtcblx0XHRjb25zdCBpbmRleCA9IG15QXJyYXkuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gdGFzayk7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdFx0c3RvcmUobXlBcnJheSk7XG5cdH0gZWxzZSB7XG5cdFx0bXlBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudC50aXRsZSA9PT0gdGFzay5wcm9qZWN0KSB7XG5cdFx0XHRcdGVsZW1lbnQudGFza3MucHVzaCh0YXNrKTtcblx0XHRcdFx0c3RvcmUobXlBcnJheSk7XG5cdFx0XHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuY29uc3QgbmV3VGFzayA9ICh0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcykgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0VGFzaztcbiIsImZ1bmN0aW9uIHN0b3JlKG15QXJyYXkpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215QXJyYXknLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9ucyhwcm9qZWN0KSB7XG5cdGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblx0Y29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRhZGRQcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LW9wdGlvbic7XG5cdGFkZFByb2plY3QudGV4dCA9IHByb2plY3Q7XG5cdHNlbGVjdFByb2plY3QuYWRkKGFkZFByb2plY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVTZWxlY3Rpb25zO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFNpdGUgZnJvbSAnLi9sb2FkLXNpdGUnO1xuXG5sb2FkU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9