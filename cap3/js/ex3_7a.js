function parOuImpar(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    if (numero % 2 == 0){
        outResposta.textContent =" O número " + numero + " é par.";
    } 
    else {
        outResposta.textContent = "O número " + numero + "é ímpar";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", parOuImpar);