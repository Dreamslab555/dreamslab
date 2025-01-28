// Contact Form Submission
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado con éxito. Pronto nos pondremos en contacto.');
    form.reset();
});

// Example Fade-In Animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});
