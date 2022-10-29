const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const items = ingredients.map(ingredient => { 
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  
  return itemEl;
})
listEl.append(...items);

// Old-school method:


// const items = [];
// for (const ingredient of ingredients) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   items.push(itemEl);
// }
//listEl.append(...items);




