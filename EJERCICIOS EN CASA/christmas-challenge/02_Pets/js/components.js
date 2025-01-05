function renderHeader() {
    return `
        <h1>Lista de Mascotas</h1>
        <nav>
            <ul>
                <li><a href="#" id="home-link">Home</a></li>
                <li><a href="#" id="list-link">Lista</a></li>
                <li><a href="#" id="add-link">Añadir</a></li>
            </ul>
        </nav>
    `;
}

function renderFooter() {
    return `
        <p>&copy; 2025 Pet List</p>
    `;
}

function renderPetItem(pet) {
    return `
        <li>
            ${pet.name} (${pet.especie} - ${pet.raza})
            <input type="checkbox" class="adopt-checkbox" data-id="${pet.id}"> Adoptar
        </li>
    `;
}

function renderPetList(pets) {
    let html = '<h2>Lista de Mascotas</h2><ul>';
    pets.forEach((pet) => {
        if (!pet.isAdopted) {
            html += renderPetItem(pet);
        }
    });
    html += '</ul>';
    return html;
}

function renderAddForm() {
    return `
        <h2>Añadir Mascota</h2>
        <form id="add-pet-form">
            <select id="pet-especie" required>
                <option value="" disabled selected>Tipo de animal</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
            </select>
            <input type="text" id="pet-name" placeholder="Nombre" required>
            <input type="text" id="pet-raza" placeholder="Raza/Especie" required>
            <button type="submit">Añadir</button>
        </form>
    `;
}
