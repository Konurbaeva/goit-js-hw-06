const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const onInputChange = function (event){
    console.log(event.currentTarget.value);
    spanEl.style.fontSize = `${event.currentTarget.value}px`
 };
  
inputEl.addEventListener('input', onInputChange);