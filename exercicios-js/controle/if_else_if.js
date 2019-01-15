Number.prototype.entre = function(inicio, fim){
  return this >= inicio && this <= fim
}

const resultado = function(nota){
  if(nota.entre(9, 10)){
    console.log('Quadro de Honra')
  }
  else if(nota.entre(7, 8.99)){
    console.log('Aprovado')
  }
  else if(nota.entre(4, 6.99)){
    console.log('Recuperação')
  }
  else if(nota.entre(0, 3.99)){
    console.log('Reprovado')
  }
  else{
    console.log('Nota inválida')
  }
}

resultado(10)
resultado(8.9)
resultado(6.55)
resultado(2.3)
resultado(-1)
resultado(11)
