// Declaramos una variable seleccionando el elemento con el identificador "agregar-tarea"
const botonAgregar = document.getElementById("agregar-tarea");

function agregarTarea () {
    //Seleccionar un elemento con el identificador "lista-tareas"
    let listaTareas = document.getElementById("lista-tareas");

    //Declarar una nueva variable y asignarle la creación de un nuevo elemento div
    let tarea = document.createElement("div");

    // Imprimir por consola los dos elementos
    //console.log("Elemento con id:", listaTareas, "elemento nuevo:", tarea);

    //Asignarle contenido a la variable tarea
    //tarea.textContent = "Nueva tarea";

    //Con el prompt recogemos el valor que introduce el usuario por la ventana
    let textoNuevaTarea = prompt("Introduce el nombre de la tarea");
    tarea.textContent = textoNuevaTarea;

    //Asignar una clase a la variable tarea
    tarea.className = "tarea";

    // Declarar una nueva variable que recibe un nuevo elemento de tipo button
    let botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    // Asignar al elemento tarea el elemento button recién creado
    tarea.appendChild(botonCompletar);

    //añadir la nueva tarea como elemento hijo del elemento listaTareas
    listaTareas.appendChild(tarea);
}

// Crear nueva función llamada "completar"
// Al elemento que reciba por parámetro cambiarle el color de fondo
// a verde

function completar (elemento) {
    elemento.style = "background-color: green;"
}


// Invocar la función agregarTarea declarada arriba, en el click del botón con el id "agregar-tarea"
botonAgregar.onclick = function () {
    agregarTarea();
}
