

do {
    idade = prompt("Digite sua idade: ");
    aux = parseInt(idade);
    aux = idade - aux;
} while(idade < 0 || idade > 100 || aux2 != 0 || idade == ""|| isNaN(aux));

document.write("idade valida!")