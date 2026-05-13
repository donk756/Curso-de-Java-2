/*
Funciones de utilidad
*/
import center from "center-align";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

/**
 * 
 * @param {number} largo 
 */
const linea = function(largo) {
    console.log('═'.repeat(largo)); 
}

/**
 * 
 * @param {string} titulo 
 * @param {number} largo 
 */
const encabezado = function(titulo, largo) {
    linea(largo);
    console.log(center(titulo.toUpperCase(), largo));
    linea(largo);
}

/**
 * 
 * @param {string} msj 
 * @returns {number}
 */
const leerNumero = function(msj) {
    let numero = 0;
    while (true) {
        numero = Number(prompt(`${msj}: `));
        if(!isNaN(numero) && isFinite(numero) && numero)  {
            return numero;
        } else {
            console.error('Debe escribir un numero...');
        }
    }
}
/**
 * 
 * @param {number[]} numeros
 * @returns {number}
 */

const calcularSuma = function(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

export { linea, encabezado, leerNumero,calcularSuma };