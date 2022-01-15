const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");

const handleDecrementClick = () => {
  console.log("decrement clicked");
};

const handleIncrementClick = () => {
    console.log("increment clicked");
  };

decrement.addEventListener("click", handleDecrementClick);
increment.addEventListener("click", handleIncrementClick);