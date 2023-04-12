import createProject from './project';
import createTask from './task';

function loadSite() {
    if (localStorage.getItem('myArray') !== null) {
        const getArray = JSON.parse(localStorage.getItem('myArray'));
        getArray.forEach((item) => createTask(item));
      } 
}

export default loadSite;
