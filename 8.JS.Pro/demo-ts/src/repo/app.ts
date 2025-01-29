// DESARROLLO DEL CÓDIGO

// Creamos la interfaz ODM genérica
// Modelando los métodos CRUD de un repositorio de datos
// Simplificando la forma en que los llevaría a cabo un ORM

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

// // Creamos una clase que implementa la interfaz Repository
// import { RepoItemFile } from './repo-item-file';

// // Instanciamos la clase y leemos los datos

// const repo = new RepoItemFile();
// console.log(repo.read());

type WithId = { id: string };

export interface TypeORM<T extends WithId> {
    read: () => T[];
    readById: (id: T['id']) => T;
    create: (data: Omit<T, 'id'>) => T;
    updateById: (id: T['id'], data: Partial<T>) => T;
    deleteById: (id: T['id']) => T;
}
