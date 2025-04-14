const prompt = require('prompt-sync')();
function media(n1, n2) {
    return (n1 + n2) / 2;
}
let n1 = prompt("Digite a primeira nota: ");
let n2 = prompt("Digite a segunda nota: ");
let resultado = media(n1, n2);
console.log(`A média entre ${n1} e ${n2} é ${resultado}`);