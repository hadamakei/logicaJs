function triangulo(){
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResposta = document.getElementById("outResposta");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);
    
    if (ladoA == "" || isNaN(ladoA) || ladoB =="" || isNaN(ladoB) || ladoC == "" || isNaN(ladoC)){
        alert("Informe valor corretamente.")
        inLadoA.focus();
        return;
    }

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA){
        outResposta.textContent = "Os Lados não podem formar um triângulo";
        inLadoA.focus();
        return;
    }

    else if ( ladoA == ladoB  && ladoA == ladoC){
        outTipo.textContent = "Tipo: Equilátero";
    }

    else if (ladoA != ladoB && ladoA != ladoC  && ladoB != ladoC){
        outTipo.textContent = "Tipo: Escaleno";
    }

    else {
        outTipo.textContent = "Tipo: Isóceles";
    }

    outResposta.textContent = "Os lados podem formar um triângulo";

    /*var tipoEq = ladoA = ladoB = ladoC;
    var tipoIs =  ladoA = ladoB || ladoB = ladoC  || ladoC = ladoA ;
    var tipoEs = ladoA != ladoB != ladoC;*/
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", triangulo);