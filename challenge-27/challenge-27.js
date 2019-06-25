(function(){
  'use strict';
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

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
    //com forEach é possivel pecorrer todos os elementos e add um evento a eles no caso o <a>
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
            console.log(item.firstChild.nodeValue);
    });
    
    // map ele vai passa por todos os itens do array e ele vai retornar o que a gente quiser criando um novo array que no caso é o dataJs que vai buscar o valor de data-js
    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element,arguments);
            };
            var $a = new DOM('[data-js="link"]');
            console.log($a);
            // esse dataJs estamos criando um novo array
            var dataJs = $a.map(function(item){
                return item.getAttribute('data-js');   
            });
            console.log(dataJs);

    
     DOM.prototype.filter = function filter(){
         return Array.prototype.filter.apply(this.element,arguments);
     };

     DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element,arguments);
    };
    var $a = new DOM('[data-js="link"]');
    console.log($a);
    // esse dataJs estamos criando um novo array
    var dataJs = $a.reduce(function(acumulado,item, index){
        return acumulado+ ' ' + item.getAttribute('data-js') + index;   
    },0); //esse 0 é o valor inicial do acumulado
    console.log(dataJs);

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
        //vai mostra se é um object Array
        return Object.prototype.toString.call(param) === '[object Array]';
    };
    //testando pra saber se um array
    var dom = new DOM();
    console.log(dom.isArray([1,2,3,4,5]));


    DOM.prototype.isObject = function isObject(param){
        //vai mostra se é um object object
        return Object.prototype.toString.call(param) === '[object Object]';
    };
    //testando pra saber se é object object
    console.log(dom.isObject());

    DOM.prototype.isFunction = function isFunction(param){
        //vai mostra se é um object function
        return Object.prototype.toString.call(param) === '[object Function]';
    };
    //testando pra saber se é object function 
    console.log(dom.isFunction(function(){}));

    
    DOM.prototype.isNumber = function isNumber(param){
        //vai mostra se é um object Array
        return Object.prototype.toString.call(param) === '[object Number]';
    };
      //testando pra saber se é object number 
      console.log(dom.isNumber(10));

    DOM.prototype.isString = function isString(param){
        //vai mostra se é um object string
        return Object.prototype.toString.call(param) === '[object String]';
    };
     //testando pra saber se é object string 
    console.log(dom.isString('fabio'));

    DOM.prototype.isBoolean = function isBoolean(param){
        //vai mostra se é um object Boolean
        return Object.prototype.toString.call(param) === '[object Boolean]';
    };
    //testando pra saber se é object Boolean como 1 nao é boolean fica false
    console.log(dom.isBoolean(1));

    DOM.prototype.isNull = function isNull(param){
        //vai mostra se é um object Null
        return Object.prototype.toString.call(param) === '[object Null]'
        || Object.prototype.toString.call(param) === '[object Undefined]';
    };
    //testando pra saber se é object null
    console.log(dom.isNull());
  
  
  
  
  
  
  
  
  })();
