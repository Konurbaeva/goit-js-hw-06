let counterValue = 0;
let counter = document.getElementById('value');
const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");


const handleClick = function (event){
  const { dataset: { action: name }} = event.target;
  
  if(name === 'increment'){
    const num = parseInt(counter.innerHTML);
    counter.innerHTML = num + 1;
    counterValue = counter;

  } else if (name === 'decrement'){
    const num = parseInt(counter.innerHTML);
    counter.innerHTML = num - 1;
    counterValue = counter;
  }
};

decrement.addEventListener("click", handleClick);
increment.addEventListener("click", handleClick);


