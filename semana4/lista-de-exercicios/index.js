
/* Exercícios Interpretação de Códigos
1. A função quer que o informado na cotação do dolar, retorne em reais o valor do dolar vezes
cotação informada.
A const meuDinheiro está chamando a função dando os parâmetros para que a função ocorra.
Neste caso foi colocado o valor de 100. Entao o console,log imprime 100 vezes o valor da cotação 
do dólar*/


/* Exercícios Interpretação de Códigos
2. A função quer o retorno do valor investido, ata isso ela dá quais serão os parâemtros,
tipo de investimento e valor. 
Colocar numa variável vaor após o investimento.
Como são muitos investimentos então, é usado switch com diversos tipos de investimentos
que consta valor vezes un muero que será multiplicado pelo tipo de investimento.
foi atribuído uma nova variável para que o console.log imprima novo montante, para isso
pegou tipo de investimento que foi Ações, o valor de 150 multiplicado por 1.1 que dá 165.
O segundo montante retorma "tipo de investimento incorreto, porque não tem Tesouro Direto*/

 
/* Exercícios Interpretação de Códigos
3. Há 3 arrays, sendo array numeros com vários números, e array 1 e array 2 vazios. O for diz:
pegue numero do array numeros se este numero divisível por 2 dá igual a 0, ou seja um numero par e
adicione ao array 1;
caso não seja isso, se nao, adicione ao array 2, ou seja, adicione os numeros impares no array 2.
Será impresso no console, "Quantidade total de numeros, ou seja o tamanho do array numeros.
No outro console, será impresso o tamanho do array1, ou seja, com quantos numeros pares foram para o array1
e no outro console, o tamanho do array2, como ficou com os numeros ímpares*/

/*4. Há um array com diversos numeros. Na variável numero1 está sendo atribuído infinity, e na 
variável numero2 está sendo atribuído o zero. Pegue o numero do array numeros. Se este numero for
menor que infinity, é atribuído este valor ao numero1.
Se este numero for maior que 0, é atribuido ao numero 2 o maior numero.
Será impresso numero1 = -10 e numero2 = 1590. O menor e o maior numero do array numeros*/

/* EXERCICIOS DE LOGICA DE PROGRAMAÇÃO

1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
R. for, for of e filter.*/


const numeros = [25, 12, 55, 125, 1, 25, 600];

for(let i = 0; i < 7; i++) {
  const elemento = numeros[i]
  console.log(elemento)
}


const numeros1 = [25, 12, 55, 125, 1, 25, 600];

for(let numero of numeros1) {
  console.log(numero)
}



const numeros2 = [25, 12, 55, 125, 1, 25, 600];

let number = numeros.filter((numero, idex, array) => {
           return array
           console.log(number);
}) 

 console.log(number);



/*2. Para este exercício considere as seguintes variáveis:

    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3 
    ```

    Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

    a) `booleano1 && booleano2 && !booleano4`
    R. false e true = false

    b) `(booleano1 && booleano2) || !booleano3`
    R. false ou false = false

    c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
    R. True e true = true

    d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
    R. true ou true = true

    e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
    R. false e true = false ou true e true = true e true = true.
    false ou true = true

 */


/*5 Faça um programa que, dados dois números,

i. indique qual é o maior,

ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)*/

const numeros3 = [4, 8];
 let numMaior = numeros3 [0];

for(let numero of numeros3) {
  if (numero > numMaior) {
    numMaior = numero
  }
}
 
console.log(numMaior)



let arr = [4, 8];
let max = arr.reduce(function(a, b) {
  if(a % b === 0);

  
  return Math.max(a, b);
  console.log(a + "divisível por" + b) 
});

console.log(max);
console.log(arr);


let num = [4, 8];
let abs = num.reduce(function(a, b) {
  if(a % b === 0);

  return Math.abs(a - b);
  });

console.log(abs);



let aNumeros = (array) =>{
  if()

}
function nomeDaFuncao (array){

}

