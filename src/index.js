import "./style.css";

const addBtn = document.querySelector('.add_project');
const projectModal = document.querySelector('#add_project_modal');
const closeModal = document.querySelector('.closeBtn');
const projectForm  = document.getElementById('new_project');
const projectBase = document.querySelector('.projects')


const projects = [];

addBtn.addEventListener('click', () => {
    projectModal.show();

})

closeModal.addEventListener('click', () => {
    projectModal.close();
})

projectForm.addEventListener('submit', (x) => {
    x.preventDefault();
    addProject();
    updateProjects(projects);
    projectModal.close();
})

function addProject() {
    const projectName = document.getElementById('project_name').value
    projects.push({name: projectName})
    document.getElementById('project_name').value = '';
    
}


function updateProjects() {
    projectBase.innerHTML = '';

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add("project");
        projectItem.textContent = project.name;
        projectBase.appendChild(projectItem);
    });
}

