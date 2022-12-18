const prompt = require('prompt-sync')()

const valorEntrada = 20;
//direito a 1 peixe
// cada peixe extra custa R$12,00
const totPessoas = Number(prompt("Total de pessoas: ")) 
const totPeixe = Number(prompt('Total de peixes pescados: '))
let totalAPaga
if(totPeixe <= totPessoas){
    totalAPagar = totPessoas * 20
}else{
    totalAPagar = ((totPeixe - totPessoas) * 12) + (totPessoas * 20)   
}
console.log(`O numero de pessoas: ${totPessoas}`)
console.log(`Total de peixes pescados: ${totPeixe}`)
console.log(`Valor total a pagar: R$${totalAPagar.toFixed(2)}`)