const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

// acessar informações no array 
console.log(alunasGama[3])

//Operador Spread (...)
const alunasXp = [...alunasGama, "Marcela"]

console.log(alunasXp)

//Metódos de interação

alunasXp.map(aluna => console.log(aluna))

// filter 

const numeros = [34, 45, 87, 40, 80, 77, 19]

const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numeroPares = numeros.filter(numero => numero%2 === 0)
console.log(numeroPares)