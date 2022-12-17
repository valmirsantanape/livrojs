const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    let valor = Number(frm.inValor.value)
    notas = [10, 50, 100]
    
    while(valor < 10){
        alert('Valor indisponivel')
    }

    let cedula100 = 0
    let cedula50 = 0
    let cedula10 = 0
    
    while( valor > 100){
        cedula100++
        valor = valor - 100
        while( valor > 50 ){
            cedula50++
            valor = valor - 50
           
        }
        while( valor > 0 ) {
            cedula10++
            valor = valor - 10
        }
    }
    
    

    resp.innerText = `${cedula100}cédulas de 100 \n ${cedula50}cédulas de 50 \n ${cedula10}cédulas de 10`

    e.preventDefault()
})
