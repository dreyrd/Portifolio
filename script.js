let menu = document.getElementById('menu');
let filtro = document.getElementById('overlay');

function abrirMenu(){
    menu.style.transform = 'translateX(0)';
    filtro.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function fecharMenu(){
    menu.style.transform = 'translateX(-100%)';
    filtro.style.display = 'none';
    document.body.style.overflow = 'visible';
}

function navegar(rota){
    window.location.href = rota;
}