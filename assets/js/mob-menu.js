var menuTrigger = document.getElementById('mob-btn').addEventListener('click', mobMenu);

var closeTrigger = document.getElementById('menu-close').addEventListener('click', menuClose);

var menuControl = document.getElementById('mob-menu');

var mobLinks = document.getElementsByClassName('mob-links')


function mobMenu() {
    menuControl.style.display = "block"
} // Opens mobile menu

function menuClose() {
    menuControl.style.display = "none"
} // Closes mobile menu
