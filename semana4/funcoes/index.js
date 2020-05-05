/*const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

console.log(minhaFuncao(8))*/

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

/*let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];
const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));*/


/* 3. O código abaixo mostra uma função que recebe um array e devolve outro array.
Explique rapidamente o que ela faz e sugira um nome melhor para ela!
R. Criei uma array numero. resultado A soma 0 + primeiro índice, resultado B multiplica 1x primeiro
índice e assim sucessivamente*/

/*let arrayNumero = [1, 4, 6, 8, 10]

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
console.log(metodo(arrayNumero));*/


/* 4. Escreva as funções explicadas abaixo:

a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele.
Considere que 1 ano humano equivale a 7 anos de cachorro*/

function multiplica(idade) {
    
    let idadeHumana = idade * 7
    return idadeHumana
}

let idadeCachorro = multiplica(2)

console.log(idadeCachorro)

/* b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number),
o endereço (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique
todas as informações da pessoa em uma só mensagem com o template:*/



 


