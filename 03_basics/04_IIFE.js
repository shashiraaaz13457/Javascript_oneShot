//Immediately invoked function EXPRESSION

// SYNTAX WITH EXAMPLE
// (FUNCTION DEFINITION) (FUNCTION EXECUTION)

(function chai(){ //NAMED IIFE
    console.log(`DB CONNECTED`);
}) ();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('SHASHI');

// just the differnce finding out between double quotes and single quotes
let stringWithQuotes = 'He said, "It\'s raining outside."';
console.log(stringWithQuotes);