/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

(function(win,doc){
    'user strict';


//vai pegar input visor do html
var $visor = doc.querySelector('[data-js="visor"]'); 
//vai pegar todos os numeros de 0 a 9 do html
var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
// vai pegar o operador CE reponsavel por limpar a tela 
var $buttonCE = doc.querySelector('[data-id="button-operation-limpar"]');
var $operacoes = doc.querySelectorAll('[data-js="button-operation"]');
var $buttonIgual = doc.querySelector('[data-js="button-resultado"]');


function initialize(){
    initiEvents();

    
}
function initiEvents(){//vai iniciar qualquer tipo de evento q a gente precisar
//vai pecorrer todos os botoes de 0 a 9 e vai dar um evento de click e chamar a funcao mostra na tela 
Array.prototype.forEach.call($buttonsNumbers,function(button){
    //vai dar um evento de click e vai chamar a funcao mostrar no visor
        button.addEventListener('click',mostrarNoVisor,false);
    });
    //vai pecorrer todos os botoes de operaçoes e vai dar um evento de click e chamar a funcao operacoesNoVisor 
    Array.prototype.forEach.call($operacoes,function(button){
        button.addEventListener('click',OperacoesNoVisor,false);
    });
    /////////////////////////////////////////////////////////////////////////////////////
    
    
    //vai dar um evento de click no botao CE e vai chamar a funcao limparVisor
    $buttonCE.addEventListener('click',limparVisor,false);
    ///////////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////////////////////////////////
    //vai dar um evento de click no botao = e vai chamar a funcao limparVisor
$buttonIgual.addEventListener('click',resultadoNoVisor,false);
     
}




    //funcao que faz mostrar os numeros clicados no visor
    function mostrarNoVisor(event){
       $visor.value += this.value; 
       /* visor.value vai pegar tudo que tem no visor e vai concatenar com  this.value que representa o botao que está sendo clicado e vai pegar o valor*/
    }
    //////////////////////////////////////////////////////////////////////////////////
    //funcao faz com que só seja permitido aparecer apenas 1 operador no visor 
    function OperacoesNoVisor(){
        $visor.value = removeUltimoItem($visor.value);//vai remover o operador nao deixando colocar 2
  
        $visor.value += this.value;
      
    }

    function removeUltimoItem(string){
        if(verificarUltimoDigito(string)) {//vai verificar se o ultimo digito é alguma operacao e passa as operacoes como parametro

            //caso o ultimo digito seja operador vai pegar o visor e retirar o ultimo item com slice
            return string.slice(0,-1);
            }
            return string;
    }
    //funcao que faz a verificação do ultimo digito
    function verificarUltimoDigito(number){
        var operation = obeterOperacoes();//se for alguns desses simbolos nao pode aparecer outro seguido
        var lastItem = number.split('').pop();
         return operation.some(function(operator){//some passa por todos os item do array e verificar se tem pelo menos 1 deles
            return operator === lastItem;
         }); 
    }
    function obeterOperacoes(){
      
        return Array.prototype.map.call($operacoes, function(button){
            return button.value;
        });
    }
    ///////////////////////////////////////////////////////////////////////////////////
    //funcao que vai ser chamada quando clicar no botao CE
    function limparVisor(){
        $visor.value = 0; //vai pegar o visor e colocar o valor 0
    };
  


function resultadoNoVisor(){
    $visor.value= removeUltimoItem($visor.value);//está chamando a funcao q elimina o operador caso ele seja o ultimo digito antes de dar o resultado
    var todosValores = $visor.value.match(obterRegexOperacao());//vai pegar todos os valores seguido de um operador
        $visor.value = todosValores.reduce(calculaTodosValores);
}
function obterRegexOperacao(){
    return new RegExp('\\d+[' + obeterOperacoes().join('') + ']?','g');
}

function calculaTodosValores(accumulated,atual) {
        var primeiroValor = accumulated.slice(0,-1);
        var operador = accumulated.split('').pop();
        var segundoValor = removeUltimoItem(atual);
        var proximOperador = verificarUltimoDigito(atual) ? atual.split('').pop():''; 
        return escolhaOperador(operador,primeiroValor,segundoValor) + proximOperador;//vai chamar os calculos
}
function escolhaOperador(operador,primeiroValor,segundoValor){
    switch(operador){
        case('+'):
        return Number(primeiroValor)  + Number(segundoValor);
        case('-'):
        return Number(primeiroValor)  - Number(segundoValor);
        case ('x'):
            return Number(primeiroValor)  * Number(segundoValor);
        case ('÷'):
            return Number(primeiroValor)  / Number(segundoValor);
    }
}



initialize();

})(window,document);
