const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerQuery);

function handlerQuery(evt) {
   const textContent = evt.currentTarget.value;
   const requiredLength = Number(evt.target.dataset.length);

  if (textContent.length === requiredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}