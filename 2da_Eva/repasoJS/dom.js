const titulo = document.getElementById("tituloPrincipal");
console.log(titulo);

//Atributos del elemento que debeis tener más en cuenta:
/*
    -chlidren -> lista de elementos hijos
    -classList -> listado con las clases asignadas al elementos
    -className -> si solo tiene una clase asignada
    -innerHTML -> estructura html interna del elemento
    -innerText -> texto dentro de la estructura del elemento
    -textContent -> texto del elemento
    -diferentes eventos que comiencen con "on...", por ejemplo, onclick
    -value (en caso de pertenecer a un formulario)
    -style -> los estilos que pueda tener el elemento
    -parentElement -> elemento padre
*/

const elementos = document.getElementsByClassName("elemento");
console.log(elementos);


//Las colecciones, arrays y matrices, siempre comienzan por cero, al hacer referencia 
// a los elementos es importante tenerlo en cuenta
console.log("Primer elemento de la colección de elementos con la clase 'elemento'", elementos[0]);

const menu = document.getElementsByTagName("ul");
console.log(menu);

//Seleccionamos el listado por su id y le modificamos el color de fondo mediante el atributo style
const listaElementos = document.getElementById("listaElementos");
listaElementos.style.backgroundColor = "antiquewhite";
//listaElementos.style = "background-color: brown!important;";


//Creamos un nuevo elemento y le asignamos valores a los atributos más relevantes, de esa manera conseguiremos asignarle su propio identificador, clase y el contenido de la etiqueta
let elemento4 = document.createElement("li");
console.log(elemento4);
elemento4.id = "elemento4";
elemento4.className = "elemento";
elemento4.textContent = "Elemento 4";

//Con el appendChild añadimos elementos html como elementos hijos a un elemento existente
listaElementos.appendChild(elemento4);


//Eliminar un elemento
listaElementos.remove();
