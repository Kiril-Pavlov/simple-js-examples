// input from the user stored in number variable
const number = parseInt(prompt("Enter a number: "));

// check if number is positive, negative or zero
if (number > 0) {
  console.log(`The number ${number} is positive`);
} else if (number == 0) {
  console.log(`The number ${number} is zero`);
} else {
  console.log(`The number ${number} is negative`);
}
