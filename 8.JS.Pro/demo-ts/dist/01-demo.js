'use strict';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// Inferencia de tipos
// Declaración const / let
let x = 22;
// x = 'Pepe' // Error de TS
// Tipo inferido es any
let z;
z = 22;
z = 'Pepe';
// Anotación de tipo --> : tipo
{
    let z;
    z = 22;
    // z = 'Pepe'; Error de TS
}
// Declaración const / let NO SE ANOTA
{
    let x = 22; // SOBRA number
}
// Anotamos los parámetros
function add(a, b) {
    return a + b;
}
const s = (a, b) => a - b;
