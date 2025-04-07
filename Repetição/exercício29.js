const prompt = require('prompt-sync')(); 
console.log("    CALCULADORA   ");
console.log("DIGITE 1 PARA SOMAR");
console.log("DIGITE 2 PARA SUBTRAIR"); 
console.log("DIGITE 3 PARA MULTIPLICAR");
console.log("DIGITE 4 PARA DIVIDIR");
console.log("DIGITE 0 PARA SAIR");
let opcao;
let num1, num2, resultado;

do {
    opcao = Number(prompt("Digite uma opção: "));
    switch (opcao) {
        case 1:
            num1 = Number(prompt("Digite o primeiro número: "));
            num2 = Number(prompt("Digite o segundo número: "));
            resultado = num1 + num2;
            console.log(`Resultado da soma: ${resultado}`);
            break;
        case 2:
            num1 = Number(prompt("Digite o primeiro número: "));
            num2 = Number(prompt("Digite o segundo número: "));
            resultado = num1 - num2;
            console.log(`Resultado da subtração: ${resultado}`);
            break;
        case 3:
            num1 = Number(prompt("Digite o primeiro número: "));
            num2 = Number(prompt("Digite o segundo número: "));
            resultado = num1 * num2;
            console.log(`Resultado da multiplicação: ${resultado}`);
            break;
        case 4:
            num1 = Number(prompt("Digite o primeiro número: "));
            num2 = Number(prompt("Digite o segundo número: "));
            if (num2 !== 0) {
                resultado = num1 / num2;
                console.log(`Resultado da divisão: ${resultado}`);
            } else {
                console.log("Divisão por zero não é permitida.");
            }
            break;
        case 0:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
while (opcao !== 0);
console.log("Sistema encerrado.");