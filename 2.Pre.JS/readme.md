# Preparación para la programación con JS

Si no has programado nunca, empieza con estos pequeños retos:

- Como definir una función o una variable
- Como crear condiciones a la ejecución de tu código
- Acceder a distintos tipos de datos
- Repetir con bucles

Después, practica a través de las interactive lessons de los siguientes módulos de Javascript de Codecademy (requiere registro y tendrás unos días de prueba gratuitos):

Lección 1: Introducción y tipos de variables
Lección 2: Condicionales  
Lección 5: Arrays
Lección 6: Loops

> Accede a Codecademy

Puedes combinar estos ejercicios con la lectura de las dos primeras lecciones de Eloquent Javascript (en inglés) o el capítulo 3 de Programación Básica con Javascript (en castellano).
Es importante que entiendas bien las estructuras de datos y sepas recorrerlas.

## Antes de concertar la entrevista

Hazte las siguientes preguntas:

- ¿Sabes introducir datos en distintas posiciones de un array?
- ¿Sabrías hacerlo sin usar push()?
- ¿Eres capaz de recorrer el array con un loop?
- ¿Qué pasa en un for dentro de otro for?
- ¿Qué vale la i en cada iteración?
- ¿Qué vale la j?

Si necesitas practicar, un buen ejercicio es crear un reloj que te indique las horas: un for que cuenta horas con un for en su interior que cuenta minutos. Un console log te puede mostrar que para cada vuelta del primer loop, el de dentro da 60. ¿Sabrías crear una alarma que te imprima "Despierta!" a las 7:15?

## Contenido

- Datos y variables
  - Datos: 8 - string - number - boolean - undefined - null - (bigInt) - (symbol) - object
  - Operador typeof
- Tipos de variables -> débil y dinámico

```TS
  let foo: string
  foo = ''
```

```JS
let foo
foo = 4
```

- Coercion y casting

  - A Boolean:
    - Falsy: false, null, undefined, NaN, 0, -0, 0n, ''
    - Truthy: TODO lo demás

- Sentencias y expresiones
  - sentencias (statements) --> instrucciones, comandos, JS haz esto..
  - expresiones (expressions) --> ¿JS dime algo?

```JS
const foo = Math.random();
const baz = 2 + 2 * 4 / 4;
```

- Sentencias de control

```JS
if(!foo) {....}
if(foo === 0) {....}
```

```JS
for(i = 0; i < z; i++) {...}
```

```JS
function foo() {...}
const foo = function() {...}

...

foo()

```

- Objetos

Colecciones de datos

- indexados ----> array
- nombrados ----> object

```js
const data = ['Pepe', 22];

data.foo = 'Soy un array';
```
