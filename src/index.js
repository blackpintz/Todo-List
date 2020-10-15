import projectModule, { projects } from './components/storage.js';
import Todo from './components/todo.js';
import Event from './components/logic.js';
import { todoForm } from './components/todoform.js';
import viewTodo from './components/viewTodo.js';
import element from './components/elements.js';

const content = document.getElementById('content');
projects.forEach((project, idx) => {
  const projectTag = document.createElement('h3');
  const addId = `add-${idx}`;
  const viewId = `view-${idx}`;
  projectTag.innerHTML = `${project.name} <small id=${addId} class='text-info'>add</small> <small id=${viewId} class='text-info'>view</small>`;
  content.appendChild(projectTag);
  const add = document.getElementById(addId);
  add.onclick = () => {
    Event().removeElements('content', 'form');
    const testProject = {
      title: 'Meet sheila', description: 'Picnic with Sheila at the park.', dueDate: '2020-10-15', priority: 'High',
    };
    const formDisplay = document.getElementById('addTodoForm');
    formDisplay.appendChild(element('h3', `Add todo for ${project.name}`, 'my-2', 'text-center', 'font-weight-bold'));
    formDisplay.appendChild(todoForm(idx));
    const goBack = element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
    goBack.onclick = () => { window.location.reload(); };
    formDisplay.appendChild(goBack);
  };

  const view = document.getElementById(viewId);
  view.onclick = () => {
    Event().removeElements('content', 'form');
    const todosDisplay = document.querySelector('main');
    todosDisplay.appendChild(viewTodo(project));
  };
});

const form = document.getElementById('form');
const addTodoForm = document.getElementById('addTodoForm');

form.addEventListener('submit', () => {
  const name = document.getElementById('projectname').value;
  projectModule().addProject(name);
  form.reset();
});

addTodoForm.addEventListener('submit', (e) => {
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
});


console.log(localStorage);