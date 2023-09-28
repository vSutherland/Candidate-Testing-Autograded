const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What's your name? ");
  return candidateName;
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
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

  if (grade >= 80) {
    console.log("Congratulations, you have passed the quiz!");
  } else {
    console.log("Sorry, you have failed the quiz.");
  }

  return grade;
}


function runProgram() {
  askForName();
  console.log("Hello, " + candidateName + "! Let's take a quiz.");
  askQuestion();
  gradeQuiz(candidateAnswers);
}

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
