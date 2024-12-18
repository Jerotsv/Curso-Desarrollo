import FACTS from './facts.json' with { type: 'json' };

function learnJSON() {
    const user = {
        name: 'Pepe',
        age: 22,
        birth: new Date(),
    };

    const stringUser = JSON.stringify(user);

    //JSON.parse()

    console.log(user);
    console.log(stringUser);
    console.log('Hola');
    const newObject = JSON.parse(stringUser);
    console.log(newObject);
    newObject.birth = new Date(newObject.birth);
    console.log(newObject);
}

// TODO 1: Declarar y asignar variables que apunten a los elementos correspondientes
// statementElement debe ser el div "statement"
const statementElement = document.querySelector('#statement');
// optionButtons debe ser todos los elementos dentro del div "options"
// const optionButtons = document.querySelector('#options').children()
const optionButtons = document.querySelectorAll('#options button');
// explanationElement debe ser el div "explanation"
const explanationElement = document.querySelector('#explanation');

// TODO 2: Declarar y asignar una variable llamada fact Su valor debe ser un objeto con una declaración, respuesta verdadera/falsa y explicación
const fact = FACTS[Math.floor(Math.random() * FACTS.length)];

// TODO 3: Establecer el texto del elemento statement en la propiedad correspondiente del objeto fact
statementElement.innerHTML += ` <b>${fact.statement}</b>`;

// TODO 4: Declarar funciones disable y enable para establecer o eliminar el atributo "disabled" de un elemento de botón dado
// disable(button) debe establecer el atributo "disabled" del elemento de botón en el valor ""
// enable(button) debe eliminar el atributo "disabled" del elemento de botón

const disable = (button) => button.setAttribute('disabled', '');
const enable = (button) => button.removeAttribute('disabled');

// TODO 5: Declarar una función isCorrect que compare
// una suposición con la respuesta correcta
// isCorrect(guess) debe devolver true si la suposición coincide con la respuesta del hecho

const isCorrect = (guess) => guess === fact.answer;

// Manejador del evento click
const handleCLickAnswer = (event) => {
    const elementButton = event.target;

    // TODO 6B: Dentro de la función del controlador de eventos,
    // mostrar la explicación del hecho estableciendo el texto del elemento de explicación
    explanationElement.innerHTML = fact.explicación;

    // TODO 7: Dentro de la función del controlador de eventos,
    // Usar un bucle for para deshabilitar todos los botones de opción
    optionButtons.forEach((button) => disable(button));

    // TODO 8: Dentro de la función del controlador de eventos, obtener el valor supuesto del botón clicado
    // Usar una condición para comparar la suposición con la respuesta del hecho y agregar la clase "correct"/"incorrect" según corresponda

    if (isCorrect(elementButton.textContent)) {
        elementButton.classList.add('correct');
    } else {
        elementButton.classList.add('incorrect');
    }
};

// TODO 6A: Usar un bucle for para agregar una escucha de eventos de clic a cada uno de los optionButtons
optionButtons.forEach((button) =>
    button.addEventListener('click', handleCLickAnswer)
);