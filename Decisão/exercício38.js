const prompt = require('prompt-sync')();
let numero1 = prompt('Digite o primeiro número: ');
let numero2 = prompt('Digite o segundo número: ');
let operacao = prompt('Digite a operação desejada (+, -, *, /): ');
switch (operacao) {
    case '+':
        console.log(`A soma de ${numero1} e ${numero2} é ${Number(numero1) + Number(numero2)}`);
        break;
    case '-':
        console.log(`A subtração de ${numero1} e ${numero2} é ${Number(numero1) - Number(numero2)}`);
        break;
    case '*':
        console.log(`A multiplicação de ${numero1} e ${numero2} é ${Number(numero1) * Number(numero2)}`);
        break;
    case '/':
        console.log(`A divisão de ${numero1} e ${numero2} é ${Number(numero1) / Number(numero2)}`);
        break;
    default:
        console.log('Operação inválida!');
}