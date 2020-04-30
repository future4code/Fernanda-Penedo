/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta = comprarCarta(); 
const cartaComputador = comprarCarta();
let cartaUs = []
let cartaUsV = []
let cartaComp = []
let cartaCompV = []


 console.log("Bem vindo ao jogo de Blackjack!")

 if(confirm("Quer iniciar uma nova rodada?")) {
	for(let i = 0; i < 2; i++) {
      cartaUs.push(carta.texto)
      cartaUsV.push(carta.valor)
      cartaComp.push(cartaComputador.texto)
      cartaComp.push(cartaComputador.valor) 
   }

   console.log(carta.texto) 
   console.log(carta.valor) 

} else {
   console.log("O jogo acabou!!!")
}



// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)