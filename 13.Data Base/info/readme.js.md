---
title: SQL y ECMAScript (JavaScript)
---

- [MySQL y JavaScript / TypeScript](#mysql-y-javascript--typescript)
  - [Opciones en Node.js para utilizar MySQL](#opciones-en-nodejs-para-utilizar-mysql)
    - [Driver nativo para Node](#driver-nativo-para-node)
    - [ORM (Object–relational mapping)](#orm-objectrelational-mapping)
  - [Driver nativo MySQL con Node.js y TypeScript](#driver-nativo-mysql-con-nodejs-y-typescript)
- [SQLite y JavaScript / TypeScript](#sqlite-y-javascript--typescript)
  - [Opciones en Node.js para utilizar SQLite](#opciones-en-nodejs-para-utilizar-sqlite)
  - [sqlite3](#sqlite3)

## MySQL y JavaScript / TypeScript

### Opciones en Node.js para utilizar MySQL

#### Driver nativo para Node

- driver antiguo [mysql](https://www.npmjs.com/package/mysql)

This is a node.js driver for mysql.
It is written in JavaScript, does not require compiling, and is 100% MIT licensed.

- driver moderno [mysql2](https://www.npmjs.com/package/mysql2)

A continuation of MySQL-Native.
Protocol parser code was rewritten from scratch and api changed to match popular Node MySQL.

#### ORM (Object–relational mapping)

from [9 Best JavaScript and TypeScript ORMs for 2024](https://www.sitepoint.com/javascript-typescript-orms/)

- [Knex.js](https://knexjs.org/) JavaScript SQL Query builder
- [Sequelize](https://sequelize.org/) JavaScript ORM Library on top of some native driver
- [Bookshelf](https://bookshelfjs.org/) JavaScript ORM Library on top of Knex.js SQL Query Builder
- [Objection.js](https://vincit.github.io/objection.js/) JavaScript ORM Library on top of Knex.js SQL Query Builder and some native driver
- [TypeORM](https://typeorm.io/) TypeScript ORM Library on top of reflect-metadata and some native driver
- [MikroORM](https://mikro-orm.io/) TypeScript ORM Library for SQL and NoSQL inspired by PHP Doctrine
- [Prisma](https://www.prisma.io/) recent TypeScript ORM

### Driver nativo MySQL con Node.js y TypeScript

Instalación

```shell
npm install mysql2
```

Como ya incluye soporte para TypeScript, no es necesario instalar tipos adicionales

Conexión a la base de datos

```typescript
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost:3306',
  // port:  process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  passwd: process.env.DB_PASSWD,
  database: process.env.DB_NAME || 'movies_db',
});
```

La conexión incluye un método `query` para realizar consultas

```typescript
const [rows, fields] = await connection.query('SELECT * FROM movies');
```

En las consultas es crítico el uso correcto de parámetros para evitar inyecciones SQL

```typescript
const [rows, fields] = await connection.query(
  'SELECT * FROM movies WHERE id = ?',
  [movieId]
);
```

En ningún caso se deben concatenar los valores directamente en la consulta o incluirlos en un template string

```typescript
// Incorrecto: permitiría inyecciones SQL
const [rows, fields] = await connection.query(
  `SELECT * FROM movies WHERE id = ${movieId}`
);
```

Las operaciones de un CRUD se pueden encapsular en funciones o métodos de clase, utizando en cada caso el método `query` de la conexión para realizar las operaciones sql de `SELECT`, `INSERT`, `UPDATE` y `DELETE`.

En el tipado del resultado de la query se pueden usar 2 tipos principalmente, proporcionados por la librería `mysql2`

- `FieldPacket[]` para el resultado de una consulta SELECT de un solo campo
- `RowDataPacket[]` para el resultado de una consulta SELECT simple de varias columnas
- `RowDataPacket[][]` para el resultado de una consulta SELECT con varias tablas
- `ResultSetHeader` para el resultado de una operación de modificación de la base de datos (INSERT, UPDATE, DELETE)

```typescript
import { FieldPacket, RowDataPacket } from 'mysql2';

const [rows, fields] = await connection.query('SELECT * FROM movies');
const [rows, fields] = await connection.query(
  'SELECT * FROM movies WHERE id = ?',
  [movieId]
);
```

## SQLite y JavaScript / TypeScript

### Opciones en Node.js para utilizar SQLite

Hasta hace poco, existian varias librerías para trabajar con SQLite en Node.js, aunque algunas no soportaban TypeScript o no tenían soporte activo. Entre las mejores opciones estaban:

- `sqlite3`, que es un wrapper de la librería `sqlite3` de C++ y desde su versión 5.0 de `sqlite3` incluye soporte para TypeScript.
- `better-sqlite3` es una librería que se presenta como una alternativa a `sqlite3` y que también incluye soporte para TypeScript.

Desde su versión 22.5.0 NodeJS incluye un módulo nativo para trabajar con SQLite, aunque de momento en estado experimental.
Esta adición es similar a lo que ya tenían otros entornos de ejecución de JavaScript como Deno y Bun. Otros lenguajes de programación como Python y PHP también incorporan SQLite, lo que demuestra los beneficios de agregar esta característica a un entorno de ejecución.

En su versión 22.4.0, Node.js añadió soporte experimental para Web Storage (que consiste en almacenamiento local y de sesión). Esta nueva característica sirve como un sistema de clave–valor en Node.js y mejora la compatibilidad de Node.js con las APIs Web. Los desarrolladores de Node.js utilizaron SQLite para manejar esta característica de Web Storage y han decido hacerla utilizable como un nuevo módulo, `node:sqlite`.

Por el momento, para utilizarla es necesario habilitar la bandera `--experimental-vm-modules` al ejecutar Node.js.

```shell
node --experimental-sqlite index.js
```

[Using the built-in SQLite module in Node.js](https://blog.logrocket.com/using-built-in-sqlite-module-node-js/)

### sqlite3

La librería [sqlite3](https://www.npmjs.com/package/sqlite3) se puede instalar mediante npm

```shell
npm install sqlite3
```

Conexión a la base de datos en memory

```typescript
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');
```

Conexión a la base de datos en un archivo

```typescript
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('movies.db');
```
