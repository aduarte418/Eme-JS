const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];

let recursosDisponibles = 4;


for (let i = 0; i < loteIncidentes.length; i++) {
    if (loteIncidentes[i].resuelta = true) {
        console.log("Incidente Resuelto.")
        continue;
    }

    if (loteIncidentes[i].resuelta = false) {
        if (loteIncidentes[i].gravedad <= 3) {
            console.log("Incidencia leve, estamos enviando una unidad")
            recursosDisponibles = recursosDisponibles - 1;

        } else if (loteIncidentes[i].gravedad > 3) {
            console.log("Incidencia grave, estamos enviando dos unidades")
            recursosDisponibles = recursosDisponibles - 2;
        }
    }

}