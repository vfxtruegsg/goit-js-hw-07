const categories = document.querySelectorAll(".item");
const headerItemsSection = document.querySelectorAll("h2");
const items = document.querySelectorAll(".item ul");

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i++) {
  console.log(`Category: ${headerItemsSection[i].textContent}`);
  console.log(`Elements: ${items[i].children.length}`);
}
