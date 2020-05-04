const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

console.log(minhaFuncao(8))

/* 1 a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
R. [] vazio
b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
R. [0, 1, 0, 1, 2, 3]
c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
R. (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]*/



/*2 a. Explicite quais são as saídas impressas no console
R. 0, 2 e undefined.
b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)
e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
R. Sim. dá tudo indefined.. E também porque não é Paulinha é Paula. O Darvas é o 0, o João é o 2
Paula é indefined.*/

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];
const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));


/* 3. O código abaixo mostra uma função que recebe um array e devolve outro array.
Explique rapidamente o que ela faz e sugira um nome melhor para ela!*/


let arrayString = [Bom, dia, noite, tarde]
let arrayNumero = [1, 4, 6, 8, 10]

function metodo(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}
console.log(arrayFinal)
