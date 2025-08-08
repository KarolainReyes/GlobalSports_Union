//1. Buscar todos los equipos con la disciplina FUTBOL

//Obtenemos el ID de la disciplina FUTBOL

db.disciplinas.find({ nombre: "Fútbol" }, { _id: 1 })

//Y ahora consultamos los equipos con este ID

db.equipos.find({
    disciplinaId: ObjectId("6893a88f70ee52deff4ca0db")
})

//2. Consular todos los atletas de nacionalidad "Colombia"

db.atletas.find({
    "pais.nombre": "Colombia"
})

//3. Consultar los atletas que juegan en la posición "Delantero"

db.atletas.find({
    posicion: "Delantero"
})

//4. Buscar todos los equipos fundados en 2023

db.equipos.find({
    fundadoEn: 2023
})

//5. Buscar todos los equipos del pais Mexico

db.equipos.find({
    "pais.nombre": "México"
})




