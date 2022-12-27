const frm = document.querySelector('form')
const resp = document.querySelector("h3")

frm.addEventListener('submit', (e) => {
    const numero = Number(frm.inNumero.value)
    let estrela = ''
    for(let i = 1; i <= numero; i++){
        if(i == numero || i % 50 === 0){
            estrela = estrela + '*'
        }else{
            estrela = estrela + '*-'
        }

        if(i > 0 && i % 50 === 0){
            estrela = estrela + '\n'
        }
    }


    resp.innerText = estrela

    e.preventDefault()
})