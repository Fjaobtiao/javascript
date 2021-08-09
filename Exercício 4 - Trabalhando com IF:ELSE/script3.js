// 3) 11) Elabore um script que calcule o que deve ser pago por um produto, considerando o preço
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento

// 1 À vista no cartão ou cheque, recebe 10% de desconto
// 2 À vista no dinheiro, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em três vezes, preço normal de etiqueta mais juros de 10%

var produto = 230

num = parseInt(prompt('Escolha a forma de pagamento'));

if (num == 1) {
    mensagem = 'Forma de pagamento a vista no cartão';
    alert(mensagem);
    document.write("O número digitado foi " + num + "<br>" + "Valor a ser pago: ", (produto * 0.9));
} 

if (num == 2) {
    mensagem = 'Forma de pagamento a vista no dinheiro';
    alert(mensagem);
    document.write("O número digitado foi " + num + "<br>" + "Valor a ser pago: ", (produto * 0.85));
} 

if (num == 3) {
    mensagem = 'Forma de pagamento parcelado em duas vezes';
    alert(mensagem);
    document.write("O número digitado foi " + num + "<br>" + "Valor a ser pago: ", produto);
} 

if (num == 4) {
    mensagem = 'Forma de pagamento a parcelado em tres vezes';
    alert(mensagem);
    document.write("O número digitado foi " + num + "<br>" + "Valor a ser pago: ", (produto * 1.1));
} 