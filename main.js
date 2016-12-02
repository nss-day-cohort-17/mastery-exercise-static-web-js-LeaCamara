// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *          6 spaces(i+3=3+3=i+i), 1 character: i +(i-1)=1; 1+ (1-1)=1
//      ***         5 spaces(i+2=3+2=i+(i-1)), 3 characters: 2 + (2-1)=3
//     *****        4 spaces(i+1=3+1=i+(i-2)), 5 characters: 3 + (3-1)=5
//    *******       3 spaces(i+0=3+0), 7 characters: 4 + (4-1)=7
//   *********      2 spaces(i+-1=3-1), 9 characters: 5 + (5-1)=9
//  ***********     1 spaces(i+-2=3-2), 11 characters: 6 + (6-1)=11
// *************    0 spaces(i+-3=3-3), 13 characters: 7 + (7-1)=13

function tree(singleObjectAsArgument) {
  singleObjectAsArgument.character;
  singleObjectAsArgument.height;
  for (var i=1; i <= singleObjectAsArgument.height; i++) {
  console.log(singleObjectAsArgument.character.repeat(i + (i - 1)))
    }
  }
// console.log(" ".repeat(i - 1) + singleObjectAsArgument.character.repeat(i - 2));


// "i <= singleObjectAsArgument.height  makes sure the loop stops at or before the height the user specifies
// repeat is a function that you can do on all strings & it takes an argument of a number

// everything inside the function that references that argument needs to be named exactly the same

// Why wouldn't I change "singleObjectAsArgument" to "myObject"?
// you can, but they're not the same thing; different names enables you to run the function with other variables

var myObject = {
  "character": '*',
  "height": 5
}

// function = tree
// argument = myObject

// keys = character and height
// values = ^ and 5

// start with hard coding the set (adding values) and then change it to = user input later
// how do you make the output value = user input? (dynamic)

// user input will ensure that loop doesn't run forever
// how do you limit user input so they don't put 10 billion or something (don't worry about it yet)

tree(myObject)

// or
// tree(myObject) {

// }
// ????

// calling the function and passing in an argument
// This is what connects the function tree to the argument myObject & associated variables

// x = height; this is the key factor.
// loop 0: 1x w/ 2 spaces before it
// loop 1: 3x w/ 1 space before it
// loop 2: 5x w/ 0 spaces before it

// *** Or actually - Each loop is +2 characters and -2 spaces ***

// first row: (" " * pattern1) + ("character" * pattern2)

// " " = spaces before the tree
// but where does the height go?

//         *
//       * * *
//     * * * * *

// etc. - with spaces before, after, & in between each character!
// this math goes in the for loop b/c you need to know what i is each time

// pattern 1 = spaces
// pattern 2 = character

// document.addEventListener('click', function (msEvt) {
//   if (msEvt.code === 'Button') {
//   console.log(myObject)
//   }
// })

// document.onkeypress = function (msEvt) {
//   if (kbEvt.key.toLowerCase() === 'Enter') {
//     alert("Oops! Both fields must have a value!")
//   }
// }

// These are just random ideas from searching online:

  // var button = document.querySelector("button");
  // button.addEventListener("click", function() {
  //   console.log("Button clicked.");
  // });

  // or

//   button.addEventListener("click", function() { alert("alert");});
//   function onload() {
//    var button = document.getElementById("buttonid");
//    // add onclick event
//    button.onclick = function() {
//         alert("alert");
//    }
// }

// console.log(mouseEvt.target.href)
// so can I do console.log(mouseEvt.target.idCharacterInput)
// or something like that to specify that it should run only
// as long as the cursor is in one of the input fields, or button is clicked?


// or maybe it's something like:
// document.querySelector('.media__image').addEventListener('click',
//   function (msEvt) {
//     console.log(msEvt.target.src)
//   }
//   )

// document.addEventListener('keypress', function (kbEvt) {
//   if (kbEvt.code === 'Enter') {
//   console.log(myObject)
//   }
// })

// document.onkeypress = function (kbEvt) {
//   if (kbEvt.key.toLowerCase() === 'Enter') {
//     alert("Oops! Both fields must have a value!")
//   }
// }
// This assigns this function to be equal to .onkeypress
// // So this below does the exact same thing, right?
// function (kbEvt) {
//  if (kbEvt.key.toLowerCase() === 'Enter') {
//     alert("Oops! Both fields must have a value!")
//   }
// }
// But don't you would need the ".onkeypress" part??

// "kbEvt" = "keyboard event"
// I know you can put anything there,
// but should it be the name of the function (tree)?
// or the name of the argument (myObject)?

// Can you add both .addEventListener and .onkeypress to document?

// Enter has to be in the input field.
// Click has to be on the button.

// How do you tell if one or both values are missing???
