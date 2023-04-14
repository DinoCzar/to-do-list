function loadEditModal() {
	displayEditModal();

	const cancelButton = document.querySelector('#cancel-button');
	cancelButton.addEventListener('click', (e) => {
		clearEditForms();
		hideEditModal();
	});
}

const editButton = document.querySelector('#edit-button');
editButton.addEventListener('click', (e) => {
	console.log('edit item')
});

const editModal = document.querySelector('#edit-modal');

function displayEditModal() {
	editModal.style.display = 'block';
	overlay.style.display = 'block';
}

function hideEditModal() {
	editModal.style.display = 'none';
	overlay.style.display = 'none';
}

function clearEditForms() {
	editTitle.value = null;
	editDue.value = null;
	editNotes.value = null;
}

export default loadEditModal;