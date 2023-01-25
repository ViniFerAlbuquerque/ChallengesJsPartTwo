/*
    Escreva um programa onde, você chame uma função enviando um número, a função deve imprimir na tela os
    números de 1 até o número que você enviou
*/

const number = (numbers) => {

    for(let i = 1; i <= numbers; i++)
        console.log(i)

}

number(6)