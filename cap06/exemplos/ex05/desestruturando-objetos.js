const carros = [{modelo: "sandero", preco: 46000}]
console.log(carros)
const carros2 = [{... carros[0], ano: 2020}]
console.log(carros2)

for(const carro of carros2) {
    const {modelo,preco, ano} = carro
    console.log(`${modelo} ${ano} $${preco}`)
}