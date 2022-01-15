const inputEl = document.getElementById('validation-input');

console.log(inputEl);

inputEl.addEventListener("blur", (event) => {
    console.log('blur occured');
    inputEl.value = "";
  });