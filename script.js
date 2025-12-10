// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Testimonials Carousel
const testimonials = [
    {
        name: "Juliana M.",
        role: "Paciente há 2 anos",
        content: "A Dra. Marina transformou minha vida. Após anos lutando contra a ansiedade, finalmente encontrei paz e equilíbrio. O acolhimento dela é genuíno e a abordagem extremamente eficaz.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Ricardo S.",
        role: "Terapia de casal",
        content: "Minha esposa e eu estávamos à beira do divórcio. A terapia com a Dra. Marina nos ajudou a reconstruir nossa comunicação e hoje temos um casamento mais forte do que nunca.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Camila F.",
        role: "Paciente há 1 ano",
        content: "Depois de perder minha mãe, achei que nunca mais seria feliz. A Dra. Marina me guiou pelo processo de luto com uma sensibilidade incrível. Sou eternamente grata.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Fernando L.",
        role: "Orientação de carreira",
        content: "Estava completamente esgotado pelo trabalho. Com a ajuda da Dra. Marina, consegui entender minhas prioridades e fazer mudanças que melhoraram drasticamente minha qualidade de vida.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    document.getElementById('testimonialText').textContent = testimonial.content;
    document.getElementById('testimonialImage').src = testimonial.image;
    document.getElementById('testimonialImage').alt = testimonial.name;
    document.getElementById('testimonialName').textContent = testimonial.name;
    document.getElementById('testimonialRole').textContent = testimonial.role;

    // Update active dots
    document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Update dots on click
document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonial();
    });
});

// Initialize testimonial
updateTestimonial();

// Auto-rotate testimonials every 8 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 8000);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        phone: contactForm.querySelector('input[type="tel"]').value,
        message: contactForm.querySelector('textarea').value
    };

    // Here you would normally send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Obrigado pelo contato! Responderemos em breve.');
    contactForm.reset();
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and other elements
document.querySelectorAll('.service-card, .contact-item, .credential-item').forEach(element => {
    element.classList.add('scroll-fade-in');
    observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});
