

// Js Objects Literals


//  Definition

// Object literals are a simple way to create objects in JavaScript using curly braces {}.

// They allow us to store related data in key-value pairs.

// property => (key, value) pair

// Example of an Object Literal:

// let person = {
//     name: "Bablu Kumar",
//     age: 25,
//     city: "Bihar"
// };
// console.log(person);

// output 
// here is no specific order but key pair will correct


// Object { name: "Bablu Kumar", age: 25, city: "Bihar" }


// age: 25​
// city: "Bihar"​
// name: "Bablu Kumar"


// person(object)

// name,age,city are key

// Bablu kumar, 25, Bihar  are value



//*********************************************** */

//  Key Concepts in Object Literals

// Objects store data in key-value pairs.

// Keys are strings (by default), 

// and values can be any data type (string, number, boolean, array, function, another object, etc


// let student = {
//     name: "Amit",
//     age: 22,
//     marks: [80, 90, 95],  // Array as a value
//     isPassed: true
// };
// console.log(student);  


//*********************************************** */



// Accessing/Get  Object Properties/Values

// Dot notation (.): object.property

// Bracket notation ([]): object["property"]


// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// console.log(car.brand);   // Dot notation => Output: Toyota
// console.log(car["year"]); // Bracket notation => Output: 2020



// When to Use Bracket Notation

// If the key has spaces or special characters.

// If you want to dynamically access a property.


// let person = {
//     "full name": "Bablu Kumar",
//     age: 30
// };

// console.log(person["full name"]);  // Output: Bablu Kumar



//*********************************************** */


// Adding, Updating & Deleting Properties

// Adding a New Property

// let user = { name: "Bablu" };
// user.age = 22;              // Adding new property
// console.log(user);         // Output: { name: "Bablu", age: 22 }



// Updating an Existing Property

// user.name = "Bablu Kumar";
// console.log(user.name);  // Output: Bablu Kumar



// Deleting a Property

// delete user.age;
// console.log(user);  // Output: { name: "Bablu Kumar" }



//*********************************************** */

// Objects with Functions (Methods)

// let person={
//     name:"Bablu",
//     greet: function(){
//         console.log("Hello,my name is "+ this.name);
//     }
// };
// person.greet(); // output :     Hello, my name is Bablu

// NOTE:: Here, this.name refers to the name property of the same object.


// Shortcut for Defining Methods

// let person2={
//     name:"Bablu",
//     greet(){
//         console.log("Hello," + this.name);
//     }
// };
// person2.greet(); // output: Hello, Bablu


// Nested Objects (Objects Inside Objects)

// An object can contain another object as a property.


// let company={
//     name:"TCS",
//     location:"Mumbai",
//     employees:{
//         total:1000,
//         department:"IT"
//     }
// };
// console.log(company.employees.total) // output: 1000





// Object Destructuring (Extract Values Easily)

// instead of accessing each property manually, we can destructure,we can destructure an object

// let laptop={
//     brand:"Dell",
//     model:"inspiron",
//     price:50000
// };
// let{brand,model,price}= laptop;
// console.log(brand,model,price); //output:: Dell inspiron 50000




//************************NOTE*********************** */


//JS AUTOMATICALLY CONVERT OBJECTS KEYS TO STRINGS.

// EVEN IF WE MADE THE NUMBER AS A KEY, THE NUMBER WILL BE CONVERTED TO STRING.


// EXAMPLE

// const obj={
//     1:"a",
//     2:"b",
//     true: "c",
//     null:"d",
//     undefined:"e"
// };