import { createHeader } from '../components/header.js';
import { loadAbout } from './about/about.js';
import { createFooter } from './components/footer.js';
import { createMenu } from './components/menu.js';
import { loadContacts } from './contacts/contacts.js';
import { loadPorfolio } from './porfolio/porfolio.js';

function loadIndex() {
    console.log('Loaded main');

    const menuOptions = [
        { path: '/index.html', label: 'Inicio' },
        { path: '/porfolio/porfolio.html', label: 'Porfolio' },
        { path: '/contacts/contacts.html', label: 'Contactos' },
        { path: '/about/about.html', label: 'Acerca de' },
    ];
    const page = location.pathname.split('/').at(-1).split('.').at(0);

    switch (page) {
        case 'porfolio':
            loadPorfolio();
            break;
        case 'about':
            loadAbout();
            break;
        case 'contacts':
            loadContacts();
            break;
        default:
            createHeader('');
    }
    createMenu(menuOptions, 'header', 'beforeend');
    createFooter('body', 'beforeend');
}

loadIndex();
