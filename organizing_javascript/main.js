//Organiazing-javascript

//1. Plain Old Javascript Objects
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff
  },
};
// 2. Object Constructors

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const playerThree = new Player("Steve", "Y");
const playerFour = new Player("Wixpa", "W");
console.log(playerThree);
//3. Factory Functions

function personFactory(name, marker) {
  return { name, marker };
}

const playerFive = personFactory("Jeff", "W");
console.log(playerFive);

function bookFactory(title, author, pages) {
  return { title, author, pages };
}

//4. Module Pattern
//5. Classes
//6. ES6 Modules
