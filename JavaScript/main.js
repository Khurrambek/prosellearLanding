//Scroll header effect

const navBar = document.querySelector('nav');
console.log(navBar);
window.addEventListener('scroll', () => {
    let one = navBar.classList.toggle('scroll-menu', window.scrollY > 150);
    
})