// Array de preguntas
const questions = [
    {
        statement: '¿Es JavaScript un lenguaje de programación?',
        options: ['true', 'false'],
        correctAnswer: 'true',
        explanation:
            '¡Correcto! JavaScript es un lenguaje de programación ampliamente usado.',
    },
    {
        statement: '¿HTML es un lenguaje de programación?',
        options: ['true', 'false'],
        correctAnswer: 'false',
        explanation:
            'Correcto, HTML no es un lenguaje de programación, es un lenguaje de marcado.',
    },
    {
        statement: '¿CSS se utiliza para estructurar contenido?',
        options: ['true', 'false'],
        correctAnswer: 'false',
        explanation:
            'No, CSS se usa para estilizar el contenido, no para estructurarlo.',
    },
];

// Variables para controlar el estado actual
let currentQuestionIndex = 0;

// Referencias a los elementos del DOM
const statementDiv = document.getElementById('statement');
const optionsDiv = document.getElementById('options');
const explanationDiv = document.getElementById('explanation');
const continueButton = document.createElement('button');
continueButton.textContent = 'Continuar';
continueButton.style.display = 'none'; // Ocultar inicialmente

// Función para cargar una pregunta
function loadQuestion(index) {
    const question = questions[index];

    // Configurar el enunciado
    statementDiv.textContent = question.statement;

    // Configurar las opciones
    optionsDiv.innerHTML = ''; // Limpiar opciones previas
    question.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        if (option === question.correctAnswer) {
            button.classList.add('correct-answer');
        }
        button.addEventListener('click', () =>
            handleAnswer(button, question.correctAnswer, question.explanation)
        );
        optionsDiv.appendChild(button);
    });

    // Limpiar explicación y ocultar botón "Continuar"
    explanationDiv.textContent = '';
    continueButton.style.display = 'none';
}

// Función para manejar la respuesta
function handleAnswer(button, correctAnswer, explanation) {
    // Deshabilitar todos los botones
    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.disabled = true; // Deshabilitar
        btn.classList.remove('correct', 'incorrect'); // Limpiar clases previas
    });

    // Verificar si la respuesta es correcta
    if (button.textContent === correctAnswer) {
        button.classList.add('correct');
        explanationDiv.textContent = explanation;
    } else {
        button.classList.add('incorrect');
        explanationDiv.textContent = 'Incorrecto. ' + explanation;
    }

    // Mostrar el botón de continuar
    continueButton.style.display = 'block';
}

// Función para continuar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        statementDiv.textContent = '¡Has completado el quiz!';
        optionsDiv.innerHTML = '';
        explanationDiv.textContent = '¡Buen trabajo!';
        continueButton.style.display = 'none';
    }
}

// Configurar el botón "Continuar"
continueButton.addEventListener('click', nextQuestion);
document.body.appendChild(continueButton);

// Cargar la primera pregunta
loadQuestion(currentQuestionIndex);
