# 🏆 GlobalSports_Unios

Este proyecto implementa una base de datos en **MongoDB** para gestionar la información de una competencia deportiva internacional. La base de datos almacena detalles sobre delegaciones, disciplinas, equipos y atletas, y cuenta con un conjunto de scripts para la inserción de datos iniciales y la demostración de consultas.

## 📁 Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

├── README.md                   # Información general y ejecución
├── modelo_de_datos.md          # Explicación de colecciones y campos
├── inserciones.js              # Datos insertados por colección
├── consultas_sencillas.js      # 5 consultas sin operadores
├── consultas_operadores.js     # 12 consultas con operadores

## 📝 Descripción de Archivos

A continuación, se detalla la función de cada archivo en este proyecto:

* **`modelo_de_datos.md`**: Este archivo describe el esquema de la base de datos, explicando las colecciones (`disciplinas`, `delegaciones`, `equipos`, `atletas`, `competencias`) y los campos que componen cada una, así como las relaciones entre ellas.

* **`inserciones.js`**: Contiene los scripts para la inserción de datos iniciales en las colecciones. Estos datos permiten poblar la base de datos con equipos de fútbol y ciclismo, delegaciones de diferentes países y sus respectivos atletas.

* **`consultas_sencillas.js`**: Este script incluye una serie de consultas básicas en MongoDB, demostrando cómo buscar documentos por campos específicos sin el uso de operadores avanzados.

* **`consultas_operadores.js`**: En este archivo se encuentran consultas más complejas que utilizan operadores de MongoDB como `$gte`, `$lte`, `$ne`, `$in` y `$regex`, además de un ejemplo de consulta de agregación (`$group` y `$match`).

## 🚀 Cómo usar

1.  Asegúrate de tener **MongoDB** instalado y en ejecución.
2.  Accede a la `mongo shell` o a una herramienta de gestión como **MongoDB Compass**.
3.  Utiliza los scripts (`inserciones.js`, `consultas_sencillas.js`, `consultas_operadores.js`) para cargar los datos y ejecutar las consultas en tu base de datos.

## 👩‍💻 Autor

Desarrollado por:

[Karol Reyes](https://github.com/KarolainReyes)


---

## 📌 Nota

Este proyecto fue desarrollado con fines educativos para practicar el diseño y manipulación de bases de datos relacionales con un caso de uso realista y cotidiano.
