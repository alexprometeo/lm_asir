-- Condición en el where por el valor F del atributo genero del campo contactos
-- **Tenemos que utilizar ->>
SELECT *
FROM Clientes
WHERE contactos ->> 'genero' = 'F'
;

-- En el select también podemos mostrar los campos del campo jsonb, utilizando siempre el operador "->>"
SELECT contactos ->> 'correo' --as Correo /*Si necesitamos pintar varios campos de un campo jsonb, es recomendable darle un alias a cada uno*/
, contactos ->> 'genero'
FROM Clientes
;

-- Where utilizando el operador "@>", a diferencia del operador "->>", solo se puede utilizar en el WHERE
SELECT *
FROM Clientes
--WHERE contactos ->> 'genero' = 'F'
WHERE contactos @> '{"genero": "F"}'
;

