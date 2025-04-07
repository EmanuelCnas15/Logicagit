const prompt = require('prompt-sync')(); 
console.log("      MENU     ");
console.log("DIGITE 1 PARA IR A PAGINA DE CADASTRO");
console.log("DIGITE 2 PARA IR A PAGINA DE CONSULTAR PRODUTO");
console.log("DIGITE 0 PARA SAIR");

let opcao;

do {
    opcao = Number(prompt("Digite uma opção: "));
    switch (opcao) {
        case 1:
            console.log("Você escolheu a página de cadastro.");
            break;
        case 2:
            console.log("Você escolheu a página de consulta de produto.");
            break;
        case 0:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);

console.log("Sistema encerrado.");