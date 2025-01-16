<<<<<<< HEAD
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
=======
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
>>>>>>> 17af2ffd747f024365724af53379530b7056c42b
