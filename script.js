const homeHam = document.querySelector('#home-open');
const homeClose = document.querySelector('#home-close');
const homeLinks = document.querySelectorAll('.home-link');
const sideNavOpen = document.querySelector('#sidenav-open');
const sideNavClose = document.querySelector('#sidenav-close');
const sideNavbar = document.querySelector('.side-navbar');
const overlay = document.querySelector('.overlay');

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

sideNavOpen.addEventListener('click', () =>{
    sideNavbar.style.right = "0";
    overlay.style.display = "block";
});

sideNavClose.addEventListener('click', () =>{
    sideNavbar.style.right = "-100rem";
    overlay.style.display = "none";
});