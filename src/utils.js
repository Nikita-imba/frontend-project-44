export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min
export const getRandomOperator = (operators) =>
  operators[Math.floor(Math.random() * operators.length)]
