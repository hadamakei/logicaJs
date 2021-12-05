function promocao(){
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromo = document.getElementById("outPromo");
    var outValorUni = document.getElementById("outValorUni");

    var inProduto = inProduto.value;
    var inPreco = Number(inPreco.value).toFixed(2);

    var precoTotal = inPreco * 2.5;
    var valorUni = inPreco / 2;

    outPromo.textContent = inProduto + " - Promoção leve 3 por " + precoTotal;
    outValorUni.textContent = "O 3º produto custa apenas R$: " + valorUni.toFixed(2);

}

var btPromo = document.getElementById("btPromocao");
btPromocao.addEventListener("click", promocao);