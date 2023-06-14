const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  console.log(itemEl);
}).join('');

const ulEl = document.querySelector('ul');

ulEl.insertAdjacentHTML("beforeend", ingredients);
// ulEl.append(...ingredients);
