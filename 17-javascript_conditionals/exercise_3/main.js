// Exercise 3

// Create a variable called 'temperature' and assign it a temperature value in Celsius.
// Write a conditional statement (if-else) to determine the weather condition based on the temperature:
// - If the temperature is above 30°C, log "It's hot outside!"
// - If the temperature is between 20°C and 30°C (inclusive), log "The weather is pleasant."
// - If the temperature is below 20°C, log "It's a bit chilly."

// Your code here

let temperature = parseInt(prompt("Please input your temperature here (°C):"));

if (temperature > 30) {
  console.log("It's hot outside");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}
