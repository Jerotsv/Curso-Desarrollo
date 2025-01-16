// 1. Imprime por consola el string 'Hello World'.

// Primera solucion
console.log('Hello World');

// Segunda
const greeting = 'Hello World';
console.log(greeting);

// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
const greeting1 = '¡Hello world!!';
let greeting2 = '¡Bye world!!';
console.log(greeting1, greeting2);

// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
greeting2 = 'Hello again';
console.log(greeting2);

// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
const var1 = 2;
const var2 = 3;
console.log(var1 + var2);

// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
const firstName = 'Pepe';
const sureName = 'Pérez';
console.log(firstName + ' ' + sureName);
console.log(`${firstName} ${sureName}`);

// 6. Crea una función que imprima por consola el string 'Hello World'.

function render(value) {
    console.log(value);
}

render('Hello World');

// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.

function multiplication(a, b) {
    console.log(a * b);
}

multiplication(12, 5);

// 7b. Crea una función que, calcule el resultado de la multiplicación de dos números introducidos como parámetros.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function multi(a, b) {
    return a * b;
}

render(multi(2, 4)); // 8

// 8. Crea una función devuelva el resultado de elevar al cubo un número dado como parámetro.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function cube(a) {
    const result = a ** 3;
    return result;
}

render(cube(3)); // 27

// 9. Crea una función que calcule el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function rectangleArea(b, h) {
    const area = b * h;
    return area;
}

render(rectangleArea(3, 4)); // 12

// function areaRectangleOrTriangle(b, h, isRectangle) {
//     let area;
//     if (isRectangle === true) {
//         area = b * h;
//     } else {
//         area = (b * h) / 2;
//     }
//     return area;
// }

// function areaRectangleOrTriangle(b, h, isRectangle) {
//     if (isRectangle) {
//         return b * h;
//     }
//     return (b * h) / 2;
// }

function areaRectangleOrTriangle(b, h, isRectangle) {
    return isRectangle ? b * h : (b * h) / 2;
}

render(areaRectangleOrTriangle(3, 5, false)); // 7.5
render(areaRectangleOrTriangle(3, 5, true)); // 15

// 10. Crea una función que devuelva un número entero al azar entre 0 y 10.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

// Math.random() número pseudo aleatorio entre 0 y 1

function randomNumberOneToTen() {
    // const r = Math.random() * 10
    // Math.trunc(r)
    // return r;
    return Math.trunc(Math.random() * 9 + 1);
}

render(randomNumberOneToTen());

// 11. Adivina el número (Ejecútalo en la consola del navegador)
// Crea una función que primero guarde en una variable un número aleatorio del 1 al 10.
// Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
// Mejora: utiliza una función independiente para el render

function app() {
    const expected = randomNumberOneToTen();
    const userOption = prompt('Dime un número del 1 al 10');
    const isCorrect = expected === Number(userOption);
    const result = isCorrect
        ? 'Has acertado'
        : `No acertaste, en número era ${expected}`;
    render(result);
}

// Estructuras de control

// 12. Crea una función que reciba un número como parámetro y devuelva de alguna manera si el número dado es par o impar.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function everOrOdd(num) {
    // Si no es entero o no es número
    if (!Number.isInteger(num)) {
        return 'El el valor no es válido';
    }
    let result = 'Impar';
    if (num % 2 === 0) {
        result = 'Par';
    }
    return result;
}

let value = 0.5;
render(`${value} es ${everOrOdd(value)}`);
value = 0;
render(`${value} es ${everOrOdd(value)}`);
value = 23;
render(`${value} es ${everOrOdd(value)}`);
value = 24;
render(`${value} es ${everOrOdd(value)}`);
value = -23;
render(`${value} es ${everOrOdd(value)}`);
value = -24;
render(`${value} es ${everOrOdd(value)}`);
value = 'Pepe';
render(`${value} es ${everOrOdd(value)}`);
value = Infinity;
render(`${value} es ${everOrOdd(value)}`);

// 15. Crea una función que reciba un número por parámetros e y devuelva de alguna manera si el número recibido es un número primo.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function isPrime(num) {
    // Si no es entero o no es número
    if (!Number.isInteger(num) || num < 0) {
        return 'El valor no es válido';
    }

    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function renderPrime(n) {
    let result = isPrime(n);
    if (typeof result === 'boolean') {
        result = result ? 'Es primo' : 'no es primo';
    }
    console.log(n, result);
}

renderPrime(-1);
renderPrime(0);
renderPrime(1);
renderPrime(2);
renderPrime(9);

// Operaciones con bucles o arrays

// 13. Crea una función que reciba un parámetro de tipo string y devuelva  el string revertido. (ejemplo: 'casa' => 'asac).
// Invócala e imprime por consola el resultado usando la función del ejercicio 6.

function revertString(value) {
    let accumulator = '';
    for (let i = value.length - 1; i >= 0; i--) {
        const iterator = value[i];
        // accumulator = accumulator + iterator
        accumulator += iterator;
    }
    return accumulator;
}

function revertStringByArray(value = '') {
    // const array = value.split()
    // array.reverse()
    // const result = array.join('')
    // return result
    return value.split('').reverse().join('');
}

console.log(revertStringByArray('ornitorrinco verde'));

// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
// Mejora: utiliza una función independiente para el render

function createMultiplicationTable(num) {
    let accumulator = [];
    for (let i = 0; i <= 10; i++) {
        accumulator.push(`${num} por ${i} es ${num * i}`);
    }
    return accumulator;
}

console.table(createMultiplicationTable(5));