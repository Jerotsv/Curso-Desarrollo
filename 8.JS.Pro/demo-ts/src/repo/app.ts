// DESARROLLO DEL CÓDIGO

// Creamos la interfaz ODM genérica
// ODM (Object Document Mapper) es un patrón de diseño que
// mapea objetos de datos en documentos de base de datos

// Modelando los métodos CRUD de un repositorio de datos
// Simplificando la forma en que los llevaría a cabo un ORM

// Debemos considerar si la collection será:
// parámetro de los métodos CRUD
// propiedad de la clase ORM y por tanto del constructor

// En types.d.ts

// Como mocks, generamos funciones de lectura escritura capaces de leer y escribir en un almacenamiento (e,g, Fichero)
// import { readFromDisk, writeToDisk } from './helpers';

// Creamos una clase que implementa la interfaz ORM
// import { ORMLite } from './orm-lite';

// Necesitaremos algunas utilidades de tipos de TypeScript
// Partial<T> para definir un tipo con todas las propiedades de T como opcionales
// Omit<T, K> para definir un tipo sin las propiedades de K

// Cream9os una interfaz Repository que define los métodos CRUD

// En types.d.ts

// Como mock de modelo de datos generamos una interfaz/tipo Item

// En types.d.ts

// Creamos una clase que implementa la interfaz Repository
import { RepoItemFile } from './repo-item-file';

// Instanciamos la clase y leemos los datos

const repo = new RepoItemFile();
console.log(repo.read());
