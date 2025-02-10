


//************.every()  ************************************** */

// .every() is a JavaScript array method used to check if all elements in an array satisfy a given condition. 
// It returns true if all elements meet the condition, otherwise, it returns false.


// Syntax of .every()

//array.every(callback(element, index, array), thisArg)


//Parameters:

// 1. callback(element, index, array) -> A function that runs for each element in the array.

// 2. element -> The current element being checked.

// 3. index (optional) -> The index of the current element.

// 4. array (optional) -> The full array being iterated.

// 5. thisArg (optional) -> A value to use as this when executing the callback.


// Return Value:

// true → If all elements satisfy the condition.

// false → If at least one element fails the condition.

//************************************************************************ */





// const numbers = [2, 4, 6, 8, 10];

// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // Output: true  (because all numbers are even)

// const numbers2 = [2, 3, 6, 8, 10];

// const allEven2 = numbers2.every(num => num % 2 === 0);
// console.log(allEven2); // Output: false  (because 3 is odd)


//Explanation:

// In numbers, all elements are even, so it returns true.
// In numbers2, one element (3) is odd, so it returns false.

//****************************************************************** */

//*********** with Objects************ */

const students = [
    { name: "Deepak", age: 35 },
    { name: "Rahul", age: 33 },
    { name: "Bablu", age: 23 }
];

const allAdults = students.every(student => student.age >= 18);
console.log(allAdults); // Output: true  (All students are 18 or older)



// Explanation:

// Here, we check if all students are adults (age 18 or above).
// Since all objects meet the condition, it returns true.

//******************************************************************** */


//******with Strings************* */


// const words = ["apple", "banana", "grape", "kiwi"];

// const allHaveVowels = words.every(word => /[aeiou]/i.test(word));
// console.log(allHaveVowels); // Output: true  (All words contain vowels)


//Explanation:

// We use a regex (/[aeiou]/i.test(word)) to check if all words have vowels.
// Since all words contain vowels, it returns true.

//************************************************************************************ */

// Early Termination (Performance Benefit of .every())

// .every() stops checking as soon as it finds a false condition.
// This makes it faster than looping through the entire array.


// const values = [10, 20, 5, 40, 50];

// const result = values.every(num => {
//     console.log(`Checking ${num}`);
//     return num > 10;
// });
// console.log(result); // Output:  false (Stops checking after 5)


//Explanation:

// It checks 10 -> 20 -> 5  -> Stops immediately & returns false.
// It does NOT check 40 & 50 because it already found a false condition.


//********NOTE*************** */

// When to Use .every()

//  Use .every() when you want to check if ALL elements match a condition.
//  Good for validation checks (e.g., all items in a cart are in stock).
//  Stops early, making it more efficient than looping through the entire array.

//********NOTE END*************** */

