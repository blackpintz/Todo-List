import elements from './elements';
import todoForm from './todoform';
import projectModule, { projects } from './storage';

export default (project) => {
  const todosWrapper = document.createElement('div');
  const todoFolder = elements().element('h2', `Todos for ${project.name}`, 'my-1');
  todosWrapper.className = 'container-fluid';
  todosWrapper.id = 'wrapper';
  todosWrapper.appendChild(todoFolder);
  project.todos.forEach((todo) => {
    const {
      title, description, dueDate, priority,
    } = todo;
    const groupBtns = elements().element('div', '', 'mb-3');
    const editBtn = elements().element('button', 'Edit', 'btn', 'btn-info', 'mr-2');
    const deleteBtn = elements().element('button', 'Delete', 'btn', 'btn-danger');
    groupBtns.appendChild(editBtn);
    groupBtns.appendChild(deleteBtn);
    todosWrapper.appendChild(elements().element('h4', title, 'border-top'));
    todosWrapper.appendChild(elements().element('p', description, 'mb-1'));
    todosWrapper.appendChild(elements().element('small', `Due date: ${dueDate}`, 'mr-2'));
    todosWrapper.appendChild(elements().element('small', `Priority: ${priority}`));
    todosWrapper.appendChild(groupBtns);

    editBtn.onclick = () => {
      elements().removeElements('wrapper');
      const id = projects.indexOf(project);
      const formDisplay = document.getElementById('editTodoForm');
      formDisplay.appendChild(elements().element('h3', 'Edit todo', 'my-2', 'text-center', 'font-weight-bold'));
      formDisplay.appendChild(todoForm(id, 'Edit', todo));
      const goBack = elements().element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
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
  const goBack = elements().element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
  goBack.onclick = () => { window.location.reload(); };
  todosWrapper.appendChild(goBack);

  return { todosWrapper };
};

const editTodoForm = document.getElementById('editTodoForm');

editTodoForm.addEventListener('submit', (e) => {
  const todo = elements().collectData(e);
  const { id } = e.submitter;
  const todoId = e.target[0].id;
  projectModule().editProjectTodo(id, todoId, todo);
});