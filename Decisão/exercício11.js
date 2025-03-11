const prompt = require('prompt-sync')();
let senha = prompt('Digite a senha: ');

// Senha correta
const senhaCorreta = '12345678';

if (senha === senhaCorreta){
    console.log('Acesso permitido');
} else {
    console.log('Acesso negado');
}