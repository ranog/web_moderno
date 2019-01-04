const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // índeces fora do tamanho da string JS não gera um erro, retorna "vazio"
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

// exemplos de regex:
console.log(escola.replace(/\d/, 'e'))      // substituir números
console.log(escola.replace(/\w/, 'e'))      // substituir o 1° caracter
console.log(escola.replace(/\w/g, 'e'))     // substituir todos os caracter (flag global = g)
console.log('Ana, Maria, Pedro'.split(/,/)) // converter para array

console.log('Ana, Maria, Pedro'.split(','))
