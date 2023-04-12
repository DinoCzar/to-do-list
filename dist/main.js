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
    console.log('loadSite')
    console.log(_project__WEBPACK_IMPORTED_MODULE_0__["default"])
    console.log(_task__WEBPACK_IMPORTED_MODULE_1__["default"])
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
    console.log(task)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNNO0FBQ1I7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFLO0FBQ1AsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNPOztBQUVoQztBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFVO0FBQzFCOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHVCO0FBQ047O0FBRWhDO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQWE7QUFDN0IsZ0JBQWdCLDZDQUFVO0FBQzFCOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDVHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNUcEI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ0pPOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTO0FBQ1gsRUFBRTtBQUNGOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ1R0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNKOztBQUUxQixpREFBUTtBQUNSLCtDQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5mdW5jdGlvbiBsb2FkTW9kYWwoKSB7XG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cdGRpc3BsYXlNb2RhbCgpO1xuXG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnV0dG9uJyk7XG5cdHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Y29uc3QgdGFzayA9IG5ld1Rhc2sodGl0bGUudmFsdWUsIGR1ZS52YWx1ZSwgbm90ZXMudmFsdWUpO1xuXHRcdHN0b3JlKHRhc2spO1xuXHRcdGNyZWF0ZVRhc2sodGFzayk7XG5cdFx0aGlkZU1vZGFsKCk7XG5cdFx0Y2xlYXJGb3JtcygpO1xuXHR9KTtcblxuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWJ1dHRvbicpO1xuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdGNsZWFyRm9ybXMoKTtcblx0XHRoaWRlTW9kYWwoKTtcblx0fSk7XG59XG5cbmNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGR1ZSwgbm90ZXMpID0+IHtcblx0cmV0dXJuIHsgdGl0bGUsIGR1ZSwgbm90ZXMgfTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm1zKCkge1xuXHR0aXRsZS52YWx1ZSA9ICcnO1xuXHRkdWUudmFsdWUgPSAnJztcblx0bm90ZXMudmFsdWUgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1vZGFsO1xuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi90YXNrJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlUHJvamVjdCcpXG4gICAgY29uc29sZS5sb2coY3JlYXRlVGFzayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3QiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi90YXNrJztcblxuZnVuY3Rpb24gbG9hZFNpdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2xvYWRTaXRlJylcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVQcm9qZWN0KVxuICAgIGNvbnNvbGUubG9nKGNyZWF0ZVRhc2spXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTaXRlOyIsImZ1bmN0aW9uIHN0b3JlKHRhc2spIHtcbiAgICAgICAgbGV0IG15QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUFycmF5JykpO1xuICAgICAgICBpZiAoIW15QXJyYXkpIHtcbiAgICAgICAgICAgIG15QXJyYXkgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBteUFycmF5LnB1c2godGFzayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUFycmF5JywgSlNPTi5zdHJpbmdpZnkobXlBcnJheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrOyIsImltcG9ydCBsb2FkTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcblx0Y29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1idXR0b24nKTtcblx0aGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRsb2FkTW9kYWwoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRVaTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vc2l0ZSc7XG5pbXBvcnQgbG9hZFVpIGZyb20gJy4vdWknO1xuXG5sb2FkU2l0ZSgpO1xubG9hZFVpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=