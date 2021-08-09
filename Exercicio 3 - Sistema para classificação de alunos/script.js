// 1- os alunos tem 03 notas;
// 2 - Você deverá fazer a média entre as três notas;
// 3 - Se a media for maior ou igual a 7 exiba na tela "Aprovado";
// 4- Se a media for menor que 7 exiba na tela "Reprovado";
// 5 - Atribua nome aos alunos e inclua junto a exibição da classificação.


// Obs.: Faça este processo para 03 alunos e enquadre cada um nas situações acima..


//Variáveis
var nome_1 = "Fabio";
var nota_1_1 = 7;
var nota_1_2 = 10;
var nota_1_3 = 8;
var resultado_fabio = 0;
var nome_2 = "Jota";
var nota_2_1 = 4;
var nota_2_2 = 5;
var nota_2_3 = 2;
var resultado_jota = 0;
var nome_3 = "Rocco";
var nota_3_1 = 9;
var nota_3_2 = 8;
var nota_3_3 = 10;
var resultado_rocco = 0;

// media Fábio
resultado_fabio = nota_1_1 + nota_1_2 + nota_1_3;
resultado_fabio /= 3;

document.write("A média das notas do " + nome_1 + " é " + resultado_fabio + "<br>");
document.write(nome_1 + " esta " + (resultado_fabio >= 7 ? "Aprovado" : "Reprovado" + "<br><br>"));


// media Jota
resultado_jota = nota_2_1 + nota_2_2 + nota_2_3;
resultado_jota /= 3;

document.write("A média das notas do " + nome_2 + " é " + resultado_jota + "<br>");
document.write(nome_2 + " esta " + (resultado_jota >= 7 ? "Aprovado" : "Reprovado" + "<br><br>"));


// media Rocco
resultado_rocco = nota_3_1 + nota_3_2 + nota_3_3;
resultado_rocco /= 3;

document.write("A média das notas do " + nome_3 + " é " + resultado_rocco + "<br>");
document.write(nome_3 + " esta " + (resultado_rocco >= 7 ? "Aprovado" : "Reprovado" + "<br><br>"));
