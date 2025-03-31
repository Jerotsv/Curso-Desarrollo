const charactersList = document.querySelector('.characters-list');
const communications = document.querySelector('.comunications');
const communicationsText = document.querySelector('.comunications__text');
const communicationsPicture = document.querySelector('.comunications__picture');

const emojis = {
    king: '👑',
    fighter: '🗡',
    adviser: '🎓',
    squire: '🛡',
};

// Renderiza las tarjetas
function renderCards(data) {
    charactersList.innerHTML = '';
    data.forEach((character) => {
        const li = document.createElement('li');
        li.classList.add('character', 'col');

        li.innerHTML = `
      <div class="card character__card">
        <img 
          src="./assets/img/${character.name.toLowerCase()}.jpg" 
          alt="${character.name} ${character.family}" 
          class="character__picture card-img-top ${
              character.isAlive ? '' : 'head-down'
          }"
        />
        <div class="card-body">
          <h2 class="character__name card-title h4">${character.name} ${
            character.family
        }</h2>
          <div class="character__info">
            <ul class="list-unstyled metadata">
              <li>Edad: ${character.age} años</li>
              <li>Estado: 
                <i class="fas fa-thumbs-down ${
                    !character.isAlive ? 'text-danger' : ''
                }"></i>
                <i class="fas fa-thumbs-up ${
                    character.isAlive ? 'text-success' : ''
                }"></i>
              </li>
            </ul>
          </div>
          <div class="character__overlay">
            <ul class="list-unstyled">
              ${
                  character.reignYears
                      ? `<li>Años de reinado: ${character.reignYears}</li>`
                      : ''
              }
              ${character.weapon ? `<li>Arma: ${character.weapon}</li>` : ''}
              ${
                  character.skillLevel
                      ? `<li>Destreza: ${character.skillLevel}</li>`
                      : ''
              }
              ${
                  character.adviseTo
                      ? `<li>Asesora a: ${character.adviseTo.name}</li>`
                      : ''
              }
              ${
                  character.servesTo
                      ? `<li>Sirve a: ${character.servesTo.name}</li>`
                      : ''
              }
            </ul>
            <div class="character__actions">
              <button class="character__action btn" data-action="speak" data-name="${
                  character.name
              }">habla</button>
              <button class="character__action btn" data-action="die" data-name="${
                  character.name
              }">muere</button>
            </div>
          </div>
        </div>
        <i class="emoji">${emojis[character.category]}</i>
      </div>
    `;

        charactersList.appendChild(li);
    });
}

// Eventos para hablar y morir
charactersList.addEventListener('click', (e) => {
    if (e.target.matches('[data-action="speak"]')) {
        const name = e.target.dataset.name;
        const character = characters.find((char) => char.name === name);

        communications.classList.add('on');
        communicationsText.textContent = character.message;
        communicationsPicture.src = `./assets/img/${character.name.toLowerCase()}.jpg`;

        // Cambiar pulgar hacia arriba a verde
        const thumbsUpIcon = e.target
            .closest('.card')
            .querySelector('.fa-thumbs-up');
        thumbsUpIcon.classList.add('text-success');
        thumbsUpIcon.classList.remove('text-secondary');

        setTimeout(() => {
            communications.classList.remove('on');
        }, 2000);
    }

    if (e.target.matches('[data-action="die"]')) {
        const name = e.target.dataset.name;
        const character = characters.find((char) => char.name === name);

        character.isAlive = false;
        renderCards(characters);

        // Cambiar pulgar hacia abajo a rojo
        const thumbsDownIcon = e.target
            .closest('.card')
            .querySelector('.fa-thumbs-down');
        thumbsDownIcon.classList.add('text-danger');
        thumbsDownIcon.classList.remove('text-secondary');
    }
});

// Carga dinámica del JSON
let characters = [];
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        characters = data;
        renderCards(characters);
    })
    .catch((error) => console.error('Error al cargar el JSON:', error));
