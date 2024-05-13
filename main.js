const botaoMenuFechado = document.querySelector('.botao__menu');
const botaoMenuAberto = document.querySelector('.menu-hambuguer--aberto');
const alerta = document.querySelector('.alerta');
const closer = document.querySelector('.close');
const menuLateral = document.querySelector('.aside');
const tentativa = document.querySelectorAll('.tentativa');
const jogo = document.querySelector('.jogo');
const resposta = document.querySelector('.resposta');
const apostaFeita = document.querySelector('.apostaFeita');
const saldoRestante = document.querySelector('.saldoRestante');
const botaoReinicia = document.querySelector('.reiniciar');

//
const pontosNaTela = document.querySelector('.pontos'); //pontosNaTela
const botaoTransfere = document.querySelector('.transfere'); //botaoTransfere
const saldoNaTela = document.querySelector('.saldo'); //saldoNaTela
const botaoAposta = document.querySelector('.apostaBotao'); //botaoAposta
const aposta = document.querySelector('.aposta'); //aposta

//saldo
let saldo = 100;

//aposta
let pontos = 100;

//numero sorteado
let numeroSecreto;

sorteiaDiamante();

document.addEventListener('DOMContentLoaded', () =>{
    alerta.classList.remove('hidden');
    document.querySelector('.jogoCompleto').classList.add('hidden');
})

closer.addEventListener('click', () =>{
    alerta.classList.add('hidden');
    document.querySelector('.jogoCompleto').classList.remove('hidden');
})

botaoMenuFechado.addEventListener('click', () =>{
    menuLateral.classList.remove('hidden');
    document.querySelector('.jogoCompleto').classList.add('hidden');
})

botaoMenuAberto.addEventListener('click', () =>{
    menuLateral.classList.add('hidden');
    document.querySelector('.jogoCompleto').classList.remove('hidden');
})

botaoTransfere.addEventListener('click', () =>{
    if(pontos <= 0){
        alert('Você não tem essa quantidade de pontos!');
    }else{
        saldo += pontos;
        pontos -= pontos;

        console.log(typeof pontos);
        console.log(typeof saldo)
    }

    saldoNaTela.innerHTML = `Saldo: ${saldo}`;
    pontosNaTela.innerHTML = `Pontos: ${pontos}`;
})

botaoAposta.addEventListener('click', () =>{

    if(saldo < parseInt(aposta.value)){
        alert('Você não tem esse saldo para apostar!');
    }else{

        if(aposta.value == '' || aposta.value == NaN || aposta.value == 0){
            alert('Insira um valor válido!');
            aposta.value = '';
        }else{
                saldo -= parseInt(aposta.value);
                

            saldoNaTela.innerHTML = `Saldo: ${saldo}`;
            saldoRestante.innerHTML = `Saldo: ${saldo}`;

            apostaFeita.innerHTML = `Aposta: ${parseInt(aposta.value)}`

            
            joga();
        }
        
        
    }
})

function reiniciaJogo(){
    
        botaoReinicia.addEventListener('click', () =>{
        if(jogou){
            
            if(aposta.value <= 0){
                alert('Aposte algum valor!');
            }else{
                erro = false;
                jogou = false;

                tentativa.forEach(elemento =>{
                    elemento.setAttribute('src', './img/question.png');
                })

                resposta.innerHTML = '';
                sorteiaDiamante();
                joga();
            }
        }else{
            alert('Jogue primeiro!');
        }
})
}

//variavel para parar o looping
let erro = false;

//variavel para ver se já jogou
let jogou = false;

//lógica do jogo
function joga (){
    tentativa.forEach((elemento, index) =>{

        const evento = () =>{
            if(erro){
                return
            }
    
            if(index == numeroSecreto){
                tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
                
                pontos += (parseInt(aposta.value) + 100);
                
                aposta.value = '';
                

                tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
    
                resposta.innerHTML = `Você acertou :)`

                tentativa.forEach((elemento) =>{
                    elemento.removeEventListener('click', (evento));
                })

                saldoNaTela.innerHTML = `Saldo: ${saldo}`;
                pontosNaTela.innerHTML = `Pontos: ${pontos}`;
                saldoRestante.innerHTML = `Saldo: ${saldo}`

                erro = true;

                if(erro == true){
                    jogou = true;
                }

            }else{
                console.log('Errou');
                erro = true;
    
                aposta.value = '';

                tentativa.forEach((elemento) =>{
                    elemento.removeEventListener('click', (evento));
                })
    
                tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
    
                resposta.innerHTML = `Você errou :(`

                saldoNaTela.innerHTML = `Saldo: ${saldo}`;
                pontosNaTela.innerHTML = `Pontos ${pontos}`;
                saldoRestante.innerHTML = `Saldo: ${saldo}`;

                if(erro == true){
                    jogou = true;
                }
            }
        }
        elemento.addEventListener('click', (evento));

        
    })
}

//sorteia um número aleatório
function sorteiaDiamante(){
    numeroSecreto = Math.floor(Math.random() * 12);
    console.log(numeroSecreto);
}


reiniciaJogo(); 
sorteiaDiamante();

