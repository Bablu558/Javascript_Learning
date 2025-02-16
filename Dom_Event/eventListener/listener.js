// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);

// }

// function sayHello(){
//     alert("hello");
// }

// function sayName(){
//     alert("Mr Bablu");
// }



// double click******************

// let btns=document.querySelectorAll("button");
// for(btn of btns){

//     btn.addEventListener("dblclick",function(){
//         alert("you double clicked me");
//     });
// }


//****************************************************8 */

// *******Mouseenter*****


// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside div")
    
// })

// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");     // click on paragraph
// })




//**************************************** */

// this

// this 

// let btnn=document.querySelector(".btnn");
// btnn.addEventListener("click",function(){
//     // console.log(this);
//     // console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";


// })






// let btn2=document.querySelector(".btnn");

// let p=document.querySelector(".pp");
// let h1=document.querySelector("h1");
// let h2=document.querySelector("h2");

// btn2.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });


// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });


// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });


// h2.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });






//************************************************************* */
// 2nd way to do this 
// using function 

// first select 

// let btn2=document.querySelector(".btnn");
// let p=document.querySelector(".pp");
// let h1=document.querySelector("h1");
// let h2=document.querySelector("h2");



// //  create a function 

// function handleClick(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }


// // using the function for multiple elements

// btn2.addEventListener("click",handleClick);
// p.addEventListener("click",handleClick);
// h1.addEventListener("click",handleClick);
// h2.addEventListener("click",handleClick);


//*******NOTES********** */



// Advantages of Using a Function

// Less Repetition-– Code is cleaner and more readable.
// Reusability-----– Same function can be used for any number of elements.
// Scalability-----– If more elements are added in the future, just call handleClick() instead of duplicating code.


//*******NOTES END********** */



//******************************************* */






// KEYBOARD EVENT

//Keyboard events allow us to detect when a user presses,
// releases, or holds a key on their keyboard.
//  This is useful for form validation, shortcuts, and interactive web applications.


// Event Type             	When It Triggers	                                        Notes
// keydown               	When a key is pressed down                                  Triggers continuously if the key is held down
// keypress(Deprecated) 	When a key is pressed (but before it’s released)         	Use keydown instead (some keys don’t trigger it)
// keyup	                When a key is released	                                    Fires only once when the key is lifted



//Understanding the event Object

//Whenever a keyboard event occurs, JavaScript provides an event object with useful properties:


// Property	                      Description
// event.key	                     Returns the actual key pressed (e.g., "a", "Enter")
// event.code	                     Returns the physical key's code (e.g., "KeyA", "Space")
// event.keyCode (Deprecated)	     Numeric key code (e.g., 65 for "A")
// event.shiftKey              	     true if Shift key is held
// event.ctrlKey	                 true if Ctrl key is held
// event.altKey	                     true if Alt key is held



// Key Differences Between key and code


// Key	                                                    Code
// Represents what the user typed	                        Represents the physical key on the keyboard
// "a" (small 'a' if Caps Lock is off)	                   "KeyA" (remains the same regardless of Caps Lock)
// Language-sensitive (depends on keyboard layout)	       Language-independent (same across all layouts)


// Use event.code when you care about the actual key position, regardless of layout.
//  Use event.key when you care about what character was typed.



//************************************************************************************************ */
//******************** */ NOTES*************************************

// Keydown

//The keydown event is triggered when a key is pressed down on the keyboard. 
// It fires continuously if the key is held


//When Does It Trigger?

// When any key (letters, numbers, special keys) is pressed.
// It fires before the key appears in an input field.
// If the key is held, the event will fire repeatedly.


//Common Use Cases for keydown
// Detecting shortcuts (e.g., Ctrl + S for saving).
// Game controls (e.g., moving characters with arrow keys).
// Preventing form submission when pressing "Enter".
// Handling accessibility features (e.g., navigating with the keyboard).
// Live searching as the user types.



//******************** */ NOTES*************************************
let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(){
//     console.log("key was pressed"); // every key will work from keyboard
// })



// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key was pressed");
// })


// inp.addEventListener("keydown",function(event){
//     console.log("key = " ,event.key);
//     console.log("code = " ,event.code);

//     console.log("key was pressed");
// })

// output
// key =  b
// code =  KeyB
// key was pressed



// inp.addEventListener("keydown",function(event){
//     console.log("code = " ,event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight,

//     if(event.code=="ArrowUp"){
//         console.log("character moves forward");
//     }else if(event.code=="ArrowDown"){
//         console.log("character moves backward");
//     }else if(event.code=="ArrowLeft"){
//         console.log("character moves Left");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("character moves Right");
//     }
// else{
//     console.log("key was pressed");

// }
// })




// inp.addEventListener("keydown",function(event){
//     console.log("code = " ,event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight,

//     if(event.code=="KeyU"){
//         console.log("character moves Up");
//     }else if(event.code=="KeyD"){
//         console.log("character moves down");
//     }else if(event.code=="KeyL"){
//         console.log("character moves Left");
//     }
//     else if(event.code=="KeyR"){
//         console.log("character moves Right");
//     }
// else{
//     console.log("Other key was pressed");

// }
// })


//********************************************************** */



// keyup

//The keyup event fires when a key is released after being pressed. Unlike keydown,
//  it triggers only once per key release.


//When Does It Trigger

// It occurs after a key is pressed (keydown fires first).
// It does not repeat when the key is held.
// Works for all keys, including letters, numbers, and special keys (Shift, Enter, Arrow keys, etc.).






//************************************************ */



// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })


// inp.addEventListener("keyup",function(event){
//     console.log(`key was released:${event.key}`);
// })

// Whenever a key is released, it logs the key

// output
// key was released:4
// key was released:\
// key was release:Backspace
// key was released:NumLock


//************************************************ */


// inp.addEventListener("keyup",function(event){
//     if(event.key=="ArrowUp"){
//         console.log("Up arrow released");
//     }else if(event.key=="ArrowDown"){
//         console.log("Down arrow released");
//     }else{
//         console.log(` other key was released:${event.key}`);

//     }
// })

// output

// other key was released:Backspace
// Up arrow released
// Down arrow released
// other key was released:ArrowRight
// other key was released:ArrowLeft
// other key was released:/


//note:Useful for game controls or navigation.


//************************************************ */
// keyup in a Text Input Field

// let inputField = document.getElementById("text");

//     inputField.addEventListener("keyup", function () {
//         console.log(`Current Input: ${inputField.value}`);
//     });

// output
// Current Input: v
// Current Input: vb
// Current Input: vba
// Current Input: vbaba

//************************************************ */









//*********************************************************************************************************** */




//****FORM EVENT*** */


// Forms are a crucial part of web applications,
// allowing users to input and submit data. 
// JavaScript provides form events to track user interactions, 
// validate input, and handle submissions




//Form events are triggered when a user interacts with input fields,
// checkboxes, radio buttons, dropdowns, and forms themselves.




// let form= document.getElementById("myForm");
// form.addEventListener("submit",function(event){
//     event.preventDefault(); // prevent page reload
//     let username=document.getElementById("username").value;
//     console.log(("message").innerText="Hello," + username +"!");

//     // document.getElementById("message").innerText="Hello," + username +"!";
// });



//Now, the form won't reload the page, and it will display a greeting message instead.


//************************************************************** */



//*************** */ Live Character Count

// let textArea = document.getElementById("textArea");
//     let countSpan = document.getElementById("count");

//     textArea.addEventListener("input", function() {
//         countSpan.innerText = textArea.value.length;
//     });






//************************************************* */

// let nameInput = document.getElementById("nameInput");

//     nameInput.addEventListener("focus", function() {
//         this.style.backgroundColor = "lightyellow";
//     });

//     nameInput.addEventListener("blur", function() {
//         this.style.backgroundColor = "white";
//     });


    //The input field turns yellow when focused and white when unfocused.



    //************************************************************** */


    // let textInput = document.getElementById("textInput");

    // textInput.addEventListener("select", function() {
    //     alert("You selected some text!");
    // });





    // activity

    // let inp=document.querySelector("#text");
    // let p=document.querySelector(".pp");
    // inp.addEventListener("input",function(){
    //     console.log(inp.value);
    // p.innerText=inp.value;
    // })