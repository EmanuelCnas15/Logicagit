const prompt = require('prompt-sync')();
let senha = prompt('Digite a senha: ');
if (senha.length < 8){
    console.log('Senha fraca');
} else {
    console.log('Senha forte');
}