#  Importar métodos del sistema operativo
from os import system

# Limpiar la terminal
if system("clear") !=0: system("cls")


nombre = input("¿Cuál es tu nombre?\n")
print(nombre)

edad = input("¿Cuál es tu edad?\n")

print(int(edad) +5)
