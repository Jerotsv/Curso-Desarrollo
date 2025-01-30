---
title: Introducción a las DB
---

## DB - Base de Datos

Tipos de DB:

- Relacionales (SQL): MySQL, PostgreSQL, SQLite, Oracle, SQL Server
- No Relacionales (NoSQL): MongoDB, CouchDB, Cassandra, Redis, Firebase

Mapeo a objetos en JS:

- ORM (Object-Relational Mapping): Sequelize, TypeORM, Knex
- ODM (Object-Document Mapping): **Mongoose**, Firebase
- ORM/ODM: **Prisma**

Ejemplo con prisma

```js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'a@sample.com',
    },
  });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}
```

## DB y colecciones

- Tablas (SQL) -> Colecciones (NoSQL)
- Filas (SQL) -> Documentos (NoSQL)

Ejemplo al estilo de Mongoose

```json
{
  "users": [
    { "name": "Alicia", "email": "ali@sample.com" },
    { "name": "Bob", "email": "bob@sample.com" }
  ],
  "posts": [
    { "title": "Post 1", "content": "Content 1" },
    { "title": "Post 2", "content": "Content 2" }
  ]
}
```
