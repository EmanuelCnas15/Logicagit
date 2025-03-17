let prompt = require('prompt-sync')();

let temperatura = prompt('Digite a temperatura em graus Celsius: ');

if (temperatura < 10) {
    console.log('Frio intenso');
} else if (temperatura >= 10 && temperatura <= 19) {
    console.log('Frio moderado');
} else if (temperatura >= 20 && temperatura <= 29) {
    console.log('Temperatura agradável');
} else {
    console.log('Calor intenso');
}