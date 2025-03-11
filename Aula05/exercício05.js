const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number: '));

const messages = [
    'The number does not meet the criteria.',
    'The number is positive and not a multiple of 3.'
];

const index = (number > 0 && number % 3 !== 0) * 1;

console.log(messages[index]);