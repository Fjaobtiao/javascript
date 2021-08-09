// 4) Crie um Script que tenha dois números e mostre o maior deles, ou se eles são iguais.


var num1 = 0;
var num2 = 0

num1 = parseInt(prompt('Escolha um número'));
num2 = parseInt(prompt('Escolha outro número'));

if (num1 > num2)
    document.write(num1, " é maior.");
else if(num1 == num2)
    document.write("São iguais");
else    
    document.write(num2, " é menor.")