function esperaAiPromise(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string'){
      reject(new Error("Deu ruim!"))
      return //return aqui para finalizar senão ele segue mesmo após o reject
    }

    setTimeout(() => {
      resolve(`Success ${msg}`)
      return //return aqui é redundante pois nao tem mais código após
    }, tempo)
  })
}

// const promises = [
//   'Primeiro valor',
//   esperaAiPromise('Promise 1', 2000),
//   esperaAiPromise('Promise 2', 1000),
//   esperaAiPromise('Promise 3', 3000),
//   // esperaAiPromise(1, 3000),
//   'Segundo valor'
// ]

//promise.all vai resolver todas as promises em paralelo e vai
//retornar somente após todas estarem resolvidas
//se acontecer erro em alguma delas, todas serão rejeitadas
// Promise.all(promises)
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })

// const promises2 = [
//   esperaAiPromise('Promise 1', 2000),
//   esperaAiPromise('Promise 2', 1000),
//   esperaAiPromise('Promise 3', 3000),
// ]

//promise.race retorna o primeiro valor a ser retornado sendo
//ele resolvido ou rejeitado
// Promise.race(promises2)
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })

//exemplo e devolver uma promise resolvida/rejeitada, no caso
//dessa função os tres retornos são promises porem se ja tiver
//a pagina em cache ele ja retorna ela, se tiver erro tbm ja rejeita
function baixaPagina(erro) {
  const emCache = true

  if(erro)
    return Promise.reject("Pagina com erro")

  if(emCache)
    return Promise.resolve("Pagina em cache")
  else
    return esperaAiPromise("Pagina baixada", 10000)
}

baixaPagina(false).then(res => console.log(res)).catch(err => console.log('Err', err))
baixaPagina(true).then(res => console.log(res)).catch(err => console.log('Err', err))