document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector('header')


document.querySelectorAll('.submenuContainer').forEach(item => {
    item.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 80)
})

// Open menu
let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navList.classList.toggle('open')
}

const servicesMenu = document.querySelector('.has-submenu');
const submenu = document.querySelector('.submenu');

let submenuTimeout;

// Mostrar el submenu al entrar
servicesMenu.addEventListener('mouseenter', () => {
  clearTimeout(submenuTimeout);
  submenu.classList.add('show');
});

// Iniciar temporizador al salir del área principal
servicesMenu.addEventListener('mouseleave', () => {
  submenuTimeout = setTimeout(() => {
    submenu.classList.remove('show');
  }, 300); // Tiempo de gracia en milisegundos
});

// Cancelar el cierre si se entra al submenu
submenu.addEventListener('mouseenter', () => {
  clearTimeout(submenuTimeout);
});

// Cerrar submenu si se sale también de él
submenu.addEventListener('mouseleave', () => {
  submenuTimeout = setTimeout(() => {
    submenu.classList.remove('show');
  }, 300);
});


})