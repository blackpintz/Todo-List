import projectModule, { projects } from './components/storage.js';
import Project from './components/project.js';

const content = document.getElementById('content');
projects.forEach((project) => {
  const projectTag = document.createElement('h3');
  projectTag.innerText = project.name;
  content.appendChild(projectTag);
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const name = document.getElementById('projectname').value;
  projectModule().addProject(name);
  form.reset();
});

console.log(localStorage);