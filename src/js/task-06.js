const inputEl = document.getElementById('validation-input');
const dataLengthMinimum = inputEl.dataset.length;


  inputEl.addEventListener("blur", (event) => {
     event.target.value.length >= Number(dataLengthMinimum)?  
      inputEl.setAttribute('class', 'valid'):
      inputEl.setAttribute('class', 'invalid');
   });