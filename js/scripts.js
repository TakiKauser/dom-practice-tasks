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