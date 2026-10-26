/**@type {boolean} */
const _DEBUGMODE = true;

/**@type {Array<{id: number, descripcion: string, gravedad: number, resuelta: boolean}>} */
const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];

/**@type {number} */
let recursosDisponibles = 4;

/**
 * Función para procesar incidentes
 * Según la gravedad de la incidencia, asigna recursos para tratarla
 * @param {{id: number, descripcion: string, gravedad: number, resuelta: boolean}} incidente - Lista de incidentes
 * @param {number} recursosDisponibles - Número de recursos disponibles
 * @returns {number} Número de recursos disponibles
 */
function procesarIncidente(incidente, recursosDisponibles) {
    // Lógica de la función
    if (incidente.gravedad <= 3) {
        console.log(`Incidencia ${incidente.descripcion} con ID: ${incidente.id} leve, estamos enviando una unidad`)
        recursosDisponibles = recursosDisponibles - 1;
    } else if (incidente.gravedad > 3) {
        console.log(`Incidencia ${incidente.descripcion} con ID: ${incidente.id} grave, estamos enviando dos unidades`)
        recursosDisponibles = recursosDisponibles - 2;
    }
    return recursosDisponibles;
}

/**
* Función para lanzar incidencias
* Recorre la lista de incidencias, procesando las que no están resueltas
* @returns {void} No devuelve nada
*/
function lanzar() {
    for (let i = 0; i < loteIncidentes.length; i++) {
        if (loteIncidentes[i].resuelta === true) {
            console.log(`Incidente ${loteIncidentes[i].descripcion} con ID: ${loteIncidentes[i].id} resuelto.`)
            continue;
        }
        if (loteIncidentes[i].resuelta === false) {
            recursosDisponibles = procesarIncidente(loteIncidentes[i], recursosDisponibles);
        }
        if (recursosDisponibles === 0) {
            console.log("-------------------------------------------------------------------------------------");
            console.log("Estamos saturados, no hay recursos suficientes, espere a que lleguen refuerzos");
            console.log("-------------------------------------------------------------------------------------");
            break;
        }
    }
}
lanzar();
