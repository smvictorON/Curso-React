let pessoa = {
  nome: 'Victor',
  sobrenome: 'Mussio',
  idade: 28,
  sexo: 'Masculino',
  endereco : {
    cidade: 'Tupã',
    cep: 17607010,
  }
}

let { nome } = pessoa

console.log(nome)

let { idade: age } = pessoa

console.log(age)

let { sexo = "Não informado" } = pessoa
let { sexo2 = "Não informado" } = pessoa

console.log(sexo, sexo2)

let { endereco: { cidade } } = pessoa

console.log(cidade)

let {sobrenome, ...resto} = pessoa

console.log(sobrenome, resto)