const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question; ("Who was the first American woman in space?");
let correctAnswer; ("Sally Ride");
let candidateAnswer;


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  const candidateName = ("What's your name?");
return candidateName;
}

function askQuestion(name) {
  const question = "Who was the first American woman in space?";
  const answer = "Sally Ride";
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const candidateAnswer = prompt(question);
  

}

function gradeQuiz(candidateAnswers) {
  if (candidateAnswer === correctAnswer) {
    console.log("Correct! Well done!");
} else {
    console.log("Incorrect, The correct answer is Sally Ride.");
}

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  const candidateName = askForName();
  alert("Hello, " + candidateName + "! Let's take a quiz.");
  askQuestion(candidateName);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};