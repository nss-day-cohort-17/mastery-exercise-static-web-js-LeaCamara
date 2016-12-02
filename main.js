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

//       *          6 spaces: need 12 13-(1+2)=10, 5 spaces on each side  13-i=13-1=12/2=6 on each side?    1 character: i +(i-1)=1; 1+ (1-1)=1
//      ***         5 spaces: need 10 13-(2+2)=9, 4.5ea      13-2=11/2=5.5 on each side?       3 characters: 2 + (2-1)=3
//     *****        4 spaces: need 8  13-5      13-3=10/2=5 on each side; 5 characters: 3 + (3-1)=5
//    *******       3 spaces: need 6 13-4=9/2=4.5 on each side; 7 characters: 4 + (4-1)=7
//   *********      2 spaces: need 4 ; 9 characters: 5 + (5-1)=9
//  ***********     1 spaces: need 2 ; 11 characters: 6 + (6-1)=11
// *************    0 spaces: need 0; 13 characters: 7 + (7-1)=13

// 0 = 1x  2xi + 1
// 1 = 3x
// 2 = 5x
// 3 = 7x

// defining the tree function:
function tree(singleObjectAsArgument) {
  singleObjectAsArgument.character;
  singleObjectAsArgument.height;
  for (var i=0; i < singleObjectAsArgument.height; i++) {
  console.log(" ".repeat(singleObjectAsArgument.height-1-i) + singleObjectAsArgument.character.repeat((2*i) +1))
    }
  }

// For character - This works but not if i=0:  i + (i - 1)
// For spaces:
// 13-i = centered but doesn't have quite the correct # of spaces on each side
// 13-(i + (i - 1)) = aligns it all to the right
// 13-(i/2) = wonky
// 13-(i*2) = right aligned
// 13-(i+2) = centered but still not correct # of spaces
// console.log(" ".repeat(i - 1) + singleObjectAsArgument.character.repeat(i - 2));


// "i <= singleObjectAsArgument.height  makes sure the loop stops at or before the height the user specifies
// repeat is a function that you can do on all strings & it takes an argument of a number

// everything inside the function that references that argument needs to be named exactly the same

// Why wouldn't I change "singleObjectAsArgument" to "myObject"?
// you can, but they're not the same thing; different names enables you to run the function with other variables

// function = tree
// argument = myObject

// keys = character and height
// values = ^ and 5

// start with hard coding the set (adding values) and then change it to = user input later
// how do you make the output value = user input? (dynamic)

// user input will ensure that loop doesn't run forever
// how do you limit user input so they don't put 10 billion or something (don't worry about it yet)

// calling the function and passing in an argument
// This is what connects the function tree to the argument myObject & associated variables

// x = height; this is the key factor.
// loop 0: 1x w/ 2 spaces before it
// loop 1: 3x w/ 1 space before it
// loop 2: 5x w/ 0 spaces before it

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

  var button = document.querySelector("button");
  button.addEventListener("click", function() {
      if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
        var myObject = {
        "character": document.getElementById("CharacterInput").value,
        "height":  document.getElementById("HeightInput").value
        }
        tree(myObject)
      }
      else {
        alert("Oops! Both fields must have a value!")
      }
    });

  // ----------
  // querySelector will do id, class, or tag

// This works if you hit Enter in inputField1:
  var inputField1 = document.querySelector('#CharacterInput');
  inputField1.addEventListener("keypress", function(kbEvt) {
    if (kbEvt.code === 'Enter') {
      if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
        var myObject = {
        "character": document.getElementById("CharacterInput").value,
        "height":  document.getElementById("HeightInput").value
        }
        tree(myObject)
      }
      else {
        alert("Oops! Both fields must have a value!")
      }
    }
  });

// This works if you hit Enter in inputField2:
  var inputField2 = document.querySelector('#HeightInput');
  inputField2.addEventListener("keypress", function(kbEvt) {
    if (kbEvt.code === 'Enter') {
      if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
        var myObject = {
        "character": document.getElementById("CharacterInput").value,
        "height":  document.getElementById("HeightInput").value
        }
        tree(myObject)
      }
      else {
        alert("Oops! Both fields must have a value!")
      }
    }
  });

// The whole part before else is saying, "If inputs aren't empty, then run function."
// button referring to tag
// button needs to grab values of input fields
// has to be done inside a function so it doesn't evaluate it before the Js has a chance to load
// now this will wait until button is clicked to grab values (ln 112&113) & call the tree function (ln 116) to grow tree


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
