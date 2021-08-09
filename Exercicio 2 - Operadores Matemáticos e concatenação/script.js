//Criacão de Variáveis
var idade_minha = 47;
var idade_filho = 0;
var resultado_item_1 = 0;
var idade_meu_pai = 68;
var resultado_item_2 = 0;
var idade_irma = 45
var resultado_item_3 = 0;
var renda_familiar = 2000;
var qtde_familia = 2;
var resultado_item_4 = 0;


// Faça um script  que com contenha os seguintes cálculos e exiba na tela:

//Primeiro
// 1. Exiba na tela a soma da sua idade some com a do seu filho(a); //quem não tem soma com 0.
resultado_item_1 = idade_minha + idade_filho;
document.write("A soma da minha idade com a do meu filho é " + resultado_item_1 + "<br>");

//Segundo
// 2. O resultado a soma do item anterior, multiplique com a idade do seu pai;
resultado_item_2 = resultado_item_1 * idade_meu_pai;
document.write("A multiplicação do resultado anterior com a idade do meu pai é " + resultado_item_2 + "<br>");

//Terceiro
// 3. Agora some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01;
resultado_item_3 = idade_irma * idade_minha;
resultado_item_3 /= resultado_item_1;
document.write("A soma das idades doe meus irmãos, multiplicado pela minha idade e dividido pelo primeiro resultado é " + resultado_item_3 + "<br>");

//Quarto
// 4. Agora, divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30;
resultado_item_4 = renda_familiar / qtde_familia;
resultado_item_4 *= 30;
document.write("A divisão da renda familiar pela minha família, multiplicado por 30 é " + resultado_item_4 + "<br><br>");

//Quinto
//E por fim, exiba na tela os resultados com um texto concatenado.
document.write("resultado 1= " + resultado_item_1 + ", Resultado 2= " + resultado_item_2 + ", Resultado 3= " + resultado_item_3 + ", Resultado 4= " + resultado_item_4)