const frm = document.querySelector('form')
const resultado = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    const nome = frm.Inome.value
    const altura = Number(frm.Ialtura.value)
    let pesoIdeal = 0
    console.log(frm.iMasc.checked)
    
    if(frm.iMasc.checked === true) {
        pesoIdeal = 22 * Math.pow(altura, 2)
    }else{
        pesoIdeal = 21 * Math.pow(altura, 2)
    }

    resultado.innerText = `${nome} seu peso ideal é de ${pesoIdeal.toFixed(2)}kg`


    e.preventDefault()
})