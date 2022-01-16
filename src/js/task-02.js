const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector("#ingredients");

let ingredientsList = ingredients.map(product => {
  let li = document.createElement('li');
  li.textContent = product;
  li.classList.add('item');
  return li;
});

ingredientsListRef.append(...ingredientsList);