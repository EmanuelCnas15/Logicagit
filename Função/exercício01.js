const prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite a nota: "));
let n2 = Number(prompt("Digite a outra nota: "));

let mediaValue = (n1 + n2) / 2;

if (mediaValue >= 7) {
    aprovado();
}
else if (mediaValue >= 5) {
    reprovado();
}


function aprovado(){
    console.log("Aprovado!");
}
function reprovado(){
console.log("Reprovado!");
}