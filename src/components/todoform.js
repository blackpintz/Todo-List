const inputElement = (id, type, inputname) => {
  const formDiv = document.createElement('div');
  formDiv.className = 'form-group col-9';
  formDiv.innerHTML = `
    <label for=${id}>${inputname}</label>
    <input type=${type} class='form-control' id=${id} placeholder=${inputname} required />
    `;
  return formDiv;
};

const checkBox = (id, checkname) => {
  const checkDiv = document.createElement('div');
  checkDiv.className = 'form-check form-check-inline';
  checkDiv.innerHTML = `
     <input class="form-check-input" type="radio" name="inlineRadioOptions" id=${id} required>
     <label class="form-check-label" for="inlineRadio2">${checkname}</label>
    `;
  return checkDiv;
};

export const todoForm = (id) => {
  const checkBoxes = document.createElement('div');
  checkBoxes.className = 'form-group col-9';
  checkBoxes.appendChild(checkBox('high', 'High'));
  checkBoxes.appendChild(checkBox('medium', 'Medium'));
  checkBoxes.appendChild(checkBox('low', 'Low'));
  const todoBtn = document.createElement('div');
  todoBtn.className = 'col-9 mb-2';
  todoBtn.innerHTML = `
    <button class='btn btn-block btn-success' id=${id} type='submit'>Add todo</button>
    `;
  const formRow = document.createElement('div');
  formRow.className = 'row w-50 mx-auto';
  formRow.appendChild(inputElement('titleId', 'text', 'Title'));
  formRow.appendChild(inputElement('descriptionId', 'text', 'Description'));
  formRow.appendChild(inputElement('dateId', 'date', 'Due date'));
  formRow.appendChild(checkBoxes);
  formRow.appendChild(todoBtn);
  return formRow;
};