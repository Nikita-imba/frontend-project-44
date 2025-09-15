import { runGame } from '../index.js';
import { getRandomInt } from '../utils.js';

// Функция для нахождения НОД по алгоритму Евклида
const calculateGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGcd(b, a % b);
};

export const gameRules = 'Find the greatest common divisor of given numbers.';

export const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  
  const correctAnswer = String(calculateGcd(num1, num2));
  const question = `${num1} ${num2}`;
  
  return [question, correctAnswer];
};

export default () => runGame(gameRules, generateQuestion);
