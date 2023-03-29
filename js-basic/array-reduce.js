const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
  { nome: 'Victor', idade: 28 },
  { nome: 'Lamara', idade: 34 },
  { nome: 'Laura', idade: 50 },
  { nome: 'Victoria', idade: 26 },
]

//o primeiro parametro do reduce é um acumulador, o restante é igual
//ao map e filter, podemos passar o segundo parametro para o reduce
//que é o valor inicial do acumulador, se não é informado o valor
//inicial o primeiro valor do array será o valor inicial, e o valor
//sera o segundo
const total = numeros.reduce(function(acumulador, valor) {
  return acumulador + valor
}, 0)
console.log(total)

//usando como filter
const pares = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])
console.log(pares)

//usando como map
const dobro = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor*2)
  return acumulador
}, [])
console.log(dobro)

//usando com objetos

const maisVelho = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade)
    return acumulador

  return valor
})
console.log(maisVelho)