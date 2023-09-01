// Exercise 1

// Declare a variable called 'balance' and assign it a starting balance of 1000.
// Create variables 'transaction1', 'transaction2', and 'transaction3' to represent three transactions.
// Update the 'balance' variable after each transaction:
// - 'transaction1': Add 500 to 'balance'.
// - 'transaction2': Deduct 200 from 'balance'.
// - 'transaction3': Deduct 1000 from 'balance'.

// Your code here

// Solution 1

// let balance = 1000;

// let transaction1 = 500;
// let balance1 = balance + transaction1;
// console.log(balance1);

// let transaction2 = -200;
// let balance2 = balance1 + transaction2;
// console.log(balance2);

// let transaction3 = -1000;
// let balance3 = balance2 + transaction3;
// console.log(balance3);

// Log the final 'balance' after all three transactions.

// console.log("Final balance", balance3);

let balance = 1000;

let transaction1 = 500;
balance += transaction1;
console.log("Transaction1", balance);

let transaction2 = -200;
balance += transaction2;
console.log("Transaction2", balance);

let transaction3 = -1000;
balance += transaction3;
console.log("Transaction3", balance);

console.log("Final balance", balance);
