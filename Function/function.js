




//A function in JavaScript is a reusable block of code that performs a specific task. 

// It helps in making the code modular, readable, and reusable.

//A function is like a machine. 
// You give it input (parameters), 
// it does some work, and then it may return output.



//********************************************************** */

// Example: A simple function to say "Hello!"

// function sayHello(){
//     console.log("hello, world!");
// }
// sayHello();


// function:: is the keyword to define a function.

// sayHello:: is the name of the function.

// () means it takes no input.

// {} contains the code to execute.

// sayHello(); calls the function.




//**************************************** */


// function rolldice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// rolldice();




//**************************************** */


// 2. Function with Parameters/Argument

// Functions can take parameters (inputs) and use them inside the function.

// function UName(name){
//     // console.log("hello","" + name);
//     console.log("hello," + name + "!");

// }
// UName("Bablu");


// name:: is a parameter(placeholder for input)

// Bablu:: are argument (Actual values passed)



// function UNameInfo(name , age){
    // console.log("hello","" + name);
    // console.log("hello " + name + "!");
    // console.log("Your age is: " + age + "!");
       
//     console.log(`${name}'s age is: ${age},`);

// }
// UNameInfo("Bablu",22);

// we can call function for multiple 

// UNameInfo("Ankush",23);
// UNameInfo("Shubham",24);

// UNameInfo("Shubham"); // outout :: Shubham's age is: undefined,
// UNameInfo(10);       // 10's age is: undefined,


// Note 

// Arguments are assigned in order (left to right

//If an argument is missing, its value becomes undefined.

// JavaScript does NOT auto-shift arguments (if you pass only the second value, the first one remains undefined).




// function UName(a,b){
//         console.log(a+b);
    
//     }
//     UName(1,2); // 3
//     UName(1,7); // 8
//     UName(8,2);// 10


// return keyword

// function sum(a,b){
//     return a+b;
// }
// // console.log(sum(4,5)); // 9



// // let s= sum(3,4);
// // console.log(s); // 7


// console.log(sum(sum(4,5),3)); // (4,5)=9, (9,3)=12









/// Note

// function sum(a,b){
//     console.log("Return 1");
//     console.log("Return 2");

//     return a+b;
//     console.log("Return 3"); // after hover:: Unreachable code detected. 
//     console.log("Return 4");

// }

// console.log(s); // 7


// console.log(sum(4,5)); // (4,5)=9, (9,3)=12




// output

// unreachable code after return statement

// Return 1 
// Return 2
// 9



//**************************************** */


// Scope

// Scope in JavaScript refers to where a variable can be accessed in your code.

//  It defines the visibility and lifetime of variables.

// Scope determines the accessibility of variables, objects, and functions from different parts of the code


// Types of Scope in JavaScript

//1. Local Scope (Function Scope)

//2. Block Scope 

//3. Nested Scope (Lexical Scope)

//4. Global Scope




// ********** 1. Local Scope (Function Scope) *******************************

//1. Local Scope (Function Scope)


// function sum(a,b){
//     let sumAd=a+b; // function scope
// }

// console.log(sumAd);

// error 

// Uncaught ReferenceError: sumAd is not defined
/* <anonymous> http://127.0.0.1:5500/Function/function.js:197 */




// Variables declared inside a function can only be accessed inside that function.

// function Test(){
//     let localVar= "i am function scope"
//     console.log(localVar);
// }
// Test();  // OUTPUT:: i am function scope


// BUT 

// function Test(){
//     let localVar= "i am function scope"
//     console.log(localVar); // its inside function that's why its working
// }
// Test();

// console.log(localVar); // for this line error will be :: Uncaught ReferenceError: localVar is not defined

//  Key Rule: Variables inside a function cannot be accessed outside.



//*********** 2. Block Scope ***************  */


// variables declared inside a {} block can not be accessed from outside the block.

// {
//     let a= 25;
// }
// console.log(a); // output::Uncaught ReferenceError: a is not defined


    // {
    //     const a= 25;
    // }
    // console.log(a) // output:: 25


// ********** NOTE *******************

// NOTE:: 

// Introduced in ES6, variables declared with let and const are only accessible inside the block {} where they are declared.

// let and const stay inside the block {} where they are defined.

// var does NOT follow block scope


// ********** NOTE END *******************



// Example for var 

// {
//     var testVar = "var is global"
// }

// console.log(testVar);  //  Accessible outside block  

// NOTE:: " Avoid using var for block scope because it leaks outside {}.


// for(let i=1; i<=5; i++){
//     console.log(i);

    // output ::
      
    // 1
    // 2
    // 3
    // 4
    // 5
// }

// console.log(i); // output::Uncaught ReferenceError: i is not defined





//************Nested Scope (Lexical Scope)**************  */


// function inside other functions can access variables from outer functions

// a variable defined outside a function can be accessible inside another function defined after the variable declaration


// function outerFunc() {
//     let x=5;
//     let y=4;
//     function innerFunc(){
//        console.log(x);
//        console.log(y);

//     }

//     innerFunc();
// }




// function outerFunc() {
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
 
//      }
//     let x=5;
//     let y=4;
//     function innerFunc(){
//         let a=14;
//        console.log(x);
//        console.log(y);

//     }
//     console.log(a); // Uncaught ReferenceError: a is not defined
//     innerFunc();
// }



// Hoisting concept 

// function outerFunc() {
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
 
//      }
//     let x=5;
//     let y=4;
//     function innerFunc(){
//        console.log(x);
//        console.log(y);

//     }

//     innerFunc();
// }




// function outer(){
//     let outerVar = " i am outer";

//     function inner(){
//         console.log(outerVar); // Accessible (Lexical scope)
//     }
//     inner();
// }
// outer();





// *********GLOBAL SCOPE****************

// Variables declared outside a function are global variables. They can be accessed anywhere in the program.


// let globalVar = "I am global"; // Global variable

// function test() {
//     console.log(globalVar); // ✅ Accessible inside function
// }

// test();
// console.log(globalVar); // ✅ Accessible outside function too



// NOTE :: Key Point: Global variables are available everywhere in your code.




// let greet = "hello"; // global

// function changeGreet(){
//     let greet ="namaste"; // Function   Scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); // lexical scope
//     }
//     // innerGreet(); // accessible

// }
// console.log(greet);
// changeGreet();
// innerGreet(); // not accessible 





// ********** STORE FUNCTION IN VARIABLE ************


// SYNTAX 

// const variable= function(arg1, arg2...){
//     // do or return something
// }




//**********HIGH ORDER FUNCTION*********** */

// A Higher-Order Function (HOF) is a function that either:

// Takes another function as an argument (callback function).
// Returns a function.



// function mGreet(func, count){ // higer order function
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// mGreet(greet, 2); // hello  will print 2 times



// ********************************************************************


