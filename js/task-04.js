const valueElement = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

 const incrementCounter = () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
  };

  const decrementCounter = () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
  };

  incrementButton.addEventListener('click', incrementCounter);
  decrementButton.addEventListener('click', decrementCounter);
