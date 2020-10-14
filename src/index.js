import projectModule, { projects } from './components/storage.js';
import Project from './components/project.js';
import Todo from './components/todo.js';

import { todoForm } from './components/todoform.js';

const content = document.getElementById('content');
projects.forEach((project, idx) => {
  const projectTag = document.createElement('h3');
  const addId = `add-${idx}`;
  const viewId = `view-${idx}`;
  projectTag.innerHTML = `${project.name} <small id=${addId} data-toggle="modal" data-target="#exampleModal" class='text-info'>add</small> <small id=${viewId} class='text-info'>view</small>`;
  content.appendChild(projectTag);
  const add = document.getElementById(addId);
  add.onclick = (e) => {
    const content = document.getElementById('content');
    content.remove();
    const formDisplay = document.getElementById('addTodoForm');
    formDisplay.appendChild(todoForm(`${idx}`));
  };

  const view = document.getElementById(viewId);
  view.onclick = (e) => {
  // viewing the specific projects
    alert(`You want to view project ${idx}.`);
  };
});

const form = document.getElementById('form');
const addTodoForm = document.getElementById('addTodoForm');

form.addEventListener('submit', (e) => {
  const name = document.getElementById('projectname').value;
  projectModule().addProject(name);
  form.reset();
});

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = parseInt(e.submitter.id);
  const title = document.getElementById('titleId').value;
  const description = document.getElementById('descriptionId').value;
  const due = document.getElementById('dateId').value;
  let priority;
  if (document.getElementById('high').checked) priority = 'High';
  if (document.getElementById('medium').checked) priority = 'Medium';
  if (document.getElementById('low').checked) priority = 'Low';
  const newTodo = new Todo(title, description, due, priority);
  projectModule().addProjectTodo(id, newTodo);
  console.log(projects[id]);
  console.log(newTodo);
});

// console.log(todoForm(1));

console.log(localStorage);