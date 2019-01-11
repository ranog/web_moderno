function tratar_erro(erro){
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}


function imprimir_gritado(obj){
  try{
    console.log(obj.name.toUpperCase() + '!!!')
  }
  catch(e){
    tratar_erro(e)
  }
  finally{
    console.log('FINAL')
  }
}


const obj = { nome: 'Roberto' }
imprimir_gritado(obj)
