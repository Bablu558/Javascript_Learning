// console.log("Hello Learner");
// console.log("Welcome to all");

// let a=10;
// let b=5;


// console.log("sum of "+ a + "+" + b + "", "is:"+(a+b));
// console.log("sum is:",a+b);



// Template Literals


// let pencilePrice=10;
// let erasorPrice=5;
// console.log("The total price is: ", pencilePrice+ erasorPrice,"rupees");

// 2nd way 

// let output="The total price is: "+ ( pencilePrice+ erasorPrice) + " rupees";

// use templateLiterals

// let output=`The total price is: ${ pencilePrice + erasorPrice} rupees `;
// console.log(output);

// console.log(`The total price is: ${ pencilePrice + erasorPrice} rupees `)


// Operators in Js 

// 1. Arithmetic Operators
//  let a=8;
//  let b=5;
//  console.log(a+b);
//  console.log(a-b);
//  console.log(a*b);
//  console.log(a/b);
//  console.log(a%b);

// UNARY OPERATOR

//  console.log(a++);
//  console.log(++a);

// ASSIGNMENT OPERATOR

// b=a;
// console.log(b)



// COMPARISON OPERATORS

// Comparison Operators to compare 2 values 

//     >    greater than
//     >=   greater than equal to
//     <    less than
//     <=    less than equal to
//     ==     equal to
//     !=      Not equal to
 
// let age =18;

// console.log(age>20);//false
// console.log(age>=20);//false
// console.log(age<20);//true
// console.log(age<=20);//true
// console.log(age==20);//false
// console.log(age!=20);//true
// console.log(typeof age);



// ==
// compares value , Not type

// "148" == 148                   // true
// 1 == '1'                      // true
// 0 == ' '                     // true
// 0 == false                  // true
// null == undefined          // true



// ===
// Compares type & value

// "148" == 148                 // false
// 1 == '1'                    // false
// 0 == ' '                   // false
// 0 == false                // false
// null == undefined        // false



// Comparison For Non Number 

// 'a' > 'A'                 // true 
// 'a' > 'b'                // false
// 'b' < 'c'               // true
// 'B' < 'C'              // true
// '*' < '&'             //false

// its work on the base of js uni code

// a>b>c>d......>z
// A>B>C ...>Z



//******************************************* */
// Conditional statements


// if-else 
// nested if-else 
// switch


// If Statement 
// console.log("before my if statement:")
// let  age=33;

// if(age>=18){
// console.log("you can vote:");
// console.log("you can drive:");

    
// }
// // or 
// if(age<18){
//     console.log("you can not vote and drive");
// }

// console.log("after my if statement:")



//******************************************************** */


// else if statement

// let age =17;
// // let age =17.999999999999999;

// if(age>=18){
//     console.log("you can vote");
// }
// else if(age < 18){
//     console.log("you can not vote");
// }




// understanding purpose

// let age =17;
// // let age =17.999999999999999;

// if(age>=18){
//     console.log("you can vote");
// }
// else if(age >= 18){
//     console.log("you can not vote2");
// }
// else if(age < 18){
//     console.log("you can not vote");
// } 



// 2d example
// let marks=80;
// if(marks>=80){
//     console.log("A+");
// }
// else if(marks>=60){
//     console.log("A")
// }
// else if(marks>=33){
//     console.log("B")
// }
// else if(marks<33){
//     console.log("F")
// }
   





// ELSE
// let age =17;
// if(age>=18){
//         console.log("you can vote");
//     }
//     else {
//         console.log("you can not vote2");
//     }



// 3rd ex 
// let color="green";
// if (color === "red"){
//     console.log("you should stop");
// }
// else if(color === "yellow"){
//     console.log("slow down")
// }
// else if(color === "green"){
//     console.log("go")
// }
// else {
//     console.log("traffic light is broken");
// } 



// Nested IF ELSE 

// let marks=80;
// if(marks>=70){
//     console.log("A+");
// }
// else if(marks>=60){
//     console.log("A")
// }
// else if(marks>=33){
//     console.log("B")
// }
// else if(marks<33){
//     console.log("F")
// }


// let marks=30;
// if(marks>=33){
//     console.log("pass");
// if(marks>=80){
//     console.log("A+");
// }
// else {
//    console.log("grade : A ");
// };
// }else{
//     console.log("Fail! better luch next time")
// }


