console.log('Index loaded');

// function greeting() {

// const question = '¿Como te llamas?'
//     const userName = prompt(question)
//     if(userName === null || userName === '')  return
//     const response = `Hola, ${userName}, que tal estas`
//     alert(response)

//     // if(userName !== null) {
//     //     const response = `Hola, ${userName}, que tal estas`
//     //     alert(response)
//     // }
// }

// const button = document.querySelector('form button')
// button.addEventListener('click', greeting)

// El DOM como "árbol" de objetos
console.dir(document);

// Acceso secuencial a cualquier nodo
console.dir(document.children[0].children[1].children[0].children[1]);

// Acceso directo buscando un nodo: API selectors
const headerElement = document.querySelector('header');
console.dir(headerElement.querySelectorAll('img'));

document.querySelector('#header');
document.querySelector('article>p.header');

// Acceso directo "previo"
document.getElementById('id1');
document.getElementsByTagName('h1');
document.getElementsByClassName('basic');
