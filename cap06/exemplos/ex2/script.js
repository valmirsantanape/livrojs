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

frm.btnUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em carater de urgencia")
        frm.inNome.focus()
        return
    }
    const nome = frm.inNome.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}º ${paciente}\n`
    })
    respList.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
})

frm.btnAtender.addEventListener('click', (e) => {
    resp.style.color = 'blue'
    if (pacientes.length == 0) {
        if(!frm.checkValidity()){
           alert("Não tem paciente na fila de espera")
           resp.innerText = ""
            frm.inNome.focus()
            
        }else{
            const emAtendimento = frm.inNome.value
            resp.innerText = emAtendimento
            frm.inNome.value = ""
            frm.inNome.focus()
        
        }
        
    }else{
        const emAtendimento = pacientes.shift()
        resp.innerText = emAtendimento
        let lista = ""
        pacientes.forEach((paciente, i) => {
            lista += `${i + 1}º ${paciente}\n`
        })
        respList.innerText = lista
    }
    
})