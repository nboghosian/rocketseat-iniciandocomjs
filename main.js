function helloWorld(){
    alert('Hello world')
}

function declaraVariavel(){
    let num = Number(prompt('Insira o valor:'))
    return num
}

function somaDuasVariaveis(){
    let num1 = declaraVariavel()
    let num2 = declaraVariavel()
    let soma = num1 + num2
    alert(`O resultado da soma é ${soma}`)
}

function subtraiDuasVariaveis(){
    let num1 = declaraVariavel()
    let num2 = declaraVariavel()
    let sub = num1 - num2
    alert(`O resultado da subtração é ${sub}`)
}

function divideDuasVariaveis(){
    let num1 = declaraVariavel()
    let num2 = declaraVariavel()
    let div = num1 / num2
    alert(`O resultado da divisão é ${div}`)
}

function multiplicaDuasVariaveis(){
    let num1 = declaraVariavel()
    let num2 = declaraVariavel()
    let multi = num1 * num2
    alert(`O resultado da multiplicação é ${multi}`)
}
function verificaPar(){
    let num1 = declaraVariavel()
    let verifica = num1 % 2
    if(verifica == 0){
        alert('É um número par')
    } else{
        alert('É um número ímpar')
    }
}
//NaN not a number
function verificaNumero(){
    let variavel = prompt('(Verifica número) Insira o valor desejado:')
    if(!isNaN(variavel)){
        alert('É um numero')
    } else{
        alert('Não é um numero')
    }
}

function verificaString(){
    let variavel = prompt('(Verifica string) Insira o valor desejado:')
    if(isNaN(variavel)){
        alert('É ums string')
    } else{
        alert('Não é uma string')
    }
}
function verificaBooleano(){
    let variavel = prompt('(Verifica booleano) Insira o valor desejado:')
    if(variavel == 'true' || variavel == 'false'){
        alert('É booleano')
    } else{
        alert('Não é booleano')
    }
}

declaraDuasVariaveis()
verificaNumero()
verificaString()
verificaBooleano()
somaDuasVariaveis()
subtraiDuasVariaveis()
multiplicaDuasVariaveis()
divideDuasVariaveis()
verificaPar()