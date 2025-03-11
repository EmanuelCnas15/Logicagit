const prompt = require('prompt-sync')();
let valor_da_temperatura_atual = Number(prompt('Digite a temperatura atual: '));
if (valor_da_temperatura_atual >= 37.7) {
    console.log('Febre');
} else {
    console.log('Temperatura normal');
}