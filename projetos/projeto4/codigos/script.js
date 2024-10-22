function retornarTexto(){
    return 'Ola mundo';
}

function dobro(num){
    return num * 2;
}

let funcionario = {
    nome: 'João',
    salario: 1200,
    rendimentoAnual: function(){
        return this.salario * 12;
    }
}



function celsiusParaFahrenheit(cels){
    return (cels * 9/5) + 32;
}

const fatorial = (num) => {
    let res = 1;
    for(let i = 1; i <= num; i++){
        res *= i;
    }
    return res;
}

retornarTexto();
dobro(5);
funcionario.rendimentoAnual();
celsiusParaFahrenheit(30);
fatorial(5);