


// JavaScript has a built-in Math object that provides mathematical functions and constants.
//  It allows us to perform calculations like rounding numbers, finding square roots, generating random numbers, trigonometric operations, etc.



// Important Points about Math Object:

// It is not a constructor, so we cannot create an instance of Math using new Math().

// All methods are static, meaning we use them directly as Math.methodName().





// Common Math Methods & Properties



// Method/Property         Description	                         Example         	            Output

// Math.PI	             Returns the value of π (pi)	          Math.PI	                   3.141592653589793
// Math.E	             Returns Euler’s number (e)	              Math.E	                   2.718281828459045
// Math.abs(x)           Returns absolute (positive) value	      Math.abs(-10)	               10
// Math.ceil(x)	         Rounds  up to nearest integer	          Math.ceil(4.3)	           5
// Math.floor(x)	     Rounds  down to nearest integer	      Math.floor(4.7)	           4
// Math.round(x)	     Rounds  to nearest integer	              Math.round(4.5)	           5
// Math.trunc(x)	     Removes decimal part	                  Math.trunc(4.9)	           4
// Math.sqrt(x)	         Returns square root	                  Math.sqrt(25)	               5
// Math.pow(x, y)	     Returns x^y (x raised to power y)        Math.pow(2, 3)	           8
// Math.max(x, y, ...)   Returns largest number	                  Math.max(10, 20, 5)	       20
// Math.min(x, y, ...)	 Returns smallest number	              Math.min(10, 20, 5)	       5
// Math.random()	     Returns a random number between 0 and 1  Math.random()	               0.123456...
// Math.sin(x)	         Returns sine of x (in radians)	          Math.sin(Math.PI / 2)	       1
// Math.cos(x)	         Returns cosine of x (in radians)	      Math.cos(0)	               1
// Math.log(x)           Returns natural log (base e) of x	      Math.log(1)	               0


// Code Examples

// Math.PI


// console.log(Math.PI);//Output: 3.141592653589793
// console.log(Math.E); //3.141592653589793
// console.log(Math.abs(-10));// 10
// console.log(Math.abs(1.5));//1.5
// console.log(Math.ceil(2.3));//3
// console.log(Math.ceil(-3.3));//-3
// console.log(Math.floor(4.7));//4
// console.log(Math.floor(-5.7));// -6
// console.log(Math.round(6.5));// 7
// console.log(Math.round(-7.7));// -8
// console.log(Math.trunc(8.7));// 8
// console.log(Math.trunc(-8.7));//-8
// console.log(Math.pow(5,2));//25
// console.log(Math.max(10,2,4,57,0));//57
// console.log(Math.min(10,2,4,57,0));//0
// console.log(Math.random());//0.902184001086693    WILL BE CHANGE WHEN REFRESH

// // Generating a random number between 1 and 100

// console.log(Math.floor(Math.random()*100) + 1);// 

// console.log(Math.sin(Math.PI/2));//1
// console.log(Math.sin(0));//0
// console.log(Math.cos(0));//1
// console.log(Math.cos(Math.PI));// -1
// console.log(Math.log(1));// 0



