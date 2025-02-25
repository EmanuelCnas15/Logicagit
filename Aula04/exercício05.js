const prompt = require ('prompt-sync')();
let num= 20;
let positivo= num>0;
let par= num%2==0;
let resultado= (positivo && par);
console.log(resultado);
