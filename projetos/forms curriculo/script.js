const state = document.getElementById('estado');
const saveBtn = document.getElementById('save-btn');
const forms = document.getElementById('form-cv');

function stateOptions() {
const options = ["-----", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ]
  for (let index = 0; index < options.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = options[index];
    state.appendChild(option);
  }
}

// function sotpSubmit (event) {
// event.preventDefault();
// const div = document.createElement('div');
// forms.innerText = div
// }

// function addEvents() {
//   saveBtn.addEventListener('click', sotpSubmit);
// }

// addEvents();
stateOptions();