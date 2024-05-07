const botaoMenuFechado = document.querySelector('.botao__menu');
const botaoMenuAberto = document.querySelector('.menu-hambuguer--aberto');
const alerta = document.querySelector('.alerta');
const closer = document.querySelector('.close');
const menuLateral = document.querySelector('.aside');
const tentativa = document.querySelectorAll('.tentativa');

const saldo = 0;
let classe;

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


// sorteiaDiamante();

tentativa.forEach(elemento =>{
    elemento.addEventListener('click', () =>{
        if(classe == 'primeira'){
            
        }else{
            console.log('Teste');
        }
    })
})


function sorteiaDiamante(){
    let numeroSecreto = Math.floor(Math.random() * 12 + 1);
    switch (numeroSecreto) {
        case 1:
            classe = 'primeira'
            break;
        case 2:
            classe = 'segunda'
            break;
        case 3:
            classe = 'terceira'
            break;
        case 4:
            classe = 'quarta'
            break;
        case 5:
            classe = 'quinta'
            break;
        case 6:
            classe = 'sexta'
            break;
        case 7:
            classe = 'setima'
            break;
        case 8:
            classe = 'oitava'
            break;
        case 9:
            classe = 'nona'
            break;
        case 10:
            classe = 'decima'
            break;
        case 11:
            classe = 'decimaPrimeira'
            break;
        case 12:
            classe = 'decimaSegunda'
            break;
        default:
            break;
    }
}


