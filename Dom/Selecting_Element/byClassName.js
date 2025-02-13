


///In JavaScript, we use document.getElementsByClassName("className") to select multiple elements that share the same class name.

//Syntax

//document.getElementsByClassName("className");


//It returns an HTMLCollection (like an array but not exactly).
// You need to use an index or loop to access individual elements.

//**************************************************************** */

// Change All Links with Class "boxLink"

// let links = document.getElementsByClassName("boxLink")[0];
// links.style.color="red"
// let links2 = document.getElementsByClassName("boxLink")[1];
// links2.style.color="green"




// Change color of all links
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "red";
// }



//***********Note:**********************

//  getElementsByClassName() returns an HTMLCollection, 

// so .forEach() does not work on it. To use .forEach(), 

// you should use querySelectorAll() instead.

//***********Note:**********************




// let allBoxLinks = document.querySelectorAll(".boxLink");  

// allBoxLinks.forEach(link => {
//     link.style.color = "red";  // Saare links bold ho jayenge
// });




// let allBoxLinks = document.querySelectorAll(".boxLink");  

// allBoxLinks.forEach(link => {
//     link.style.fontWeight = "bold";  // Saare links bold ho jayenge
// });



