
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
  <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index-23</title>
</head>
<body>
    <h1 style="color: red" align="center">calculadora</h1>
    <br><br>
    <!--esse readonly desativa o campo deixando apenas como visor nao podendo escrever-->
    <input type="text" value="0" readonly data-js="visor">
    <br><br>
    <div class=" buttons-numbers">
    <button data-js="button-number" value="0">0</button>
    <button data-js="button-number" value="1">1</button>
    <button data-js="button-number" value="2">2</button>
    <button data-js="button-number" value="3">3</button>
    <button data-js="button-number" value="4">4</button>
    <button data-js="button-number" value="5">5</button>
    <button data-js="button-number" value="6">6</button>
    <button data-js="button-number" value="7">7</button>
    <button data-js="button-number" value="8">8</button>
    <button data-js="button-number" value="9">9</button>
</div>
<br><br>
<div class="operation">
<button data-js="button-operation" data-id="button-operation-somar" value="+">+</button>
<button data-js="button-operation" data-id="button-operation-subtrair"value="-">-</button>
<button data-js="button-operation" data-id="button-operation-multiplicar"value="x">x</button>
<button data-js="button-operation" data-id="button-operation-dividir"value="÷">÷</button>
<button data-js="button-resultado" data-id="button-operation-resultado" value="=">=</button>
<button data-js="button-limpar" data-id="button-operation-limpar" value="CE">CE</button>
</div>
<script src="js/calculadora.js"></script>
    <script src="js/challenge-23.js"></script>
</body>
</html>
  
  ..............................JAVASCRIPT......................................................
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

        //////////////////////////////////////////////////////////////////////////////////////
        //vai adicionar um evento de click nos botoes e mostrar ele no visor
        //vai pecorrer todos os botoes de 0 a 9 e vai dar um evento de click e chamar a funcao mostra na tela 
        Array.prototype.forEach.call($buttonsNumbers,function(button){

        //vai dar um evento de click e vai chamar a funcao mostrar no visor
            button.addEventListener('click',mostrarNoVisor,false);
        });

        //vai pecorrer todos os botoes de operaçoes e vai dar um evento de click e chamar a funcao operacoesNoVisor 
        Array.prototype.forEach.call($operacoes,function(button){
            button.addEventListener('click',OperacoesNoVisor,false);
        });
        ////////////////////////////////////////////////////////////////////////////////////////


        //vai dar um evento de click no botao CE e vai chamar a funcao limparVisor
        $buttonCE.addEventListener('click',limparVisor,false);
        ///////////////////////////////////////////////////////////////////////////////////////

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

            function removeUltimoItem(number){
                if(verificarUltimoDigito(number)) {//vai verificar se o ultimo digito é alguma operacao e passa as operacoes como parametro

                    //caso o ultimo digito seja operador vai pegar o visor e retirar o ultimo item com slice
                    return number.slice(0,-1);
                    }
                    return number;
            }
            //funcao que faz a verificação do ultimo digito
            function verificarUltimoDigito(number){
                var operation = ['+','-','x','÷'];//se for alguns desses simbolos nao pode aparecer outro seguido
                var lastItem = number.split('').pop();
                 return operation.some(function(operator){//some passa por todos os item do array e verificar se tem pelo menos 1 deles
                    return operator === lastItem;
                 })

            }
            ///////////////////////////////////////////////////////////////////////////////////
            //funcao que vai ser chamada quando clicar no botao CE
            function limparVisor(){
                $visor.value = 0; //vai pegar o visor e colocar o valor 0
            };
           ////////////////////////////////////////////////////////////////////////////////////
            //vai dar um evento de click no botao = e vai chamar a funcao limparVisor
        $buttonIgual.addEventListener('click',resultadoNoVisor,false);


        function resultadoNoVisor(){
            $visor.value= removeUltimoItem($visor.value);//está chamando a funcao q elimina o operador caso ele seja o ultimo digito antes de dar o resultado
            var todosValores = $visor.value.match(/\d+[+-x÷]?/g);//vai pegar todos os valores seguido de um operador
                $visor.value = todosValores.reduce(function(accumulated,atual){
                var primeiroValor = accumulated.slice(0,-1);
                var operador = accumulated.split('').pop();
                var segundoValor = removeUltimoItem(atual);
                var proximOperador = verificarUltimoDigito(atual) ? atual.split('').pop():'';
                switch(operador){
                    case('+'):
                    return (Number(primeiroValor)  + Number(segundoValor)) + proximOperador;
                    case('-'):
                    return(Number(primeiroValor)  - Number(segundoValor)) + proximOperador;
                    case ('x'):
                        return (Number(primeiroValor)  * Number(segundoValor)) + proximOperador;
                    case ('÷'):
                        return (Number(primeiroValor)  / Number(segundoValor)) + proximOperador;
                }
            });


        }
})(window,document);
