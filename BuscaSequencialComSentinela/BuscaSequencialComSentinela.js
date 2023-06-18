let dados = [3,9,13,20,40,41]
let chave = 1

function BuscaSenqComSentinela(chave, dados){
  
  let tam = dados.length
  dados[tam] = chave
  
  for(let i = 0; i != dados[i]; i++){
    if(dados[i] === chave && i != tam){
      return dados[i]
    }
  }
  return -1
}
console.log(BuscaSenqComSentinela(chave, dados))