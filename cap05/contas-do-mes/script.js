const frm = document.querySelector('form')
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ''

let numContas = 0
let valTotal = 0

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const item = frm.inItem.value
    const valor = Number(frm.inValor.value)
    
    numContas++

    valTotal = valTotal + valor
    
    resposta = resposta + item + '- R$: ' + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}----------------`
    resp2.innerText = `${numContas} Item/s - Total R$: ${valTotal.toFixed(2)}`
    
   

    frm.inItem.value = ''
    frm.inValor.value = ''
    frm.inItem.focus()

   

})