/* Tabela Verdade:
 *
 * V e V -> V
 * V e F -> F
 * F e ? -> F (? = qualquer coisa)
 *
 * V ou ? -> V
 * F ou V -> V
 * F ou F -> F
 *
 * V xor V -> F
 * V xor F -> V
 * F xor V -> V
 * F xor F -> F
 *
 * !V -> F
 * !F -> V
 *
 * */

function compras(trabalho1, trabalho2){
  const comprar_sorvete = trabalho1 || trabalho2
  const comprar_Tv50 = trabalho1 && trabalho2
  // const comprar_Tv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprar_Tv32 = trabalho1 != trabalho2
  const manter_saudavel = !comprar_sorvete // operador unário

  return { comprar_sorvete, comprar_Tv50, comprar_Tv32, manter_saudavel }
}

console.log(compras(true, true))
console.log()
console.log(compras(true, false))
console.log()
console.log(compras(false, true))
console.log()
console.log(compras(false, false))
