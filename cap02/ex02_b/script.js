const frm = document.querySelector("form")
const respo = document.querySelector("h3")

frm.addEventListener('submit', (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)
    valorTotal = (tempo / 15) * valor

    respo.innerHTML = `Valor total a pagar: R$${valorTotal.toFixed(2)}`
    e.preventDefault()
})