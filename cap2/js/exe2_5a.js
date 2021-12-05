function promocao(){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outPromo = document.getElementById("outPromo");
    var outPreco = document.getElementById("outPreco");

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    var precoPromo = Math.floor(preco * 2)

    outPromo.textContent = "Promoção de " + medicamento;
    outPreco.textContent = "Leve duas unidades por apenas " + precoPromo.toFixed(2);
}

 var btPromo = document.getElementById("btPromo");
 btPromo.addEventListener("click", promocao);


