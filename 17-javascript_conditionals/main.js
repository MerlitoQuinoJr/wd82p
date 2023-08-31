let hour = 11;

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

let userLoggedIn = false;

if (userLoggedIn) {
  console.log("Redirect to homepage");
} else {
  console.log("Redirect to login page");
}

let grade = parseInt(prompt("What is your grade?"));
console.log(typeof grade);

if (grade < 75) {
  console.log("Failed! Try again next quarter.");
} else if (grade <= 80) {
  console.log("Pass! Exert more effort.");
} else if (grade <= 85) {
  console.log("Good! Keep it up.");
} else if (grade <= 90) {
  console.log("Very good! A job well done!.");
} else {
  console.log("Excellent");
}
