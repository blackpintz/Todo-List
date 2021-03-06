import Project from './project';

export const projects = localStorage.getItem('projects')
  ? JSON.parse(localStorage.getItem('projects'))
  : [];

const defaultProject = new Project('General');
if (!projects.some(project => project.name === 'General')) projects.push(defaultProject);
localStorage.setItem('projects', JSON.stringify(projects));

export default () => {
  const addProject = (project) => {
    const newProject = new Project(project);
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const addProjectTodo = (id, todo) => {
    projects[id].todos.push(todo);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editProjectTodo = (id, todoId, todo) => {
    const foundTodo = projects[id].todos.find(originalTodo => originalTodo.id === todoId);
    const index = projects[id].todos.indexOf(foundTodo);
    todo.id = todoId;
    projects[id].todos.splice(index, 1, todo);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteProjectTodo = (id, todo) => {
    const index = projects[id].todos.indexOf(todo);
    projects[id].todos.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return {
    addProject, addProjectTodo, editProjectTodo, deleteProjectTodo,
  };
};
