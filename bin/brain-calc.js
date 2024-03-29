#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name?  ");
console.log(`Hello, ${name}`);
const operators = ["+", "-", "*"];
let score = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("What is the result of the expression?");
while (true) {
  let num1 = getRandomInt(1, 50);
  let num2 = getRandomInt(1, 50);
  let operator = operators[getRandomInt(0, 2)];

  let correctAnswer = eval(`${num1}${operator}${num2}`);
  console.log(`question: ${num1} ${operator} ${num2}`);
  let userAnswer = readlineSync.question("Your answer: ");
  if (userAnswer == correctAnswer) {
    console.log("Correct!");
    score++;
    if (score == 3) {
      console.log(`Congratulations, ${name}`);
      break;
    }
  } else {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
    );
    console.log(`Let's try again, ${name}`);
    break;
  }
  //console.log(correctAnswer);
}
