const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const formData = {
    Email: email.value,
    Password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}
