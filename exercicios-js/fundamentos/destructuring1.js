// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const {nome, idade} = pessoa
console.log(nome, idade)
console.log(pessoa) 

const {nome: n, idade: i} = pessoa
console.log(n, i)
console.log(pessoa)

const {sobrenome, bem_humorada = true} = pessoa
console.log(sobrenome, bem_humorada)
console.log(pessoa)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
console.log(pessoa)
