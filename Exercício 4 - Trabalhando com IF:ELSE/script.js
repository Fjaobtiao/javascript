mensagem = 0;

num = prompt('Digite um número');

if ((num == 0) || (num < 0) || (num > 0))

if (num == 0) {
        mensagem = 'O numero é nulo!';
        alert(mensagem);
        document.write("O número digitado foi " + num + "<br>" + mensagem);
} 
if (num > 0) {
        mensagem = 'O número é positivo!';
        alert(mensagem);
        document.write("O número digitado foi " + num + "<br>" + mensagem);
} 
    
if  (num < 0) {
        mensagem = 'O número é negativo!';
        alert(mensagem);
        document.write("O número digitado foi " + num + "<br>" + mensagem);
}


