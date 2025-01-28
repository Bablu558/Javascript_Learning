



// PUSH or POP

// let car=["audi" ,"bmw","xuv","maruti"];
// console.log(car.push("aulto"));// Add last in Array

// console.log(car.pop());// delete from last



// Unshift OR Shift

// Unshift: add to start
// Shift:   delete from start & returns it


// console.log(car.unshift("aulto")); 
// console.log(car.unshift("car"));

      
// console.log(car.shift("aulto")); 




// console.log(car.push("aulto")); 



// let followers=["a","b","c"];

// let blocked=followers.shift();// a


// followers   will print b , c



// *****************************************//

// IndexOf: 

  // let primary = ["red" ,"yellow", "blue"]

//   console.log(primary.indexOf("red")); // 0
//   console.log(primary.indexOf("blue"));// 2
//   console.log(primary.indexOf("yellow")); // 1
//   console.log(primary.indexOf("White")); // -1(not found)




  // console.log(primary.includes("red")); // true
  // console.log(primary.includes("blue"));// true
  // console.log(primary.includes("yellow")); // true
  // console.log(primary.includes("White")); // false  (not found)




  // ************************************************************************//
// Concatenate

  // CONCAT:: Merge 2 arrays
  // original array List will not change 

  // let primary = ["red" ,"yellow", "blue"]
  // let secondary = ["orange" ,"green", "voilet"]

  // console.log(primary.concat(secondary));

  // let allList=primary.concat(secondary);
  // console.log(allList);



  // REVERSE:: Reverse an arrays

  // its reverse original array 

// console.log(primary.reverse()); // [ "blue", "yellow", "red" ] 




//*************************************************/

// Slice ::: Copy a portion of an array 


// let primary = ["red" ,"yellow", "blue","orange" ,"green", "voilet"]

// console.log(primary.slice()); //coppy of the original array --- [ "red", "yellow", "blue", "orange", "green", "voilet" ]
// console.log(primary.slice(2));//[ "blue", "orange", "green", "voilet" ]  from index 2 to last
// console.log(primary.slice(2,3));// [ "blue" ] from index 2 to 3 index

/************** COMMENT ********************* */
// // slice(start,end) end is exclusive , not include
// // output will be (end-1) so (2,3) 
// // blue,orange  but orange will not display only [blue]

/************** COMMENT ********************* */

// console.log(primary.slice(-2));//[ "green", "voilet" ] from last 2 index




//**********************SPLICE***************************/

//SPLICE :: Remove/replace/add element in place

// its working on original array

// splice(start , deleteCount, iem..itemN)


// let primary = ["red" ,"yellow", "blue","orange" ,"green", "voilet"]

// console.log(primary.splice(4)); // remove from index 4 to end--- ["green", "voilet" ] original array [ "red","yellow", "blue", "orange" ] 
// console.log(primary.splice(0,1));// [ "red" ] on 0 index  1 item deleted  original array  [ "yellow", "blue", "orange" ]
// console.log(primary.splice(0,1, "black","grey")); //now array  [ "black", "grey", "blue", "orange" ]

//******************************************************************************** */




//************************SORT******************************************************** */

//Sort :: Sort an array


// let primary = ["red" ,"yellow", "blue","orange" ,"green", "voilet"]

// console.log(primary.sort());//[ "blue", "green", "orange", "red", "voilet", "yellow" ]


// let numbers= [20 , 15 , 6 , 8 , 99.5 , 1.1 , 0.4 , 0.001];

// console.log(numbers.sort());//[ 0.001, 0.4, 1.1, 15, 20, 6, 8, 99.5 ]

// // in numbers just because sort method is convert into string then sort that's why 




//************************REFERENCE******************************************************** */

// REFERENCE :: Address in memory

// pending to learning
// REFERENCE
// constant 



//************************NESTED ARRAY******************************************************** */

let nums= [[1,2],[9,8],[3,7]];
console.log(nums);
 
