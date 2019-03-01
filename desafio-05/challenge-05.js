/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var brasil = ["fabio",1,2,"mauadie",5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function minhaFuncao(array){
return array;
};
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log (minhaFuncao(brasil)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function minhaFuncao2(array,indice){
  return array[ indice ];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
//var meuaArray = ["fabio", true, false, "mauadie",5];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(minhaFuncao2(meuArray,0));
console.log(minhaFuncao2(meuArray,1));
console.log(minhaFuncao2(meuArray,2));
console.log(minhaFuncao2(meuArray,3));
console.log(minhaFuncao2(meuArray,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book (nomeLivro){
var livros = {livro1:{quantidadePaginas: 50, autor:"gelson", editora:"brasil"},
              livro2:{quantidadePaginas: 90, autor:"julinda", editora:"argentina"},
               livro3:{quantidadePaginas: 60, autor:"fabiana", editora:"portugal"}
             };          
  return livros[nomeLivro];
};
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
//livro1: {quantidadePaginas: 50, autor: "gelson", editora: "brasil"}
//livro2: {quantidadePaginas: 90, autor: "julinda", editora: "argentina"}
//livro3: {quantidadePaginas: 60, autor: "fabiana", editora: "portugal"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("o livro 1 tem " + book ("livro1").quantidadePaginas + " paginas");
//o livro 1 tem 90 paginas

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro 3  é " + book ("livro3").autor);
//O autor do livro 3  é fabiana
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("o livro 2  foi publicado pela editora "  + book ("livro2").editora);
//o livro 2  foi publicado pela editora argentina
