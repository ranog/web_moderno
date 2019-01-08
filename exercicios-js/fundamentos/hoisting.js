console.log('a =', a)
var a = 2
console.log('a =', a)

function teste(){
  console.log('b =', b)
  var b = 3
  console.log('b =', b)
}

teste()

// let não sofre o hoisting
console.log('c =', c)
let c = 4
console.log('c =', c)
