/*eslint-disable */

// alias de tipos
{
    type User = {
        readonly name: string;
        age: number;
        job?: string;
    };

    const user1: User = {
        name: 'Pepe',
        age: 23,
    };

    const user2: User = {
        name: 'Juan',
        age: 22,
    };
}
// Interfaces
{
    interface User {
        readonly name: string;
        age: number;
        job?: string;
    }

    const user1: User = {
        name: 'Pepe',
        age: 23,
    };
}
// Solo con alias de tipo -> primitivos
{
    type Name = string;
    let userName: Name = 'Pepe';

    type ID = string | number;
    let sku: ID = 1;

    type State = 'success' | 'fail' | 'idle';
    let processState: State = 'success';
}
// Solo con interfaces -> Ampliación
{
    interface User {
        readonly name: string;
        age: number;
        job?: string;
    }
    //    ...
    interface User {
        pet: string[];
    }
}

// Uniones / Intersecciones
{
    type User = {
        readonly name: string;
        age: number;
        job?: string;
    };
    //    ...
    type PetOwner = {
        pet: string[];
    };

    type UserWithPet = User & PetOwner & {};
}
{
    interface User {
        readonly name: string;
        age: number;
        job?: string;
    }
    //    ...
    interface PetOwner {
        pet: string[];
    }

    interface UserWithPet extends User, PetOwner {}
}
{
    class User {
        name: string;
        age: number;
        pets?: string[];
        constructor(name: string, age: number, pets: string[] = []) {
            this.name = name;
            this.age = age;
            this.pets = pets;
        }
    }

    let user1: User;
    let user2: User;

    user1 = new User('Pepe', 22);
    // Tipado estructural -> NO ES tipado nominal
    user2 = { name: 'Juan', age: 32 };

    console.log(user1, user2);
    console.log(user1 instanceof User);
    console.log(user2 instanceof User);
}
