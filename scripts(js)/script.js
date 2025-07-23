
// laptop images slider JAVASCRIPT code
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.screen-overlay .slide');
    const nextBtn = document.querySelector('.nav.right');
    const prevBtn = document.querySelector('.nav.left');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize
});


// TESTIMONIAL SECTION JAVASCIRPT

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.testimonial-nav.right');
    const prevBtn = document.querySelector('.testimonial-nav.left');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize
});



// FREQUENTLY AsKDE QUESTION JAVA SCRIPT

var acc = document.getElementsByClassName("according");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    });
}