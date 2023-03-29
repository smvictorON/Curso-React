//funções declaradas de forma normal podem ser chamadas em qualquer linha
//isso se chama function hoisting
normal()
function normal(){
  console.log('normal')
}

//desse modo podemos passar nossa função como um parametro por exemplo
const varFn = function(){
  console.log('varFn')
}

function executaFn(fn){
  fn()
}
executaFn(varFn)

//arrow function introduziza com o ES6
const arrow = () => {
  console.log('arrow')
}
arrow()

//funcao como um método de um objeto
const obj = {
  funcaoObjOld: function() {
    console.log('função método antigo')
  },
  funcaoObjNew() {
    console.log('função método novo')
  }
}

obj.funcaoObjOld()
obj.funcaoObjNew()