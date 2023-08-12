//1- variaveis


//exercicio 1: IMC

let peso = 74
let altura = 1.75
let imc = peso / (altura*altura)
console.log(imc)


//EXERCICIO 2: conncatenação

let saudacao ="OLÁ, ";
let nome = "Maria";
let mensagem = saudacao + nome + "! Bem vinda!!!";
console.log(mensagem)


//funções

function somar(numero1, numero2){
    return numero1 + numero2
}

let resultado = somar(5,3)
console.log(resultado)


//função de verificar sinal

function verificarsinal(numero){
    if (numero > 0){
        return "positivo";
    } else if (numero < 0) {
        return "negativo"
    } else {
        return "zero";  
    }
    }

    let numero = 10
    let sinal = verificarsinal(numero)
    console.log (`o numero é ${sinal}`);


    //array

    function encontrarmaiorvalor(array) {
        let maior = array [0];
        for ( let i = 1; 1 < array.length;i++){
        if (array[i] > maior){
            maior = array[i];
        }
      }
      console.log (maior)
    }
    let chamada = encontrarmaiorvalor[10,2,32,3,100]


    //quantidade de digitos

    function contardigitos(numero) {
        return numero.tostring().length
    }
    let numero = 12345
    let quantiddadededigitos = contardigitos(numero)
    console.log (quantiddadededigitos)
