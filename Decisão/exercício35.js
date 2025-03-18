const prompt = require('prompt-sync')();
let renda_mensal = prompt('Digite a renda mensal: ');
let tempo_de_emprego = prompt('Digite o tempo de emprego: ');
let restrição = prompt('Possui restrição? (S/N) ');
if (renda_mensal >= 2000 && tempo_de_emprego >= 1 && restrição == 'N')
    console.log('Crédito aprovado!');
else
    console.log('Crédito negado!');