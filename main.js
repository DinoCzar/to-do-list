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

	if (task.tasks.length > 0) {
		task.tasks.forEach((task, index) => {
            console.log(task)
            console.log(index)
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
				const index = element.tasks.findIndex((obj) => obj === task);
				(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVTtBQUNaLEVBQUUsa0RBQUs7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFLO0FBQ1QsSUFBSSxzREFBUTtBQUNaO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pDMUI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7OztVQ1RoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0LWFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtc2l0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtdWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZWxlY3QtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXBkYXRlLXNlbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHVwZGF0ZVNlbGVjdGlvbnMgZnJvbSAnLi91cGRhdGUtc2VsZWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cdGNvbnN0IHByb2plY3QgPSBuZXdQcm9qZWN0KFxuXHRcdHR5cGUudmFsdWUsXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0ZHVlLnZhbHVlLFxuXHRcdG5vdGVzLnZhbHVlLFxuXHRcdHRhc2tzXG5cdCk7XG5cdG15QXJyYXkucHVzaChwcm9qZWN0KTtcblx0Y29uc3QgaW5kZXggPSBteUFycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmogPT09IHByb2plY3QpO1xuXHRjcmVhdGVUYXNrKHByb2plY3QsIGluZGV4KTtcblx0c3RvcmUobXlBcnJheSk7XG5cdHVwZGF0ZVNlbGVjdGlvbnModGl0bGUudmFsdWUpO1xufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcblxuY29uc3QgdGFza3MgPSBbXTtcblxuY29uc3QgbmV3UHJvamVjdCA9ICh0eXBlLCB0aXRsZSwgZHVlLCBub3RlcywgdGFza3MpID0+IHtcblx0cmV0dXJuIHsgdHlwZSwgdGl0bGUsIGR1ZSwgbm90ZXMsIHRhc2tzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGUtdGFzayc7XG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9lZGl0LXRhc2snO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIGluZGV4KSB7XG5cdHRhc2suaWQgPSBpbmRleDtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcblx0dGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzay5pZCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcblx0ZHVlLnRleHRDb250ZW50ID0gJ0R1ZTogJyArIHRhc2suZHVlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cblx0Y29uc3QgZXhwYW5kVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRleHBhbmRUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kVGFzayk7XG5cblx0Y29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bm90ZXMuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xuXHRub3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIHRhc2subm90ZXM7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG5cdGNvbnN0IHRhc2tJZCA9IHRhc2suaWQ7XG5cblx0Y29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cdGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGVkaXRUYXNrKHRhc2ssIHRhc2tJZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGRlbGV0ZVRhc2sodGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgZXhwYW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGV4cGFuZERpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtZGl2Jyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kRGl2KTtcblxuXHRjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1idXR0b24nKTtcblx0ZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gJy4uLic7XG5cdGV4cGFuZERpdi5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXHRleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblx0fSk7XG5cblx0aWYgKHRhc2sudGFza3MubGVuZ3RoID4gMCkge1xuXHRcdHRhc2sudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGlkKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRteUFycmF5LnNwbGljZShpZCwgMSk7XG5cblx0Y29uc3QgY2xlYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGl2Jyk7XG5cdGNsZWFyQ29udGVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG5cblx0bG9hZFBhZ2UobXlBcnJheSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRhc2s7IiwiaW1wb3J0IGxvYWRNb2RhbCBmcm9tICcuL2xvYWQtbW9kYWwnO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGUtdGFzayc7XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRhc2tJZCkge1xuXHRjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcblx0Y29uc3QgZWRpdER1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKTtcblx0Y29uc3QgZWRpdE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJyk7XG5cdGVkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG5cdGVkaXREdWUudmFsdWUgPSB0YXNrLmR1ZTtcblx0ZWRpdE5vdGVzLnZhbHVlID0gdGFzay5ub3Rlcztcblx0bG9hZE1vZGFsKCk7XG5cdGRlbGV0ZVRhc2sodGFza0lkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdFRhc2s7XG4iLCJmdW5jdGlvbiBnZXRBcnJheSgpIHtcblx0Y29uc3QgbXlBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215QXJyYXknKSk7XG5cdGlmIChteUFycmF5ICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIG15QXJyYXk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXJyYXk7XG4iLCJpbXBvcnQgc2VsZWN0VGFzayBmcm9tICcuL3NlbGVjdC10YXNrJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vY3JlYXRlLXByb2plY3QnO1xuXG5mdW5jdGlvbiBsb2FkTW9kYWwoKSB7XG5cdGRpc3BsYXlNb2RhbCgpO1xuXG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtYnV0dG9uJyk7XG5cdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGhpZGVTZWxlY3RQcm9qZWN0KCk7XG5cdH0pO1xufVxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICdkZWZhdWx0Jykge1xuXHRcdGFsZXJ0KCdQbGVhc2UgU2VsZWN0IFR5cGUnKTtcblx0fSBlbHNlIHtcblx0XHRjaG9vc2VUeXBlKCk7XG5cdH1cbn0pO1xuXG5jb25zdCBzZWxlY3RUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuc2VsZWN0VHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAndGFzaycpIHtcblx0XHRkaXNwbGF5U2VsZWN0UHJvamVjdCgpO1xuXHR9XG5cdGlmIChzZWxlY3RUeXBlLnZhbHVlID09PSAncHJvamVjdCcpIHtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gY2hvb3NlVHlwZSgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJykge1xuXHRcdHNlbGVjdFRhc2soKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRoaWRlU2VsZWN0UHJvamVjdCgpO1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0fSBlbHNlIHtcblx0XHRjcmVhdGVQcm9qZWN0KCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0aGlkZVNlbGVjdFByb2plY3QoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH1cbn1cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZWxlY3RQcm9qZWN0KCkge1xuXHRzZWxlY3RQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlU2VsZWN0UHJvamVjdCgpIHtcblx0c2VsZWN0UHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm1zKCkge1xuXHRzZWxlY3RUeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xuXHRzZWxlY3RQcm9qZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuXHR0aXRsZS52YWx1ZSA9IG51bGw7XG5cdGR1ZS52YWx1ZSA9IG51bGw7XG5cdG5vdGVzLnZhbHVlID0gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1vZGFsO1xuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgdXBkYXRlU2VsZWN0aW9ucyBmcm9tICcuL3VwZGF0ZS1zZWxlY3Rpb25zJztcblxuZnVuY3Rpb24gbG9hZFBhZ2UobXlBcnJheSkge1xuXHRteUFycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdFx0aWYgKHRhc2sudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG5cdFx0XHR1cGRhdGVTZWxlY3Rpb25zKHRhc2sudGl0bGUpO1xuXHRcdH1cblx0fSk7XG5cdHN0b3JlKG15QXJyYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImltcG9ydCBsb2FkVWkgZnJvbSAnLi9sb2FkLXVpJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuXG5mdW5jdGlvbiBsb2FkU2l0ZSgpIHtcblx0Y29uc3QgbXlBcnJheSA9IGdldEFycmF5KCk7XG5cdGlmIChteUFycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0fVxuXHRsb2FkVWkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNpdGU7XG4iLCJpbXBvcnQgbG9hZE1vZGFsIGZyb20gJy4vbG9hZC1tb2RhbCc7XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcblx0Y29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1idXR0b24nKTtcblx0aGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRsb2FkTW9kYWwoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRVaTtcbiIsImltcG9ydCBnZXRBcnJheSBmcm9tICcuL2dldC1hcnJheSc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhc2soKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cdGNvbnN0IHRhc2sgPSBuZXdUYXNrKFxuXHRcdHR5cGUudmFsdWUsXG5cdFx0cHJvamVjdC52YWx1ZSxcblx0XHR0aXRsZS52YWx1ZSxcblx0XHRkdWUudmFsdWUsXG5cdFx0bm90ZXMudmFsdWVcblx0KTtcblx0aWYgKHRhc2sucHJvamVjdCA9PT0gJ2RlZmF1bHQnIHx8IHRhc2sucHJvamVjdCA9PT0gJ25vbmUnKSB7XG5cdFx0bXlBcnJheS5wdXNoKHRhc2spO1xuXHRcdGNvbnN0IGluZGV4ID0gbXlBcnJheS5maW5kSW5kZXgoKG9iaikgPT4gb2JqID09PSB0YXNrKTtcblx0XHRjcmVhdGVUYXNrKHRhc2ssIGluZGV4KTtcblx0XHRzdG9yZShteUFycmF5KTtcblx0fSBlbHNlIHtcblx0XHRteUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGlmIChlbGVtZW50LnRpdGxlID09PSB0YXNrLnByb2plY3QpIHtcblx0XHRcdFx0ZWxlbWVudC50YXNrcy5wdXNoKHRhc2spO1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IGVsZW1lbnQudGFza3MuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gdGFzayk7XG5cdFx0XHRcdHN0b3JlKG15QXJyYXkpO1xuXHRcdFx0XHRsb2FkUGFnZShteUFycmF5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblxuY29uc3QgbmV3VGFzayA9ICh0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcykgPT4ge1xuXHRyZXR1cm4geyB0eXBlLCBwcm9qZWN0LCB0aXRsZSwgZHVlLCBub3RlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0VGFzaztcbiIsImZ1bmN0aW9uIHN0b3JlKG15QXJyYXkpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215QXJyYXknLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9ucyhwcm9qZWN0KSB7XG5cdGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcblx0Y29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG5cdGFkZFByb2plY3QudmFsdWUgPSBwcm9qZWN0O1xuXHRhZGRQcm9qZWN0LnRleHQgPSBwcm9qZWN0O1xuXHRzZWxlY3RQcm9qZWN0LmFkZChhZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlU2VsZWN0aW9ucztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vbG9hZC1zaXRlJztcblxubG9hZFNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==