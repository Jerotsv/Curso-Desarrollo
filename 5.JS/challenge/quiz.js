// Respuesta correcta
const correctAnswer = true;

// Selección de botones y explicación
const buttons = document.querySelectorAll('#options button');
const explanationDiv = document.getElementById('explanation');

// Agregar evento a cada botón
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        // Quitar clases previas de todos los botones
        buttons.forEach((btn) => {
            btn.classList.remove('correct', 'incorrect');
        });

        // Verificar si el botón tiene la clase "correct-answer"
        if (button.classList.contains('correct-answer')) {
            button.classList.add('correct');
            explanationDiv.textContent =
                '¡Correcto! Brendan Eich creó JS en Netscape en 1995. La versión inicial del lenguaje fue escrita en solo 10 días.';
        } else {
            button.classList.add('incorrect');
            explanationDiv.textContent =
                'Incorrecto. Brendan Eich creó JS en Netscape en 1995. La versión inicial del lenguaje fue escrita en solo 10 días.';
        }
    });
});
