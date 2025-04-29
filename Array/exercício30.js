const prompt = require ('prompt-sync')();


let array = [1, 2, 3, 4, 5]; 
console.log("Array inicial:", array);

const numero = (prompt("Digite o número que deseja remover: "));

const index = array.indexOf(numero); 
if (index !== -1) {
    array.splice(index, 1); 
    console.log(`O número ${numero} foi removido.`);
} else {
    console.log(`O número ${numero} não foi encontrado no array.`);
}

console.log("Array final:", array);