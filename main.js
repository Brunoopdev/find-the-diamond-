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

//pontos disponiveis para aposta
let pontos = 100;

//pontos apostados
let valorApostado = 0;

//numero sorteado
let numeroSecreto;

//quantidadeDeJogadas
let tentativas = 0;

//variavel para parar o looping
let erro = false;

//variavel para ver se já jogou
let jogou = false;

sorteiaDiamante();

document.addEventListener('DOMContentLoaded', () =>{
    alerta.classList.remove('hidden');
    document.querySelector('.jogoCompleto').classList.add('hidden');
})

closer.addEventListener('click', () =>{
    alerta.classList.add('hidden');
    document.querySelector('.alerta__container').classList.add('hidden');
    document.querySelector('.jogoCompleto').classList.remove('hidden');
})

botaoMenuFechado.addEventListener('click', () =>{
    menuLateral.classList.remove('hidden');
    // document.querySelector('.jogoCompleto').classList.add('hidden');
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
    }

    saldoNaTela.innerHTML = `Saldo: ${saldo}`;
    pontosNaTela.innerHTML = `Pontos: ${pontos}`;
    saldoRestante.innerHTML = `<span class="text">Saldo:</span> ${saldo}`;
})

botaoAposta.addEventListener('click', () =>{
    if(saldo < parseInt(aposta.value)){
        alert('Você não tem esse saldo para apostar!');
        aposta.value = '';
    }else{
        if(aposta.value == '' || aposta.value == NaN || aposta.value == 0){
            alert('Insira um valor válido!');
            aposta.value = '';
        }else{
            valorApostado += parseInt(aposta.value);
            saldo -= valorApostado;
            saldoNaTela.innerHTML = `Saldo: ${saldo}`;
            saldoRestante.innerHTML = `<span class="text">Saldo:</span> ${saldo}`;
            apostaFeita.innerHTML = `<span class="text">Aposta:</span> ${valorApostado}`;

            console.log(valorApostado);
        }
    }
})


//botao que reinicia e inicia o jogo
function reiniciaJogo(){
    
        botaoReinicia.addEventListener('click', () =>{
        if(jogou && tentativas >= 1){
            if(valorApostado <= 0){
                alert('Aposte algum valor!');
            }else{
                tentativa.forEach(elemento =>{
                    elemento.setAttribute('src', './img/question.png');
                })

                erro = false;
                jogou = false;

                sorteiaDiamante();
                joga();
            }
        }else{
            if(valorApostado <= 0){
                alert('Aposte algum valor!');
            }else{

                tentativa.forEach(elemento =>{
                    elemento.setAttribute('src', './img/question.png');
                })

                erro = false;
                jogou = false;

                sorteiaDiamante();
                joga();


                document.querySelector('.play').setAttribute('src', './img/reload.png');
                tentativas ++;
            }
        }
})
}



//lógica do jogo
function joga (){
    tentativa.forEach((elemento, index) =>{

        const evento = () =>{
            if(erro){
                return
            }
    
            if(index == numeroSecreto){
                tentativa[numeroSecreto].setAttribute('src', './img/python.png');
                
                pontos += (parseInt(valorApostado) + 100);
                
                aposta.value = '';
                

                tentativa[numeroSecreto].setAttribute('src', './img/python.png');
    
                resposta.innerHTML = `Você acertou! Vai programar em python!`

                tentativa.forEach((elemento) =>{
                    elemento.removeEventListener('click', (evento));
                })

                saldoNaTela.innerHTML = `Saldo: ${saldo}`;
                pontosNaTela.innerHTML = `Pontos: ${pontos}`;
                saldoRestante.innerHTML = `<span class="text">Saldo:</span> ${saldo}`;

                erro = true;

                if(erro == true){
                    jogou = true;
                }

                valorApostado = 0;

            }else{
                console.log('Errou');
                erro = true;
    
                aposta.value = '';

                tentativa.forEach((elemento) =>{
                    elemento.removeEventListener('click', (evento));
                })
    
                tentativa[numeroSecreto].setAttribute('src', './img/python.png');
    
                resposta.innerHTML = `Você errou! Vai programar em Assembly!`

                saldoNaTela.innerHTML = `Saldo: ${saldo}`;
                pontosNaTela.innerHTML = `Pontos ${pontos}`;
                saldoRestante.innerHTML = `<span class="text">Saldo:</span> ${saldo}`;
                apostaFeita.innerHTML = `<span class="text">Aposta:</span> ${0}`

                if(erro == true){
                    jogou = true;
                }

                valorApostado = 0;
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

