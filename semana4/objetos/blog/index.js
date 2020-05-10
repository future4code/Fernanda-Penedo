function inserirDadosBotao() {
    event.preventDefault()

let autor = document.getElementById('autor').value;
let titulo = document.getElementById('titulo').value;
let conteudoBlog = document.getElementById('conteudoBlog').value;

dadosCompilados(autor, titulo, conteudoBlog)
}

function dadosCompilados(autorComp, tituloComp, conteudoComp) {

    let dadosGerais = {
        autor: [],
        titulo: [],
        conteudoBlog: [],
    }
    
dadosGerais.autor.push(autorComp)
dadosGerais.titulo.push(tituloComp)
dadosGerais.conteudoBlog.push(conteudoComp)

console.log(autorComp, tituloComp, conteudoComp);


document.getElementById()
}


