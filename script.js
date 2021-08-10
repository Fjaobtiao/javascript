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


// outra maneira de inverter a posição das strings
var teste = ["F","r",2,3,5,2,6,"J","a","T",1,2,4];
var aux = []
document.write(teste,"<br>")
for(i in teste)
aux.push(teste[parseInt(teste.length)-parseInt(i)-1])
document.write(aux,"<br>")