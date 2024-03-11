#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games");
const name = readlineSync.question("May I have your name?  ");
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let correctAnswer = 0;
while (correctAnswer < 3) {
  const i = getRandomInt(1, 100);
  const answer = readlineSync.question(`Question: ${i} `);
  if (answer === "yes" && i % 2 === 0) {
    console.log("correct");
    correctAnswer++;
  } else if (answer === "no" && i % 2 === 1) {
    console.log("correct");
    correctAnswer++;
  } else {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
    );
    console.log(`Let's try again, ${name}`);
    break;
  }
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
}
