## Prisma

### Introducción

Prisma es un **ORM** (Object-Relational Mapping) para bases de datos.
Es una herramienta que nos permite interactuar con la base de datos sin tener que escribir SQL.
Prisma se encarga de traducir nuestras consultas en código JavaScript a SQL.

Esta especialmete pensado para trabajar con **TypeScript** y **Node.js**, proporcionando un tipado seguro.

Soporta diversos tipos de bases de datos

- relacionales, como **PostgreSQL**, **MySQL** y **SQLite** o recientemente **SQL Server**
- no relacionales, como **MongoDB**

En teoría el cambio de una DB a otra solo requiere cambiar el archivo de configuración, incluyendo los datos cadena de conexión y eventualmente algunos tipos de datos particulares.

Prisma provee un API que facilita la interacción con la base de datos, permitiendo realizar consultas de manera sencilla y segura. Incluye ademas algunas herramientas como **Prisma Studio**, una interfaz gráfica para explorar y modificar los datos de la base de datos.

Es habitual usar Prisma junto con frameworks de backend de Node.js como **Express**, **Fastify** o **NestJS** o con frameworks que incluyan server side rendering como **Next.js**.

Prisma se compone de varias partes principales:

- **Prisma Client**: un cliente de base de datos auto-generado en función de los modelos de tablas proporcionados por el desarrollador.
  Proporciona una API de base de datos de tipado seguro para Node.js y TypeScript, generando lo tipos necesarios.
- **Prisma Schema**: un archivo que define el modelo de datos de la aplicación y cómo se relacionan entre sí.
  Prisma client se genera a partir de este archivo, para adecuarse al esquema utilizado en la aplicación.
- **Prisma Migrate**: una herramienta de migración de base de datos que permite a los desarrolladores definir y aplicar cambios en la base de datos de forma programática.
- **Prisma Studio**: una interfaz gráfica para explorar y modificar los datos de la base de datos.

### Instalación

Antes de comenzar, conviene añadir en **VSC** el plugin de **Prisma**, que nos ayudará a escribir el esquema de Prisma.

#### Prisma CLI

Instalamos **Prisma CLI** como una dependencia de desarrollo, ya que será el responsable de crear el **cliente de Prisma**, que si será dependencia final del proyecto.
Se puede considerar como el SDK que usaremos en nuestro código para interactuar con la base de datos.

`npm install -D prisma`

Los comandos del CLI son

- init: Setup Prisma for your app
- generate: Generate artifacts (e.g. Prisma Client)
- db: Manage your database schema and lifecycle
- migrate: Migrate your database
- studio: Browse your data with Prisma Studio
- validate: Validate your Prisma schema
- format: Format your Prisma schema

El siguiente paso es inicializar Prisma en nuestro proyecto. Para ello, ejecutamos el siguiente comando:

`npx prisma@latest init --datasource-provider`

(`npx prisma@latest init --db` es un shorthand para `npx prisma@latest init --datasource-provider postgres`)

Si no se indica el tipo de base de datos, Prisma utiliza Postgres (`postgresql`).

Alternativamente se puede indicar `mysql`, `sqlite` o `sqlserver` o alguna otras de las indicadas en <https://www.prisma.io/docs/orm/overview/databases>.

La consola nos mostrara el resultado

```shell
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started
```

Como se indica, los siguientes pasos serán

1. Configurar la cadena de conexión en el archivo .env

   - Para sqlite, la cadena de conexión es `file:./dev.db`
   - Para mysql, la cadena de conexión es `mysql://user:password@localhost:3306/dbname`
   - Para postgres, la cadena de conexión es `postgresql://user:password@localhost:5432/dbname`

2. Ejecutar `prisma db pull` para convertir el esquema de la base de datos en un esquema de Prisma, si ya existe esquema en la base de datos
3. Alternativamente definir el esquema en el archivo de Prisma, como veremos.
4. Ejecutar `prisma generate` para generar el cliente de Prisma

```shell
npx prisma generate
```

#### Prisma Client

Generalmente no necesitamos instalar el **cliente de Prisma**. A partir de la versión 2.0, **Prisma Client** es un paquete NPM que se genera bajo demanda para ajustarse a tu esquema.

Esto significa que cuando ejecutamos `prisma generate` o `prisma migrate`, se generará un cliente de Prisma que se ajusta a nuestro esquema y se instalará en nuestro proyecto.

`npm i @prisma/client` (No es necesario)

Este cliente es seguro en cuanto a tipos y se basa en nuestro esquema.

##### Configuración, cadena de conexión y modelo de datos

EL proceso para generar la versión de PrismaClient que se ajusta a tu esquema es el siguiente:

- definimos los valores de configuración necesarios en un archivo .env

  - agregamos la cadena de conexión de la base de datos al archivo .env como DATABASE_URL
  - en caso de usar **Render** para una **DB PostgreSQL**, se debe elegir la cadena de conexión que aparece como externa
  - para MySQL local, la cadena de conexión es

  ```.env
  DATABASE_URL="mysql://user:password@localhost:3306/dbname"
  ```

- en el archivo de esquema de Prisma (`prisma/schema.prisma`) añadimos la configuración adecuada

  ```prisma
  datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
  }
  ```

- en el mismo archivo definimos los modelos de datos

  - los modelos de datos son las tablas de la base de datos
  - los campos de los modelos son las columnas de las tablas
  - las relaciones entre los modelos son las relaciones entre las tablas

  ```prisma
  model User {
    id        Int      @id @default(autoincrement())
    email     String   @unique
    name      String?
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }
  ```

#### Generate v. Migrate

- ejecutamos una migración para sincronizar la base de datos con el esquema
  como consecuencia generamos el cliente de Prisma

Si ejecutamos `prisma generate` sin haber ejecutado `prisma migrate`, se generará un cliente de Prisma que se ajusta al esquema actual de la base de datos.

El resultado sera:

```shell
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Installed the @prisma/client and prisma packages in your project

✔ Generated Prisma Client (v6.4.1) to .\node_modules\@prisma\client in 268ms
```

En package.json podemos ver la dependencia que se ha instalado.

```json
 "dependencies": {
    "@prisma/client": "^6.4.1"
  }
```

Si por el contrario ejecutamos `prisma migrate` incluirá la ejecución de `prisma generate`, por lo que se generará o actualizará el cliente de Prisma que se ajusta al esquema definido en el archivo de Prisma.

Ademas se realizara la migración de la base de datos, creándose las tablas correspondientes y el fichero sql con el código correspondiente a los procesos de creación o modificación de las tablas.

Prisma guardara registro de todas las migraciones que se realicen, permitiendo volver a un estado anterior si fuera necesario o reproducir todo el proceso en otro entorno.

### Sintaxis en Prisma: Modelos

Prisma tiene una sintaxis fácil de entender para crear modelos. Está basada en el lenguaje **GraphQL**, que a su vez se basa en **JSON**.

Es recomendable instalar el **plugin** de Prisma para **VS Code**. Este plugin revisa y limpia tu archivo de esquema.

#### Crear un modelo

Para crear un modelo en Prisma, se debe escribir el nombre del modelo seguido de una llave de apertura y cierre. Dentro de las llaves, se escriben los campos del modelo.

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model User {
  id        String    @id @default(uuid())
  createdAt DateTime  @default(now())
  username  String    @unique
  password  String
  updates   Update[]
}
```

Aquí tenemos un esquema de Producto. Para la aplicación de registro de cambios, el usuario podría tener muchos productos que desea actualizar. Por lo tanto, necesitamos un lugar para almacenar múltiples actualizaciones. Así que los productos pertenecen a un Usuario.

```prisma
model Product {
  id          String   @id @default(uuid())
  createdAt   DateTime @default(now())
  name        String
  belongsTo   User     @relation(fields: [belongsToId], references: [id])
  belongsToId String
  updates     Update[]
}
```

Los productos pueden tener **actualizaciones**. Por lo tanto, los productos pertenecen a las actualizaciones. Las actualizaciones tienen muchos campos, uno de los cuales se llama estado. Debido a que el estado es un conjunto finito de opciones, creamos un ENUM para representar nuestro estado. Piensa en un valor de tipo enum como "uno-de-estos". Así que el valor debe ser uno de los valores en el ENUM en lugar de ser cualquier otra cadena aleatoria.

```prisma
enum UPDATE_STATUS {
  IN_PROGRESS
  LIVE
  DEPRECATED
  ARCHIVED
}

model Update {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime
  title     String        @db.VarChar(255)
  body      String
  status    UPDATE_STATUS @default(IN_PROGRESS)
  version   String?
  asset     String
  productId String
  product   Product       @relation(fields: [productId], references: [id])
  updatePoints UpdatePoint[]
}
```

Y finalmente, los puntos de actualización son los puntos clave de una actualización. Estos pertenecen a una actualización, que pertenece a un producto, que a su vez pertenece a un usuario.

```prisma
model UpdatePoint {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime
  name      String @db.VarChar(255)
  description String
  updateId  String
  update    Update @relation(fields: [updateId], references: [id])
}
```

### Migraciones

Dado que esta es nuestra primera vez interactuando con la base de datos, necesitamos ejecutar nuestra **migración inicial** para sincronizar la base de datos con nuestro esquema. Continuaremos ejecutando migraciones a medida que realicemos cambios en el esquema para asegurarnos de que el esquema y cualquier dato en la base de datos permanezcan sincronizados.

A continuación, migremos la base de datos.

`npx prisma migrate dev --name init`

Esto migrará la base de datos para usar nuestro esquema y luego generará el **nuevo cliente** para nosotros. Este cliente se usará en nuestro código y ahora está verificado en cuanto a tipos contra nuestro esquema.

### Uso de Prisma Client

Siempre será necesario crear una instancia de **PrismaClient** para interactuar con la base de datos.

```ts (db.ts)
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
```

La instancia del cliente de Prisma proporciona acceso a las diversas tablas (esquemas o modelos) y los métodos necesarios para interactuar con la base de datos.

- `findMany` para obtener todos los items de la tabla de la base de datos
- `findUnique` para obtener un item específico de la tabla de la base de datos
- `create` para crear un nuevo item en la tabla de la base de datos
- `update` para actualizar un item existente en la tabla de la base de datos
- `delete` para eliminar un item existente en la tabla de la base de datos

```ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```
