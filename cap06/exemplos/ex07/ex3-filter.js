const numeros = [10, 13, 20, 8, 15]

const pares = numeros.filter(num => num % 2 == 0)
console.log(pares.join(','))

console.log("=-".repeat(35))


const amigos = [
    {nome: "Ana", idade: 20},
    {nome: "Bruno", idade: 17},
    {nome: "Thiago", idade: 30},
    {nome: "João", idade: 16},
    {nome: "Marcos", idade: 26}
]

const maiores = amigos.filter(aux => aux.idade >= 18)

for( const amigo of maiores){
    console.log(`Nome: ${amigo.nome} - Idade: ${amigo.idade}`)
}
