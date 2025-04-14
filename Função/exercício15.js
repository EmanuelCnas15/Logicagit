const prompt = require('prompt-sync')();

console.log("MENU");
console.log("Conversão de medidas");
console.log("1. Metro para Centímetro");
console.log("2. Centímetro para Metro");
console.log("3. Centímetros para Milímetros");
console.log("4. Milímetros para Centímetros");
console.log("5. Milímetros para Metros");
console.log("6. Metros para Milímetros");
console.log("0. Sair!");

let opcao;

function metroParaCentimetro(metros) {
    return metros * 100;
}

function centimetroParaMetro(centimetros) {
    return centimetros / 100;
}

function centimetroParaMilimetro(centimetros) {
    return centimetros * 10;
}

function milimetroParaCentimetro(milimetros) {
    return milimetros / 10;
}

function milimetroParaMetro(milimetros) {
    return milimetros / 1000;
}

function metroParaMilimetro(metros) {
    return metros * 1000;
}

do {
    opcao = Number(prompt("Escolha uma opção: "));
    switch (opcao) {
        case 1:
            let metros1 = Number(prompt("Digite o valor em metros: "));
            console.log("O valor em centímetros é: " + metroParaCentimetro(metros1));
            break;
        case 2:
            let centimetros1 = Number(prompt("Digite o valor em centímetros: "));
            console.log("O valor em metros é: " + centimetroParaMetro(centimetros1));
            break;
        case 3:
            let centimetros2 = Number(prompt("Digite o valor em centímetros: "));
            console.log("O valor em milímetros é: " + centimetroParaMilimetro(centimetros2));
            break;
        case 4:
            let milimetros1 = Number(prompt("Digite o valor em milímetros: "));
            console.log("O valor em centímetros é: " + milimetroParaCentimetro(milimetros1));
            break;
        case 5:
            let milimetros2 = Number(prompt("Digite o valor em milímetros: "));
            console.log("O valor em metros é: " + milimetroParaMetro(milimetros2));
            break;
        case 6:
            let metros2 = Number(prompt("Digite o valor em metros: "));
            console.log("O valor em milímetros é: " + metroParaMilimetro(metros2));
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");
    }
} while (opcao !== 0);

console.log("Programa encerrado.");