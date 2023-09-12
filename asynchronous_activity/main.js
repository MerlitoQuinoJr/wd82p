// Problem 1: Sum of Two Numbers

// Write a JavaScript function called addNumbers that takes two numbers as parameters and returns their sum.

// function sumOfTwoNumber(number1, number2) {
//   sum = number1 + number2;

//   return sum;
// }
// console.log(sumOfTwoNumber(5, 7));

// function sumOfTwoNumber(number1, number2) {
//   return number1 + number2;
// }

const sumOfTwoNumber = (number1, number2) => number1 + number2;

console.log(sumOfTwoNumber(5, 8));

// Problem 2: Factorial of a Number

// Write a JavaScript function called factorial that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers from 1 to n.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// Problem 3: Reverse a String

// Write a JavaScript function called reverseString that takes a string as input and returns the reversed string.

function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

console.log(reverseString("Hello"));

// function reverseWord(enterWord) {
//   const reversedWord = enterWord.split("").reverse().join("");
//   return reversedWord;
// }

// const word = "Good Evening!";
// const reversed = reverseWord(word);
// console.log(reversed);

/* Problem 4: Find the Largest Number in an Array

Write a JavaScript function called findLargestNumber that takes an array of numbers as input and returns the largest number in the array.
*/
function findLargestNumber(arr) {
  if (arr.length === 0) return undefined;

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([5, 1, 55, 1100, 210]));

/* Problem 5: Palindrome Checker

Write a JavaScript function called isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization.
*/

// function reverseString(str) {
//   let reversedStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str.charAt(i);
//   }
//   return str;
// }

// function isPalindrome(str) {
//   return str === reverseString(str);
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return str;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
