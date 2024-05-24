import "./style.css";

const addBtn = document.querySelector('.add_project');
const projectModal = document.querySelector('#add_project_modal');
const closeModal = document.querySelector('.closeBtn');
const projectForm  = document.getElementById('new_project');
const projectBase = document.querySelector('.projects')
const todoBase = document.querySelector('.todos')

const storage = localStorage.getItem('projects');
const projects = storage ? JSON.parse(storage) : [];


addBtn.addEventListener('click', () => {
    projectModal.show();

})

closeModal.addEventListener('click', () => {
    projectModal.close();
})

projectForm.addEventListener('submit', (x) => {
    x.preventDefault();
    addProject();
    updateProjects();
    projectModal.close();
})



function addProject() {
    const projectName = document.getElementById('project_name').value
    projects.push({name: projectName, todos: []})
    storeProjects(projects)
    document.getElementById('project_name').value = '';
}


function updateProjects() {
    projectBase.innerHTML = '';
    todoBase.innerHTML = '';

    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        const projectBtn = document.createElement('button');
        const projectSpan = document.createElement('span')
        
        projectBtn.textContent = '💀'

        projectItem.classList.add("project");
        projectSpan.textContent = project.name;
        projectItem.appendChild(projectSpan)
        projectItem.appendChild(projectBtn)
        projectBase.appendChild(projectItem);

        projectBtn.addEventListener('click', () => {
            projects.splice(index, 1)
            storeProjects(projects)
            updateProjects()
            todoBase.innerHTML = '';
        })

        projectItem.addEventListener('click', () => {
                viewTodos(project)
        })

    });
}

function viewTodos(project) {
    if (!projects.includes(project)) return 

    todoBase.innerHTML = '';

    const todoForm = document.createElement('form');
    const todoInput = document.createElement('input');
    const todoButton = document.createElement('button');
    const todoList = document.createElement('ul');

    todoForm.setAttribute('id', 'todo_form');
    todoBase.appendChild(todoForm)

    todoInput.setAttribute('id', 'todo_input');
    todoInput.setAttribute('type', 'text');
    todoInput.setAttribute('autocomplete', 'off');
    todoInput.setAttribute('placeholder', 'Plan your moves...');
    todoInput.classList.add('input');
    
    todoButton.setAttribute('type', 'sumbit');
    todoButton.classList.add('add_todo');
    todoButton.innerHTML = '☄️';
    
    todoList.classList.add('todo_list');
    
    todoForm.appendChild(todoInput);
    todoForm.appendChild(todoButton);

    todoBase.appendChild(todoList)

    if(project.todos) {
        project.todos.forEach((todo, index) => {
            const todoEl = document.createElement('li');
            const removeTodo = document.createElement('button');

            
            removeTodo.textContent = '💀';
            todoEl.textContent = todo.task;
            if (todo.completed) todoEl.classList.add('completed');

            
            
            todoEl.appendChild(removeTodo)
            todoList.appendChild(todoEl)
            
            removeTodo.addEventListener('click', () => {
                todoEl.remove()
                project.todos.splice(index, 1);

                storeProjects(projects)
            })
            
            todoEl.addEventListener('click', () => {
                todoEl.classList.toggle('completed')
                if (project.todos[index]){
                    project.todos[index].completed = todoEl.classList.contains('completed')
                }
                storeProjects(projects)
            })
            
        })
    }
    

    todoForm.addEventListener('submit', (x) => {
        x.preventDefault();
        addTodo(project);
        viewTodos(project);
    })

}


function addTodo(project) {
    const todoTask = todo_input.value;
    project.todos.push({task: todoTask, completed: false})
    storeProjects(projects)
}

function storeProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}


updateProjects(projects);
