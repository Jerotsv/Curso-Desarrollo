---
title: SQL
---

- [Introducción](#introducción)
  - [SQL (1974)](#sql-1974)
    - [Componentes de SQL](#componentes-de-sql)
    - [Estandarización](#estandarización)
    - [Sistemas de gestión de bases de datos relacionales (RDBMS)](#sistemas-de-gestión-de-bases-de-datos-relacionales-rdbms)
- [Conceptos](#conceptos)
  - [Bases de datos Relacionales (RDB)](#bases-de-datos-relacionales-rdb)
  - [Base de datos No Relacionales o NoSQL](#base-de-datos-no-relacionales-o-nosql)
  - [Diseño de bases de datos](#diseño-de-bases-de-datos)
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
  - [Modelos gráficos E/R](#modelos-gráficos-er)
- [MySQL](#mysql)
  - [Que es MySQL](#que-es-mysql)
  - [Características de MySQL](#características-de-mysql)
    - [El principal objetivo de MySQL es velocidad y robustez](#el-principal-objetivo-de-mysql-es-velocidad-y-robustez)
    - [Escalabilidad y límites](#escalabilidad-y-límites)
    - [Conectividad](#conectividad)
  - [Instalación](#instalación)
  - [Aprendizaje del Lenguaje SQL](#aprendizaje-del-lenguaje-sql)
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
  - [Algunos ejemplos](#algunos-ejemplos)
  - [Borrado de las tablas](#borrado-de-las-tablas)
  - [Indexación](#indexación)
  - [Cambios en tablas ya creadas](#cambios-en-tablas-ya-creadas)
- [Lenguaje SQL: control de datos (DCL)](#lenguaje-sql-control-de-datos-dcl)
- [Lenguaje SQL: manipulación de datos (DML)](#lenguaje-sql-manipulación-de-datos-dml)
  - [SELECT (Read)](#select-read)
  - [INSERT (Create)](#insert-create)
  - [UPDATE (Update)](#update-update)
  - [DELETE (Delete)](#delete-delete)
- [Advanced SQL](#advanced-sql)
  - [Subqueries](#subqueries)
- [SQL y ECMAScript (JavaScript)](#sql-y-ecmascript-javascript)
  - [Driver nativo para Node](#driver-nativo-para-node)
  - [ORM (Object–relational mapping)](#orm-objectrelational-mapping)

## Introducción

- DB (data bases). Historia
  - Sistema gestor de base de datos (Data Base Management System o DBMS)
    - Sistemas de bases de datos de propósito genera (1960s): CODASYL ligado a COBOL
    - RDB (Relational Data Bases): SQL (1970s): modelo relacional de Edgar Frank Codd
      - IBM: System R (SEQUEL) --> SQL/DS --> DB2
      - Berkeley: INGRES --> Postgres, Sybase, Informix, NonStop SQL
  - SQL (Structured Query Language).

### SQL (1974)

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

## Conceptos

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

### Base de datos No Relacionales o NoSQL

Es el caso de las **bases de datos documentales (DDB)** como **MongoDB**

- la información se organiza **COLECCIONES**
- las colecciones están formadas por una serie de **documentos**
- cada documento se asimila a un **objeto** de ES que contiene una serie de propiedades
- cada documento puede ser completamente diferente del anterior
  - aunque en realidad es muy común que compartan una misma estructura
- los documentes pueden establecer relaciones con documentos de otras colecciones

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

### Modelos entidad/relación

- Entidades: Conceptos de interés: objetos, reales o abstractos, distinguibles de otros objetos.
  - Los grupos de entidades con cualidades similares acerca de los cuales se almacena información se denominan tipos
- Atributos: Características de las entidades: propiedades asociadas a un conjunto de entidades.
  - Para cada atributo (representación de las propiedades de los objetos ), existe un conjunto de valores permitidos llamado dominio.
- Relaciones: Conexiones o asociaciones: conexiones semánticas entre conjuntos de entidades.

#### Tipos de atributos

- Atributos compuestos vs. Atributos simples (atómicos)

  - Los atributos compuestos se pueden dividir en componentes más pequeños con significado propio
  - e.g. dirección = calle + municipio + CP + provincia

- Atributos mono-valuados vs. Atributos multi-valuados

  - Un atributo mono-valuado tiene un único valor para una entidad particular
  - e.g. el atributo hijos, será multi-valuado en numerosas entidades “persona”

- Atributos almacenados vs. Atributos derivados

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

- los RDBMS pueden generarlos de forma **auto-incremental** con tipo numérico
- se puede usar el estándar **UUID** (Universal Unique Identifier, Identificador único universal), un valor de 128 bits que se utiliza para identificar de forma única un objeto o entidad, frecuentemente usado en Internet . Dependiendo de los mecanismos específicos utilizados, se garantiza que un UUID será diferente o, al menos, es muy probable que sea diferente de cualquier otro UUID generado hasta el año 3400 d.C.

#### Características de las relaciones

Grado: Número de tipos de entidades que participan en la conexión, haciéndola binaria, terciaria…

Cardinalidad: Numero de elementos de un tipo que se conectan con un elemento de otro (restricción que se observa en el dominio del problema y que controla las ocurrencias de las relaciones).

- En el caso de las relaciones binarias (grado 2):

  - Relaciones uno a uno (1:1) La clave aparece una sola vez en cada una de las tablas relacionadas
  - Relaciones uno a muchos (1:n) La clave de una tabla aparece n veces en la tabla relacionada.
    - Es el tipo de relación más común
    - e.g. Lista de twits (post, notas...)
      - un Autor tiene n notas
      - cada nota tiene 1 autor
      - Relación Autor 1 ---- n Nota
  - Relaciones muchos a muchos (n:m) Es una conflictiva combinación de varias de las anteriores, por lo que suele romperse en la serie de relaciones 1:n que la componen

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

### Modelos gráficos E/R

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

### Aprendizaje del Lenguaje SQL

[sqlBolt](https://sqlbolt.com/)

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

**CLAVE PRIMARIA (PRIMARY KEY)** es un campo o campos en una tabla que identifican unívocamente a cada registro. Este atributo es usado para definir el nombre del campo para crear una clave primaria.

Puede indicarse al final del comando para crear la tabla o, si es única, al definir el campo

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

### Algunos ejemplos

Tablas users
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

Relación con tabla de notas:

id, title, is_important, content, autor, created_at

Una tabla releja las relaciones de unos usuarios con otros, como amigos o enemigos

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

A posteriori, podemos decidir que un usuario no puede tener una relación consigo mismo, y para evitar que la tabla pueda reflejar esa situación, le añadimos una **CONSTRAIN**

```shell
  ALTER TABLE user_others
  ADD CONSTRAIN check_other_id
  CHECK (first_user_id != second_user_id);
```

Un ejemplo más habitual, con relación n:m entre dos tablas

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

create TABLE movie_genere {
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

Expresiones de comparación

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

Funciones nativas del lenguaje

- Funciones matemáticas
- Funciones de agregación
- Funciones de cadena
- Funciones de fecha y hora

Funciones de agregación

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

## SQL y ECMAScript (JavaScript)

### Driver nativo para Node

- driver antiguo [mysql](https://www.npmjs.com/package/mysql)

This is a node.js driver for mysql.
It is written in JavaScript, does not require compiling, and is 100% MIT licensed.

- driver moderno [mysql2](https://www.npmjs.com/package/mysql2)

A continuation of MySQL-Native.
Protocol parser code was rewritten from scratch and api changed to match popular Node MySQL.

### ORM (Object–relational mapping)

from [9 Best JavaScript and TypeScript ORMs for 2024](https://www.sitepoint.com/javascript-typescript-orms/)

- [Knex.js](https://knexjs.org/) JavaScript SQL Query builder
- [Sequelize](https://sequelize.org/) JavaScript ORM Library on top of some native driver
- [Bookshelf](https://bookshelfjs.org/) JavaScript ORM Library on top of Knex.js SQL Query Builder
- [Objection.js](https://vincit.github.io/objection.js/) JavaScript ORM Library on top of Knex.js SQL Query Builder and some native driver
- [TypeORM](https://typeorm.io/) TypeScript ORM Library on top of reflect-metadata and some native driver
- [MikroORM](https://mikro-orm.io/) TypeScript ORM Library for SQL and NoSQL inspired by PHP Doctrine
- [Prisma](https://www.prisma.io/) recent TypeScript ORM
