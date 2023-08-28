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
        document.html.style.overflow = 'hidden'; // Prevent scrolling

        //opening animations
        topLine.style.animation = 'down-rotate 1s ease-out both';
        bottomLine.style.animation = 'up-rotate 1s ease-out both';
        middleLine.style.animation = 'hide 1s ease-out forwards';
    }else{
        navActive = false;
        nav.setAttribute('data-visible', 'false');
        document.body.style.overflow = 'auto'; // Prevent scrolling
        document.html.style.overflow = 'auto'; // Prevent scrolling
        
        //closing animations
        topLine.style.animation = 'up-rotate-reverse 1s ease-out both';
        bottomLine.style.animation = 'down-rotate-reverse 1s ease-out both';
        middleLine.style.animation = 'show-reverse 1s ease-out forwards';
    }

});


// Controls the visibility of the header, depending on position and scrolling
let last_scroll_position = 0;
window.addEventListener('scroll', () => {
    const current_scroll_position = window.scrollY;

    if (current_scroll_position === 0 || current_scroll_position <= 25){
        body.classList.add('scroll_up');
    }
    else if (current_scroll_position > last_scroll_position && !body.classList.contains('scroll_down')){
        body.classList.remove('scroll_up');
        body.classList.add('scroll_down');
    }
    else if (current_scroll_position < last_scroll_position && body.classList.contains('scroll_down')){
        body.classList.remove('scroll_down');
        body.classList.add('scroll_up');
    }
    last_scroll_position = current_scroll_position;
})


// Auto update copyright year
let currentYear = new Date().getFullYear();
document.getElementById('copyYear').textContent = currentYear;

