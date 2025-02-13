




// document.getElementById() is a JavaScript method used to select an element in the DOM using its unique id attribute. 
// This method is the fastest way to access an element because IDs are unique within a page.



// Returns the element as an object or null(if not found)


// // Selecting the image using its ID
// let imgElement = document.getElementById("mainImg");

// // Logging the selected element
// console.log(imgElement); // Logs: <img src="files/spiderman.webp" id="mainImg">


//**************************************************** */
//  Changing Properties Using getElementById()


// let imgElement = document.getElementById("mainImg");

// // Change the image source dynamically
// imgElement.src = "files/superheroes.jpg"; 




//This will change the image from "spiderman.webp" to "new-spiderman.jpg".




//******************************************************* */

// Changing Styles Using getElementById()


// let imgElement = document.getElementById("mainImg");

// // Add a red border to the image
// imgElement.style.border = "5px solid red";



//This applies a red border around the image.

//*****************************************************8 */



// Changing Text Content Using getElementById()

// let heading = document.getElementById("title");

// // Change the text inside <h1>
// heading.textContent = "Spider-Man: No Way Home!";



// *****************************************************

// change bg color of a paragraph

// let para = document.getElementById("description");

// // Change background color
// para.style.backgroundColor = "green";




//********************************************** */


// Hide and Show an Element Dynamically

// let imgElement = document.getElementById("mainImg");

// // Hide the image
// imgElement.style.display = "none";

// // Show the image again after 3 seconds
// setTimeout(() => {
//     imgElement.style.display = "block";
// }, 3000);


// The Spider-Man image will disappear and reappear after 3 seconds.

//************************************************************ */


// let heading = document.getElementById("title");

// // Change text
// heading.textContent = "Spider-Man: Homecoming";

// // Change text color
// heading.style.color = "red";




// let para = document.getElementById("description");
// let button = document.getElementById("increaseSize");

// // On button click, increase the font size
// button.addEventListener("click", function() {
//     para.style.fontSize = "20px";
// });

/// Clicking the button increases font size.



//****************************************************** */


