

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  
  --------------------------------------------------json-----------------------------------------------------
    {
    "name": "Fabio Cars",
    "phone": "(11) 3422-3905"
  }
  --------------------------------------------------html-----------------------------------------------------
  <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ,<link rel="stylesheet" href="appCarros.css">
    <title>fabio Cars</title>
</head>
<body>
    <header align="center">
        <h1>
            <span data-js="company-name"></span> - 
            <span data-js="company-phone"></span>
        </h1>
    </header>
    <form action="/appCarros.html" data-js="form-register" align="center">
    <div>
         <label>Imagem do Carro:</label>
         <input data-js="image" id="url"  type="url" size="50" placeholder="Coloque uma Url válida" size="50">
    </div>
    <br>
    <div>
        <label>Marca / Modelo:</label>
        <input type="text" data-js="brand-model" id="marca" placeholder="Coloque a Marca / Modelo" size="50">
    </div>
    <br>
    <div>
    <label>Ano:</label>
    <input type="text" data-js="year" id="ano" placeholder="Coloque o Ano" size="50">
    </div>
    <br>
    <div>
            <label>Placa:</label>
            <input type="text" data-js="plate" id="placa" placeholder="Coloque a placa" size="50">
    </div>
    <br>
    <div>
            <label>Cor:</label>
            <input type="text" data-js="color" id="cor" placeholder="Coloque a cor" size="50">
    </div>
    <br>
    <br>
    <div>
            <button type="submit" id="cadastrar">Cadastrar</button>    
    </div>    
    </form>
    <br>
    <br>
    <br>
<br>
<br>
<br>
    <table align="center">
        <thead>
            <tr>
                <th>Imagem do carro </th>
                <th>Marca / Modelo </th>
                <th> Ano </th>
                <th> Placa </th>
                <th> Cor </th>
            </tr>
        </thead>
    <!--ele que entra os dados cada vez que via o form-->
        <tbody data-js="table-car"></tbody>
    </table>


    <script src="js/dom.js"></script>
    <script src="js/appCarros.js"></script>
</body>
</html>
  
  -----------------------------------------------css---------------------------------------------
      label {
    font-style: oblique;
    font-weight: bold;
}
/*tamanho da imagem que aparece*/
td img {
    width:150px;
    height: auto;
}

form {
    position: relative; top: 50px; left: 0px;
}
button {
    background: green;
    border: 0;
    color: #fff;
    padding: 10px 20px;
}

button:hover,
button:focus {
    background: darkgreen;
    cursor: pointer;
}

/*criando linhas da tabela*/
table {
    border-collapse: collapse;
}
td, th {
    padding: 5px 100px;
    border: 1px solid #ccc;
}

#url {
    position: relative; top: 0px; left: 50px;
}
#marca {
    position: relative; top: 0px; left: 55px;
}
#ano {
    position: relative; top: 0px; left: 92px;
}
#placa {
    position: relative; top: 0px; left: 89px;
}
#cor {
    position: relative; top: 0px; left: 94px;
}

#cadastrar {
    position: relative; top: 0px; left: 10px;
}

 ---------------------------------------------js-----------------------------------------------------------
     (function($){

    var app = (function appController() {
        return {
            init: function init(){
                this.companyInfo();
                this.initEvents();
            },

            companyInfo : function companyInfo(){
               var ajax = new XMLHttpRequest();
               ajax.open('GET','data/company.json',true);
               ajax.send();
               ajax.addEventListener('readystatechange',this.getCompanyInfo,false);
            },
            //vai iniciar todos os nossos eventos
            initEvents: function initEvents(){
                $('[data-js="form-register"]').on('submit',this.handleSubmit);
            },
            handleSubmit: function handleSubmit(e){
                e.preventDefault();
                console.log("submit");
                var $tableCar = $('[data-js="table-car"]').get();
                $tableCar.appendChild(app.createNewCar());
            },
            createNewCar: function createNewCar(){
             var $fragment = document.createElement('tr');
             var $tr = document.createElement('tr');
             var $tdImage = document.createElement('td');
             var $image = document.createElement('img');
             var $tdBrand = document.createElement('td');
             var $tdYear = document.createElement('td');
             var $tdPlate = document.createElement('td');
             var $tdColor = document.createElement('td');

             $image.src = $('[data-js="image"]').get().value; 
             $tdImage.appendChild($image);

             $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
             $tdYear.textContent = $('[data-js="year"]').get().value;
             $tdPlate.textContent = $('[data-js="plate"]').get().value;
             $tdColor.textContent = $('[data-js="color"]').get().value;
            
             $tr.appendChild($tdImage);
             $tr.appendChild($tdBrand);
             $tr.appendChild($tdYear);
             $tr.appendChild($tdPlate);
             $tr.appendChild($tdColor);
             return $fragment.appendChild($tr);
            },

            getCompanyInfo: function getCompanyInfo(){
                if(!app.isReady.call(this))
                return;
    //PEGANDO O TITULO E O TELEFONE QUE ESTA EM COMPANY.JSON E PASSANDO PARA appCarros.html na tag span
                var data = JSON.parse(this.responseText);
                var $companyName = $('[data-js="company-name"]').get();
                var $companyPhone = $('[data-js="company-phone"]').get();
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;
            },

            isReady: function isReady(){
                return this.readyState === 4 && this.status === 200;
            }
        };
    })();

    app.init();


DOM('input');


})(window.DOM);


