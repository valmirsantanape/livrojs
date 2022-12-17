const frm = document.querySelector("form")
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const horaLocal = frm.inHora.value
    const horaMin = horaLocal.split(':')
    console.log(horaMin)
    
    let hora = Number(horaMin[0]) + 5
    const min = horaMin[1]
    console.log(hora)

    if(hora > 23 ){
        hora = hora % 24
    }
    if(hora < 10){
        hora = String(`0${hora}`)
    }
    
    resp.style.color = 'blue'
    resp.innerText = `Agora é exatamente ${hora}:${min} na França`

    e.preventDefault()
})