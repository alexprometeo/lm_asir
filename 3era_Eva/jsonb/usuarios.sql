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