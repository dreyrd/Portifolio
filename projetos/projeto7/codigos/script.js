const qtdeHtml = document.getElementById('qtde-html');
const qtdeCss = document.getElementById('qtde-css');
const qtdeJs = document.getElementById('qtde-js');

const precoTotal = document.getElementById('preco-total');

let html = 0;
let css = 0;
let js = 0;

let total = 0.0;
precoTotal.innerText = total.toFixed(2);

function aumentarHtml(){
    html++;
    qtdeHtml.innerText = html
    total += 23.78;
    precoTotal.innerText = total.toFixed(2);
}

function diminuirHtml(){
    if(html > 0){
        html--;
        qtdeHtml.innerText = html
        total -= 23.78;
        precoTotal.innerText = total.toFixed(2);
    }
}

function aumentarCss(){
    css++;
    qtdeCss.innerText = css
    total += 25.32;
    precoTotal.innerText = total.toFixed(2);
}

function diminuirCss(){
    if(css> 0){
        css--;
        qtdeCss.innerText = css
        total -= 25.32
        precoTotal.innerText = total.toFixed(2);
    }
}

function aumentarJs(){
    js++;
    qtdeJs.innerText = js
    total += 33.00;
    precoTotal.innerText = total.toFixed(2);
}

function diminuirJs(){
    if(js > 0){
        js--;
        qtdeJs.innerText = js
        total -= 33.00;
        precoTotal.innerText = total.toFixed(2);
    }
}

function pagar(){
    js = 0;
    html = 0;
    css = 0;

    total = 0;

    qtdeHtml.innerText = html;
    qtdeCss.innerText = css;
    qtdeJs.innerText = js;

    precoTotal.innerText = total.toFixed(2);
}