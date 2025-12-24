// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Initialize Swiper for Testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// State and City Dropdown Logic
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');

const cityData = {
    'Andhra Pradesh': ['Hyderabad', 'Vijayawada', 'Visakhapatnam'],
    'Assam': ['Guwahati', 'Dibrugarh', 'Silchar'],
    'Bihar': ['Patna', 'Gaya', 'Muzaffarpur'],
    'Delhi': ['New Delhi', 'Noida', 'Gurgaon'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
    'Haryana': ['Gurgaon', 'Faridabad', 'Panipat'],
    'Karnataka': ['Bangalore', 'Mysore', 'Mangalore'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
    'West Bengal': ['Kolkata', 'Howrah', 'Durgapur'],
};

if (stateSelect) {
    stateSelect.addEventListener('change', (e) => {
        const selectedState = e.target.value;
        citySelect.innerHTML = '<option value="">Select City*</option>';
        
        if (selectedState && cityData[selectedState]) {
            cityData[selectedState].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });
}

// Form Submission Handler
document.querySelectorAll('.counselling-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
        form.reset();
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Functionality
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s;
`;
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.background = 'var(--hover-color)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.background = 'var(--primary-color)';
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.course-card, .mentor-item, .difference-card, .ame-detail-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mentors Section Horizontal Scroll Enhancement
const mentorsContainer = document.querySelector('.mentors-container');
if (mentorsContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    mentorsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        mentorsContainer.style.cursor = 'grabbing';
        startX = e.pageX - mentorsContainer.offsetLeft;
        scrollLeft = mentorsContainer.scrollLeft;
    });

    mentorsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        mentorsContainer.style.cursor = 'grab';
    });

    mentorsContainer.addEventListener('mouseup', () => {
        isDown = false;
        mentorsContainer.style.cursor = 'grab';
    });

    mentorsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - mentorsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        mentorsContainer.scrollLeft = scrollLeft - walk;
    });

    mentorsContainer.style.cursor = 'grab';
}

console.log('AME College website loaded successfully!');
