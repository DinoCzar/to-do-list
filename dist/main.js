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

	const taskArray = task.tasks;

	if (taskArray.length > 0) {
		taskArray.forEach((item) => {
			const itemId = task.id;

			const projectTaskDiv = document.createElement('div');
			projectTaskDiv.classList.add('project-task-div');
			projectTaskDiv.setAttribute('id', item.id);
			addTasksDiv.appendChild(projectTaskDiv);

			const title = document.createElement('div');
			title.classList.add('task-title');
			title.textContent = item.title;
			projectTaskDiv.appendChild(title);

			const due = document.createElement('div');
			due.classList.add('task-due');
			due.textContent = 'Due: ' + item.due;
			projectTaskDiv.appendChild(due);

			const expandTask = document.createElement('div');
			expandTask.classList.add('expand-task');
			projectTaskDiv.appendChild(expandTask);

			const notes = document.createElement('div');
			notes.classList.add('task-notes');
			notes.textContent = 'Notes: ' + item.notes;
			expandTask.appendChild(notes);

			const editButton = document.createElement('button');
			editButton.classList.add('edit-button');
			editButton.textContent = 'Edit';
			expandTask.appendChild(editButton);
			editButton.addEventListener('click', (e) => {
				(0,_edit_task__WEBPACK_IMPORTED_MODULE_1__["default"])(item, itemId);
			});

			const deleteButton = document.createElement('button');
			deleteButton.classList.add('delete-button');
			deleteButton.textContent = 'Delete';
			expandTask.appendChild(deleteButton);
			deleteButton.addEventListener('click', (e) => {
				(0,_delete_task__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId);
			});

			const expandDiv = document.createElement('div');
			expandDiv.classList.add('expand-div');
			projectTaskDiv.appendChild(expandDiv);

			const expandButton = document.createElement('button');
			expandButton.classList.add('expand-button');
			expandButton.textContent = '...';
			expandDiv.appendChild(expandButton);
			expandButton.addEventListener('click', (e) => {
				expandTask.style.display = 'grid';
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

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-modal */ "./src/load-modal.js");
/* harmony import */ var _delete_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-task */ "./src/delete-task.js");



function editTask(task, taskId) {
	const editTitle = document.getElementById('title');
	const editDue = document.getElementById('due');
	const editNotes = document.getElementById('notes');
	editTitle.value = task.title;
	editDue.value = task.due;
	editNotes.value = task.notes;
	(0,_load_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_delete_task__WEBPACK_IMPORTED_MODULE_1__["default"])(taskId);
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

	addProject.value = project;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbGVhci1jb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0LWFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtc2l0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtdWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZWxlY3QtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXBkYXRlLXNlbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuXHRjb25zdCBkb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRpdicpO1xuXHRkb21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDtcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLXRhc2snO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB1cGRhdGVTZWxlY3Rpb25zIGZyb20gJy4vdXBkYXRlLXNlbGVjdGlvbnMnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGlmICghbXlBcnJheSkge1xuXHRcdG15QXJyYXkgPSBbXTtcblx0fVxuXHRjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChcblx0XHR0eXBlLnZhbHVlLFxuXHRcdHRpdGxlLnZhbHVlLFxuXHRcdGR1ZS52YWx1ZSxcblx0XHRub3Rlcy52YWx1ZSxcblx0XHR0YXNrc1xuXHQpO1xuXHRteUFycmF5LnB1c2gocHJvamVjdCk7XG5cdGNvbnN0IGluZGV4ID0gbXlBcnJheS5maW5kSW5kZXgoKG9iaikgPT4gb2JqID09PSBwcm9qZWN0KTtcblx0Y3JlYXRlVGFzayhwcm9qZWN0LCBpbmRleCk7XG5cdHN0b3JlKG15QXJyYXkpO1xuXHR1cGRhdGVTZWxlY3Rpb25zKHRpdGxlLnZhbHVlKTtcbn1cblxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5cbmNvbnN0IHRhc2tzID0gW107XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAodHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzKSA9PiB7XG5cdHJldHVybiB7IHR5cGUsIHRpdGxlLCBkdWUsIG5vdGVzLCB0YXNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlLXRhc2snO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gJy4vZWRpdC10YXNrJztcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBpbmRleCkge1xuXHR0YXNrLmlkID0gaW5kZXg7XG5cdGNvbnN0IHRhc2tJZCA9IHRhc2suaWQ7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cdHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2suaWQpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZHVlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlJyk7XG5cdGR1ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyB0YXNrLmR1ZTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChkdWUpO1xuXG5cdGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kVGFzay5jbGFzc0xpc3QuYWRkKCdleHBhbmQtdGFzaycpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRhc2spO1xuXG5cdGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG5vdGVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZXMnKTtcblx0bm90ZXMudGV4dENvbnRlbnQgPSAnTm90ZXM6ICcgKyB0YXNrLm5vdGVzO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKG5vdGVzKTtcblxuXHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0ZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZWRpdFRhc2sodGFzaywgdGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZGVsZXRlVGFzayh0YXNrSWQpO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmREaXYpO1xuXG5cdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnLi4uJztcblx0ZXhwYW5kRGl2LmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cdGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXHR9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGFkZFRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrcy1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrc0Rpdik7XG5cblx0Y29uc3QgdGFza0FycmF5ID0gdGFzay50YXNrcztcblxuXHRpZiAodGFza0FycmF5Lmxlbmd0aCA+IDApIHtcblx0XHR0YXNrQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbUlkID0gdGFzay5pZDtcblxuXHRcdFx0Y29uc3QgcHJvamVjdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1kaXYnKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpdGVtLmlkKTtcblx0XHRcdGFkZFRhc2tzRGl2LmFwcGVuZENoaWxkKHByb2plY3RUYXNrRGl2KTtcblxuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRcdFx0Y29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcblx0XHRcdGR1ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyBpdGVtLmR1ZTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cblx0XHRcdGNvbnN0IGV4cGFuZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGV4cGFuZFRhc2suY2xhc3NMaXN0LmFkZCgnZXhwYW5kLXRhc2snKTtcblx0XHRcdHByb2plY3RUYXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRhc2spO1xuXG5cdFx0XHRjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0bm90ZXMuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xuXHRcdFx0bm90ZXMudGV4dENvbnRlbnQgPSAnTm90ZXM6ICcgKyBpdGVtLm5vdGVzO1xuXHRcdFx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChub3Rlcyk7XG5cblx0XHRcdGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0XHRcdGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdFx0XHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXHRcdFx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGVkaXRUYXNrKGl0ZW0sIGl0ZW1JZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRcdFx0ZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cdFx0XHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cdFx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRkZWxldGVUYXNrKGl0ZW1JZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgZXhwYW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRleHBhbmREaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWRpdicpO1xuXHRcdFx0cHJvamVjdFRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kRGl2KTtcblxuXHRcdFx0Y29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRcdFx0ZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gJy4uLic7XG5cdFx0XHRleHBhbmREaXYuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblx0XHRcdGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bXlBcnJheS5zcGxpY2UoaWQsIDEpO1xuXHRjbGVhckNvbnRlbnQoKTtcblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7XG4iLCJpbXBvcnQgbG9hZE1vZGFsIGZyb20gJy4vbG9hZC1tb2RhbCc7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuL2RlbGV0ZS10YXNrJztcblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgdGFza0lkKSB7XG5cdGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuXHRjb25zdCBlZGl0RHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZScpO1xuXHRjb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcblx0ZWRpdFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcblx0ZWRpdER1ZS52YWx1ZSA9IHRhc2suZHVlO1xuXHRlZGl0Tm90ZXMudmFsdWUgPSB0YXNrLm5vdGVzO1xuXHRsb2FkTW9kYWwoKTtcblx0ZGVsZXRlVGFzayh0YXNrSWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0VGFzaztcbiIsImZ1bmN0aW9uIGdldEFycmF5KCkge1xuXHRjb25zdCBteUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlBcnJheScpKTtcblx0aWYgKG15QXJyYXkgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gbXlBcnJheTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBcnJheTtcbiIsImltcG9ydCBzZWxlY3RUYXNrIGZyb20gJy4vc2VsZWN0LXRhc2snO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGUtcHJvamVjdCc7XG5cbmZ1bmN0aW9uIGxvYWRNb2RhbCgpIHtcblx0ZGlzcGxheU1vZGFsKCk7XG5cblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1idXR0b24nKTtcblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckZvcm1zKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0fSk7XG59XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnV0dG9uJyk7XG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ2RlZmF1bHQnKSB7XG5cdFx0YWxlcnQoJ1BsZWFzZSBTZWxlY3QgVHlwZScpO1xuXHR9IGVsc2Uge1xuXHRcdGNob29zZVR5cGUoKTtcblx0fVxufSk7XG5cbmNvbnN0IHNlbGVjdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpO1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuXG5zZWxlY3RUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJykge1xuXHRcdGRpc3BsYXlTZWxlY3RQcm9qZWN0KCk7XG5cdH1cblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICdwcm9qZWN0Jykge1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBjaG9vc2VUeXBlKCkge1xuXHRpZiAoc2VsZWN0VHlwZS52YWx1ZSA9PT0gJ3Rhc2snKSB7XG5cdFx0c2VsZWN0VGFzaygpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9IGVsc2Uge1xuXHRcdGNyZWF0ZVByb2plY3QoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0fVxufVxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNlbGVjdFByb2plY3QoKSB7XG5cdHNlbGVjdFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVTZWxlY3RQcm9qZWN0KCkge1xuXHRzZWxlY3RQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybXMoKSB7XG5cdHNlbGVjdFR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHNlbGVjdFByb2plY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZHVlLnZhbHVlID0gbnVsbDtcblx0bm90ZXMudmFsdWUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTW9kYWw7XG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB1cGRhdGVTZWxlY3Rpb25zIGZyb20gJy4vdXBkYXRlLXNlbGVjdGlvbnMnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZShteUFycmF5KSB7XG5cdG15QXJyYXkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcblx0XHRjcmVhdGVUYXNrKHRhc2ssIGluZGV4KTtcblx0XHRpZiAodGFzay50eXBlID09PSAncHJvamVjdCcpIHtcblx0XHRcdHVwZGF0ZVNlbGVjdGlvbnModGFzay50aXRsZSk7XG5cdFx0fVxuXHR9KTtcblx0c3RvcmUobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiaW1wb3J0IGxvYWRVaSBmcm9tICcuL2xvYWQtdWknO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5cbmZ1bmN0aW9uIGxvYWRTaXRlKCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKG15QXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHR9XG5cdGxvYWRVaSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2l0ZTtcbiIsImltcG9ydCBsb2FkTW9kYWwgZnJvbSAnLi9sb2FkLW1vZGFsJztcblxuZnVuY3Rpb24gbG9hZFVpKCkge1xuXHRjb25zdCBoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyLWJ1dHRvbicpO1xuXHRoZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGxvYWRNb2RhbCgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFVpO1xuIiwiaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLXRhc2snO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhci1jb250ZW50JztcblxuZnVuY3Rpb24gc2VsZWN0VGFzaygpIHtcblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAoIW15QXJyYXkpIHtcblx0XHRteUFycmF5ID0gW107XG5cdH1cblx0Y29uc3QgdGFzayA9IG5ld1Rhc2soXG5cdFx0dHlwZS52YWx1ZSxcblx0XHRwcm9qZWN0LnZhbHVlLFxuXHRcdHRpdGxlLnZhbHVlLFxuXHRcdGR1ZS52YWx1ZSxcblx0XHRub3Rlcy52YWx1ZVxuXHQpO1xuXHRpZiAodGFzay5wcm9qZWN0ID09PSAnZGVmYXVsdCcgfHwgdGFzay5wcm9qZWN0ID09PSAnbm9uZScpIHtcblx0XHRteUFycmF5LnB1c2godGFzayk7XG5cdFx0Y29uc3QgaW5kZXggPSBteUFycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmogPT09IHRhc2spO1xuXHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRcdHN0b3JlKG15QXJyYXkpO1xuXHR9IGVsc2Uge1xuXHRcdG15QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQudGl0bGUgPT09IHRhc2sucHJvamVjdCkge1xuXHRcdFx0XHRlbGVtZW50LnRhc2tzLnB1c2godGFzayk7XG5cdFx0XHRcdHN0b3JlKG15QXJyYXkpO1xuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuXHRcdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuY29uc3QgbmV3VGFzayA9ICh0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcykgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0VGFzaztcbiIsImZ1bmN0aW9uIHN0b3JlKG15QXJyYXkpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215QXJyYXknLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9ucyhwcm9qZWN0KSB7XG5cdGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblx0Y29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG5cdGFkZFByb2plY3QudmFsdWUgPSBwcm9qZWN0O1xuXHRhZGRQcm9qZWN0LnRleHQgPSBwcm9qZWN0O1xuXHRzZWxlY3RQcm9qZWN0LmFkZChhZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlU2VsZWN0aW9ucztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vbG9hZC1zaXRlJztcblxubG9hZFNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==