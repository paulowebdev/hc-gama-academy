//Crie um algoritimo quer receba três notas de um aluno, calcule sua média e
// mostre as seguintes mensagens de acordo com cada situação
// - se a média for igual ou maior que 7 - Aprovado
// - se a média for maior e igual a 5 e menor que 7 - Recuperação
// - se a média for menor que 5 - reprovado

function calculaMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3

    if(media >= 7){
        return 'Aprovado'
    }

    if (media >= 5 && media < 7){
        return 'recuperação'
    }

    if (media < 5){
        return 'Reprovado! Tente novamente!'
    }
}

console.log(calculaMedia(8,7,8))