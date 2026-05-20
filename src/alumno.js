/*
Plantilla para crear alumnos 
*/

class Alumno{
    /**
     * 
     * @param {string} cedula 
     * @param {string} nombre 
     * @param {string} apellido 
     * @param {number} edad 
     * @param {number} altura 
     * @param {boolean} sexo
     * @param {number} turno 
     */

    constructor(cedula, nombre, apellido, edad, altura, sexo, turno) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
        this.sexo = sexo;// true = Femenino, false = Masculino 
        this.turno = turno;// 1 = mañana, 2 = tarde, 3 = noche
    } 
    getNombreCompleto() {
       return this.nombre.toUpperCase() + ' ' + this.apellido.toUpperCase();
    }

    getSexo() {
        if (this.sexo = true) {
            return'Femenino';
        } else {
            return'Masculino';
        }
    }
    getTurno() {
        switch(this.turno) {
            case 1 : return 'Mañana'
            case 2 : return 'Tarde'
            case 3 : return 'Noche'
            default : return 'no tiene'
        }
    }
}

export {Alumno};