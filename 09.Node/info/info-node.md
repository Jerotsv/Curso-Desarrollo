---
title: Course Node.js / Vue.js
description: 'Información sobre Node.js para el certificado de profesionalidad de Desarrollo de Aplicaciones con Tecnologías Web'
dates: 04/2025
---

- [Fundamentos de Node.JS](#fundamentos-de-nodejs)
  - [Entorno de ejecución](#entorno-de-ejecución)
  - [Características: Node en la práctica](#características-node-en-la-práctica)
  - [Historia](#historia)
    - [Creación de Node.js](#creación-de-nodejs)
    - [Evolución de NodeJS](#evolución-de-nodejs)
  - [Node.js: utilización](#nodejs-utilización)
- [Preparación del Entorno de Desarrollo](#preparación-del-entorno-de-desarrollo)
  - [Creación de un proyecto con Node.js, TS, ESLint y Prettier \& Vitest (como herramienta de testing)](#creación-de-un-proyecto-con-nodejs-ts-eslint-y-prettier--vitest-como-herramienta-de-testing)
    - [Primera demo en Node.js](#primera-demo-en-nodejs)
    - [Código bloqueante](#código-bloqueante)
- [Asincronía en Node: el Event Loop](#asincronía-en-node-el-event-loop)
- [Módulos nativos de Node.JS](#módulos-nativos-de-nodejs)
  - [Acceso a los módulos. Importación y exportación](#acceso-a-los-módulos-importación-y-exportación)
  - [Módulos del core](#módulos-del-core)
  - [Entrono de ejecución](#entrono-de-ejecución)
  - [La variable global](#la-variable-global)
  - [Process](#process)
  - [Variables de entorno](#variables-de-entorno)
  - [Eventos](#eventos)
- [Node y la línea de comandos](#node-y-la-línea-de-comandos)
  - [Node REPL](#node-repl)
  - [stdin y stdout](#stdin-y-stdout)
    - [Output: stdout y stderr](#output-stdout-y-stderr)
    - [Nota sobre los saltos de línea](#nota-sobre-los-saltos-de-línea)
    - [Input: stdin](#input-stdin)
  - [Creación de un CLI](#creación-de-un-cli)
    - [Creación de un comando ejecutable](#creación-de-un-comando-ejecutable)
    - [Procesamiento de argumentos](#procesamiento-de-argumentos)
    - [Procesamiento de argumentos con minimist](#procesamiento-de-argumentos-con-minimist)
    - [Procesamiento de argumentos con yargs](#procesamiento-de-argumentos-con-yargs)
- [File System](#file-system)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Versiones de las funciones](#versiones-de-las-funciones)
  - [Lectura de ficheros](#lectura-de-ficheros)
  - [File System basado en Promesas](#file-system-basado-en-promesas)
  - [Escritura de ficheros](#escritura-de-ficheros)
  - [CRUD sobre datos JSON](#crud-sobre-datos-json)
    - [Modelo de datos](#modelo-de-datos)
    - [Operaciones](#operaciones)
    - [Abstracción, Uso de Genéricos](#abstracción-uso-de-genéricos)
    - [Abstracción, Uso de Genéricos y Clases](#abstracción-uso-de-genéricos-y-clases)
  - [Completando el CLI](#completando-el-cli)
  - [Módulo http](#módulo-http)
- [API Rest con Express](#api-rest-con-express)
- [Aplicación Realtime con Socket IO](#aplicación-realtime-con-socket-io)
- [Despliegue y publicación en npm](#despliegue-y-publicación-en-npm)

## Fundamentos de Node.JS

Node es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.

El ecosistema de paquetes de Node, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

### Entorno de ejecución

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

- V8:
  - Motor de JavaScript de código abierto
  - Escrito en C++
  - Define la sintaxis de JavaScript
  - Como funciona:
    - Compila el código JavaScript a código máquina
    - Ejecuta el código máquina
- Node, más allá de V8:
  - Proporciona módulos y APIs para interactuar con el sistema operativo
    - Mecanismos para interactuar con el exterior
    - Librería estándar (consola, ficheros, red, etc.)
    - Utilidades (intérprete, depurador, paquetes, etc.)

### Características: Node en la práctica

- Plataforma de desarrollo de software creada en 2009
- JavaScript en el lado del servidor
- Basado en la máquina virtual de Chrome V8: escrito en C = muy rápido
- Multiplataforma (Windows, Macintosh, Linux, etc.)
- Aunque es una marca registrada de Joyent, es open source
- Asíncrono y orientado a eventos (no bloqueante)
- Ideal para aplicaciones que consumen datos en tiempo real y que se ejecutan a través de dispositivos distribuidos
- Lo usan muchas empresas (Walmart, PayPal, Yahoo, LinkedIn, eBay, Uber, etc.)

### Historia

- Origen del lenguaje JS
- 1995 - Netscape incorpora un JS desarrollado por Brendan Eich
  - Objetivo: validación de formularios en cliente (Respuesta a la lentitud de las conexiones)
- 1996 – Microsoft desarrolla lenguajes de Script similarares
  - VBScript
  - JScript, que incorpora a Internet Explorer
- 1997 – Aparece ECMAScript como estándar respaldado por la European Computer Manufacturers Association

- 1988 - OWA incorpora XMLHttp (AJAX), desarrollado por Alex Hopmann
- 1999 - ES3, primer estándar de ECMAScript utilizado mayoritariamente por los navegadores
- 2004 - GMail utiliza JS incorporando AJAX masivamente
- 2005 - John Resig crea JQuery
- 2006 - Aparece NodeJS, JS en el servidor, de mano de Ryan Dahl
- 2009 - Google Chrome incorpora V8, motor de JS de NodeJS
- 2010 - NPM, gestor de paquetes de NodeJS
- 2011 - ES5, nuevo estándar de ECMAScript
- 2012 - Windows 8 incorpora JS como lenguaje nativo
- 2014 (2015) - Nuevo estándar ES6 / ES2015 marca un punto de inflexión en el lenguaje

![Time line de los primeros años de JS, hasta 2014](./assetts/timeline-js.png)

#### Creación de Node.js

Tiene su origen en un proyecto de Ryan Dahl y sus colaboradores en la empresa Joyent, que fue presentado en una conferencia en la JSConf de 2009.
<https://youtu.be/ztspvPYybIY>
Objetivo: escribir aplicaciones muy eficientes en E/S con el lenguaje dinámico más rápido (v8) para soportar miles de conexiones simultáneas
Planteamiento: sin complicaciones innecesarias

- Concurrencia sin paralelismo
- Asincronía apoyándose en Eventos y Callbacks
- Lenguaje sencillo y muy extendido: JavaScript
- API muy pequeña y muy consistente

¿Por qúe JS?

> JavaScript has certain characteristics that make it very different than other dynamic languages, namely that it has no concept of threads. Its model of concurrency is completely based around events
> Ryan Dahl <https://youtu.be/ztspvPYybIY>

En la búsqueda de una comunicación asíncrona para optimizar las tareas ligadas a I/O (I/O bound tasks) se pensó en un sistema de socket servers (algo similar a nano or microservices) denominados NODOS, comunicándose entre si con baja latencia y alto rendimiento.

La necesidad de un **event loop** para organizar estos nodos llevo a sustituir Ruby, usado en la implementación inicial, por **JS V8**, que ya disponía del event loop.

#### Evolución de NodeJS

- La empresa [Joyent](https://www.joyent.com/) trata de aprovechar su propiedad de la marca registrada NodeJS y dirigir su desarrollo y su ritmo de actualización
- En 2014, parte de la comunidad responde con un fork denominado **IO.JS** desarrollado bajo un modelo open governance
  - Su desarrollo es muy activo con liberaciones semanales llegando pronto hasta la 3.x
  - Paralelamente, al cabo de dos años, Joyent lanza la versión 0.12.x que recupera la paridad con las características de IO.JS
- En septiembre 2015 se produce la **reconciliación** entre ambos grupos con una nueva versión de Node.JS, que al adoptar el versionado semántico, se numera como 4.0.0

### Node.js: utilización

- Creación rápida de servidores HTTP o TCP ….
- Aplicaciones Web con frameworks como Express (<http://expressjs.com/es/>) y plantillas como las de Jade/Pug <(http://jade-lang.com/>)
- Aplicaciones en tiempo real, como los chats
- Servicios Web e.g. Restify (<http://mcavage.me/node-restify/>)
- Conexión con bases de datos (MySQL, MongoDB, SQLite)
- Scripting y conversiones en local o en servidor
- Manejo de flujos binarios, e.g. para Web RTC (<http://lynckia.com/>) o para streaming de audio y video
- Herramientas de desarrollo, e.g. Grunt, Gulp, Yeoman
- Herramientas de testing, e.g. Mocha, Jasmine, Karma
- Herramientas de análisis, e.g. JSHint, JSLint, ESLint
- Herramientas de documentación, e.g. JSDoc, YUIDoc
- Dispositivos diversos: IoT, Raspberry Pi, Arduino, e.g. Johnny-Five (<http://johnny-five.com/>).

## Preparación del Entorno de Desarrollo

- Git <https://git-scm.com/> y una cuenta en un hosting de repositorios (GitHub) <https://github.com/>
- Editor de código: Visual Studio Code <https://code.visualstudio.com/>
- Terminal (Linea de commandos)
- Administrador de versiones de Node.js: NVM <https://github.com/coreybutler/nvm-windows>
- Node.js y el gestor de paquetes npm <https://nodejs.org/es/>

Instalación de Node.js y npm, despues de instalar NVM:

```bash
nvm install 23.6.0
nvm install latest
nvm list
nvm use 23
```

- Nodemon <https://nodemon.io/>: `npm install -g nodemon`
- Alternativa actual `node -w`

### Creación de un proyecto con Node.js, TS, ESLint y Prettier & Vitest (como herramienta de testing)

- Creación de un proyecto con Node.js: `npm init -y`
- Instalación de TypeScript <https://www.typescriptlang.org/>: `npm install -D typescript`
- Instalación de Prettier <https://prettier.io/>: `npm install -D prettier`
- Configuración de Prettier en package.json
- Instalación de ESLint <https://eslint.org/>: `npm init @eslint/config@latest`
- Configuración de TypeScript: `npx tsc --init`
- Ajustes de la configuración de TypeScript en `tsconfig.json`
- Instalación de Vitest <https://vitest.io/>: `npm install -D vitest`
- Configuración de Vitest en `vitest.config.js` y `tsconfig.json`
- Incorporación de scripts en `package.json`

#### Primera demo en Node.js

```typescript
console.log('Hello World');
```

#### Código bloqueante

La operaciones entrada/salida (I/O o E/S) bloqueantes impactan en el rendimiento debido a la alta latencia de ese tipo de operaciones

Latencia de operaciones I/O

| Medio    | Latencia (ciclos) |
| -------- | ----------------- |
| Cache L1 | 3                 |
| Cache L2 | 14                |
| RAM      | 250               |
| Disco    | 41.000.000        |
| Red      | 240.000.000       |

El modelo tradicional de programación emplea programación secuencial
Las operaciones I/O bloquean el flujo de ejecución del programa que las invoca impidiendo que la siguiente instrucción comience hasta que la anterior haya terminado.

```typescript
// Código bloqueante
```

## Asincronía en Node: el Event Loop

Arquitectura del core refleja el objetivo principal del proyecto NodeJS: **Eficiencia en la E/S**, es decir, escribir aplicaciones muy eficientes con un modelo de operaciones E/S Sin bloqueo y orientado a eventos.

Ver JS Asíncrono.md

- Multiplicidad de tareas
  - Paralelismo
  - Concurrencia sin paralelismo
    - Medida del tiempo
  - Concurrencia y código bloqueante
- Asincronía en JS
  - Asincronía, tiempo y ejecución en segundo plano
  - Event Loop

JS emplea concurrencia sin paralelismo, es decir, la capacidad de ejecutar múltiples tareas de forma concurrente, pero no simultánea. Esto se consigue mediante la programación asíncrona, que permite que una tarea se ejecute en segundo plano mientras el programa principal sigue su ejecución.

Para implementar la asincronía, JS emplea el Event Loop, un bucle de eventos que se encarga de gestionar las tareas asíncronas y de mantener la ejecución del programa principal.

![Event Loop de Node](./assetts/event-loop.png)

Este modelo da muy buena respuesta mara gestionar un elevado numero de operaciones I/O de forma concurrente (I/O Bound Applications)
No es lo mas adecuado para operaciones CPU-intensive (CPU Bound Applications)

## Módulos nativos de Node.JS

La estructura de Node.js es completamente **modular**, incluso en los elementos nativos que componen su **núcleo**. Muchos de esos **módulos nativos** son conjuntos de identificadores en JS (funciones) que actúan como interfaz para poder invocar las **features** de Node.js **implementadas en C++**, que en muchos casos se apoyan en las funciones POSIX del sistema operativo.

Estas features le dan a Node.js la capacidad de interactuar con el sistema operativo y con el exterior, asi como ejecutar de forma no bloqueante el código asíncrono. Algunos ejemplos
incluyen la gestión de ficheros, la comunicación en red, la gestión de procesos, la gestión de eventos, etc.

### Acceso a los módulos. Importación y exportación

Para disponer de la funcionalidad de un módulo lo importamos.

Inicialmente Node soportaba e implementaba el sistema módulos CommonJS, donde los elementos exportados mediante `module.exports` son importados al asignarlos a una
variable mediante el comando `require`

```javascript
var <nombre> = require('<nombre módulo>');
```

Actualmente, desde la versión 18, Node.js soporta completamente el sistema de módulos ES6, indicando en package.json "type": "nodule". ESM está siendo paulatinamente adoptado como el más habitual en las aplicaciones Node: en las últimas versiones se reconoce incluso si no se ha configurado package.json.

Los elementos exportados como `module.exports` en CommonJS son importados mediante el comando `import` de la siguiente forma:

```javascript
import <nombre> from '<nombre módulo>';
```

Cuando los elementos exportados en ESM son varios, se importan mediante la notación de llaves `{}`

```javascript
import { <nombre1>, <nombre2> } from '<nombre módulo>';
```

Cada modulo es un fichero diferente con un espacio de nombres local que da lugar a un closure que incluye

- una parte pública (interfaz) que expone una serie de variables, principalmente funciones
- una parte otra privada, con la implementación de las funciones públicas y en su caso, variables privadas

Ejemplo: Creamos un modulo que contenga los cálculos geométricos de un círculo:

- Su circunferencia
- Su área

### Módulos del core

El núcleo de NodeJS está formado por poco más de 35 módulos

Es importante revisar su nivel de estabilidad al usarlos

- deprecated
- experimental
- stable
- locked

Toda la información sobre el núcleo está en el API Docs
<https://nodejs.org/dist/latest-v8.x/docs/api/>

Algunos módulos del core

- Globals
- Process
- Module
- Debugger
- Events
- File System
- Buffer
- Streams
- Http
- Util
- Timers

### Entrono de ejecución

Node.JS es un comando que arranca un proceso del sistema que proporciona

- un entorno de ejecución o intérprete para JavaScript
- un conjunto de librerías básicas, o módulos nativos

parte de estas librerías permite interactuar con componentes del sistema operativo a través de funciones que cumplen con el estándar POSIX

El entorno es ahora el sistema operativo y no el navegador. En el **navegador**, el entorno se hace accesible a traves del objeto **Window** que expone el DOM, el BOM y el resto de las APIs del navegador (Web APIs).

En Node.js el entorno es un **proceso** del S.O. que se ejecuta en un **espacio de memoria** propio, en el que se ejecuta el código JavaScript y se almacenan las variables, objetos y funciones que se crean en el proceso de ejecución. Por defecto, este espacio de memoria es **privado** y no accesible desde el exterior. Sin embargo, mediante la variable **global**, que es un objeto global que se crea automáticamente al arrancar el proceso de Node.js, se pueden hacer **accesibles** las variables, objetos y funciones que se crean en el proceso de ejecución.

### La variable global

Por defecto, disponemos a través de global de

- el módulo console
- el módulo timers
- el objeto Buffer y el módulo buffer
- el objeto nativo process
- structuredClone, fetch, crypto, navigator, etc.

```javascript
console.log(global)
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
```

La mayoría de los elementos de global están también implementados en el navegador, facilitando su uso en ambos entornos.

Para acceder a la variable global, la podemos referenciar como **global**, como **globalThis** u omitirla. Hacerlo a través de this no es posible si JS se ejecuta en modo estricto, lo cual sucede automáticamente en el caso de los módulos ES6

```javascript
process;
global.process;
globalThis.process;
```

La ventaja de usar thisGlobal es que es transparente al entorno de ejecución, ya que en el navegador thisGlobal es equivalente a window y en Node.js a global.

### Process

Dentro de global, el objeto **process** es un objeto global que proporciona información y control sobre el proceso del S.O en el que se ejecuta de Node.js. Como objeto global, está disponible en cualquier parte del código JavaScript como interfaz entre dicho código y el S.O.

```javascript
console.log(process);
```

El objeto process tiene propiedades y métodos que permiten interactuar con el proceso del S.O. en el que se ejecuta Node.js. Algunas de las propiedades y métodos más comunes son:

- **process.argv**: Array que contiene los **argumentos** de la línea de comandos con la que se ha invocado el proceso de Node.js. El primer elemento es el ejecutable de Node.js, el segundo es el nombre del script que se está ejecutando y los siguientes son los argumentos que se han pasado al script.

- **process.env**: Objeto que contiene las **variables de entorno** del proceso de Node.js. Las variables de entorno son pares clave-valor que se pasan al proceso al arrancarlo y que pueden ser consultadas y modificadas a través de process.env.

- **process.exit([code])**: Método que finaliza el proceso de Node.js con el código de salida code. Si no se especifica code, el proceso finaliza con el código 0, que indica que ha finalizado correctamente.

- **process.pid**: Número que identifica de forma única el proceso de Node.js en el S.O. Este número es asignado por el S.O. al arrancar el proceso y no cambia durante la ejecución del proceso.

- **process.platform**: Cadena que indica el sistema operativo en el que se está ejecutando Node.js. Los valores posibles son 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos' y 'win32'.

- **process.stdin**: Flujo de lectura estándar del proceso de Node.js. Este flujo permite leer datos de la entrada estándar del proceso, que por defecto es el terminal en el que se ha arrancado el proceso.

- **process.stdout**: Flujo de escritura estándar del proceso de Node.js. Este flujo permite escribir datos en la salida estándar del proceso, que por defecto es el terminal en el que se ha arrancado el proceso.

- **process.stderr**: Flujo de escritura de errores estándar del proceso de Node.js. Este flujo permite escribir mensajes de error en la salida de errores estándar del proceso, que por defecto es el terminal en el que se ha arrancado el proceso.

### Variables de entorno

Como hemos mencionado, **process.env** contiene las **variables de entorno** del proceso de Node.js.

Las variables de entorno son pares clave-valor que se pasan al proceso al arrancarlo y que pueden proceder de diferentes fuentes, como el sistema operativo, el shell o el propio proceso de Node.js. Estas variables se utilizan para configurar el entorno de ejecución del proceso y para compartir información entre diferentes procesos.
Las variables pueden ser consultadas y modificadas a través de process.env.

Es posible añadir variables de entorno propias en el arranque del proceso de Node.
e.g. NODE_ENV para definir el entorno de Node

```bash (linux shell)
NODE_ENV=dev node index.js
```

```shell (windows command)
set NODE_ENV=dev & node index.js
```

Otra forma de añadir variables de entorno es mediante un fichero .env. Para ello, se puede usar el paquete [dotenv](https://www.npmjs.com/package/dotenv), que permite cargar las variables de un fichero .env en process.env.

Para instalar dotenv, ejecutamos el siguiente comando en la terminal:

```shell
npm install dotenv
```

Una vez instalado dotenv, podemos cargar las variables de un fichero .env en process.env en el script principal de la aplicación de la siguiente forma:

```javascript
// require('dotenv').config(); en CommonJS
import 'dotenv/config';
console.log(process.env.MY_VARIABLE);
```

A partir de la versión 20.6.0 de Node, es posible cargar las variables de un fichero .env en process.env sin necesidad de instalar dotenv, utilizando el flag --env-file al arrancar el proceso de Node.

```shell
node --env-file=.env app.js
```

En el **frontend**, cuando se usa **Vite**, este builder expone algunas de las variables de entrono a traves de `import.meta.env`. Para las variables con nombres definidos por el usuario, se debe usar el prefijo `VITE_` al definirlas en el fichero `.env`

### Eventos

## Node y la línea de comandos

### Node REPL

Node se define compo un REPL, Read-Eval-Print-Loop, que es un entorno interactivo que permite ejecutar código JavaScript en tiempo real. Para arrancar el REPL de Node, ejecutamos el comando node en la terminal sin argumentos.

```shell
node
```

Generalmente se usa para probar código, depurar y experimentar con nuevas funcionalidades. En el REPL de Node, podemos ejecutar cualquier instrucción de JavaScript y ver el resultado de su evaluación en tiempo real.

### stdin y stdout

Para interactuar con el usuario a través de la terminal, se pueden usar el **subsistema estándar I/O**, responsable de los flujos de entrada y salida estándar del proceso de Node.js. Estos flujos son **streams de datos** que permiten leer y escribir datos de forma asíncrona.

De acuerdo con POSIX (estándar para la integración de I/O del programa y las tareas a nivel del sistema) el subsistema estándar I/O tiene tres streams que representan (modelan) las entradas y salidas (en C, los file descriptors 0, 1, 2)

0 - stdin
1 - stdout
2 - stderr

JS como lenguaje NO tiene ningún subsistema estándar I/O (es agnóstico al I/O), por lo que es necesario que lo proporcione el entorno de ejecución, Node o el navegador. Esta independencia de JS del I/O es una de las razones de su capacidad de ser usado en cualquier entorno o dispositivo.

#### Output: stdout y stderr

Para los flujos de salida estándar y de errores estándar, tanto en Node como en el navegador utilizan los métodos del objeto `console`. En Node, estos métodos son en realidad llamadas al subsistema estándar I/O, por lo que simplificando para un simple string, la sentencia `console.log ('Hello!')` se implementaría como `process.stdout.write('Hello!\n')`.

```javascript
console.log('Hello!');
process.stdout.write('Hello!\n');
```

En realidad pasar los caracteres directamente al stream sería la forma menos eficiente, y el método `console.log()` es realmente una llamada al **subsistema estándar I/O** (process.std....), basado en **streams de datos**, que es más eficiente que pasar los caracteres directamente al stream. En cualquier caso, para entenderlo, podemos asumir esta simplificación.

En caso de errores, existe un subsistema estándar I/O específico, `process.stderr`, que se usa para mostrar mensajes de error. En lugar de `console.log('Error!')`, se puede usar `process.stderr.write('Error!\n')`.

```javascript
console.log('Error!');
process.stderr.write('Error!\n');
```

Los streams de salida son distintos (1 y 2) como demuestran las siguientes **redirecciones** en la consola

```shell (Linux shell)
node ex01.js 1>/dev/null  // Error! (no se muestra en consola Hello!)
node ex01.js 2>/dev/null  // Hello! (no se muestra en consola Error!)
```

En Linux, en cada uno de los casos, la parte 1 (stdout) o 2 (stderr) se redirige a /dev/null, que es un dispositivo especial en Unix que descarta todo lo que se escribe en él. Por tanto solo se verá el mensaje que no se redirige.

En Windows se puede hacer lo mismo, pero con un comando diferente, que redirige la salida a un fichero txt

```shell (windows command)
node ex01.js 1>log.txt ---> // se muestra solo Error! (se escribe en fichero Hello!)
node ex01.js 2>log.txt ---> // se muestra solo Hello! (se escribe en fichero Error!)
```

Por esto es conveniente usar console.error() incluso cuando en consola se vea igual, en caso de que el shell no distinga gráficamente entre stdout y stderr, como si hace la consola del navegador.

#### Nota sobre los saltos de línea

Existen tres formas de hacer saltos de línea, dependiendo del sistema operativo:

- **\n**: LF (Line Feed), que se usa en Unix y Linux
- **\r**: CR (Carriage Return), que se usaba en Mac OS antes de la versión X
- **\r\n**: CRLF (Carriage Return Line Feed), que se usa en Windows

En los ejemplos anteriores se ha utilizado `\n`, que es el salto de línea estándar en Unix y Linux, pero que también es reconocido por Windows. Para hacer saltos de línea en Windows, se debe usar `\r\n`.

#### Input: stdin

En process.stdin existe un método `read()` que permite leer datos de la entrada estándar del proceso de Node.js. Este método es asíncrono hace difícil su uso en la práctica.

En su lugar, se suele usar el evento `data` del stream de entrada estándar, que se dispara cuando se recibe un buffer de datos en la entrada estándar. Este evento se puede escuchar con el método `on()` del stream de entrada estándar.

Con ello podemos ver dos de los elementos clave del diseño de Node.js:

- la **orientación a eventos**
- la gestión de la **asincronía** mediante callbacks: el método on, que maneja el evento recibe como argumentos el nombre del evento y una función de callback que se ejecuta cuando se dispara el evento.

```javascript
process.stdout.write('Dinos tu nombre: ');
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Hello, ${name}!\n`);
  process.exit();
});
```

Como veremos, en la práctica la lectura de la entrada estándar se hace de forma más sencilla con **librerías**, que simplifican la gestión de la entrada estándar y permiten hacer cosas más complejas como leer líneas completas o mostrar mensajes al usuario.

### Creación de un CLI

Una de las aplicaciones más comunes de Node.js es la creación de **CLI** (Command Line Interface) o interfaces de línea de comandos. Una CLI es una aplicación que se ejecuta en la terminal y permite interactuar con el usuario a través de comandos, de manera similar a como lo hace un shell del S.O.

Esto plantea dos necesidades:

- hacer el comando ejecutable, es decir que se pueda invocar desde la terminal sin necesidad de invocar node, como si fuera un comando del sistema
- procesar los argumentos que se pasan al comando para hacer que la aplicación responda de forma diferente en función de los argumentos aportados por el usuario

#### Creación de un comando ejecutable

Para hacer un comando ejecutable en Linux, se debe añadir un shebang al principio del fichero que contiene el código del comando. Un shebang es una secuencia de caracteres que indica al S.O. cómo debe ejecutar el fichero.

```shell
#!/usr/bin/env node
```

Además, se debe dar permisos de ejecución al fichero que contiene el código del comando. Para ello, se debe ejecutar el siguiente comando en la terminal:

```shell
chmod +x index.js
```

En cualquiera de los casos, se debe añadir el fichero que contiene el código del comando al PATH del sistema para que se pueda invocar desde cualquier directorio. Alternativamente es posible crear un enlace simbólico al fichero en un directorio que ya esté en el PATH. Para ello, se debe ejecutar el siguiente comando en la terminal:

```shell (Linux shell)
ln -s /ruta/al/fichero /usr/local/bin/nombre_comando
```

```shell (Windows command)
mklink /ruta/al/fichero /usr/local/bin/nombre_comando
```

Esta misma operación se puede hacer mediante npm, añadiendo el comando a la sección bin de package.json y ejecutando el comando npm link en la terminal.

```json
{
  "name": "my-cli",
  "version": "1.0.0",
  "bin": {
    "my-cli": "./index.js"
  }
}
```

```shell (admin mode)
npm link
```

Nota: es posible que en Windows se necesite configurar el final de línea como LF en lugar de CRLF para que el comando funcione correctamente. También puede ser necesario configurar la extensión .js asociada a Node.

#### Procesamiento de argumentos

Como ya vimos, **process.argv** es un array que contiene los **argumentos** de la línea de comandos con la que se ha invocado el proceso de Node.js. El primer elemento es el ejecutable de Node.js, el segundo es el nombre del script que se está ejecutando y los siguientes son los argumentos que se han pasado al script.

Si al comando del CLI se le añade un texto, process.argv[2] lo recogerá

```javascript
const text = process.argv[2];
console.log(text);
```

Para facilitar el procesamiento se suelen utilizar librerías como [minimist](https://www.npmjs.com/package/minimist), [yargs](https://www.npmjs.com/package/yargs) o [commander](https://www.npmjs.com/package/commander) que permiten definir los argumentos que acepta el comando y procesarlos de forma sencilla.

Para instalar una de estas librerías, se debe ejecutar alternativamente alguno de los siguientes comandos en la terminal:

```shell
npm install minimist
npm install -D @types/minimist
```

```shell
npm install yargs
npm install -D @types/yargs
```

En el caso de commander, al estar echo en TS, no es necesario instalar los tipos aparte

```shell
npm install commander
```

#### Procesamiento de argumentos con minimist

Por ejemplo, con minimist, se puede definir los argumentos que acepta el comando y procesarlos de la siguiente forma:

```javascript
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2), {
  boolean: ['help', 'version'],
  string: ['name'],
  alias: {
    h: 'help',
    v: 'version',
  },
});
```

El tipo del argumento se define en el objeto de configuración de minimist, que acepta las siguientes propiedades:

- **boolean**: Array con los nombres de los argumentos que deben ser tratados como booleanos (solo se detecta su presencia o ausencia).
- **string**: Array con los nombres de los argumentos permiten recoger una cadenas de texto.
- **alias**: Objeto con los nombres de los argumentos y sus alias.

```shell
node index --version
node index.js -help
node index.js --name "John Doe" -h -v
```

#### Procesamiento de argumentos con yargs

Con yargs, no es necesario incluir los comandos de ayuda y versión, ya que se incluyen por defecto. Para definir los argumentos que acepta el comando y procesarlo, se puede hacer con el método **command**:

- command: crea un comando
  - nombre y argumentos <requeridos> / [opcionales]
  - descripción
  - función de formato, para los argumentos
  - función del comando

Por ejemplo, un comando new que acepta un argumento note, de tipo string

```typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    (yargs) => {
      return yargs.positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string',
      });
    },
    () => {
      console.log('Procesando comando new');
      console.log({ argv });
    },
  )
  .demandCommand(1)
  .parse();
```

El método option le añade al parámetro argumentos opcionales, definidas como un objeto

Por ejemplo, al comando new que acepta un argumento note, le añadimos un argumento opcional tags, de tipo string, que se puede abreviar con -t

```typescript
yargs(hideBin(process.argv))
  .command(
    'new <note>',
    ...
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  });
  .demandCommand(1)
  .parse();
```

En el método command, el tercer parámetro es una función que se ejecuta cuando se invoca el comando. En este caso, se muestra el contenido del argumento note y tags.

Por el momento solo se muestra el contenido de los argumentos, que nos muestra como los procesa yargs

```shell
Procesando comando new
{
  argv: {
    _: [ 'new' ],
    t: 'saludo,español',
    tags: 'saludo,español',
    '$0': 'note',
    note: "'Hola'"
  }
}
```

Se crea un objeto argv con las siguientes propiedades:

- las propiedades correspondientes a los argumentos, incluyendo sus alias abreviados, en este caso note, tags y t.
- una propiedad $0 con el nombre del argumento obligatorio
- una propiedad \_ con el nombre del comando.

Podemos completar la función de comando con la creación de una nota, que se puede hacer de forma asíncrona, y mostrar un mensaje de confirmación.

```typescript
import yargs from 'yargs';
import { hideBin } from "yargs/helpers";

const createNote = async (content: string, tags: string[]) => {
    console.log('Creating note...');
    const newNote = { content, tags };
    return newNote;
};

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    () => {
     ...;
    },
    async (argv) => {
      // console.log('Procesando comando new');
      // console.log({ argv });
      const content = argv.note;
      if (!content) {
          console.error('You must provide a note to create');
          process.exit(1);
      }
      const tags: string[] = argv.tags
          ? (argv.tags as string).split(',')
          : [];
      const newNote = await createNote(content, tags);
      console.log('Note created!', newNote);
    },
  )
  ...
  .demandCommand(1)
  .parse();
```

El resultado final sería algo como esto:

```typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const createNote = async (content: string, tags: string[]) => {
  console.log('Creating note...');
  const newNote = { content, tags };
  return newNote;
};

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    (yargs) => {
      return yargs.positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string',
      });
    },
    async (argv) => {
      // console.log('Procesando comando new');
      // console.log({ argv });
      const content = argv.note;
      if (!content) {
        console.error('You must provide a note to create');
        process.exit(1);
      }
      const tags: string[] = argv.tags ? (argv.tags as string).split(',') : [];
      const newNote = await createNote(content, tags);
      console.log('Note created!', newNote);
    },
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  })
  .demandCommand(1)
  .parse();
```

El resultado es una nueva nota con el contenido y las etiquetas que se han pasado como argumentos al comando new, pero sin ninguna **persistencia** en el tiempo. Para dársela se necesita un sistema de **almacenamiento**, como una base de datos o un fichero. En el caso de un fichero, se puede usar el **file system** proporcionado por módulo fs de Node.js.

## File System

El módulo fs de Node incluye las principales funciones para trabajar con ficheros y directorios. Algunas de las funciones más comunes son:

- fs.readFile() to read a file
- fs.writeFile() to write a file
- fs.mkdir() to create a new directory
- fs.readdir() to read the contents of a directory
- fs.stat() to get information about a file
- fs.unlink() to delete a file
- fs.rename() to rename a file

### Estructura de carpetas

En la mayoría de los casos es necesaria una referencia a la estructura de carpetas sobre la que se quiere realizar la operación. Para ello se usaba tradicionalmente

- la variable \_\_dirname, que contiene la ruta absoluta del directorio que contiene el fichero que se esta ejecutando
- el método `path.join()` del módulo **path** del core de NodeJS, que permite concatenar las partes de una ruta de forma segura, independientemente del sistema operativo.

```typescript
import path from 'path';
const dir = path.join(__dirname, 'notes');
```

Sin embargo, con los módulos ES6, la variable \_\_dirname no está definida, pero se puede usar la variable `import.meta.url` para obtener la ruta del fichero actual, y el método `new URL()` para obtener la ruta del directorio que contiene el fichero actual. 'URL' es un objeto global que se puede usar para crear y manipular URLs, por lo que no es necesario importarlo.

```typescript
import { fileURLToPath } from 'url';

const fileURL = new URL('./notes.json', import.meta.url);
const filePath = fileURLToPath(fileURL);
```

Otra opción es usar otra función del módulo **path**, `path.resolve()`, que permite obtener la ruta absoluta de un fichero o directorio a partir de una ruta relativa.

Por defecto `path.resolve` toma la ruta absoluta al directorio donde se ejecuta el script
(el mismo valor de la variable predefinida \_\_dirname) y la incorpora a la ruta relativa que se le pasa como argumento.
Si se le pasa una ruta absoluta, simplemente la devuelve

```typescript
import path from 'path';
const filePath = path.resolve('notes.json'); // /ruta/absoluta/del/directorio/actual/notes.json
```

### Versiones de las funciones

Las funciones del módulo fs de Node.js tienen dos versiones:

- una versión **síncrona**, que bloquea el hilo principal hasta que se completa la operación. Su nombre termina en Sync
- una versión **asíncrona**, que no bloquea el hilo principal y recibe un callback que se ejecuta cuando se completa la operación

### Lectura de ficheros

Para leer un fichero de forma síncrona se usa `fs.readFileSync()`, y para leerlo de forma asíncrona se usa `fs.readFile()`.

En el caso síncrono, se pasa la ruta del fichero y la codificación del fichero, que por defecto es utf-8. El resultado es un string con el contenido del fichero.

```typescript
import fs from 'fs';

const content = fs.readFileSync(filePath, 'utf-8');
console.log(content);
```

Si no se incluye la codificación, el resultado es un buffer con el contenido del fichero, del que se pueden obtener los datos en formato binario o convertirlos a string con el método toString.

```typescript
import fs from 'fs';
const content = fs.readFileSync(filePath);
console.log(content.toString());
```

En el caso asíncrono, se pasa la ruta del fichero, la codificación y una función de callback que se ejecuta cuando se completa la operación. El resultado es un buffer con el contenido del fichero.

```typescript
import fs from 'fs';
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

Los parámetros de la función de callback siguen el patrón de Node.js, conocido como 'error first', con el primer parámetro como un posible error y el segundo como el resultado de la operación.

### File System basado en Promesas

Con posterioridad a la versión 12 de Node.js, el módulo fs incluye una versión basada en promesas de las funciones asíncronas, que se puede importar desde `fs/promises`.

```typescript
import fs from 'fs/promises';

const content = await fs.readFile(filePath, 'utf-8');
console.log(content);
```

### Escritura de ficheros

Para escribir un fichero de forma síncrona se usa `fs.writeFileSync()`, y para escribirlo de forma asíncrona se usa `fs.writeFile()` o su versión basada en promesas.

En el caso síncrono, se pasa la ruta del fichero, el contenido y la codificación del fichero, que por defecto es utf-8.

```typescript
import fs from 'fs';
const newContent = 'Hello, World!';
fs.writeFileSync(filePath, newContent, 'utf-8');
```

En el caso asíncrono, se pasa la ruta del fichero, el contenido, la codificación y una función de callback que se ejecuta cuando se completa la operación.

```typescript
import fs from 'fs';
const newContent = 'Hello, World!';
fs.writeFile(filePath, newContent, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written!');
});
```

Hoy en día es más habitual usar la versión basada en promesas, que se puede importar desde `fs/promises`. En ese caso, se pasa la ruta del fichero, el contenido y la codificación del fichero, y se usa el método then() para manejar el resultado de la operación.

```typescript
import fs from 'fs/promises';
const newContent = 'Hello, World!';
fs.writeFile(filePath, newContent, 'utf-8')
  .then(() => {
    console.log('File written!');
  })
  .catch((err) => {
    console.error(err);
  });
```

### CRUD sobre datos JSON

El formato **JSON** es muy común para almacenar datos en ficheros, ya que es fácil de leer y escribir, y se puede convertir a objetos de JavaScript de forma sencilla. Es posible usar un fichero JSON para almacenar datos de forma persistente, como si fuera una base de datos, implementando como un servicio las operaciones **CRUD** (Create, Read, Update, Delete) sobre los datos.

El fichero puede crearse de forma manual, pero también se puede crear de forma automática si no existe, para lo que se puede usar el método `fs.existsSync()` para comprobar si el fichero existe, y `fs.writeFileSync()` para crearlo.

```typescript
import fs from 'fs';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(
  new URL('../data/notes.db.json', import.meta.url),
);
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8');
}
```

El fichero se está creando en la carpeta data, que se debe crear manualmente, fuera de dist, para hacer posible su subida a GitHub. Al inicializarla como un array vacío, y tratándose de una operación que solo se ejecuta una vez, no es necesario que sea asíncrona.

Como servicio podemos crear los métodos que permitan realizar las operaciones CRUD sobre los datos del fichero JSON, es decir que leen, escriben, insertan y borran, como un ORM/ODM básico para nuestro fichero JSON.

#### Modelo de datos

Para trabajar con los datos del fichero JSON, se puede definir un modelo de datos que represente la estructura de los datos. En este caso, se puede usar un tipo / interfaz de TypeScript para definir la estructura de los datos de las notas.

```typescript
export interface Note {
  id: string;
  content: string;
  tags: string[];
}
```

```typescript
export type Note = {
  id: string;
  content: string;
  tags: string[];
};
```

#### Operaciones

Para realizar las operaciones CRUD sobre los datos del fichero JSON, se pueden definir los métodos que permitan leer, escribir, insertar y borrar datos del fichero.

```typescript
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { Note } from './note.model';

const filePath = fileURLToPath(
  new URL('../data/notes.db.json', import.meta.url),
);

export const readNotes = async (): Promise<Note[]> => {
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
};

export const writeNotes = async (notes: Note[]): Promise<void> => {
  await fs.writeFile(filePath, JSON.stringify(notes, null, 2), 'utf-8');
};

export const createNote = async (note: Note): Promise<void> => {
  const notes = await readNotes();
  notes.push(note);
  await writeNotes(notes);
};

export const updateNote = async (id: string, note: Note): Promise<void> => {
  const notes = await readNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  notes[index] = note;
  await writeNotes(notes);
};

export const deleteNote = async (id: string): Promise<void> => {
  const notes = await readNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  notes.splice(index, 1);
  await writeNotes(notes);
};
```

#### Abstracción, Uso de Genéricos

Para hacer el servicio más genérico, abstraer el tipo de datos y permitir trabajar con cualquier tipo de datos, se puede usar un tipo genérico en lugar de un tipo específico.

```typescript
const filePath = new URL('../data/db.json', import.meta.url).pathname;

// Read Items

export const read = async <T>(): Promise<T[]> => {
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
};

// Write Data Array

const write = async <T>(items: T[]): Promise<void> => {
  await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf-8');
};

// Create item

export const create = async <T>(item: T): Promise<void> => {
  const items = await read<T>();
  items.push(item);
  await write<T>(items);
};

// Read item

export const update = async <T extends { id: string }>(
  id: T['id'],
  item: T,
): Promise<void> => {
  const items = await read<T>();
  const index = items.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Item with id ${id} not found`);
  }
  items[index] = item;
  await write<T>(items);
};

export const remove = async <T extends { id: string }>(
  id: T['id'],
): Promise<void> => {
  const items = await read<T>();
  const index = items.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error(`Item with id ${id} not found`);
  }
  items.splice(index, 1);
  await write<T>(items);
};
```

#### Abstracción, Uso de Genéricos y Clases

Para hacer el servicio más genérico, abstraer el tipo de datos y permitir trabajar con cualquier tipo de datos, se puede crear una clase genérica que permita trabajar con cualquier tipo de datos, usando los genéricos en su tipado

### Completando el CLI

A partir del servicio que nos proporciona los métodos del crud, podemos completar el CLI con los comandos que permitan interactuar con las notas, como listar, crear, actualizar y borrar notas.

````typescript


## Testing

## Servidor WEB (HTTP)

```javascript

````

### Módulo http

## API Rest con Express

```javascript

```

## Aplicación Realtime con Socket IO

## Despliegue y publicación en npm
