const prompt = require('prompt-sync')()

const pesoRacao = Number(prompt("Informe o peso da ração: (kg) "))
const consumoRacao = Number(prompt('Quanto de ração o gata consome por dia: (g) '))

const converteKiloGrama = pesoRacao * 1000
const totDias = converteKiloGrama / consumoRacao

console.log(`Peso da ração: ${pesoRacao}`)
console.log(`Consumo diário: ${consumoRacao}`)
console.log(`Duracao em dias ${Math.floor(totDias)}`)





