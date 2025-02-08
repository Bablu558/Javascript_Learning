

//***********ARROW FUNCTION**************** */


// An arrow function (=>) is a shorter way to write functions in JavaScript.

// It makes code cleaner and behaves differently with this.



// NORMAL FUNCTION 

// function add(a,b){
//     return a+b;
// };
// console.log(add(5,3)); // 8




//*********** */ With Arrow Funciton*******************

// const sum=(c,d)=> c+d;
// console.log(sum(5,3));// 8

//********* */ NOTE***********

// Shorter & Cleaner!

// No need for {} and return if it's a single expression.


//***************************************** */

//  Single Parameter (No Parentheses Needed)

//If there is only one parameter, parentheses (()) are optional.

//When your arrow function has only one parameter, you can omit the parentheses ().

// const greet=name=>`Hello,${name}`;
// console.log(greet("bablu"));// Hello, Bablu!

//*******NOTES***** */

// Why no parentheses
// Since there is only one parameter, parentheses are optional.
// The function takes name and returns a string directly.

//*******NOTES***** */



//***************************************** */



// Multiple Parameters (Parentheses Required)

// When you have two or more parameters, you must use parentheses ().


// const multiply=(a,b)=> a*b;
// console.log(multiply(4,5));// 20


//*******NOTES***** */

// Why do we need parentheses?

// When there are multiple parameters, JavaScript needs parentheses to separate them.
// Without parentheses, JavaScript would not understand where one parameter ends and the next begins.


// Incorrect

// const add = a, b => a + b; 

//*******NOTES***** */




//************************************************* */



// No Parameters (Must Use ())

//If the arrow function does not take any parameters, you must use empty parentheses ().


// const sayHello=()=> "Hello,World";
// console.log(sayHello());//Hello, World!


// *****NOTES**********

// Since there are no parameters, JavaScript requires () as a placeholder.

// *****NOTES**********



//*********************************************** */

// Multiline Arrow Function (Use {} and return)


// const square = num => {
//     let result = num * num;
//     return result;
// };
// console.log(square(6)); // 36



//**********Implicit return************ */


// normal

// function add(a,b){
//     return a+b;
// };
// console.log(add(5,3)); // output:8



// // with Implicit return

// const add2=(a,b)=>(
//      a+b
// );
// console.log(add(5,3)); // 8





//******************************** */

// Explicit Return (With {} and return)

// incorrect (no return in {})

const add = (a, b) => { a + b }; //  No return = undefined
console.log(add(5, 3));  // undefined


//*********************************** */

// Correct (Explicit return in {})

const sum = (a, b) => { return a + b; };
console.log(sum(5, 3));  // 8


// NOTE :: If {} are used, you MUST write return.



