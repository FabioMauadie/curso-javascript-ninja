// Envolva todo o código desse arquivo em uma IIFE (incluindo esse 
(function(){
          /*
          Crie uma variável chamada `once`, que recebe `false` como seu valor.
          Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
          loop, mostre no console a mensagem:
          'Entrou ao menos uma vez!'
          Qual loop você deve usar para que essa mensagem seja mostrada no console?
          */
          // ?
          do {

          console.log('ENTROU AO MENOS 1 VEZ!!!');

          } while( once === true );
          /*
          Crie um objeto chamado `person`, que receba as seguintes propriedades:
          - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
          para o nome, idade, peso e data de nascimento dessa pessoa.
          */
          var person = {

            name: 'fabio', 
            age: '27 anos',
            weight: '78 kg', 
            birthday: '05/12/1991'


          /*
          Use um loop para percorrer o objeto criado acima, mostrando no console
          a frase:
          'The [PROPERTY] of person is [VALUE]'
          Aproveite e crie uma variável `counter` que vai contar quantas propriedades
          esse objeto tem.
          Após o loop, mostre a frase:
          'The person has [COUNTER] properties'
          */
          var counter = 0;
          for (var prop in person) {

            console.log('The ' + prop + ' of person is ' +person[prop])
            counter++;
          }
          console.log('The person has '+ counter + ' properties');

          The name of person is fabio
          The age of person is 27 anos
          The weight of person is 78 kg
          The birthday of person is 05/12/1991
          The person has 4 properties
          /*
          Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
          criado acima) é mais velha que a idade passada por parâmetro.
          Se verdadeiro, retornar `true`. Senão, retornar false.
          Após a função, mostrar a mensagem no console:
          'The person has more than 25 years old? [TRUE/FALSE]'
          */
          function moreThan(age){

              if(person.age > age){

              return true;	

            }

              return false;
          }
          console.log ('The person has than 25 years old?',moreThan(25));

          /*
          Faça um loop de 0 a 20, que adicione cada número como um item de um
          array chamado `numbers`. Se o contador for maior que 10, saia do loop.
          Mostre no console os números no array.
          */
          console.log( 'De 0 a 10:' );
          for (var i = 0 ; i<20; i++) {

            if(i>10){
              break;

              }
              numbers.push(i);
          }

          /*
          Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
          criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
          esses. Se o número for ímpar, pular para o próximo número.
          Mostrar no console os números do array.
          */
          console.log( 'Pares de 0 a 20:' );
          for (var i = 0 ; i <=20 ; i++){

            if(i%2 === 0){

              continue;

              }

            numbers.push(i);

          }
            console.log(numbers);
})():
