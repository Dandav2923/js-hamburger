const element = document.querySelector('.header-right > a');
const elementAttivo = document.querySelector('header .hamburger-menu');
const iconCross = document.querySelector ('.hamburger-menu > a');
 
element.addEventListener('click',
function() {
    elementAttivo.classList.add('active');
});
iconCross.addEventListener('click', 
function() {
    elementAttivo.classList.remove('active');
}
);