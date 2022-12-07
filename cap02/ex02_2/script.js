const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    
    resp1.innerHTML = ''
    resp2.innerHTML = ''
    const titulo = frm.inTitulo.value
    const duracaoEmMinutos = Number(frm.inDuracao.value)
    const horas = Math.floor(duracaoEmMinutos /60)
    const minutos = duracaoEmMinutos % 60

    resp1.innerHTML += `TÍTULO: ${titulo}`.toUpperCase()
    resp2.innerHTML += `DURAÇÃO: ${horas}:${minutos}`
    

    e.preventDefault();
    

})

