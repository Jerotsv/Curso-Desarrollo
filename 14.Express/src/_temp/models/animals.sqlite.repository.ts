/* eslint-disable @typescript-eslint/no-unused-vars */
import { Database } from 'sqlite3';
import { Animal } from '../../models/animal.type.js';
import type { Repository } from '../../models/repository.type.js';

export class AnimalSqliteRepo implements Repository<Animal> {
    constructor(private db: Database) {}

    async read(): Promise<Animal[]> {
        throw new Error('Method not implemented.');
    }
    async readById(id: string): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    async create(data: Omit<Animal, 'id'>): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    async update(
        id: string,
        data: Partial<Omit<Animal, 'id'>>,
    ): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    async delete(id: string): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
}
