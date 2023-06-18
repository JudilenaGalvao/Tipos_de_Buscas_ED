let dados = [3,5,7,9,13]
let chave = 5

function BuscaSequencial(chave,dados){
    for(let i = 0; i < dados.length; i++){
        if(chave === dados[i]){
            return dados[i]
        }
    }
    return -1
}
console.log(BuscaSequencial(chave,dados))