const carros = []
carros.push({modelo: "sandero", preco: 46000}, {modelo: "palio" , preco: 39500}, {modelo: "crossfox", preco: 60000})

const modelo = "celta"
const preco = 26000

//Quando o nome da variável é igual ao nome do atributo pode-se omitir a atribuição ao adicionar um novo objeto
carros.push({modelo, preco})


for(const element of carros){
    console.log(element.modelo,element.preco)
}

carros.forEach((carro, i) => {
    console.log("desestruturação do objeto")
    const {modelo, preco} = carro
    console.log(`${modelo}, ${preco}`)
})

