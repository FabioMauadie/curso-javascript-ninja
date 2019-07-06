  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  
  */

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="desafio-cep.css" rel="stylesheet">
    <title>Desafio CEP</title>
</head>
<body>
<h1 style="color: brown", align="center">DESAFIO CEP</h1>
<br>
<br>
    <form data-js="form-cep" align="center">
        <div>
        <input data-js="input-cep" id="buscaCep"  type="text" size="35">
         <button data-js="submit" id="enviar" type="submit">Consultar CEP</button>
        </div>
    </form>
    <form align="center">
        <br>
        <div id = "status" style="color: green">
            <h2  data-js="status"></h2>
        </div>
        <br>
       <label> <b>LOGRADOURO:</b></label>
       
       &nbsp;<span data-js="logradouro"  id="Logradouro1"> </span>
        <br>
        <br>
        <label> <b>BAIRRO:</b></label>
        &nbsp;<span data-js="bairro"  id="bairro1"> </span>
        <br>
        <br>
        <label> <b>ESTADO:</b></label>
        &nbsp;<span data-js="estado"  id="estado1"> </span>
        <br>
        <br>
        <label> <b>CIDADE:</b></label>
        &nbsp;<span data-js="cidade"  id="cidade1"> </span>
        <br>
        <br>
        <label> <b>CEP:</b></label>
        &nbsp;<span data-js="cep"  id="cep1"> </span>
     
    </form>
    
    <script src="js/desafio-cep.js"></script>
</body>
</html>





(function(win, doc){

    'use strict';
    
    //funcao construtora
    function DOM(elements){
        this.element = this.getDOMElements(elements); 
    }
    //esse metodo vai selicionar todos elementos da tela
    DOM.prototype.getDOMElements = function getDOMElements(elements){
        return document.querySelectorAll(elements);
    
    };
    
    //criando o metodo on na lib DOM
    //o metodo vai receber um tipo de evento, que ao ser acionada vai chamar uma funcao
    //com forEach Ã© possivel pecorrer todos os elementos e add um evento a eles no caso o <a>
    DOM.prototype.on = function on(tipoEvento,callback){
    Array.prototype.forEach.call(this.element, function(element){
        element.addEventListener(tipoEvento,callback,false);
    });
    
    };
    //a partir daqui o metodo off passa a existe na lib DOM
    //com a funcao handleClick passada a baixo quando clicarmos no link ele vai dar acao apenas 1 vez e vai remover a acao do on
    DOM.prototype.off = function off(tipoEvento,callback){
        Array.prototype.forEach.call(this.element, function(element){
            element.removeEventListener(tipoEvento,callback,false);
        });
    
    };
    //a partir daqui o metodo get passa a existe na lib DOM
    DOM.prototype.get = function get(){
        return this.element;
    
    };
    
    DOM.prototype.forEach = function forEach(){
return Array.prototype.forEach.apply(this.element,arguments);
    };
var $a = new DOM('[data-js="link"]');
    $a.forEach(function(item){
    //fazendo .fisrtChild.nodeValue eu consigo trazer apenas o texto do link
         
    });
    
    // map ele vai passa por todos os itens do array e ele vai retornar o que a gente quiser criando um novo array que no caso Ã© o dataJs que vai buscar o valor de data-js
    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element,arguments);
            };
            var $a = new DOM('[data-js="link"]');
           
            // esse dataJs estamos criando um novo array
            var dataJs = $a.map(function(item){
                return item.getAttribute('data-js');   
            });
        

    
     DOM.prototype.filter = function filter(){
         return Array.prototype.filter.apply(this.element,arguments);
     };

     DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element,arguments);
    };
    var $a = new DOM('[data-js="link"]');
 
    // esse dataJs estamos criando um novo array
    var dataJs = $a.reduce(function(acumulado,item, index){
        return acumulado+ ' ' + item.getAttribute('data-js') + index;   
    },0); //esse 0 Ã© o valor inicial do acumulado


    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element,arguments);
    };

    
    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element,arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element,arguments);
    };

    DOM.prototype.isArray = function isArray(param){
        //vai mostra se Ã© um object Array
        return Object.prototype.toString.call(param) === '[object Array]';
    };
    //testando pra saber se um array
    var dom = new DOM();
 


    DOM.prototype.isObject = function isObject(param){
        //vai mostra se Ã© um object object
        return Object.prototype.toString.call(param) === '[object Object]';
    };
 

    DOM.prototype.isFunction = function isFunction(param){
        //vai mostra se Ã© um object function
        return Object.prototype.toString.call(param) === '[object Function]';
    };
    

    
    DOM.prototype.isNumber = function isNumber(param){
        //vai mostra se Ã© um object Array
        return Object.prototype.toString.call(param) === '[object Number]';
    };
     

    DOM.prototype.isString = function isString(param){
        //vai mostra se Ã© um object string
        return Object.prototype.toString.call(param) === '[object String]';
    };
     

    DOM.prototype.isBoolean = function isBoolean(param){
        //vai mostra se Ã© um object Boolean
        return Object.prototype.toString.call(param) === '[object Boolean]';
    };
   

    DOM.prototype.isNull = function isNull(param){
        //vai mostra se Ã© um object Null
        return Object.prototype.toString.call(param) === '[object Null]'
        || Object.prototype.toString.call(param) === '[object Undefined]';
    };
    

    ////////////////////////DESAFIO CEP ...USANDO LIB //////////////////////////////

    var $formCEP = new DOM('[data-js="form-cep"]');
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM ('[data-js="logradouro"]');
    var $bairro = new DOM ('[data-js="bairro"]');
    var $estado = new DOM ('[data-js="estado"]');
    var $cidade = new DOM ('[data-js="cidade"]');
    var $cep = new DOM ('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');
    //atribuindo um evento ao formCEP com o metodo on E criando uma funcao pra manipular o evento
    $formCEP.on('submit',handleSubmitFormCEP);
    var ajax = new XMLHttpRequest();
    
    function handleSubmitFormCEP(event){
     event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
    }
    function getUrl(){
    return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
    }
    function clearCEP(){
        return $inputCEP.get()[0].value.replace(/\D/g, '');
    }
    function handleReadyStateChange() {
        if( isRequestOk() ) {
            getMessage('ok');
            fillCEPFields();  
        }
    }
    function isRequestOk(){
       return ajax.readyState === 4 && ajax.status === 200; 
    }
    function fillCEPFields() {
        var data = parseData();
        if(!data) {
            getMessage('error');
          data = clearData();      
        }

        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $estado.get()[0].textContent = data.uf;
        $cidade.get()[0].textContent = data.localidade;
        $cep.get()[0].textContent = data.cep;
       
    }
    function clearData() {
        return {
            logradouro: '-',
            bairro: '-',
            uf: '-',
            localidade: '-',
            cep: '-'
        }   
    }   
    function parseData() {
        var result;
        try {
            result = JSON.parse(ajax.responseText);
        } 
        catch(e) {
            result = null;
        }
        return result;
    }

    function getMessage(type) {
        var messages = {
            loading: replaceCEP('Buscando informações para o CEP [CEP]'),
            ok: replaceCEP('Endereço referente ao CEP [CEP]') ,
            error: replaceCEP('Não encontramos o endereço para o CEP [CEP]')
        };
        $status.get()[0].textContent =  messages[type];
    }
    function replaceCEP(message){
        return message.replace('[CEP]', clearCEP());
    }
     

})(window, document);
  
  
  
