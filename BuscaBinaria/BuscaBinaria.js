let tam = [2, 3, 5, 6, 7 ,8 ,10]
let chave = 7

function BuscaBinaria(chave, tam){
  
  let esq = -1
  let dir = tam.length
  
  while(esq < dir-1){
    let meio = Math.floor((esq + dir) / 2)
     
      if(tam[meio] === chave){
        return tam[meio]
        
      }else if(tam[meio] < chave){
        esq = meio
        
      }else{
        dir = meio
        
      }
    }
  return tam[dir]
}
console.log(BuscaBinaria(chave, tam))