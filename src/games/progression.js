import readlineSync from 'readline-sync'

// Функция генерации прогрессии
const generateProgression = () => {
 // Генерируем параметры прогрессии
 const length = Math.floor(Math.random() * 6) + 5
 const start = Math.floor(Math.random() * 20) - 10
 const step = Math.floor(Math.random() * 10) + 1
 const hiddenIndex = Math.floor(Math.random() * length)

 // Создаем массив прогрессии
 const progression = []
 for (let i = 0; i < length; i++) {
 progression.push(start + i * step)
 }

 // Скрываем число и сохраняем правильный ответ
 const correctAnswer = progression[hiddenIndex]
 progression[hiddenIndex] = '..'

 // Возвращаем необходимые значения
 return {
 progression: progression.join(' '), // преобразуем массив в строку
 correctAnswer
 }
}

// Основная функция игры
export const playGame = () => {
 console.log('Welcome to the Brain Games!')
 const name = readlineSync.question('May I have your name? ')
 console.log(`Hello, ${name}!`)
 console.log('What number is missing in the progression?')

 for (let i = 0; i < 3; i++) {
 const { progression, correctAnswer } = generateProgression()
 console.log(`Question: ${progression}`)
 const answer = readlineSync.question('Your answer: ')

 if (answer === correctAnswer.toString()) {
 console.log('Correct!')
 } else {
 console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
 console.log(`Let's try again, ${name}!`)
 return
 }
 }

 console.log(`Congratulations, ${name}!`)
}

