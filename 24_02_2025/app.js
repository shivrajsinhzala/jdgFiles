const menuIcon = document.getElementById('menuIcon');
const firstChild = menuIcon.getElementsByTagName('div')[0]; 
const middleChild = menuIcon.getElementsByTagName('div')[1];
const lastChild = menuIcon.getElementsByTagName('div')[2];



menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    middleChild.classList.toggle('letsGo');
    firstChild.classList.toggle('firstRotate');
    lastChild.classList.toggle('lastRotate');
    document.getElementById('nav').classList.toggle('nav-active');
});