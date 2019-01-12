function boa_noticia(nota){
  if(nota >= 7){
    console.log('Aprovado com ' + nota )
  }
}

boa_noticia(8.1)
boa_noticia(6.1)

function se_verdade(valor){
  if(valor){
    console.log('É verdade...' + valor)
  }
}

se_verdade()
se_verdade(null)
se_verdade(undefined)
se_verdade(NaN)
se_verdade('')
se_verdade(0)
se_verdade(-1)
se_verdade(' ')
se_verdade('?')
se_verdade([])
se_verdade([1, 2])
se_verdade({})
