#  Importar métodos del sistema operativo
from os import system

# Limpiar la terminal
if system("clear") !=0: system("cls")

print("Holaaa", "que tal??", sep="--", end=";")
print("Otra línea")
print(42432424)
print(4+2)

"""
    01_print -> snake_case_case_case
    PrintTerminal -> PascalCase
    printTerminal -> camelCase
"""

"""
    ----Hola-mi nombre-es-Cucu---
"""
print("Hola", "mi nombre", "es", "Cucu", sep="-")

print("Esto es una cadena con 'dobles' comillas")

print('Esto es una "cadena" con comillas simples')

print("Esto es una cadena con \"dobles\" comillas y usando carácter de escape.")






