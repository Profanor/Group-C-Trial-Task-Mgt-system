// Select all elements with the class 'neomorphic-link'
const links = document.querySelectorAll('.neomorphic-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        link.blur();
    });
});
