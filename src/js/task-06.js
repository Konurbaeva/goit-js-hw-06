const inputEl = document.getElementById('validation-input');
const dataLengthMinimum = inputEl.dataset.length;


inputEl.addEventListener("blur", (event) => {

   console.log('event.target.value.length', event.target.value.length)
   console.log('dataLengthMinimum', dataLengthMinimum)

    if(event.target.value.length > dataLengthMinimum) {
       console.log('error! Your input below min value')
    }
  });