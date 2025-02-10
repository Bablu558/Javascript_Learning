

// setTimeout()

//setTimeout() is a JavaScript function that executes a function after a specified delay (in milliseconds).

// Basic Syntax

//setTimeout(function, delay);



// function = The function to be executed after the delay.
// delay =    Time in milliseconds (1 second = 1000 ms).

//**************************************************************** */



// console.log("Hi there");

// setTimeout(() => {
//     console.log("Hello, after 4 seconds!");
// }, 4000);



// setTimeout(() => {
//     console.log("Hello, after 2 seconds!");
// }, 7000);


// NOTES:: The arrow function inside setTimeout() runs after 2000ms (2 seconds)


//********************************************* */

// Using Named Function in setTimeout()

// Instead of an inline function, use a named function


// function greet() {
//     console.log("Welcome to JavaScript!");
// }

// setTimeout(greet, 3000); // Calls greet() after 3 seconds


//************************************************************* */

// setTimeout() with Arguments

// function greet(name, age) {
//     console.log(`Hello ${name}, you are ${age} years old.`);
// }

// setTimeout(greet, 4000, "Bablu", 23); // Calls greet("Bablu", 23) after 4 seconds



//**************************************************** */

//Stopping setTimeout() (Using clearTimeout())


//Cancel setTimeout() before execution

// const timerId = setTimeout(() => {
//     console.log("This will not be printed!");
// }, 3000);

// clearTimeout(timerId); // Cancels the timeout before it runs
// console.log("it will be print");

// NOTES: Since clearTimeout(timerId) is called before 3 seconds, the function never executes.




//************************************************************* */

// Chaining setTimeout() (Recursive Timeout)

// Call a function repeatedly with delay


// This repeats execution with a 2-second delay between each call.
// This is an alternative to setInterval() for more control.




// function repeatMessage() {
//     console.log("This will repeat every 2 seconds!");
//     setTimeout(repeatMessage, 2000);
// }
// repeatMessage();


//setTimeout() is usually used to execute a function once after a delay,
//  but if we call setTimeout() inside the function itself, 
// we can create a loop-like behavior where the function keeps executing repeatedly with a delay between each call.







