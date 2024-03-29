#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name?  ");
console.log(`Hello, ${name}`);
let score = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
while (true) {
  const progression = [];
  let between = getRandomInt(1, 10);
  let start = getRandomInt(1, 20);
  for (let i = start; progression.length < 10; i = i + between) {
    progression.push(i);
  }
  let secretindex = getRandomInt(0, 9);
  let correctAnswer = progression[secretindex];
  progression[secretindex] = "..";
  let str = progression.join(" ");
  console.log(`Question: ${str}`);
  let userAnswer = readlineSync.question("Your answer: ");
  if (correctAnswer == userAnswer) {
    score++;
    console.log("correct!");
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
