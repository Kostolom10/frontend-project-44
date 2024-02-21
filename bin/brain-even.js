import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');
const name = readlineSync.question('May I have your name?  ');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const correctAnswer = 0;
while (correctAnswer < 3) {
  const i = getRandomInt(1, 100);
  const answer = readlineSync.question(`Question: ${i} `);
  if (answer === 'yes' && i % 2 === 0) {
    console.log('correct');
  }
}
