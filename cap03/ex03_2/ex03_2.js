const prompt = require('prompt-sync')()

const veiculo = prompt('Veículo: ')
const preco = Number(prompt('Preço: '))
const entrada = preco * 0.5
const parcela = entrada / 12
console.log('')
console.log('')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log(`${veiculo}`)
console.log(`Valor total do veículo R$ ${preco.toFixed(2)}`)
console.log(`A entrada do veículo fica de R$${entrada.toFixed(2)}`)
console.log(`O restante ficará dividido em 12x de R$${parcela.toFixed(2)}.`)
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
