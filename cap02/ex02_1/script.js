//referencia ao form e ao elemento h3
frm = document.querySelector('form')
resp = document.querySelector('h3')


//Ouvinte de um evento, acionado quando o botao submit for clicado
frm.addEventListener('submit',(e) => {
    const nome = frm.inNome.value;
    

    resp.innerText = `Olá ${nome}`
    
    //Impedir o envio padrão dos dados do formulario ao acionar 'submit'
    e.preventDefault();
    
})