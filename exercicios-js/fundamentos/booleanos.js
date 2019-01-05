let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// sempre priorizar constantes ao invés de variáveis

isAtivo = 1
console.log(!!isAtivo)

console.log('\nos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nos falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\npara finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'texto' || 123)) // retorna o 1° valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'João'
console.log(nome || 'Desconhecido')
