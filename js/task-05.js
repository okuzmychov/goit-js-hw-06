const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

input.addEventListener("input", handlerQuery);
function handlerQuery(evt) {
  title.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === "") {
    return (title.innerHTML = "Anonymous");
  }
}
