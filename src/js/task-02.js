const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let nodes = ingredients.map(product => {
  let li = document.createElement('li');
  li.textContent = product;
  li.classList.add('item');
  return li;
});

list.append(...nodes);