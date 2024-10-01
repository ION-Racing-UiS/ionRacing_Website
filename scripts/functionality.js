//Navbar
const nav = document.querySelector('.main_nav');
const navToggle = document.querySelector('.nav_toggle_btn');
const topLine = document.getElementById('top-line');
const middleLine = document.getElementById('middle-line');
const bottomLine = document.getElementById('bottom-line');
const body = document.body;

let navActive = false;

navToggle.addEventListener('click', () => {
    if (navActive === false){
        navActive = true;
        nav.setAttribute('data-visible', 'true');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        //opening animations
        topLine.style.animation = 'down-rotate 1s ease-out both';
        bottomLine.style.animation = 'up-rotate 1s ease-out both';
        middleLine.style.animation = 'hide 1s ease-out forwards';
    }else{
        navActive = false;
        nav.setAttribute('data-visible', 'false');
        document.body.style.overflow = 'auto'; // Prevent scrolling
        
        //closing animations
        topLine.style.animation = 'up-rotate-reverse 1s ease-out both';
        bottomLine.style.animation = 'down-rotate-reverse 1s ease-out both';
        middleLine.style.animation = 'show-reverse 1s ease-out forwards';
    }

});

// Auto update copyright year
let currentYear = new Date().getFullYear();
document.getElementById('copyYear').textContent = currentYear;

