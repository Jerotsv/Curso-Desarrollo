class User {
    static usersNumber = 0;
    static countUsers() {
        User.usersNumber++;
    }
    static {
        console.log('Load class USER');
    }

    #name: string;
    age: number;
    pets?: string[];
    constructor(name: string, age: number, pets: string[] = []) {
        this.#name = name;
        this.age = age;
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
        console.log(`Hola, soy ${this.#name} y tengo ${this.age} años`);
    }

    grow(): void {
        this.age++;
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
