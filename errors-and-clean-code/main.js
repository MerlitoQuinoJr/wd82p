//Errors and Clean Code
//Referrence Error
// const a = "Hello";
// const b = "World";

// console.log(c);

//Syntax Error
// function printHelloWorld() {
// console.log"Hello, World!";  --> console.log("Hello, World!");
// }

//Type Error
// const name = "Carlo";
// name = "Carlos";

//Clean code

const display = document.querySelector(".display");

const content = document.createElement("div");

content.classList.add("content");

content.textContent = "this is a text content";

container.appendChild(content);
