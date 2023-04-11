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

function addNew() {
 console.log('test')
}