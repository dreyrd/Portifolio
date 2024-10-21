document.querySelectorAll('.opcoes-imagem').forEach(img => {

    img.addEventListener('click', () => {
        const imgAmostra = document.getElementById('imagem-atual');
        const imgTroca = img.src;

        imgAmostra.src = imgTroca;

    })

})
