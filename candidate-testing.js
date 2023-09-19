const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  const candidateName = input.question("What's your name?");
  return candidateName;
}

function askQuestion(name) {
  candidateAnswer = input.question(question);
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0;

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log(`Question ${i + 1}: Correct!`);
      correctCount++;
    } else {
      console.log(`Question ${i + 1}: Incorrect. The correct answer is ${correctAnswers[i]}.`);
    }
  }

  let grade = (correctCount / questions.length) * 100;
  console.log(`Candidate Score: ${grade}%`);

  return grade;
}


function runProgram() {
  const candidateName = askForName();
  console.log("Hello, " + candidateName + "! Let's take a quiz.");
  askQuestion(candidateName);
  gradeQuiz(candidateAnswer);
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