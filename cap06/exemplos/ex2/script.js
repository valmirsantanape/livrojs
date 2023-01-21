const frm = document.querySelector("form")
const resp = document.querySelector("span")
const respList = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    
    const nome = frm.inNome.value

    pacientes.push(nome)
    let lista = ""
    pacientes.forEach((nome, i) => {
        lista += `${i + 1}º ${nome} \n`
        
    })
    
    respList.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
    e.preventDefault()
})

frm.btnUrgencia.addEventListener("click", (e) => {
    
})