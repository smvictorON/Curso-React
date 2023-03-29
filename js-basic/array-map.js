const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
  { nome: 'Victor', idade: 28 },
  { nome: 'Lamara', idade: 34 },
  { nome: 'Laura', idade: 50 },
  { nome: 'Victoria', idade: 26 },
]

//valem aqui as regras do filter tbm, ao passar uma função para mapear
//ela recebe valor, indice e o array completo

//porem diferente do filter o map pode modificar os valores tambem além
//de filtar

const numerosDobrados = numeros.map(numero => numero*2)
console.log(numeros)
console.log(numerosDobrados)

//quando estamos iterando com objectos modificamos os itens do obj
//original, para evitar isso basta desestrutura cada item em um
//novo objeto
const pessoasComIndice = pessoas.map((pessoa, indice) => {
  const novaPessoa = {...pessoa}
  novaPessoa.id = indice
  return novaPessoa
})
console.log(pessoas)
console.log(pessoasComIndice)
