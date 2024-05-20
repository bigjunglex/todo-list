import "./style.css";

const addBtn = document.querySelector('.add_project');
const projectModal = document.querySelector('#add_project_modal');
const closeModal = document.querySelector('.closeBtn');
const projectForm  = document.getElementById('new_project');

addBtn.addEventListener('click', () => {
    projectModal.show();

})

closeModal.addEventListener('click', () => {
    projectModal.close();
})

projectForm.addEventListener('submit', (x) => {
    x.preventDefault();
    addProject()
})


function addProject(todo) {

    
}
