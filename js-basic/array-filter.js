const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
  { nome: 'Victor', idade: 28 },
  { nome: 'Lamara', idade: 34 },
  { nome: 'Laura', idade: 50 },
  { nome: 'Victoria', idade: 26 },
]

//a função filtro deve passar true se quiser retornar o valor para um
//novo array ou false se quiser excluir do filtro, ou a propria função
//que checa isso
function callbackFilter(valor, indice, arr){
  // console.log(valor, indice)
  // console.log(arr)
  return valor > 10
}

//ao usar uma função no filter mesmo sem passar nada,
//na função é recebido o valor o indice e tambem o array completo
const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

//maneira curta
const numerosFiltradosShort = numeros.filter(n => n > 10)
console.log(numerosFiltradosShort)

