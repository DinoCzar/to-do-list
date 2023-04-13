import loadModal from './load-modal';

function loadUi() {
	const headerButton = document.querySelector('#header-button');
	headerButton.addEventListener('click', (e) => {
		loadModal();
	});
}

export default loadUi;
