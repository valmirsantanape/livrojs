const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const carros = [
    // {modelo: "Sandero", ano: 2014, preco: 32900.00 },
    // {modelo: "Celta", ano: 2011, preco: 19500.00 },
    // {modelo: "Palio", ano: 2012, preco: 24000.00 },
    // {modelo: "Fiesta", ano: 2010, preco: 23000.00 },
    // {modelo: "Cobalt", ano: 2014, preco: 35700.00 },
    // {modelo: "Kwid", ano: 2018, preco: 35950.00 },
    // {modelo: "Astra", ano: 2011, preco: 31500.00 }
]

frm.inAno.disabled = true

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    console.log(modelo)
    //const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    console.log(preco)

    carros.push({modelo, /*ano,*/ preco})
    
    

    frm.inModelo.value = ""
    //frm.inAno.value = ""
    frm.inPreco.value = ""

    inModelo.focus()

    frm.btnListar.dispatchEvent(new Event("click"))
})

frm.btnListar.addEventListener("click", () => {
    if(carros.length == 0){
        resp.innerText = `Não existe veículos disponíveis pra venda \nAgradecemos a sua visita.  `
        return
    }
    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n", " ")

    resp.innerText = ` Lista de carros cadastrados\n${"-".repeat(40)}\n${lista}`
})