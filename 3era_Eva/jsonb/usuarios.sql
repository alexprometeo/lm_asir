/*
    Crear una nueva tabla usuarios:
        - id
        - nombre
        - preferencias (jsonb) (idioma, notificaciones)

    Inserta 3 nuevos usuarios;
*/

CREATE TABLE Usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,	
	preferencias jsonb NULL
);


INSERT INTO Usuarios (nombre, preferencias)
VALUES (
	'Ana'
	, '{
		"idioma":"es",
		"notificaciones":"true"
    }' 
),
(
	'Juan'
	, '{
		"idioma":"es",
		"notificaciones":"false"
    }' 
),
(
	'Juana'
	, '{
		"idioma":"fr",
		"notificaciones":"true"
    }' 
)
;

-- Select que muestre el nombre y el idioma de cada usuario
SELECT nombre, preferencias ->> 'idioma' as idioma
FROM usuarios
-- Filtrar por los registros que tengan el valor de las notificaciones en comun
WHERE preferencias ->> 'notificaciones' = 'true'
;