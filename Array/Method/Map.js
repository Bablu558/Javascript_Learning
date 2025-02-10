

// map() Method

// The .map() method creates a new array by applying a function to each element of an existing array.
// Unlike forEach(), which only iterates over elements, map() returns a transformed array.


//  Syntax of map()

// const newArray = array.map(function(element, index, array) {
//     return transformedElement;
// });


// element => Current element being processed.
// index (optional) => Index of the current element.
// array (optional) => The original array.



//****NOTES*** */

// Key Difference from forEach():

// map() returns a new array instead of modifying the original one.

//****NOTES*** */





// let num=[1,2,3,4];

// let double=num.map((element)=>{
//     // return element*2;
//     return element*element; // output:: Array(4) [ 1, 4, 9, 16 ]

// });




// let num=[1,2,3,4];

// let double=num.map((element)=>{
//     // output:: Array(4) [ undefined, undefined, undefined, undefined ]  array size will be same
// });



// let students=[
//     {
//         name:"Deepak",
//         marks:95.5,
//     },
//     {
//         name:"Rahul",
//         marks:90.8,
//     },
//     {
//         name:"Bablu",
//         marks:80,
//     }
// ]
// let gpa=students.map((Element)=>{
//     return Element.marks/ 10;
// });

