const frm = document.querySelector("form")
const resp = document.querySelector("span")
const  respLista = document.querySelector("pre")

const pacientes = [] 

frm.addEventListener("submit", (e) =>{
    
    const paciente = frm.inNome.value
    pacientes.push(paciente)
    let lista = ""
    
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }
    respLista.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
    e.preventDefault()
})

frm.btnUrgencia.addEventListener("click", (e) => {
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido com urgencia! ")
        frm.inNome.focus()
        return
    }
    const nome = frm.inNome.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => { lista += `${i + 1}. ${pacientes[i]} \n`
    respLista.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
        
    });
})

frm.btnAtender.addEventListener("click", (e) => {
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera.")
        frm.inNome.focus()
        return
    }
    const atender = pacientes.shift()
    resp.innerHTML = atender
    let lista = ""

    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${pacientes[i]}\n`
        respLista.innerText = lista
    });

})