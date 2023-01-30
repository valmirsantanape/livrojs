const numeros = [10, 13, 20, 8, 15]

const pares = numeros.filter(num => num % 2 == 0)
console.log(pares.join(','))

console.log("=-".repeat(35))


const amigos = [
    {nome: "Ana", idade: 20},
    {nome: "Bruno", idade: 17},
    {nome: "Thiago", idade: 30},
    {nome: "", idade: 16},
    {nome: "Marcos", idade: 26}
]

const amigos2 = amigos.filter(aux => aux.idade >= 18 || aux.nome.includes("B"))

for( const amigo of amigos2){
    console.log(`Nome: ${amigo.nome} - Idade: ${amigo.idade}`)
}

if(amigos2.length == 0){
    console.log("Não há amigos que atendam essas condições")
}