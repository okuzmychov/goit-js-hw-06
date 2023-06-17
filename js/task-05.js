const input = document.querySelector('#name-input');
const title = document.querySelector('#name-output');

input.addEventListener('change', handlerQuery)
function handlerQuery(evt) {
    // console.log(evt.currenTarget.value);
    title.textContent = evt.currentTarget.value;
} 