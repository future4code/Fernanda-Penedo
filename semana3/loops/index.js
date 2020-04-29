
/*1. R. 105. Mostra que temos uma condição de rodar este código até um limite menor que 15
i começa no zero, e é somado 1 toda vez que percorre. O resultado é somar 0 + ao numero da qauntidades
de vezes que percorreu. Por exemplo: 0 + 1 = 1, percorreu 1 x, depois percorreu 2x, entao 1+2 = 3. 
Percorreu 3x, então 3+3 = 6, e assim sucessivamente até chegar na 14 vez e somar o que tinha mais 14.
estou adicionando a sum o valor de i. se i estiver no 14, adiciono 14 ao valor que está em sum*/

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

/*2a. Leia o comando abaixo a. O que o comando `.push` faz?
Ele diz para pegar na lista array um item que dividido resta 5, e que não sobra, sobra 0.
O push insere os dados de item a novaLista array.

b. Qual o valor impresso no console?
R. [10, 15, 25, 30]. Ou seja números divisíveis por 5.

c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
// Se fosse 3 em numero o resultado seria: [12, 15, 18, 21, 27, 30] - numeros que se divididos restam 3.
// Se fosse 4 em numero o resultado seria:[12] o unico numero dividido que dá resto 4*/

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)


/*Desafio: qual seria o resultado se o usuário usasse o numero 4.
R. Aparecem 4 linhas com quatro 0. O mesmo seria se fosse 3, apareceria 3 linhas com três 0.
O código diz para retornar linha + quantidade de zeros de acordo com as linhas.

Respostas: 105
index.js:33 [12]
index.js:48   0
index.js:48   00
index.js:48   000
index.js:48   0000*/

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = "  "
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"

  }
  console.log(linha)
  quantidadeAtual++
}

/* 3. escrita de código
**Exercícios de escrita de código**

EXERCÍCIO 3

Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') 
que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa
individualmente.

a. Escreva um programa que devolva o maior e o menor números contidos no array original
R. maior é 130 e o menor 21

b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
R. [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]  length: 12
__proto__: Array(0)

c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

Exemplos do que o código tem que fazer em cada item:

Respostas 3.a e 3b. 
O maior é 130 e o menor 21
index.js:107 (12) [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]*/


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 

let vMenor = array[0];
let vMaior = array[0];

for(let busca of array) {
    if (busca > vMaior) {
        vMaior = busca
    }
    if (busca < vMenor) {
        vMenor = busca
    }
  }
  console.log("O maior é " + vMaior + " e o menor " + vMenor)

// 3.b//

const array1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
let vdividido = []

for(let numero of array1) {
  vdividido.push(numero / 10)
}
console.log(vdividido)