// get elements

const items = document.getElementsByClassName("items");

const itemContainer = document.getElementsByClassName("item-container");

const container = document.getElementsByClassName("container");

const addBtn = document.getElementsByClassName("add-item")[0].getElementsByTagName("button");

// set attributes

items[0].setAttribute("id", "items");
itemContainer[0].setAttribute("id", "item-container");
container[0].setAttribute("id", "container");

addBtn[0].setAttribute("id", "add-btn");

// set li attributes
const item = document.getElementsByTagName("li");

for (let i = 1; i <= item.length; i++) {
    // set id 
    item[i - 1].setAttribute("id", "item-" + i);
    // set class
    item[i - 1].setAttribute("class", "item");
}

document.getElementById("add-btn").addEventListener("click", function () {
    // create new list item
    const newListItem = document.createElement("li");
    // add class to new list item
    newListItem.classList.add("item");
    // get previous item number from innerText
    const previousItemNumber = parseInt(item[(item.length - 1)].innerText);
    // set new list item's innertext
    newListItem.innerText = (previousItemNumber + 1)
    // get parent element
    const parentElement = document.getElementById("items");
    // append child to parent element
    parentElement.appendChild(newListItem);
});

// remove child using event delegate
document.getElementById("item-container").addEventListener("dblclick", function (event) {
    event.target.parentNode.removeChild(event.target);
});