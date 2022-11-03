const navElItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${navElItem.length}`);

navElItem.forEach(element => {
  console.log('Category: ', element.querySelector('h2').textContent);
  console.log('Elements: ', element.querySelectorAll('li').length);
});
