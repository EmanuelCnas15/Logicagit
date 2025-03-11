const prompt = require('prompt-sync')();

let temperaturaIdeal = parseFloat(prompt('Digite a temperatura ideal: '));
let temperaturaAmbiente = parseFloat(prompt('Digite a temperatura do ambiente: '));

if (temperaturaAmbiente > temperaturaIdeal) {
    console.log('O compressor está ligado.');
} else if (temperaturaAmbiente < temperaturaIdeal) {
    console.log('O compressor está desligado.');
} else {
    console.log('O compressor está na temperatura ideal.');
}