import "./style.css";

const addBtn = document.querySelector('.add_project');
const projectModal = document.querySelector('#add_project_modal');
const closeModal = document.querySelector('.closeBtn');
const projectForm  = document.getElementById('new_project');
const projectBase = document.querySelector('.projects')
const todoBase = document.querySelector('.todos')

const projects = [{name: 'defaykt', todos: [
    {
        task: 'cast fireball ☄️☄️☄️',
        completed: true
    },
    
]}];


// const projects = JSON.parse(localStorage.getItem('projects'))


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
    projects.push({name: projectName, todos: []})
    document.getElementById('project_name').value = '';
}


function updateProjects() {
    projectBase.innerHTML = '';

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add("project");
        projectItem.textContent = project.name;
        projectBase.appendChild(projectItem);

        projectItem.addEventListener('click', () => {
            viewTodos(project)
        })
    });
}

function viewTodos(project) {
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
        project.todos.forEach(todo => {
            const todoEl = document.createElement('li');
            const removeTodo = document.createElement('button');
            const todoIndex = project.todos.findIndex(i => i == todo);
            
            removeTodo.textContent = '🔥';
            todoEl.textContent = todo.task;
            if (todo.completed) todoEl.classList.add('completed');

            
            
            todoEl.appendChild(removeTodo)
            todoList.appendChild(todoEl)
            
            removeTodo.addEventListener('click', () => {
                todoEl.remove()
                project.todos.splice(todoIndex, 1);


            })
            
            todoEl.addEventListener('click', () => {
                todoEl.classList.toggle('completed')
                if (project.todos[todoIndex]){
                    project.todos[todoIndex].completed = todoEl.classList.contains('completed')
                }
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
}



updateProjects(projects);

