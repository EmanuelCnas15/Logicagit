const prompt = require('prompt-sync')();
let dia_da_semana = prompt('Digite o dia da semana: ');
let idade = prompt('Digite a idade: ');
let tipo_clinte = prompt('Digite o tipo de cliente: ');
if (idade >= 60)
    console.log('Desconto garantido!');
else if (dia_da_semana == 'Segunda' || dia_da_semana == 'Terça' || tipo_clinte == 'Fiel')
    console.log('Desconto garantido!');
else
    console.log('Sem desconto!');
