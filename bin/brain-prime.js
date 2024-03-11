#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games");
const name = readlineSync.question("May I have your name?  ");
console.log(`Hello, ${name}`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let score = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}
while (true) {
  let secretNumber = getRandomInt(1, 100);
  let correctAnswer;
  if (isPrime(secretNumber) === true) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  console.log(`Question : ${secretNumber}`);
  let userAnswer = readlineSync.question("Your answer: ");
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    score++;
    if (score === 3) {
      console.log(`Congratulions, ${name}`);
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
