/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




function loadModal() {
	const modal = document.querySelector('#modal');
	displayModal();

	const submitButton = document.querySelector('#submit-button');
	submitButton.addEventListener('click', (e) => {
		const task = newTask(title.value, due.value, notes.value);
		(0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])(task);
		(0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
		hideModal();
		clearForms();
	});

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearForms();
		hideModal();
	});
}

const newTask = (title, due, notes) => {
	return { title, due, notes };
};

function displayModal() {
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideModal() {
	modal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearForms() {
	title.value = '';
	due.value = '';
	notes.value = '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadModal);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


function createProject() {
    console.log('createProject')
    console.log(_task__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



function loadSite() {
    if (localStorage.getItem('myArray') !== null) {
        const getArray = JSON.parse(localStorage.getItem('myArray'));
        getArray.forEach((item) => (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(item));
      } 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSite);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function store(task) {
        let myArray = JSON.parse(localStorage.getItem('myArray'));
        if (!myArray) {
            myArray = [];
        }
        myArray.push(task);
        localStorage.setItem('myArray', JSON.stringify(myArray));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTask(task) {
        const content = document.querySelector('#content');
    
        const taskDiv = document.createElement('div');
        content.appendChild(taskDiv);
    
        const title = document.createElement('div');
        title.textContent = task.title;
        taskDiv.appendChild(title);
    
        const due = document.createElement('div');
        due.textContent = task.due;
        taskDiv.appendChild(due);
    
        const notes = document.createElement('div');
        notes.textContent = task.notes;
        taskDiv.appendChild(notes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");


function loadUi() {
	const headerButton = document.querySelector('#header-button');
	headerButton.addEventListener('click', (e) => {
		(0,_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadUi);


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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ "./src/site.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



(0,_site__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_ui__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNNO0FBQ1I7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFLO0FBQ1AsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNPOztBQUVoQztBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFVO0FBQzFCOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHVCO0FBQ047O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpREFBVTtBQUM3QztBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNUcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ25CTzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBUztBQUNYLEVBQUU7QUFDRjs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUNUdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDSjs7QUFFMUIsaURBQVE7QUFDUiwrQ0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2l0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yYWdlJztcblxuZnVuY3Rpb24gbG9hZE1vZGFsKCkge1xuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuXHRkaXNwbGF5TW9kYWwoKTtcblxuXHRjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuXHRzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHRhc2sgPSBuZXdUYXNrKHRpdGxlLnZhbHVlLCBkdWUudmFsdWUsIG5vdGVzLnZhbHVlKTtcblx0XHRzdG9yZSh0YXNrKTtcblx0XHRjcmVhdGVUYXNrKHRhc2spO1xuXHRcdGhpZGVNb2RhbCgpO1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0fSk7XG5cblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1idXR0b24nKTtcblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRjbGVhckZvcm1zKCk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdH0pO1xufVxuXG5jb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkdWUsIG5vdGVzKSA9PiB7XG5cdHJldHVybiB7IHRpdGxlLCBkdWUsIG5vdGVzIH07XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5TW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcblx0dGl0bGUudmFsdWUgPSAnJztcblx0ZHVlLnZhbHVlID0gJyc7XG5cdG5vdGVzLnZhbHVlID0gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNb2RhbDtcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZVByb2plY3QnKVxuICAgIGNvbnNvbGUubG9nKGNyZWF0ZVRhc2spO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5cbmZ1bmN0aW9uIGxvYWRTaXRlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlBcnJheScpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGdldEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlBcnJheScpKTtcbiAgICAgICAgZ2V0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gY3JlYXRlVGFzayhpdGVtKSk7XG4gICAgICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2l0ZTtcbiIsImZ1bmN0aW9uIHN0b3JlKHRhc2spIHtcbiAgICAgICAgbGV0IG15QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUFycmF5JykpO1xuICAgICAgICBpZiAoIW15QXJyYXkpIHtcbiAgICAgICAgICAgIG15QXJyYXkgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBteUFycmF5LnB1c2godGFzayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUFycmF5JywgSlNPTi5zdHJpbmdpZnkobXlBcnJheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICAgICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3RlcztcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChub3Rlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7IiwiaW1wb3J0IGxvYWRNb2RhbCBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gbG9hZFVpKCkge1xuXHRjb25zdCBoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyLWJ1dHRvbicpO1xuXHRoZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGxvYWRNb2RhbCgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFVpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFNpdGUgZnJvbSAnLi9zaXRlJztcbmltcG9ydCBsb2FkVWkgZnJvbSAnLi91aSc7XG5cbmxvYWRTaXRlKCk7XG5sb2FkVWkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==