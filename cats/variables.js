// CTRL + Ç -> comentar en vs code

// Ventana de alerta con un mensaje
// alert("Es vierneees!!");


let producto = "PS5 PRO", cat = "Rocky";

let verdura = "tomato";

// alert(producto);

//producto = 100;

// No se puede volver a declarar la misma variable
//let producto = "Switch";

// alert(producto);


// Pintar por consola el valor de la variable cat
// CTRL + MAYUS + I | F12 | Click derecha -> inspeccionar
console.log(cat);


let pokemon = "Bulbasur";

pokemon = producto;

//console.log("Mi pokemon favorito es:", pokemon);


//Funcion para mostrar por consola el pokemon que se le pase por parametro
function showPokemon (nombrePokemon) {
    pokemon = nombrePokemon;
    console.log("Mi pokemon favorito es:", pokemon);
}

showPokemon(pokemon);

showPokemon("Charizard");

let price = 250;
price++;
// price = price + 49
price += 49;
//price = price - 10
price -= 10;
//price = price * 5
price *= 5;
//price = price / 10
price /= 10;
//El producto PS5 PRO tiene el precio de 144.5
console.log(`El producto ${producto} tiene el precio de ${price}`);

console.log("El producto ", producto, " tiene el precio de ", price);

// alert(`El producto ${producto} tiene el precio de ${price}`);
alert("El producto " + producto + " tiene el precio de " + price);

// let name = "Jon";
let name = "Jon";
let lastName = "Snow";
let age = 24;
age++;
// "Mi nombre es Jon Snow y tengo 25 años";

alert("Mi nombre es " + name + " " + lastName + " y tengo " + age + " años");




