function esperaAiPromise(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string'){
        reject(new Error("Deu ruim!"))
        return
      }

      resolve(`Success ${msg}`)
      return
    }, tempo)
  })
}

//THEN/CATCH
// esperaAiPromise('Promise1', 1000)
// .then(res => {
//   console.log(res)
//   return esperaAiPromise('Promise2', 1000)
// })
// .then(res => {
//   console.log(res)
//   return esperaAiPromise('Promise3', 1000)
// })
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err)
// })

//ASYNC/AWAIT - TRY/CATCH
const executaTudo = async () => {
  try {
    console.log(await esperaAiPromise('Async1', 1000))
    console.log(await esperaAiPromise('Async2', 1000))
    console.log(await esperaAiPromise('Async3', 1000))
  }catch(e){
    console.log(e)
  }
}
executaTudo()