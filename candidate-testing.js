const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName; 
candidateName = '' ;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
 question = "Who was the first American woman in space?  ";
let correctAnswer;
correctAnswer = "Sally Ride";
let candidateAnswer;
candidateAnswer = '';
let questions = ["1) Who was the first American woman in space? \n " , "2) True or false: 5 kilometer == 5000 meters?\n ", "3) (5 + 3)/2 * 10 = ? \n ", "4) Given the array  [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? \n", "5) What is the minimum crew size for the ISS? \n"]

let correctAnswers = ["Sally Ride", "True", '40', "Trajectory", '3'];
let candidateAnswers = [];

 
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("What is your name? ");
  console.log("Candidate Name: " + `${candidateName}`);
}

function askQuestion() {
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++) {
    let candidateAnswer = input.question(questions[i])
    candidateAnswers.push(candidateAnswer)
    console.log('Your Answer: ' + `${candidateAnswers[i]}`);
    console.log('Correct Answer: '+ `${correctAnswers[i]}`);

  }
}

function gradeQuiz() {
  
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log('Here are your results: ');
  let grade;
  let results; 
  grade = 0; 
  results = (grade / correctAnswers) * 100
  let status = '';

  for (let i = 0; i < questions.length; i++) {
  if(candidateAnswers[i].toLowerCase === correctAnswers[i.toLowerCase]){
      console.log('Your Answer: ' + candidateAnswers[i])
      console.log('Correct Answer: ' + correctAnswers[i])
          grade++;
    }else {
         grade--;
    }
    
  }
  if (results >= 80) {
  status = 'Passed'
} else {
  status = 'Failed'
  }
  console.log('>>> Overall Grade: ' + `${grade}`);
  console.log('>>> Status: '+ `${status}`);
  return grade;

}

  function runProgram() {
    askForName();
    askQuestion();
    gradeQuiz();
    // TODO 1.1c: Ask for candidate's name //



  }
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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