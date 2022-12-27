const prompt = require('prompt-sync')()

const ano = Number(prompt('Informe um ano: '))

if(ano < 1930){
    console.log(`A primeira Copa do Mundo aconteceu em 1930 \nPor tanto, no ano de ${ano} não houve copa.`)
}else if(ano == 1942 || ano == 1946){
    console.log(`No ano de ${ano} não houve copa do mundo por causa da segunda guerra mundial.`)
}
else if(ano % 4 == 2){
    console.log(`O ano ${ano} é ano de copa do mundo!`)
}else{
    console.log(`O ano ${ano} não é ano de copa do mundo!`)
}
