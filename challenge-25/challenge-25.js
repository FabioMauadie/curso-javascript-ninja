(function(){
/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index-25</title>
</head>
<body>
<br>
<div align="center">
<button  data-js="mouse"><b>passe o mouse</b></button>
<br>
<br>
<br>
<button  data-js="botao">click</button>
<br>
<br>
<br>
<button data-js="cliqueDuasVezes">click 2 vezes</button>
<br>
<br>
<br>
<input data-js="text" type="text">
<select data-js="select">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
</select>
<br>
<br>
<br>

</div>
    <script src="js/challenge-25.js"></script>
</body>
</html>
  
 
  
  var $mouse = document.querySelector('[data-js="mouse"]');
$mouse.addEventListener('mousemove',passeMouse,false);
function passeMouse(event){
    event.preventDefault();
    alert(" o mouse foi passado pelo titulo :)");
}

var $cliquei = document.querySelector('[data-js="botao"]');
$cliquei.addEventListener('click',click,false);
function click(event){
    event.preventDefault();
    alert(" cliquei :)");
}

var $cliqueVezes = document.querySelector('[data-js="cliqueDuasVezes"]');
$cliqueVezes.addEventListener('dblclick',dblclique,false);
function dblclique(event){
    event.preventDefault();
    alert(" foi clicado 2 vezes!!!)");
}
var $inputText = document.querySelector('[data-js="select"]');
$inputText.addEventListener('change',change,false);
function change(event){
    event.preventDefault();
   document.querySelector(['[data-js="text"]']).value = this.value; 

}
  
  })();
