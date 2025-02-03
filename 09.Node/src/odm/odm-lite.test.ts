import { ODMLite } from './odm-lite';
import { readFromDisk, writeToDisk } from './helpers';
import { vi } from 'vitest';

type Item = {
    id: string;
    title: string;
};

vi.mock('./helpers');

const ITEMS = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
];

const DB = {
    items: ITEMS,
};

describe('Given a instance of class ORMLite', () => {
    let odmLite: ODMLite<Item>;
    beforeEach(() => {
        odmLite = new ODMLite('file.json');

        vi.mocked(readFromDisk).mockResolvedValue(
            JSON.stringify({
                items: ITEMS,
            }),
        );

        vi.mocked(writeToDisk).mockImplementation(async () => {});
    });

    test('Then it Should be defined', () => {
        expect(odmLite).toBeDefined();
    });

    describe('When run method read with a collection name', () => {
        test('Then result should be all data collection', async () => {
            const data = await odmLite.read('items');
            expect(data).toStrictEqual(DB.items);
        });
    });

    describe('When run method readById with a collection name and an id', () => {
        test('Then result should be the find item if id is 1', async () => {
            const collection = 'items';
            const id = '1';
            const item = await odmLite.readById(collection, id);
            expect(item).toStrictEqual(DB.items[0]);
        });
        test('Then a error should be throw if id is 3', async () => {
            const collection = 'items';
            const id = '3';
            await expect(odmLite.readById(collection, id)).rejects.toThrowError(
                `Item with id ${id} not found`,
            );
        });
    });

    describe('When run method create with a collection name and data', () => {
        test('Then result should be the item created', async () => {
            const collection = 'items';
            const initialData = { title: 'Item 3' };
            const item = await odmLite.create(collection, initialData);
            expect(item).toStrictEqual({
                id: expect.any(String),
                ...initialData,
            });
            expect(writeToDisk).toHaveBeenCalledWith(
                expect.any(String),
                expect.stringContaining(initialData.title),
            );
        });
    });

    describe('When run method updateById with a collection name, id and data', () => {
        test('Then result should be the item updated if id is 1', async () => {
            const collection = 'items';
            const id = '1';
            const data = { title: 'Item 1 Updated' };
            const item = await odmLite.updateById(collection, id, data);
            expect(item).toStrictEqual({
                id: id,
                title: data.title,
            });
            expect(writeToDisk).toHaveBeenLastCalledWith(
                expect.any(String),
                expect.stringContaining(data.title),
            );
        });
        test('Then a error should be throw if id is 3', async () => {
            const collection = 'items';
            const id = '3';
            const data = { title: 'Item 3 Updated' };
            await expect(
                odmLite.updateById(collection, id, data),
            ).rejects.toThrowError(`Item with id ${id} not found`);
        });
    });

    describe('When run method deleteById with a collection name and id', () => {
        test('Then result should be the item deleted if id is 1', async () => {
            const collection = 'items';
            const id = '1';
            const item = await odmLite.deleteById(collection, id);
            expect(item).toStrictEqual(DB.items[0]);
            expect(writeToDisk).toHaveBeenCalledWith(
                expect.any(String),
                expect.not.stringContaining(DB.items[0].title),
            );
        });
        test('Then a error should be throw if id is 3', async () => {
            const collection = 'items';
            const id = '3';
            await expect(
                odmLite.deleteById(collection, id),
            ).rejects.toThrowError(`Item with id ${id} not found`);
        });
    });
});
