
function dadosDespesa() {
    event.preventDefault


    let valor = document.getElementById("valor").value
    let descricao = document.getElementById("descricao").value
    let tipoDespesa = document.getElementById("tipoDespesa").value

    dadosInseridos(valor, descricao, tipoDespesa)
}
function dadosInseridos(valorInserido, descricaoInserida, despesaInserida) {
    
   let dadosGerais = {
        valor: [],
        descricao: [],
        tipoDespesa: [],
   }


    dadosGerais.valor.push(valorInserido)
    dadosGerais.descricao.push(descricaoInserida)
    dadosGerais.tipoDespesa.push(despesaInserida)

console.log(valorInserido, descricaoInserida, despesaInserida);

    }

