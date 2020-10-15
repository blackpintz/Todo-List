import element from './elements.js';

const inputElement = (id, type, inputname, value) => {
  const checkValue = value !== undefined ? value : '';
  const formDiv = document.createElement('div');
  formDiv.className = 'form-group col-9';
  const labelTag = element('label', inputname);
  labelTag.setAttribute('for', id);
  const inputTag = element('input', '', 'form-control');
  inputTag.setAttribute('type', type);
  inputTag.setAttribute('id', id);
  inputTag.setAttribute('placeholder', inputname);
  inputTag.setAttribute('value', checkValue);
  formDiv.appendChild(labelTag);
  formDiv.appendChild(inputTag);
  // formDiv.innerHTML = `
  //   <label for=${id}>${inputname}</label>
  //   <input type=${type} class='form-control' id=${id} placeholder=${inputname} required value=${checkValue} >
  //   `;
  console.log(value);
  return formDiv;
};

const checkBox = (id, project = {}) => {
  const checkValue = project.priority !== undefined && project.priority.toLowerCase() === id ? 'checked' : '';
  const checkDiv = document.createElement('div');
  checkDiv.className = 'form-check form-check-inline';
  checkDiv.innerHTML = `
     <input class="form-check-input" type="radio" name="inlineRadioOptions" id=${id} ${checkValue}>
     <label class="form-check-label text-capitalize" for="inlineRadio2">${id}</label>
    `;
  return checkDiv;
};

export const todoForm = (id, project = {}) => {
  const checkBoxes = document.createElement('div');
  checkBoxes.className = 'form-group col-9';
  checkBoxes.appendChild(checkBox('high', project));
  checkBoxes.appendChild(checkBox('medium', project));
  checkBoxes.appendChild(checkBox('low', project));
  const todoBtn = document.createElement('div');
  todoBtn.className = 'col-9 mb-2';
  todoBtn.innerHTML = `
    <button class='btn btn-block btn-success' id=${id} type='submit'>Add todo</button>
    `;
  const formRow = document.createElement('div');
  formRow.className = 'row w-50 mx-auto';
  formRow.appendChild(inputElement('titleId', 'text', 'Title', project.title));
  formRow.appendChild(inputElement('descriptionId', 'text', 'Description', project.description));
  formRow.appendChild(inputElement('dateId', 'date', 'Due date', project.dueDate));
  formRow.appendChild(checkBoxes);
  formRow.appendChild(todoBtn);
  return formRow;
};