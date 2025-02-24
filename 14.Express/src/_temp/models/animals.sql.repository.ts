/* eslint-disable @typescript-eslint/no-unused-vars */
import { Connection } from 'mysql2/promise.js';
import { Animal } from '../../models/animal.type.js';
import type { Repository } from '../../models/repository.type.js';

export class AnimalSqlRepo implements Repository<Animal> {
    constructor(private connection: Connection) {}

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
