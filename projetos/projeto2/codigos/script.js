function comparar(){

    const num1 = document.getElementById("ex1-num1").value;
    const num2 = document.getElementById("ex1-num2").value;
    let res;
    const respostaHTML = document.getElementById("resposta1");

    if(num1 >= num2){
        res = num1 - num2;
    }
    else{
        res = num2 - num1;
    }

    if(0 > res){
        res = -res
    }

    respostaHTML.innerHTML = res;


}

function par(){

    const num = document.getElementById("ex2-num1").value;
    const respostaHTML = document.getElementById("resposta2");

    if(num % 2 == 0){
        respostaHTML.innerHTML = "Par";
    }
    else{
        respostaHTML.innerHTML = "Ímpar";
    }

}

function multiplo(){

    const num1 = document.getElementById("ex3-num1").value;
    const num2 = document.getElementById("ex3-num2").value;
    let res;
    const respostaHTML = document.getElementById("resposta3");


    if(num1 % num2 == 0){
        respostaHTML.innerHTML = "Multiplo";
    }
    else{
        respostaHTML.innerHTML = "Não multiplo";
    }



}

function temperatura(){

    const num = document.getElementById("ex4-num1").value;
    const respostaHTML = document.getElementById("resposta4");

    let res;

    res = (num * 9/5) + 32;

    respostaHTML.innerHTML = res + "°F";

}

function area(){

    const num1 = document.getElementById("ex5-num1").value;
    const num2 = document.getElementById("ex5-num2").value;
    const respostaHTML = document.getElementById("resposta5");

    let res;

    res = num1 * num2;

    respostaHTML.innerHTML = res;

}

function media(){

    const num1 = document.getElementById("ex6-num1").value;
    const num2 = document.getElementById("ex6-num2").value;
    const respostaHTML = document.getElementById("resposta6");

    let res;
    let imparPar;
    let acimaMedeia;

    res = parseInt(num1) + parseInt(num2);
    res = res / 2;
    imparPar = Math.floor(res) % 2 == 0 ? "par" : "ímpar";
    acimaMedeia = res > 6 ? "acima" : "abaixo";

    respostaHTML.innerHTML = "Sua nota é " + res + " que é " + imparPar + " e " + acimaMedeia + " da média";

}

function imc(){

    const peso = document.getElementById("ex7-num1").value;
    const altura = document.getElementById("ex7-num2").value;
    const respostaHTML = document.getElementById("resposta7");

    let res;

    res = peso / (altura * altura);

    respostaHTML.innerHTML = res.toFixed(2);

}

function bissexto(){
    const ano = document.getElementById("ex8-num1").value;
    const respostaHTML = document.getElementById("resposta8");

    let res;

    res = ano % 4 == 0 ? "Bissexto" : "Não é bissexto";

    respostaHTML.innerHTML = res;

}

function dolar(){
    const valor = document.getElementById("ex9-num1").value;
    const taxa = document.getElementById("ex9-num2").value;
    const respostaHTML = document.getElementById("resposta9");

    let res;
    res = (valor - taxa) / 5.50;

    respostaHTML.innerHTML = "US$" + res.toFixed(2);
}


