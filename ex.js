
class Caneta {
constructor(tamanho,nome,cor) {
this._tamanho = tamanho
this._nome = nome
this._cor = cor
}

get tamanho() {
return this._tamanho
}

get nome() {
return this._nome

}

get cor(){
return this._cor
}

set nome(novoNome) {
    this._nome = novoNome
}

outroMetodo(coisas){
  return coisas
}


}

const bic = new Caneta('Bic', 'MultiColor')
bic.tamanho = 'medio'
console.log(bic.outroMetodo('Escreve em 4 cores'))