import readlineSync from 'readline-sync';

    // основная функиця игры

  export function runCalcGame() {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name?");
    console.log(`${name}`);
    console.log("Hello",`${name}`);
    console.log("What is the result of the expression?");
    for (let i = 0; i < 3; i+=1){
    const numder = Math.floor(Math.random() * 100) + 1;
    const number = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*' ];
    const randomIndex = Math.floor(Math.random() * 3);
    const operator = operators[randomIndex];
    const expression = `${ numder} ${operator}  ${number}`;
    let expression2;
    if (operator === '+'){
    expression2 = numder + number;
}else if(operator === '-'){
    expression2 = numder - number;     
}else if(operator === '*'){
    expression2 = numder * number;
};
    console.log('Question:' + expression);
    const user = readlineSync.question('Your answer: ');
    if (user !== expression2.toString()){
    console.log(`'${user}' is wrong answer ;(. Correct answer was '${expression2}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
}else{ 
    console.log('Correct');
}
}
   console.log(`Congratulations, ${name}!`);
};
