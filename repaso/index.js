let elementoConIdentificador = document.getElementById("titulo");

console.log("elemento titulo: ", elementoConIdentificador);

elementoConIdentificador.innerHTML = "Modificado!";

document.getElementById("titulo").innerHTML = "Modificado 2!";