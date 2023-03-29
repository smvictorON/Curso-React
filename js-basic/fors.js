const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//for
for(c = 0; c < numeros.length ; c++){
  console.log(numeros[c])
}

//for of
for(let valor of numeros){
  console.log(valor)
}

//for in
for(let valor in numeros){
  console.log(valor)
}

//forEach
numeros.forEach(valor => console.log(valor))