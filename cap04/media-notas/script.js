const frm = document.querySelector('form')
const resultadoMedia = document.querySelector('h3')
const situacao = document.querySelector('.situacao')

frm.addEventListener('submit', (e) => {
    const nome = frm.InomeAluno.value
    const nota1 = Number(frm.Inota1.value)
    const nota2 = Number(frm.Inota2.value)

    const media = (nota1 + nota2) / 2

    resultadoMedia.innerHTML = `
    <h1>Aluno: ${nome}</h1>
    <h3>Média: ${media}</h3>
    `
    
    if(media >= 7){
        situacao.style.color = 'blue'
        situacao.innerHTML = 'Parabens! Voce está aprovado!'
    }else{
        situacao.style.color = 'red'
        situacao.innerText = 'Infelizmente você não obteve a média minima para aprovação.'
    }

    e.preventDefault()
    
})