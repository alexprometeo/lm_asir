#  Importar métodos del sistema operativo
from os import system

# Limpiar la terminal
if system("clear") !=0: system("cls")

mi_variable: str = "Valor variable"
miVariable = "Variable 2"

mi_variable = 22555

print(type(mi_variable))
VARIABLE = "VARIABLE"

print(mi_variable)

# Imprimir por pantalla 3 variables con vuestro nombre, edad y una ciudad que os guste

nombre = 'Cucu'
edad = 29
ciudad = "Bucarest"

print("Hola mi nombre es", nombre, "tengo", edad, "años y me gusta", ciudad)
print(f"Hola mi nombre es {nombre+"Cu"}, tengo {edad+25} años y me gusta {ciudad}")