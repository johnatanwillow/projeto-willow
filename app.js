let listaDeNumerosSorteados = [];
let númeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);  
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Willow Games');
exibirTextoNaTela('p', 'Digite um número de 1 a 10');
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * númeroLimite + 1);    
    let qtdeElementosNaLista = listaDeNumerosSorteados.length;
    if (qtdeElementosNaLista == númeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
 }
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Willow Games');
    exibirTextoNaTela('p', 'Digite um número de 1 a 10');
}
function verificarChute(){ 
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1','Você acertou.');
        let palavraTentativa = tentativas > 1 ?'tentativas':'tentativa';
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', `Realmente era o número ${numeroSecreto}`);
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ('disabled');

    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p',`Tá frio. O número é menor que ${chute}`);
        }
        if (chute < numeroSecreto){
            exibirTextoNaTela ('p',`Tá frio. O número é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
    
} 
exibirMensagemInicial();
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}