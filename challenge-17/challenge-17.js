(function(){   
  'use strict';
        /*
        1. Envolva todo o conteúdo desse desafio em uma IIFE.
        2. Adicione a diretiva 'use strict';
        3. Crie um arquivo index.html e adicione esse script à ele.
        */

        /*
        Em todos os exercícios desse desafio, nós vamos utilizar expressões
        regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
        variável chamada `text`:
        "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
        */
        var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), 
        apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

        /*
        Vamos começar com umas brincadeiras fáceis :D
        Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
        no console:
        */
        console.log( 'Adicionando seu nome no texto:' );
  
        console.log(text.replace(/Manuel Marques de Sousa/g, 'Fábio Mauadié Santos'));
  
        "Fábio Mauadié Santos, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875),
         apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
  
        /*
        Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
        console.
        Ex: Se você for da São Paulo, substitua por "paulista".
        */
        console.log( '\nTrocando naturalidade:' );
        
        console.log(text.replace(/brasileiro/g, 'carioca'));
  
        Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875),
        apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista carioca.
        

        /*
        Substitua todos os números por um traço `-`. Cada caractere de número deve
        ser um traço. Mostre o resultado no console:
        */
        console.log( '\nTrocando números por -:' );
        
        console.log(text.replace(/\d/g, '-'));
  
        Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, -- de junho de ---- – Rio de Janeiro, -- de julho de ----),
        apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.

        /*
        Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
        minúsculo por "0" (número zero). Mostre o resultado no console:
        */
        console.log( '\nTrocando de "D" a "h" por "0":' );
        
        console.log(text.replace(/[D-Hd-h]/g, 0));

        Manu0l Marqu0s 00 Sousa, Con00 00 Porto Al00r0 (Rio 0ran00, 13 00 jun0o 00 1804 – Rio 00 Jan0iro, 18 00 jul0o 00 1875),
        ap0li0a0o 00 "O C0ntauro 00 Luvas", 0oi um militar, político, abolicionista 0 monarquista brasil0iro.
        
        /*
        Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
        Mostre o resultado no console:
        */
        console.log( '\nTrocando "A" e "a" por "4":' );
        
         console.log(text.replace(/[A]/gi, 4));
  
        M4nuel M4rques de Sous4, Conde de Porto 4legre (Rio Gr4nde, 13 de junho de 1804 – Rio de J4neiro, 18 de julho de 1875),
        4pelid4do de "O Cent4uro de Luv4s", foi um milit4r, político, 4bolicionist4 e mon4rquist4 br4sileiro.

        /*
        Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
        o método `toUpperCase()`. Mostre o resultado no console:
        */
        console.log( '\n"O Centauro de Luvas" em caixa alta:' );
        
        console.log(text.replace(/O Centauro de Luvas/g, function(frase){

			  return frase.toUpperCase();

        }));
  
         Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875),
         apelidado de "O CENTAURO DE LUVAS", foi um militar, político, abolicionista e monarquista brasileiro.

        /*
        Agora iremos substituir as datas no formato "13 de junho de 1804" para
        "13/06/1804". A primeira coisa a fazer é criar uma função chamada
        `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
        retornar o número correspondente a esse mês.
        Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
        Números com menos de dois dígitos devem ter um zero na frente.
        Crie então a função e mostre no console os retornos para os meses de março,
        setembro e dezembro.
        Use um console.log para cada mês, usando a frase:
        "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
        */
        console.log( '\nMeses representados por números:' );
        
  
         function getMonthNumber(nomeMes){

          var mes = {

          janeiro : '01',
          fevereiro : '02',
          'março' : '03',
          abril: '04',
          maio: '05',
          junho: '06',
          julho: '07',
          agosto:'08',
          setembro:'09',
          outubro:'10',
          novembro:'11',
          dezembro: '12'

          };

          return mes[nomeMes];	
          }
        console.log('O mês de março é representado pelo número ' + getMonthNumber('março')+'.');

        console.log('O mês de setembro é representado pelo número ' + getMonthNumber('setembro')+'.');

        console.log('O mês de dezembro é representado pelo número ' + getMonthNumber('dezembro')+'.');

        O mês de março é representado pelo número 03.

        O mês de setembro é representado pelo número 09.

        O mês de dezembro é representado pelo número 12.
        /*
        Agora, declare uma variável chamada `regexDate` que irá receber a expressão
        regular que irá fazer o match com as datas. Crie grupos de captura para o
        dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
        meses que estão no texto, não precisa adicionar todos.
        Com o que vimos até agora, você consegue fazer :D
        Mostre a regex no console.
        */
        console.log( '\nRegex que vai fazer o match com as datas do texto:' );
        var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;     //grupos de captura é o q esta entre parenteses
          console.log(regexDate);
          /(\d\d) de (junho|julho) de (\d\d\d\d)/g

        /*
        Agora crie a função que irá fazer o replace dos dados. A função será chamada
        de `replaceDate`. Ela deve retornar a data no formato:
        "[DIA]/[MÊS]/[ANO]"
        Após criar a função, faça o replace das datas no texto, mostrando no
        console o resultado.
        */
        console.log( '\nReplace de datas:' );
  
        function replaceDate(regex,dia,mes,ano){


	      return dia + '/' + getMonthNumber(mes) +'/' + ano;

        }
        console.log(text.replace(regexDate, replaceDate));
        Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13/06/1804 – Rio de Janeiro, 18/07/1875),
        apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.
})(); 
