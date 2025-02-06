export const menuItems = `
    <li class="menu-tablet"><a href="./players.html">Players</a></li>
    <li class="menu-tablet"><a href="./ttt.html">3nR (TTT)</a></li>
    <li class="menu-tablet"><a href="./quiz.html">Quiz JS</a></li>
    <li class="menu-tablet"><a href="./canis.html">Canis</a></li>
`;

export function createHeader(title, isBrown = true) {
    let img = '';
    let cssClass = 'main-header';
    if (isBrown) {
        img = './assets/logo-golden-bisque.svg';
        cssClass += ' header-brown';
    } else {
        img = './assets/logo-brown-bisque.svg';
    }

    const headerTemplate = `
    <header class="${cssClass}">

        <nav>
            <ul>
            <li class="menu-header">
                <a href="./index.html">
                   <img src=${img} width="50" alt="Logo">
                   <h1 id="header1" data-id="1" class="h2">${title}</h1>
                </a>
            </li>
            <li class="menu-mobile">
                <a href="#">
                <span class="fa-solid fa-bars"></span>
                </a>
            </li>
            ${menuItems}
            </ul>
        </nav>


    </header>
    `;
    return headerTemplate;
}

export function startHeader() {
    const elementBurger = document.querySelector('.fa-bars');
    const elementDialog = document.querySelector('dialog');
    const elementClose = document.querySelector('.close');

    function handlerClick() {
        elementDialog.showModal();
    }

    function handleClose() {
        elementDialog.close();
    }

    elementBurger.addEventListener('click', handlerClick);
    elementClose.addEventListener('click', handleClose);
}
