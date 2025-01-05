const DOG_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const DOG_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random';

const imageElement = document.getElementById('dog-image');
const buttons = document.querySelectorAll('.option-button');
const resultMessage = document.getElementById('result-message');
const correctCountElement = document.getElementById('correct-count');
const incorrectCountElement = document.getElementById('incorrect-count');

let correctBreed = '';
let correctCount = 0;
let incorrectCount = 0;

// Fetch dog breeds
async function getBreeds() {
    try {
        const response = await fetch(DOG_BREEDS_URL);
        const data = await response.json();
        return Object.keys(data.message);
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
        alert('Failed to fetch dog breeds. Please try again later.');
        return [];
    }
}

// Fetch random dog image
async function getRandomDogImage() {
    try {
        const response = await fetch(DOG_IMAGE_URL);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
        alert('Failed to fetch dog image. Please try again later.');
        return '';
    }
}

// Setup the quiz
async function setupQuiz() {
    try {
        // Fetch data
        const breeds = await getBreeds();
        const randomImage = await getRandomDogImage();

        if (!randomImage || breeds.length === 0) {
            throw new Error('Failed to load quiz data.');
        }

        // Get correct breed from image URL
        correctBreed = randomImage.split('/')[4];

        // Select two random incorrect options
        const randomBreeds = breeds
            .filter((breed) => breed !== correctBreed)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);

        // Add the correct breed
        randomBreeds.push(correctBreed);
        randomBreeds.sort(() => Math.random() - 0.5);

        // Update the UI
        imageElement.src = randomImage;
        imageElement.alt = correctBreed;

        buttons.forEach((button, index) => {
            button.textContent = randomBreeds[index];
            button.dataset.answer = randomBreeds[index] === correctBreed;
            button.className = 'option-button'; // Reset styles
        });

        resultMessage.textContent = '';
    } catch (error) {
        console.error('Error setting up quiz:', error);
        alert(
            'An error occurred while setting up the quiz. Please refresh the page.'
        );
    }
}

// Handle answer selection
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const isCorrect = button.dataset.answer === 'true';

        if (isCorrect) {
            resultMessage.textContent = 'Correcto! 🎉';
            resultMessage.className = 'result-message correct';
            correctCount++;
            correctCountElement.textContent = correctCount;
            button.classList.add('correct');
        } else {
            resultMessage.textContent = 'Error! 😢';
            resultMessage.className = 'result-message wrong';
            incorrectCount++;
            incorrectCountElement.textContent = incorrectCount;
            button.classList.add('wrong');

            // Highlight the correct answer
            buttons.forEach((btn) => {
                if (btn.dataset.answer === 'true') {
                    btn.classList.add('correct');
                }
            });
        }

        // Disable buttons after selection
        buttons.forEach((btn) => (btn.disabled = true));

        // Setup new quiz after 2 seconds
        setTimeout(() => {
            buttons.forEach((btn) => (btn.disabled = false));
            setupQuiz();
        }, 2000);
    });
});

// Initialize quiz
setupQuiz();
