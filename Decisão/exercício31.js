const prompt = require('prompt-sync')();

let usuario = prompt('Usuário: ');
let tipoUsuario = prompt('Você é estudante, professor ou funcionário? ');

if (tipoUsuario === 'Estudante' || tipoUsuario === 'Professor') {
    console.log('Acesso permitido');
} else {
    console.log('Acesso negado');
}