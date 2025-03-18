const prompt = require('prompt-sync')();

let usuario = prompt('Digite o nome do usuário: ');
let senha = prompt('Digite a senha: ');
let usuariocorreto = "admin";
let senhacorreta = "1234";

if (usuario == usuariocorreto && senha == senhacorreta) {
    console.log("Acesso permitido");
}
else {
    console.log("Acesso negado");
}