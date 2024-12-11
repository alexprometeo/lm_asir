/*
    Completar cada función para conseguir el resultado esperado de cada una.
    
    Recuerda utilizar console.log para ayudarte a ver si las variables van tomando los valores esperados
*/


// Cambiar el texto del primer dispositivo
function cambiarTextoPrimerDispositivo() {
    // Seleccionamos el primer elemento por su ID
    let primerDispositivo = document.getElementById("dispositivo1");

    primerDispositivo.innerHTML = "CAMBIADO!!";
    
    // Cambiamos el texto interno
    
}

// Añadir un emoticono en el último dispositivo
function añadirEmoji() {    
    // Seleccionamos el último dispositivo dentro de la lista y se lo asignamos a una variable
    let ultimoDispositivo = document.getElementById("dispositivo5");

    let nuevoSpan = document.createElement("span");
    // Creamos un nuevo elemento <span> y se lo asignamos a una nueva variable

    nuevoSpan.innerHTML = "(●'◡'●)";
    // Añadimos el emoticono "🛠" dentro del nuevo elemento    
    
    ultimoDispositivo.appendChild(nuevoSpan);
    // Añadimos el nuevo elemento recien creado al final del último elemento de la lista.

}