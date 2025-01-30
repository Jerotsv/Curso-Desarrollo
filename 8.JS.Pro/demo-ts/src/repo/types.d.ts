// Creamos una interfaz ODM genérica
// que recibe el nombre de la colección
// como el conjunto de datos que se va a leer y escribir
// del conjunto total de datos
interface TypeODM<T extends WithId> {
    read: (collection: string) => T[];
    readById: (collection: string, id: T['id']) => T; // Errores => throw Error
    create: (collection: string, data: Omit<T, 'id'>) => T;
    updateById: (
        collection: string,
        id: T['id'],
        data: Omit<Partial<T>, 'id'>,
    ) => T;
    deleteById: (collection: string, id: T['id']) => T;
}

type WithId = { id: string };

type Item = WithId & { name: string };
// equivalente a type Item = { id: string; name: string; }

interface Repository<T> {
    read: () => T[];
    readById: (id: string) => T;
    create: (data: Omit<T, 'id'>) => T;
    update: (id: string, data: Partial<Omit<T, 'id'>>) => T;
    delete: (id: string) => T;
}
