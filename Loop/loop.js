

// Loops::: Used to iterate a piece of code




//************************************************ */

// FOR LOOP

// Syntax 


// for(initialisation;condition;updation){
//     // do something
// }


// Example

// for(let i=1; i<=8; ){
//     console.log(i);
// }


// for(let i=10; i>=1; i=i-3 ){
//     console.log(i);
// }
// console.log(i); // output ::i is not defined


//************************************************** */

// print odd number 1 to 17



// for(let i=1; i<=17;i=i+2){
//     console.log(i);
// }
// console.log("backwards");



// for(let i=17; i>=1;i=i-2){
//     console.log(i);
// }



//************************************************* */

// Even number

// let num;
// for(num=2; num<=17;num=num+2){
//     console.log(num);
// }



// multiplication table



// let num;
// for(num=3; num<=30;num=num+3){
//     console.log(num);
// }


// let num = prompt("write your number:");
// num=parseInt(num);
// for(let i=num;i<=num*10; i=i+num){
//     console.log(i);
// }



//*********************************************** */

// for (let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }



//*********************************************** */



// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }



//*********************************************** */


// Break

// the break statement is used to exit a loop immediately when a certain condition is met.
//  loops to stop execution and continue with the rest of the code outside the loop.




// let i= 1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;

// }
// console.log("use break for 3");



//*********************************************** */


// Loop With Arrays

//  let fruits = ["mango","apple","banana","litchi","orange"];

//  for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
//  }

// for print odd index only 

// for(let i=1; i<fruits.length; i=i+2){
//     console.log(i, fruits[i]);
//  }


 // for print even index only 
//  for(let i=0; i<fruits.length; i=i+2){
//     console.log(i, fruits[i]);
//  }



// let fruits2 = ["mango","apple","banana","litchi","orange"];
// fruits2.push("papaya");
// for(let i=0; i<fruits.length; i=i+2){
//         console.log(i, fruits[i]);
//      }

// for(let i=0; i<fruits2.length; i++){
//     console.log(i, fruits2[i]);
//  }



// for print reverse 
// for(let i=fruits2.length-1; i>=0; i--){
//         console.log(i, fruits2[i]);
//      }
// output

// 0 mango
// 1 apple 
// 2 banana 
// 3 litchi 
// 4 orange 
// 5 papaya

 // otput like
 
//  5 papaya 
//  4 orange 
//  3 litchi 
//  2 banana 
//  1 apple 
//  0 mango



//*********************************************** */


// Nested with Array


// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }



//*********************************************** */


// for of loop


//  for(element of collection){
//    // do something
// }


// for of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
//  It allows us to loop through the values of an iterable easily without dealing with indexes or object properties.



// let fruits=["mango","apple","banana","litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }



// output
// mango
// apple
// banana
// litchi
// orange


// for(char of "Bablu kumar"){
//     console.log(char);
// }



// output
// B
// a
// b
// l
// u

// k
// u
// m
// a
// r


//*********************************************** */


// Nested For of Loop

// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// for(list of heroes){
    
//         console.log(list);
    
// }


// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }




