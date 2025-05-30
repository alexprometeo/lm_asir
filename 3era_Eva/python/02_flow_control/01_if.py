###
#  01 - Sentencias condicionales (if, else, elif)
#  Permiten ejecutar bloques de código solo si se cumplen ciertas condiciones
###

###
# Repaso de lo visto anteriormente.
# Declarar dos variables: nombre y edad. Utilizar input para 
# recuperar la info introducida por terminal
# Utilizar function string (f"") para mostrar: "Mi nombre es Cucu y tengo 29 años."
###

# nombre = input("¿Cómo te llamas? ")
# edad = input("¿Cuál es tu edad? ")

# print(f"Mi nombre es {nombre} y tengo {edad} años.")
###


# Operadores relacionales:

# igual a:          ==
# diferente de:     !=
# menor que:        <
# mayor que:        >
# menor o igual:    <=
# mayor o igual:    >=

# nombre = input("¿Cómo te llamas? ")
edad = int(input("¿Cuál es tu edad? "))

if edad >= 18:
    # Esta línea se ejecuta únicamente cuando se cumple la condición.
    print("Eres mayor de edad.")

# Esta línea se ejecuta aunque no se cumpla la condición a no estar tabulada
print("Eres mayor de edad.")

### Pedir dos números por consola y añadir tres condiciones: 
# si los dos números son iguales, 
# si el num1 es mayor que num2 y 
# si num2 es mayor que num1

