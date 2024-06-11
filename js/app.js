function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value);
    
    if (quantidadeCompra > 0){
        if(tipo == 'pista'){
            comprarPista(quantidadeCompra);
            document.getElementById('qtd').value = "0";
        } else if(tipo == 'superior'){
            comprarSuperior(quantidadeCompra);
            document.getElementById('qtd').value = "0";
        } else {
            comprarInferior(quantidadeCompra);
            document.getElementById('qtd').value = "0";
        }
    } else{
        alert('A quantidade a ser comprada deve ser ao menos 1!');
    }

}

function comprarPista(quantidadeCompra) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (quantidadeCompra > quantidadePista) {
        alert('Quantidade Indisponível para Pista');
    } else {
        quantidadePista = quantidadePista - quantidadeCompra;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra Efetuada');
    }

}

function comprarSuperior(quantidadeCompra) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (quantidadeCompra > quantidadeSuperior) {
        alert('Quantidade Indisponível para Cadeira Superior');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeCompra;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra Efetuada');
    }

}

function comprarInferior(quantidadeCompra) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (quantidadeCompra > quantidadeInferior) {
        alert('Quantidade Indisponível para Cadeira Inferior');
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeCompra;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra Efetuada');
    }

}