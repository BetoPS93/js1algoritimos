//const precosLivros = [25, 15, 30, 50, 45, 20];

const livros = require("./listalivros");

function menorValor(arrayProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++) {
    if (arrayProdutos[atual].preco <= arrayProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

//console.log(
//  `O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}.`
//);

module.exports = menorValor;
