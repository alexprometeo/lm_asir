
let nombre = "Pepe";

//No podemos declarar variables con dígitos
//let 10Nombre 

//Ni con palabras reservadas
//let return = false

//Ni tampoco con guiones
//let producto-tienda

//Declaración de variable que queramos o sepamos que no cambie su valor
const pais = "Ghana";


//Declaración antigua de variables (en desuso)
var edad = 33;


//Traspasar el valor de pais a la variable de nombre
nombre = pais;
nombre = "Juan";

//No se puede asignar otro valor a una variable declarada con const
//pais = "Maruecos";

//Tres variables: nombre, apellidos y edad. 
// Pinta los valores de las tres variables con un console.log

//console.log("Valor nombre: ", nombre, "apellidos: ", apellidos);
//alert("Valor nombre: " + nombre);

let apellidos = "Cucuruzeanu";
edad = 29;

//Utilizando console log con las comillas francesas (las que están al lado de la tecla "P")
//console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad} años.`);
mostrarMensaje();

// //Equivalente a hacer edad = edad + 1;
// edad++;
// //Equivalente a hacer edad = edad + 5;
// edad+= 5;
// //Equivalente a hacer edad = edad - 2;
// edad -= 2;

modificarEdadLocal();

modificarEdadGlobal();

console.log("Valor edad global: ", edad);


function mostrarMensaje() {
    //Utilizando console log con las comillas francesas (las que están al lado de la tecla "P")
    console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad} años.`);
}

// Declarar una función que sume 10 a la variable edad y le reste 7
function modificarEdadLocal() {
    //Declaración de variable local
    let edad = 5; 

    edad += 10;
    edad -= 7;

    console.log("Edad local: ", edad);
}


//Declaración de una función que modifique el valor de la variable global "edad"
function modificarEdadGlobal() {
    //Equivalente a hacer edad = edad + 1;
    edad++;
    //Equivalente a hacer edad = edad + 5;
    edad+= 5;
    //Equivalente a hacer edad = edad - 2;
    edad -= 2;
}




