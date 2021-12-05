function valorTotal(){
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValorTotal = document.getElementById("outValorTotal");

    var inValor = Number(inValor.value);
    var inTempo = Number(inTempo.value);

    //var tempo = 15 / inValor;
    var precoTotal =  Math.ceil(inTempo/15) * inValor;

    outValorTotal.textContent = "Valor a pagar R$: " + precoTotal.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", valorTotal);