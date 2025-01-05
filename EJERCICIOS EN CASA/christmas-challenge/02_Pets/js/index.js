document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const content = document.getElementById('content');

    header.innerHTML = renderHeader();
    footer.innerHTML = renderFooter();

    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadHomePage();
    });

    document.getElementById('list-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadListPage();
    });

    document.getElementById('add-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadAddPage();
    });

    function loadHomePage() {
        content.innerHTML =
            '<h2>Bienvenido a Pet List</h2><p>Esta es la página de inicio.</p>';
    }

    function loadListPage() {
        const pets = getPets();
        content.innerHTML = renderPetList(pets);

        document.querySelectorAll('.adopt-checkbox').forEach((checkbox) => {
            checkbox.addEventListener('change', (e) => {
                const petId = parseInt(e.target.getAttribute('data-id'));
                adoptPet(petId);
            });
        });
    }

    function loadAddPage() {
        content.innerHTML = renderAddForm();

        const form = document.getElementById('add-pet-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('pet-name').value;
            const especie = document.getElementById('pet-especie').value;
            const raza = document.getElementById('pet-raza').value;
            addPet(name, especie, raza);
        });
    }

    function getPets() {
        const pets = localStorage.getItem('pets');
        return pets ? JSON.parse(pets) : [];
    }

    function savePets(pets) {
        localStorage.setItem('pets', JSON.stringify(pets));
    }

    function addPet(name, especie, raza) {
        const pets = getPets();
        const newPet = {
            id: pets.length + 1,
            name: name,
            especie: especie,
            raza: raza,
            isAdopted: false,
            dueno: null,
        };
        pets.push(newPet);
        savePets(pets);
        loadListPage();
    }

    function adoptPet(id) {
        const pets = getPets();
        const petIndex = pets.findIndex((pet) => pet.id === id);
        if (petIndex !== -1) {
            pets[petIndex].isAdopted = true;
            savePets(pets);
            loadListPage();
        }
    }

    loadHomePage();
});
