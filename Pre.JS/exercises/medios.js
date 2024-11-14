// 1. Crea una función que elimine el primer y último caracter de un string recibido por parámetros.

const removeLastFirst = function(value = ''){
   let result = ''
    for (let i = 1; i < value.length-1; i++) {
        result += value[i];
    }
    return result
}

console.log(removeLastFirst('Patata'));


// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.
    
    //Opción Jero
     function isPalindrome(word){
        return word === word.split('').reverse().join('')
     }
     console.log(isPalindrome('radar'));
     console.log(isPalindrome('hola'));

    // //Opción Chat gpt
    // function esPalindromo(palabra) {
    //     // Convertimos la palabra a minúsculas para evitar problemas de mayúsculas
    //     // y eliminamos espacios o caracteres no alfanuméricos
    //     let palabraLimpia = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
        
    //     // Comparamos la palabra limpia con su versión invertida
    //     if (palabraLimpia === palabraLimpia.split('').reverse().join('')) {
    //       console.log(`"${palabra}" es un palíndromo`);
    //       return true;
    //     } else {
    //       console.log(`"${palabra}" no es un palíndromo`);
    //       return false;
    //     }
    //   }
      
    //   // Ejemplo de uso
    //   esPalindromo("anilina");             // "anilina" es un palíndromo
    //   esPalindromo("Hola");                // "Hola" no es un palíndromo
    //   esPalindromo("A man a plan a canal Panama"); // "A man a plan a canal Panama" es un palíndromo

// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.


const countVocals = function(value=('')) {
    
    const lowerValue = value.toLowerCase()
    let accumulator = 0
    const vocals = 'aeiouáéíóúü'

    for (let i = 0; i < lowerValue.length; i++) {
        const item = lowerValue[i]
        accumulator += vocals.includes(item)
        //if (vocals.includes(item)) {
        //  accumulator++
        //}
    }
    return accumulator
}

console.log(countVocals('El Murciélago verde')); //8


// 4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).


 


// 5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

function containAllVocals(text) {
    const lowerText = text.toLowerCase()
    const vocals = 'aeiou'
    for (let vocal of vocals) {
        
        if (!lowerText.includes(vocal)) {
            return false
        }
    }
return true

}

console.log(containAllVocals('Hola'));
console.log(containAllVocals('Ei hola mamut'));


// 6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

function countDown(numero) {
    for (let i = numero; i >= 0; i--) {
        console.log(i); 
    }
}


countDown(8); 

// 7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

// 8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

// function checkIfAdult(age) {
//     if (age >= 18) {
//         console.log("La persona es mayor de edad");
//         return true;
//     } else {
//         console.log("La persona es menor de edad");
//         return false;
//     }
// }

// checkIfAdult(20); 
// checkIfAdult(16); 


const checkIfAdult = function(age) {
    if (age >= 18) {
        console.log("La persona es mayor de edad");
        return true;
    } else {
        console.log("La persona es menor de edad");
        return false;
    }
}

checkIfAdult(20); 
checkIfAdult(16); 

// 9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

// 10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

// 11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

// 12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

// 13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

// 14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

// // 15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.