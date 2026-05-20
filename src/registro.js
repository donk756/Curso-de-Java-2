/*
Registro de alumnos
*/

import { linea, encabezado } from "./utilidades.js";
import { Alumno } from "./alumno.js";

const main = function() {
    
    let alumno = new Alumno(
        '56.879.034',
        'pepe',
        'pepauri',
        26,
        1.90,
        false,
        3,
    );
    verDatos(alumno)
}

/**
 * 
 * @param {Alumno} alumno
 */

const verDatos = function(alumno) {
    encabezado('datos del alumno',56);
    console.log('cedula: ', alumno.cedula);
    console.log(`Nombre completo: ${alumno.getNombreCompleto()}`);
    console.log(`Edad: ${alumno.edad} años`);
    console.log(`Altura: ${alumno.altura} mts`);
    console.log(`Genero: ${alumno.getSexo()}`);
    console.log(`Turno: ${alumno.getTurno()}`);
    linea(56);
}
main();