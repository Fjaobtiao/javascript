// function out(x) {
     
//     document.write("Seu nome é:" , x)
// }





// FUNCÃO PUSH
// function cadastrar_funcionarios(){
//     var funcionarios = [];
//     while(true){
//         aux = prompt("Digite o nome do próximo funcionário ou 0 para sair");
//         if(aux == 0)
//             break;
//         else
//             funcionarios.push(aux);
//     }

//     for (i in funcionarios){
//         document.write("<br>o nome é: ", funcionarios[i]);
//     }
// }

// FUNCÃO UNSHIFT coloca o último no primeiro
// function cadastrar_funcionarios(){
//     var funcionarios = [];
//     while(true){
//         aux = prompt("Digite o nome do próximo funcionário ou 0 para sair");
//         if(aux == 0)
//             break;
//         else
//             funcionarios.unshift(aux);
//     }

//     for (i in funcionarios){
//         document.write("<br>o nome é: ", funcionarios[i]);
//     }
// }




// FUNCÃO POP apaga uma posição dos itens armazenados. No caso do exemplo ele esta apagando a posição 4
// function cadastrar_funcionarios(){
//     var num = [1,2,3,4,5,6,7,8,9,10];

//     for(i=0;i<num.length();i++){
//         if(i>3)
//             num[i] = num[parseInt(i) + 1]
//     }
    
//     num.pop();

//      for(i in num){
//         document.write("<br>num: ", num[i]);
//     }
// }






// var alunos_nota=[];
// // nome, nota html, nota css, nota javascript
// alunos_nota['nome'] = [];
// alunos_nota['nota_html'] = [];
// alunos_nota['nota_css'] = [];
// alunos_nota['nota_javascript'] = [];
// alunos_nota['media'] = []

// alunos_nota['nome'][0] = "Joao";
// alunos_nota['nota_html'][0] = 70;
// alunos_nota['nota_css'][0] = 66;
// alunos_nota['nota_javascript'][0] = 88;

// alunos_nota['nome'][1] = "Maria";
// alunos_nota['nota_html'][1] = 70;
// alunos_nota['nota_css'][1] = 60;
// alunos_nota['nota_javascript'][1] = 60;

// alunos_nota['nome'][2] = "Cesar";
// alunos_nota['nota_html'][2] = 80;
// alunos_nota['nota_css'][2] = 80;
// alunos_nota['nota_javascript'][2] = 80;

// for(i=0;i<alunos_nota['nome'].length;i++){
//     alunos_nota['media'][i] = (alunos_nota['nota_html'][i]+alunos_nota['nota_css'][i]+alunos_nota['nota_javascript'][i])/3
// }


// for(i=0;i<alunos_nota['nome'].length;i++){
//     document.write(alunos_nota['nome'][i], " ", alunos_nota['nota_html'][i], " ", alunos_nota['nota_css'][i], " ", alunos_nota['nota_javascript'][i], " ", alunos_nota['media'][i], "<br>")
// }



// inverter a posição das strings
// var teste = ["F","r",2,3,5,2,6,"J","a","T",1,2,4];
// teste.reverse();
// document.write(teste)


// // outra maneira de inverter a posição das strings
// var teste = ["F","r",2,3,5,2,6,"J","a","T",1,2,4];
// var aux = []
// document.write(teste,"<br>")
// for(i in teste)
// aux.push(teste[parseInt(teste.length)-parseInt(i)-1])
// document.write(aux,"<br>")


// forEach é uma estrutura de repetição do array
// var numeros = [5,2,3,4];

// numeros.forEach(element => {
//     document.write(element * 2, " ")
// });





// //.map() Ele não substitui os elementos, ele armazena os novos itens em um novo array
// var numeros = [];
//          var triploNumeros = [];

//          for (var i = 0; i < 4; i++){
//            numeros.push(parseInt(prompt("Digite o número: ")));
//          }   
         
//          triploNumeros = numeros.map(elemento => elemento * 3);

//          document.write(numeros, "<br>");
//          document.write(triploNumeros);





// .filter() no exemplo, ele retorna os números digitados menores que 3. Esse números não são armezados no array. Precisaríamos criar um outro document.write para armezar os valores.

// var numeros = [];

// for (var i = 0; i < 4; i++){
//   numeros.push(parseInt(prompt("Digite o número: "))); // numeros[i] = parseINt..... mesma função
// }   

// document.write(numeros.filter(elemento => elemento < 3)); 





//.find() estrutura booleana apenas de verdadeiro ou falso. Nos tras uma resposta e tratamos essa resposta posteriormente
// var numeros = [];

// for (var i = 0; i < 4; i++){
//   numeros.push(parseInt(prompt("Digite o número: "))); // numeros[i] = parseINt..... mesma função
// }   

// var verifica = numeros.find(elemento => elemento === 8);

// if(verifica){
//     document.write("O 8 existe no array");
// }else{
//    document.write("O 8 não existe no array");
// }




// .findIndex() retorna a posição do elemento ao inves de retornar true ou falso como o .find

// var numeros = [];
      
// for (var i = 0; i < 4; i++){
// numeros.push(parseInt(prompt("Digite o número: "))); // numeros[i] = parseINt..... mesma função
// }   

// var verifica = numeros.findIndex(elemento => elemento === 8);

// document.write(verifica);




//.every() testar elementos do array que passa em uma função

// var numeros = [10, 15, 25, 3, 12, 1, 99];

// var verifica = numeros.every(elementos  => elementos < 100);
// document.write(verifica);




// .some() retorna verdadeiro se pelo menos um passar no teste e retorna verdadeiro ou falso

// var numeros = [10, 15, 25, 3, 12, 1, 99];
// var verifica = numeros.some(elementos  => elementos > 1000);
// document.write(verifica);



// .sort() Entra na parte de ordenação. Os elementos são convertidos em texto. Será sempre nesse padrão. não altera.

// var numeros = [];
// for (var i = 0; i < 10; i++)
//   numeros.push(parseInt(prompt("Digite o número")));

//   document.write(numeros.sort((a, b) =>{
//     if (a < b)
//       return -1
//     else if (a > b)
//       return 1
// }));




// //.reduce() reduz o conteúdo de um array para um único elemento

// var numeros = [10, 15, 25, 3, 12, 1, 99];
            
// var total = numeros.reduce((total, elementos) => total + elementos)
// document.write(total);


// .sort() organiza o array de forma alfabética apenas

// var numeros =["Maria", "Joao", "Katia", "Marcos", "Fabio"];
// numeros.sort();
// document.write(numeros);


// .reverse() inverte a ordem dos elementos do array

// var myArray = ['one', 'two', 'three'];
// myArray.reverse();

// document.write(myArray) 





// Exercicio dado pelo Felipe


// var datetime = [], data = [], hora = [];
// datetime[0] = "01/10/1980 14:05:10";
// datetime[1] = "20/05/2000 18:00:59";
// datetime[2] = "1/4/21 20:00";

//             for (i = 0; i < datetime.length; i++) {
//                 data.push(datetime[i].slice(0, datetime[i].indexOf(" ")));
//                 hora.push(datetime[i].slice(datetime[i].indexOf(" ") + 1, datetime[i].length));
//             }

//             for (i = 0; i < datetime.length; i++) {
//                 document.write("Antes ", datetime[i], "<br>");
//                 document.write("Depois: data: ", data[i], " hora: ", hora[i], "<br> <br>");
//             }




// Colocar a primeira letra do texto em maiuscula de acordo com a tabela unicode
// function capitaliza(nome){
//     var nome_capitalizado, codigo=32;
//     // document.write("letra: ", nome[0], " codigo ", nome.charCodeAt(0), " capitalizada: ", String.fromCharCode(nome.charCodeAt(0)-codigo))
//     aux = nome[0]
//     nome_capitalizado = nome.replace('f', 'F')
//     return nome_capitalizado;
// }

// var nome = "felipe soares barbosa"

// function capitaliza(nome) {
//     var nome_capitalizado, codigo = 32;

//     aux = nome[0]
//     nome_capitalizado = nome.replace(aux, aux.toUpperCase())

//     return nome_capitalizado;
// }

// document.write(capitaliza(nome))



// For para array
// var numeros = [5,2,3];

// for (i in numeros){
//     document.write(numeros[i], "/")
// }


// Substring - pedaço de uma string
var texto = "A turma bcw5 é maravilhosa!";
// textAux = texto.substring(4) // começa o texto na posição 4
// textAux = texto.substring(8,12) // O primeiro valor começa do zero
// textAux = texto.substring(15, -4) // o negativo é alterado por zero
// document.write(textAux);




// .split()
// stringExemplo = "João da Silva Oliveira";
// resultado = stringExemplo.split(" "); ele 'quebra' o texto sem espaços
// resultado = stringExemplo.split(" ", 3)
// document.write(resultado);





//slice()
// String retornada: "José da Silva Xavier"
// nome = "João José da Silva Xavier";
// nomeResultante = nome.slice(4);
// nomeResultante = nome.slice(3, 10);
// nomeResultante2 = nome.substring(3, 10);
// document.write(nomeResultante);
// document.write(nomeResultante2);

// Array retornado: ["Focus", "Jetta"]
// carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
// selecionados = carros.slice(-4, -2);



// parseInt - analisa um string e retorna um numero inteiro
//teste = parseInt(7.5) // nesse caso intende-se que esta trabalhando na base decimal
// parseInt("-F", 16);
// parseInt("-0F", 16);
// parseInt("-0XF", 16);
// parseInt(-15.1, 10)
// parseInt(" -17", 8);
// parseInt(" -15", 10);
// parseInt("-1111", 2);
// parseInt("-15e1", 10);
// parseInt("-12", 13);
// document.write(teste)


// .toString - Converte de inteiro para string
// var num = 15.5;
// var a = num.toString(); // Base decimal
// var b = num.toString(2); // Base binaria
// var c = num.toString(8); // base 8
// var d = num.toString(16); // Base hexa

// console.log (a, "<br>", b, "<br>", c, "<br>", d, "<br>")




