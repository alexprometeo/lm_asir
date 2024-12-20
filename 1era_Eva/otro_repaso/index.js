// let, const, var

// let -> nomenclatura nueva, para declarar variables en un contexto en concreto
// const -> nomenclatura nueva, utilizada sobre todo para variables globales
// var -> nomenclatura anterior para declarar variables

let mensaje = "¡¡Hola, me encanta javascript!!";
const texto = "Cambiado";

// Declaración de una nueva función que ejecutará las instrucciones que le indiquemos
function mostrarMensaje() {
    let mensaje = "Soy una variable dentro del contexto de la función mostrarMensaje";
    
    console.log(mensaje);
    // console.log("Lo que queramos");

    // alert(mensaje);
}

console.log(mensaje);

let body = document.body;
console.log("Elemento body: ", body);
body.style.backgroundColor = "whitesmoke";

// Seleccionar un elemento por el valor de su atributo "id"
let lista = document.getElementById("listaElementos");
lista.style.border = "1px solid crimson";

let elemento1 = document.getElementById("elemento1");
console.log(elemento1);

console.log("valor de texto interno del elemento1: ", elemento1.innerText);
elemento1.innerText = "Cambiado con javascript!!";

// console.log("aaaa: ", lista);




// if (true) {
//     mostrarMensaje();
// }

