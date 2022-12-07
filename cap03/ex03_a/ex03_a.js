
const prompt = require('prompt-sync')()

const salario = Number(prompt('Informe o salário: '))
const tempoServico = Number(prompt("Tempo de serviço: "))
let salarioReajustado = salario
const quadrienio = parseFloat(tempoServico / 4);

if(quadrienio < 1 ){
    console.log('O funcionário ainda não completou um quadrienio. ')
}else {
    for(let i = 1; i<= Math.floor(quadrienio); i++) {
    salarioReajustado = salarioReajustado * 1.01
    }
}


console.log(`O funcionário tem direito a ${Math.floor(quadrienio)} quadrienio. Por tanto seu salário deverá ser de: R$${salarioReajustado.toFixed(2)}.`)