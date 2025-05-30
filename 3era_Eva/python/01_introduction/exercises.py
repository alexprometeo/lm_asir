###
# exercises.py
# Ejercicios para practicar los conceptos aprendidos en las lecciones.
###

from os import system
if system("clear") != 0: system("cls")

print("\nEjercicio 1: Imprimir mensajes")
print("Escribe un programa que imprima tu nombre y tu ciudad en líneas separadas.")

print("Mi nombre es Cucu.",  "Mi ciudad favorita es Madrid.", sep="\n")

print("Mi nombre es Cucu.")
print("Mi ciudad favorita es Bucarest.")


print("Mi nombre es Cucu.",  "\n", "Mi ciudad favorita es Madrid.")

### Completa aquí

print("--------------")

print("\nEjercicio 2: Muestra los tipos de datos de las siguientes variables:")
print("Usa el comando 'type()' para determinar el tipo de datos de cada variable.")
a = 15
b = 3.14159
c = "Hola mundo"
d = True
e = None

### Completa aquí

print("El tipo de la variable a es:", type(a))
print("El tipo de la variable b es:", type(b))
print("El tipo de la variable c es:", type(c))
print("El tipo de la variable d es:", type(d))
print("El tipo de la variable e es:", type(e))
print("El tipo de True es :", type(2>1))

print("--------------")

print("\nEjercicio 3: Casting de tipos")
print("Convierte la cadena \"12345\" a un entero y luego a un float.")
print("Convierte el float 3.99 a un entero. ¿Qué ocurre?")

### Completa aquí

cadena = "12345"

print(int(cadena))
print(type(cadena))
print(type(int(cadena)))

print(int(3.99))

print("--------------")

print("\nEjercicio 4: Variables")
print("Crea variables para tu nombre, edad y altura.")
print("Usa f-strings para imprimir una presentación.")

# "Hola! Me llamo midudev y tengo 39 años, mido 1.70 metros"

nombre = "Alex"
edad = 29
altura = 1.81

print(f"Hola! Me llamo {nombre}, tengo {edad} años y mido {altura} metros.")

### Completa aquí

print("--------------")

print("\nEjercicio 5: Números")
print("1. Crea una variable con el número PI (sin asignar una variable)")
print("2. Redondea el número con round()")
print("3. Haz la división entera entre el número que te salió y el número 2")
print("4. El resultado debería ser 1")

numeroPI = 3.1416
numeroPIRedondeado = round(numeroPI)
division = numeroPIRedondeado/2

print(numeroPI)
print(numeroPIRedondeado)

print(int(round(3.1416)/2))
print(int(division))