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

	const expandDiv = document.createElement('div');
	expandDiv.classList.add('expand-div');
	taskDiv.appendChild(expandDiv);

	const expandButton = document.createElement('button');
	expandButton.classList.add('expand-button');
	expandButton.textContent = '...';
	expandDiv.appendChild(expandButton);
	expandButton.addEventListener('click', (e) => {
		expandTask.style.display = 'grid';
	});

	const addTasksDiv = document.createElement('div');
	addTasksDiv.classList.add('add-tasks-div');
	taskDiv.appendChild(addTasksDiv);

	let taskArray = task.tasks;

	if (taskArray !== undefined) {
		taskArray.forEach((item) => {
			const itemId = taskArray.indexOf(item);

			const projectTaskDiv = document.createElement('div');
			projectTaskDiv.classList.add('project-task-div');
			projectTaskDiv.setAttribute('id', item.id);
			addTasksDiv.appendChild(projectTaskDiv);

			const taskTitle = document.createElement('div');
			taskTitle.classList.add('task-title');
			taskTitle.textContent = item.title;
			projectTaskDiv.appendChild(taskTitle);

			const taskDue = document.createElement('div');
			taskDue.classList.add('task-due');
			taskDue.textContent = 'Due: ' + item.due;
			projectTaskDiv.appendChild(taskDue);

			const expandProjectTask = document.createElement('div');
			expandProjectTask.classList.add('expand-task');
			projectTaskDiv.appendChild(expandProjectTask);

			const taskNotes = document.createElement('div');
			taskNotes.classList.add('task-notes');
			taskNotes.textContent = 'Notes: ' + item.notes;
			expandProjectTask.appendChild(taskNotes);

			const editTaskButton = document.createElement('button');
			editTaskButton.classList.add('edit-button');
			editTaskButton.textContent = 'Edit';
			expandProjectTask.appendChild(editTaskButton);
			editTaskButton.addEventListener('click', (e) => {
				(0,_edit_project_task__WEBPACK_IMPORTED_MODULE_2__["default"])(item, taskId, itemId);
			});

			const deleteTaskButton = document.createElement('button');
			deleteTaskButton.classList.add('delete-button');
			deleteTaskButton.textContent = 'Delete';
			expandProjectTask.appendChild(deleteTaskButton);
			deleteTaskButton.addEventListener('click', (e) => {
				(0,_delete_task__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId);
			});

			const expandTaskDiv = document.createElement('div');
			expandTaskDiv.classList.add('expand-div');
			projectTaskDiv.appendChild(expandTaskDiv);

			const expandTaskButton = document.createElement('button');
			expandTaskButton.classList.add('expand-button');
			expandTaskButton.textContent = '...';
			expandTaskDiv.appendChild(expandTaskButton);
			expandTaskButton.addEventListener('click', (e) => {
				expandProjectTask.style.display = 'grid';
			});
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


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
    let taskArray = myArray[taskId].tasks[itemId]

	const createEditButton = document.querySelector('#edit-task-button');
	createEditButton.addEventListener('click', (e) => {
		taskArray.title = editTaskTitle.value;
		taskArray.due = editTaskDue.value;
		taskArray.notes = editTaskNotes.value;
		(0,_clear_content__WEBPACK_IMPORTED_MODULE_0__["default"])();
		hideEditModal();
		(0,_store__WEBPACK_IMPORTED_MODULE_3__["default"])(myArray);
		(0,_load_page__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
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
		taskArray.forEach((element) => {
			element.project = editTitle.value;
		});
		myArray[taskId].title = editTitle.value;
		myArray[taskId].due = editDue.value;
		myArray[taskId].notes = editNotes.value;
		(0,_clear_content__WEBPACK_IMPORTED_MODULE_0__["default"])();
		hideEditModal();
		(0,_store__WEBPACK_IMPORTED_MODULE_3__["default"])(myArray);
		(0,_load_page__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNJO0FBQ1g7QUFDTztBQUNROztBQUUzQztBQUNBLGVBQWUsc0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVTtBQUNaLEVBQUUsa0RBQUs7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBSztBQUNULElBQUksMERBQVk7QUFDaEIsSUFBSSxzREFBUTtBQUNaO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNDMUI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7O1VDUmhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbGVhci1jb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLW1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1zaXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC11aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91cGRhdGUtc2VsZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG5cdGNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGl2Jyk7XG5cdGRvbUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50O1xuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVwZGF0ZVNlbGVjdGlvbnMgZnJvbSAnLi91cGRhdGUtc2VsZWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cdGNvbnN0IHByb2plY3QgPSBuZXdQcm9qZWN0KFxuXHRcdHR5cGUudmFsdWUsXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0ZHVlLnZhbHVlLFxuXHRcdG5vdGVzLnZhbHVlLFxuXHRcdHRhc2tzXG5cdCk7XG5cdG15QXJyYXkucHVzaChwcm9qZWN0KTtcblx0Y29uc3QgaW5kZXggPSBteUFycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmogPT09IHByb2plY3QpO1xuXHRjcmVhdGVUYXNrKHByb2plY3QsIGluZGV4KTtcblx0c3RvcmUobXlBcnJheSk7XG5cdHVwZGF0ZVNlbGVjdGlvbnModGl0bGUudmFsdWUpO1xufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcblxuY29uc3QgdGFza3MgPSBbXTtcblxuY29uc3QgbmV3UHJvamVjdCA9ICh0eXBlLCB0aXRsZSwgZHVlLCBub3RlcywgdGFza3MpID0+IHtcblx0cmV0dXJuIHsgdHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGUtdGFzayc7XG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9lZGl0LXRhc2snO1xuaW1wb3J0IGVkaXRQcm9qZWN0VGFzayBmcm9tICcuL2VkaXQtcHJvamVjdC10YXNrJztcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBpbmRleCkge1xuXHR0YXNrLmlkID0gaW5kZXg7XG5cdGNvbnN0IHRhc2tJZCA9IHRhc2suaWQ7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cdHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2suaWQpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZHVlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlJyk7XG5cdGR1ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyB0YXNrLmR1ZTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChkdWUpO1xuXG5cdGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kVGFzay5jbGFzc0xpc3QuYWRkKCdleHBhbmQtdGFzaycpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRhc2spO1xuXG5cdGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG5vdGVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZXMnKTtcblx0bm90ZXMudGV4dENvbnRlbnQgPSAnTm90ZXM6ICcgKyB0YXNrLm5vdGVzO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKG5vdGVzKTtcblxuXHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0ZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZWRpdFRhc2sodGFzaywgdGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZGVsZXRlVGFzayh0YXNrSWQpO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmREaXYpO1xuXG5cdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnLi4uJztcblx0ZXhwYW5kRGl2LmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cdGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXHR9KTtcblxuXHRjb25zdCBhZGRUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRhZGRUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFza3MtZGl2Jyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza3NEaXYpO1xuXG5cdGxldCB0YXNrQXJyYXkgPSB0YXNrLnRhc2tzO1xuXG5cdGlmICh0YXNrQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHRhc2tBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBpdGVtSWQgPSB0YXNrQXJyYXkuaW5kZXhPZihpdGVtKTtcblxuXHRcdFx0Y29uc3QgcHJvamVjdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1kaXYnKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLmlkKTtcblx0XHRcdGFkZFRhc2tzRGl2LmFwcGVuZENoaWxkKHByb2plY3RUYXNrRGl2KTtcblxuXHRcdFx0Y29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuXHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cblx0XHRcdGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcblx0XHRcdHRhc2tEdWUudGV4dENvbnRlbnQgPSAnRHVlOiAnICsgaXRlbS5kdWU7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcblxuXHRcdFx0Y29uc3QgZXhwYW5kUHJvamVjdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGV4cGFuZFByb2plY3RUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG5cdFx0XHRwcm9qZWN0VGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRQcm9qZWN0VGFzayk7XG5cblx0XHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza05vdGVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZXMnKTtcblx0XHRcdHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIGl0ZW0ubm90ZXM7XG5cdFx0XHRleHBhbmRQcm9qZWN0VGFzay5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpO1xuXG5cdFx0XHRjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZWRpdFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0XHRcdGVkaXRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXHRcdFx0ZXhwYW5kUHJvamVjdFRhc2suYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdXR0b24pO1xuXHRcdFx0ZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRlZGl0UHJvamVjdFRhc2soaXRlbSwgdGFza0lkLCBpdGVtSWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRcdFx0ZXhwYW5kUHJvamVjdFRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cdFx0XHRkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZGVsZXRlVGFzayhpdGVtSWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGV4cGFuZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGV4cGFuZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWRpdicpO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kVGFza0Rpdik7XG5cblx0XHRcdGNvbnN0IGV4cGFuZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdGV4cGFuZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRcdFx0ZXhwYW5kVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICcuLi4nO1xuXHRcdFx0ZXhwYW5kVGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUYXNrQnV0dG9uKTtcblx0XHRcdGV4cGFuZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRleHBhbmRQcm9qZWN0VGFzay5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRteUFycmF5LnNwbGljZShpZCwgMSk7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRsb2FkUGFnZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzaztcbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5mdW5jdGlvbiBlZGl0UHJvamVjdFRhc2soaXRlbSwgdGFza0lkLCBpdGVtSWQpIHtcblx0ZGlzcGxheUVkaXRWYWx1ZXMoaXRlbSk7XG5cdGRpc3BsYXlFZGl0TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10YXNrLWJ1dHRvbicpO1xuXHRjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckVkaXRGb3JtcygpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0fSk7XG5cblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuICAgIGxldCB0YXNrQXJyYXkgPSBteUFycmF5W3Rhc2tJZF0udGFza3NbaXRlbUlkXVxuXG5cdGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWJ1dHRvbicpO1xuXHRjcmVhdGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHR0YXNrQXJyYXkudGl0bGUgPSBlZGl0VGFza1RpdGxlLnZhbHVlO1xuXHRcdHRhc2tBcnJheS5kdWUgPSBlZGl0VGFza0R1ZS52YWx1ZTtcblx0XHR0YXNrQXJyYXkubm90ZXMgPSBlZGl0VGFza05vdGVzLnZhbHVlO1xuXHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0XHRzdG9yZShteUFycmF5KTtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fSk7XG59XG5cbmNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLW1vZGFsJyk7XG5cbmNvbnN0IGVkaXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJyk7XG5jb25zdCBlZGl0VGFza0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZHVlJyk7XG5jb25zdCBlZGl0VGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1ub3RlcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFZhbHVlcyhpdGVtKSB7XG5cdGVkaXRUYXNrVGl0bGUudmFsdWUgPSBpdGVtLnRpdGxlO1xuXHRlZGl0VGFza0R1ZS52YWx1ZSA9IGl0ZW0uZHVlO1xuXHRlZGl0VGFza05vdGVzLnZhbHVlID0gaXRlbS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpIHtcblx0ZWRpdFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZUVkaXRNb2RhbCgpIHtcblx0ZWRpdFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWRpdEZvcm1zKCkge1xuXHRlZGl0VGFza1RpdGxlLnZhbHVlID0gbnVsbDtcblx0ZWRpdFRhc2tEdWUudmFsdWUgPSBudWxsO1xuXHRlZGl0VGFza05vdGVzLnZhbHVlID0gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdFByb2plY3RUYXNrO1xuIiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tJZCkge1xuXHRkaXNwbGF5RWRpdFZhbHVlcyh0YXNrKTtcblx0ZGlzcGxheUVkaXRNb2RhbCgpO1xuXG5cdGNvbnN0IGNhbmNlbEVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWVkaXQtYnV0dG9uJyk7XG5cdGNhbmNlbEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRWRpdEZvcm1zKCk7XG5cdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHR9KTtcblxuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGxldCB0YXNrQXJyYXkgPSBteUFycmF5W3Rhc2tJZF0udGFza3M7XG5cblx0Y29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZWRpdC1idXR0b24nKTtcblx0Y3JlYXRlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0dGFza0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGVsZW1lbnQucHJvamVjdCA9IGVkaXRUaXRsZS52YWx1ZTtcblx0XHR9KTtcblx0XHRteUFycmF5W3Rhc2tJZF0udGl0bGUgPSBlZGl0VGl0bGUudmFsdWU7XG5cdFx0bXlBcnJheVt0YXNrSWRdLmR1ZSA9IGVkaXREdWUudmFsdWU7XG5cdFx0bXlBcnJheVt0YXNrSWRdLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlO1xuXHRcdGNsZWFyQ29udGVudCgpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0XHRzdG9yZShteUFycmF5KTtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fSk7XG59XG5cbmNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW1vZGFsJyk7XG5cbmNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XG5jb25zdCBlZGl0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlJyk7XG5jb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFZhbHVlcyh0YXNrKSB7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG5cdGVkaXREdWUudmFsdWUgPSB0YXNrLmR1ZTtcblx0ZWRpdE5vdGVzLnZhbHVlID0gdGFzay5ub3Rlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpIHtcblx0ZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlRWRpdE1vZGFsKCkge1xuXHRlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRGb3JtcygpIHtcblx0ZWRpdFRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZWRpdER1ZS52YWx1ZSA9IG51bGw7XG5cdGVkaXROb3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUYXNrO1xuIiwiZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUFycmF5JykpO1xuXHRpZiAobXlBcnJheSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBteUFycmF5O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFycmF5O1xuIiwiaW1wb3J0IHNlbGVjdFRhc2sgZnJvbSAnLi9zZWxlY3QtdGFzayc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2NyZWF0ZS1wcm9qZWN0JztcblxuZnVuY3Rpb24gbG9hZE1vZGFsKCkge1xuXHRkaXNwbGF5TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWJ1dHRvbicpO1xuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHR9KTtcbn1cblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAnZGVmYXVsdCcpIHtcblx0XHRhbGVydCgnUGxlYXNlIFNlbGVjdCBUeXBlJyk7XG5cdH0gZWxzZSB7XG5cdFx0Y2hvb3NlVHlwZSgpO1xuXHR9XG59KTtcblxuY29uc3Qgc2VsZWN0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5cbnNlbGVjdFR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ3Rhc2snKSB7XG5cdFx0ZGlzcGxheVNlbGVjdFByb2plY3QoKTtcblx0fVxuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ3Byb2plY3QnKSB7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIGNob29zZVR5cGUoKSB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAndGFzaycpIHtcblx0XHRzZWxlY3RUYXNrKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y3JlYXRlUHJvamVjdCgpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9XG59XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2VsZWN0UHJvamVjdCgpIHtcblx0c2VsZWN0UHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZVNlbGVjdFByb2plY3QoKSB7XG5cdHNlbGVjdFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcblx0c2VsZWN0VHlwZS5zZWxlY3RlZEluZGV4ID0gMDtcblx0c2VsZWN0UHJvamVjdC5zZWxlY3RlZEluZGV4ID0gMDtcblx0dGl0bGUudmFsdWUgPSBudWxsO1xuXHRkdWUudmFsdWUgPSBudWxsO1xuXHRub3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNb2RhbDtcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLXRhc2snO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVwZGF0ZVNlbGVjdGlvbnMgZnJvbSAnLi91cGRhdGUtc2VsZWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKG15QXJyYXkpIHtcblx0Y29uc3Qgc2VsZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuXHRzZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcblxuXHRteUFycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdFx0aWYgKHRhc2sudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG5cdFx0XHR1cGRhdGVTZWxlY3Rpb25zKHRhc2sudGl0bGUpO1xuXHRcdH1cblx0fSk7XG5cdHN0b3JlKG15QXJyYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImltcG9ydCBsb2FkVWkgZnJvbSAnLi9sb2FkLXVpJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuXG5mdW5jdGlvbiBsb2FkU2l0ZSgpIHtcblx0Y29uc3QgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGlmIChteUFycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fVxuXHRsb2FkVWkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNpdGU7XG4iLCJpbXBvcnQgbG9hZE1vZGFsIGZyb20gJy4vbG9hZC1tb2RhbCc7XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcblx0Y29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1idXR0b24nKTtcblx0aGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRsb2FkTW9kYWwoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRVaTtcbiIsImltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhc2soKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cdGNvbnN0IHRhc2sgPSBuZXdUYXNrKFxuXHRcdHR5cGUudmFsdWUsXG5cdFx0cHJvamVjdC52YWx1ZSxcblx0XHR0aXRsZS52YWx1ZSxcblx0XHRkdWUudmFsdWUsXG5cdFx0bm90ZXMudmFsdWVcblx0KTtcblxuXHRpZiAodGFzay5wcm9qZWN0ID09PSAnZGVmYXVsdCcgfHwgdGFzay5wcm9qZWN0ID09PSAnbm9uZScpIHtcblx0XHRteUFycmF5LnB1c2godGFzayk7XG5cdFx0Y29uc3QgaW5kZXggPSBteUFycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmogPT09IHRhc2spO1xuXHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRcdHN0b3JlKG15QXJyYXkpO1xuXHR9IGVsc2Uge1xuXHRcdG15QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQudGl0bGUgPT09IHRhc2sucHJvamVjdCkge1xuXHRcdFx0XHRlbGVtZW50LnRhc2tzLnB1c2godGFzayk7XG5cdFx0XHRcdHN0b3JlKG15QXJyYXkpO1xuXHRcdFx0XHRjbGVhckNvbnRlbnQoKTtcblx0XHRcdFx0bG9hZFBhZ2UobXlBcnJheSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5cbmNvbnN0IG5ld1Rhc2sgPSAodHlwZSwgcHJvamVjdCwgdGl0bGUsIGR1ZSwgbm90ZXMpID0+IHtcblx0cmV0dXJuIHsgdHlwZSwgcHJvamVjdCwgdGl0bGUsIGR1ZSwgbm90ZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdFRhc2s7XG4iLCJmdW5jdGlvbiBzdG9yZShteUFycmF5KSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUFycmF5JywgSlNPTi5zdHJpbmdpZnkobXlBcnJheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbnMocHJvamVjdCkge1xuXHRjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC1wcm9qZWN0Jyk7XG5cdGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0YWRkUHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdC1vcHRpb24nO1xuXHRhZGRQcm9qZWN0LnRleHQgPSBwcm9qZWN0O1xuXHRzZWxlY3RQcm9qZWN0LmFkZChhZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlU2VsZWN0aW9ucztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vbG9hZC1zaXRlJztcblxubG9hZFNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==