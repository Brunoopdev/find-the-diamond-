const botaoMenuFechado = document.querySelector('.botao__menu');
const botaoMenuAberto = document.querySelector('.menu-hambuguer--aberto');
const alerta = document.querySelector('.alerta');
const closer = document.querySelector('.close');
const menuLateral = document.querySelector('.aside');
const tentativa = document.querySelectorAll('.tentativa');
const jogo = document.querySelector('.jogo');
const resposta = document.querySelector('.resposta');

let saldo = 100;
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



let erro = false;

function joga (){
    tentativa.forEach((elemento, index) =>{

        const evento = () =>{
            if(erro){
                return
            }
    
            if(index == numeroSecreto){
                tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
                saldo += 100;
                console.log(saldo);
                
                tentativa.forEach((elemento) =>{
                    elemento.removeEventListener('click', (evento));
                })
    
                tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
    
                resposta.innerHTML = `Você acertou :)`
            }else{
                console.log('Errou');
                erro = true;
    
                tentativa.forEach((elemento) =>{
                    elemento.removeEventListener('click', (evento));
                })
    
                tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
    
                resposta.innerHTML = `Você errou :(`
            }
        }
    
        elemento.addEventListener('click', (evento));
    })
}


function sorteiaDiamante(){
    numeroSecreto = Math.floor(Math.random() * 12);
}

joga();



