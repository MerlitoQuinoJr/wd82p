/*
8 data types
primitive
1. String
2. Boolean
3. Number
4. Null
5. Undefined
6. Bigint
7. Symbol
Non-primitive
8. array
9. object
*/

//Javascript Object

const fruits = ["apple", "orange", "banana"]; /*--> array */

//Create an object
//sample -> key: value
const user = {
  name: "Carlo",
  age: 28,
  isAdmin: true,
  "likes birds": true /* Using two strings */,
};

//Get values inside object
//sample console.log(user.name);

//Read values in an object
user.name;
user.age;
user.isAdmin;

//Remove value in an object

delete user.age;

//Add/change values in an object
user.job = "Software Engineer";
user.isAdmin = false;

console.log(user);

/*
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user2 = makeUser("John", 30);

console.log(user2);
*/
// property value shorthand -> magkamukha ung key

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user2 = makeUser("John", 30);

console.log(user2);

//property names limitations
let obj = {
  return: 3,
  0: "test",
};

// loop in an object

// for (key in object ){
//   execute
// }

for (let key in user) {
  console.log(user[key]);
}

//Exercise 1

let users = {};

users.names = "john";
users.surname = "Smith";

console.log(users);

users.names = "Pete";
console.log(users);

delete users.names;

console.log(users);

//Exercise 2

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};
// schedule.time = "8:30";

console.log(isEmpty(schedule));

// Exercise 3

function sumAllSalaries(salaries) {
  let sum = 0;

  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

let salary = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumAllSalaries(salary));
