const livros = require("../aula01/listalivros");
const menorValor = require("../aula01/ordenacao");

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  let livroAtual = livros[indice];
  let livroMenorPreco = livros[menor];

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;
});

console.log(livros);
