const prompt = require('prompt-sync')();

let anosDeExperiencia = prompt('Quantos anos de experiência profissional você tem? ');

if (anosDeExperiencia < 2) {
    console.log('Nível: Júnior');
} else if (anosDeExperiencia >= 2 && anosDeExperiencia < 5) {
    console.log('Nível: Pleno');
} else {
    console.log('Nível: Sênior');
}