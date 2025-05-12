let num = [1, 2, 3, 4, 5];
num.forEach(function(valor, indice){
    console.log(indice + " : " + valor);
});
// forEach dos valores

let soma = 0;
num.forEach(function(valor, indice){
    soma += valor;
});
console.log("Soma: " + soma);
//forEach da soma