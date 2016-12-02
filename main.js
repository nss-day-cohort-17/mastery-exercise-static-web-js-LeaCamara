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

function tree(singleObjectAsArgument) {
  singleObjectAsArgument.character;
  singleObjectAsArgument.height;
  for (var i=0; i <= singleObjectAsArgument.height; i++) {
     console.log(singleObjectAsArgument.character)
}
}

// everything inside the function that references that argument needs to be named exactly the same

// Why wouldn't I change "singleObjectAsArgument" to "myObject"?
// you can, but they're not the same thing; different names enables you to run the function with other variables

var myObject = {
  character: '^',
  height: 5
}

// function = tree
// argument = myObject

// keys = character and height
// values = ^ and 5

// start with hard coding the set (adding values) and then change it to = user input later
// how do you make the output value = user input? (dynamic)

// user input will ensure that loop doesn't run forever

tree (myObject)
// calling the function and passing in an argument
// This is what connects the function tree to the argument myObject & associated variables
// But is this it?? Do I need to do anything else?

// sample function but really I have no idea
// how to make i*height?

for (var i=0; i >= 1; i*height?) {
     console.log (character*height)
}

// x = height; this is the key factor.
// 1st line: 1x
// 2nd line: 2x
// 3rd line: 3x
// etc. - with spaces before, after, & in between each character!

document.addEventListener('click', function (msEvt) {
  if (msEvt.code === 'Button') {
  console.log(myObject)
  }
})

document.onkeypress = function (msEvt) {
  if (kbEvt.key.toLowerCase() === 'Enter') {
    alert("Oops! Both fields must have a value!")
  }
}

// These are just random ideas from searching online:

  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    console.log("Button clicked.");
  });

  // or

  button.addEventListener("click", function() { alert("alert");});
  function onload() {
   var button = document.getElementById("buttonid");
   // add onclick event
   button.onclick = function() {
        alert("alert");
   }
}

// console.log(mouseEvt.target.href)
// so can I do console.log(mouseEvt.target.idCharacterInput)
// or something like that to specify that it should run only
// as long as the cursor is in one of the input fields, or button is clicked?
})

// or maybe it's something like:
// document.querySelector('.media__image').addEventListener('click',
//   function (msEvt) {
//     console.log(msEvt.target.src)
//   }
//   )

document.addEventListener('keypress', function (kbEvt) {
  if (kbEvt.code === 'Enter') {
  console.log(myObject)
  }
})

document.onkeypress = function (kbEvt) {
  if (kbEvt.key.toLowerCase() === 'Enter') {
    alert("Oops! Both fields must have a value!")
  }
}
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
