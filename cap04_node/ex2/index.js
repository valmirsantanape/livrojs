const prompt = require('prompt-sync')()

const valorCompra = Number(prompt("Valor total: "))

//cada parcela deve ser de no minimo 20 reais
let minParcelas = 6;

while(valorCompra / minParcelas < 20){
    minParcelas--
}
console.log(`É possivel dividir em até ${minParcelas}x`)
let totParcelas = prompt('Informe em quantas vezes deseja dividir: ')

while(totParcelas > minParcelas ){
    console.log(`WARNIG! \nO numero maximo de parcelas necessária para essa compra é ${minParcelas}`)
    totParcelas = prompt('Informe em quantas vezes deseja dividir: ')
}
const valorParcelas = valorCompra / totParcelas

console.log(`Valor compra R$${valorCompra.toFixed(2)}`)
console.log(`Numero de parcelas ${totParcelas}x.`)
console.log(`Valor das parcelas R$${valorParcelas.toFixed(2)}`)
