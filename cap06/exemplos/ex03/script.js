const frm = document.querySelector("form")
const respAcerto = document.querySelector("#outResp2")
const respErro = document.querySelector("#outResp1")
const respDica = document.querySelector("pre")


const erros = []
respErro.innerHTML = erros

const chance = 6

let sorteado = Math.floor(Math.random() * 100 + 1) 

console.log(sorteado)

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    
    if(numero == sorteado){
        respDica.innerText = `Parabéns!! Numero sorteado: ${sorteado}`
        respDica.style.color = "blue"
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
        
    }else{
        if(erros.includes(numero)){
            alert("Você ja apostou esse numero. Tente outro...")
        }else{
            erros.push(numero)
            const numErros = erros.length
            const numChance = chance - numErros
            respErro.innerText = `${numErros} (${erros.join(", ")})`
            if(numChance == 0){
                alert("Acabaram suas chances. ")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Gamer Over!!\nNumero Sorteado: ${sorteado}`
                respDica.style.color = "red"
            }else{
                const dica = numero < sorteado ? "Maior" : "Menor"
                respDica.innerText = `Dica: tente um numero ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus() 

})

frm.btNovo.addEventListener("click", () => {
    location.reload()
})