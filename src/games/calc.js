import readlineSync from 'readline-sync'
// основная функция игры
export function runCalcGame() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`) // исправили форматирование приветствия
  console.log('What is the result of the expression?')
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100) + 1 // исправили опечатку в названии переменной
    const number2 = Math.floor(Math.random() * 100) + 1
    const operators = ['+', '-', '*']
    const randomIndex = Math.floor(Math.random() * 3)
    const operator = operators[randomIndex]
    // Исправили форматирование выражения
    const expression = `${number1} ${operator} ${number2}`
    let result
    if (operator === '+') {
      result = number1 + number2
    } else if (operator === '-') {
      result = number1 - number2
    } else if (operator === '*') {
      result = number1 * number2
    }
    // Исправили вывод вопроса
    console.log(`Question: ${expression}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== result.toString()) {
      console.log('\'' + userAnswer + '\' is wrong answer ;(. Correct answer was \'' + result + '\'.')
      console.log(`Let's try again, ${name}!`)
      return
    } else {
      console.log('Correct!')
    }
  }
  console.log(`Congratulations, ${name}!`)
}
