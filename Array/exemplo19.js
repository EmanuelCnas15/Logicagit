let notas = [7, 8, 4];
let temReprovado = notas.some(function(n) {
return n < 5;
});
console.log(temReprovado);