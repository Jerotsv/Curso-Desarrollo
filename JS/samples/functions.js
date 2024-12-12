// Declaración de una función

// Función casi pura

function add(a = 0, b = 0) {
    // parametros: a y b
    const result = a + b;
    // console.log(result); // efecto
    return result; // resultado
}

const x = add(2, 4); // Argumentos: 2 y 4
// x = 6

const w = 12;
const k = 2;
add(w, k);
console.log(add(12, 2));

// Mal

let score = 2323;

export function foo() {
    return score;
}

console.log(foo());

const baz = function () {
    return Math.random();
};

baz.description = 'Soy baz';
foo.description = 'Soy foo';

console.log(baz());
console.log(baz);
console.log(foo);

// const bazArrow = () => {
//     return Math.random();
// };

const bazArrow = () => Math.random();

bazArrow.description = 'Soy baz arrow';

console.log(bazArrow());
console.log(bazArrow);

const makeSomething = function (some) {
    // HOF
    console.log('Desde makeSomething', some());
};

makeSomething(bazArrow);
makeSomething(() => 'Hola');

makeSomething(function () {
    return 'Soy de toda la vida';
});

function foo23() {
    return 'Soy de toda la vida y me llamo foo23';
}

makeSomething(foo23);
