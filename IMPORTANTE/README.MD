# INFORMACIÓN IMPORTANTE PARA EL CURSO

## LIVE SERVER

Se puede crear desde el plugin o desde lista de comandos (Tiene que estar instalado, para comprobarlo hacer live-server -v en cmd)
Si queremos iniciar desde plugin debemos abrir repositorio de la carpeta especifica
Si por el contrario queremos abrirlo desde nuestras carpetas generales, debemos ir a la carpeta especifica y ejecutar el comando live-server

## INICIAR PROYECTO

Crear carpeta
Iniciar git init en la carpeta
Add .gitignore desde plugin o comando
Crear el readme.md con la información importante
npm init -y (Crea el archivo package.json)
Crear el .editorconfig acorde con el resto del grupo de trabajo
Hacer git add . para poder comitear el Initial commit
Hacer el primer commit "Initial commit"
Hacer remoto en GitHub
Hacer el push al remoto
Debemos tener estos 4 ficheros: readme.md, .gitignore, .package.json y .editorconfig

---

Una vez tengamos esto debemos crear el fichero INDEX.HTML, que debe estar en la carpeta raíz para poder usar GitHub como hosting

### Configuracion básica de tu package.json incluyendo node y ts

{
"name": "16.prisma",
"version": "1.0.0",
"main": "index.js",
"type": "module",
"scripts": {
"start": "cross-env NODE_ENV=prod node dist/index.js",
"start:dev": "cross-env NODE_ENV=dev DEBUG=films\* node --watch --env-file=.env ./dist/index.js",
"build": "tsc -w",
"lint": "eslint . --ext .ts"
},
"keywords": [],
"author": "",
"license": "ISC",
"description": "",
"prettier": {
"singleQuote": true
},
"devDependencies": {
"@eslint/js": "^9.21.0",
"@types/node": "^22.13.5",
"eslint": "^9.21.0",
"globals": "^16.0.0",
"prettier": "^3.5.2",
"typescript": "^5.7.3",
"typescript-eslint": "^8.25.0"
},
"dependencies": {
"cross-env": "^7.0.3"
}
}

## PREGUNTAS EXAMEN MODULO 1

-   Que significa HTML: Lenguaje de marcas de hipertexto (Hypertext Markup Language)
-   Que es root: Una pseudoclase
-   A que hace referencia root: A la etiqueta HTML y se usa por que tiene mayor
-   Que es el DOM (Document Object Model): El DOM es la conexión entre el navegador y el código JavaScript, y te permite modificar la página web en tiempo real para crear experiencias interactivas y dinámicas.

## GESTIÓN DE DATOS

-   Create
-   Read
-   Update
-   Delete

## PREGUNTAS EXAMEN MODULO 2

-   Lo que hay a la derecha del = SIEMPRE es una expresión
-   Una variable es un identificador asociado/asignado a un valor. Los identificadores los pintamos cuadrados y los valores en circulo.
-   MUY IMPORTANTE: 4 pilares de la programación orientada a objetos (OOP): Abstracción, Encapsulación, Herencia, Polimorfismo. **(LINEA 168 DE JS.PRO/DEMO-TS/INFO-TS/INFO.OOP.MD)**

    1. Abstracción: Consiste en simplificar la complejidad, mostrando solo las características esenciales de un objeto y ocultando las detalles innecesarios. Ayuda a centrarse en lo que hace un objeto sin preocuparse por cómo lo hace

    2. Encapsulación: Es el proceso de ocultar los detalles internos de un objeto y exponer solo la interfaz necesaria para interactuar con él. Así, puedes modificar el comportamiento interno de una clase sin afectar a otros componentes del sistema.

    3. Herencia: La herencia permite crear nuevas clases ((subclase o clase derivada)) basadas en clases existentes (superclase o clase base). Se puede decir que una clase "**hija**" hereda propiedades y métodos de una clase "**padre**". Esto permite la **reutilización** de código y la **extensión** de funcionalidades, En TypeScript, se utiliza la palabra clave `extends` para indicar que una clase hereda de otra.

    4. Polimorfismo: Permite que diferentes clases respondan al mismo mensaje (método) de diferentes maneras. Esto facilita la extensión de las funcionalidades de una clase sin necesidad de modificar el código existente

-   MUY IMPORTANTE PARA EL USO DE LA HERENCIA:
    La herencia debe usarse con cuidado para evitar diseños incorrectos o innecesariamente complicados. Algunas directrices importantes son:

1. **Evitar la herencia para reutilización de código genérico**: Si solo necesitas reutilizar código, considera utilizar **composición** o **delegación** en lugar de herencia.

2. **Diseño basado en relaciones "es-un"**: Utiliza herencia solo cuando exista una relación natural de "es-un" entre las clases. Ejemplo: Un `Dog` es un `Animal`.

3. **Evitar herencias profundas**: Las jerarquías de herencia muy profundas pueden volverse difíciles de mantener. Prefiere herencias simples o jerárquicas limitadas.

4. **Usar clases abstractas para comportamiento común**: Las clases abstractas pueden ser útiles para definir comportamientos comunes que deben ser implementados por las subclases.

5. **Prefiere la composición sobre la herencia**: Este es un principio de diseño común (conocido como "favor composition over inheritance"). La composición permite crear relaciones "tiene-un" en lugar de "es-un" y es más flexible para cambios en el diseño.

Diferencias entre tipado de tuple y array:

-   const array = string[] (Tipado de array vacio de tipo string)
-   const tuple = [string, number, 'hola'] (Tipado dentro del array, se denomina tupla)

Que es y como nos protegemos de una inyeccion de sql?

-   Pasarle los datos mediante el placeholder ?,

APP.USE quiere decir, registra el middleware, usa este middleware

Orden de ejecución y responsabilidad de cada capa
Cuando un usuario hace una petición a tu API, el flujo suele seguir este orden:

1️⃣ server.ts (o .js)

Es el punto de entrada principal.
Arranca el servidor y enlaza la aplicación con Express.
Escucha las peticiones en un puerto.

2️⃣ app.ts (o .js)

Inicializa Express y configura los middlewares globales.
Importa los routers para definir las rutas disponibles.
Se lo pasa al servidor para que comience a escuchar.

3️⃣ router/

Define las rutas de la API.
Llama al controller correspondiente cuando llega una petición.

4️⃣ middleware/

Son funciones intermedias que se ejecutan antes de llegar al controlador.
Ejemplos: validación de datos, autenticación, logging, manejo de errores.
Se pueden ejecutar a nivel global o por ruta específica.

5️⃣ controller/

Se encarga de manejar la lógica de cada endpoint.
Recibe la petición del router, extrae los datos, y llama al service o repository.
Retorna la respuesta adecuada.

6️⃣ services/

Contiene la lógica de negocio de la aplicación.
Se comunica con los repositories si es necesario acceder a la base de datos.
Realiza cálculos o transformación de datos antes de enviarlos al controller.

7️⃣ repository/

Es la capa encargada de interactuar con la base de datos.
Encapsula la lógica de acceso a los datos.
Solo se comunica con la capa de services.

8️⃣ types/

Define interfaces y tipos para TypeScript.
Se usa para estructurar los datos que pasan entre capas.
