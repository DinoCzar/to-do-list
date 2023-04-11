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
