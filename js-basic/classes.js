//método 1 js ja faz o bind do método falar com o prototype
class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(this.nome, 'está falando')
  }
}

//método 2 necessita fazer o bind do prototype
function Pessoa2 (nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
  console.log(this.nome, 'está falando')
}

const p1 = new Pessoa("Victor", "Mussio")
const p2 = new Pessoa2("Victor", "Mussio")

console.log(p1)
console.log(p2)

p1.falar()
p2.falar()