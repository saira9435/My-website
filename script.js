const navLinks = document.querySelectorAll('.nav-link');
const contents = document.querySelectorAll('.content');

function showSection(sectionId) {
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});


const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    console.log('Form submitted:', { name, email, message });
    alert("Form has been submitted!")

    form.reset();
});


showSection('home');


