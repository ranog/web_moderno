// Função SEM retorno
function soma_SEM_retorno(a, b){
  console.log(a + b)
}

soma_SEM_retorno(2, 3)
soma_SEM_retorno(2)
soma_SEM_retorno(2, 10, 6, 7, 8)
soma_SEM_retorno()

// Função com retorno
function soma_COM_retorno(a, b = 1){
  return a + b
}

console.log(soma_COM_retorno(2, 3))
console.log(soma_COM_retorno(2))
console.log(soma_COM_retorno())
