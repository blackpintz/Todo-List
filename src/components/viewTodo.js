import element from './elements.js';

export default (project) => {
  const todosWrapper = document.createElement('div');
  const todoFolder = element('h2', `Todos for ${project.name}`, 'my-1');
  todosWrapper.className = 'container-fluid';
  todosWrapper.appendChild(todoFolder);
  project.todos.forEach((todo) => {
    const {
      title, description, dueDate, priority,
    } = todo;
    todosWrapper.appendChild(element('h4', title, 'border-top'));
    todosWrapper.appendChild(element('p', description, 'mb-1'));
    todosWrapper.appendChild(element('small', `Due date: ${dueDate}`, 'mr-2'));
    todosWrapper.appendChild(element('small', `Priority: ${priority}`));
  });
  const goBack = element('button', 'Go back', 'btn', 'btn-secondary', 'w-100');
  goBack.onclick = () => { window.location.reload(); };
  todosWrapper.appendChild(goBack);
  return todosWrapper;
};

const tester = element('h3', 'Hello');


console.log(tester);