const prompt = require('prompt-sync')();
let voto;
let valordachapaA = 0; valordachapaB = 0;
while (voto != 0) {
	console.log("VOTAÇÃO");
    console.log("1 - chapa A");
    console.log("2 - chapa B");
    console.log("0 - Encerrar votação");
    voto = Number(prompt("Digite seu voto: "));
    if (voto ==1){
        valordachapaA++;
    }else if (voto ==2){
        valordachapaB++;
    }else if (voto ==0){
        console.log("Votação encerrada!");
    }else{
        console.log("Valor inválida!");
    }
}
if (valordachapaA > valordachapaB){
    console.log("Chapa A foi a eleita!");
}
else if (valordachapaB > valordachapaA){
    console.log("Chapa B foi a eleita!");
}
else{
    console.log("Houve empate entre as chapas A e B!");
}

