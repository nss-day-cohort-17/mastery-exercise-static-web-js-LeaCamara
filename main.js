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
  singleobject.character;
  singleobject.height;
}

var myObject = {
  character: '^',
  height: 5
}

// keys = character and height
// values = ^ and 5

// start with hard coding the set (adding values) and then change it to = user input later
// how do you make the output value = user input?
// user input will ensure that loop doesn't run forever

// calling the function and passing in an argument
tree (myObject)
// function = tree
// argument = myObject

for (var i=0; i > 1; i*height?) {
     console.log (character*height)
}

// x = height; this is the key factor.
// 1st line: 1x
// 2nd line: 2x
// 3rd line: 3x
// etc. - with spaces before, after, & in between each character!

document.addEventListener('click', function (msEvt) {
  if (msEvt.code === '')

  console.log(myObject)
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
