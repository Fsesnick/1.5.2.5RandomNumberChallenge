// Collect input from a user
let numLow = prompt ("provide a the low number.");
let numHigh = prompt ("provide a high number.");

// Convert the input to a number

const low_to_int = parseInt(numLow);
const high_to_int = parseInt(numHigh);

if(low_to_int && high_to_int){ // is value is  Nan the condition is false

// Use Math.random() and the user's number to generate a random number
const randNumber = Math.floor (Math.random() * high_to_int -  low_to_int + 1) + low_to_int;

// Create a message displaying the random number

console.log(`${randNumber} is a random number between ${low_to_int} and ${high_to_int}.`);
}else {
console.log('You need to provide a number.Try again');
}