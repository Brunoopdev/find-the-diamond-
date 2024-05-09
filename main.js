const botaoMenuFechado = document.querySelector('.botao__menu');
const botaoMenuAberto = document.querySelector('.menu-hambuguer--aberto');
const alerta = document.querySelector('.alerta');
const closer = document.querySelector('.close');
const menuLateral = document.querySelector('.aside');
const tentativa = document.querySelectorAll('.tentativa');

const saldo = 0;
let numeroSecreto;

sorteiaDiamante();

document.addEventListener('DOMContentLoaded', () =>{
    alerta.classList.remove('hidden');
    document.querySelector('.jogoCompleto').classList.add('hidden');
    document.querySelector('.footer').classList.add('hidden');
})

closer.addEventListener('click', () =>{
    alerta.classList.add('hidden');
    document.querySelector('.jogoCompleto').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
})

botaoMenuFechado.addEventListener('click', () =>{
    menuLateral.classList.remove('hidden');
    document.querySelector('.jogoCompleto').classList.add('hidden');
})

botaoMenuAberto.addEventListener('click', () =>{
    menuLateral.classList.add('hidden');
    document.querySelector('.jogoCompleto').classList.remove('hidden');
})




tentativa.forEach((elemento, index) =>{
    elemento.addEventListener('click', () =>{
        if(index == numeroSecreto){
            tentativa[numeroSecreto].setAttribute('src', './img/diamante_azul.png');
        }else{
            alert('ERROU');
        }
    })
})


function sorteiaDiamante(){
    numeroSecreto = Math.floor(Math.random() * 12 + 1);
}


