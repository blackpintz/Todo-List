import Project from './project.js';

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

  return { addProject };
};
