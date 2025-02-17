---
title: SQL
---

- [Introducción](#introducción)
  - [Bases de datos Relacionales (RDB)](#bases-de-datos-relacionales-rdb)
    - [SQL (1974)](#sql-1974)
    - [Componentes de SQL](#componentes-de-sql)
    - [Estandarización](#estandarización)
    - [Sistemas de gestión de bases de datos relacionales (RDBMS)](#sistemas-de-gestión-de-bases-de-datos-relacionales-rdbms)
  - [Base de datos No Relacionales o NoSQL](#base-de-datos-no-relacionales-o-nosql)
    - [Historia de las Bases de Datos NoSQL](#historia-de-las-bases-de-datos-nosql)
    - [Principales Ejemplos de Bases de Datos NoSQL](#principales-ejemplos-de-bases-de-datos-nosql)
    - [Ventajas de las Bases de Datos NoSQL](#ventajas-de-las-bases-de-datos-nosql)
    - [Desventajas de las Bases de Datos NoSQL](#desventajas-de-las-bases-de-datos-nosql)
- [Conceptos básicos de bases de datos relacionales](#conceptos-básicos-de-bases-de-datos-relacionales)
  - [Modelos entidad/relación](#modelos-entidadrelación)
    - [Tipos de atributos](#tipos-de-atributos)
    - [Clave](#clave)
    - [Características de las relaciones](#características-de-las-relaciones)
    - [Clave y relaciones](#clave-y-relaciones)
  - [Modelo relacional y normalización](#modelo-relacional-y-normalización)
    - [Formas normales](#formas-normales)
      - [Primera Forma Normal](#primera-forma-normal)
      - [Segunda Forma Normal](#segunda-forma-normal)
      - [Tercera Forma Normal](#tercera-forma-normal)
  - [Diseño de bases de datos](#diseño-de-bases-de-datos)
  - [Modelos gráficos E/R](#modelos-gráficos-er)
    - [Elementos en el modelo Entidad/Relación original](#elementos-en-el-modelo-entidadrelación-original)
    - [Modelo entidad/relación extendido (ERE)](#modelo-entidadrelación-extendido-ere)
    - [Modificaciones gráficas del modelo E/R](#modificaciones-gráficas-del-modelo-er)
- [MySQL](#mysql)
  - [Que es MySQL](#que-es-mysql)
  - [Características de MySQL](#características-de-mysql)
    - [El principal objetivo de MySQL es velocidad y robustez](#el-principal-objetivo-de-mysql-es-velocidad-y-robustez)
    - [Escalabilidad y límites](#escalabilidad-y-límites)
    - [Conectividad](#conectividad)
    - [Aprendizaje del Lenguaje SQL](#aprendizaje-del-lenguaje-sql)
  - [Instalación](#instalación)
  - [Tipos de tablas en MySQL](#tipos-de-tablas-en-mysql)
    - [Motor MyISAM](#motor-myisam)
    - [Motor InnoDB](#motor-innodb)
    - [Motor HEAP](#motor-heap)
    - [Motor NDB](#motor-ndb)
  - [Tipos de datos](#tipos-de-datos)
- [Lenguaje SQL: Definición de datos (DDL)](#lenguaje-sql-definición-de-datos-ddl)
  - [Conexión](#conexión)
  - [Información de las DB en el servidor](#información-de-las-db-en-el-servidor)
  - [Creación de una DB](#creación-de-una-db)
  - [Uso de una DB](#uso-de-una-db)
  - [Descripción de una tabla](#descripción-de-una-tabla)
  - [Creación de tablas](#creación-de-tablas)
    - [Clave primaria o Primary Key](#clave-primaria-o-primary-key)
    - [Restricciones a los campos](#restricciones-a-los-campos)
    - [Foreign Key](#foreign-key)
    - [Restricciones posteriores](#restricciones-posteriores)
    - [Tablas de relación](#tablas-de-relación)
  - [Borrado de las tablas](#borrado-de-las-tablas)
  - [Indexación](#indexación)
  - [Cambios en tablas ya creadas](#cambios-en-tablas-ya-creadas)
- [Lenguaje SQL: control de datos (DCL)](#lenguaje-sql-control-de-datos-dcl)
- [Lenguaje SQL: manipulación de datos (DML)](#lenguaje-sql-manipulación-de-datos-dml)
  - [SELECT (Read)](#select-read)
    - [JOIN](#join)
    - [Expresiones de comparación](#expresiones-de-comparación)
  - [Funciones nativas del lenguaje](#funciones-nativas-del-lenguaje)
    - [Funciones de agregación](#funciones-de-agregación)
  - [INSERT (Create)](#insert-create)
  - [UPDATE (Update)](#update-update)
  - [DELETE (Delete)](#delete-delete)
- [Advanced SQL](#advanced-sql)
  - [Subqueries](#subqueries)
  - [Índices](#índices)
  - [Views](#views)
  - [Bloqueos y transactions](#bloqueos-y-transactions)
    - [Bloqueos en Bases de Datos SQL](#bloqueos-en-bases-de-datos-sql)
      - [Problemas de Concurrencia](#problemas-de-concurrencia)
      - [Tipos de Bloqueos](#tipos-de-bloqueos)
      - [Niveles de Bloqueo](#niveles-de-bloqueo)
      - [Consideraciones Adicionales](#consideraciones-adicionales)
    - [Transactions en MySQL](#transactions-en-mysql)
      - [Propiedades ACID de las Transacciones](#propiedades-acid-de-las-transacciones)
      - [Gestión de Transacciones en MySQL](#gestión-de-transacciones-en-mysql)
      - [Niveles de Aislamiento](#niveles-de-aislamiento)
      - [Ejemplo de Transacción](#ejemplo-de-transacción)
  - [Procedimientos almacenados (Stored Procedures) y funciones (Functions) en MySQL](#procedimientos-almacenados-stored-procedures-y-funciones-functions-en-mysql)
    - [Procedimientos Almacenados](#procedimientos-almacenados)
      - [Características de los Procedimientos Almacenados](#características-de-los-procedimientos-almacenados)
      - [Sintaxis Básica](#sintaxis-básica)
      - [Ejemplo de Procedimiento Almacenado](#ejemplo-de-procedimiento-almacenado)
    - [Funciones](#funciones)
      - [Características de las Funciones](#características-de-las-funciones)
      - [Sintaxis Básica de las funciones](#sintaxis-básica-de-las-funciones)
      - [Ejemplo de Función](#ejemplo-de-función)
    - [Diferencias entre Procedimientos Almacenados y Funciones](#diferencias-entre-procedimientos-almacenados-y-funciones)
    - [Ventajas y Desventajas](#ventajas-y-desventajas)
      - [Ventajas](#ventajas)
      - [Desventajas](#desventajas)
  - [Triggers](#triggers)
- [SQL y ECMAScript (JavaScript)](#sql-y-ecmascript-javascript)
  - [Opciones en Node.js para utilizar MySQL](#opciones-en-nodejs-para-utilizar-mysql)
    - [Driver nativo para Node](#driver-nativo-para-node)
    - [ORM (Object–relational mapping)](#orm-objectrelational-mapping)
  - [Driver nativo MySQL con Node.js y TypeScript](#driver-nativo-mysql-con-nodejs-y-typescript)

## Introducción

- DB (data bases). Historia
  - Sistema gestor de base de datos (Data Base Management System o DBMS)
    - Sistemas de bases de datos de propósito genera (1960s): CODASYL ligado a COBOL
    - RDB (Relational Data Bases): SQL (1970s): modelo relacional de Edgar Frank Codd
      - IBM: System R (SEQUEL) --> SQL/DS --> DB2
      - Berkeley: INGRES --> Postgres, Sybase, Informix, NonStop SQL
  - SQL (Structured Query Language).

### Bases de datos Relacionales (RDB)

- **álgebra y el cálculo relacional** en base al **modelo relacional** de **Edgar Frank Codd** (1970)

Desde el punto de vista más práctico

- la información se organiza **TABLAS**
- en ellas se distinguen la mínimas unidades significativas llamadas **campos**
- los campos relativos a una determinada **entidad** se agrupa en sucesivos **registros**.
- las tablas se relacionan entre si, en función de la información (i.e. los campos) que comparten
  - las **relaciones** entre datos deben ser representadas explícitamente en esos mismos datos.

Si representamos una tabla como una rejilla, al estilo de las hojas de cálculo

- las filas son los registros
- las columnas son los campos

#### SQL (1974)

- **lenguaje específico de dominio**, a veces se describe como un **lenguaje declarativo**
- diseñado para administrar, y recuperar información de **sistemas de gestión de bases de datos relacionales** (RDBMS)
- manejo del **álgebra y el cálculo relacional** en base al **modelo relacional** de **Edgar Frank Codd** (1970)
- realizar todo tipo de operaciones con los datos
  - efectuar consultas con el fin de recuperar, de forma sencilla, información de bases de datos
  - realizar cambios en ellas, incluyendo la inserción de datos, actualizaciones y borrado
  - la creación y modificación de esquemas
  - el control de acceso a los datos

#### Componentes de SQL

- lenguaje de definición de datos (**DDL**): CREATE, DROP, ALTER ...
- lenguaje de manipulación de datos (**DML**): SELECT, INSERT, UPDATE, DELETE ...
- lenguaje de control de datos (**DCL**): GRANT, REVOKE...

#### Estandarización

- Instituto Nacional Estadounidense de Estándares (ANSI) en 1986
- Organización Internacional de Normalización (ISO) en 1987

#### Sistemas de gestión de bases de datos relacionales (RDBMS)

Propietarios (Wikipedia)

**_Oracle_** - Oracle Corporation (1977)
**Ingres** - Berkeley University, Computer Associates (1980) CA-TOSL
**_DB2_** - IBM (1982)
**Informix** - Informix Software (1985)
**_Microsoft SQL Server_** - Microsoft (1989)
**InterBase** - Borland (1985)
**Adaptive Server Anywhere** - Sybase/iAnywhere (1992)
**Adaptive Server Enterprise** - Sybase Inc (1987)
**ANTs Data Server** - ANTs Software (1999)
**Microsoft Access** - Microsoft (1992)

Públicos (Wikipedia)

**_PostgreSQL_** - PostgreSQL Global Development Group (Junio de 1989) Licencia BSD
**_MySQL_** - MySQL AB (Noviembre de 1996) GPL o propietario
**SQLite** - D. Richard Hipp (agosto de 2000) Dominio público
**MaxDB** - MySQL AB, SAP AG (?) GPL o propietario
**SapDB** - SAP AG (?) GPL con drivers LGPL
**Firebird** - Firebird Foundation (2000) Licencia Pública InterBase
**HSQLDB** - Hsqldb.Org (2001) Licencia BSD
**SmallSQL** - SmallSQL (abril de 2005) LGPL

### Base de datos No Relacionales o NoSQL

La alternativa a las relacionales son las bases de datos no relacionales, también conocidas como bases de datos NoSQL (Not Only SQL), especialmente las **bases de datos documentales (DDB)** como **MongoDB**.

Son sistemas de gestión de bases de datos diseñados para manejar grandes volúmenes de datos no estructurados o semiestructurados. A diferencia de las bases de datos relacionales, que utilizan tablas y relaciones para organizar los datos, las bases de datos NoSQL utilizan diversos modelos de datos para almacenar y gestionar información.

Es el caso de **MongoDB**.

- la información se organiza **COLECCIONES**
- las colecciones están formadas por una serie de **documentos**
- cada documento se asimila a un **objeto** de ES que contiene una serie de propiedades
- cada documento puede ser completamente diferente del anterior
  - aunque en realidad es muy común que compartan una misma estructura
- los documentes pueden establecer relaciones con documentos de otras colecciones

#### Historia de las Bases de Datos NoSQL

El término "NoSQL" fue acuñado por Carlo Strozzi en 1998 para referirse a su base de datos ligera y open-source que no utilizaba SQL. Sin embargo, el concepto moderno de NoSQL surgió a finales de la década de 2000, impulsado por la necesidad de manejar grandes volúmenes de datos generados por aplicaciones web y servicios en línea. Empresas como Google, Amazon y Facebook necesitaban soluciones escalables y flexibles que las bases de datos relacionales tradicionales no podían proporcionar de manera eficiente.

En 2009, Johan Oskarsson organizó un evento llamado "NoSQL Meetup" en San Francisco, lo que ayudó a popularizar el término y a consolidar la comunidad alrededor de estas nuevas tecnologías. Desde entonces, las bases de datos NoSQL han ganado popularidad y se han convertido en una opción viable para muchas aplicaciones modernas.

#### Principales Ejemplos de Bases de Datos NoSQL

1. **MongoDB**: Base de datos orientada a documentos.
   Almacena datos en documentos JSON-like llamados BSON (Binary JSON). Es conocida por su flexibilidad y escalabilidad.
   Uso: Aplicaciones web, gestión de contenidos, análisis en tiempo real.

2. #**Cassandra**: Base de datos de columnas amplias.
   Diseñada para manejar grandes volúmenes de datos distribuidos en múltiples nodos sin un único punto de fallo.
   Uso: Aplicaciones que requieren alta disponibilidad y escalabilidad, como sistemas de mensajería y análisis de big data.

3. **Redis**: Base de datos en memoria de tipo clave-valor.
   Almacena datos en estructuras de datos simples como cadenas, listas y conjuntos. Es extremadamente rápida debido a su almacenamiento en memoria.
   Uso: Caching, sesiones de usuario, colas de mensajes.

4. **Neo4j**: Base de datos orientada a grafos.
   Almacena datos en nodos y relaciones, lo que permite consultas eficientes sobre relaciones complejas.
   Uso: Redes sociales, recomendaciones, análisis de fraude.

5. **Couchbase**: Base de datos orientada a documentos y clave-valor.
   Combina características de bases de datos de documentos y clave-valor, con capacidades de sincronización y almacenamiento en memoria.
   Uso: Aplicaciones móviles, comercio electrónico, aplicaciones en tiempo real.

6. **DynamoDB** Base de datos clave-valor y de documentos.
   Servicio de base de datos NoSQL gestionado por Amazon Web Services (AWS), conocido por su escalabilidad automática y bajo mantenimiento.
   Uso: Aplicaciones web, IoT, análisis en tiempo real.

#### Ventajas de las Bases de Datos NoSQL

- **Escalabilidad**: Diseñadas para escalar horizontalmente, añadiendo más nodos a medida que crece la carga de trabajo.
- **Flexibilidad**: Permiten almacenar datos no estructurados o semi-estructurados sin necesidad de un esquema fijo.
- **Rendimiento**: Optimizadas para operaciones de lectura y escritura rápidas, especialmente en entornos distribuidos.
- **Disponibilidad**: Muchas bases de datos NoSQL están diseñadas para ofrecer alta disponibilidad y tolerancia a fallos.

#### Desventajas de las Bases de Datos NoSQL

- **Consistencia**: Algunas bases de datos NoSQL sacrifican la consistencia en favor de la disponibilidad y la tolerancia a particiones, siguiendo el teorema CAP.
- **Complejidad**: La gestión y el mantenimiento de sistemas distribuidos pueden ser complejos.
- **Madurez**: Aunque han evolucionado rápidamente, algunas bases de datos NoSQL no tienen la misma madurez y soporte que las bases de datos relacionales.

En resumen, las bases de datos NoSQL ofrecen una alternativa poderosa y flexible a las bases de datos relacionales tradicionales, especialmente en entornos que requieren manejar grandes volúmenes de datos no estructurados y necesitan escalabilidad y rendimiento.

## Conceptos básicos de bases de datos relacionales

### Modelos entidad/relación

- **Entidades**: Conceptos de interés: objetos, reales o abstractos, distinguibles de otros objetos.
  - Los grupos de entidades con cualidades similares acerca de los cuales se almacena información se denominan tipos
- **Atributos**: Características de las entidades: propiedades asociadas a un conjunto de entidades.
  - Para cada atributo (representación de las propiedades de los objetos ), existe un conjunto de valores permitidos llamado dominio.
- **Relaciones**: Conexiones o asociaciones: conexiones semánticas entre conjuntos de entidades.

#### Tipos de atributos

- **Atributos compuestos** vs. **Atributos simples** (atómicos)

  - Los atributos compuestos se pueden dividir en componentes más pequeños con significado propio
  - e.g. dirección = calle + municipio + CP + provincia

- Atributos mono-valuados vs. **Atributos multi-valuados**

  - Un atributo mono-valuado tiene un único valor para una entidad particular
  - e.g. el atributo hijos, será multi-valuado en numerosas entidades “persona”

- Atributos almacenados vs. **Atributos derivados**

  - en la base de dato almacenamos los atributos de partida (atributo almacenado), no los resultados que se derivan a partir de ellos (atributo derivado)
  - e.g. la edad de una persona [atributo derivado] se puede calcular (derivar) de su fecha de nacimiento [atributo almacenado]

#### Clave

Claves: Conjuntos de atributos que permiten **identificar unívocamente** a una entidad dentro de un conjunto de entidades

Del libro: ISBN
Del escritor: (nombre, apellidos, fecha de nacimiento)

- Super-clave: Conjunto de atributos que permite identificar unívocamente a una entidad dentro de un conjunto de entidades.
- Clave candidata: Super-clave con un número mínimo de atributos.
- Clave primaria: Clave candidata elegida por el diseñador de la base de datos para identificar unívocamente a las distintas entidades de un tipo.
- Clave alternativa: Cualquiera de las claves candidatas no elegidas por el diseñador de la base de datos.

En la practica, es habitual generar un atributo para que actúe como clave primaria

- los R-DBMS pueden generarlos de forma **auto-incremental** con tipo numérico
- se puede usar el estándar **UUID** (Universal Unique Identifier, Identificador único universal), un valor de 128 bits que se utiliza para identificar de forma única un objeto o entidad, frecuentemente usado en Internet . Dependiendo de los mecanismos específicos utilizados, se garantiza que un UUID será diferente o, al menos, es muy probable que sea diferente de cualquier otro UUID generado hasta el año 3400 d.C.

#### Características de las relaciones

**Grado**: Número de tipos de entidades que participan en la conexión, haciéndola binaria, terciaria…

**Cardinalidad**: Numero de elementos de un tipo que se conectan con un elemento de otro (restricción que se observa en el dominio del problema y que controla las ocurrencias de las relaciones).

- En el caso de las relaciones binarias (grado 2):

  - Relaciones uno a uno (1:1) La clave aparece una sola vez en cada una de las tablas relacionadas
  - Relaciones uno a muchos (1:n) La clave de una tabla aparece n veces en la tabla relacionada.
    - Es el tipo de relación más común
    - e.g. Lista de twits (post, notas...)
      - un Autor tiene n notas
      - cada nota tiene 1 autor
      - Relación Autor 1 ---- n Nota
  - Relaciones muchos a muchos (n:m) Es una conflictiva combinación de varias de las anteriores, por lo que suele romperse en la serie de relaciones 1:n que la componen

**Modalidad**: Indica si la participación en una relación es obligatoria o opcional, es decir si la cardinalidad mínima es 0 o 1.

Por ejemplo, un "Cliente" puede no haber realizado ninguna "Compra" (participación opcional).

#### Clave y relaciones

**Relaciones uno a muchos (1:N)**: La clave de la relación es la clave primaria de la entidad que interviene en la relación con cardinalidad N.

Relación Autor 1 ---- n Nota
Clave de la relación Autor.ID

Lo podemos representar en la dirección contraria

Profesor n ---- 1 Departamento (N:1)

Profesor: 1 Departamento
Departamento: N Profesores

**Relaciones uno a uno (1:1)**: Las claves primarias de las entidades participantes son claves candidatas de la relación entre entidades, por lo que puede elegirse cualquiera de ellas.

Relación Trabajador 1 ---- 1 Contrato

Estas relaciones no tienen que dar necesariamente lugar a nuevas tablas, sino que pueden reflejarse como atributos en las ya existentes

- En una relación 1:N la clave de la tabla de cardinalidad 1 (autor) se incorpora como un atributo más en la tabla de cardinalidad N (nota)

Relación Autor 1 ---- n Nota (Incluye el atributo Autor.ID, clave de la relación)

- En la relación 1:1 la información de una de las tablas se incorpora en la otra

**Relaciones muchos a muchos (N:M)**: La clave primaria será la unión de las claves primarias de las entidades participantes en la relación.

En consecuencia estas relaciones se reflejan siempre en la aparición de una nueva tabla, correspondiente a la propia relación

Relación (n:m) Autor m ---- n Libro

Un autor escribe n libros
Un libro tiene m autores

Aparece la tabla autores_libros para representar la relación

id_autor
id_libro
order
...

### Modelo relacional y normalización

En el modelo relacional, las entidades y las relaciones dan lugar a tablas, que deben cumplir con algunas restricciones:

- Cada tabla debe tener su nombre único.
- No puede haber dos filas iguales. No se permiten los duplicados.
- Todos los datos en una columna deben ser del mismo tipo.

La normalización consiste en aplicar una serie de reglas a las relaciones obtenidas como parte del proceso que transforma el modelo entidad-relación en el modelo relacional.

Objetivo de la normalización

- Evitar la redundancia de los datos.
- Evitar problemas de actualización de los datos en las tablas.
- Proteger la integridad de los datos, garantizando dependencias lógicas.

#### Formas normales

Son los sucesivos niveles inclusivos en el proceso de normalización de una base de datos.

Aunque hay hasta seis niveles principales (y otros 3 que los complementan), los de uso más común son los tres primeros, definidos inicialmente por **Edgar F. Codd**.

- **1FN** Todos los atributos de una relación o tabla toman valores atómicos y existe una clave primaria única.
- **2FN** Todos los atributos de una relación dependen funcionalmente de las claves candidatas de la relación (y no de partes de ellas)
- **3FN** existe una total independencia funcional transitiva entre los atributos que no son clave; es decir el valor de un atributo no puede determinarse a partir de los valores de otros atributos que no formen una clave candidata

##### Primera Forma Normal

Objetivos

- Eliminar grupos de datos repetidos en tablas individuales.
- Crear una tabla separada para cada conjunto de datos relacionados. Idealmente, entre las tablas habrá relaciones 1:N
- Identificar cada conjunto de datos relacionados con una clave principal. Ejemplo ID, Primary Key, FK.

Procedimiento

- Todos los atributos de una relación o tabla toman valores atómicos. Un atributo es atómico si los elementos del dominio son indivisibles, mínimos.
- Existe una clave primaria única, que no contiene atributos nulos.
- No debe existir variación en el número de columnas.
- Los campos no clave deben identificarse por la clave, es decir deben depender funcionalmente de la clave.
- Debe existir una independencia del orden tanto de las filas como de las columnas, es decir, si los datos cambian de orden no deben cambiar sus significados
- Una tabla no puede tener múltiples valores en cada columna

Caso práctico

No utilizar varios campos en una sola tabla para almacenar datos similares.

Por ejemplo, para el seguimiento de un artículo del inventario que proviene de dos fuentes diferentes, el registro puede contener campos para el código de proveedor 1 y un código de proveedor 2.

¿Qué sucede cuando se agrega un tercer proveedor? Agregar un campo no es la respuesta, ya que requiere de programación y modificación de tablas y la necesidad de repetirlo cada vez que se agregué a un nuevo proveedor.

En su lugar, se deberá poner toda la información del proveedor en una tabla independiente denominada Proveedores, y vincular el inventario con
los proveedores por medio de una clave o de sus claves.

##### Segunda Forma Normal

- Crear tablas separadas para aquellos conjuntos de valores que se aplican a varios registros; e.g. ciudades, profesión.
- Relacionar estas tablas por medio de una clave externa, e.g. ID, Primary Key, FK

De ese modo todos los atributos de una relación dependen funcionalmente de las claves candidatas (completas) de la relación (y no de partes de ellas), es decir que los registros no deben depender de nada que no sea la clave primaria de una tabla (una clave compuesta, si es necesario).

Caso práctico

Consideremos la dirección de un cliente en un sistema contable. La dirección no solo se necesita en la tabla de clientes, sino también para los pedidos, envío, facturas, cuentas por cobrar, e inclusive en las ordenes. En lugar de almacenar la dirección del cliente como una entrada independiente en cada una de estas tablas, guárdela en un lugar, ya sea en la tabla Clientes o en una tabla de direcciones separada.

##### Tercera Forma Normal

Total independencia funcional transitiva entre los atributos que no son clave; es decir el valor de un atributo no puede determinarse a partir de los valores de otros atributos que no formen una clave candidata.

El objetivo es eliminar los campos que no dependan de las claves, de forma que los valores de un registro que no forman parte de la clave de registro no tienen cabida en la tabla

Caso práctico

En una tabla que contiene los datos de los candidatos a un puesto, el nombre del candidato, nombre de la universidad a la que asistió y la dirección pueden estar incluidos. Pero existen muchas universidades.

Si la información de la universidad se almacena en la tabla de candidatos, no hay manera de listar las universidades que no tengan candidatos.

La mejor opción es crear una tabla separada de Universidades y vincularlo a la tabla candidatos con una llave de código de la universidad.

### Diseño de bases de datos

Durante el desarrollo de un sistema de información, se han de modelar tanto los datos empleados por el sistema como los procesos que realizan tareas sobre esos datos

- Modelado de datos
  - Representación gráfica del modelo de datos
    - Modelos entidad/relación
      - Diagramas E/R (clásico)
      - Diagramas UML (Lenguaje Unificado de Modelado)
      - Diagramas CASE\*Method
      - Diagramas ORM (Object-Role Modeling)
      - Diagramas IDEF1X
  - Diccionario de datos
- Modelado de procesos
  - Diagramas de flujo de datos
  - Diagramas de estados (autómatas finitos)
  - Casos de uso

### Modelos gráficos E/R

Los diagramas entidad-relación (ER) son herramientas visuales utilizadas en el diseño y desarrollo de bases de datos. Estos diagramas ayudan a representar la estructura de los datos y las relaciones entre diferentes entidades en un sistema de información. Los diagramas ER se basan en el modelo entidad-relación, que describe cómo los datos se organizan y se relacionan en una base de datos relacional. Se realizán a partir de los plannteamientos presentados por Peter P. Chen en sus artículos de 1976 y 1977.

Originalmente se trataba de **diagramas ER Lógicos**, que no incluye detalles de la implementación real en un sistema de gestión de bases de datos (DBMS). Ni siquiera pueden considerarse exclusivos de las bases de datos relacionales, ya que el concepto de relación en este esquema tiene poco que ver con la idea de relación expuesta por Codd en su modelo relacional. Por tanto los modelos ER se pueden aplicar a otros tipos de bases de datos, como las bases de datos orientadas a objetos o incluso las bases de datos no relacionales.

Posteriormente otros autores han añadido mejoras a este modelo dando lugar a toda una serie de modelos basados en el modelo Entidad/Relación original. La más aceptada actualmente es el **modelo entidad/relación extendido (ERE)** que complementa algunas carencias del modelo original. No obstante las diversas variantes del modelo hacen que los esquemas que dibujan los profesionales no sigan un verdadero estándar y sean dispares, aunque hay ideas muy comunes a todos los “dialectos” del modelo entidad/relación.

A partir de los diagramas ER lógicos, se pueden derivar **diagramas ER Físicos** que incluyen detalles específicos de la implementación, como los tipos de datos, las restricciones de integridad y las claves primarias y foráneas. Muy próximos a estos estarían los **diagramas de esquema de base de datos**, que muestran la estructura física de la base de datos, incluyendo tablas, columnas, índices y relaciones. Estos diagramas son útiles para la implementación real de la base de datos en un DBMS.

Podemos encontrar herramientas de software que permiten la creación de diagramas ER, como **Microsoft Visio**, **Lucidchart**, **Draw.io**, **MySQL Workbench**, **Oracle SQL Developer**, **ER/Studio**, **Toad Data Modeler**, **DbSchema**, **Dia**, **PowerDesigner**, **ERwin Data Modeler**, **DeZign for Databases**, **DbVisualizer**, **Navicat Data Modeler**, **SQL Power Architect**, **SAP PowerDesigner**, **ER/Studio Data Architect**, **DbVisualizer**, **DbWrench**

Paro obtener más información sobre el modelado de bases de datos, se pueden consultar las siguientes referencias

- **Database Design for Mere Mortals** de Michael J. Hernandez
- **Beginning Database Design: From Novice to Professional** de Clare Churcher
- **Database Design and Relational Theory: Normal Forms and All That Jazz** de C.J. Date

En cuanto a los detalles técnicos de los diagramas ER, se pueden consultar los siguientes enlaces

- <https://jorgesanchez.net/manuales/gbd/entidad-relacion.html>
- <https://www.ilerna.es/blog/modelo-entidad-relacion-base-datos>

#### Elementos en el modelo Entidad/Relación original

Los diagramas ER constan de varios elementos clave:

1. **Entidades**: Representan objetos o conceptos del mundo real que tienen una existencia independiente y sobre los cuales se desea almacenar información. Por ejemplo, en un sistema de gestión de una biblioteca, las entidades podrían ser "Libro", "Autor", "Usuario", etc. Se representan con un rectángulo con el nombre de la entidad en su interior.

2. **Atributos**: Son las propiedades o características de una entidad. Por ejemplo, una entidad "Libro" podría tener atributos como "Título", "ISBN", "Año de publicación", etc. Los atributos pueden ser de diferentes tipos:

   - **Atributos simples**: No pueden dividirse en componentes más pequeños. Se representan con un óvalo unido a la entidad por una línea.
   - **Atributos compuestos**: Pueden dividirse en componentes más pequeños. Se representan con un óvalo unido al atributo agrupador por una línea.
   - **Atributos derivados**: Se calculan a partir de otros atributos. Se representan con un óvalo punteado unido a la entidad o al atributo del que se derivan por una línea.
   - **Atributos clave**: Identifican de manera única a una entidad. Se representan subrayados.

3. **Relaciones**: Representan las asociaciones entre entidades. Por ejemplo, una relación podría ser "Escribe", que asocia a un "Autor" con un "Libro". Las relaciones pueden tener atributos propios. Se representan con un rombo unido a las entidades que se relacionan por líneas.

4. **Cardinalidad**: Indica el número de instancias de una entidad que pueden estar asociadas con instancias de otra entidad. Por ejemplo, en una relación "Escribe" entre "Autor" y "Libro", la cardinalidad podría ser "uno a muchos" si un autor puede escribir muchos libros, pero cada libro es escrito por un solo autor. Se representa con un número o un rango de números en los extremos de la línea de relación.

5. **Tipos de relaciones**: La inclusión de las relaciones junto con su cardinalidad permite representar los tres tipos de relaciones ya mencionados:

   - **Uno a uno (1:1)**: Una instancia de una entidad se relaciona con una instancia de otra entidad.
   - **Uno a muchos (1:N)**: Una instancia de una entidad se relaciona con muchas instancias de otra entidad.
   - **Muchos a muchos (M:N)**: Muchas instancias de una entidad se relacionan con muchas instancias de otra entidad.

Los diagramas ER son útiles en la fase de diseño conceptual de una base de datos, ya que permiten visualizar y entender la estructura de los datos antes de implementarla en un sistema de gestión de bases de datos (DBMS).

#### Modelo entidad/relación extendido (ERE)

Se incluye la distinción entre dos tipos de entidades diferentes:

- Entidad fuerte: Tiene una existencia independiente y no depende de otras entidades. Por ejemplo, "Cliente" en un sistema de ventas.
- **Entidad débil**: Depende de otra entidad para su existencia. Por ejemplo, "Dirección" podría ser una entidad débil que depende de "Cliente".

Las entidades débiles se representan con un doble rectángulo conectado por una línea con la entidad de la que dependen, mientras que las entidades fuertes se siguen representando con un rectángulo simple.

**Generalización y especialización**: son dos procesos que permiten dar lugar a jerarquías de entidades.

- La generalización agrupa entidades con características comunes en una entidad más general. Por ejemplo, "Vehículo" podría ser una generalización de "Coche" y "Motocicleta".
- la especialización divide una entidad en subtipos más específicos. Por ejemplo, "Empleado" podría especializarse en "Gerente" y "Técnico".

Herencia: En la especialización, las entidades hijas heredan los atributos y relaciones de la entidad padre. Por ejemplo, "Gerente" y "Técnico" heredarían atributos comunes de "Empleado".

Representar jerarquías de entidades en un diagrama ER extendido, se utilizan líneas de generalización y especialización para conectar las entidades padre e hijas, muy similares a las que se emplean para representar la herencia en los diagramas de clases de UML.

#### Modificaciones gráficas del modelo E/R

Existen diversas formas de incluir los datos de cardinalidad en los diagramas E/R, aunque la más común es la notación de Chen, que incluye los datos de cardinalidad en los extremos de las líneas de relación.

Una variante de esta notación es la notación de Crow's Foot, que utiliza símbolos en forma de "pata de cuervo" para representar la cardinalidad y la participación en las relaciones.

## MySQL

### Que es MySQL

Licencia dual: Licencia pública general (GPL) / Licencia comercial por Oracle Corporation

- inicialmente desarrollado por MySQL AB con el nombre de mSQL
  - empresa fundada por David Axmark, Allan Larsson y Michael Widenius (“Monty”)
- MySQL AB fue adquirida por Sun Microsystems en 2008
- Sun fue comprada por Oracle Corporation en 2010
- En respuesta a estos cambios aparece **MariaDB**, como fork de MySQL

Está considerada como la base de datos de código abierto más popular del mundo
Tradicionalmente se considera uno de los cuatro componentes del stack de desarrollo xAMP (lAMP, wAMP, mAMP).

- Linux, Windows, Mac
- Apache
- MySQL
- PHP

Con estos stacks -> CRM basados en PHP (WordPress, Joomla, Drupal)

Sitios web grandes y populares (Wikipedia)

- Wikipedia
- Google​ (aunque no para búsquedas)
- Facebook
- Twitter
- Flickr
- YouTube​

Escrito principalmente en C / C++

Y lo más importante, el nombre del delfín es **“Sakila”**

### Características de MySQL

#### El principal objetivo de MySQL es velocidad y robustez

- Escrito en C y C++, testado con GCC 2.7.2.1.
  - Usa GNU auto-confort para potabilidad.
- Puede trabajar en distintas plataformas y S.O. distintos, incluyendo Windows, Mac OS X, Linux, FreeBSD y Solaris.
- Dispone de APIs para numerosos lenguajes: C, C++, Eiffel, Java, Perl, PHP, Python, TCL y JavaScript.
- Usa tablas en disco B-Tree muy rápidas con compresión de índice.
  - Su sistema de archivo de almacenamiento plano, aumenta la eficiencia de la lectura, permitiendo un acceso muy rápido a al información
- Su diseño inicial multi-hilos (multithreaded) le permite sacar gran ventaja del multi-proceso, cuando están disponibles varias CPUs.
- Utiliza (ANSI) SQL 2 con algunas extensiones.
- Desde la versión 3 incorpora la opción de activar transacciones
- Desde la versión 4 incorpora procedimientos almacenados

#### Escalabilidad y límites

- Registros de longitud fija y variable.
- Se permite hasta 64 índices por tabla.
  - Cada índice puede consistir desde 1 hasta 16 columnas o partes de columnas.
  - El máximo ancho de límite son 1000 bytes.
  - Un índice puede usar prefijos de una columna para los tipos de columna CHAR, VARCHAR, BLOB, o TEXT.
- Diversos tipos de columnas como enteros de 1, 2, 3, 4, y 8 bytes, coma flotante, doble precisión, carácter, fechas, enumerados, etc.
- Todas las columnas pueden tener valores por defecto.
- Utilidad (Isamchk) para chequear, optimizar y reparar tablas.
- Todos los datos están grabados en formato ISO8859_1.
- Permite consultas (queries) en las que se unen tablas de diferentes bases de datos
- Soporta los outer joins tanto a derecha como a izquierda

#### Conectividad

- Los clientes usan TCP/IP (para cualquier plataforma).
  - En windows pueden usar names pipes y en Unix utilizan socket unix para conectarse al servidor.
- El servidor soporta mensajes de error en distintas lenguas (permite escoger el lenguaje).
- Todos los comandos tienen -help o -? Para las ayudas.
- Soporta ODBC (Open Database Connectivity): se puede utilizar ACCESS para conectar con el servidor MySQL y los clientes pueden ejecutarse en Windows o Unix.

Seguridad

- Sistema de contraseñas y privilegios muy flexible y segura (se encriptan cuando se conectan a un servidor).
- Todas la palabras de paso viajan encriptadas en la red

#### Aprendizaje del Lenguaje SQL

[sqlBolt](https://sqlbolt.com/)

### Instalación

[mysql/downloads/](https://www.mysql.com/downloads/)

- al final de la página [MySQL Community (GPL) Downloads](https://dev.mysql.com/downloads/)

  - [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
  - [MySQL Shell](https://dev.mysql.com/downloads/shell/)
  - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

- en todos ellos, al final de la página

  - _No thanks, just start my download_

- en el server, incluir
  - documentation
  - samples y examples
  - puerto: 3306 (default)
  - cuenta root: password
  - añadir otra cuenta: All Hosts / Role: User Admin

### Tipos de tablas en MySQL

MySQL incorpora "motores de almacenamiento", que nos permite seleccionar el tipo de almacenamiento interno de cada tabla

- no afecta a la interacción del cliente con el servidor
- los comandos SQL son los mismos
- el cliente no necesita saber como se guardan los datos

Hay una docena de motores de almacenamiento propios de MySQL, más los desarrollados por terceros.
Los más conocidos son: MyISAM, InnoDB, HEAP, NDB.

- **MyISAM**: formato estable, maduro y simple de manejar. Internamente admite tres posibilidades que gestiona directamente MySQL: Estáticas, Dinámicas y Comprimidas
- **InnoDB**: formato más moderno, que soporta transacciones y bloqueos a nivel de fila, claves foráneas y recuperación frente a desastres.
  Como inconvenientes: ocupan más espacio, su administración es más compleja (debido a sus índices), no soportan índices de texto completo…

Ambos pueden coexistir en una misma DB, las primeras cuando se necesite la máxima eficacia y las segundas cuando interesa utilizar transacciones

#### Motor MyISAM

- No transaccional.
- Bloqueos a nivel de tabla.
- Muy rápido en lectura y escritura (excepto escrituras simultaneas en la misma tabla).
- Bajo requerimiento de espacio en disco y memoria.
- Los datos se guardan en disco: diferentes ficheros para la definición de la tabla, los datos y los índices.
- Es el motor por defecto de MySQL.
- Es una buena elección cuando necesitamos velocidad, y tenemos pocas modificaciones simultaneas de la tabla.

#### Motor InnoDB

- Transaccional. Permite deshacer transacciones a medias ("rollback"). Multiversionado
- Bloqueos a nivel de registro
- Restricciones en claves foráneas
- Fácil recuperación de datos en caso de error.
- Alta concurrencia más segura en escritura.
- Los datos se guardan en un fichero para la definición de la tabla, y un "tablespace" para guardar conjuntamente datos e índices.
- Necesita mas espacio en disco y memoria
- Es una buena elección cuando necesitamos transacciones, restricciones en claves foráneas, o tenemos muchas escrituras simultaneas.
- Multiversionado: cuando múltiples transacciones modifican registros, InnoDB mantiene aisladas las transacciones guardando para cada una de ellas un versión distinta de un mismo registro, a cada transacción la versión que le corresponde

#### Motor HEAP

- Los datos se guardan en memoria, utilizando algoritmos que hacen un uso óptimo de este medio.
- Es muy, muy rápido.
- Podemos crear una tabla HEAP a partir de una tabla en disco con:

```sql
CREATE TABLE nombre_tabla ENGINE=MEMORY
SELECT * FROM nombre_tabla_disco;
```

- Es una buena elección cuando necesitamos realizar operaciones muy rápidas sobre conjuntos pequeños de datos

#### Motor NDB

- Es el motor de almacenamiento de los clúster de MySQL.
- La base de datos esta repartida por los diferentes nodos del clúster.
- Proporciona alta disponibilidad mediante redundancia.
- Proporciona alto rendimiento mediante fragmentación de datos sobre los grupos de nodos.
- Proporciona alta escalabilidad mediante la combinación de las dos características anteriores.
- Los datos se guardan en memoria, pero los logs van a disco.
- Es una buena elección cuando disponiendo de varios servidores necesitamos a la vez velocidad, transacciones y redundancia de datos; replicación síncrona; y resistencia a caídas de servidores

### Tipos de datos

- **numéricos**: INT, BIGINT, DECIMAL, FLOAT, DOUBLE
- **cadena de caracteres**: CHAR, VARCHAR, TEXT
- **fecha y hora**: DATE, TIME, DATETIME, TIMESTAMP
- **binarios**: BINARY, VARBINARY, BLOB
- **otros**: ENUM, SET, JSON

La diferencia entre CHAR y VARCHAR es que CHAR almacena cadenas de longitud fija, mientras que VARCHAR almacena cadenas de longitud variable. Ademas el tamaño máximo de CHAR es de 255 caracteres, mientras que el de VARCHAR es de 65.535 caracteres. Además CHAR puede usarse sin indicar la longitud, en cuyo caso se asume 1.

- **CHAR** (n?): 0-255 caracteres
- **VARCHAR** (N): 0-65.535 caracteres
- **TEXT**: 0-65.535 caracteres = VARCHAR(65.535)
  - TYNYTEXT: 0-255 caracteres = CHAR(255)
  - MEDIUMTEXT: 0-16.777.215 caracteres = VARCHAR(16.777.215)
  - LONGTEXT: 0-4.294.967.295 caracteres = VARCHAR(4.294.967.295)

En cuanto a los datos binarios, los tipos de datos BINARY y VARBINARY se utilizan para almacenar datos binarios, mientras que el tipo de datos BLOB se utiliza para almacenar datos binarios de gran tamaño.

- **BINARY**: 0-255 bytes
- **VARBINARY**: 0-65.535 bytes
- **BLOB**: 0-65.535 bytes = VARBINARY(65.535)
  - TYNYBLOB: 0-255 bytes = BINARY(255)
  - MEDIUMBLOB: 0-16.777.215 bytes = VARBINARY(16.777.215)
  - LONGBLOB: 0-4.294.967.295 bytes = VARBINARY(4.294.967.295)

La diferencia entre los distintos tipos numéricos es la cantidad de bytes que se utilizan para almacenar el número y el rango de valores que se pueden almacenar.

Para los números enteros, las posibilidades son

- **INT** (n?): 4 bytes, rango de -2.147.483.648 a 2.147.483.647 -> enteros hasta 10 dígitos
  - **BIGINT** (n?): 8 bytes, rango de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807 -> enteros hasta 19 dígitos
  - TYNYINT (n?) 1 byte, rango de -128 a 127 -> enteros hasta 3 dígitos [**BOOL**, **BOOLEAN** son alias de TINYINT(1)]
  - SMALLINT (n?): 2 bytes, rango de -32.768 a 32.767 -> enteros hasta 5 dígitos
  - MEDIUMINT (n?): 3 bytes, rango de -8.388.608 a 8.388.607 -> enteros hasta 7 dígitos

Para los números decimales, las posibilidades son

- **FLOAT** (M,D): 4 bytes, 7 dígitos de precisión
- **DOUBLE** (M,D): 8 bytes, 15 dígitos de precisión
- **DECIMAL** (M,D): 65 dígitos, 30 decimales (decimales desempaquetados, en lugar de como coma flotante)

Los ENUM y SET son tipos de datos que permiten almacenar una lista de valores. La diferencia entre ellos es que ENUM solo puede almacenar un valor de la lista, mientras que SET puede almacenar varios valores.

- **ENUM**: 1 valor de una lista
- **SET**: varios valores de una lista. Se almacenan como un número binario

Los datos JSON son un tipo de datos que permite almacenar datos en formato JSON. Este tipo de datos es muy útil para almacenar datos no estructurados. Aparecieron en MySQL 5.7.8, acercando MySQL a las bases de datos NoSQL.

## Lenguaje SQL: Definición de datos (DDL)

Lenguaje de definición de datos (**DDL**): CREATE, DROP, ALTER ...

- Conexión: Shell v. Workbench (GUI)
- Listado y Creación de bases de datos. Uso
- Listado y descripción de tablas
- Creación de tablas. Uso de IF NOT EXISTS
  - Tipos de datos
  - Restricciones
    - NOT NULL
    - UNIQUE
    - DEFAULT
    - CHECK
    - AUTO_INCREMENT
  - Claves primarias y foráneas
    - PRIMARY KEY numérica
    - PRIMARY KEY UUID
    - FOREIGN KEY
  - Named Constraints
- Borrado de tablas (DROP)
- Indexación
- Modificación de tablas (ALTER)
- Claves primarias y foráneas
- Creación de índices

### Conexión

Para conectarnos desde el cmd a nuestro servidor ejecutamos **mysql.exe**

```shell
cd C:\Program Files\MySQL\MySQL Server 8.2\bin
..\bin> mysql.exe -u root // any_user -p
◀┙
Password:
```

En general, para cualquier conexión

```shell
..> mysql.exe -h [host] – P [port] –u [root] -p –D db_name
```

Estos mismos datos de conexión:

- host (-h)
- port (-P) default 3306
- user (-u) root / user siempre con acceso por consola habilitado
- passwd (-p)
- db_name (-D)

serán los que proporcionemos desde un programa JS que quiera hacer una conexión a la DB.

Normalmente, los valores se tomarán de .env y podrán variar en función del entorno

### Información de las DB en el servidor

Una vez dentro del shell de MySQL, todos los comandos terminan en **punto y coma**
El shell no es sensible al uso de mayúsculas y minúsculas

Para comprobar las DB que existen, podemos user la sentencia **SHOW DATABASES**

```shell
show databases;
```

La respuesta nos muestra las DB existentes, incluyendo sakila y world si hemos instalado '_samples and examples_'

```shell
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
6 rows in set (0.00 sec)
```

En el **MSShell** la conexión sería

```shell SQL
  \c localhost -u alce65;
  ◀┙
  Please provide the password for 'alce65@localhost':
  ◀┙
```

Una vez conectados, los comandos SQL comienzan por \sql

```shell SQL
  \sql show databases
```

### Creación de una DB

Una vez que has confirmado que no existe ninguna base de datos con el nombre elegido, podemos crear una base de datos con dicho nombre utilizando **CREATE DATABASE**

```shell
  create database sample;
  ◀┙
  Query OK, 1 row affected (0.08 sec)
```

Creará una base de datos vacía y no contendrá ninguna tabla

### Uso de una DB

Para utilizar una base de datos, primero es necesario seleccionarla y “abrirla”, es decir establecer comunicación con ella, empleando el comando **USE**

```shell
  USE sample;
  ◀┙
  Database changed
```

Para comprobar en cualquier momento cual es la actual base de datos a la que estamos conectados se puede usar el siguiente comando **SELECT DATABASE()**:

```shell
  select database();
  ◀┙
  +------------+
  | database() |
  +------------+
  | sample     |
  +------------+
  1 row in set (0.00 sec)
```

Igualmente podemos seleccionar alguna de las DB ya existentes con contenido
En este caso podemos obtener más información con  **SHOW TABLES**

```shell
  use world
  ◀┙
  Database changed
  SHOW TABLES;
  ◀┙
  +-----------------+
  | Tables_in_world |
  +-----------------+
  | city            |
  | country         |
  | countrylanguage |
  +-----------------+
  3 rows in set (0.01 sec)
```

### Descripción de una tabla

Una vez seleccionada una DB en la que vemos que existe una tabla, podemos consultar en cualquier momento su estructura mediante el comando **DESCRIBE** (abreviado como **DESC**)

```shell
 DESC city;
+-------------+----------+------+-----+---------+----------------+
| Field       | Type     | Null | Key | Default | Extra          |
+-------------+----------+------+-----+---------+----------------+
| ID          | int      | NO   | PRI | NULL    | auto_increment |
| Name        | char(35) | NO   |     |         |                |
| CountryCode | char(3)  | NO   | MUL |         |                |
| District    | char(20) | NO   |     |         |                |
| Population  | int      | NO   |     | 0       |                |
+-------------+----------+------+-----+---------+----------------+
5 rows in set (0.01 sec)
```

La descripción ya nos indica alguna de las **propiedades** importantes que definiremos para cade **campo**

- type
- null / no null -> si admite valores null
- default -> si tiene un valor por defecto
- key pri -> si es clave primaria y se se completa de forma auto incremental
- foreign key (mul) > si es clave foránea

### Creación de tablas

La sentencia **CREATE TABLE** es usado para crear una tabla en MySQL con restricciones.
La sintaxis de Create es

CREATE TABLE tableName
(
fieldName1 dataType(size) [NULL | NOT NULL],
fieldName2 dataType(size) [NULL | NOT NULL]
);

Para cada campo indicamos

- nombre
- tipo(tamaño)
- restricción para el comportamiento de la variable (campo), cono el not null
  - si NULL está especificado o no se indica nada, el campo se puede dejar vacío.
  - si NOT NULL está especificado, el campo debe tener un valor

Para evitar errores si la tabla ya existe,
podemos añadir una condición en el comando que la crea

CREATE TABLE **IF NOT EXISTS** tableName ...

- si la tabla existe se anula el proceso de intentar crearla y no se produce ningún error
- Como consecuencia el mensaje devuelto es “Query OK”, tanto si se crea la tabla como si ya existía

#### Clave primaria o Primary Key

**CLAVE PRIMARIA (PRIMARY KEY)** es un campo o campos en una tabla que identifican unívocamente a cada registro. Este atributo es usado para definir el nombre del campo para crear una clave primaria

Puede indicarse al final del comando para crear la tabla o, si es única, al definir el campo

```sql
CREATE TABLE tableName
(
  fieldName1 dataType(size) [NULL | NOT NULL],
  fieldName2 dataType(size) [NULL | NOT NULL]
  PRIMARY KEY (fieldName_1, fieldName_2,…)
);

CREATE TABLE tableName
(
  fieldName1 dataType(size) INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  fieldName2 dataType(size) [NULL | NOT NULL]
);
```

Los formatos de las claves primarias pueden ser

- `INT UNSIGNED AUTO_INCREMENT PRIMARY KEY`
- `BINARY(16) DEFAULT (UUID_TO_BIN(UUID()))`
- `VARCHAR(36) DEFAULT (UUID())`

En los dos últimos casos, se está creando un campo que almacena un UUID (Universal Unique Identifier) en formato binario o en formato texto

#### Restricciones a los campos

Entre las restricciones que podemos añadir a un campo,

- `NOT NULL` para que el campo no pueda quedar vacío
- `UNIQUE` para que el campo no pueda tener valores repetidos
- `DEFAULT` para que el campo tenga un valor por defecto
- `AUTO_INCREMENT` para que el campo se incremente automáticamente

Por ejemplo, tablas users
id, user_alias, email, first_name, surname, phone, created_at, modified_at

```shell
  CREATE TABLE users (
    id INT AUTO_INCREMENT,
    user_alias VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100)
    phone CHAR(12) UNIQUE
    created_at TIMESTAMP NOT NULL DEFAULT (NOW())
    PRIMARY KEY (user_id)
  );
```

Alternativamente, para el user_Id

```shell
  id BINARY(16) DEFAULT (UUID_TO_BIN(UUID()))
```

#### Foreign Key

Relación 1:N con tabla de notas:

id, title, is_important, content, autor, created_at

```shell
  CREATE TABLE notes (
    id BINARY(16) DEFAULT (UUID_TO_BIN(UUID()))
    title VARCHAR(255) NOT NULL,
    is_important BOOLEAN DEFAULT FALSE,
    content TEXT,
    author BINARY(16) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW())
    PRIMARY KEY (id)
    FOREIGN KEY (author) REFERENCES users(id)
  )
```

En otro ejemplo vemos una relación N:N, de una tabla consigo misma

Por ejemplo, una tabla releja las relaciones de unos usuarios con otros, como amigos o enemigos

```shell
  CREATE TABLE user_others (
    first_user_id INT NOT NULL
    second_user_id INT NOT NULL
    relation_type ENUM('friend', 'enemy')
    FOREIGN KEY(first_user_id) REFERENCES(users)
    FOREIGN KEY(second_user_id) REFERENCES(users)
    PRIMARY KEY (source_user_id, target_user_id)
  )
```

#### Restricciones posteriores

A posteriori, podemos decidir que un usuario no puede tener una relación consigo mismo, y para evitar que la tabla pueda reflejar esa situación, le añadimos una **CONSTRAIN**

Por ejemplo, en el caso anterior, podemos evitar que un usuario tenga una relación de amigo o enemigo consigo mismo

```shell
  ALTER TABLE user_others
  ADD CONSTRAIN check_other_id
  CHECK (first_user_id != second_user_id);
```

Un ejemplo similar sería una tabla de seguidores

```shell
  CREATE TABLE followers (
    follower_id INT NOT NULL
    followed_id INT NOT NULL
    FOREIGN KEY(follower_id) REFERENCES users(user_id)
    FOREIGN KEY(followed_id) REFERENCES users(user_id)
    PRIMARY KEY (follower_id, followed_id)
  )
```

COn su restricción

```shell
  ALTER TABLE followers
  ADD CONSTRAIN check_follower_id
  CHECK (follower_id != followed_id);
```

#### Tablas de relación

Un ejemplo más habitual, con relación n:m entre dos tablas, movies y genres, creando una tabla de relación entre ambas movies_genres

```shell

CREATE TABLE movies {
  id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID()))
  title  VARCHAR(250) NOT NULL,
  year INT NOT NULL,
  director VARCHAR(250) NOT NULL,
  duration INT NOT NULL,
  poster TEXT
  rate DECIMAL(3,1) NOT NULL
}

CREATE TABLE genres {
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
}

create TABLE movies_generes {
  movie_id BINARY(16)
  genere_id INT
  FOREIGN KEY(movie_id) REFERENCES movies(id)
  FOREIGN KEY
  PRIMARY KEY (movie_id, genere_id )
}
```

Para la tabla de la relación, hay una alternativa para escribirlo de forma más compacta

```shell

create TABLE movie_genere {
  movie_id BINARY(16) REFERENCES movies(id)
  genere_id INT REFERENCES genres(id)
  PRIMARY KEY (movie_id, genere_id )
}
```

### Borrado de las tablas

La sentencia TRUNCATE borra completamente todas las filas de un o tabla, pero sin eliminar la tabla misma.

```shell
  truncate table tableName;
  ◀┙
  Query OK, 0 rows affected (0.00 sec)
```

La sentencia DROP es usada para borrar completamente una o más tablas o la base de datos completa

```shell
  drop table tableName;
  ◀┙
  Query OK, 0 rows affected (0.00 sec)
```

```shell
  drop database dbName;
  ◀┙
  Query OK, 1 row affected (0.05 sec)
```

### Indexación

La creación de índices aporta velocidad a las búsquedas,
sacrificando espacio en disco y rapidez a la hora de realizar modificaciones.

```shell
CREATE ...
  INDEX index_name ON tablename
    (column1, column2, ..., columnN)
```

Por ejemplo

```shell
CREATE TABLE material (
  id INT NOT NULL,
  name CHAR(50) NOT NULL,
  resistance INT,
  melting_pt FLOAT,
  INDEX index_id_name (id, name),
  UNIQUE INDEX index_name (name))
```

### Cambios en tablas ya creadas

ALTER TABLE es usado para cambiar la estructura de una tabla existente. Podemos añadir o borrar columnas, cambiar el tipo de las columnas existentes, o renombrar las columnas o la tabla misma. También podemos cambiar el comentario de la tabla y el tipo de tabla.

```shell
 ALTER TABLE tbl_name specification [, specification
```

Las especificaciones corresponden a las distintas operaciones que se pueden llevar a cabo

- Rename -> Renombra el nombre de una Tabla
- Add -> Añade una columna nueva, clave, índice
- Add First -> Añade una columna antes
- Add After -> Añade una columna después
- Drop -> Suelta una columna, Índice, clave
- Change -> Cambia el nombre de una columna
- Change Type -> Cambia el tipo de columna
- Modify -> Modifica el tipo de columna

DROP COLUMN es usado para borrar una columna de una tabla.

```shell
  ALTER TABLE tbl_name DROP col_name;
```

Para renombrar una tabla se utiliza ALTER TABLE junto con RENAME.
Renombra la tabla tbl_name a tbl_name_new

```shell
  ALTER TABLE tbl_name RENAME tbl_name_new;
```

Añadir una columna usando ALTER TABLE con el modificador ADD COLUMN

```shell
  ALTER TABLE tbl_name ADD COLUMN fieldname_n INT(10);
  ◀┙
  Query OK, 0 rows affected (0.05 sec)
  Records: 0  Duplicates: 0  Warnings: 0
```

Podemos añadir FIRST, para añadir la nueva columna al principio de la tabla o AFTER <fieldname> para añadirla después de un campo concreto

```shell
  ALTER TABLE tbl_name ADD COLUMN fieldname_n INT(10) FIRST;
  ALTER TABLE tbl_name ADD COLUMN fieldname_n INT(10) AFTER fieldname_m;
```

Para renombrar un campo utilizamos CHANGE, recordando que cuando modificamos una columna, tenemos que especificar de nuevo su tipo de datos.

```shell
  ALTER TABLE tbl_name CHANGE fieldname_n fieldname_new VARCHAR(20);
```

Si indicamos como nuevo nombre el mismo que existía podemos usar esta expresión para cambiar el tipo de datos

```shell
  ALTER TABLE tbl_name CHANGE fieldname_1 fieldname_1 VARCHAR(40);
```

El mismo resultado se puede conseguir utilizando MODIFY

```shell
  ALTER TABLE tbl_name MODIFY fieldname_1 VARCHAR(40);
```

## Lenguaje SQL: control de datos (DCL)

Lenguaje de control de accesos (**DCL**): GRANT, REVOKE...

## Lenguaje SQL: manipulación de datos (DML)

CRUD (**DML**): SELECT, INSERT, UPDATE, DELETE ...

### SELECT (Read)

- SELECT
  - FROM
  - WHERE (constraints and operators)

Alias en tablas y campos

```shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.id = 1;
```

Filtrado y ordenación de resultados

- ORDER BY .. ASC | DESC
- LIMIT
- OFFSET
- DISTINCT
- GROUP BY

Ejemplo

```shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.id > 1
  ORDER BY
    u.id DESC
  LIMIT 10
  OFFSET 5;
```

#### JOIN

JOIN: FROM t1 JOIN t2 ON t1.key = t2.key

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL JOIN

- INNER JOIN: devuelve las filas en las que hay coincidencia en ambas tablas.
- LEFT [OUTER] JOIN: devuelve todas las filas de la tabla izquierda, incluso cuando no hay coincidencia con la tabla derecha.
- RIGHT [OUTER] JOIN: devuelve todas las filas de la tabla derecha, incluso cuando no hay coincidencia con la tabla izquierda.
- FULL JOIN: devuelve las filas en las que hay coincidencia en al menos una de las tablas.
- SELF JOIN: se utiliza para unir una tabla consigo misma, como si en realidad fueran dos tablas.
- CARTESIAN JOIN: devuelve el producto cartesiano de un conlunto de registros de dos o mas tablas unidas

```shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  INNER JOIN
    user_others AS uo
  ON
    u.id = uo.first_user_id
  WHERE
    uo.relation_type = 'friend';
```

En MySQL no existe como tal el FULL JOIN pero se consigue con la unión de un LEFT y un RIGHT JOIN

```shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  LEFT JOIN
    user_others AS uo
  ON
    u.id = uo.first_user_id
  WHERE
    uo.relation_type = 'friend'
  UNION
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  RIGHT JOIN
    user_others AS uo
  ON
    u.id = uo.first_user_id
  WHERE
    uo.relation_type = 'friend';
```

#### Expresiones de comparación

- =, <>, !=, >, <, >=, <=
- BETWEEN .. AND
- LIKE (case insensitive)
- IN
- IS NULL, IS NOT NULL
- EXISTS
- ANY, ALL
- AND, OR, NOT

- Caracteres comodines
  - % -> cualquier cadena de caracteres
  - \_ -> cualquier carácter

```shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.first_name LIKE 'A%'
  ORDER BY
    u.id DESC
  LIMIT 10
  OFFSET 5;
```

### Funciones nativas del lenguaje

- Funciones matemáticas
- Funciones de agregación
- Funciones de cadena
- Funciones de fecha y hora

#### Funciones de agregación

- GROUP BY
- COUNT()
- SUM()
- AVG()
- MIN()
- MAX()
- FIRST()
- LAST()
- HAVING()

### INSERT (Create)

- INSERT INTO
  - VALUES
  - SET

### UPDATE (Update)

- UPDATE
  - SET
  - WHERE

### DELETE (Delete)

- DELETE FROM
  - WHERE

## Advanced SQL

- Subqueries
- Views
- Stored Procedures and Functions
- Triggers
- Transactions
- Indexes
- Full-text search
- JSON

### Subqueries

Una subquery es una sentencia SELECT que forma parte de otra sentencia SQL, habitualmente en un WHERE

Se pueden incluir en SELECT, INSERT, UPDATE, DELETE, SET
y DO.

Siempre se indican entre paréntesis

````shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.id IN (SELECT id FROM user_others WHERE relation_type = 'friend');

```shell
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.id IN (SELECT id FROM user_others WHERE relation_type = 'friend');
````

Papel de las subqueries

- Eliminar JOINS innecesarios
- Incorporar el resultado de funciones a las condiciones de una sentencia SQL
- Usado en aplicaciones, eliminar múltiples queries en los bucles

### Índices

Un índice es una estructura de datos que mejora la velocidad de las operaciones de búsqueda en una tabla de una base de datos.

- **Índices simples**: se crean en una sola columna
- **Índices compuestos**: se crean en varias columnas
- **Índices únicos**: no permiten duplicados

Para la PK y la FK se crean índices automáticamente

Desventajas

- Ocupan espacio en disco
- Ralentizan las operaciones de escritura
- Manteniendo más complejo al tener en cuenta de los índices

### Views

Una vista es una tabla virtual basada en el resultado de una consulta SQL.

- **Vistas simples**: se crean a partir de una sola tabla
- **Vistas complejas**: se crean a partir de varias tablas
- **Vistas actualizables**: se pueden modificar
- **Vistas no actualizables**: no se pueden modificar

Por ejemplo, para crear una vista de la tabla de usuarios

```shell
  CREATE VIEW user_view AS
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u;
```

Se utilizan como si fueran tables

```shell
  SELECT * FROM user_view;
```

Ventajas

- Simplifican las consultas
- Mejoran la seguridad
- Simplifican la gestión de permisos
- Simplifican la gestión de cambios en la estructura de la base de datos

Desventajas

- Rendimiento (en realidad se ejecuta una consulta)
- Complejidad y dificultad de mantenimiento

### Bloqueos y transactions

#### Bloqueos en Bases de Datos SQL

Los bloqueos son mecanismos esenciales utilizados por los sistemas de gestión de bases de datos (DBMS) para controlar el acceso a los datos, especialmente en entornos con accesos concurrentes. Los bloqueos ayudan a mantener la integridad y consistencia de los datos al gestionar cómo y cuándo los usuarios pueden leer o modificar la información.

En el caso de la escritura, se pueden producir problemas de concurrencia si dos o más usuarios intentan modificar los mismos datos al mismo tiempo. Para evitar estos problemas, se utilizan los bloqueos, que la base de datos realiza de forma automática.

En el caso de la lectura, no existe problema de concurrencia, pero si de consistencia. Si un usuario está leyendo un dato que otro usuario está modificando, el primero puede obtener un valor incorrecto. Para evitar este problema, se utilizan los bloqueos de lectura.

##### Problemas de Concurrencia

En un entorno concurrente, donde múltiples usuarios o procesos acceden a la base de datos simultáneamente, pueden surgir varios problemas:

1. **Lecturas sucias**: Un usuario lee datos que están siendo modificados por otro usuario, obteniendo así valores incorrectos o incompletos.
2. **Lecturas no repetibles**: Un usuario lee el mismo dato dos veces y obtiene diferentes valores porque otro usuario lo ha modificado entre las lecturas.
3. **Lecturas fantasma**: Un usuario realiza una consulta y obtiene un conjunto de resultados, pero si repite la consulta, obtiene un conjunto diferente debido a inserciones o eliminaciones realizadas por otros usuarios.

##### Tipos de Bloqueos

Para abordar estos problemas, los DBMS utilizan diferentes tipos de bloqueos. A continuación, se describen los más comunes:

1. **Bloqueo de Lectura (Shared Lock)**: Permite a múltiples usuarios leer los mismos datos simultáneamente, pero impide que cualquier usuario modifique los datos mientras están siendo leídos. Se utiliza para evitar lecturas sucias. Mientras un usuario tiene un bloqueo de lectura, otros usuarios pueden obtener bloqueos de lectura, pero no bloqueos de escritura.

2. **Bloqueo de Escritura (Exclusive Lock)**: Impide que otros usuarios lean o modifiquen los datos mientras se están escribiendo. Se utiliza para asegurar que solo un usuario puede modificar los datos en un momento dado, evitando así conflictos de escritura.

3. **Bloqueo de Actualización (Update Lock)**: Se utiliza cuando un usuario tiene la intención de modificar los datos, pero aún no ha realizado la modificación. Permite a otros usuarios leer los datos, pero impide que otros usuarios obtengan bloqueos de escritura. Es una forma de preparar el camino para un bloqueo de escritura.

4. **Bloqueo de Exclusión (Exclusion Lock)** Similar al bloqueo de escritura, pero se utiliza en contextos específicos donde se necesita un control más estricto sobre el acceso a los datos. Puede ser utilizado en operaciones críticas donde es esencial que ningún otro usuario pueda acceder a los datos, ni siquiera para lectura.

##### Niveles de Bloqueo

Los bloqueos pueden aplicarse a diferentes niveles de granularidad:

1. **Bloqueo de Fila (Row-Level Locking)**: Aplica el bloqueo a nivel de fila individual.

   - **Ventajas**: Permite un alto nivel de concurrencia, ya que solo las filas afectadas están bloqueadas.
   - **Desventajas**: Puede requerir más recursos del sistema para gestionar los bloqueos.

2. **Bloqueo de Página (Page-Level Locking)**: Aplica el bloqueo a nivel de página de datos, que puede contener múltiples filas.

   - **Ventajas**: Menos recursos del sistema en comparación con el bloqueo de fila.
   - **Desventajas**: Menor concurrencia, ya que más datos están bloqueados.

3. **Bloqueo de Tabla (Table-Level Locking)**: Aplica el bloqueo a nivel de tabla completa.

   - **Ventajas**: Fácil de implementar y gestionar.
   - **Desventajas**: Baja concurrencia, ya que toda la tabla está bloqueada.

##### Consideraciones Adicionales

- **Deadlocks (Interbloqueos)**: Situaciones donde dos o más transacciones están esperando indefinidamente por recursos que están siendo utilizados por las otras. Los DBMS suelen tener mecanismos para detectar y resolver deadlocks.
- **Timeouts**: Los bloqueos suelen tener tiempos de espera (timeouts) para evitar que las transacciones queden bloqueadas indefinidamente.
- **Aislamiento de Transacciones**: Los niveles de aislamiento de transacciones (como "Read Uncommitted", "Read Committed", "Repeatable Read", y "Serializable") determinan cómo se manejan los bloqueos y la visibilidad de los datos entre transacciones concurrentes.

En resumen, los bloqueos son fundamentales para garantizar la integridad y consistencia de los datos en entornos concurrentes. Aunque no todos los motores de bases de datos soportan todos los tipos de bloqueos, la mayoría ofrece mecanismos para gestionar el acceso concurrente de manera eficiente.

#### Transactions en MySQL

Las transacciones en MySQL son una secuencia de operaciones realizadas como una sola unidad lógica de trabajo. Una transacción puede incluir una o más consultas SQL que modifican los datos en la base de datos. Las transacciones son fundamentales para garantizar la integridad y consistencia de los datos, especialmente en entornos concurrentes donde múltiples usuarios o procesos acceden a la base de datos simultáneamente. Al seguir las propiedades ACID y utilizar los comandos adecuados para gestionar transacciones, se puede asegurar que las operaciones críticas se realicen de manera segura y eficiente.

##### Propiedades ACID de las Transacciones

Las transacciones en MySQL siguen las propiedades ACID, que son:

1. **Atomicidad**: Asegura que todas las operaciones dentro de una transacción se completen con éxito. Si alguna operación falla, toda la transacción se deshace, y la base de datos vuelve a su estado anterior.
2. **Consistencia**: Garantiza que una transacción lleva a la base de datos de un estado válido a otro estado válido, manteniendo todas las reglas y restricciones definidas.
3. **Aislamiento**: Asegura que las operaciones dentro de una transacción no interfieran con otras transacciones concurrentes. Esto se logra mediante diferentes niveles de aislamiento.
4. **Durabilidad**: Una vez que una transacción se ha confirmado (committed), los cambios son permanentes y no se perderán, incluso en caso de fallos del sistema.

##### Gestión de Transacciones en MySQL

MySQL soporta transacciones a través de los motores de almacenamiento InnoDB y NDB. Aquí se describen los comandos básicos para gestionar transacciones:

1. **Iniciar una Transacción**:

   - `BEGIN;`: Inicia una nueva transacción.
   - `START TRANSACTION;` es la versión antiguamente utilizada, exclusiva de MySQL.

   ```sql
   BEGIN;
   ```

1. **Confirmar una Transacción**:

   - `COMMIT;`: Confirma la transacción, haciendo permanentes todos los cambios realizados durante la transacción.

   ```sql
   COMMIT;
   ```

1. **Deshacer una Transacción**:

   - `ROLLBACK;`: Deshace todos los cambios realizados durante la transacción, devolviendo la base de datos a su estado anterior.

   ```sql
   ROLLBACK;
   ```

1. **Puntos de Salvaguarda**:

   - `SAVEPOINT nombre_savepoint;`: Establece un punto de salvaguarda dentro de una transacción.
   - `ROLLBACK TO nombre_savepoint;`: Deshace los cambios realizados desde el punto de salvaguarda especificado.

   ```sql
   SAVEPOINT punto1;
   -- Realizar algunas operaciones
   ROLLBACK TO punto1;
   ```

##### Niveles de Aislamiento

MySQL ofrece diferentes niveles de aislamiento para controlar cómo las transacciones interactúan entre sí:

1. **READ UNCOMMITTED**: Permite leer datos no confirmados de otras transacciones. Puede causar lecturas sucias.
2. **READ COMMITTED**: Solo permite leer datos que han sido confirmados. Evita lecturas sucias pero no lecturas no repetibles.
3. **REPEATABLE READ**: Asegura que si se lee el mismo dato dos veces dentro de la misma transacción, se obtendrá el mismo valor. Evita lecturas no repetibles pero no lecturas fantasma.
4. **SERIALIZABLE**: El nivel más estricto, asegura que las transacciones se ejecuten de manera secuencial. Evita todos los problemas de concurrencia pero puede reducir el rendimiento.

Para establecer el nivel de aislamiento, se utiliza el comando:

```sql
SET TRANSACTION ISOLATION LEVEL nombre_nivel;
```

##### Ejemplo de Transacción

Aquí tienes un ejemplo simple de una transacción en MySQL:

```sql
START TRANSACTION;

-- Operación 1
UPDATE cuenta SET saldo = saldo - 100 WHERE id_cuenta = 1;

-- Operación 2
UPDATE cuenta SET saldo = saldo + 100 WHERE id_cuenta = 2;

-- Si todo está bien, confirmamos la transacción
COMMIT;

-- Si algo falla, deshacemos la transacción
-- ROLLBACK;
```

En este ejemplo, se transfiere dinero de una cuenta a otra. Si ambas operaciones se completan con éxito, se confirma la transacción con `COMMIT`. Si algo falla, se puede deshacer la transacción con `ROLLBACK`. Este código cobrará más sentido si podemos incluir cierto codigo que evalue el resultado de las operaciones y decida si se confirma o se deshace la transacción. Ahí es donde entra en juego el código de programación que se conecta a la base de datos, como applicaciones externas o el propio código de la base de datos del que hablaremos a continuación.

### Procedimientos almacenados (Stored Procedures) y funciones (Functions) en MySQL

Los procedimientos almacenados y las funciones son bloques de código SQL que se almacenan en la base de datos y se pueden ejecutar de manera repetitiva. Ambos son herramientas poderosas en MySQL que permiten encapsular lógica compleja, mejorar la modularidad y reutilización del código y optimizar el rendimiento.

#### Procedimientos Almacenados

Un procedimiento almacenado es un conjunto de instrucciones SQL que se ejecutan como una unidad. Los procedimientos almacenados pueden aceptar parámetros de entrada y salida, y pueden realizar operaciones complejas en la base de datos.

##### Características de los Procedimientos Almacenados

- **Reutilización**: Permiten reutilizar código SQL en múltiples partes de una aplicación.
- **Rendimiento**: Al estar precompilados, pueden ejecutarse más rápidamente que las consultas SQL dinámicas.
- **Seguridad**: Pueden restringir el acceso directo a las tablas, permitiendo solo la ejecución de procedimientos específicos.
- **Mantenimiento**: Facilitan el mantenimiento del código al centralizar la lógica en un solo lugar.

##### Sintaxis Básica

```sql
DELIMITER //

CREATE PROCEDURE nombre_procedimiento ([parametros])
BEGIN
    -- Cuerpo del procedimiento
END //

DELIMITER ;
```

##### Ejemplo de Procedimiento Almacenado

```sql
DELIMITER //

CREATE PROCEDURE actualizar_salario (IN empleado_id INT, IN nuevo_salario DECIMAL(10, 2))
BEGIN
    UPDATE empleados
    SET salario = nuevo_salario
    WHERE id = empleado_id;
END //

DELIMITER ;
```

Para ejecutar el procedimiento:

```sql
CALL actualizar_salario(1, 50000.00);
```

#### Funciones

Una función es similar a un procedimiento almacenado, pero siempre devuelve un valor. Las funciones se utilizan principalmente para realizar cálculos o transformaciones de datos y se pueden llamar desde consultas SQL.

##### Características de las Funciones

- **Devolución de Valor**: Siempre devuelven un valor, que puede ser utilizado en consultas SQL.
- **Reutilización**: Permiten reutilizar lógica de cálculo o transformación en múltiples consultas.
- **Modularidad**: Facilitan la modularización del código al separar la lógica de cálculo en funciones específicas.

##### Sintaxis Básica de las funciones

```sql
DELIMITER //

CREATE FUNCTION nombre_funcion ([parametros])
RETURNS tipo_retorno
BEGIN
    -- Cuerpo de la función
    RETURN valor;
END //

DELIMITER ;
```

##### Ejemplo de Función

```sql
DELIMITER //

CREATE FUNCTION calcular_impuesto (precio DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE impuesto DECIMAL(10, 2);
    SET impuesto = precio * 0.21;
    RETURN impuesto;
END //

DELIMITER ;
```

Para utilizar la función en una consulta:

```sql
SELECT producto_id, precio, calcular_impuesto(precio) AS impuesto
FROM productos;
```

#### Diferencias entre Procedimientos Almacenados y Funciones

- **Devolución de Valor**: Las funciones siempre devuelven un valor, mientras que los procedimientos almacenados no necesariamente lo hacen.
- **Uso en Consultas**: Las funciones se pueden utilizar directamente en consultas SQL, mientras que los procedimientos almacenados no.
- **Parámetros de Salida**: Los procedimientos almacenados pueden tener parámetros de salida (OUT), mientras que las funciones no.

#### Ventajas y Desventajas

##### Ventajas

- **Modularidad**: Permiten dividir el código en módulos reutilizables.
- **Rendimiento**: Al estar precompilados, pueden ejecutarse más rápidamente.
- **Seguridad**: Pueden restringir el acceso directo a las tablas.

##### Desventajas

- **Complejidad**: Pueden aumentar la complejidad del código si no se gestionan adecuadamente.
- **Depuración**: Puede ser más difícil depurar procedimientos almacenados y funciones en comparación con el código SQL dinámico.

### Triggers

Los triggers (disparadores) son bloques de código SQL que se ejecutan automáticamente en respuesta a ciertos eventos en la base de datos. Los triggers son una característica poderosa de MySQL que permite automatizar tareas, mantener la integridad de los datos y aplicar reglas de negocio de manera eficiente.

Un ejemplo habitual es asisignar un valor a un atributo calculado en función de otros atributos de la tabla.

Por ejemplo, para una tabla de empleados, se puede tener un trigger que actualice el salario de un empleado cuando se modifica su nivel de experiencia.

```sql

DELIMITER //

CREATE TRIGGER actualizar_salario
BEFORE UPDATE ON empleados
FOR EACH ROW
BEGIN
    IF NEW.experiencia > 5 THEN
        SET NEW.salario = NEW.salario * 1.1;
    END IF;
END //

DELIMITER ;

```

En este otro ejemplo, se actualiza el número de likes de un tweet cada vez que se inserta un nuevo like en la tabla `tweet_likes`.

```sql
DELIMITER $$

CREATE TRIGGER update_num_likes
AFTER INSERT ON tweet_likes
FOR EACH ROW
BEGIN
  UPDATE tweets
  SET num_likes = num_likes + 1
  WHERE tweet_id = NEW.tweet_id;
END $$
```

Igualmente habría que crear un trigger para decrementar el número de likes cuando se elimina un like.

```sql
DELIMITER $$
CREATE TRIGGER decrease_num_likes
AFTER DELETE ON tweet_likes
FOR EACH ROW
BEGIN
  UPDATE tweets
  SET num_likes = num_likes - 1
  WHERE tweet_id = OLD.tweet_id;
END $$
```

## SQL y ECMAScript (JavaScript)

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
