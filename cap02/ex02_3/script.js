const frm = document.querySelector('form');

const getModelo = document.querySelector('h3');
const getValor = document.querySelector('.outValor');
const getValorEntrada = document.querySelector('.outEntrada');
const getValorParcelas = document.querySelector('.outParcelas');

frm.addEventListener('submit', (e) => {
    const modelo = frm.inModelo.value
    const preco = parseFloat(frm.inPreco.value)

    const entrada = preco * 0.5
    const parcelas = (preco * 0.5) / 12

    getModelo.innerText = `Modelo: ${modelo}`
    getValor.innerText = `Valor: R$${preco}`
    getValorEntrada.innerText = `Entrada: R$${entrada}`
    getValorParcelas.innerText = `Parcelas: R$${parcelas.toFixed(2)}`

    e.preventDefault()

})