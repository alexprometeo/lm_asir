###
#  01 - Sentencias condicionales (if, else, elif)
#  Permiten ejecutar bloques de código solo si se cumplen ciertas condiciones
###

#  Importar métodos del sistema operativo
from os import system

# Limpiar la terminal
if system("clear") !=0: system("cls")

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
# edad = int(input("¿Cuál es tu edad? "))

#if edad >= 18:
    # Esta línea se ejecuta únicamente cuando se cumple la condición.
    #print("Eres mayor de edad.")

# Esta línea se ejecuta aunque no se cumpla la condición a no estar tabulada
#print("Eres mayor de edad.")

### Pedir dos números por consola y añadir tres condiciones: 
# si los dos números son iguales, 
# si el num1 es mayor que num2 y 
# si num2 es mayor que num1

# num1 = int(input("Introduce un número: "))
# num2 = int(input("Introduce otro número: "))

num1 = 7
num2 = 7

if num1 == num2 :
    print("Los dos números son iguales.")
elif num1 >= num2 :
    print(f"{num1} es mayor que {num2}.")
elif num1 < num2 :
    print(f"{num2} es mayor que {num1}.")
else: 
    print("Aqui entro cuando no se cumple ninguna de las condiciones anteriores")

print("------------------------------------------------")

# edad = int(input("¿Cuál es tu edad? "))
edad = 33

if edad >= 18: 
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")


print("------------------------------------------------")

###
#  Hacer un programa que pida la temperatura y diga 
#  si hace frio (menos de 15º), templado (15-25) o calor, más de 30º
###

temperatura = int(input("¿Qué temperatura hace hoy? "))

# if temperatura < 15:
#     print("Hace frioo 🥶🥶🥶🥶🥶🥶")
# elif temperatura > 30:
#     print("Que calor hace 🫠")
# else:
#     print("Se está guay 👌")


if temperatura < 15:
    print("Hace frioo 🥶🥶🥶🥶🥶🥶")
elif temperatura > 30:
    print("Que calor hace 🫠")
elif temperatura > 15 and temperatura <= 25:
    print("Está templado ☺️")
elif temperatura == 26 or temperatura == 27 or temperatura == 28 or temperatura == 29:
    print("Se está muy bien 🍹")
else:
    print("Se está guay 👌")

# Para que entre en la ejecución del codigo de la condición:
# AND: se deben cumplir todas las condiciones
# OR: se debe cumplir una unica condición de las que hay