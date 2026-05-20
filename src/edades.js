/*
Lista de edades
*/
import * as util from "./utilidades.js" ;

const main = function() {
    let edades = [21,26,23,30,16,13,17,16,56,134000000000000,78,0,12345678,1234567890];
    
    util.encabezado(`cantidad de edades es: ${edades.length}`,56)
    util.encabezado(`la tercera edad es: ${edades[2]}`,56)
    util.encabezado(`la decima edad es: ${edades[9]}`,56)
    util.encabezado(`la ultima edad es: ${edades.at(-1)}`,56)
    let porcion = edades.slice(7,14)
    util.encabezado(`${porcion}`,56)
    console.table(edades);
    edades.push(56)
    console.table(edades);
    edades.push(56,591,456456,5);
    console.table(edades);
    edades.push(...[67,78,900076,190]);
    console.table(edades);

    util.encabezado('lista de edades (for of)', 56);
    for (const edad of edades) {
        console.log(`La edad es ${edad} años`);
    }

    util.encabezado('leer lista de edades (forEach)', 56);
    edades.forEach((edad)=> console.log(`la edad es ${edad} años`));
    
    util.encabezado('edades ordenadas ascendente', 56);
    let edadesAsc = edades.toSorted();
    edadesAsc.forEach((edad) => console.log(`La edad es ${edad} años`))
    edades.push(0,97007,798,89057,7890)
    
    util.encabezado('edades ordenadas descendente', 56);
    let edadesdes = edades.toSorted((a,b) => b-a);
    edadesdes.forEach((edad) => console.log(`La edad es ${edad} años`))

    util.encabezado(`ver mayores de edad`, 56)
    let mayoresdeEdad = edades.filter((edad) => edad >= 18);
    mayoresdeEdad
    .sort()
    .forEach((edad) => console.log(`La edad es ${edad} años`));

    util.encabezado(`ver menores de edad`, 56)
    let menoresdeedad = edades.filter((edad) => edad <= 17 );
    menoresdeedad
    .sort()
    .forEach((edad) => console.log(`La edad es ${edad} años`));
}

main();