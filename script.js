window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('nav .ul'),
    wrap = document.querySelector('header .wrapper'),
    menuItem = document.querySelectorAll('header .wrapper nav'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        wrap.classList.toggle('wrapper-active');
        // menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            wrap.classList.toggle('wrapper-active');
        });
    });
});