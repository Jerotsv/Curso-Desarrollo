import { ODMLite } from './odm-lite';

export class RepoItemFile implements Repository<Item> {
    orm: TypeODM<Item>;
    collection: string;
    constructor(file = 'db.json', collection = 'items') {
        this.orm = new ODMLite<Item>(file);
        this.collection = collection;
    }

    read() {
        return this.orm.read(this.collection);
    }
    readById(id: string) {
        return this.orm.readById(this.collection, id);
    }
    create(data: Omit<Item, 'id'>) {
        return this.orm.create(this.collection, data);
    }
    update(id: string, data: Partial<Omit<Item, 'id'>>) {
        return this.orm.updateById(this.collection, id, data);
    }
    delete(id: string) {
        return this.orm.deleteById(this.collection, id);
    }
}
