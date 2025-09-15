import { runGame } from '../index.js' // Изменили импорт

const rules = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.'

const isPrime = number => {
 if (number <= 1) return false
 for (let i = 2; i <= Math.sqrt(number); i++) {
 if (number % i === 0) return false
 }
 return true
}

const generateQuestion = () => {
 const number = Math.floor(Math.random() * 100) + 1
 const correctAnswer = isPrime(number) ? 'yes' : 'no'
 return [number, correctAnswer] // Возвращаем массив, как ожидает runGame
}

export const startPrimeGame = () => {
 runGame(rules, generateQuestion)
}

