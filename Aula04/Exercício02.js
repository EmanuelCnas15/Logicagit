const prompt = require ('prompt-sync')();
let nota1 = (Number(prompt("Digite a primeira nota: ")));
let nota2 = (Number(prompt("Digite a segunda nota: ")));
let media = (nota1 + nota2) / Number(2);
let media_ = (nota1 == nota2);
let media__ = (nota1 != nota2);
console.log("A média das notas é: " + media);
console.log("A nota1 é igual a nota2? " + media_);
console.log("A nota1 é diferente da nota2? " + media__);
