// Módulo

export function foo() {
    console.log('Soy foo');
}

// 4. Crea una función que cuente la cantidad de palabras en una frase.

export function countWords(sentence = '') {
    const words = sentence.split(' ');
    return words.length;
}

// 2. Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números.
