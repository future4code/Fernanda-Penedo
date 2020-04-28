const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

/* Quer dizer que a. é false. True e false = false. False e contrario de false (ou seja true)
é igual a false*/ 

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

/* Quer dizer que b. é false. false ou true = true. True e contrario bool3 (neste caso
    contrario de true, false) Seria true e false = false.*/

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

/* Quer dizer que c. é true. Oposto do resultado (true) e true, é true, entao resultado
é true.*/

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

/* quer dizer que d. é false. resultado e (false ou false = false) = false e false
igual a false*/

console.log("e. ", typeof resultado)
/* permite ver o que resultado é uma variável booleana. Informa que a sentenca acima "resultado
= a alguma coisa && ou || é uma variável booleana"*/


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)


/*RESPOSTAS ABAIXO REFERENTE INTERPRETAÇÃO DE CÓDIGO```jsx
let array
console.log('I. ', array)
Faltou declarar o que terá em array para ser procurado. Seria item I

array = null
console.log('II. ', array)
Nao tem valor associável a uma variável para ser encontrado em array. Seria item II.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
Mostra o tamanho do array que tem 11 objetos. No item III

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
IV. 3 e 4
Mostra o index que começa no zero. 3 e (3+1 =4)

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
Mostra a sentenca i+1 = 19. Mostra 9, porque é o sétimo item

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
Mostra o 2 segundo elemento que é 4. Entao: 1 -1 = 0 = 3. 


i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)


a. O que é `array` e como se declara em `JS`?
Array é um vetor que consegue guardar e permite acessar estes dados, podendo ser
mais de uma variável ao mesmo tempo.

b. Qual o index inicial de um `array`?
Ë o item 0.

c. Como se determinar o tamanho do `array`?
Com .length

d. Indique todas as mensagens impressas no console.
III.  11
index.js:38 IV.  3  e  4
index.js:42 V.  19  e  9
index.js:46 VI.  3
index.js:51 VII.  1
*/

//EXERCICIO ESCRITA DE CODIGO 1//

let Kelvin = (77 - 32) * 5 / 9 + 273.15
console.log('1a.',Kelvin + "K")

let GrausFarenheit = (80) * 9 / 5 + 32
console.log("1b. ",GrausFarenheit + "°F")


let GrausFarenheit1 = (30) * 9 / 5 + 32
let Kelvin1 = 30 + 273.15
console.log("1c. ",GrausFarenheit1 + "°F", " e ", Kelvin1 + "K")

let Kelvin2 = prompt ("Insira uma temperatura em Celsius")
let Kelvin3 = 273.15 
const valorKelvin = Number(Kelvin2) + Number(Kelvin3)
console.log("1d. ", valorKelvin + "K") 

//EXERCICIO ESCRITA DE CÓDIGO 2//

const nome = prompt ("Qual seu primeiro nome?")
const sobrenome = prompt("Qual seu sobrenome?")
console.log(nome + " " + sobrenome)

let apelido = prompt("Qual seu apelido?")
console.log(apelido)

const endereco = prompt ("Qual seu endereco?")
console.log(endereco)

let idade = prompt ("quantos anos você tem?") 
console.log(idade)

let idadeMae = prompt("Quantos anos tem sua mãe?")
console.log(idadeMae)


//RESPOSTAS ESCRITA DE CÓDIGO EXERCÍCIO 3//

let kw = 0.05 * 280
console.log("3a. ",kw + "R$")

let kwValorCheio = 0.05 * 280
let kwDesconto = kwValorCheio * 0.15

console.log("3b. ",kwValorCheio - kwDesconto)


/* RESPOSTA DE TODOS OS EXERCÍCIOS
a.  false
index.js:12 b.  false
index.js:18 c.  true
index.js:24 d.  false
index.js:29 e.  boolean
index.js:35 III.  11
index.js:38 IV.  3  e  4
index.js:42 V.  19  e  9
index.js:46 VI.  3
index.js:51 VII.  1
index.js:110 1a. 298.15K
index.js:113 1b.  176°F
index.js:118 1c.  86°F  e  303.15K
index.js:123 1d.  283.15K
index.js:129 Fernanda Penedo
index.js:132 Tata
index.js:135 Rua das Flores, 1000
index.js:138 37
index.js:141 62
index.js:147 3a.  14R$
index.js:152 3b.  11.9
*/





