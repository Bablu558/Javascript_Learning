

// const student = {
//     name: "Bablu",
//     age: 23,
//     eng: 95,
//     math:93,
//     phy:97,
//     getAvg(){
//         let avg =(eng+ math + phy)/3;
//         console.log(avg);
//     }
// }

// on console 

// student.getAvg()
// Uncaught ReferenceError: eng is not defined


// Scope Issue:

// Inside the getAvg() method, you wrote eng, math, and phy without specifying the object (student) they belong to.

// JavaScript looks for eng, math, and phy in the local scope (inside the getAvg() function), but they are not defined inside the function.




//***************************************************************************************** */

// Objects Don't Automatically Bind Properties Inside Methods:

// In an object method, if you want to access a property of the same object, you must use this.

// Since eng, math, and phy are properties of student, they must be accessed using this.eng, this.math, and this.phy.



// const student = {
//     name: "Bablu",
//     age: 23,
//     eng: 95,
//     math:93,
//     phy:97,
//     getAvg(){
//         let avg =(this.eng+ this.math + this.phy)/3;
//         // console.log(avg);

//         console.log(`${this.name} got avg marks= ${avg}`);
//     }
// }

// output:: 95


//*************** NOTE************** */


// Using this Correctly:

// this refers to the current object (student) where the method is defined.

// this.eng, this.math, and this.phy correctly access the values 95, 93, and 97 from the student object.

// Methods Can Access Object Properties with this:

// Inside getAvg(), this.eng, this.math, and this.phy point to the properties of student.



// Key Takeaways

//  Without this, JavaScript looks for the variables in the local function scope, not in the object.

//  Use this.propertyName to refer to properties of the same object inside methods.

//  Objects don’t automatically assume their properties are accessible inside methods; this is needed to explicitly reference them.


//*********************NOTE END*************************** */

