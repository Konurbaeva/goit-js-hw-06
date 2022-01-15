const counterValue = 0;
const button = document.querySelector('button');
const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");

const handleClick = function (event){
  const { dataset: { action: name }, value } = event.target;
  
  console.log(name)
  console.log(value)
   
};

decrement.addEventListener("click", handleClick);
increment.addEventListener("click", handleClick);


