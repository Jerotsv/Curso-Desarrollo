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

     //Opcion Clase

     function revertStringByArray(value = ''){
        return value.split('').reverse().join('')
     }

     function removesSpaces(value = '') {
        return value.replaceAll(' ', '')
     }

     function removeAccents(value = ''){
        const vocals = 'aeiou'
        const invalids = 'áéíóúü'
        const characters = value.split('')

        for (let i = 0; i < characters.length; i++) {
            const character = characters[i];
           if (invalids.includes(character)) {
                switch (character) {
                    case 'á':
                        characters[i] = vocals[0]
                        break;
                    case 'é':
                        characters[i]= vocals[1]
                        break;
                    case 'í':
                         characters[i]= vocals[2]
                        break;
                    case 'ó':
                        characters[i]= vocals[3]
                        break;
                    case 'ú':
                    case 'ü':
                        characters[i]= vocals[4]
                        break;
                }

           }
            
        }
        return characters.join('');
     }

     function isPalindrome(value = ''){
        const valueLowerCase = value.toLocaleLowerCase()
        //quitar espacios
        //1.usar el string...
        const noSpacesValue = removesSpaces(valueLowerCase)
        //convertir en array
        //const noSpacesValue = valueLowerCase.split(' ').join('')
        const inverseValue = revertStringByArray(noSpacesValue)
        const finalValue = removeAccents(inverseValue)
        return noSpacesValue === inverseValue
        
     }
     let sample = 'atar a la rata'
     console.log(sample, 'is palindrome: ', isPalindrome(sample));
     sample = 'no soy palindromo'
     console.log(sample, 'is palindrome: ', isPalindrome(sample));


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

function isPangram(value = ''){
    const letters = 'abcdefghijklmnñopqrstuvwxyz'
    let validValue = value.toLowerCase()
    validValue = removeAccents(validValue)
    
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        
        if(!validValue.includes(letter))
            return false
        
    }

    return true
}
sample = 'ábcdefghijklmnñopqrstuvwxyz'
console.log(sample, 'is pangram: ', isPangram(sample));
sample = 'hola'
console.log(sample, 'is pangram: ', isPangram(sample));


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

function calculatedAge(year = 0) {
    
    const today = new Date()
    actualYear = today.getFullYear()
    return actualYear - year
}

console.log(calculatedAge(2000));

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

// 9. Crea una función que simule el lanzamiento de un dado de 12 caras e imprime por consola el resultado cada vez que se ejecuta.

function rollDice() {
    const result = Math.trunc(Math.random() * 12 + 1);
    console.log(`El resultado del lanzamiento es: ${result}`);
    return result
}

rollDice()

// 10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

function isLeapYear (year){
    if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
        console.log(`${year} es un año bisiesto`);
    } else {
        console.log(`${year} no es un año bisiesto`);
    }
}

isLeapYear(2024)
isLeapYear(2023)

// 11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

function renderStonePaperScissors(userRoll = '') {
    const rolls = ['piedra', 'papel', 'tijeras'];
    if (!rolls.includes(userRoll)) {
        console.log('Tirada inválida');
        return;
    }
    const rollNumber = Math.round(Math.random() * 2);
    const machineRoll = rolls[rollNumber];

    let winner = 'user';
    if (userRoll === machineRoll) {
        winner = 'empate';
    } else if (userRoll === 'piedra') {
        if (machineRoll === 'papel') {
            winner = 'machine';
        }
        //machineRoll = 'tijeras'
    } else if (userRoll === 'papel') {
        if (machineRoll === 'tijeras') {
            winner = 'machine';
        }
        //machineRoll = 'piedra'
    } else {
        // (userRoll = 'tijera')
        if (machineRoll === 'piedra') {
            winner = 'machine';
        }
        //machineRoll = 'papel'
    }

    console.log('Tu opción (user)', userRoll);
    console.log('Opción de la maquina', machineRoll);
    console.log('Result', winner);
}

function playStonePaperScissors() {
    const rolls = ['piedra', 'papel', 'tijeras'];
    const rollNumber = Math.round(Math.random() * 2);
    renderStonePaperScissors(rolls[rollNumber]);
}

playStonePaperScissors();


// 12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci sin superar un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

function generatorFibonacci(userNumber) {
    let fib = [0, 1]

    for (let i = 2; ; i++) {
        let next = fib[i - 1] + fib[i - 2];
        if (next > userNumber) break
        fib.push(next)
    }

    console.log(`Serie de fibonacci hasta ${userNumber};`, fib.join(', '));
}
    
const limit = 200   
generatorFibonacci(limit);



// 13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

function generatorUserName(names, lastNames) {
    const name = names[Math.floor(Math.random() * names.length)]

    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    const number = Math.floor(Math.random() * 100) + 1

    return `${name} ${lastName} ${number}`
    
}

const names = ['Pepe', 'Jose', 'Jero', 'Luis', 'Victor', 'Irene', 'Andrea']
const lastNames = ['Perez', 'Sanchez', 'Merino', 'Tostado', 'Lopez', 'Gonzalez', 'Haro']
console.log(generatorUserName(names, lastNames));

// 14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

function calculateTip(totalAccount, percentageTip) {
    const tip = (totalAccount * percentageTip) / 100
    const totalPay = totalAccount + tip

    console.log(`Cuenta: ${totalAccount.toFixed(2)}€`);
    console.log(`Propina: ${percentageTip}%: ${tip.toFixed(2)}€`);
    console.log(`Total: ${totalPay.toFixed(2)}€`);
}

calculateTip(120.45, 15)

// // 15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.

function calculateDiscount(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100
    const finalPrice = price - discountAmount

    console.log(`Precio: ${price.toFixed(2)}€`);
    console.log(`Descuento: ${discountPercentage}%: ${discountAmount.toFixed(2)}€`);
    console.log(`Precio final: ${finalPrice.toFixed(2)}€`);
}
0
calculateDiscount(200,35)

// 16. Crea una funcion que sume todos los numeros de un array.

function sumaNumbers() {
    let accumulator = 0;
    for (let i = 0; i < arguments.length; i++) {
        accumulator += arguments[i];
    }
    return accumulator;
}

// totalArray([1,3,4,5,6,7])

console.log(sumaNumbers(1, 4, 5, 6, 7, 8));