(funciton(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log( 'O array em formato de string é:' );
   
    var arr =[1,2,3,4,5];
    arr.toString()
    "1,2,3,4,5"
    console.log([1,2,3,4,5].toString() );
    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
   
    var arrSul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
    var arrSudeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro','São Paulo'];
    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log( '\nAlguns Estados do Brasil:' );
  
    var brasil = arrSudeste.concat(arrSul);
    console.log(brasil);
    ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo", "Paraná", "Santa Catarina", "Rio Grande do Sul"]
    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    console.log( '\nMais estados adicionados:' );
    brasil.unshift('Amazonas', 'Roraima','Amapa');
    console.log(brasil);
    ["Amazonas", "Roraima", "Amapa", "Paraná", "Santa Catarina", "Rio Grande do Sul", "Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]
    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log( '\nEstado removido:' );
    brasil.shift();
    console.log(brasil);
    ["Roraima", "Amapa", "Paraná", "Santa Catarina", "Rio Grande do Sul", "Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]
    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    var newSul = brasil.slice(2,5);// slice nao remove os itens de brasil
    
    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:' );
    console.log(newSul);
    ["Paraná", "Santa Catarina", "Rio Grande do Sul"]
    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    console.log(brasil);
    ["Roraima", "Amapa", "Paraná", "Santa Catarina", "Rio Grande do Sul", "Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]
    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = [
    'Maranhão', 
    'Piauí', 
    'Ceará', 
    'Rio Grande do Norte', 
    'Pernambuco', 
    'Paraíba', 
    'Sergipe',
    'Alagoas',
    'Bahia'
    ];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:' );
    console.log(nordeste);

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    var newSuldeste = brasil.splice(5);

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    brasil = brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:' );
    console.log(newSuldeste);
    ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"]

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:' );
    console.log(brasil);
    ["Roraima", "Amapa", "Paraná", "Santa Catarina", "Rio Grande do Sul", "Alagoas", "Bahia", "Ceará", "Maranhão", "Paraíba", "Pernambuco", "Piauí", "Rio Grande do Norte", "Sergipe"]
    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
     var = newBrasil = [];
        brasil.forEach(function(item,index){
	        newBrasil.push({
			    id: index,
			    estado: item

	        });

        });

    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:' );
    console.log(newBrasil);
    {id: 0, estado: "Roraima"}
    {id: 1, estado: "Amapa"}
    {id: 2, estado: "Paraná"}
    {id: 3, estado: "Santa Catarina"}
    {id: 4, estado: "Rio Grande do Sul"}
    {id: 5, estado: "Alagoas"}
    {id: 6, estado: "Bahia"}
    {id: 7, estado: "Ceará"}
    {id: 8, estado: "Maranhão"}
    {id: 9, estado: "Paraíba"}
    {id: 10, estado: "Pernambuco"}
    {id: 11, estado: "Piauí"}
    {id: 12, estado: "Rio Grande do Norte"}
    {id: 13, estado: "Sergipe"}
    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    var every = brasil.every(function(item){ //every só retorna true se todos for verdadeiros
	
      return item.length > 7 ;
    });
    console.log(
    every 
      ? 'Sim, todos os estados tem mais de 7 letras!'
      : 'Nem todos os estados tem mais de 7 letras!'
    );

    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log( '\nCeará está incluído em `brasil`?' );
    var some = brasil.some(function(item){ //some basta apenas que 1 item seja verdadeiro para q ele retorne true
	
	  return item === 'Ceará';
    });
    console.log(
      some
        ? 'Ceará está incluído!'
        : 'Ceará não foi incluído :('
      );
     Ceará está incluído!
     // SE EU QUERO VERIFICAR SE TODOS OS ITENS BATEM COM A EXPRESSÃO POSSO USAR O : EVERY

    // SE EU QUERO VERIFICAR SE PELO MENOS 1 ITEM BATA COM A EXPRESSÃO POSSO USAR O : SOME

    // SE EU QUERO MAPEAR TODOS OS ITENS DE UM ARRAY E MODIFICAR ELES DE ALGUMAR FORMA POSSO USAR O : MAP

    // SE EU QUERO FILTRAR POSSO USAR O : FILTER

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    var map = newBrasil.map(function(item,index){
	
      return {
        id: item.id +1,
        estado: item.estado + ' pertencem ao Brasil'
        };
    });
    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:' );
    console.log(map);
    {id: 1, estado: "Roraima pertencem ao Brasil"}
    {id: 2, estado: "Amapa pertencem ao Brasil"}
    {id: 3, estado: "Paraná pertencem ao Brasil"}
    {id: 4, estado: "Santa Catarina pertencem ao Brasil"}
    {id: 5, estado: "Rio Grande do Sul pertencem ao Brasil"}
    {id: 6, estado: "Alagoas pertencem ao Brasil"}
    {id: 7, estado: "Bahia pertencem ao Brasil"}
    {id: 8, estado: "Ceará pertencem ao Brasil"}
    {id: 9, estado: "Maranhão pertencem ao Brasil"}
    {id: 10, estado: "Paraíba pertencem ao Brasil"}
    {id: 11, estado: "Pernambuco pertencem ao Brasil"}
    {id: 12, estado: "Piauí pertencem ao Brasil"}
    {id: 13, estado: "Rio Grande do Norte pertencem ao Brasil"}
    {id: 14, estado: "Sergipe pertencem ao Brasil"}
    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    var filter = map.filter(function(item){  //filter vai retornar o item para a variavel filter se o q está no retorno for verdade
	
      return item.id % 2 === 0;

    });

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:' );
    console.log(filter);
    {id: 2, estado: "Amapa pertencem ao Brasil"}
    {id: 4, estado: "Santa Catarina pertencem ao Brasil"}
    {id: 6, estado: "Alagoas pertencem ao Brasil"}
    {id: 8, estado: "Ceará pertencem ao Brasil"}
    {id: 10, estado: "Paraíba pertencem ao Brasil"}
    {id: 12, estado: "Piauí pertencem ao Brasil"}
    {id: 14, estado: "Sergipe pertencem ao Brasil"}
});
