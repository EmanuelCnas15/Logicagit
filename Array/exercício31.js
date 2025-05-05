let numeros = [10, -5, 3, -2, -8, 7, 0, -1];
let numerosNegativos = numeros.filter(function(numero) {
    return numero < 0;
});
console.log(numerosNegativos);