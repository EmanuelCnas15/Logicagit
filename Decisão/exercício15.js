const prompt = require('prompt-sync')();
let Idade_de_uma_pessoa = prompt('Qual a sua idade?');
if (Idade_de_uma_pessoa <=12) {
    console.log('Você é uma criança');
}
else if (Idade_de_uma_pessoa <=17)
{
    console.log('Você é um adolescente');
}
else if (Idade_de_uma_pessoa >=18)
{
    console.log('Você é um adulto');
}