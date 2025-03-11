const prompt = require('prompt-sync')();
let bateria = Number(prompt('Digite a porcentagem da bateria do seu celular: '));
if (bateria < 30) {
    console.log('Seu celular está com pouca bateria');
} else {
    console.log('Seu celular está com muita bateria');
}