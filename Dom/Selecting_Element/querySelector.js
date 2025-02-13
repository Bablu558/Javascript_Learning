



// What is querySelector()


// It selects the first element that matches a given CSS selector.
// Think of it as a way to grab a single element from your HTML.

//The querySelector() method selects the first element that matches a given CSS selector.
// It is a more flexible and modern way to select elements compared to getElementById(), getElementsByClassName(), or getElementsByTagName().


//What is querySelectorAll()

// It selects all elements that match a given CSS selector.
// It returns a NodeList, which behaves like an array but is not updated dynamically.


// The querySelectorAll() method selects all elements that match a given CSS selector and returns a static NodeList, 
// which means it does not update dynamically when elements are added or removed from the DOM.



//************************************************************************** */





//************* */ Syntax*********************



//****  querySelector()

// document.querySelector("CSS Selector");

//Selects the first matching element.



// For querySelectorAll()

//document.querySelectorAll("CSS Selector");

//Selects all matching elements and returns a NodeList.



//************* */ Syntax End*********************




//************************************************* */

//********QUERY SELECTOR */

// Selecting the First <h1> Element

// const heading = document.querySelector("h1");  // Selecting first <h1>
// heading.style.color = "green";  // Changing text color to red




// here the color will change only for this  " <h1 id="title">spider man</h1>"

// because of this ::querySelector- Selects the first matching element.


//***** Selecting Nested Elements***** */


// Let's select the first <li> inside <ul> inside <div> and make it bold.

// const firstListItem = document.querySelector("div ul li");  // Selecting first <li> inside <div>
// // firstListItem.style.fontWeight = "bold";  // Making text bold
// firstListItem.style.backgroundColor = "red";  // Making text bold

//*************************************************************88 */





// for all h1 

// const heading = document.querySelectorAll("h1"); 
// heading.style.color = "green"; // this will cause an error!


//*******NOTES************ */


//If you use document.querySelectorAll("h1"), 
// it returns a NodeList, which is a collection of multiple elements.
// However, NodeList does not support direct style changes like a single element does.

//******************************************** */
// So, when you try:

// const heading = document.querySelectorAll("h1");  
// heading.style.color = "green"; //  This will cause an error!


//**It fails because heading is a list, not a single element. */



// ****Solution:******

// You need to loop through the NodeList and apply styles to each element individually:

// document.querySelectorAll("h1").forEach(h => {
//     h.style.color = "green";
// });


// OR 

// const headings = document.querySelectorAll("h1");  // Select all <h1> elements

// for (let i = 0; i < headings.length; i++) {
//     headings[i].style.color = "yellow";  // Change color of each <h1>
// }


//*******NOTES************ */






// When to Use What


// Use querySelector() when you need only one element (first match).
//  Use querySelectorAll() when you need all matching elements (loop through them).
//  Use querySelectorAll() if you want to apply styles or changes to multiple elements.
//  Prefer querySelector() over getElementById() for modern and flexible code.







