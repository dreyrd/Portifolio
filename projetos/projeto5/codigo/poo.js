class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    buzinar() {
        console.log("bii bii");
    }

    get ano(){
        return this._ano
    }

    set ano(valor){
        this._ano = valor
    }

}

class Livro{
    #titulo
    #autor
    #anoPublicacao

    constructor(titulo, autor, anoPublicacao){
        this.#titulo = titulo
        this.#autor = autor
        this.#anoPublicacao = anoPublicacao
    }

    resumo(){
        console.log('Titulo: ' + this.titulo)
        console.log('Autor: ' + this.autor)
        console.log('Ano: ' + this.anoPublicacao)
    }

    get anoPublicacao(){
        return this.#anoPublicacao
    }

    set anoPublicacao(valor){
        this.#anoPublicacao = valor
    }

    get titulo(){
        return this.#titulo
    }

    set titulo(valor){
        this.#titulo = valor
    }

    get autor(){
        return this.#autor
    }

    set autor(valor){
        this.#autor = valor
    }
    


}


class ContaBancaria{
    #saldo
    agencia
    conta
    constructor(agencia, conta, saldo){
        this.agencia = agencia
        this.conta = conta
        this.#saldo = saldo
    }

    get saldo(){
        return this.#saldo
    }

    set saldo(valor){
        if(valor > 0){
            this.#saldo = valor
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor
        }
    }



}

class Funcionario{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        super(nome, salario)
        this.departamento = departamento
    }

    mostrar(){
        console.log(this.nome)
        console.log(this.salario)
        console.log(this.departamento)
    }

}



meuCarro = new Carro('Chevrolet', 'Classic', 2008);

meuCarro.buzinar();


meuLivro = new Livro('Star Wars', 'George Lucas', 1977);

meuLivro.resumo();

meuLivro.autor = 'Andrey';

console.log(meuLivro.autor)


conta = new ContaBancaria('0001', '1234567', 20000);

conta.sacar(1000);

console.log(conta.saldo);

conta.depositar(10000);

console.log(conta.saldo);

conta.sacar(30000);

console.log(conta.saldo)


gerente = new Gerente('Andrey', 20000, 'TI');

gerente.mostrar();