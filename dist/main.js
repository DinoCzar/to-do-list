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
    console.log(myArray)
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

	const type = document.createElement('div');
	type.classList.add('task-type');
	type.textContent = task.type;
	taskDiv.appendChild(type);

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

    myArray.sort(function(a, b) {
        return Date.parse(a.due) - Date.parse(b.due);
      });

	myArray.forEach((task, index) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsc0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsZWFyLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLXByb2plY3QtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLW1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1zaXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC11aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91cGRhdGUtc2VsZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG5cdGNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGl2Jyk7XG5cdGRvbUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50O1xuIiwiaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgdXBkYXRlU2VsZWN0aW9ucyBmcm9tICcuL3VwZGF0ZS1zZWxlY3Rpb25zJztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAoIW15QXJyYXkpIHtcblx0XHRteUFycmF5ID0gW107XG5cdH1cblxuXHRjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChcblx0XHRjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZS52YWx1ZSksXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0ZHVlLnZhbHVlLFxuXHRcdG5vdGVzLnZhbHVlLFxuXHRcdHRhc2tzXG5cdCk7XG5cdG15QXJyYXkucHVzaChwcm9qZWN0KTtcblx0c3RvcmUobXlBcnJheSk7XG5cdHVwZGF0ZVNlbGVjdGlvbnModGl0bGUudmFsdWUpO1xuICAgIGNsZWFyQ29udGVudCgpO1xuXHRsb2FkUGFnZShteUFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhteUFycmF5KVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG5cdHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpO1xuY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZScpO1xuY29uc3QgdGFza3MgPSBbXTtcblxuY29uc3QgbmV3UHJvamVjdCA9ICh0eXBlLCB0aXRsZSwgZHVlLCBub3RlcywgdGFza3MpID0+IHtcblx0cmV0dXJuIHsgdHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGUtdGFzayc7XG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9lZGl0LXRhc2snO1xuaW1wb3J0IGVkaXRQcm9qZWN0VGFzayBmcm9tICcuL2VkaXQtcHJvamVjdC10YXNrJztcbmltcG9ydCBkZWxldGVQcm9qZWN0VGFzayBmcm9tICcuL2RlbGV0ZS1wcm9qZWN0LXRhc2snO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIGluZGV4KSB7XG5cdHRhc2suaWQgPSBpbmRleDtcblx0Y29uc3QgdGFza0lkID0gdGFzay5pZDtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcblx0dGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzay5pZCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cblx0Y29uc3QgdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0eXBlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdHlwZScpO1xuXHR0eXBlLnRleHRDb250ZW50ID0gdGFzay50eXBlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKHR5cGUpO1xuXG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZHVlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlJyk7XG5cdGR1ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyB0YXNrLmR1ZTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChkdWUpO1xuXG5cdGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kVGFzay5jbGFzc0xpc3QuYWRkKCdleHBhbmQtdGFzaycpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRhc2spO1xuXG5cdGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG5vdGVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZXMnKTtcblx0bm90ZXMudGV4dENvbnRlbnQgPSAnTm90ZXM6ICcgKyB0YXNrLm5vdGVzO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKG5vdGVzKTtcblxuXHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0ZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZWRpdFRhc2sodGFzaywgdGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZGVsZXRlVGFzayh0YXNrSWQpO1xuXHR9KTtcblxuXHRjb25zdCBhZGRUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRhZGRUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFza3MtZGl2Jyk7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza3NEaXYpO1xuXG5cdGNvbnN0IGV4cGFuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRleHBhbmREaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWRpdicpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZERpdik7XG5cblx0Y29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnV0dG9uJyk7XG5cdGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICcuIC4gLic7XG5cdGV4cGFuZERpdi5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXHRleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChleHBhbmRUYXNrLnN0eWxlLmRpc3BsYXkgPT09ICdncmlkJykge1xuXHRcdFx0ZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH0gZWxzZSBpZiAoKGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJykpIHtcblx0XHRcdGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblx0XHR9XG5cdH0pO1xuXG5cdGxldCB0YXNrQXJyYXkgPSB0YXNrLnRhc2tzO1xuXG5cdGlmICh0YXNrQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHRhc2tBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBpdGVtSWQgPSB0YXNrQXJyYXkuaW5kZXhPZihpdGVtKTtcblxuXHRcdFx0Y29uc3QgcHJvamVjdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1kaXYnKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLmlkKTtcblx0XHRcdGFkZFRhc2tzRGl2LmFwcGVuZENoaWxkKHByb2plY3RUYXNrRGl2KTtcblxuXHRcdFx0Y29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRhc2tUeXBlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay10eXBlJyk7XG5cdFx0XHR0YXNrVHlwZS50ZXh0Q29udGVudCA9IGl0ZW0udHlwZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUeXBlKTtcblxuXHRcdFx0Y29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLXRpdGxlJyk7XG5cdFx0XHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuXHRcdFx0Y29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza0R1ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stZHVlJyk7XG5cdFx0XHR0YXNrRHVlLnRleHRDb250ZW50ID0gJ0R1ZTogJyArIGl0ZW0uZHVlO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG5cblx0XHRcdGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGFza05vdGVzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1ub3RlcycpO1xuXHRcdFx0dGFza05vdGVzLnRleHRDb250ZW50ID0gJ05vdGVzOiAnICsgaXRlbS5ub3Rlcztcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XG5cblx0XHRcdGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtYnV0dG9uJyk7XG5cdFx0XHRlZGl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrQnV0dG9uKTtcblx0XHRcdGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZWRpdFByb2plY3RUYXNrKGl0ZW0sIHRhc2tJZCwgaXRlbUlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWJ1dHRvbicpO1xuXHRcdFx0ZGVsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cdFx0XHRkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZGVsZXRlUHJvamVjdFRhc2sodGFza0lkLCBpdGVtSWQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0VGFzayhwcm9qZWN0SWQsIHRhc2tJZCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bXlBcnJheVtwcm9qZWN0SWRdLnRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xuXHRjbGVhckNvbnRlbnQoKTtcblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVByb2plY3RUYXNrOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRteUFycmF5LnNwbGljZShpZCwgMSk7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRsb2FkUGFnZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVGFzaztcbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5mdW5jdGlvbiBlZGl0UHJvamVjdFRhc2soaXRlbSwgdGFza0lkLCBpdGVtSWQpIHtcblx0ZGlzcGxheUVkaXRWYWx1ZXMoaXRlbSk7XG5cdGRpc3BsYXlFZGl0TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10YXNrLWJ1dHRvbicpO1xuXHRjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckVkaXRGb3JtcygpO1xuXHRcdGhpZGVFZGl0TW9kYWwoKTtcblx0fSk7XG5cblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRsZXQgdGFza0FycmF5ID0gbXlBcnJheVt0YXNrSWRdLnRhc2tzW2l0ZW1JZF07XG5cblx0Y29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stYnV0dG9uJyk7XG5cdGNyZWF0ZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGlmIChlZGl0VGFza1RpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG5cdFx0XHRhbGVydCgnVGl0bGUgZXhjZWVkcyBtYXhpbXVtIGNoYXJhY3RlciBsaW1pdCBvZiAzMCBjaGFyYWN0ZXJzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhc2tBcnJheS50aXRsZSA9IGVkaXRUYXNrVGl0bGUudmFsdWU7XG5cdFx0XHR0YXNrQXJyYXkuZHVlID0gZWRpdFRhc2tEdWUudmFsdWU7XG5cdFx0XHR0YXNrQXJyYXkubm90ZXMgPSBlZGl0VGFza05vdGVzLnZhbHVlO1xuXHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRoaWRlRWRpdE1vZGFsKCk7XG5cdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRcdH1cblx0fSk7XG59XG5cbmNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLW1vZGFsJyk7XG5cbmNvbnN0IGVkaXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJyk7XG5jb25zdCBlZGl0VGFza0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZHVlJyk7XG5jb25zdCBlZGl0VGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1ub3RlcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFZhbHVlcyhpdGVtKSB7XG5cdGVkaXRUYXNrVGl0bGUudmFsdWUgPSBpdGVtLnRpdGxlO1xuXHRlZGl0VGFza0R1ZS52YWx1ZSA9IGl0ZW0uZHVlO1xuXHRlZGl0VGFza05vdGVzLnZhbHVlID0gaXRlbS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpIHtcblx0ZWRpdFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZUVkaXRNb2RhbCgpIHtcblx0ZWRpdFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWRpdEZvcm1zKCkge1xuXHRlZGl0VGFza1RpdGxlLnZhbHVlID0gbnVsbDtcblx0ZWRpdFRhc2tEdWUudmFsdWUgPSBudWxsO1xuXHRlZGl0VGFza05vdGVzLnZhbHVlID0gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdFByb2plY3RUYXNrO1xuIiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyLWNvbnRlbnQnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tJZCkge1xuXHRkaXNwbGF5RWRpdFZhbHVlcyh0YXNrKTtcblx0ZGlzcGxheUVkaXRNb2RhbCgpO1xuXG5cdGNvbnN0IGNhbmNlbEVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWVkaXQtYnV0dG9uJyk7XG5cdGNhbmNlbEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRWRpdEZvcm1zKCk7XG5cdFx0aGlkZUVkaXRNb2RhbCgpO1xuXHR9KTtcblxuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGxldCB0YXNrQXJyYXkgPSBteUFycmF5W3Rhc2tJZF0udGFza3M7XG5cblx0Y29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZWRpdC1idXR0b24nKTtcblx0Y3JlYXRlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0aWYgKHRhc2tBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0YXNrQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnByb2plY3QgPSBlZGl0VGl0bGUudmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZWRpdFRpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG5cdFx0XHRhbGVydCgnVGl0bGUgZXhjZWVkcyBtYXhpbXVtIGNoYXJhY3RlciBsaW1pdCBvZiAzMCBjaGFyYWN0ZXJzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG15QXJyYXlbdGFza0lkXS50aXRsZSA9IGVkaXRUaXRsZS52YWx1ZTtcblx0XHRcdG15QXJyYXlbdGFza0lkXS5kdWUgPSBlZGl0RHVlLnZhbHVlO1xuXHRcdFx0bXlBcnJheVt0YXNrSWRdLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlO1xuXHRcdFx0Y2xlYXJDb250ZW50KCk7XG5cdFx0XHRoaWRlRWRpdE1vZGFsKCk7XG5cdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHRcdH1cblx0fSk7XG59XG5cbmNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW1vZGFsJyk7XG5cbmNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XG5jb25zdCBlZGl0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlJyk7XG5jb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFZhbHVlcyh0YXNrKSB7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG5cdGVkaXREdWUudmFsdWUgPSB0YXNrLmR1ZTtcblx0ZWRpdE5vdGVzLnZhbHVlID0gdGFzay5ub3Rlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRNb2RhbCgpIHtcblx0ZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlRWRpdE1vZGFsKCkge1xuXHRlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckVkaXRGb3JtcygpIHtcblx0ZWRpdFRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZWRpdER1ZS52YWx1ZSA9IG51bGw7XG5cdGVkaXROb3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUYXNrO1xuIiwiZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUFycmF5JykpO1xuXHRpZiAobXlBcnJheSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBteUFycmF5O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFycmF5O1xuIiwiaW1wb3J0IHNlbGVjdFRhc2sgZnJvbSAnLi9zZWxlY3QtdGFzayc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2NyZWF0ZS1wcm9qZWN0JztcblxuZnVuY3Rpb24gbG9hZE1vZGFsKCkge1xuXHRkaXNwbGF5TW9kYWwoKTtcblxuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWJ1dHRvbicpO1xuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHR9KTtcbn1cblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAnZGVmYXVsdCcpIHtcblx0XHRhbGVydCgnUGxlYXNlIFNlbGVjdCBUeXBlJyk7XG5cdH0gZWxzZSBpZih0aXRsZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBFbnRlciBhIFRpdGxlJylcbiAgICB9IGVsc2UgaWYgKHRpdGxlLnZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgIGFsZXJ0KCdUaXRsZSBleGNlZWRzIG1heGltdW0gY2hhcmFjdGVyIGxpbWl0IG9mIDMwIGNoYXJhY3RlcnMnKTtcbiAgICB9IGVsc2Uge1xuXHRcdGNob29zZVR5cGUoKTtcblx0fVxufSk7XG5cbmNvbnN0IHNlbGVjdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpO1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuXG5zZWxlY3RUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJyB8fCBzZWxlY3RUeXBlLnZhbHVlID09PSAnVGFzaycpIHtcblx0XHRkaXNwbGF5U2VsZWN0UHJvamVjdCgpO1xuXHR9XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAncHJvamVjdCcgfHwgc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ1Byb2plY3QnKSB7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIGNob29zZVR5cGUoKSB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAndGFzaycpIHtcblx0XHRzZWxlY3RUYXNrKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y3JlYXRlUHJvamVjdCgpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9XG59XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2VsZWN0UHJvamVjdCgpIHtcblx0c2VsZWN0UHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZVNlbGVjdFByb2plY3QoKSB7XG5cdHNlbGVjdFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcblx0c2VsZWN0VHlwZS5zZWxlY3RlZEluZGV4ID0gMDtcblx0c2VsZWN0UHJvamVjdC5zZWxlY3RlZEluZGV4ID0gMDtcblx0dGl0bGUudmFsdWUgPSBudWxsO1xuXHRkdWUudmFsdWUgPSBudWxsO1xuXHRub3Rlcy52YWx1ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNb2RhbDtcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLXRhc2snO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVwZGF0ZVNlbGVjdGlvbnMgZnJvbSAnLi91cGRhdGUtc2VsZWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKG15QXJyYXkpIHtcblx0Y29uc3Qgc2VsZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuXHRzZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcblxuICAgIG15QXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBEYXRlLnBhcnNlKGEuZHVlKSAtIERhdGUucGFyc2UoYi5kdWUpO1xuICAgICAgfSk7XG5cblx0bXlBcnJheS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRcdGlmICh0YXNrLnR5cGUgPT09ICdQcm9qZWN0Jykge1xuXHRcdFx0dXBkYXRlU2VsZWN0aW9ucyh0YXNrLnRpdGxlKTtcblx0XHR9XG5cdH0pO1xuXHRzdG9yZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgbG9hZFVpIGZyb20gJy4vbG9hZC11aSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcblxuZnVuY3Rpb24gbG9hZFNpdGUoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAobXlBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG15QXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShhLmR1ZSkgLSBEYXRlLnBhcnNlKGIuZHVlKTtcbiAgICAgICAgICB9KTtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fVxuXHRsb2FkVWkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNpdGU7XG4iLCJpbXBvcnQgbG9hZE1vZGFsIGZyb20gJy4vbG9hZC1tb2RhbCc7XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcblx0Y29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1idXR0b24nKTtcblx0aGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRsb2FkTW9kYWwoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRVaTtcbiIsImltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXItY29udGVudCc7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhc2soKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cblx0Y29uc3QgdGFzayA9IG5ld1Rhc2soXG5cdFx0Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUudmFsdWUpLFxuXHRcdHByb2plY3QudmFsdWUsXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0ZHVlLnZhbHVlLFxuXHRcdG5vdGVzLnZhbHVlXG5cdCk7XG5cblx0aWYgKHRhc2sucHJvamVjdCA9PT0gJ2RlZmF1bHQnIHx8IHRhc2sucHJvamVjdCA9PT0gJ25vbmUnKSB7XG5cdFx0bXlBcnJheS5wdXNoKHRhc2spO1xuXHRcdGNvbnN0IGluZGV4ID0gbXlBcnJheS5maW5kSW5kZXgoKG9iaikgPT4gb2JqID09PSB0YXNrKTtcblx0XHRjcmVhdGVUYXNrKHRhc2ssIGluZGV4KTtcblx0XHRteUFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiBEYXRlLnBhcnNlKGEuZHVlKSAtIERhdGUucGFyc2UoYi5kdWUpO1xuXHRcdH0pO1xuXHRcdHN0b3JlKG15QXJyYXkpO1xuXHR9IGVsc2Uge1xuXHRcdG15QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQudGl0bGUgPT09IHRhc2sucHJvamVjdCkge1xuXHRcdFx0XHRlbGVtZW50LnRhc2tzLnB1c2godGFzayk7XG5cdFx0XHRcdHN0b3JlKG15QXJyYXkpO1xuXHRcdFx0XHRjbGVhckNvbnRlbnQoKTtcblx0XHRcdFx0bG9hZFBhZ2UobXlBcnJheSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuXHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuY29uc3QgbmV3VGFzayA9ICh0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcykgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0VGFzaztcbiIsImZ1bmN0aW9uIHN0b3JlKG15QXJyYXkpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215QXJyYXknLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9ucyhwcm9qZWN0KSB7XG5cdGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblx0Y29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRhZGRQcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LW9wdGlvbic7XG5cdGFkZFByb2plY3QudGV4dCA9IHByb2plY3Q7XG5cdHNlbGVjdFByb2plY3QuYWRkKGFkZFByb2plY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVTZWxlY3Rpb25zO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFNpdGUgZnJvbSAnLi9sb2FkLXNpdGUnO1xuXG5sb2FkU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9