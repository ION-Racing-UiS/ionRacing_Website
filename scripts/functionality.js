//Navbar
const nav = document.querySelector('.main_nav');
const navToggle = document.querySelector('.nav_toggle_btn');
const body = document.body;

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === 'false'){
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        document.body.classList.add('unscrollable');
    }
    else{
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        body.classList.remove('unscrollable');
    }
});


let last_scroll_position = 0;
window.addEventListener('scroll', () => {
    const current_scroll_position = window.scrollY;

    if (current_scroll_position < 0){
        body.classList.remove('scroll_up');
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

