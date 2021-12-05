function parquimetro(){
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);
    var tempo = Number(outTempo.value);
    var troco = Number(outTroco.value);

    if (valor == "" || isNaN(valor)){
        alert("Informe valor corretamente.")
        inValor.focus();
        return;
    }

    if (valor < 1){
        alert("Valor Insuficiente");
        inValor.focus();
        return;
    }

    else if (valor >= 1 && valor < 1.75){
        outTempo.textContent = "Tempo: 30 min";
        troco = valor - 1; 
    } 
    else if (valor >= 1.75 && valor < 3){
        outTempo.textContent = "Tempo: 60 min";
        troco = valor - 1.75;
    }
    else {
        outTempo.textContent = "Tempo: 120 min";
        troco = valor - 3;
    }

    outTroco.textContent = "Troco R$: " + troco.toFixed(2); 


}

var btDepositar = document.getElementById("btDepositar");
btDepositar.addEventListener("click", parquimetro);