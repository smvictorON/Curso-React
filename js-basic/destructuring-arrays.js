let a = "A"
let b = "B"
let c = "C"

console.log(a,b,c)

let [d,e,f] = [1,2,3]

console.log(d,e,f)

let [g,h,i] = [f,e,d]

console.log(g,h,i)

let arr1= [d,e,f]
let arr2 = [4,5,6]

console.log(arr1)
console.log(arr2)

let arr3 = [...arr1, ...arr2]

console.log(arr3)

let [item1, item2, , item4, ...resto] = arr3

console.log(item1, item2, item4, resto)

let arr4 = [[1,2,3],[4,5,6],[7,8,9]]
let [,[,,item6]] = arr4

console.log(item6)
