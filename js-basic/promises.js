// //callbacks
// function esperaAiCB(msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg)
//     if(cb) cb();
//   }, tempo)
// }

// //não é legal fazer isso, é chamado de callback hell
// esperaAiCB('Logou primeiro', 1000,() => {
//   esperaAiCB('Logou depois', 1000,() => {
//     console.log('Logou por ultimo')
//   })
// })

//Promises
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

//consigo encadear as promises e não preciso ter um catch para cada then
esperaAiPromise('Logou primeiro', 1000)
.then(res => {
  console.log(res);
  return esperaAiPromise('Logou depois', 1000)
})
.then(res => {
  console.log(res);
  return esperaAiPromise('Logou novamente', 1000)
})
.then(res => {
  console.log(res);
  return esperaAiPromise(1, 1000)
})
.then(res => {
  console.log(res)
  return `${res} de novo`
})
.then(res => {
  console.log(res)
})
.then(res => {
  console.log("Logou por ultimo")
})
.catch(e => {
  console.log(e)
})
