const prompt = require('prompt-sync')();
let entrada = prompt('Digite a entranda');
if (entrada ) {
    console.log('Em que posso ajudar?');
} else {
    console.log('Nenhuma entrada detectada');
}