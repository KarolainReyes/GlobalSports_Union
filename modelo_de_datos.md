
# 📚 Explicación de Colecciones y Campos - GlobalSports Union 🏅

Este documento describe la estructura de las colecciones que forman parte de la base de datos de la aplicación deportiva **GlobalSports Union**.

---

## 🏁 1. `disciplinas`

Contiene información sobre los deportes o disciplinas disponibles.

### Campos:
- `_id`: Identificador único.
- `nombre`: Nombre de la disciplina (ej. Fútbol, Natación).
- `categoria`: "Individual" o "Equipo".
- `genero`: Masculino, Femenino o Mixto.
- `descripcion`: Detalle de la disciplina.
- `ubicacion.lugar`: Lugar donde se realiza la competencia.
- `ubicacion.ciudad`: Ciudad del evento.
- `estado`: Booleano para indicar si está activa.

---

## 🌍 2. `delegaciones`

Representa la delegación oficial de un país.

### Campos:
- `_id`: Identificador único.
- `nombre`: Nombre de la delegación.
- `pais.nombre`: Nombre del país.
- `pais.codigo`: Código ISO del país (ej. COL, MEX).

---

## 🧑‍🤝‍🧑 3. `equipos`

Contiene los equipos inscritos por disciplina y país.

### Campos:
- `_id`: Identificador único.
- `nombre`: Nombre oficial del equipo.
- `disciplinaId`: Referencia a la disciplina (`disciplinas._id`).
- `delegacionId`: Referencia a la delegación (`delegaciones._id`).
- `pais.nombre`: País del equipo.
- `pais.codigo`: Código ISO del país.
- `entrenador`: Nombre del entrenador/a.
- `sedeEntrenamiento`: Lugar de entrenamiento habitual.
- `fundadoEn`: Año de fundación del equipo.

---

## 🧍‍♂️ 4. `atletas`

Almacena la información personal y deportiva de cada atleta.

### Campos:
- `_id`: Identificador único.
- `nombre`: Nombre completo.
- `edad`: Edad del atleta.
- `posicion` / `estilo` / `especialidad` / `tipo`: Campo variable según disciplina (Fútbol, Natación, Atletismo, Ciclismo).
- `disciplinaId`: Referencia a la disciplina.
- `delegacionId`: Referencia a la delegación.
- `pais.nombre`: País del atleta.
- `pais.codigo`: Código ISO del país.
- `equipoId`: Referencia al equipo en el que participa.

---

## 🏟️ 5. `competencias`

Representa los eventos deportivos programados.

### Campos:
- `_id`: Identificador único.
- `nombre`: Nombre del evento o partido.
- `disciplinaId`: Referencia a la disciplina (`disciplinas._id`).
- `fecha`: Fecha y hora del evento.
- `ubicacion.lugar`: Lugar físico del evento.
- `ubicacion.ciudad`: Ciudad donde se lleva a cabo.
- `tipoParticipacion`: "Equipo" o "Individual".
- `equiposParticipantes`: Array de IDs de equipos (si aplica).
- `atletasParticipantes`: Array de IDs de atletas (si aplica).
- `resultado.ganador`: ID del equipo o atleta ganador.
- `resultado.marcador` o `resultado.tiempo`: Detalle del resultado.

---

## 📌 Notas adicionales

- Todas las relaciones entre colecciones usan `ObjectId` como referencia.
- Los campos como `pais.nombre` y `pais.codigo` se repiten en varias colecciones para facilitar filtrados simples.
- Los campos como `posicion`, `especialidad` o `tipo` dependen del tipo de disciplina.

---
