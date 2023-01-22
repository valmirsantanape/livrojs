let pacientes = ["ana", "paulo", "joao", "rodrigo"]

const [a, b] = pacientes

console.log(a)
console.log(b)

const [atender, proximo, ... outros] = pacientes
console.log("Atender: ", atender)
console.log("Proximo: ", proximo)
console.log("Fila de espera: ", outros.join(" | "))

console.log("**".repeat(30))

pacientes = ["valmir", ...pacientes,]
const [atender2, proximo2, ... outros2] = pacientes
console.log("Atender: ", atender2)
console.log("Proximo: ", proximo2)
console.log("Fila de espera: ", outros2.join(" | "))

console.log("**".repeat(30))

pacientes = [...pacientes, "marcos"]
const [atender3, proximo3, ... outros3] = pacientes
console.log("Atender: ", atender3)
console.log("Proximo: ", proximo3)
console.log("Fila de espera: ", outros3.join(" | "))

console.log("**".repeat(30))
console.log(pacientes)

console.log("**".repeat(30))
console.log("Operador Spread vs metodo slice")

const pacientes2 = [...pacientes]
const pacientes3 = pacientes.slice()

console.log("pacientes 2/spread: ", pacientes2)
console.log("pacientes 3:/slice ", pacientes3)