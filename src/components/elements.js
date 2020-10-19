import Todo from './todo';

export default () => {
  const element = (type, text, ...classes) => {
    const elementType = document.createElement(type);
    elementType.classList.add(...classes);
    elementType.innerText = text;
    return elementType;
  };

  const collectData = (event) => {
    const title = event.target[0].value;
    const description = event.target[1].value;
    const due = event.target[2].value;
    let priority;
    if (document.getElementById('high').checked) priority = 'High';
    if (document.getElementById('medium').checked) priority = 'Medium';
    if (document.getElementById('low').checked) priority = 'Low';

    return new Todo(title, description, due, priority);
  };

  const removeElements = (...elements) => elements.forEach((el) => document.getElementById(el).remove());

  return { element, collectData, removeElements };
};