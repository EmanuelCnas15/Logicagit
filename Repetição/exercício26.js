const prompt = require('prompt-sync')();

let senhaCorreta = "1234";
let senha;

do {
    senha = prompt("Digite a senha: ");
    if (senha !== senhaCorreta) {
        console.log("Senha incorreta. Tente novamente.");
    }
} while (senha !== senhaCorreta);

console.log("Senha correta! Acesso permitido.");