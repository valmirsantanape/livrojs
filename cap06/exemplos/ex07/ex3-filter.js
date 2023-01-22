const numeros = [10, 13, 20, 8, 15]

const pares = numeros.filter(num => num % 2 == 0)
console.log(pares.join(','))

console.log("=-".repeat(35))


const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Catia", idade: 25}]

const amigos2 = amigos.filter(aux => aux.idade >= 30 || aux.nome.includes("0"))

for(const amigo of amigos2){
    console.log(`${amigo.nome} - Idade: ${amigo.idade} anos.`)

}
if(amigos2.length == 0){
    console.log("Não há amigos que atenda essas condições na lista informada.")
}
