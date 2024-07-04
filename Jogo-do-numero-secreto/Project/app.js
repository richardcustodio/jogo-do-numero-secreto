alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto chute não for igual ao n.s.
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo} `);

// Se chute for igual ao numero secreto
if(chute == numeroSecreto){
    break;
} else {
    if(chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
 }
}

let palavraTentativa = palavraTentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você desconbriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `);

// if (tentativas > 1){
//    alert(`O número secreto é menor que ${numeroSecreto} com ${tentativas} tentativas. `);
// } else {
//    alert(`O número secreto é maior que ${numeroSecreto} com ${tentativas} tentativas. `);
// }
// alert(`Isso ai! Você desconbriu o número secreto ${numeroSecreto} com ${tentativas} tentativas. `);