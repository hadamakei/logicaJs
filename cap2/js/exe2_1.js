function mostrarOla(){
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
}

var mostrar = document.getElementById("mostrar");       // id do elemento do html
mostrar.onclick = mostrarOla;                           // evento onclick 

var x = 100/20* Math.sqrt(9) -4;
alert(x)