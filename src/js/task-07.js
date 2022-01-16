const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');



const onInputChange = function (event){
    spanEl.style.fontSize = event.target.value + 'px'
 };
  
inputEl.addEventListener('input', onInputChange);