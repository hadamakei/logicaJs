function verificaVelocidade(){
    var inVelocidadeP = document.getElementById("inVelocidadeP");
    var inVelocidadeC = document.getElementById("inVelocidadeC");
    var outSituacao = document.getElementById("outSituacao");

    var velocidadeP = Number(inVelocidadeP.value);
    var velocidadeC = Number(inVelocidadeC.value);
    
    if (inVelocidadeP.value == " " || isNaN(inVelocidadeP) ||
     inVelocidadeC.value ==" " || isNaN(inVelocidadeC)){
        alert("Informe as velocidades corretamente.");
        inVelocidadeP.focus();
        return;
    } 
    if (velocidadeC <= velocidadeP){
        outSituacao.textContent = "Sem multa";
    } else{
        var vinteMais = velocidadeP * 1.2;
        if (velocidadeC <= vinteMais){
            outSituacao.textContent = "Multa Leve."
        } else {
        outSituacao.textContent = "Multa Grave";
        }
    }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaVelocidade);