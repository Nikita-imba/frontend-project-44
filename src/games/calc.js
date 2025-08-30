import readlineSync from 'readline-sync';

    // основная функиця игры

  export function runCalcGame()=>{
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name?");
    console.log(`${name}`);
};
