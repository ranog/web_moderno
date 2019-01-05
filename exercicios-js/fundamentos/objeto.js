const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

console.log()

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    texto: 1,
    obj: {
      texto: 2
    }
  }
}

/* 
 * JSON, um acrônimo de JavaScript Object Notation, é um formato compacto, 
 * de padrão aberto independente, de troca de dados simples e rápida entre 
 * sistemas...
 *
 * JSON.
 * Disponível em: https://pt.wikipedia.org/wiki/JSON. 
 * Acesso em: 05 jan. 2019. 
 */
'{ "nome" : "Camisa Polo", "preco": 79.90}'

console.log(prod2)
