"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables

let shiftValue;
let popValue;


// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    console.log(todos)
}

function updateAnswerTwo() {
    console.log(todos[2])
}

function removeLastValue() {
    const todos = [
        "Wash the dishes",
        "Clean the gutters",
        "Mow the yard",
        "Do some coding",
        "Rake the leaves",
    ];
    
    
    let popValue = todos.pop();
    
    console.log(popValue);
    console.log(todos);
    
}

function removeFirstValue() {

}

function addShiftAndPopValues() {

}

function updateAnswerFour() {

}

function reverseTodoList() {

}

function updateAnswerFive() {

}

function updateAnswerSix() {

}

function render() {

}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
