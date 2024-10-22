const categoriesList = document.querySelectorAll(".item");

console.log(`Number of Categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("li").length;
  console.log(`Category: ${title}, Elements: ${itemCount}`);
});
