// Seleccionar elementos por el nombre de etiqueta
let body = document.getElementsByTagName("body");
console.log("colección de elementos html con etiqueta body: ", body);

// Seleccionar elemento por el identificador
let contenidoPrincipal = document.getElementById("contenidoPrincipal");
console.log("elemento html con identificador: ", contenidoPrincipal);

// Seleccionar elementos por el nombre de la clase
let like = document.getElementsByClassName("like");
console.log("elementos html con clase 'like': ", like);

// windows + . -> ventana de emoticonos
//Seleccionar el elemento dentro de la colección 
//y modificar su innerHTML
like[0].innerHTML = "🐥";
like[1].innerHTML = "🐥";
like[2].innerHTML = "🐥";

let cabecera = document.getElementsByClassName("cabecera");
console.log("elementos html con clase 'cabecera': ", cabecera);
cabecera[1].innerHTML = "😒";


// Seleccionar elementos por el nombre de span
let span = document.getElementsByTagName("span");
console.log("colección de elementos html con etiqueta span: ", span);


// Cambiar estilo del elemento con identificador 'contenidoPrincipal'
contenidoPrincipal.style = "background-color: tomato";
// contenidoPrincipal.style.backgroundColor = "red";

// Crear un nuevo elemento, en este caso un nuevo li
let nuevoDislike = document.createElement("li");

// Asignarle valor al HTML interno
nuevoDislike.innerHTML = "🐭";
console.log("nuevoDislike: ", nuevoDislike);

// Seleccionar elementos con el nombre de etiqueta 'ol'
let etiquetaOL = document.getElementsByTagName("ol");

//Añadir elemento nuevoDislike dentro de la etiqueta ol
etiquetaOL[0].appendChild(nuevoDislike);


// Crear un nuevo elemento, en este caso un nuevo li
let nuevoLike = document.createElement("li");

// Asignarle valor al HTML interno
nuevoLike.innerHTML = "🍕";
console.log("nuevoLike: ", nuevoLike);

// Seleccionar elementos con el nombre de etiqueta 'ul'
let etiquetaUL = document.getElementsByTagName("ul");

//Añadir elemento nuevoLike dentro de la etiqueta ul
etiquetaUL[0].appendChild(nuevoLike);

let nuevoElemento = "<h1>GARFIELD!!!</h1>";

//Antes de acabar el elemento, añade el h1 | lo añade como hijo
contenidoPrincipal.insertAdjacentHTML("beforeend", nuevoElemento);

//Antes de empezar la estructura del elemento, añade el h1 | lo añade como hijo
contenidoPrincipal.insertAdjacentHTML("afterbegin", nuevoElemento);

//Antes de la etiqueta contenidoPrincipal | lo añade como elemento hermano
contenidoPrincipal.insertAdjacentHTML("beforebegin", nuevoElemento);

//Despues de la etiqueta contenidoPrincipal | lo añade como elemento hermano
contenidoPrincipal.insertAdjacentHTML("afterend", nuevoElemento);


