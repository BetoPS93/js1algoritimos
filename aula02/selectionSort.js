const livros = require("../aula01/listalivros");
const menorValor = require("../aula01/ordenacao");

console.log(livros);

for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);
