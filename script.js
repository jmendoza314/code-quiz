let multChoiceQ = document.querySelector('#multq');
let A = document.querySelector('#A'); 
let B = document.querySelector('#B');
let C = document.querySelector('#C');
let D = document.querySelector('#D');
const startButton = document.querySelector('#start-btn');
const startContainer = document.querySelector('.start-container')
const questionsContainer = document.querySelector('.container')
const multChoices = document.getElementsByClassName(".mult-choice");
const hide = document.querySelector(".hide");
let questionIndex = 1;

//  Multiple Choice Quesions and Choices
let questions = [
    // Question 1
    {
        question: 'What does HTML stand for?',
        choices: ['Hyper Textual Making Language',  'Hyper Text Making Language', 'Hyper Text Markup Language', 'None of the Above'],
        correctChoice: 'Hyper Text Markup Language',
    },
    // Question 2
    {
        question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
        choices: ['boolean', 'variable', 'loop', 'array'],
        correctChoice: 'boolean',
    },
    // Question 3
    {
        question: 'What does CSS stand for?',
        choices: ['Concept Style Sheet',  'Concave Style Sheet', 'Camera Style Sheet', 'Cascading Style Sheet'],
        correctChoice: 'Cascading Style Sheet',
    },
    // Question 4
    {
        question: 'In Javascript, brackets refer to what?',
        choices: ['Objects',  'Arrays', 'Functions', 'None of the Above'],
        correctChoice: 'Arrays',
    },
    // Question 5
    {
        question: 'What does syntax refer to?',
        choices: ['structure of a Language','fancy word for parenthesis', 'programming', 'semicolons'],
        correctChoice: 'structure of a Language',
    },
    // Question 6
    {
        question: 'What are the CSS properties that are used to add space around sections of content?',
        choices: ['spacing','break', 'padding', 'cleaner'],
        correctChoice: 'padding',
    },
    // Question 7
    {
        question: 'An img tag should always have what type of attribute?',
        choices: ['alt','button', 'embed', 'style'],
        correctChoice: 'alt',
    },
    // Question 8
    {
        question: 'What symbol is used for incrementing?',
        choices: ['+', '+_+', '+=', '++'],
        correctChoice: '++',
    },
    // Question 9
    {
        question: 'In Javascript, what does a method refer to?',
        choices: ['a function within an object','an object within an array', 'a div tag within the body', 'a false output'],
        correctChoice: 'a function within an object',
    },
      // Question 10
    {
        question: 'Flexboxes are useful for what?',
        choices: ['setting the height of the web page','the border', 'the color', 'content layout'],
        correctChoice: 'content layout',
    }
    
]

// Displays questions on page depending on question index
let questionHud = multChoiceQ.innerHTML = questions[questionIndex].question;

// Displays choices on page depending on the question index 
let As = A.innerHTML = questions[questionIndex].choices[0]
let Bs = B.innerHTML = questions[questionIndex].choices[1]
let Cs = C.innerHTML = questions[questionIndex].choices[2]
let Ds = D.innerHTML = questions[questionIndex].choices[3]

// When a button is click, a output value is generated to the console
let choiceA = document.getElementById("choiceA").onclick = function() {
    if (As == questions[questionIndex].correctChoice) {
        console.log("Correct!");
    }
    else { (As ==! questions[questionIndex].correctChoice) 
        console.log('Incorrect! :(')}
    }

let choiceb = document.getElementById("choiceB").onclick = function() {
    if (Bs == questions[questionIndex].correctChoice) {
        console.log("Correct!");
    }
    else { (Bs ==! questions[questionIndex].correctChoice) 
        console.log('Incorrect! :(')}
    }

let choiceC = document.getElementById("choiceC").onclick = function() {
    if (Cs == questions[questionIndex].correctChoice) {
        console.log("Correct!");
    }
    else { (Cs ==! questions[questionIndex].correctChoice) 
        console.log('Incorrect! :(')}
    };

let choiceD = document.getElementById("choiceD").onclick = function() {
    if (Ds == questions[questionIndex].correctChoice) {
        console.log("Correct!");
    }
    else { (Ds ==! questions[questionIndex].correctChoice) 
        console.log('Incorrect! :(')}
    };

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started')
    startContainer.classList.add('hide')
    questionsContainer.classList.remove('hide')
    // renderNewQuestion()
}







// A.addEventListener('click', renderNewQuestion);
// B.addEventListener('click', renderNewQuestion);
// C.addEventListener('click', renderNewQuestion);
// D.addEventListener('click', renderNewQuestion);