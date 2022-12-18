const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const numero = Number(frm.inNumero.value)
    const str = numero % 2 == 0? `O numero ${numero} é PAR`: `O numero ${numero} é IMPAR` 
    
    resp.innerText = str

    e.preventDefault()
})