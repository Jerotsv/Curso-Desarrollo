"use strict";
/*eslint-disable */
// Inferencia de tipos
// Chequeo de tipos
// Declaración const / let
let x = 22;
// x = 'Pepe'; // Error de TS
// Tipo inferido es any
let z;
z = 22;
z = 'Pepe';
// let v. const: const y tipos literales
{
    const x = 'Pepe';
    // x = 'Juan'; ERROR DE JS
}
// let y tipos literales as const
{
    let x = 'Pepe';
    // x = 'Juan'; // Error de TS
    console.log(x);
}
// conversión / aserción de tipos
{
    function foo() {
        const z1 = document.querySelector('h1');
        const z2 = document.querySelector('h1');
        z1.addEventListener('click', (event) => {
            const element = event.target;
            element.disabled = false;
        });
    }
}
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
// Objetos Arrays y Tuplas
const user = {
    name: 'Pepe',
    age: 23,
};
user.age = 24;
// Propiedades opcionales
{
    user.job = 'developer';
    delete user.job;
    if (user.job) {
        console.log(`Trabajo de ${user.job}`);
    }
    else {
        console.log(`Ahora no trabajo`);
    }
    // Parámetros opcionales
    // Narrowing: restricción del tipo
    const foo = (a) => {
        if (!a)
            return;
        console.log(a.toLocaleLowerCase());
    };
    foo();
}
// Arrays
{
    const data = [1, 2, 3];
    data.push(23);
    // data.push('Pepa') Error de tipo
    const foo = (data) => {
        data.map((item) => item * item);
    };
    // No se usa
    // const foo2 = (data: Array<number>) => {
    //     data.map((item) => item * item);
    // };
}
{
    const t = [1, 2, 'Pepe'];
    t.push('Luis');
}
// Tupla
{
    const t1 = ['Pepe', 2];
    const t2 = ['Juan', 4];
    t1[1] = 5;
    t1.push('Pepe');
    console.log(t1.length);
}
// Firmas de indice
{
    // const user: {
    //     name: string;
    //     age: number;
    // } = {
    //     name: 'Pepe',
    //     age: 23,
    // };
    // user.age = 24;
    // for (const key in user) {
    //     const element = user[key];
    // }
    // as { [key: string]: string | number }
}
{
    const user = {
        name: 'Pepe',
        age: 23,
        hasJob: true,
    };
    user.algo = '';
    const p = 'score';
    console.log(user[p]);
    for (const key in user) {
        const element = user[key];
    }
}
// Union de tipos
{
    let id;
    id = 12;
    id = 'KO923';
    const fooString = (a) => { };
    const fooNumber = (a) => { };
    let x = 0;
    // Error fooString(x)
    // Error fooNumber(x)
    const foo = (a) => {
        if (typeof a === 'string') {
            a.slice();
        }
        else {
            a.toPrecision();
        }
    };
    foo(x);
}
// Union de tipos literales
{
    let state;
    state = 'Success';
    state = 'Error';
}
// Uniones discriminadas
{
    const foo = (a) => {
        if (a.status === 'success') {
            a.data.length;
        }
        else if (a.status === 'error') {
            a.error.message;
        }
        else {
            console.log('No se como estoy aquí');
        }
    };
}
// Tipos intersection
{
    let c;
    c = 2;
}
{
    let x;
    x = { a: 12 };
    x.b = null;
    x.c = [];
}
{
    let c;
    c = { id: 12, name: 'Pepe' };
}
// Tipos propios
// Alias v. Interface
