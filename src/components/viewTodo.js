import element from './elements.js';
import Event from './logic.js';
import { todoForm } from './todoform.js';
import projectModule, { projects } from './storage.js';

export default (project) => {
  const todosWrapper = document.createElement('div');
  const todoFolder = element('h2', `Todos for ${project.name}`, 'my-1');
  todosWrapper.className = 'container-fluid';
  todosWrapper.id = 'wrapper';
  todosWrapper.appendChild(todoFolder);
  project.todos.forEach((todo, idx) => {
    const {
      title, description, dueDate, priority,
    } = todo;
    const groupBtns = element('div', '', 'mb-3');
    const editBtn = element('button', 'Edit', 'btn', 'btn-info', 'mr-2');
    const deleteBtn = element('button', 'Delete', 'btn', 'btn-danger');
    groupBtns.appendChild(editBtn);
    groupBtns.appendChild(deleteBtn);
    todosWrapper.appendChild(element('h4', title, 'border-top'));
    todosWrapper.appendChild(element('p', description, 'mb-1'));
    todosWrapper.appendChild(element('small', `Due date: ${dueDate}`, 'mr-2'));
    todosWrapper.appendChild(element('small', `Priority: ${priority}`));
    todosWrapper.appendChild(groupBtns);

    editBtn.onclick = () => {
      Event().removeElements('wrapper');
      const id = projects.indexOf(project);
      const formDisplay = document.getElementById('editTodoForm');
      formDisplay.appendChild(element('h3', 'Edit todo', 'my-2', 'text-center', 'font-weight-bold'));
      formDisplay.appendChild(todoForm(id, 'Edit', todo));
      const goBack = element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
      goBack.onclick = () => { window.location.reload(); };
      formDisplay.appendChild(goBack);
    };

    deleteBtn.onclick = () => {
      if (window.confirm('Are you sure')) {
        const id = projects.indexOf(project);
        projectModule().deleteProjectTodo(id, todo);
        window.location.reload();
      }
    };
  });
  const goBack = element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
  goBack.onclick = () => { window.location.reload(); };
  todosWrapper.appendChild(goBack);

  return { todosWrapper };
};

const editTodoForm = document.getElementById('editTodoForm');

editTodoForm.addEventListener('submit', (e) => {
  const todo = {};
  todo.title = e.target[0].value;
  todo.description = e.target[1].value;
  todo.dueDate = e.target[2].value;
  if (document.getElementById('high').checked) todo.priority = 'High';
  if (document.getElementById('medium').checked) todo.priority = 'Medium';
  if (document.getElementById('low').checked) todo.priority = 'Low';
  const { id } = e.submitter;
  projectModule().editProjectTodo(id, todo);
});