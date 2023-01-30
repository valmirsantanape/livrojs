const numeros = [10, 13, 20, 8 ,15]

const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
console.log(`Soma: ${soma}`)


const amigos = [
    {nome: "Ana", idade: 18},
    {nome: "Thiago", idade: 17},
    {nome: "Danilo", idade: 30},
    {nome: "Marcio", idade: 25}
]

const soma_ = amigos.reduce((acumulador_, amigo) => acumulador_ + amigo.idade, 0)
const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", " ")

console.log(`Soma: ${soma_}`)
console.log(`Todos: ${todos}`)

console.log(`=` * 60)

const maiorNumero = numeros.reduce((a, b) => Math.max(a, b), 0)

console.log(maiorNumero)