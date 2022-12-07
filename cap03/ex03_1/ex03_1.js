//pacote de entrada de dados (prompt-sync)
const prompt = require('prompt-sync')()

const num1 = Number(prompt('Informe o primeiro numero: '))
const num2 = Number(prompt('Informe o segundo numero: '))
const soma = num1 + num2

console.log(`${num1} + ${num2} = ${soma}`)
