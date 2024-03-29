#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name?  ");
console.log(`Hello, ${name}`);
let score = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Find the greatest common divisor of given numbers.");
function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

while (true) {
  let num1 = getRandomInt(1, 100);
  let num2 = getRandomInt(1, 100);
  let correctAnswer = NOD(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  let userAnswer = readlineSync.question("Your answer ");
  if (userAnswer == correctAnswer) {
    score++;
    console.log("correct");
    if (score === 3) {
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
}
