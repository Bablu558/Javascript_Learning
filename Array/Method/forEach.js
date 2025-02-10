
//*************************************************************************************************************** */

// he .forEach() method is used to iterate over an array and execute a function once for each element.
//  It does not return a new array (unlike map()) and is mainly used when we want to perform side effects,
//  like logging, modifying elements, or interacting with the DOM.



//  Basic Syntax of forEach()

// array.forEach(function(element, index, array) {
//     // code to execute for each element
// });


// element → Current element being processed.

// index (optional) → Index of the current element.

// array (optional) → The original array being iterated over.



//******************************************************************************************** */


// let arr=[1,2,3,4,5];
// let print =function(element){
//     console.log(element)
// };
// arr.forEach(print);

// output
// 1
// 2
// 3
// 4
// 5




// arr.forEach(function(element){
//     console.log(element)
// });

// output
// 1
// 2
// 3
// 4
// 5


// with arrow function 

// arr.forEach((element)=>{
//         console.log(element)
//     });

// output
// 1
// 2
// 3
// 4
// 5

//******************************************************************************************** */


// for array ob object 

// let arr=[{
//     name:"bablu",
//     marks:75
// },
// {
//     name:"Rahul",
//     marks:95
// },
// {
//     name:"deepak",
//     marks:85
// }];

// arr.forEach((student)=>{
//     //  console.log(student);
//     // console.log(student.name);
//     // console.log(student.marks);

//     console.log(`${student.name}'s marks is:${student.marks}`);
// });



//******************************************************************************************** */


//************ Accessing Index in forEach()********************

//We can use the index parameter to get the position of each element.

// const fruits= ["Apple","Banana","Mango"];

// // fruits.forEach((fruit,index)=>{
// //     console.log(`${index}: ${fruit}`);


// // fruits.forEach((fruit,Bablu)=>{
// //     console.log(`${Bablu}: ${fruit}`); // OUTPUT WILL BE SAME BCZ INDEX=Bablu= anything 
// })

// output
// 0: Apple
// 1: Banana
// 2: Mango

/****NOTES:: Here, index gives the position of each element. ******** */



//******************************************************************************************** */




//     const fruits= ["Apple","Banana","Mango"];

//     fruits.forEach((fruit,index,arr)=>{
//         console.log(`Element: ${fruit}, Index: ${index}, Full Array: ${arr}`);

// })

// output

// Element: Apple, Index: 0, Full Array: Apple,Banana,Mango
// Element: Banana, Index: 1, Full Array: Apple,Banana,Mango
// Element: Mango, Index: 2, Full Array: Apple,Banana,Mango


//******************************************************************************************** */



//********* Modifying Array Elements with forEach()********************************************************* */


// Example: Doubling each element (but doesn't modify original array)


// const numbers = [2, 4, 6];

// numbers.forEach((num) => {
//     console.log(num * 2);
// });

// console.log(numbers); // Original array remains unchanged

// // output
// 4
// 8
// 12
// array(3) [ 2, 4, 6 ] // Original array unchanged




//****NOTES***** */

// forEach() does not return a new array.

// If you need a modified array, use .map() instead.


// const numbers = [2, 4, 6];

// numbers.forEach((num, index, arr) => {
//     arr[index] = num * 2;
// });

// console.log(numbers);


// Here, we modified the original array inside forEach() by updating arr[index].


//******************************************************************************************** */


//**********forEach() Cannot Stop or Break********************** */


// Unlike loops like for, while, or map(), you cannot break out of forEach() using break or return.


// Example: Attempting to stop early (Doesn't work)

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//     if (num === 3) return; // This does NOT stop forEach
//     console.log(num);
// });


//Output:

// 1
// 2
// 4
// 5

// Even though return is used, the loop continues execution!


//******************************************************************************************** */
