// console.log(window);

// alert("hello");

// const result = prompt("What is your name?");

// console.log(result);

// const targetElement = document.getElementById("title");
// const targetElement = document.getElementsByClassName("item");
// const targetElement = document.getElementsByName("firstname");
// console.log(document.body);

// const targetElement = document.querySelector("#title");
// const targetElement = document.querySelector(".titleStyle");

// const targetElement = document.querySelector(".item:nth-child(3)");
//const targetElement = document.querySelectorAll(".item");

// const targetElement = document.querySelector("#title");
// targetElement.style.color = "red";
// targetElement.style.backgroundColor = "blue";

// const targetElement = document.querySelectorAll("li");

/*
for (let index = 0; index < targetElement.length; index++) {
  if (index % 2 === 1) {
    // targetElement[index].className = "primary item";
    // console.log(targetElement[index].classList);
    // targetElement[index].classList.add("primary");
    // targetElement[index].classList.remove("item");
    // targetElement[index].classList.toggle("primary");
  }
//   targetElement[index].setAttribute("id", index);
}
*/

// for (let element of targetElement) {
//   console.log(element);
// }

//targetElement.forEach((target, i) => console.log(target));

// targetElement.className = "";

// const targetElement = document.querySelectorAll(".item")[3];

const list = document.querySelector(".list");

// const list = targetElement.parentNode;

//const list = targetElement.parentElement;

// const child = targetElement.children[2].previousElementSibling;
// const child = targetElement.children[2].nextElementSibling;

// const list = child.closest("main");

// const child = targetElement.childNodes[2];

// child.style.color = "red";

// list.innerHTML = list.innerHTML + "<li>Item X</li>";

// list.insertAdjacentHTML("beforeEnd", "<li>Item X</li>");

/*
const newLi = document.createElement("li");

newLi.innerText = "Item 7";
newLi.style.color = "red";

const newLi2 = document.createElement("li");

newLi2.innerText = "Item 8";
newLi2.style.color = "green";

list.append(newLi, newLi2, newLi, newLi);
*/

const drinks = [
  { name: "Beer", price: 2 },
  { name: "Whiskey", price: 5 },
  { name: "Wine", price: 8 },
];

const drinksList = document.createElement("ul");

const main = document.querySelector("main");

main.append(drinksList);

drinks.forEach((drink, index) => {
  const listItem = document.createElement("li");

  listItem.className = `drinkItem${index + 1}`;
  listItem.innerText = `${index + 1}. ${drink.name} - ${drink.price}$`;
  drinksList.append(listItem);
});

const drink2 = document.querySelector(".drinkItem2");
const drink1 = document.querySelector(".drinkItem1");
const drink3 = document.querySelector(".drinkItem3");

const newDrink = document.createElement("li");
newDrink.innerText = "1.Water - 1";

console.dir(drink2);
drink1.replaceWith(newDrink);
drink3.remove();

// list.prepend(newLi);
// console.dir(list);
