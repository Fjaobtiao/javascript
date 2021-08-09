// 1 - Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo; 
// b. A maior altura do grupo; 

var menor = 0, maior = 0;
for (i=1;i<=15;i++){
    msg = "Digite a altura do indivíduo: " + i;
    altura = prompt(msg);
    if(i==1)
        menor = altura;
    if (altura < menor)
        menor = altura;
    if (altura > maior)
    maior = altura;   
}
document.write("maior ", maior, "<br> menor ", menor)