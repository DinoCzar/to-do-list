/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    const element = 'none';
	(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(project, index, element);
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



function createTask(task, index, element) {
	task.id = index;

	const content = document.querySelector('#content');
	const taskDiv = document.createElement('div');

	taskDiv.classList.add('task-div');
	taskDiv.setAttribute('id', task.id);

	if (element === 'none') {
		content.appendChild(taskDiv);
	} else {
		console.log(element);
		content.appendChild(taskDiv);
	}

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

	const taskId = task.id;

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



function deleteTask(id) {
	const myArray = (0,_get_array__WEBPACK_IMPORTED_MODULE_1__["default"])();
	myArray.splice(id, 1);

	const clearContent = document.querySelectorAll('.task-div');
	clearContent.forEach(function (element) {
		element.remove();
	});

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
		if (task.tasks.length > 0) {
			task.tasks.forEach((task, index) => {
				(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task, index);
			});
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
		const element = 'none';
		myArray.push(task);
		const index = myArray.findIndex((obj) => obj === task);
		(0,_create_task__WEBPACK_IMPORTED_MODULE_1__["default"])(task, index, element);
		(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
	} else {
		myArray.forEach((element) => {
			if (element.title === task.project) {
				element.tasks.push(task);
				const index = element.tasks.findIndex((obj) => obj === task);
				(0,_create_task__WEBPACK_IMPORTED_MODULE_1__["default"])(task, index, element);
				(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
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
	addProject.value = project;
	addProject.text = project;
	selectProject.add(addProject);
}

const selectProject = document.querySelector('#select-project');
const addProject = document.createElement('option');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1RhO0FBQ0k7QUFDWDs7QUFFNUI7QUFDQSxlQUFlLHNEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1osRUFBRSxrREFBSztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVU7QUFDZCxJQUFJLGtEQUFLO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekMxQjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7O1VDVGhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLW1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1zaXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC11aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91cGRhdGUtc2VsZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgdXBkYXRlU2VsZWN0aW9ucyBmcm9tICcuL3VwZGF0ZS1zZWxlY3Rpb25zJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcblx0bGV0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAoIW15QXJyYXkpIHtcblx0XHRteUFycmF5ID0gW107XG5cdH1cblx0Y29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QoXG5cdFx0dHlwZS52YWx1ZSxcblx0XHR0aXRsZS52YWx1ZSxcblx0XHRkdWUudmFsdWUsXG5cdFx0bm90ZXMudmFsdWUsXG5cdFx0dGFza3Ncblx0KTtcblx0bXlBcnJheS5wdXNoKHByb2plY3QpO1xuXHRjb25zdCBpbmRleCA9IG15QXJyYXkuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gcHJvamVjdCk7XG4gICAgY29uc3QgZWxlbWVudCA9ICdub25lJztcblx0Y3JlYXRlVGFzayhwcm9qZWN0LCBpbmRleCwgZWxlbWVudCk7XG5cdHN0b3JlKG15QXJyYXkpO1xuXHR1cGRhdGVTZWxlY3Rpb25zKHRpdGxlLnZhbHVlKTtcbn1cblxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJyk7XG5cbmNvbnN0IHRhc2tzID0gW107XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAodHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzKSA9PiB7XG5cdHJldHVybiB7IHR5cGUsIHRpdGxlLCBkdWUsIG5vdGVzLCB0YXNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlLXRhc2snO1xuaW1wb3J0IGVkaXRUYXNrIGZyb20gJy4vZWRpdC10YXNrJztcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBpbmRleCwgZWxlbWVudCkge1xuXHR0YXNrLmlkID0gaW5kZXg7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cdGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHR0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cdHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2suaWQpO1xuXG5cdGlmIChlbGVtZW50ID09PSAnbm9uZScpIHtcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cdH1cblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0Y29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGR1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZScpO1xuXHRkdWUudGV4dENvbnRlbnQgPSAnRHVlOiAnICsgdGFzay5kdWU7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlKTtcblxuXHRjb25zdCBleHBhbmRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGV4cGFuZFRhc2suY2xhc3NMaXN0LmFkZCgnZXhwYW5kLXRhc2snKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUYXNrKTtcblxuXHRjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRub3Rlcy5jbGFzc0xpc3QuYWRkKCd0YXNrLW5vdGVzJyk7XG5cdG5vdGVzLnRleHRDb250ZW50ID0gJ05vdGVzOiAnICsgdGFzay5ub3Rlcztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChub3Rlcyk7XG5cblx0Y29uc3QgdGFza0lkID0gdGFzay5pZDtcblxuXHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcblx0ZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZWRpdFRhc2sodGFzaywgdGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cdGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXHRleHBhbmRUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZGVsZXRlVGFzayh0YXNrSWQpO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZXhwYW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1kaXYnKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmREaXYpO1xuXG5cdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ1dHRvbicpO1xuXHRleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnLi4uJztcblx0ZXhwYW5kRGl2LmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cdGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZXhwYW5kVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRteUFycmF5LnNwbGljZShpZCwgMSk7XG5cblx0Y29uc3QgY2xlYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGl2Jyk7XG5cdGNsZWFyQ29udGVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG5cblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7IiwiaW1wb3J0IGxvYWRNb2RhbCBmcm9tICcuL2xvYWQtbW9kYWwnO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGUtdGFzayc7XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tJZCkge1xuXHRjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcblx0Y29uc3QgZWRpdER1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKTtcblx0Y29uc3QgZWRpdE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJyk7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG5cdGVkaXREdWUudmFsdWUgPSB0YXNrLmR1ZTtcblx0ZWRpdE5vdGVzLnZhbHVlID0gdGFzay5ub3Rlcztcblx0bG9hZE1vZGFsKCk7XG5cdGRlbGV0ZVRhc2sodGFza0lkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdFRhc2s7XG4iLCJmdW5jdGlvbiBnZXRBcnJheSgpIHtcblx0Y29uc3QgbXlBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215QXJyYXknKSk7XG5cdGlmIChteUFycmF5ICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIG15QXJyYXk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXJyYXk7XG4iLCJpbXBvcnQgc2VsZWN0VGFzayBmcm9tICcuL3NlbGVjdC10YXNrJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vY3JlYXRlLXByb2plY3QnO1xuXG5mdW5jdGlvbiBsb2FkTW9kYWwoKSB7XG5cdGRpc3BsYXlNb2RhbCgpO1xuXG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtYnV0dG9uJyk7XG5cdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdH0pO1xufVxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICdkZWZhdWx0Jykge1xuXHRcdGFsZXJ0KCdQbGVhc2UgU2VsZWN0IFR5cGUnKTtcblx0fSBlbHNlIHtcblx0XHRjaG9vc2VUeXBlKCk7XG5cdH1cbn0pO1xuXG5jb25zdCBzZWxlY3RUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuc2VsZWN0VHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAndGFzaycpIHtcblx0XHRkaXNwbGF5U2VsZWN0UHJvamVjdCgpO1xuXHR9XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAncHJvamVjdCcpIHtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gY2hvb3NlVHlwZSgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJykge1xuXHRcdHNlbGVjdFRhc2soKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0fSBlbHNlIHtcblx0XHRjcmVhdGVQcm9qZWN0KCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH1cbn1cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZWxlY3RQcm9qZWN0KCkge1xuXHRzZWxlY3RQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlU2VsZWN0UHJvamVjdCgpIHtcblx0c2VsZWN0UHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm1zKCkge1xuXHRzZWxlY3RUeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xuXHRzZWxlY3RQcm9qZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuXHR0aXRsZS52YWx1ZSA9IG51bGw7XG5cdGR1ZS52YWx1ZSA9IG51bGw7XG5cdG5vdGVzLnZhbHVlID0gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1vZGFsO1xuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgdXBkYXRlU2VsZWN0aW9ucyBmcm9tICcuL3VwZGF0ZS1zZWxlY3Rpb25zJztcblxuZnVuY3Rpb24gbG9hZFBhZ2UobXlBcnJheSkge1xuXHRteUFycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdFx0aWYgKHRhc2sudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG5cdFx0XHR1cGRhdGVTZWxlY3Rpb25zKHRhc2sudGl0bGUpO1xuXHRcdH1cblx0XHRpZiAodGFzay50YXNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YXNrLnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0XHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblx0c3RvcmUobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiaW1wb3J0IGxvYWRVaSBmcm9tICcuL2xvYWQtdWknO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcbmltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5cbmZ1bmN0aW9uIGxvYWRTaXRlKCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKG15QXJyYXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdGxvYWRQYWdlKG15QXJyYXkpO1xuXHR9XG5cdGxvYWRVaSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2l0ZTtcbiIsImltcG9ydCBsb2FkTW9kYWwgZnJvbSAnLi9sb2FkLW1vZGFsJztcblxuZnVuY3Rpb24gbG9hZFVpKCkge1xuXHRjb25zdCBoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyLWJ1dHRvbicpO1xuXHRoZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGxvYWRNb2RhbCgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFVpO1xuIiwiaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vY3JlYXRlLXRhc2snO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5mdW5jdGlvbiBzZWxlY3RUYXNrKCkge1xuXHRsZXQgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGlmICghbXlBcnJheSkge1xuXHRcdG15QXJyYXkgPSBbXTtcblx0fVxuXHRjb25zdCB0YXNrID0gbmV3VGFzayhcblx0XHR0eXBlLnZhbHVlLFxuXHRcdHByb2plY3QudmFsdWUsXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0ZHVlLnZhbHVlLFxuXHRcdG5vdGVzLnZhbHVlXG5cdCk7XG5cdGlmICh0YXNrLnByb2plY3QgPT09ICdkZWZhdWx0JyB8fCB0YXNrLnByb2plY3QgPT09ICdub25lJykge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSAnbm9uZSc7XG5cdFx0bXlBcnJheS5wdXNoKHRhc2spO1xuXHRcdGNvbnN0IGluZGV4ID0gbXlBcnJheS5maW5kSW5kZXgoKG9iaikgPT4gb2JqID09PSB0YXNrKTtcblx0XHRjcmVhdGVUYXNrKHRhc2ssIGluZGV4LCBlbGVtZW50KTtcblx0XHRzdG9yZShteUFycmF5KTtcblx0fSBlbHNlIHtcblx0XHRteUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGlmIChlbGVtZW50LnRpdGxlID09PSB0YXNrLnByb2plY3QpIHtcblx0XHRcdFx0ZWxlbWVudC50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IGVsZW1lbnQudGFza3MuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gdGFzayk7XG5cdFx0XHRcdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgsIGVsZW1lbnQpO1xuXHRcdFx0XHRzdG9yZShteUFycmF5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuY29uc3QgbmV3VGFzayA9ICh0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcykgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0VGFzaztcbiIsImZ1bmN0aW9uIHN0b3JlKG15QXJyYXkpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215QXJyYXknLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9ucyhwcm9qZWN0KSB7XG5cdGFkZFByb2plY3QudmFsdWUgPSBwcm9qZWN0O1xuXHRhZGRQcm9qZWN0LnRleHQgPSBwcm9qZWN0O1xuXHRzZWxlY3RQcm9qZWN0LmFkZChhZGRQcm9qZWN0KTtcbn1cblxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVTZWxlY3Rpb25zO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFNpdGUgZnJvbSAnLi9sb2FkLXNpdGUnO1xuXG5sb2FkU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9