/*
Programa para sumar dos numeros
*/
import { encabezado, linea, leerNumero, calcularSuma } from "./utilidades.js";

const main = function() {
    // Definir variables
    let numero1 = 9;
    let numero2 = 8;
    let numero3 = 0;
    let numero4 = 0;
    let resultado = 0;

    encabezado('sumar numeros', 36);

    numero1 = leerNumero('Ingresa primer numero');
    numero2 = leerNumero('Ingresa segundo numero');
    numero3 = leerNumero('Ingresa tercer numero');
    numero4 = leerNumero('Ingresa cuarto numero')

    resultado = calcularSuma(numero1, numero2, numero3, numero4);

    linea(36);
    console.log(`El resultado de la suma es ${resultado} `);
    linea(36);
}

main();