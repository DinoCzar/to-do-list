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

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', (e) => {
    console.log('submit')
})

const cancelButton = document.querySelector('#cancel-button')
cancelButton.addEventListener('click', (e) => {
    console.log('cancel')
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSxcbmgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRpc3BsYXkpO1xuXG5mdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2YWx1ZScsIGlucHV0LnZhbHVlKVxufVxuXG5oMi5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmFsdWUnKVxuXG4qL1xuXG5oZWFkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyLWJ1dHRvbicpO1xuaGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0YWRkTmV3KCk7XG59KTtcblxuLyogd2lsbCBpbXBvcnQgZnJvbSBtb2RhbC5qcyAqL1xuXG5mdW5jdGlvbiBhZGROZXcoKSB7XG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKVxufSlcblxuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1idXR0b24nKVxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2FuY2VsJylcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=