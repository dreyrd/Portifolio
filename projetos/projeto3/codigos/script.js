let contador = 0;


function mudarTexto(novoTexto){
    const texto = document.getElementById('texto-para-mudar');
    texto.innerText = novoTexto;
}

function clique(){
    const texto = document.getElementById('qtde-cliques')
    contador++;
    texto.innerText = contador;
}

function esconder(){
    const texto = document.getElementById('texto-esconder');
    texto.style.display = 'none';
}

function mostrar(){
    const texto = document.getElementById('texto-esconder');
    texto.style.display = 'block';
}