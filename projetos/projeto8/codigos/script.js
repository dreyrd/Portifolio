const input = document.getElementById('qtde-prato');
const pratosSelect = document.getElementById('pratos');
const precoTotalSpan = document.getElementById('resultado');

input.value = 1;

input.addEventListener('input', function() {
    if (this.value < 1) {
        this.value = '';
    }
});

function calcular(){
    if (input.value != ''){
        const precoUnitario = parseFloat(pratosSelect.value);
        const precoTotal = precoUnitario * parseFloat(input.value);
        precoTotalSpan.textContent = precoTotal.toFixed(2);
    }
    else{
        precoTotalSpan.textContent = 'Digite uma quantidade válida';
    }
    
}