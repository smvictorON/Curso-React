class ControleRemoto {
  constructor(tv){
    this.tv = tv
    this.volume = 0
  }

  //método de instancia
  //é referente a instancia ou seja no caso desse exemplo é
  //referente ao c1
  aumentarVolume() {
    this.volume += 2
  }

  //método estático
  //é uma classe se pode ser executada desvinculado a uma instancia
  //como o Math.random()
  static marcas(valor) {
    return ["LG", "Samsung", "Sony"]
  }
}

const c1 = new ControleRemoto('LG')

c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()

console.log(c1)

const marcas = ControleRemoto.marcas()

console.log(marcas)