const frm = document.querySelector('form')
const setValor = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const valorBuffer = parseFloat(frm.inValorBuffer.value);
    const consumoCliente = parseFloat(frm.inConsumo.value);

    const valorAPagar = (consumoCliente / 1000) * valorBuffer

    setValor.innerText = valorAPagar.toFixed(2)

    e.preventDefault()
})