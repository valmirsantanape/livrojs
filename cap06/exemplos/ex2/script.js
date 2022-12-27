const frm = document.querySelector("form")
const resp = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [];

frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value
    
    pacientes.push(nome)

    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += ` ${i + 1}. ${pacientes[i]} \n`
        
    }

    respLista.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()

    

    e.preventDefault()
})