// Exemplos realizados no browser

const a = {name: 'texto'}
console.log(a)

const b = a // atribuição por referência
b.name = 'Opa'

console.log(a)

let c = 3
let d = c // atribuição por valor 

d++

console.log(c, d)

//----------------------------------------------------------------------

let valor // não inicializada
console.log(valor)
// console.log(valor2) - variável não foi declarada - Erro!

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) - Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined /* evitar atribuir undefined(não deleta o 
atributo preço)*/
console.log(!!produto.preco)
console.log(produto)
// delete produto.preco - para deletar o atributo preço

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
