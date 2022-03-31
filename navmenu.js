const btnMobile = document.getElementById('btn-mobile');
const menuli = document.getElementById('menu');

function toggleMenu(){
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

menuli.addEventListener('click', toggleMenu);