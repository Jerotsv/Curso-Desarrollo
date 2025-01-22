const user = {
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

console.log(user.__proto__.__proto__);

const mammal = {
    hasFur: true,
};

const person = {
    teeth: 32,
};

user.__proto__ = person;
person.__proto__ = mammal;

console.log(user.teeth);
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('teeth'));
console.log(user.hasFur);
console.log(user.hasOwnProperty('hasFur'));

user.teeth = 30;
console.log(user.teeth);
console.log(user.hasOwnProperty('teeth'));

({}).__proto__.taste = 'vanilla';

console.log(user.taste);
