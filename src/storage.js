export function storeProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}