const prompt = require ('prompt-sync')();
let basemaior = prompt("Digite a base maior do trapézio");
let basemenor = prompt("Digite a base menor do trapézio");
let altura = prompt("Digite a altura do trapézio");
let basemaior_ = Number(basemaior);
let basemenor_ = Number(basemenor);
let altura_ = Number(altura);
let area = (basemaior_ + basemenor_) * altura_ / 2;
console.log("A área do trapézio é: " + area);
