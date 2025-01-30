import { readFromDisk, writeToDisk } from './helpers';

export class ODMLite<T extends { id: string }> implements TypeODM<T> {
    file: string;
    constructor(file: string) {
        this.file = file;
    }

    private readDB(): Record<string, T[]> {
        const txtData = readFromDisk(this.file);
        return JSON.parse(txtData);
    }

    private writeDB(data: Record<string, T[]>): void {
        writeToDisk(this.file, JSON.stringify(data));
    }

    read(collection: string): T[] {
        const allData = this.readDB();
        return allData[collection];
    }

    readById(collection: string, id: string): T {
        const allData = this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    create(collection: string, initialData: Omit<T, 'id'>): T {
        const allData = this.readDB();
        const itemData = {
            ...initialData,
            id: crypto.randomUUID().substring(0, 8),
        } as T;
        allData[collection].push(itemData);
        this.writeDB(allData);
        return itemData;
    }

    updateById(
        collection: string,
        id: string,
        data: Omit<Partial<T>, 'id'>,
    ): T {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = this.readDB();
        let item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        this.writeDB(allData);
        return item;
    }

    deleteById(collection: string, id: string) {
        const allData = this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        allData[collection] = allData[collection].filter(
            (item: T) => item.id !== id,
        );
        this.writeDB(allData);
        return item;
    }
}
