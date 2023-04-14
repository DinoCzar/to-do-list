/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
		return myArray
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


function loadModal() {
	displayModal();

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearForms();
		hideModal();
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

const modal = document.querySelector('#modal');

function chooseType() {
	if (selectType.value === 'task') {
		(0,_select_task__WEBPACK_IMPORTED_MODULE_0__["default"])();
		hideModal();
		clearForms();
	} else {
		console.log('project');
		hideModal();
		clearForms();
	}
}

function displayModal() {
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideModal() {
	modal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearForms() {
	selectType.selectedIndex = 0;
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



function loadPage(myArray) {
	myArray.forEach((task, index) => {
		(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task, index);
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
	const task = newTask(title.value, due.value, notes.value);
	myArray.push(task);
	const index = myArray.findIndex((obj) => obj === task);
	(0,_create_task__WEBPACK_IMPORTED_MODULE_1__["default"])(task, index);
	(0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(myArray);
}

const newTask = (title, due, notes) => {
	return { title, due, notes };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFbkMsc0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkLW1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1zaXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC11aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGUtdGFzayc7XG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9lZGl0LXRhc2snO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIGluZGV4KSB7XG5cdHRhc2suaWQgPSBpbmRleDtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcblx0dGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzay5pZCk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcblx0ZHVlLnRleHRDb250ZW50ID0gJ0R1ZTogJyArIHRhc2suZHVlO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cblx0Y29uc3QgZXhwYW5kVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRleHBhbmRUYXNrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10YXNrJyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kVGFzayk7XG5cblx0Y29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bm90ZXMuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xuXHRub3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIHRhc2subm90ZXM7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG5cdGNvbnN0IHRhc2tJZCA9IHRhc2suaWQ7XG5cblx0Y29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG5cdGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdGV4cGFuZFRhc2suYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cdGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGVkaXRUYXNrKHRhc2ssIHRhc2tJZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXHRkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblx0ZXhwYW5kVGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGRlbGV0ZVRhc2sodGFza0lkKTtcblx0fSk7XG5cblx0Y29uc3QgZXhwYW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGV4cGFuZERpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtZGl2Jyk7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kRGl2KTtcblxuXHRjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0ZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1idXR0b24nKTtcblx0ZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gJy4uLic7XG5cdGV4cGFuZERpdi5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXHRleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGV4cGFuZFRhc2suc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuXHRjb25zdCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0bXlBcnJheS5zcGxpY2UoaWQsIDEpO1xuXG5cdGNvbnN0IGNsZWFyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRpdicpO1xuXHRjbGVhckNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xuXG5cdGxvYWRQYWdlKG15QXJyYXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVUYXNrOyIsImltcG9ydCBsb2FkTW9kYWwgZnJvbSAnLi9sb2FkLW1vZGFsJztcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlLXRhc2snO1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0YXNrSWQpIHtcblx0Y29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cdGNvbnN0IGVkaXREdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlJyk7XG5cdGNvbnN0IGVkaXROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpO1xuXHRlZGl0VGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuXHRlZGl0RHVlLnZhbHVlID0gdGFzay5kdWU7XG5cdGVkaXROb3Rlcy52YWx1ZSA9IHRhc2subm90ZXM7XG5cdGxvYWRNb2RhbCgpO1xuXHRkZWxldGVUYXNrKHRhc2tJZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUYXNrO1xuIiwiZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUFycmF5JykpO1xuXHRpZiAobXlBcnJheSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBteUFycmF5XG5cdH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGdldEFycmF5O1xuIiwiaW1wb3J0IHNlbGVjdFRhc2sgZnJvbSAnLi9zZWxlY3QtdGFzayc7XG5cbmZ1bmN0aW9uIGxvYWRNb2RhbCgpIHtcblx0ZGlzcGxheU1vZGFsKCk7XG5cblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1idXR0b24nKTtcblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckZvcm1zKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdH0pO1xufVxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICdkZWZhdWx0Jykge1xuXHRcdGFsZXJ0KCdQbGVhc2UgU2VsZWN0IFR5cGUnKTtcblx0fSBlbHNlIHtcblx0XHRjaG9vc2VUeXBlKCk7XG5cdH1cbn0pO1xuXG5jb25zdCBzZWxlY3RUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuZnVuY3Rpb24gY2hvb3NlVHlwZSgpIHtcblx0aWYgKHNlbGVjdFR5cGUudmFsdWUgPT09ICd0YXNrJykge1xuXHRcdHNlbGVjdFRhc2soKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ3Byb2plY3QnKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0XHRjbGVhckZvcm1zKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybXMoKSB7XG5cdHNlbGVjdFR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdHRpdGxlLnZhbHVlID0gbnVsbDtcblx0ZHVlLnZhbHVlID0gbnVsbDtcblx0bm90ZXMudmFsdWUgPSBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTW9kYWw7XG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2NyZWF0ZS10YXNrJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZnVuY3Rpb24gbG9hZFBhZ2UobXlBcnJheSkge1xuXHRteUFycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0Y3JlYXRlVGFzayh0YXNrLCBpbmRleCk7XG5cdH0pO1xuXHRzdG9yZShteUFycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgbG9hZFVpIGZyb20gJy4vbG9hZC11aSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IGdldEFycmF5IGZyb20gJy4vZ2V0LWFycmF5JztcblxuZnVuY3Rpb24gbG9hZFNpdGUoKSB7XG5cdGNvbnN0IG15QXJyYXkgPSBnZXRBcnJheSgpO1xuXHRpZiAobXlBcnJheSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0bG9hZFBhZ2UobXlBcnJheSk7XG5cdH1cblx0bG9hZFVpKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTaXRlO1xuIiwiaW1wb3J0IGxvYWRNb2RhbCBmcm9tICcuL2xvYWQtbW9kYWwnO1xuXG5mdW5jdGlvbiBsb2FkVWkoKSB7XG5cdGNvbnN0IGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItYnV0dG9uJyk7XG5cdGhlYWRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0bG9hZE1vZGFsKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkVWk7XG4iLCJpbXBvcnQgZ2V0QXJyYXkgZnJvbSAnLi9nZXQtYXJyYXknO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9jcmVhdGUtdGFzayc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIHNlbGVjdFRhc2soKSB7XG5cdGxldCBteUFycmF5ID0gZ2V0QXJyYXkoKTtcblx0aWYgKCFteUFycmF5KSB7XG5cdFx0bXlBcnJheSA9IFtdO1xuXHR9XG5cdGNvbnN0IHRhc2sgPSBuZXdUYXNrKHRpdGxlLnZhbHVlLCBkdWUudmFsdWUsIG5vdGVzLnZhbHVlKTtcblx0bXlBcnJheS5wdXNoKHRhc2spO1xuXHRjb25zdCBpbmRleCA9IG15QXJyYXkuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gdGFzayk7XG5cdGNyZWF0ZVRhc2sodGFzaywgaW5kZXgpO1xuXHRzdG9yZShteUFycmF5KTtcbn1cblxuY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZHVlLCBub3RlcykgPT4ge1xuXHRyZXR1cm4geyB0aXRsZSwgZHVlLCBub3RlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0VGFzaztcbiIsImZ1bmN0aW9uIHN0b3JlKG15QXJyYXkpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215QXJyYXknLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFNpdGUgZnJvbSAnLi9sb2FkLXNpdGUnO1xuXG5sb2FkU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9