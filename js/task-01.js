

const listItems = document.querySelectorAll("li.item");
const quantityListItems = listItems.length; 
console.log(`Number of categories: ${quantityListItems}`);

listItems.forEach((element) => {
// console.log(element);
const title = element.firstElementChild.textContent;
console.log(`Category: ${title}`);	

const lists = element.lastElementChild;	
// console.log(lists);	
console.log(`Elements: ${lists.children.length}`);
});

