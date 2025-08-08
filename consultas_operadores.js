//1. Equipos con más de 10 jugadores

db.atletas.aggregate([
    {
        $group: {
            _id: "$equipoId",
            cantidadJugadores: { $sum: 1 }
        }
    },
    {
        $match: {
            cantidadJugadores: { $gt: 10 }
        }
    }
])

//2. Atletas con edad entre 20 y 25 años

db.atletas.find({
    edad: { $gte: 20, $lte: 25 }
})

//3. Equipos fundados entre 2020 y 2023

db.equipos.find({
    fundadoEn: { $gte: 2020, $lte: 2023 }
})


//4. Atletas cuyo nombre contiene "Vargas" 

db.atletas.find({
    nombre: /Vargas/i
})


//5. Equipos de disciplinas con ID en un conjunto específico (Futbol y Natación)

db.equipos.find({
    disciplinaId: {
        $in: [
            ObjectId("6893a88f70ee52deff4ca0db"),
            ObjectId("6893a70c70ee52deff4ca0d9")
        ]
    }
})

//6. Atletas que NO son de Brasil

db.atletas.find({
    "pais.nombre": { $ne: "Brasil" }
})

//7. Atletas que tienen 30 años o más

db.atletas.find({
    edad: { $gte: 30 }
})

//8. Atletas que tengan exactamente 34 años y jueguen en la posición “Delantero”

db.atletas.find({
    edad: 34,
    posicion: "Delantero"
})

//9. Atletas cuya posición sea “Mediocampista” o “Delantero”

db.atletas.find({
    posicion: { $in: ["Mediocampista", "Delantero"] }
})

//10. Atletas que pertenezcan a las delegaciones de México o Argentina

db.atletas.find({
    "delegacionId": {
        $in: [
            ObjectId("6893d0da70ee52deff4ca0df"), // México
            ObjectId("6893d0da70ee52deff4ca0e0")  // Argentina
        ]
    }
})

//11.Competencias donde participaron equipos de Colombia

db.competencias.find({
    equiposParticipantes: {
        $in: [ObjectId("6895699504f09d4ba08cc1fe")]
    }
})

//12. Competencias individuales ganadas por un atleta colombiano

db.competencias.find({
    tipoParticipacion: "Individual",
    "resultado.ganador": {
        $in: [
            ObjectId("6895568f04f09d4ba08cc1f2"), // Valentina Ríos
            ObjectId("6895594504f09d4ba08cc1f6")  // Santiago López
        ]
    }
})


