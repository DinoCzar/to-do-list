/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*

const input = document.querySelector('input'),
h2 = document.querySelector('h2')

input.addEventListener('keyup', display);

function display() {
    localStorage.setItem('value', input.value)
}

h2.innerHTML = localStorage.getItem('value')

*/

headerButton = document.querySelector('#header-button');
headerButton.addEventListener('click', (e) => {
	addNew();
});

/* will import from modal.js */

function addNew() {
	const modal = document.querySelector('#modal');
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLFxuaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpXG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGlzcGxheSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZhbHVlJywgaW5wdXQudmFsdWUpXG59XG5cbmgyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2YWx1ZScpXG5cbiovXG5cbmhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItYnV0dG9uJyk7XG5oZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRhZGROZXcoKTtcbn0pO1xuXG4vKiB3aWxsIGltcG9ydCBmcm9tIG1vZGFsLmpzICovXG5cbmZ1bmN0aW9uIGFkZE5ldygpIHtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=