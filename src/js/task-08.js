const form = document.querySelector(".login-form");

console.log(form);

const handleSubmit = function (event){
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
      event.currentTarget.reset();
    }
  
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);