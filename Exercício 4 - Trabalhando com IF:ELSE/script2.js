mensagem = 0;

num = parseInt(prompt('Digite um número'));

var total = num/2;


if (num%2 == 0) {
        mensagem = 'O numero é par';
        alert(mensagem);
        document.write("O número digitado foi " + num + "<br>" + mensagem);
} 
if (!num%2 == 0) {
        mensagem = 'O número é impar';
        alert(mensagem);
        document.write("O número digitado foi " + num + "<br>" + mensagem);
} 


