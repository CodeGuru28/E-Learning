const homeHam = document.querySelector('#home-open');
const homeClose = document.querySelector('#home-close');
const navOpen = document.querySelector('#nav-open');
const homeLinks = document.querySelectorAll('.home-link');

homeHam.addEventListener('click', () =>{
    homeHam.style.display = 'none';
    homeClose.style.display = 'block';
    homeLinks.forEach((link) => {
        link.style.display = 'block';
    })
});

homeClose.addEventListener('click', () =>{
    homeHam.style.display = 'block';
    homeClose.style.display = 'none';
    homeLinks.forEach((link) => {
        link.style.display = 'none';
    })
});