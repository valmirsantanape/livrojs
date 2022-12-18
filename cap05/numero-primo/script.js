const frm = document.querySelector('form')
const resp = document.querySelector('#outResp1')

let contDivisores = 0;

frm.addEventListener('submit', (e) => {

    const numero = Number(frm.inNumero.value)
    
    
    for (let i = 1; i <= numero; i++) {
        if(numero % i === 0) {
            contDivisores++
            //Condição para verificar se o numero de divisores é maior que 2.
            //Nesse caso o loop é forçado a parar continuando a execução do programa
            if(contDivisores > 2){
                break   
            }
        }
        
        }
        if(contDivisores === 2){
            resp.innerText = `O numero ${numero} tem ${contDivisores} divisores, por tanto se trata de um numero PRIMO`
        }else{
            resp.innerText = `O numero ${numero} tem mais de 2 divisores, por tanto não é um numero PRIMO`
        }
    
    contDivisores = 0
    frm.inNumero.value = ''
    e.preventDefault()

})
