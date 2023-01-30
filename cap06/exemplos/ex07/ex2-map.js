const amigos = [
    {nome: "Ana", idade: 20},
    {nome: "Bruno", idade: 17},
    {nome: "Thiago", idade: 30},
    {nome: "João", idade: 23},
    {nome: "Marcos", idade: 26}
]

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade, idade: aux.idade}))



for(const amigo of amigos2){
    console.log(`${amigo.nome} - Nasceu em ${amigo.nasc}`)
}