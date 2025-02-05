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


//Las colecciones, arrays y matrices, siempre comienzan por cero, al hacer referencia a los elementos es importante tenerlo en cuenta
console.log("Primer elemento de la colección de elementos con la clase 'elemento'", elementos[0]);