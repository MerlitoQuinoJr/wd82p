// Exercise 2

// Create three variables 'testScore1', 'testScore2', and 'testScore3' and assign them different test scores as numbers.
// Calculate the average test score of these three scores and store it in a variable called 'averageScore'.
// Round the 'averageScore' to the nearest integer using Math.round().

// Your code here
let testScore1 = parseInt(prompt("Your score No. 1:"));
// console.log(typeof testScore1);
let testScore2 = parseInt(prompt("Your score No. 2:"));
// console.log(typeof testScore2);
let testScore3 = parseInt(prompt("Your score No. 3:"));
// console.log(typeof testScore3);

let averageScore = (testScore1 + testScore2 + testScore3) / 3;

averageScore = Math.round(averageScore);

// Log the 'averageScore' to the console.
console.log("Average Score:", averageScore);
