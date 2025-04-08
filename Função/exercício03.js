const prompt = require('prompt-sync')();

let pontos = prompt('Digite a pontuação do jogador: ');

let nivel;
function classificaJogador(pontos) {
    if (pontos < 1000) {
        return 'Iniciante';
    } else if (pontos >= 1000 && pontos <= 4999) {
        return 'Intermediário';
    } else if (pontos >= 5000 && pontos <= 9999) {
        return 'Avançado';
    } else {
        return 'Mestre';
    }
}


if (pontos < 1000) {
    nivel = 'Iniciante';
} else if (pontos >= 1000 && pontos <= 4999) {
    nivel = 'Intermediário';
} else if (pontos >= 5000 && pontos <= 9999) {
    nivel = 'Avançado';
} else {
    nivel = 'Mestre';
}

console.log(`O jogador é classificado como: ${nivel}`);
