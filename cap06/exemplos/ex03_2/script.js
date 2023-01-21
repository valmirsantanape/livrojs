const frm = document.querySelector("form")
const respErro = document.querySelector("#outErro")
const respDica = document.querySelector("#outDica")
const respChances = document.querySelector("#outChances")
const gameOver = document.querySelector("#outGameOver")

const numeroSorteado = Math.floor(Math.random() * 10) + 1
const erros = []
const chance = 6
respChances.innerText = chance

frm.addEventListener("submit", (e) => {
    
    const numero = Number(frm.inNumero.value)
    
    if(numero == numeroSorteado){
        respDica.innerText = `Parabens!`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){
            alert("Vc ja selecionou esse numero. \nPor favor, escolha outro numero. ")
        } else {
            erros.push(numero)
            const numErro = erros.length
            
            const numChances = chance - numErro
            
            respChances.innerText = numChances
            
            respErro.innerText = `${numErro} - (${erros.join(", ")})`
            if(numChances == 0){
                frm.btSubmit.disabled = true
                frm.btNovo.className = "Exibe"                
                gameOver.innerText = `Você perdeu! \nO numero sorteado foi: ${numeroSorteado}`
                gameOver.style.color = "red"
                frm.inNumero.disabled = true
                frm.inNumero.value = ""
                
            }else{
                const dica = numero > numeroSorteado? `O numero ${numero} é maior que o numero sorteado` : `O numero ${numero} é menor que o numero sorteado`

                respDica.innerText = dica
                frm.inNumero.value = ""
                frm.inNumero.focus()
            }
        }
    }
    
    e.preventDefault()

})

frm.btNovo.addEventListener("click", () => {
    location.reload()
})


