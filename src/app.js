alert('Boas vindas ao jogo da adivinhação do número secreto');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }

}
//operador  ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você adivinhou! O número secreto é: ${numeroSecreto} e você o encontrou com ${tentativas} ${palavraTentativa}.`);

//if(tentativas > 1){
//    alert(`Isso aí! Você adivinhou! O número secreto é: ${numeroSecreto} e você o encontrou com ${tentativas} tentativas.`);
//}else{
//   alert(`Isso aí! Você adivinhou! O número secreto é: ${numeroSecreto} e você o encontrou com ${tentativas} tentativa.`);
//}

