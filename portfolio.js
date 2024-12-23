const button = document.querySelector(".hamburger")
const spin = document.querySelector(".hamburger-inner")
const header = document.querySelector("header")
const dropdown = document.querySelector(".dropdown")
let link = document.querySelectorAll("a")


button.addEventListener("click", ()=>{
    button.classList.toggle("is-active")
    if (dropdown.style.display == "flex") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display ="flex"
    }
}
)

const moon = document.querySelector(".fa-moon")
const sun = document.querySelector(".fa-sun")
const body = document.querySelector("body")

moon.addEventListener("click", ()=>{
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    header.style.backgroundColor = "gray"
    dropdown.classList.remove("light-mode")
    dropdown.classList.add("dark-mode")
    dropdown.style.backgroundColor = "#666362"
    for (let i=0; i<4; i++) {
       link[i].style.color = "white"
}

})

sun.addEventListener("click", ()=>{
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    header.style.backgroundColor = "snow"
    dropdown.classList.remove("dark-mode")
    dropdown.classList.add("light-mode")
    dropdown.style.backgroundColor = "snow"
    for (let i=0; i<4; i++) {
       link[i].style.color = "black"
}
})





const btn = document.getElementById('buttons');

// Function to validate the form
function validateForm(event) {
    // Get the form elements
    const name = document.getElementById('from_name');
    const email = document.getElementById('email_id');
    const message = document.getElementById('message');
    
    // Name validation: check if empty
    if (name.value.trim() === '') {
        alert("Please enter your name.");
        name.focus();
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // Email validation: check if valid format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.focus();
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // Message validation: check if empty
    if (message.value.trim() === '') {
        alert("Please enter your message.");
        message.focus();
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // If all validations pass, return true
    return true;
}

// Add event listener to the form for submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm(event)) {
        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_74og99u';

        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation items
    const aboutLink = document.getElementById('about');
    const skillsLink = document.getElementById('skills');
    const projectsLink = document.getElementById('projects');
    const contactLink = document.getElementById('contact');

    // Add scroll into view functionality
    aboutLink.addEventListener('click', function () {
        document.querySelector('.slide-in-right').scrollIntoView({ behavior: 'smooth' });
        dropdown.style.display = 'none'
        button.classList.toggle("is-active")
    });

    skillsLink.addEventListener('click', function () {
        document.querySelector('.slide-in-left').scrollIntoView({ behavior: 'smooth' });
        dropdown.style.display = 'none'
        button.classList.toggle("is-active")
    });

    projectsLink.addEventListener('click', function () {
        document.querySelector('.project-header').scrollIntoView({ behavior: 'smooth' });
        dropdown.style.display = 'none'
        button.classList.toggle("is-active")
    });

    contactLink.addEventListener('click', function () {
        document.querySelector('aside').scrollIntoView({ behavior: 'smooth' });
        dropdown.style.display = 'none'
        button.classList.toggle("is-active")
    });
});
