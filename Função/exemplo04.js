const prompt=require('prompt-sync')();
function converteMetrosParaCm(metros){
    return metros*100;
}
let numero=Number(prompt("Digite um número"));
let resultado= converteMetrosParaCm(numero);
console.log(resultado);
