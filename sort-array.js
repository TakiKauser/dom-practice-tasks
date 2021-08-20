// sorting numbers
// first way
const numbers = [1, 3, 11, 4, 7, 89, 96, 85, 94, 86, 0, 10, 2, 8];

sortedNumbers1 = numbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedNumbers1);

// search string
const jsBookList = [
    "A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "JavaScript & JQuery: Interactive Front-End Web Development",
    "JavaScript: The Good Parts",
    "Learn JavaScript VISUALLY",
    "JavaScript: The Definitive Guide",
    "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "JavaScript for Kids: A Playful Introduction to Programming",
    "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
    "High-Performance Browser Networking"
];

const searchString = "JavaScript";
const bookContainingJS = [];

// first way
// for (const jsBook of jsBookList) {
//     if (jsBook.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) {
//         bookContainingJS.push(jsBook);
//     }
// }
// console.log(bookContainingJS);

// second way
for (const jsBook of jsBookList) {
    if ((jsBook.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) != -1)) {
        bookContainingJS.push(jsBook);
    }
}
console.log(bookContainingJS);