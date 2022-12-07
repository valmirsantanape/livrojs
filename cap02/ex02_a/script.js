const frm = document.querySelector('form')
const resp = document.querySelector('.resposta')


frm.addEventListener("submit", (e) => {
    const medicamento = frm.inNome.value
    const preco = parseFloat(frm.inPreco.value)
    const precoDesconto = Math.floor(preco)
    console.log(medicamento)
    console.log(preco)
    
    resp.innerText = `${medicamento}: ${precoDesconto.toFixed(2)}`

    e.preventDefault()
})
