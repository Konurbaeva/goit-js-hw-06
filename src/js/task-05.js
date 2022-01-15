const input = document.querySelector('input#name-input');
const log = document.getElementById('name-output');

const updateValue = function (e){
    if(e.target.value) {
        log.textContent = e.target.value;
       } else {
           log.textContent = 'Anonymous';
       }
  };

input.addEventListener('input', updateValue);