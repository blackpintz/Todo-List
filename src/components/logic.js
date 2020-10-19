import projectModule, { projects } from './storage.js';
import Todo from './todo.js';
import { todoForm } from './todoform.js';
import viewTodo from './viewTodo.js';
import elements from './elements.js';

export default () => {
  const content = document.getElementById('content');
  projects.forEach((project, idx) => {
    const projectTag = document.createElement('h3');
    const addId = `add-${idx}`;
    const viewId = `view-${idx}`;
    projectTag.innerHTML = `${project.name} <small id=${addId} class='text-info'>add</small> <small id=${viewId} class='text-info'>view</small>`;
    content.appendChild(projectTag);
    const add = document.getElementById(addId);
    add.onclick = () => {
      elements().removeElements('content', 'form');
      const formDisplay = document.getElementById('addTodoForm');
      formDisplay.appendChild(elements().element('h3', `Add todo for ${project.name}`, 'my-2', 'text-center', 'font-weight-bold'));
      formDisplay.appendChild(todoForm(idx, 'Add'));
      const goBack = elements().element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
      goBack.onclick = () => { window.location.reload(); };
      formDisplay.appendChild(goBack);
    };

    const view = document.getElementById(viewId);
    view.onclick = () => {
      elements().removeElements('content', 'form');
      const todosDisplay = document.querySelector('main');
      todosDisplay.appendChild(viewTodo(project).todosWrapper);
    };
  });
};

const form = document.getElementById('form');
const addTodoForm = document.getElementById('addTodoForm');

form.addEventListener('submit', () => {
  const name = document.getElementById('projectname').value;
  projectModule().addProject(name);
  form.reset();
});

addTodoForm.addEventListener('submit', (e) => {
  const id = parseInt(e.submitter.id);
  const newTodo = elements().collectData(e);
  projectModule().addProjectTodo(id, newTodo);
});
