

// try and catch


// the try statement allows to define a block of code to be tested for error while it is being executed.

// the catch statement allows you to define a block of code to be executed,if an error occurs in the try block


// console.log(a);// Uncaught ReferenceError: a is not defined




// console.log("hello");
// console.log("hello");
// console.log(a);
// console.log("hello2");
// console.log("hello3");

// outut

// hello
// hello
//Uncaught ReferenceError: a is not defined




// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }catch{
//      console.log("caught an error a is not defined");
// }
// console.log("hello2");
// console.log("hello3");


// output

// hello
// hello
// caught an error a is not defined
// hello2
// hello3


//***************************** */

console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch(err){
     console.log("caught an error a is not defined");
     console.log(err);
}
console.log("hello2");
console.log("hello3");


// output

// hello
// hello

// caught an error a is not defined tryCatch.js:58:14
// ReferenceError: a is not defined
/* <anonymous> http://127.0.0.1:5500/Try_catch/tryCatch.js:56 */

// hello2
// hello3