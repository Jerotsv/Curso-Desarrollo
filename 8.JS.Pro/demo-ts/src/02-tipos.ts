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
