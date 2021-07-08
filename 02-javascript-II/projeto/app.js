const livros = require('./database')
// console.log(livros)

//pegar input do usuário

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//se for sim, mostrar as categorias disponíveis. Perguntar qual categoria ela escolhe
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade ', '/História Brasileira', '/Américas', ' /Tecnologia', 'Estilo de vida')
    
    const entradaCategoria = readline.question('Qual categoria você escolhe?:')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados =  livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

//se escolher não, mostra todos os livros em ordem crescente pela quantidade de páginas.