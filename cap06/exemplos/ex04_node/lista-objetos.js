const prompt = require("prompt-sync");

// const carros = []

// carros.push({modelo: "crossfox", ano:2009})
// carros.push({modelo: "punto", "ano":"2013"})
// carros.push({"modelo": "polo", "ano":"2020"})

// for(const carro of carros){
//     console.log(`${carro.modelo}: ${carro.ano}`)
// }

const letras  = ["A", "B", "C", "D"]

console.log(letras)

const letras2 = letras.slice(-2)
console.log(letras2)

const letras3 = letras.slice(0, -1)
console.log(letras3)


const retira = letras.splice(0, 2)
console.log(`splice(1)`, retira)