/*eslint-disable */

class User {
    static usersNumber = 0;
    static countUsers() {
        User.usersNumber++;
    }
    static {
        console.log('Load class USER');
    }

    #name: string;
    private _age: number;
    pets?: string[];
    constructor(name: string, age: number, pets: string[] = []) {
        this.#name = name;
        this._age = age;
        this.pets = pets;
        User.countUsers();
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    greet(): void {
        console.log(`Hola, soy ${this.#name} y tengo ${this._age} años`);
    }

    grow(): void {
        this._age++;
    }
}

const user1 = new User('Pepe', 22, ['Rufo']);
const user2 = new User('Juan', 24);

console.log(user1, user2);

console.log(user1, user2);

user1.grow();
user1.greet();
user2.greet();

console.log(User.usersNumber);

// user1.name = 'Jose';
// console.log(user1.name);

// Clase define factura (Invoice)
// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA

// Propiedades de parámetros

{
    class User {
        static usersNumber = 0;
        static countUsers() {
            User.usersNumber++;
        }
        static {
            console.log('Load class USER');
        }

        // private _name: string;
        // private _age: number;
        // public pets?: string[];
        constructor(
            private _name: string,
            private _age: number,
            public pets: string[] = [],
        ) {
            // this._name = name;
            // this._age = age;
            // this.pets = pets;
            User.countUsers();
        }

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }

        greet(): void {
            console.log(`Hola, soy ${this._name} y tengo ${this._age} años`);
        }

        grow(): void {
            this._age++;
        }
    }

    const u = new User('Luisa', 63);
}
{
    class Person {
        constructor(
            public name: string,
            public age: number,
        ) {}

        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años`;
        }
    }

    class Employee extends Person {
        constructor(
            name: string,
            age: number,
            public salary: number,
        ) {
            super(name, age);
        }

        override greet() {
            return `${super.greet()} y cobro ${this.salary}€`;
        }

        // override greet() {
        //     return `cobro ${this.salary}€`;
        // }
    }
}
{
    interface User {
        account: string;
        createAccount: () => string;
    }

    const u: User = {
        account: '',
        createAccount: function () {
            return '';
        },
    };

    abstract class Person {
        constructor(
            public name: string,
            public age: number,
        ) {}

        abstract greet(): string;
        eat() {
            return 'Estoy comiendo';
        }
    }

    class Employee extends Person implements User {
        account: string = '';
        constructor(
            name: string,
            age: number,
            public salary: number,
        ) {
            super(name, age);
        }

        createAccount(): string {
            return '';
        }

        greet() {
            return `Hola, soy ${this.name} y tengo ${this.age} años y cobro ${this.salary}€`;
        }

        override eat(): string {
            return super.eat() + ' ......';
        }
    }

    const e1 = new Employee('Pepe', 34, 40_000);
    console.log(e1.eat());
    console.log(e1.greet());
}
{
    type Item = {};
    type PartialItem = {};

    interface Repository {
        read: () => Item[];
        readById: (id: string) => Item;
        create: (data: PartialItem) => Item;
        update: (id: string, data: PartialItem) => Item;
        delete: (id: string) => Item;
    }

    // class RepoNotesSQL implements Repository {}

    // class RepoNotesMongo implements Repository {}

    // const repo = new RepoNotesMongo();

    // repo.read();
}
