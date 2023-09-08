/* 
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
  3.1. another <h1> that says “I’m in a div”
  3.2. a <p> that says “ME TOO!”
  3.3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
***/

const container = document.querySelector("#container");

const p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
// div.style.height = "100px";
// div.style.width = "100px";
container.appendChild(div);

div.classList.add("div");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p1 = document.createElement("p1");
p1.textContent = "ME TOO!";
div.appendChild(p1);
