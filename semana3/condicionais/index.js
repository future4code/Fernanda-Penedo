/* 1. Leia o código. R. ele realiza o teste qual numero dividido por 2 dá zero e nao resta nada? Se for par = passou no teste
se for ímpar nao passou no TextDecoderStream.*/


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break;
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* 2a. Serve para colocar condicional de preço dependendo da fruta. Ex. se for Banana é 2.25
2b. Se for maçã o preço da fruta é R$ 2.25
2c. R$ 25,00
2d. o preço da Pêra seria R$ 5,00 e nao R$ 5.5*/


const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  } console.log(mensagem)
}

//console.log(mensagem)//

/*3. Considere um usuário que digita os números 3 e 4 respectivamente. 
Qual será a mensagem do terminal? Haverá algum erro? 
Dá erro  - uncaught syntaxerror:  invalid or unexpected token. erro de sintaxe.
Justifique usando os conceitos de bloco ou escopo.
R. dá erro porque o console.log está relacionado ao if pai no final da sentença, relacionado
a let mensagem que nao tem valor nenhum, na linha 44. Se for colocado na linha 41 estará relacionado
ao bloco if e else.*/

/* 4. a. Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem
decrescente. O que acontece com o seu programa se os 2 números forem iguais? 
(é só testar e colocar um comentário descrevendo o que aconteceu)
R. Se forem iguais aparecem os números um seguido do outro, exemplo 2 2 */

let numero001 = prompt("Digite o primeiro número")
let numero002 = prompt("Digite o segundo número")

let n1 = Number(numero001)
let n2 = Number(numero002)

if(n1 > n2) {
    console.log(n1, n2)
} else {
    console.log(n2, n1)
}

/*4.b. Adapte o programa para que o usuário digite 3 números.
Ainda os imprima na ordem decrescente. O que acontece com seu programa se os 3 números
forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
R. os numeros se forem iguais aparecem na sequencia um ao lado do outro 2 2 2*/

let numero01 = prompt("Digite o primeiro número")
let numero02 = prompt("Digite o segundo número")
let numero03 = prompt("Digite o terceiro número")

let n01 = Number(numero01)
let n02 = Number(numero02)
let n03 = Number(numero03)

if(n01 > n02 && n02 > n03) {
    console.log(n01, n02, n03)
}else {
    console.log(n03, n02, n01)
} if(n02 > n01 && n01 > n03) {
    console.log(n02, n01, n03)
}else {
    console.log(n03, n01, n02)
}
/* respostas do console (incompleto 4 b.):
Não passou no teste.
index.js:59 O preço da fruta  uva  é  R$  5
index.js:101 34 1
index.js:121 125 23 80
index.js:125 125 80 238*/