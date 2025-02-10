

//**************.reduce() ************************ */

// .reduce() is a powerful array method used to process an array and reduce it to a single value. This value can be a sum, product, object, array, or anything else.

// Syntax of .reduce()

// array.reduce(callback(accumulator, currentValue, index, array), initialValue)


// Parameters:

//callback(accumulator, currentValue, index, array) -> A function that runs for each element in the array.

// accumulator -> Stores the accumulated result (initially set by initialValue).

// currentValue -> The current element being processed.

// index (optional) -> The index of currentValue.

// array (optional) -> The full array being iterated.

// initialValue (optional but important!) -> The starting value of the accumulator.

//******************************************************************************************* */



// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // Output: 15


// Explanation:

// acc (accumulator) starts at 0 (initialValue).
// Each number is added to acc.
// Final result = 1 + 2 + 3 + 4 + 5 = 15


//**************NOTES********* */

// const nums = [10, 20, 30];

// const total = nums.reduce((acc, num) => acc + num, 0);
// console.log(total); // Output: 60

// Step-by-Step Execution


// Iteration	acc (Accumulator)	num (Current Value)	   New acc Value
// 1st	        0 (initialValue)	10	                   10
// 2nd	        10	                20	                   30
// 3rd	        30               	30	                   60

// Final Output: 60



//**************NOTES END********* */



//************Using .reduce() Without initialValue********


// const numbers = [5, 10, 15];

// const result = numbers.reduce((acc, num) => acc + num);

// console.log(result); // Output: 30



//Explanation:

// If no initialValue is provided, .reduce() uses the first element (5) as the starting accumulator.
// This means the loop starts from the second element (10).



//*************************************************** */


//Finding Maximum Value Using .reduce()


const numbers = [45, 67, 23, 89, 12];

const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);

console.log(max); // Output: 89


//Explanation:

// acc starts at numbers[0] (45).
// Each number is compared with acc, and the larger value is stored in acc




//************notes ****************** */

// .reduce() processes an array and reduces it to a single value.
//  It does not modify the original array.
//  Providing an initialValue is important, especially for empty arrays.
//  Can be used for summing, counting, grouping, finding max/min, flattening arrays, and more!
//  If .reduce() runs without initialValue, it takes the first element as the starting accumulator.




//************notes ****************** */
