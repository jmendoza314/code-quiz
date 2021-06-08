// ****************************
// ---- STORING INFORMATION ----
// ****************************
// in single variables
var name = 'Ryan'; // stores a string
var age = 35; // stores a number
var isMarried = true; // stores a boolean
// Use let and const instead of var...
// let is for variables that will change
// const is for variables that will remain constant
// Note: Changing the content of an array or object is not
// the same as changing the actual array or object. You can use
// const with arrays and objects
// ****************************
// ARRAYS - for lists of things
// ****************************
const animals = ['aardvark', 'dog', 'cat']
// Retrieve a value from an array using its index 
const myPet = animals[1];
// ARRAY METHODS (there are many more...)
// Adds a new element to the end of an array
animals.push('bird')
// Runs a for loop on an array
animals.forEach(function(animal) {
  // ... will console log each animal
  console.log(animal);
})
// Combines two arrays and creates a new one
const newArr = animals.concat(['cow', 'tiger'])
// Filters an array for the returned condition
animals.filter(function(animal) {
  return animal === 'dog'
})
// Finds the index of an element in the array
animals.indexOf('dog')
// returns -1 if it doesn't exist in array
// ****************************
// OBJECTS - for collections of properties
// ****************************
var myDog = {
  age: 6,
  name: 'Fido',
  // a function on an object is called a method
  findDog: function () {
    console.log(this.name);
  }
}
// get a property value from an array with:
// dot notation...
myDog.age
//...or 
// bracket notation...
myDog['age']
// Objects can have arrays as values...
var potentialTypes = {
  specialChars: ['*', '&', '%'],
  capLetters: ['A', 'B', 'C']
}
// ... and arrays can have objects as values
// Very common way of storing information: an array of objects
var questions = [
  {
    question: 'What is JavaScript?',
    choices: ['language', 'computer', 'dog'],
    correct: 'language'
  },
  {
    question: 'What is a car?',
    choices: ['animal', 'vehicle', 'rock'],
    correct: 'vehicle'
  },
  {
    question: 'What is a university?',
    choices: ['school', 'animal', 'vehicle'],
    correct: 'school'
  }
]
// Using a combination of square brackets (for arrays) and dot notation (for objects),
// we select something very specific from the array of objects
// In this example, we are running a forEach method on each element
// of the choices array in the second question:
questions[1].choices.forEach(function() {
  // Runs for each thing in array
})
// Random selections
// Getting 8 random selections from an array
const animals = ['dog', 'bird', 'cat', 'bear', 'turtle']
for (var i = 0; i < 8; i++) {
  var randomIndex = Math.floor(Math.random() * animals.length);
  console.log(animals[randomIndex]);
}
// ****************************
// ---- CONTROL THE EXECUTION OF THE PROGRAM ----
// ****************************
// If statements test the condition in the ()
if (animals[1] === 'bird') {
  // Run this code
} else {
  // ... otherwise run this code
}
// ****************************
// FOR LOOPS - repeat code a specific number of times
// ****************************
for (var i = 0; i < animals.length; i++) {
  // Run this code over and over, until the condition in second part of the parens is false
  animals[i] = animals[i] + 's'
}
// ****************************
// FUNCTIONS - pieces of code that you control the execution of
// ****************************
// Functions are pieces of code that do not automatically run when
// you declare them. They only run when you call them -- we call the function
// below on line 155 by typing the name of the function and then adding ().
// Functions have inputs and outputs. The inputs (called arguments or parameters)
// are declared in the () next to the name, and supplied by the () when you call the function (see line 155). 
// The output is what is follows the return statement. return also stops the 
// execution of the function.
function makePaperClip(typeMetal, color) {
  if (!color) {
    return new Error('Color not supplied')
  }
  var paperClip = typeMetal + color;
  return paperClip
}
var paperClip = makePaperClip('steel', 'red')
// ****************************
// ---- CHANGING THE HTML (DOCUMENT OBJECT MODEL) WITH JAVASCRIPT ----
// ****************************
// Grab an existing element in the HTML
// Uses CSS selectors to specify what element
var titleDiv = document.querySelector('#title');
// Create a new element (... but does not automatically add it to the page)
var newEl = document.createElement('p');
// Add some styles and text to that new element
newEl.textContent = "I am a new element!";
newEl.classList.add('landing-title');
// Add the new element to the page
titleDiv.appendChild(newEl);
// Loop over an array and create a new HTML element for each thing
// in the array. Also add that new element to an existing element on the page
var questionList = document.querySelector('#questions');
for (let i = 0; i < questions.length; i++) {
  const question = array[i];
  var newEl = document.createElement('button');
  newEl.textContent = question.question;
  questionList.appendChild(newEl);
}
// ****************************
// ---- TIMERS ----
// ****************************
// setTimeout - set a timer for something that runs one time. After 5 seconds,
// this runs the function provided
setTimeout(function() {
  // does something in some amount of time
}, 5000)
// setInterval - set a timer for something and have it repeat until you run clearInterval. 
// every 5 seconds, this runs the function provided
const intervalId = setInterval(function() {
  // does something in some amount of time
}, 5000)
// When you want to stop the interval...
clearInterval(intervalId)

array.forEach(element => {
    
});