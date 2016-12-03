// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key
// (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree"
// and the tree should be shown in the console. This requires you to add an event listener to the button,
// as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button,
// then display an alert stating that both fields must have a value.

// Grow your tree
// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *          6 spaces (need 12):  1 character
//      ***         5 spaces (need 10):  3 characters
//     *****        4 spaces (need 8):  5 characters
//    *******       3 spaces (need 6):  7 characters
//   *********      2 spaces (need 4):  9 characters
//  ***********     1 spaces (need 2):  11 characters
// *************    0 spaces (need 0):  13 characters


// defining the tree function:

function tree(singleObjectAsArgument) {
  singleObjectAsArgument.character;
  singleObjectAsArgument.height;
  for (var i=0; i < singleObjectAsArgument.height; i++) {
  console.log(" ".repeat(singleObjectAsArgument.height-1-i) + singleObjectAsArgument.character.repeat((2*i) +1))
    }
  }

// function = tree
// argument = myObject

// keys = character and height
// values = ^ and 5

// "i < singleObjectAsArgument.height makes sure the loop stops at the height the user specifies (since we're starting at 0)
// repeat is a function that you can do on all strings & it takes an argument of a number

// The math equation goes in the for loop b/c you need to know what i is each time.

// everything inside the function that references that argument needs to be named exactly the same

// tree(myObject) = calling the function and passing in an argument
// This is what connects the function tree to the argument myObject & associated variables
// Q:  Why wouldn't I change "singleObjectAsArgument" to "myObject"?
// A:  You can, but they're not the same thing; different names enables you to run the function with other variables (ex myObject2).

// start with hard coding the set (adding values) and then change it to = user input later
// user input will ensure that loop doesn't run forever

// This runs the function when values are entered and the "Grow your tree" button is clicked. Displays alert if any values are missing.
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

// button in the first line is referring to html tag
// querySelector will work for id, class, or tag
// button needs to grab values of input fields
// has to be done inside a function so it doesn't evaluate it before the Js has a chance to load
// now this will wait until button is clicked to grab values (ln 112&113) & call the tree function (ln 116) to grow tree

// This adds an event listener for inputField1 and runs the function when both values are entered and the Enter key is pressed. Displays alert if any values are missing.
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

// This adds an event listener for inputField2 and runs the function when both values are entered and the Enter key is pressed. Displays alert if any values are missing.
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

// For button - We don't need the first if statement for the button because there's only one button here.
// For Enter - We do need the first if statement for the input fields because we needed to specify that we're talking about the Enter key.
// And that's why we needed to name it kbEvt.

// The whole part before else is saying, "If inputs aren't empty, then run function."
