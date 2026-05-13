/*
Calculadora de Indice de masa corporal - IMC
*/

import * as util from "./utilidades.js";

const main = function() {
    // Definir variables
    let peso = 0;
    let altura = 0;
    let imc = 0;

    util.encabezado('calculdora indice de masa corporal', 50);
    peso = util.leerNumero('Ingresa tu peso (kg)')
    altura = util.leerNumero('Ingresa tu altura (mts)')
    imc = calcularIMC(peso, altura)

    const msj = 'El indice de masa corporal es';
    util.encabezado (`${msj}: ${imc.toFixed(2)} (${statusIMC(imc).toLocaleUpperCase()})`, 50)
}

/**
 * 
 * @param {number} peso 
 * @param {number} altura 
 * @returns {number}
 */

const calcularIMC = function(peso, altura) {
    return peso / Math.pow(altura, 2);

}

/**
 * 
 * @param {number} imc 
 * @returns {string}
 */

const statusIMC = function(imc) {
    if (imc < 18.5) {
        return 'bajo peso';    
    } else if (imc >= 18.5 && imc < 24.99) {
        return 'peso normal'
    } else if (imc >= 24.99 && imc < 29.99) {
        return 'sobrepeso'
    } else {
        return 'obesidad'
    }
}

main();