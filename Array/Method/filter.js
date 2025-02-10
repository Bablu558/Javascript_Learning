
//************************************************************ */

// filter() Method in JavaScript 

// The .filter() method is used to create a new array containing only the elements that meet a certain condition. 
// It does not modify the original array.


// Syntax of filter()


// const newArray = array.filter(function(element, index, array) {
//     return condition; // true or false
// });


//element -> The current element being processed.

// index (optional) -> The index of the current element.

// array (optional) -> The original array.


// Returns:

// A new array with elements that return true for the condition.


//************************************************************************* */



// 1. **********Filtering Even Numbers*********** */


// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4, 6]

//***Notes***** */

// Here, filter() checks if each number is even (num % 2 === 0) and keeps only those that satisfy the condition.

//***Notes END***** */



//*************************************************************************** */

//  2. *********Filtering Objects in an Array***********


// const users = [
//     { name: "Deepak", age: 35 },
//     { name: "Rahul", age: 33 },
//     { name: "Bablu", age: 23 },
//     { name: "Rohit", age: 13 },

// ];

// const adults = users.filter(user => user.age >= 18);

// console.log(adults);

// output:

// Array(3) [ {…}, {…}, {…} ]
 
// 0: Object { name: "Deepak", age: 35 }
 
// 1: Object { name: "Rahul", age: 33 }
 
// 2: Object { name: "Bablu", age: 23 }

// length: 3


//****************NOTES************ */

// Here, filter() removes users under 18 and returns a new array with only adults.

//****************NOTES END************ */

//************************************************************ */



// 3. ***********Filtering Words Based on Length************************* */



// const words = ["Hi", "Hello", "Hey", "JavaScript", "Go"];

// const longWords = words.filter(word => word.length > 3);

// console.log(longWords); // Output: ["Hello", "JavaScript"]

//**********NOTES*********** */

// Only words longer than 3 letters are included.


//**********NOTES END*********** */

//************************************************************ */




// 4. ***********Using filter() with Index************************* */


// Filtering Even Indexed Elements


// const numbers = [10, 20, 30, 40, 50, 60];

// const evenIndexedNumbers = numbers.filter((num, index) => index % 2 === 0);

// console.log(evenIndexedNumbers); // Output: [10, 30, 50]


//**********NOTES*********** */

//Here, filter() keeps only elements at even indices (index % 2 === 0).

//**********NOTES END*********** */

//*********************************************************** */



//  5. *******Removing Falsy Values from an Array************* */


// Filtering Out Falsy Values (false, 0, "", null, undefined, NaN)


// const mixedArray = [0, "Hello", false, "", null, undefined, "JavaScript"];

// const truthyValues = mixedArray.filter(Boolean);

// console.log(truthyValues); // Output: ["Hello", "JavaScript"]


//Here, Boolean acts as a callback function that removes all falsy values.

//**************************************************************************** */



// 6. ********* filter() with Chaining (map(), reduce()) **************************** */

// Filtering Even Numbers and Squaring Them


// const numbers = [1, 2, 3, 4, 5, 6];

// const squaredEven = numbers
//     .filter(num => num % 2 === 0)  // First, filter even numbers
//     .map(num => num ** 2);         // Then, square them

// console.log(squaredEven); // Output: [4, 16, 36]


//**********NOTES*********** */

//First, filter() selects even numbers, then map() squares them.

//**********NOTES END*********** */

 


// const numbers = [1, 2, 3, 4, 5, 6];

// const squaredEven = numbers
//     .filter(num2 => num2 % 2 === 0)  // First, filter even numbers
//     .map(num22 => num22 ** 2);         // Then, square them

// console.log(squaredEven); // Output: [4, 16, 36]



//******NOTES*********** */

// Why does it work even if filter() and map() use different variable names

// Because filter() returns a new array, and map() works on that new array separately. 
// The variable names are only used inside each function, and they do not have to match.


// filter() only extracts [2, 4, 6].
// Then, map() works on this new array and squares each number.


//num2 and num22 are just placeholder names inside their respective functions.
//Once filter() finishes, it produces a new array, and map() works on that separately.

//Changing variable names in map() does not affect filter(), because map() only sees the new filtered array.


//Think of each function as an independent worker.

// filter() does its job and hands over a new list to map().
// map() doesn't care what name was used before, it just works on the new list.



// *****Super Important Notes on .filter() & .map()*****

// The combination of .filter() & .map() is super powerful because it creates new arrays immutably (without modifying the original array).

//  If you use .map() without .filter(), it will run on every element of the original array.

//  If you use .filter() first, then .map(), the .map() function will only run on the newly filtered array instead of the original array.


//******NOTES END*********** */
