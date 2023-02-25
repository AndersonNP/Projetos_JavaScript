var contar = (valor) => {
    var tagContagem = document.getElementById("contagem");

    var novoValor = parseInt(tagContagem.innerHTML) + valor;

    tagContagem.innerHTML = novoValor;
    
}

var resetar = () => {
    var tagContagem = document.getElementById("contagem");

    tagContagem.innerHTML = 0;
}